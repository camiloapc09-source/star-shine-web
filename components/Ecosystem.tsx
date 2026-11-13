import Image from "next/image";
import { ecosystem, waLink } from "@/lib/site";
import { Arrow } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Ecosystem() {
  return (
    <section id="ecosistema" className="mx-auto max-w-[1440px] scroll-mt-20 px-4 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        eyebrow="Ecosistema Star Shine"
        title={<>Más que eventos, <span className="text-gradient">impacto social</span></>}
        text="Lo que generamos con cada evento también impulsa a niños y jóvenes de Barranquilla a través del deporte."
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {ecosystem.map((e, i) => (
          <Reveal key={e.key} delay={i * 0.12} as="article" className="group relative min-h-[560px] overflow-hidden rounded-[2rem]">
            <Image src={e.image} alt={e.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover transition-transform duration-[1.5s] group-hover:scale-105 ${e.imagePosition ?? ""}`} />
            <div className={`absolute inset-0 bg-gradient-to-t ${e.accent} opacity-80 mix-blend-multiply`} />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
              <h3 className="display text-5xl sm:text-6xl">{e.name}</h3>
              <p className="mt-2 font-accent text-xl text-ember sm:text-2xl">{e.tagline}</p>
              <p className="mt-5 max-w-lg font-light text-white/80">{e.text}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={waLink(e.wa)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-night uppercase transition hover:bg-ember hover:text-white"
                >
                  {e.cta}
                  <Arrow className="size-5" />
                </a>
                {e.login && (
                  <a
                    href={e.login.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex w-fit items-center rounded-full border border-white/30 px-6 py-3 font-bold text-white uppercase transition hover:bg-white hover:text-night"
                  >
                    {e.login.label}
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
