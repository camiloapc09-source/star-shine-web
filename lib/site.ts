/**
 * CONTENIDO DEL SITIO — edita aquí textos, datos de contacto y fotos.
 * Todo lo marcado con ⚠️ es provisional y debe confirmarse antes de publicar.
 */

export const site = {
  name: "Star Shine",
  legalName: "Star Shine Productions S.A.S.",
  nit: "901.623.011-3",
  // ⚠️ Cambiar cuando tengas el dominio definitivo
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://starshine.com.co",
  tagline: "Creamos momentos de oro",
  claim: "donde la estrella, eres tú",
  description:
    "Productora de eventos deportivos, culturales y de bienestar empresarial en Barranquilla y el Atlántico. Torneos interempresariales, team building, juzgamiento, actividades al aire libre y contenido digital.",
  city: "Barranquilla",
  region: "Atlántico",
  country: "CO",
  phone: "+57 315 194 5643",
  whatsapp: "573151945643",
  email: "starshinesas07@gmail.com",
  instagram: "starshinesas",
};

/** Apps privadas (solo se enlaza su login; la web no lee sus datos). Ver CEREBRO §12. */
export const apps = {
  starClub: "https://starapp-9qb7.onrender.com/login",
  payrollPortal: "https://polaris-app-s6o6.onrender.com/login",
};

export const waLink = (text = "¡Hola Star Shine! Quiero cotizar un evento.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; description: string; href: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Servicios",
    href: "/#servicios",
    children: [
      { label: "Eventos deportivos", description: "Eventos, bienestar empresarial y team building", href: "/#servicios" },
      { label: "Contenido y marketing digital", description: "Para marcas y negocios", href: "/contenido-marketing-digital" },
      { label: "Administración de personal", description: "Para empresas del exterior", href: "/administracion-de-personal" },
    ],
  },
  { label: "Portafolio", href: "/#portafolio" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Star Club", href: "/#ecosistema" },
  { label: "Contacto", href: "/#contacto" },
];

/** Video del hero: coloca los archivos en /public/video y se activan solos. */
export const heroMedia = {
  desktop: "/video/hero.mp4",
  mobile: "/video/hero-mobile.mp4",
  poster: "/images/hero-poster.webp",
};

export const marqueeWords = [
  "Torneos interempresariales",
  "Voleibol",
  "Team building",
  "Running",
  "Yoga",
  "Pádel",
  "Juzgamiento",
  "Senderismo",
  "Pilates",
  "Contenido digital",
  "Musicoterapia",
  "Eventos culturales",
];

/**
 * Secciones ocultas hasta tener datos reales (ver TODO.md).
 * Para reactivarlas, cambia el valor a `true`.
 */
export const visible = {
  stats: false,
  testimonials: false,
};

