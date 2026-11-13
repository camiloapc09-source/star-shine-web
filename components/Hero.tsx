import fs from "node:fs";
import path from "node:path";
import { heroMedia } from "@/lib/site";
import { HeroClient } from "./HeroClient";

const exists = (p: string) => fs.existsSync(path.join(process.cwd(), "public", p));

/** Activa el video automáticamente cuando el archivo existe en /public/video */
export function Hero() {
  return (
    <HeroClient
      poster={heroMedia.poster}
      desktop={exists(heroMedia.desktop) ? heroMedia.desktop : null}
      mobile={exists(heroMedia.mobile) ? heroMedia.mobile : null}
    />
  );
}
