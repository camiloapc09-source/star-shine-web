import { testimonials } from "@/lib/site";
import { Star } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-night-2 py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen de nosotros" align="center" />
        <ul className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 0.1} className="flex flex-col justify-between rounded-3xl border border-white/10 bg-night p-8 lg:p-10">
              <div>
                <div className="flex gap-1 text-ember" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4" />)}
                </div>
                <blockquote className="mt-6 text-lg leading-relaxed font-light text-white/85">“{t.quote}”</blockquote>
              </div>
              <footer className="mt-8 flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-lavender to-brand font-bold">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-bold">{t.name}</span>
                  <span className="text-sm text-white/55">{t.role}</span>
                </span>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
