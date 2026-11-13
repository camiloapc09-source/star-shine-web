"use client";

import { useState, type FormEvent } from "react";
import type { Lang, PayrollCopy } from "@/lib/payroll";
import { site } from "@/lib/site";
import { ConsentCheckbox } from "./ConsentCheckbox";

const field =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition focus:border-lavender focus:bg-white/10";

type Status = "idle" | "sending" | "ok" | "error";

export function PayrollForm({ t, lang }: { t: PayrollCopy["form"]; lang: Lang }) {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...d, consent: d.consent === "on", source: "administracion-de-personal", lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div role="status" className="rounded-[2rem] border border-white/10 bg-night-2/80 p-10 text-lg">
        {t.ok}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="h-fit rounded-[2rem] border border-white/10 bg-night-2/80 p-6 backdrop-blur sm:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className="mb-2 block text-sm text-white/70">{t.name} *</span>
          <input name="name" required maxLength={120} autoComplete="name" className={field} />
        </label>
        <label>
          <span className="mb-2 block text-sm text-white/70">{t.email} *</span>
          <input name="email" type="email" required maxLength={160} autoComplete="email" className={field} />
        </label>
        <label>
          <span className="mb-2 block text-sm text-white/70">{t.company} *</span>
          <input name="company" required maxLength={160} autoComplete="organization" className={field} />
        </label>
        <label>
          <span className="mb-2 block text-sm text-white/70">{t.country}</span>
          <input name="country" maxLength={80} autoComplete="country-name" className={field} />
        </label>
        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm text-white/70">{t.message} *</span>
          <textarea name="message" required rows={4} maxLength={3000} className={field} placeholder={t.messagePlaceholder} />
        </label>
        {/* Campo trampa contra spam: las personas no lo ven */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
        <div className="sm:col-span-2">
          <ConsentCheckbox before={t.consentBefore} link={t.consentLink} />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-ember py-4 font-bold tracking-wide uppercase transition hover:bg-white hover:text-night disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>
      {status === "error" && (
        <p role="alert" className="mt-4 text-center text-sm text-white/80">
          {t.error}{" "}
          <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
        </p>
      )}
    </form>
  );
}
