/**
 * Administración de personal en Colombia — contenido ES / EN.
 * El texto `intro` es el aprobado (ver CLAUDE.md). El resto solo reorganiza ese mismo texto.
 * Prohibido: "suministro de personal", "alquiler de empleados", "outsourcing de trabajadores",
 * "sin responsabilidad laboral", "100% legal", "cero riesgo", citar normas, selección de personal.
 */

export type Lang = "es" | "en";

export const payrollPaths: Record<Lang, string> = {
  es: "/administracion-de-personal",
  en: "/en/payroll-colombia",
};

export const payroll = {
  es: {
    metaTitle: "Administración de personal en Colombia para empresas del exterior",
    metaDescription:
      "Star Shine vincula a tu colaborador en Colombia como empleado propio, con contrato laboral colombiano, y se encarga de la nómina, la seguridad social, las prestaciones y el cumplimiento.",
    breadcrumbHome: "Inicio",
    breadcrumbSection: "Servicios",
    eyebrow: "Para empresas del exterior",
    title: "Administración de personal en Colombia",
    intro:
      "Administración laboral en Colombia para empresas del exterior. Si tu empresa necesita un colaborador en Colombia, Star Shine lo vincula como empleado propio con contrato laboral colombiano y se encarga de la nómina, la seguridad social, las prestaciones y el cumplimiento. Tu equipo define los objetivos y prioridades; Star Shine gestiona la relación laboral con sus propios procesos y reporta cada mes.",
    switchLabel: "English",
    portalLabel: "Portal de clientes",
    ctaPrimary: "Escríbenos",
    howTitle: "Cómo funciona",
    steps: [
      { title: "Tu equipo define", text: "Los objetivos y prioridades del trabajo los define tu empresa." },
      { title: "Vinculamos", text: "Star Shine vincula al colaborador como empleado propio, con contrato laboral colombiano." },
      { title: "Administramos", text: "Nos encargamos de la nómina, la seguridad social, las prestaciones y el cumplimiento." },
      { title: "Reportamos", text: "Gestionamos la relación laboral con nuestros propios procesos y te reportamos cada mes." },
    ],
    rolesTitle: "Quién hace qué",
    roles: [
      { who: "Tu empresa", items: ["Define los objetivos y prioridades"] },
      {
        who: "Star Shine",
        items: [
          "Es el empleador, con contrato laboral colombiano",
          "Nómina",
          "Seguridad social",
          "Prestaciones",
          "Cumplimiento",
          "Reporte mensual",
        ],
      },
    ],
    formTitle: "Hablemos",
    formText: "Cuéntanos qué necesita tu empresa y te respondemos por correo.",
    form: {
      name: "Nombre",
      company: "Empresa",
      country: "País",
      email: "Correo",
      message: "Mensaje",
      messagePlaceholder: "¿Qué necesita tu empresa en Colombia?",
      consentBefore: "Autorizo el tratamiento de mis datos personales según la",
      consentLink: "política de tratamiento de datos",
      submit: "Enviar",
      sending: "Enviando…",
      ok: "¡Gracias! Recibimos tu mensaje y te responderemos pronto.",
      error: "No pudimos enviar el mensaje. Escríbenos directamente a",
    },
    otherChannels: "También puedes escribirnos a",
  },
  en: {
    metaTitle: "Payroll and employment administration in Colombia for companies abroad",
    metaDescription:
      "Star Shine hires your team member in Colombia as our own employee under a Colombian employment contract and handles payroll, social security, statutory benefits and compliance.",
    breadcrumbHome: "Home",
    breadcrumbSection: "Services",
    eyebrow: "For companies abroad",
    title: "Payroll & employment in Colombia",
    intro:
      "Payroll and employment administration in Colombia for companies abroad. When your company needs a team member in Colombia, Star Shine hires them as our own employee under a Colombian employment contract and handles payroll, social security, statutory benefits and compliance. Your team sets the goals and priorities; Star Shine manages the employment relationship with its own processes and reports every month.",
    switchLabel: "Español",
    portalLabel: "Client portal",
    ctaPrimary: "Contact us",
    howTitle: "How it works",
    steps: [
      { title: "Your team sets", text: "Your company sets the goals and priorities of the work." },
      { title: "We hire", text: "Star Shine hires the team member as our own employee under a Colombian employment contract." },
      { title: "We administer", text: "We handle payroll, social security, statutory benefits and compliance." },
      { title: "We report", text: "We manage the employment relationship with our own processes and report to you every month." },
    ],
    rolesTitle: "Who does what",
    roles: [
      { who: "Your company", items: ["Sets the goals and priorities"] },
      {
        who: "Star Shine",
        items: [
          "Is the employer, under a Colombian employment contract",
          "Payroll",
          "Social security",
          "Statutory benefits",
          "Compliance",
          "Monthly report",
        ],
      },
    ],
    formTitle: "Let's talk",
    formText: "Tell us what your company needs and we'll get back to you by email.",
    form: {
      name: "Name",
      company: "Company",
      country: "Country",
      email: "Email",
      message: "Message",
      messagePlaceholder: "What does your company need in Colombia?",
      consentBefore: "I authorize the processing of my personal data under the",
      consentLink: "data processing policy",
      submit: "Send",
      sending: "Sending…",
      ok: "Thank you! We received your message and will get back to you soon.",
      error: "We couldn't send your message. Please write to us at",
    },
    otherChannels: "You can also reach us at",
  },
} as const;

export type PayrollCopy = (typeof payroll)[Lang];
