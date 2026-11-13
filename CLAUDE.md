# Star Shine Productions S.A.S. — Sitio web corporativo

Sitio de Star Shine Productions S.A.S. (Barranquilla, Colombia). Next.js 16 (App Router) + TypeScript + Tailwind 4 + Motion + Lenis. **Leer primero `../CEREBRO-DEL-PROYECTO.md`** (estado, decisiones, historial). Ver `README.md` para correrlo y `TODO.md` para pendientes.

## Líneas de servicio

- **Eventos deportivos**: ya existe en el sitio (`/#servicios` y `/servicios/[slug]`). No borrar ni reescribir sus textos; solo reubicarlos si cambia la navegación.
- **Contenido y marketing digital**: video, fotografía, redes sociales y gestión de pauta para marcas y negocios (sobre todo moda y deporte), en Colombia y el exterior. Es distinta de "04 Contenido digital" (cobertura de eventos), que se queda como está.
- **Administración de personal en Colombia para empresas del exterior**: vinculación con contrato laboral colombiano, nómina, seguridad social, prestaciones y reportes mensuales. Público: empresas de EE.UU. Esta sección también va en inglés.
- **Star Club** (formación deportiva juvenil) y **Fundación**: se quedan como están; textos pendientes de revisión (ver `TODO.md`).

## Datos de contacto públicos

- Teléfono / WhatsApp: **315 194 5643** (`+57 315 194 5643`)
- Correo: **starshinesas07@gmail.com**
- Instagram: **@starshinesas**

No usar el 305 291 2267 ni starshine07@gmail.com (datos viejos).

## Diseño: no se toca

- No cambiar colores, tipografías, layout, animaciones ni estructura de lo que ya existe.
- Lo nuevo reutiliza los componentes y patrones existentes (`components/`, `SectionHeading`, `Reveal`, clases `display`, `font-accent`, tokens de `app/globals.css`).
- Solo se agrega contenido y secciones; la navegación se ajusta lo mínimo.
- Todo el contenido editable vive en `lib/site.ts`.

## Reglas de contenido (obligatorias)

- No nombrar clientes (logos, testimonios, casos) sin autorización escrita. Si hay que mostrar casos, usar placeholders claros.
- No inventar cifras, clientes, premios, testimonios ni años de experiencia.
- No publicar datos de trabajadores, tarifas, cuentas bancarias, documentos legales ni nada interno. No publicar la dirección física por ahora.
- Administración de personal: el marco siempre es que Star Shine es el empleador, contrata con contrato laboral colombiano y administra nómina, seguridad social y cumplimiento; el cliente define objetivos y prioridades. NUNCA usar: "suministro de personal", "alquiler de empleados", "outsourcing de trabajadores", "sin responsabilidad laboral para ti", "100% legal" ni "cero riesgo". No citar decretos ni normas.
- No mencionar selección de personal ni evaluación psicológica de candidatos (requiere revisión con abogado primero).
- Formularios: casilla de autorización de tratamiento de datos con enlace a la política (Ley 1581 de 2012). Claves y correos en variables de entorno, nunca en el repositorio.
- Tono: cercano, profesional y directo. Sin exageraciones.

## Textos aprobados (usar tal cual; no agregar promesas)

**Contenido y marketing digital**
- ES: "Creamos contenido que conecta: video, fotografía, redes sociales y gestión de pauta para marcas y negocios. Producimos el material y te ayudamos a llevarlo a las audiencias correctas."
- EN: "We create content that connects: video, photography, social media and paid media management for brands and businesses. We produce the material and help you put it in front of the right audience."

**Administración de personal en Colombia**
- ES: "Administración laboral en Colombia para empresas del exterior. Si tu empresa necesita un colaborador en Colombia, Star Shine lo vincula como empleado propio con contrato laboral colombiano y se encarga de la nómina, la seguridad social, las prestaciones y el cumplimiento. Tu equipo define los objetivos y prioridades; Star Shine gestiona la relación laboral con sus propios procesos y reporta cada mes."
- EN: "Payroll and employment administration in Colombia for companies abroad. When your company needs a team member in Colombia, Star Shine hires them as our own employee under a Colombian employment contract and handles payroll, social security, statutory benefits and compliance. Your team sets the goals and priorities; Star Shine manages the employment relationship with its own processes and reports every month."

## Cómo trabajar

- Antes de cambios grandes: inspeccionar, resumir y proponer un plan; esperar aprobación.
- Cambios pequeños y fáciles de revisar, una sección por vez.
- No refactorizar ni "mejorar" lo que ya funciona salvo que se pida.
- Interfaz en español; la sección de administración de personal, además en inglés.
- Verificar con `npx tsc --noEmit`, `npm run lint` y `npm run build`.
