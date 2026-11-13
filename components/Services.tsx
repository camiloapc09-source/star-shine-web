import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { Arrow, Star } from "./icons";
import { SectionHeading } from "./SectionHeading";

/** Tarjetas apiladas: cada servicio se "pega" arriba y el siguiente lo cubre al hacer scroll */
export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-[1440px] scroll-mt-20 px-4 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        eyebrow="Servicios"
        title={<>Todo lo que tu evento <span className="text-gradient">necesita</span></>}
        text="De la idea a la acción: adaptamos cada experiencia a las necesidades de tu organización."
      />

      <div className="mt-16 lg:mt-24">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className="mb-8 overflow-hidden rounded-[2rem] lg:[@media(min-height:820px)]:sticky border border-white/10 bg-night-2 shadow-2xl shadow-black/50 lg:mb-12"
            style={{ top: `${88 + i * 24}px` }}
          >
            <div className="grid lg:min-h-[min(70vh,620px)] lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-2 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-night-2/40" />
                <span className="display absolute top-5 left-6 text-7xl text-white/90 drop-shadow-lg sm:text-8xl">{s.number}</span>
              </div>
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-10 lg:p-12">
                <div>
                  <h3 className="display text-3xl sm:text-5xl">{s.title}</h3>
                  <p className="mt-5 text-lg font-light text-white/70">{s.short}</p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {s.includes.flatMap((inc) => inc.items ?? [inc.title]).map((item) => (
                      <li key={item} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm">
                        <Star className="size-2.5 shrink-0 text-ember" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group inline-flex w-fit items-center gap-3 border-b-2 border-ember pb-1 font-bold tracking-wide uppercase"
                >
                  Conoce más
                  <Arrow className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
