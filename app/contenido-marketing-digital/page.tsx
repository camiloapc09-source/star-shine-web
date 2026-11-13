import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Star, WhatsApp } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { contentMarketing as cm, site, waLink } from "@/lib/site";

const path = "/contenido-marketing-digital";

export const metadata: Metadata = {
  title: `${cm.title} para marcas y negocios`,
  description: cm.intro,
  keywords: cm.keywords,
  alternates: { canonical: path },
  openGraph: { title: `${cm.title} | Star Shine`, description: cm.intro, images: [{ url: cm.image }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: cm.title,
      description: cm.intro,
      serviceType: cm.title,
      areaServed: ["Colombia", "Internacional"],
      provider: { "@id": `${site.url}/#negocio` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
        { "@type": "ListItem", position: 2, name: cm.title, item: `${site.url}${path}` },
      ],
    },
  ],
};

export default function ContentMarketingPage() {
  return (
    <>
      <section className="grain relative flex min-h-[85svh] items-end overflow-hidden">
        <Image src={cm.image} alt={cm.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/30" />
        <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-32 pb-16 sm:px-8 lg:pb-24">
          <nav aria-label="Ruta" className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Inicio</Link> / <Link href="/#lineas" className="hover:text-white">Servicios</Link> / <span className="text-white">{cm.title}</span>
          </nav>
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-lilac uppercase">
              <Star className="size-3 text-ember" /> {cm.audience}
            </p>
            <h1 className="display mt-5 max-w-5xl text-5xl sm:text-7xl lg:text-8xl">{cm.title}</h1>
            <p className="mt-6 max-w-2xl text-lg font-light text-white/80 sm:text-xl">{cm.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-24 sm:px-8">
        <Reveal>
          <h2 className="display text-4xl sm:text-6xl">¿Qué incluye?</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cm.includes.map((inc, i) => (
            <Reveal key={inc.title} delay={i * 0.1} className="rounded-3xl border border-white/10 bg-night-2 p-8">
              <Star className="size-6 text-ember" />
              <h3 className="mt-6 text-2xl font-bold">{inc.title}</h3>
              <p className="mt-3 font-light text-white/70">{inc.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand py-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 sm:px-8 lg:grid-cols-3">
          {cm.focus.map((f, i) => (
            <Reveal key={f} delay={i * 0.1} className="flex items-start gap-4">
              <Star className="mt-1 size-6 shrink-0 text-ember" />
              <p className="display text-2xl sm:text-3xl">{f}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {cm.cases.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-4 pt-24 sm:px-8">
          <h2 className="display text-4xl sm:text-6xl">Casos</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {cm.cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image src={c.image} alt={c.title} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1440px] px-4 py-24 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-gradient-to-br from-brand to-night-3 p-8 sm:p-14 lg:flex-row lg:items-center">
          <div>
            <h2 className="display text-4xl sm:text-5xl">¿Creamos el contenido de tu marca?</h2>
            <p className="mt-3 font-accent text-2xl text-ember sm:text-3xl">{site.claim}.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(`¡Hola Star Shine! Quiero información sobre ${cm.title.toLowerCase()} para mi marca.`)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-ember px-8 py-4 font-bold uppercase transition hover:bg-white hover:text-night"
            >
              <WhatsApp className="size-5" /> Escríbenos
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-4 font-bold uppercase transition hover:border-white hover:bg-white/10"
            >
              {site.email}
            </a>
          </div>
        </Reveal>

        <Link href="/#lineas" className="group mt-12 inline-flex items-center gap-3 font-bold tracking-wide uppercase">
          Ver todas las líneas
          <Arrow className="size-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
