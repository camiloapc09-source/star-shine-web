"use client";

import type { FormEvent } from "react";
import { services, site, waLink } from "@/lib/site";
import { ConsentCheckbox } from "./ConsentCheckbox";
import { Instagram, Mail, Pin, WhatsApp } from "./icons";
import { SectionHeading } from "./SectionHeading";

const field =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition focus:border-lavender focus:bg-white/10";

export function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [
      "¡Hola Star Shine! Quiero cotizar un evento.",
      `*Nombre:* ${d.get("nombre")}`,
      d.get("empresa") && `*Empresa:* ${d.get("empresa")}`,
      `*Servicio:* ${d.get("servicio")}`,
      d.get("personas") && `*Personas:* ${d.get("personas")}`,
      d.get("fecha") && `*Fecha tentativa:* ${d.get("fecha")}`,
      d.get("mensaje") && `*Detalles:* ${d.get("mensaje")}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  };

  const channels = [
    { icon: WhatsApp, label: site.phone, href: waLink() },
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: Instagram, label: `@${site.instagram}`, href: `https://instagram.com/${site.instagram}` },
    { icon: Pin, label: `${site.city}, ${site.region} · Colombia`, href: undefined },
  ];

  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="absolute top-1/4 -left-60 size-[45rem] rounded-full bg-brand/30 blur-[120px]" />
      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title={<>Hagamos brillar <span className="text-gradient">tu evento</span></>}
            text="Cuéntanos qué tienes en mente y te respondemos por WhatsApp con una propuesta a la medida."
          />
          <ul className="mt-10 space-y-4">
            {channels.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener" className="group flex items-center gap-4 text-lg hover:text-lilac">
                    <span className="grid size-12 place-items-center rounded-full border border-white/15 transition group-hover:border-lavender group-hover:bg-lavender/15">
                      <Icon className="size-5" />
                    </span>
                    {label}
                  </a>
                ) : (
                  <span className="flex items-center gap-4 text-lg">
                    <span className="grid size-12 place-items-center rounded-full border border-white/15"><Icon className="size-5" /></span>
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <iframe
            title="Mapa de Barranquilla"
            src="https://www.google.com/maps?q=Barranquilla,Atl%C3%A1ntico&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-10 h-56 w-full rounded-2xl border border-white/10 [filter:invert(0.9)_hue-rotate(200deg)_saturate(0.6)]"
          />
        </div>

        <form onSubmit={onSubmit} className="h-fit rounded-[2rem] border border-white/10 bg-night-2/80 p-6 backdrop-blur sm:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm text-white/70">Nombre *</span>
              <input name="nombre" required autoComplete="name" className={field} placeholder="Tu nombre" />
            </label>
            <label>
              <span className="mb-2 block text-sm text-white/70">Empresa / institución</span>
              <input name="empresa" autoComplete="organization" className={field} placeholder="Opcional" />
            </label>
            <label>
              <span className="mb-2 block text-sm text-white/70">Servicio *</span>
              <select name="servicio" required className={`${field} [&>option]:bg-night`} defaultValue="">
                <option value="" disabled>Selecciona</option>
                {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                <option>Contenido y marketing digital</option>
                <option>Administración de personal</option>
                <option>Star Club</option>
                <option>Otro</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm text-white/70">Número de personas</span>
              <input name="personas" inputMode="numeric" className={field} placeholder="Ej: 120" />
            </label>
            <label>
              <span className="mb-2 block text-sm text-white/70">Fecha tentativa</span>
              <input name="fecha" type="date" className={`${field} [color-scheme:dark]`} />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm text-white/70">Cuéntanos más</span>
              <textarea name="mensaje" rows={4} className={field} placeholder="Objetivo del evento, lugar, ideas…" />
            </label>
            <div className="sm:col-span-2">
              <ConsentCheckbox before="Autorizo el tratamiento de mis datos personales según la" link="política de tratamiento de datos" />
            </div>
          </div>
          <button
            type="submit"
            className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-ember py-4 font-bold tracking-wide uppercase transition hover:bg-white hover:text-night"
          >
            <WhatsApp className="size-5" />
            Enviar por WhatsApp
          </button>
          <p className="mt-4 text-center text-xs text-white/45">Se abrirá WhatsApp con tu mensaje listo para enviar.</p>
        </form>
      </div>
    </section>
  );
}