// ⚠️ OCULTO — cifras provisionales, reemplazar por las reales antes de reactivar
export const stats = [
  { value: 50, prefix: "+", suffix: "", label: "Eventos producidos" },
  { value: 5000, prefix: "+", suffix: "", label: "Personas impactadas" },
  { value: 20, prefix: "+", suffix: "", label: "Empresas aliadas" },
  { value: 9, prefix: "", suffix: "", label: "Líneas de servicio" },
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  gallery: string[];
  includes: { title: string; items?: string[]; text?: string }[];
  benefits: string[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "eventos-deportivos",
    number: "01",
    title: "Eventos deportivos y culturales",
    short: "Planificamos, ambientamos y coordinamos eventos deportivos, recreativos y culturales de principio a fin.",
    intro:
      "Desde un torneo de voleibol playa hasta un festival que mezcla deporte, música y arte. Nos encargamos de la logística, los escenarios, el juzgamiento y la ambientación para que tu evento se viva con intensidad.",
    image: "/images/beach-fest-1.webp",
    gallery: ["/images/beach-fest-3.webp", "/images/arbitro.webp", "/images/voleibol.webp"],
    includes: [
      { title: "Planificación y producción", text: "Concepto, cronograma, ambientación, sonido, premiación y coordinación en sitio." },
      { title: "Juzgamiento profesional", text: "Árbitros y jueces para todas las disciplinas deportivas." },
      { title: "Gestión de escenarios", text: "Gestionamos escenarios deportivos en el área metropolitana de Barranquilla y municipios del Atlántico." },
    ],
    benefits: ["Un solo aliado para todo el evento", "Experiencia en deporte y cultura", "Cobertura en todo el Atlántico"],
    keywords: ["eventos deportivos Barranquilla", "organización de torneos", "juzgamiento deportivo", "escenarios deportivos Atlántico"],
  },
  {
    slug: "bienestar-empresarial",
    number: "02",
    title: "Bienestar empresarial",
    short: "Programas de salud y bienestar a través del deporte: torneos, clases en sala y actividades al aire libre.",
    intro:
      "Ayudamos a las organizaciones a construir una cultura de bienestar que impacta la salud física y mental de sus colaboradores, con programas a la medida de su equipo.",
    image: "/images/running.webp",
    gallery: ["/images/yoga.webp", "/images/voleibol.webp", "/images/running.webp"],
    includes: [
      { title: "Competencias de equipo", items: ["Torneos interempresariales", "Olimpiadas corporativas", "Ligas internas"] },
      { title: "Talleres en sala", items: ["Yoga", "Pilates", "Entrenamiento funcional", "Musicoterapia"] },
      { title: "Actividades al aire libre", items: ["Running", "Senderismo", "Pádel"] },
    ],
    benefits: ["Colaboradores más sanos y motivados", "Menos estrés, más productividad", "Apoyo a tu programa de SST"],
    keywords: ["bienestar empresarial Barranquilla", "pausas activas", "torneos interempresariales", "yoga empresarial"],
  },
  {
    slug: "team-building",
    number: "03",
    title: "Team building y talleres",
    short: "Experiencias colaborativas y talleres deportivos, psicológicos y culturales con objetivos claros.",
    intro:
      "Diseñamos actividades atractivas que inspiran y entretienen, enfocadas en objetivos específicos de tu equipo. Lo que se vive en el juego se lleva a la oficina.",
    image: "/images/team-building.webp",
    gallery: ["/images/integracion.webp", "/images/taller.webp", "/images/celebracion.webp"],
    includes: [
      { title: "Team building", items: ["Resolución de conflictos", "Trabajo en equipo", "Comunicación"] },
      { title: "Capacitaciones y talleres", items: ["Deportivos", "Psicológicos", "Culturales"] },
    ],
    benefits: ["Equipos más unidos", "Aprendizaje a través de la experiencia", "Actividades medibles por objetivos"],
    keywords: ["team building Barranquilla", "integración empresarial", "talleres corporativos", "actividades de integración"],
  },
  {
    slug: "contenido-digital",
    number: "04",
    title: "Contenido digital",
    short: "Capturamos la energía de cada evento en foto y video listos para tus redes sociales.",
    intro:
      "Cada evento es una historia. Nuestro equipo registra los mejores momentos y los convierte en contenido para que tu marca lo comparta el mismo día.",
    image: "/images/contenido.webp",
    gallery: ["/images/beach-fest-2.webp", "/images/contenido.webp", "/images/beach-fest-4.webp"],
    includes: [
      { title: "Cobertura del evento", text: "Fotografía y video durante toda la jornada." },
      { title: "Piezas para redes", items: ["Reels y TikToks", "Recap del evento", "Historias en tiempo real"] },
    ],
    benefits: ["Contenido listo para publicar", "Visibilidad para tu marca", "Recuerdos que se comparten"],
    keywords: ["contenido para redes eventos", "cobertura de eventos Barranquilla", "video de eventos corporativos"],
  },
];

