# Star Shine — Sitio web

Next.js 16 + TypeScript + Tailwind 4 + Motion + Lenis.

## Ver el sitio en tu computador

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:3000
```

## Dónde se edita cada cosa

| Qué | Dónde |
|---|---|
| Textos, servicios, cifras, testimonios, portafolio, contacto | `lib/site.ts` (lo marcado con ⚠️ es provisional) |
| Fotos | `public/images/` (formato `.webp` o `.jpg`) |
| Video del hero | `public/video/hero.mp4` (horizontal) y `public/video/hero-mobile.mp4` (vertical) |
| Colores y tipografías | `app/globals.css` |
| Logos | `public/brand/` |

El video del hero se activa solo: si el archivo existe en `public/video/`, se muestra; si no, aparece la foto con zoom lento.

**Video recomendado:** MP4 (H.264), sin audio, 15–20 s en loop, máx. ~4 MB. Horizontal 1920×1080 y vertical 1080×1920.

## Variables de entorno

Copia `.env.example` como `.env.local` y completa los valores (nunca subas `.env.local`).
En Vercel se configuran en *Settings → Environment Variables*.

## Antes de publicar

Revisa la sección **"Antes de publicar"** de `TODO.md` (política de datos y correo del formulario).

## Publicar

1. Sube la carpeta `web` a un repositorio de GitHub.
2. Importa el repositorio en [vercel.com](https://vercel.com) (gratis).
3. Agrega las variables de `.env.example` (dominio y correo del formulario) y conecta el dominio.
