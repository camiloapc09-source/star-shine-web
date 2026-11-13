import Link from "next/link";
import { payroll, payrollPaths, type Lang } from "@/lib/payroll";
import { apps, site, waLink } from "@/lib/site";
import { Arrow, Mail, Star, WhatsApp } from "./icons";
import { PayrollForm } from "./PayrollForm";
import { Reveal } from "./Reveal";

/** Página de Administración de personal en Colombia (ES / EN) */
export function PayrollPage({ lang }: { lang: Lang }) {
  const t = payroll[lang];
  const other: Lang = lang === "es" ? "en" : "es";
  const path = payrollPaths[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: t.title,
        description: t.intro,
        serviceType: t.title,
        inLanguage: lang === "es" ? "es-CO" : "en",
        areaServed: "Colombia",
        provider: { "@id": `${site.url}/#negocio` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: site.url },
          { "@type": "ListItem", position: 2, name: t.title, item: `${site.url}${path}` },
        ],
      },
    ],
  };

  return (
    <div lang={lang === "es" ? "es-CO" : "en"}>
      <section className="grain relative flex min-h-[85svh] items-end overflow-hidden bg-gradient-to-br from-brand via-night-3 to-night">
        <div aria-hidden className="absolute inset-0">
          <Star className="absolute -top-24 -right-24 size-[34rem] text-lavender/15" />
          <Star className="absolute top-40 right-[18%] size-20 animate-twinkle text-ember/80" />
          <Star className="absolute right-[38%] bottom-40 size-8 animate-twinkle text-lilac/60 [animation-delay:1.2s]" />
        </div>
        <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-32 pb-16 sm:px-8 lg:pb-24">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
            <nav aria-label={lang === "es" ? "Ruta" : "Breadcrumb"}>
              <Link href="/" className="hover:text-white">{t.breadcrumbHome}</Link> / <Link href="/#lineas" className="hover:text-white">{t.breadcrumbSection}</Link> / <span className="text-white">{t.title}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={apps.payrollPortal}
                target="_blank"
                rel="noopener"
                className="rounded-full border border-white/30 px-4 py-1.5 font-bold tracking-wide text-white uppercase transition hover:bg-white hover:text-night"
              >
                {t.portalLabel}
              </a>
              <Link
                href={payrollPaths[other]}
                hrefLang={other === "es" ? "es-CO" : "en"}
                className="rounded-full border border-white/30 px-4 py-1.5 font-bold tracking-wide text-white uppercase transition hover:bg-white hover:text-night"
              >
                {t.switchLabel}
              </Link>
            </div>
          </div>
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-lilac uppercase">
              <Star className="size-3 text-ember" /> {t.eyebrow}
            </p>
            <h1 className="display mt-5 max-w-5xl text-5xl sm:text-7xl lg:text-8xl">{t.title}</h1>
            <p className="mt-6 max-w-3xl text-lg font-light text-white/80 sm:text-xl">{t.intro}</p>
            <a
              href="#formulario"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 font-bold tracking-wide uppercase transition hover:bg-white hover:text-night"
            >
              {t.ctaPrimary}
              <Arrow className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand py-24 lg:py-32">
        <div aria-hidden className="absolute -top-40 -right-40 size-[40rem] rounded-full bg-lavender/40 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8">
          <Reveal>
            <h2 className="display text-4xl sm:text-6xl">{t.howTitle}</h2>
          </Reveal>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.1} className="bg-brand p-8 lg:p-10">
                <span className="display block text-6xl text-ember">0{i + 1}</span>
                <h3 className="display mt-8 text-2xl">{step.title}</h3>
                <p className="mt-3 font-light text-white/80">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-24 sm:px-8">
        <Reveal>
          <h2 className="display text-4xl sm:text-6xl">{t.rolesTitle}</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_2fr]">
          {t.roles.map((r, i) => (
            <Reveal key={r.who} delay={i * 0.1} className={`rounded-3xl border p-8 lg:p-10 ${i === 1 ? "border-lavender/40 bg-night-2" : "border-white/10"}`}>
              <h3 className="display text-3xl">{r.who}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {r.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                    <Star className="size-2.5 shrink-0 text-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="formulario" className="relative scroll-mt-20 overflow-hidden pb-24 lg:pb-32">
        <div aria-hidden className="absolute top-1/4 -left-60 size-[45rem] rounded-full bg-brand/30 blur-[120px]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-14 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="display text-4xl sm:text-6xl">{t.formTitle}</h2>
            <p className="mt-6 text-lg font-light text-white/70">{t.formText}</p>
            <p className="mt-10 text-sm text-white/50">{t.otherChannels}</p>
            <ul className="mt-4 space-y-4">
              <li>
                <a href={`mailto:${site.email}`} className="group flex items-center gap-4 text-lg hover:text-lilac">
                  <span className="grid size-12 place-items-center rounded-full border border-white/15 transition group-hover:border-lavender group-hover:bg-lavender/15"><Mail className="size-5" /></span>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={waLink(lang === "es" ? "¡Hola Star Shine! Quiero información sobre administración de personal en Colombia." : "Hi Star Shine! I'd like information about payroll and employment in Colombia.")} target="_blank" rel="noopener" className="group flex items-center gap-4 text-lg hover:text-lilac">
                  <span className="grid size-12 place-items-center rounded-full border border-white/15 transition group-hover:border-lavender group-hover:bg-lavender/15"><WhatsApp className="size-5" /></span>
                  {site.phone}
                </a>
              </li>
            </ul>
          </Reveal>
          <PayrollForm t={t.form} lang={lang} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
