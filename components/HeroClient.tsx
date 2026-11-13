"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site, waLink } from "@/lib/site";
import { Arrow, Star } from "./icons";

type Props = { poster: string; desktop: string | null; mobile: string | null };

const ease = [0.16, 1, 0.3, 1] as const;

const lines = ["Creamos", "momentos", "de oro"];

export function HeroClient({ poster, desktop, mobile }: Props) {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const hasVideo = Boolean(desktop || mobile);

  // Respeta "reducir movimiento": el video queda en pausa
  useEffect(() => {
    if (reduce && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [reduce]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section ref={ref} className="grain relative h-svh min-h-[600px] overflow-hidden bg-night" aria-label="Inicio">
      <motion.div style={{ scale }} className="absolute inset-0">
        {hasVideo ? (
          <video
            ref={videoRef}
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
          >
            {mobile && <source src={mobile} type="video/mp4" media="(max-width: 767px)" />}
            <source src={(desktop ?? mobile)!} type="video/mp4" />
          </video>
        ) : (
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover object-[50%_30%]" />
          </motion.div>
        )}
      </motion.div>

      {/* Capas de color de marca para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-night/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/50 via-transparent to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/60 via-night/15 to-transparent" />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-4 pt-24 pb-20 sm:px-8 sm:pb-24 lg:pb-[min(7rem,10svh)]"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mb-6 flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-white/80 sm:tracking-[0.3em] uppercase sm:text-sm"
        >
          <Star className="size-3.5 animate-twinkle text-ember" />
          Eventos deportivos · {site.city}
        </motion.p>

        <h1 className="display text-[min(15vw,11svh)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:text-[min(11vw,15svh)] lg:text-[min(9.5vw,16svh)] xl:text-[min(8.5rem,16svh)]">
          <span className="sr-only">Star Shine: creamos momentos de oro, donde la estrella eres tú</span>
          {lines.map((line, i) => (
            <span key={line} aria-hidden className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className={`block ${i === 2 ? "text-gradient" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          aria-hidden
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9, ease }}
          className="mt-1 font-accent text-[5.4vw] leading-none text-ember drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-[min(3.9vw,5svh)]"
        >
          {site.claim}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-ember px-8 py-4 font-bold tracking-wide uppercase transition hover:bg-white hover:text-night"
          >
            Cotiza tu evento
            <Arrow className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 font-bold tracking-wide uppercase backdrop-blur-sm transition hover:border-white hover:bg-white/10"
          >
            Ver servicios
          </a>
        </motion.div>
      </motion.div>

      {hasVideo && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pausar video" : "Reproducir video"}
          className="absolute right-4 bottom-6 z-10 grid size-11 place-items-center rounded-full border border-white/30 bg-black/20 backdrop-blur sm:right-8"
        >
          {playing ? (
            <span className="flex gap-1"><span className="h-3.5 w-1 bg-white" /><span className="h-3.5 w-1 bg-white" /></span>
          ) : (
            <span className="ml-0.5 size-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
          )}
        </button>
      )}

      <div aria-hidden className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-white/60 uppercase md:flex">
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-white"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </section>
  );
}
