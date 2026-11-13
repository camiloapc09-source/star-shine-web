import { marqueeWords } from "@/lib/site";
import { Star } from "./icons";

export function Marquee() {
  const words = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative -rotate-1 overflow-hidden border-y border-white/10 bg-brand py-5 sm:py-6" aria-hidden>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {words.map((w, i) => (
          <span key={i} className="display flex items-center gap-6 px-6 text-2xl whitespace-nowrap sm:text-4xl">
            {w}
            <Star className="size-5 text-ember sm:size-7" />
          </span>
        ))}
      </div>
    </div>
  );
}
