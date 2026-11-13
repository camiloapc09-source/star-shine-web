"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav, site, waLink } from "@/lib/site";
import { Instagram, Star, WhatsApp } from "./icons";

export function Header() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 400 && y > prev && !open);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid || open ? "bg-night/85 backdrop-blur-xl border-b border-white/5" : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-8 lg:h-20">
          <Link href="/" aria-label="Star Shine, inicio" className="shrink-0" onClick={() => setOpen(false)}>
            <Image src="/brand/logo-white.svg" alt="Star Shine" width={1080} height={300} priority className="h-8 w-auto lg:h-10" />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) =>
                item.children ? (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setSubmenu(true)}
                    onMouseLeave={() => setSubmenu(false)}
                    onKeyDown={(e) => e.key === "Escape" && setSubmenu(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setSubmenu((v) => !v)}
                      aria-expanded={submenu}
                      aria-controls="submenu-servicios"
                      className="group relative flex items-center gap-1.5 text-sm font-bold tracking-wider uppercase"
                    >
                      {item.label}
                      <svg viewBox="0 0 12 12" aria-hidden className={`size-2.5 transition-transform duration-300 ${submenu ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="m2 4 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                    </button>
                    <AnimatePresence>
                      {submenu && (
                        <motion.div
                          id="submenu-servicios"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 w-[25rem] -translate-x-1/2 pt-5"
                        >
                          <ul className="rounded-2xl border border-white/10 bg-night/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <a
                                  href={child.href}
                                  onClick={() => setSubmenu(false)}
                                  className="group flex gap-3 rounded-xl p-4 transition-colors hover:bg-white/5 focus-visible:bg-white/5"
                                >
                                  <Star className="mt-1 size-3 shrink-0 text-ember transition-transform duration-500 group-hover:rotate-90" />
                                  <span>
                                    <span className="block font-bold">{child.label}</span>
                                    <span className="mt-0.5 block text-sm text-white/60">{child.description}</span>
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.href}>
                    <a href={item.href} className="group relative text-sm font-bold tracking-wider uppercase">
                      {item.label}
                      <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="group hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-bold tracking-wide uppercase transition hover:bg-white hover:text-night sm:inline-flex"
            >
              <Star className="size-3.5 transition-transform duration-500 group-hover:rotate-90" />
              Cotiza tu evento
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="relative grid size-11 place-items-center rounded-full border border-white/20 lg:hidden"
            >
              <span className={`absolute h-0.5 w-5 bg-white transition ${open ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`absolute h-0.5 w-5 bg-white transition ${open ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between gap-8 overflow-y-auto bg-brand px-6 pt-28 pb-10 lg:hidden"
            data-lenis-prevent
          >
            <ul className="space-y-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                >
                  {item.children ? (
                    <>
                      <span className="display block py-1 text-5xl">{item.label}</span>
                      <ul className="mt-1 mb-3 space-y-1 border-l border-white/25 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <a href={child.href} onClick={() => setOpen(false)} className="flex items-center gap-2 py-1.5 text-lg font-bold">
                              <Star className="size-3 shrink-0 text-ember" />
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={item.href} onClick={() => setOpen(false)} className="display block py-1 text-5xl">
                      {item.label}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="space-y-4">
              <a href={waLink()} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 rounded-full bg-ember py-4 font-bold uppercase">
                <WhatsApp className="size-5" /> Cotiza tu evento
              </a>
              <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 text-white/80">
                <Instagram className="size-5" /> @{site.instagram}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
