import Image from "next/image";
import { lines } from "@/lib/site";
import { Arrow, Star } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Las líneas de servicio de Star Shine */
export function Lines() {
  return (
    <section id="lineas" className="mx-auto max-w-[1440px] scroll-mt-20 px-4 pt-24 sm:px-8 lg:pt-32">
      <SectionHeading eyebrow="Nuestras líneas" title={<>Lo que <span className="text-gradient">hacemos</span></>} />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {lines.map((l, i) => (
          <Reveal key={l.key} delay={i * 0.1} as="article" className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10">
            {l.image ? (
              <>
                <Image src={l.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-lavender to-brand opacity-70 mix-blend-multiply" />
              </>
            ) : (
              <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-brand via-night-3 to-night">
                <Star className="absolute -top-10 -right-10 size-64 text-lavender/20 transition-transform duration-[1.5s] group-hover:rotate-45" />
                <Star className="absolute top-24 right-28 size-16 text-ember/70" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-transparent" />
            <a href={l.href} className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-xs font-semibold tracking-[0.25em] text-lilac uppercase">{l.audience}</span>
              <h3 className="display mt-3 text-4xl">{l.title}</h3>
              <p className="mt-3 font-light text-white/80">{l.text}</p>
              <span className="mt-6 inline-flex w-fit items-center gap-3 border-b-2 border-ember pb-1 font-bold tracking-wide uppercase">
                Conoce más
                <Arrow className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
