"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, type Project } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

const allFilters = ["Todos", "Deportivo", "Corporativo", "Contenido"] as const;
type Filter = (typeof allFilters)[number];

const shown = projects.filter((p) => !p.hidden);
// Solo filtros con proyectos visibles; si hay una sola categoría no se muestran
const filters = allFilters.filter((f) => f === "Todos" || shown.some((p) => p.category === f));

function Card({ p, big }: { p: Project; big: boolean }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-3xl bg-night-2 ${big ? "aspect-[4/5] sm:col-span-2 sm:row-span-2 sm:aspect-auto" : "aspect-[4/5]"}`}
    >
      {p.video ? (
        <video
          src={p.video}
          poster={p.image}
          muted
          loop
          playsInline
          preload="none"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => e.currentTarget.pause()}
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes={big ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur">{p.category}</span>
        <h3 className={`display mt-3 ${big ? "text-3xl sm:text-5xl" : "text-2xl"}`}>{p.title}</h3>
        <p className="mt-1 text-sm text-white/60">{p.place}</p>
      </div>
    </motion.li>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const list = filter === "Todos" ? shown : shown.filter((p) => p.category === filter);

  return (
    <section id="portafolio" className="mx-auto max-w-[1440px] scroll-mt-20 px-4 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Portafolio" title={<>Momentos que <span className="text-gradient">brillan</span></>} />
        {filters.length > 2 && (
          <div role="group" aria-label="Filtrar proyectos" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full px-5 py-2 text-sm font-bold tracking-wide uppercase transition ${
                  filter === f ? "bg-white text-night" : "border border-white/20 text-white/80 hover:border-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      <motion.ul layout className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <Card key={p.title} p={p} big={i === 0 && filter === "Todos"} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
