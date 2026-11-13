import Image from "next/image";
import Link from "next/link";
import { legal, lines, nav, services, showPolicy, site, waLink } from "@/lib/site";
import { Instagram, Mail, WhatsApp } from "./icons";

async function Year() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night">
      <div className="mx-auto max-w-[1440px] px-4 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Image src="/brand/logo-white.svg" alt="Star Shine" width={1080} height={300} className="h-12 w-auto" />
            <p className="mt-6 max-w-sm font-light text-white/60">
              Creamos momentos de oro donde la estrella eres tú. Eventos deportivos, culturales y de bienestar en {site.city} y el {site.region}.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-ember"><WhatsApp className="size-5" /></a>
              <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener" aria-label="Instagram" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-ember"><Instagram className="size-5" /></a>
              <a href={`mailto:${site.email}`} aria-label="Correo" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-ember"><Mail className="size-5" /></a>
            </div>
          </div>
          <nav aria-label="Servicios">
            <h2 className="mb-5 text-sm font-bold tracking-widest text-lilac uppercase">Servicios</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/servicios/${s.slug}`} className="text-white/70 hover:text-white">{s.title}</Link></li>
              ))}
              {lines.filter((l) => l.key !== "eventos").map((l) => (
                <li key={l.key}><Link href={l.href} className="text-white/70 hover:text-white">{l.title}</Link></li>
              ))}
              <li><Link href="/en/payroll-colombia" hrefLang="en" className="text-white/70 hover:text-white">Payroll in Colombia (EN)</Link></li>
            </ul>
          </nav>
          <nav aria-label="Sitio">
            <h2 className="mb-5 text-sm font-bold tracking-widest text-lilac uppercase">Star Shine</h2>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="text-white/70 hover:text-white">{n.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>

        <p aria-hidden className="display mt-20 text-center text-[17vw] leading-none text-white/[0.04] select-none lg:text-[14rem]">
          Star Shine
        </p>

        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row">
          <p>© <Year /> {site.legalName} · Todos los derechos reservados</p>
          <p className="flex flex-wrap gap-x-4">
            {showPolicy && <Link href={legal.policyPath} className="hover:text-white">Política de datos</Link>}
            <span>NIT {site.nit} · {site.city}, Colombia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
