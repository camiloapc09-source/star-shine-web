import { steps } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-brand py-24 lg:py-32">
      <div aria-hidden className="absolute -top-40 -right-40 size-[40rem] rounded-full bg-lavender/40 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8">
        <SectionHeading eyebrow="Cómo trabajamos" title={<>De la idea<br />a la acción</>} />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.1} className="bg-brand p-8 lg:p-10">
              <span className="display block text-6xl text-ember">0{i + 1}</span>
              <h3 className="display mt-8 text-2xl">{step.title}</h3>
              <p className="mt-3 font-light text-white/80">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
