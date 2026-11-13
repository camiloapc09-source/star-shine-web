import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legal, showPolicy, site } from "@/lib/site";

/**
 * ⚠️ BORRADOR — pendiente de revisión legal (ver TODO.md).
 * Mientras `legal.policyApproved` sea false, esta página no existe en producción.
 */

export const metadata: Metadata = {
  title: "Política de tratamiento de datos personales",
  description: `Política de tratamiento de datos personales de ${site.legalName}.`,
  alternates: { canonical: legal.policyPath },
  robots: legal.policyApproved ? { index: true, follow: true } : { index: false, follow: false },
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Responsable del tratamiento",
    body: (
      <ul>
        <li><strong>Razón social:</strong> {site.legalName}</li>
        <li><strong>NIT:</strong> {site.nit}</li>
        <li><strong>Ciudad:</strong> {site.city}, {site.region}, Colombia</li>
        <li><strong>Correo:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
        <li><strong>Teléfono:</strong> {site.phone}</li>
      </ul>
    ),
  },
  {
    title: "2. Alcance",
    body: (
      <p>
        Esta política aplica a los datos personales que recibimos a través de este sitio web, sus formularios, WhatsApp, correo electrónico y
        redes sociales.
      </p>
    ),
  },
  {
    title: "3. Datos que tratamos",
    body: (
      <p>
        Los datos que tú nos entregas: nombre, empresa o institución, país, correo electrónico, teléfono y el contenido de tu mensaje o
        solicitud.
      </p>
    ),
  },
  {
    title: "4. Finalidades",
    body: (
      <ul>
        <li>Responder tus solicitudes, preguntas y cotizaciones.</li>
        <li>Contactarte sobre los servicios que solicitaste.</li>
        <li>Gestionar la relación comercial o contractual que se derive de tu solicitud.</li>
        <li>Cumplir obligaciones legales.</li>
      </ul>
    ),
  },
  {
    title: "5. Tus derechos",
    body: (
      <>
        <p>Como titular de los datos tienes derecho a:</p>
        <ul>
          <li>Conocer, actualizar y rectificar tus datos personales.</li>
          <li>Solicitar prueba de la autorización que nos diste.</li>
          <li>Ser informado sobre el uso que les damos a tus datos.</li>
          <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
          <li>Revocar la autorización y solicitar la supresión de tus datos.</li>
          <li>Acceder gratuitamente a tus datos personales.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Cómo ejercer tus derechos",
    body: (
      <p>
        Escríbenos a <a href={`mailto:${site.email}`}>{site.email}</a> indicando tu nombre, tu solicitud y un dato de contacto. Las consultas se
        atienden en un plazo máximo de diez (10) días hábiles y los reclamos en un plazo máximo de quince (15) días hábiles.
      </p>
    ),
  },
  {
    title: "7. Proveedores tecnológicos",
    body: (
      <p>
        Para operar este sitio y comunicarnos contigo usamos proveedores de alojamiento web, correo electrónico y mensajería (como WhatsApp), que
        pueden estar ubicados fuera de Colombia. Solo les compartimos los datos necesarios para prestar esos servicios.
      </p>
    ),
  },
  {
    title: "8. Niños, niñas y adolescentes",
    body: (
      <p>
        Cuando tratamos datos de menores de edad (por ejemplo, en inscripciones de Star Club), lo hacemos con autorización de su representante
        legal y respetando sus derechos.
      </p>
    ),
  },
  {
    title: "9. Seguridad",
    body: <p>Aplicamos medidas razonables para proteger tus datos contra pérdida, acceso no autorizado o uso indebido.</p>,
  },
  {
    title: "10. Vigencia",
    body: <p>Esta política rige desde su publicación. Te informaremos por este medio cualquier cambio sustancial.</p>,
  },
];

export default function PrivacyPolicyPage() {
  if (!showPolicy) notFound();

  return (
    <section className="mx-auto max-w-3xl px-4 pt-36 pb-24 sm:px-8">
      {!legal.policyApproved && (
        <p className="mb-10 rounded-2xl border border-ember/60 bg-ember/10 p-4 text-sm font-semibold text-white">
          ⚠️ BORRADOR — pendiente de revisión legal. Esta página no se publica hasta que se apruebe.
        </p>
      )}
      <h1 className="display text-4xl sm:text-6xl">Política de tratamiento de datos personales</h1>
      <p className="mt-6 font-light text-white/70">
        En {site.legalName} respetamos tus datos personales. Esta política explica cómo los recolectamos, usamos y protegemos, conforme a la Ley
        1581 de 2012.
      </p>
      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <article key={s.title}>
            <h2 className="text-xl font-bold">{s.title}</h2>
            <div className="mt-3 space-y-3 font-light text-white/75 [&_a]:text-white [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-white [&_ul]:space-y-1.5">
              {s.body}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
