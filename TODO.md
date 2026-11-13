# TODO — Pendientes del sitio

> Estado al 8 de octubre de 2026 (sin cambios desde el 7 de octubre, noche). El orden para retomar está en `../CEREBRO-DEL-PROYECTO.md`, sección **📍 Dónde quedamos**.

## Contenido oculto (reactivar cuando haya datos reales)

Todo se controla desde `lib/site.ts`. No se borró nada.

- [ ] **Cifras** (+50 eventos, +5.000 personas, +20 empresas, 9 líneas). Eran provisionales.
  Reactivar: reemplazar los valores en `stats` y poner `visible.stats = true`.
- [ ] **Testimonios** (3 de ejemplo). Reactivar: poner testimonios reales **con autorización escrita del cliente** en `testimonials` y `visible.testimonials = true`.
- [ ] **Portafolio con fotos de stock** (marcados `hidden: true` en `projects`):
  - Torneo interempresarial de voleibol
  - Jornada de bienestar · Yoga
  - Cobertura y recap del evento
  Reactivar: cambiar la foto por una real del evento y quitar `hidden: true`.
  (El proyecto "Running corporativo" se había quitado antes de la lista; también era foto de stock.)

## Revisión de textos

- [ ] **Fundación**: revisar el texto (lo redactó Claude: becas deportivas y acompañamiento psicológico) y confirmar el nombre público. En `ecosystem` de `lib/site.ts`.
- [ ] Revisar en computador el recuadro **"DONDE LA ESTRELLA, ERES TÚ."** de Nosotros con la tipografía nueva. En celular ya se revisó.
- [ ] Preparar el repositorio git para Vercel (sin publicar). Pendiente de la aprobación de Camilo.
- [x] **Star Club**: texto corregido (hoy baloncesto; se proyectan voleibol, fútbol y surf) y foto real del club. Datos reales en `CEREBRO-DEL-PROYECTO.md` §12.
- [x] Botones "Ingresar a la app" (StarApp) y "Portal de clientes" (Polaris). Las URLs están en `apps` de `lib/site.ts`; cambiarlas si las apps pasan a un subdominio propio.

## 🚨 Antes de publicar (bloqueantes)

- [x] **Imagen de menores (Star Club):** se resolvió usando una foto sin caras reconocibles y con los nombres de las camisetas difuminados. Regla: en la web, ninguna foto del club debe mostrar caras visibles ni nombres.

- [ ] **Política de tratamiento de datos — PENDIENTE DE REVISIÓN LEGAL.** Borrador en `app/politica-de-datos/page.tsx`. Solo se ve en modo desarrollo (`npm run dev` → `/politica-de-datos`); en producción da 404.
  Todos los formularios enlazan a ella, así que **hay que aprobarla antes de publicar** el sitio. Al aprobarla: `legal.policyApproved = true` en `lib/site.ts` (la página se publica, entra al sitemap y aparece en el footer).
  Publica: razón social, NIT 901.623.011-3, Barranquilla, correo y teléfono. **No incluye dirección física** (no publicarla todavía).
  Puntos para el abogado: finalidades, plazos de consultas/reclamos, transferencia a proveedores fuera de Colombia (correo, WhatsApp, hosting), datos de menores (Star Club).
- [ ] **Correo del formulario de Administración de personal**: crear cuenta en Resend, verificar el dominio y poner en Vercel las variables `RESEND_API_KEY`, `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL` (ver `.env.example`). Sin ellas, el formulario muestra un aviso con el correo para escribir directamente.
- [ ] Definir el dominio y ponerlo en `NEXT_PUBLIC_SITE_URL`.

## Legal
- [ ] Licencia de la tipografía TXT Groovy Smooth: ya no se usa en la web (la letra de acento ahora es Poppins ExtraBold Itálica, de Google Fonts, con licencia libre).

## Fotos e imágenes

- [ ] Las fotos de los servicios (running, yoga, team building, contenido, etc.) son de stock y se usan solo como ilustración. Reemplazarlas por fotos propias cuando existan.
- [ ] La foto de "Nosotros" (grupo celebrando) es de stock.

## Plan de líneas nuevas

- [x] Paso 1 — Navegación con submenú de Servicios
- [x] Paso 2 — Bloque "Nuestras líneas" en el inicio
- [x] Paso 3 — Página Contenido y marketing digital (`/contenido-marketing-digital`)
- [x] Paso 4 — Página Administración de personal (`/administracion-de-personal`)
- [x] Paso 5 — Versión en inglés (`/en/payroll-colombia`)
- [x] Paso 6 — Casilla de datos en formularios, política de datos (borrador) y envío por correo

## Contenido y marketing digital

- [ ] **Casos**: la sección está oculta (`contentMarketing.cases` vacío). Agregar casos solo con autorización escrita del cliente.
- [ ] La foto de la página (fotógrafo en estadio) es de stock. Reemplazar por una foto propia de producción.
- [ ] Revisar las descripciones cortas de Video, Fotografía, Redes sociales y Gestión de pauta (redactadas a partir del texto aprobado).

## Administración de personal

- [ ] Revisar los 4 pasos de "Cómo funciona" y el bloque "Quién hace qué" (ES y EN): solo reorganizan el texto aprobado, pero conviene confirmarlos.
- [ ] En la versión en inglés, el menú y el footer siguen en español (la interfaz general es en español). Si se quiere el sitio completo en inglés, es un cambio aparte.
