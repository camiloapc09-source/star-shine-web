"""Monta el hero de Star Shine: tríptico 16:9 (desktop) y secuencia 9:16 (móvil).

Uso (desde la carpeta "Star Shine Web"):
    python web/scripts/montar-hero.py "." "web/public/video"

Necesita ffmpeg. Lee los clips de "Videos Flow - imagenes/" y el reel "LA DISTANCIA*.mp4".
Cada segmento es (clip, segundo_inicio, segundo_fin). Edita las listas para cambiar el montaje.
"""
import glob
import os
import subprocess
import sys

base, out = sys.argv[1], sys.argv[2]
flow = os.path.join(base, "Videos Flow - imagenes")
pick = lambda pat: glob.glob(os.path.join(flow, pat))[0]
SRC = {
    "pair": pick("Beach_volleyball_players_bumping*.mp4"),
    "dive": pick("Female_volleyball_player_diving*.mp4"),
    "hit": pick("Female_volleyball_player_hitting*.mp4"),
    "five": pick("Teammates_high_five*.mp4"),
    "back": pick("Volleyball_player_watching*.mp4"),
    "reel": glob.glob(os.path.join(base, "LA DISTANCIA*.mp4"))[0],
}
GRADE = "eq=contrast=1.06:saturation=1.08"


def build(columns, w, h, dest, crf, maxrate):
    args, filters, labels, idx = [], [], [], 0
    for c, segs in enumerate(columns):
        seg_labels = []
        for key, a, b in segs:
            args += ["-ss", str(a), "-t", str(b - a), "-i", SRC[key]]
            lab = f"s{idx}"
            filters.append(
                f"[{idx}:v]fps=30,scale={w}:{h}:force_original_aspect_ratio=increase,"
                f"crop={w}:{h},setsar=1,setpts=PTS-STARTPTS[{lab}]"
            )
            seg_labels.append(f"[{lab}]")
            idx += 1
        filters.append(f"{''.join(seg_labels)}concat=n={len(seg_labels)}:v=1:a=0[c{c}]")
        labels.append(f"[c{c}]")
    if len(labels) > 1:
        filters.append(f"{''.join(labels)}hstack={len(labels)},{GRADE},format=yuv420p[v]")
    else:
        filters.append(f"{labels[0]}{GRADE},format=yuv420p[v]")
    cmd = ["ffmpeg", "-v", "error", "-y", *args, "-filter_complex", ";".join(filters),
           "-map", "[v]", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", str(crf),
           "-maxrate", maxrate, "-bufsize", "3M", "-movflags", "+faststart", dest]
    subprocess.run(cmd, check=True)


# Tríptico: cada columna suma 18 s y corta en momentos distintos
triptych = [
    [("dive", 0, 5), ("reel", 2, 5), ("five", 0.3, 4.3), ("reel", 12, 15), ("hit", 0, 3)],
    [("back", 0, 4.5), ("reel", 6, 9), ("pair", 0, 4.5), ("reel", 17, 20.5), ("reel", 9, 11.5)],
    [("reel", 0, 3), ("hit", 0, 3.5), ("reel", 14, 17), ("back", 1, 5), ("pair", 0.5, 5)],
]
build(triptych, 640, 1080, os.path.join(out, "hero.mp4"), 29, "1.8M")

mobile = [[
    ("dive", 0, 4.5), ("reel", 2, 5), ("pair", 0, 4), ("reel", 6, 9),
    ("five", 0.3, 3.8), ("reel", 12, 15.5), ("hit", 0, 3),
]]
build(mobile, 720, 1280, os.path.join(out, "hero-mobile.mp4"), 29, "1.2M")
print("ok")
