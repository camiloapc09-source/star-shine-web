"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { stats } from "@/lib/site";

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: reduce ? 0 : 2, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n.toLocaleString("es-CO")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Cifras" className="mx-auto max-w-[1440px] px-4 py-24 sm:px-8 lg:py-32">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col bg-night p-6 sm:p-10">
            <dt className="mt-3 text-sm font-light tracking-wide text-white/60 uppercase sm:text-base">{s.label}</dt>
            <dd className="display order-first text-5xl text-white sm:text-7xl">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
