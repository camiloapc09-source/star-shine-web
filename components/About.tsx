import Image from "next/image";
import { about, pillars, site } from "@/lib/site";
import { Star } from "./icons";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-[1440px] scroll-mt-20 px-4 py-24 sm:px-8 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src="/images/celebracion.webp" alt="Grupo celebrando al aire libre" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/70 to-transparent" />
          </div>
          <p className="absolute -right-2 -bottom-6 rounded-2xl bg-ember px-5 py-3 whitespace-nowrap font-accent text-lg leading-tight shadow-xl sm:-right-6 sm:px-6 sm:text-2xl">
            {site.claim}.
          </p>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-lilac uppercase">
              <Star className="size-3 text-ember" /> Nosotros
            </p>
            <h2 className="display text-4xl sm:text-5xl lg:text-7xl">{about.title}</h2>
            <p className="mt-6 text-lg font-light text-white/75">{about.text}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-night-2 p-6">
              <h3 className="font-bold tracking-wider text-lilac uppercase">Misión</h3>
              <p className="mt-3 text-sm font-light text-white/75">{about.mission}</p>
            </Reveal>
            <Reveal delay={0.2} className="rounded-2xl border border-white/10 bg-night-2 p-6">
              <h3 className="font-bold tracking-wider text-lilac uppercase">Visión</h3>
              <p className="mt-3 text-sm font-light text-white/75">{about.vision}</p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <Reveal>
          <h3 className="display text-3xl sm:text-5xl">Pilares de trabajo</h3>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-night-2 p-6 transition-colors duration-500 hover:bg-brand"
            >
              <span className="display text-4xl text-white/15 transition-colors group-hover:text-ember">0{i + 1}</span>
              <h4 className="mt-6 font-bold">{p.title}</h4>
              <p className="mt-2 text-sm font-light text-white/65 group-hover:text-white/85">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