export const steps = [
  { title: "Escuchamos", text: "Entendemos tu objetivo, tu público y tu presupuesto." },
  { title: "Diseñamos", text: "Te proponemos un concepto y una experiencia a la medida." },
  { title: "Producimos", text: "Logística, escenarios, juzgamiento y ambientación. Tú solo disfrutas." },
  { title: "Compartimos", text: "Entregamos contenido del evento y resultados para medir el impacto." },
];

export const about = {
  title: "¿Quiénes somos?",
  text: "Star Shine S.A.S. es una empresa social de Barranquilla dedicada a la organización de eventos privados y públicos. Nos especializamos en actividades deportivas para los sectores corporativo, educativo y cultural, con un objetivo claro: ayudar a las organizaciones a promover una cultura de bienestar que impacte la salud física y psicológica de las personas.",
  mission:
    "Producir un impacto en la vida de las personas creando momentos y espacios intensos de emociones, que generen valor mediante la innovación, la calidad y la excelencia en el servicio, actuando con responsabilidad ambiental.",
  // ⚠️ Visión actualizada sin año — ajusta si quieres una meta con fecha
  vision:
    "Ser la compañía líder en eventos deportivos de la región Caribe colombiana, reconocida por innovar y ofrecer experiencias únicas.",
};

export const pillars = [
  { title: "Salud integral", text: "Actividades que fortalecen el cuerpo y revitalizan el espíritu." },
  { title: "Cultura y deporte", text: "Fusionamos deporte con música y artes para un bienestar completo." },
  { title: "Experiencias inmersivas", text: "Elementos artísticos y musicales que hacen único cada evento." },
  { title: "Conexión y comunidad", text: "Compañerismo y colaboración que construyen comunidades sólidas." },
  { title: "Compromiso social", text: "Formación deportiva de niños y gestión ambiental responsable." },
];

export type Project = {
  title: string;
  category: "Deportivo" | "Corporativo" | "Contenido";
  place: string;
  image: string;
  video?: string;
  featured?: boolean;
  /** Oculto en la web (fotos de stock, no es un evento real) */
  hidden?: boolean;
};

// Solo se muestran los eventos reales. Los marcados `hidden` usan fotos de stock (ver TODO.md).
export const projects: Project[] = [
  { title: "Beach Fest", category: "Deportivo", place: "Barranquilla", image: "/images/beach-fest-3.webp", featured: true },
  { title: "Torneo interempresarial de voleibol", category: "Corporativo", place: "Barranquilla", image: "/images/voleibol.webp", hidden: true },
  { title: "Beach Fest · Equipos", category: "Deportivo", place: "Barranquilla", image: "/images/beach-fest-2.webp" },
  { title: "Jornada de bienestar · Yoga", category: "Corporativo", place: "Atlántico", image: "/images/yoga.webp", hidden: true },
  { title: "Cobertura y recap del evento", category: "Contenido", place: "Barranquilla", image: "/images/contenido.webp", hidden: true },
  { title: "Beach Fest · Noche", category: "Deportivo", place: "Barranquilla", image: "/images/beach-fest-4.webp" },
];

// ⚠️ OCULTO — testimonios de ejemplo, reemplazar por testimonios reales con permiso del cliente
export const testimonials = [
  {
    quote: "Aquí va el testimonio de un cliente: qué evento hicieron con Star Shine y qué resultado obtuvieron.",
    name: "Nombre del cliente",
    role: "Cargo · Empresa",
  },
  {
    quote: "Un segundo testimonio, idealmente de una empresa que haya hecho un torneo o un programa de bienestar.",
    name: "Nombre del cliente",
    role: "Cargo · Empresa",
  },
  {
    quote: "Un tercer testimonio, por ejemplo de un participante o de una institución educativa o cultural.",
    name: "Nombre del cliente",
    role: "Cargo · Empresa",
  },
];

