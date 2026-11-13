import { Star } from "./icons";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-lilac uppercase ${center ? "justify-center" : ""}`}>
        <Star className="size-3 text-ember" />
        {eyebrow}
      </p>
      <h2 className="display text-4xl sm:text-5xl lg:text-7xl">{title}</h2>
      {text && <p className="mt-6 text-lg font-light text-white/70">{text}</p>}
    </Reveal>
  );
}
