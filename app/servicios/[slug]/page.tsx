import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Star, WhatsApp } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { services, site, waLink } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const find = (slug: string) => services.find((s) => s.slug === slug);

export async function generateMetadata({ params }: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const s = find((await params).slug);
  if (!s) return {};
  return {
    title: `${s.title} en ${site.city}`,
    description: `${s.short} ${s.intro}`.slice(0, 158),
    keywords: s.keywords,
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: { title: `${s.title} | Star Shine`, description: s.short, images: [{ url: s.image }] },
  };
}

export default async function ServicePage({ params }: PageProps<"/servicios/[slug]">) {
  const s = find((await params).slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.title,
        description: s.intro,
        serviceType: s.title,
        areaServed: { "@type": "City", name: site.city },
        provider: { "@id": `${site.url}/#negocio` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${site.url}/#servicios` },
          { "@type": "ListItem", position: 3, name: s.title, item: `${site.url}/servicios/${s.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <section className="grain relative flex min-h-[85svh] items-end overflow-hidden">
        <Image src={s.image} alt={s.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/30" />
        <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-32 pb-16 sm:px-8 lg:pb-24">
          <nav aria-label="Ruta" className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Inicio</Link> / <Link href="/#servicios" className="hover:text-white">Servicios</Link> / <span className="text-white">{s.title}</span>
          </nav>
          <Reveal>
            <span className="display text-7xl text-ember sm:text-8xl">{s.number}</span>
            <h1 className="display mt-4 max-w-5xl text-5xl sm:text-7xl lg:text-8xl">{s.title}</h1>
            <p className="mt-6 max-w-2xl text-lg font-light text-white/80 sm:text-xl">{s.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-24 sm:px-8">
        <Reveal>
          <h2 className="display text-4xl sm:text-6xl">¿Qué incluye?</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {s.includes.map((inc, i) => (
            <Reveal key={inc.title} delay={i * 0.1} className="rounded-3xl border border-white/10 bg-night-2 p-8">
              <Star className="size-6 text-ember" />
              <h3 className="mt-6 text-2xl font-bold">{inc.title}</h3>
              {inc.text && <p className="mt-3 font-light text-white/70">{inc.text}</p>}
              {inc.items && (
                <ul className="mt-4 space-y-2">
                  {inc.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 font-light text-white/80">
                      <span className="size-1.5 rounded-full bg-lavender" />
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand py-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 sm:px-8 lg:grid-cols-3">
          {s.benefits.map((b, i) => (
            <Reveal key={b} delay={i * 0.1} className="flex items-start gap-4">
              <Star className="mt-1 size-6 shrink-0 text-ember" />
              <p className="display text-2xl sm:text-3xl">{b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-24 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {s.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.1} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src={src} alt={`${s.title} · Star Shine`} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-gradient-to-br from-brand to-night-3 p-8 sm:p-14 lg:flex-row lg:items-center">
          <div>
            <h2 className="display text-4xl sm:text-5xl">¿Lo hacemos realidad?</h2>
            <p className="mt-3 font-accent text-2xl text-ember sm:text-3xl">{site.claim}.</p>
          </div>
          <a
            href={waLink(`¡Hola Star Shine! Quiero cotizar: ${s.title}.`)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 font-bold uppercase transition hover:bg-white hover:text-night"
          >
            <WhatsApp className="size-5" /> Cotizar por WhatsApp
          </a>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-24 sm:px-8">
        <h2 className="mb-8 text-sm font-bold tracking-widest text-lilac uppercase">Otros servicios</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/servicios/${o.slug}`} className="group flex items-center justify-between rounded-2xl border border-white/10 p-6 transition hover:border-lavender hover:bg-night-2">
                <span>
                  <span className="text-sm text-ember">{o.number}</span>
                  <span className="mt-1 block text-xl font-bold">{o.title}</span>
                </span>
                <Arrow className="size-6 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