export const ecosystem = [
  {
    key: "club",
    name: "Star Club",
    tagline: "Formamos personas, no solo jugadores",
    text: "Nuestro club deportivo juvenil en Barranquilla. Entrenamos cuerpo, mente y espíritu: los talentosos se proyectan como profesionales y todos crecen como personas. Hoy entrenamos baloncesto y vamos por voleibol, fútbol y surf.",
    cta: "Inscribir a un deportista",
    wa: "¡Hola! Quiero información sobre las inscripciones de Star Club.",
    login: { label: "Ingresar a la app", href: apps.starClub },
    // Foto real del club, sin caras reconocibles y con los nombres de las camisetas difuminados (original en "Fotos Star Club/Star2.jpeg")
    image: "/images/star-club.webp",
    imagePosition: "object-[50%_60%]",
    accent: "from-lavender to-brand",
  },
  {
    key: "fundacion",
    // ⚠️ Confirma el nombre público de la fundación
    name: "Fundación Star Shine",
    tagline: "El deporte como motor de transformación",
    text: "Llevamos el deporte a niños y jóvenes de comunidades vulnerables con becas deportivas y acompañamiento psicológico, porque el deporte también protege la salud mental.",
    cta: "Quiero apoyar",
    wa: "¡Hola! Quiero saber cómo apoyar a la Fundación Star Shine.",
    image: "/images/integracion.webp",
    accent: "from-brand to-mauve",
  },
];

/**
 * Política de tratamiento de datos: borrador pendiente de revisión legal (ver TODO.md).
 * Mientras `policyApproved` sea false, la página solo se ve en modo desarrollo.
 */
export const legal = {
  policyApproved: false,
  policyPath: "/politica-de-datos",
};
export const showPolicy = legal.policyApproved || process.env.NODE_ENV !== "production";

/** Líneas de servicio (bloque "Nuestras líneas" del inicio) */
export const lines = [
  {
    key: "eventos",
    title: "Eventos deportivos",
    audience: "Para empresas, instituciones y organizadores",
    text: "Torneos, bienestar empresarial, team building, juzgamiento y escenarios deportivos.",
    href: "/#servicios",
    image: "/images/beach-fest-1.webp",
  },
  {
    key: "contenido",
    title: "Contenido y marketing digital",
    audience: "Para marcas y negocios",
    text: "Video, fotografía, redes sociales y gestión de pauta.",
    href: "/contenido-marketing-digital",
    image: "/images/contenido.webp",
  },
  {
    key: "personal",
    title: "Administración de personal",
    audience: "Para empresas del exterior",
    text: "Tu colaborador en Colombia, con contrato laboral colombiano y nómina a cargo de Star Shine.",
    href: "/administracion-de-personal",
    image: null,
  },
];

/** Línea: Contenido y marketing digital (texto aprobado, ver CLAUDE.md) */
export const contentMarketing = {
  title: "Contenido y marketing digital",
  audience: "Para marcas y negocios",
  intro:
    "Creamos contenido que conecta: video, fotografía, redes sociales y gestión de pauta para marcas y negocios. Producimos el material y te ayudamos a llevarlo a las audiencias correctas.",
  image: "/images/contenido.webp",
  includes: [
    { title: "Video", text: "Producción de video para marcas y negocios." },
    { title: "Fotografía", text: "Fotografía para marcas y negocios." },
    { title: "Redes sociales", text: "Contenido pensado para cada una de tus redes." },
    { title: "Gestión de pauta", text: "Llevamos tu contenido a las audiencias correctas con pauta publicitaria." },
  ],
  focus: ["Moda y deporte", "Colombia y el exterior", "Producción y pauta en un mismo equipo"],
  // ⚠️ Casos ocultos hasta tener autorización escrita de los clientes (ver TODO.md)
  cases: [] as { title: string; image: string }[],
  keywords: ["marketing digital Barranquilla", "producción de contenido", "contenido para redes sociales", "gestión de pauta", "fotografía de moda", "video para marcas"],
};
