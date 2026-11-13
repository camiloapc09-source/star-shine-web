/**
 * Recibe el formulario de Administración de personal y lo envía por correo con Resend.
 * Variables de entorno (ver .env.example): RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.
 */

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return Response.json({ ok: false }, { status: 400 });

  // Campo trampa: si viene lleno es un bot; se responde OK sin enviar nada
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 160),
    company: clean(body.company, 160),
    country: clean(body.country, 80),
    message: clean(body.message, 3000),
    source: clean(body.source, 60),
    lang: body.lang === "en" ? "en" : "es",
  };

  if (!data.name || !data.company || !data.message || !isEmail(data.email) || body.consent !== true) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const { RESEND_API_KEY: key, CONTACT_TO_EMAIL: to, CONTACT_FROM_EMAIL: from } = process.env;
  if (!key || !to || !from) {
    console.error("Formulario de contacto: faltan variables de entorno de correo");
    return Response.json({ ok: false, error: "not-configured" }, { status: 503 });
  }

  const text = [
    `Nuevo contacto desde la web (${data.source || "sitio"}, idioma: ${data.lang})`,
    "",
    `Nombre: ${data.name}`,
    `Empresa: ${data.company}`,
    `País: ${data.country || "—"}`,
    `Correo: ${data.email}`,
    "",
    "Mensaje:",
    data.message,
    "",
    `Autorizó el tratamiento de datos: sí (${new Date().toISOString()})`,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Web · Administración de personal · ${data.company}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Formulario de contacto: error de Resend", res.status, await res.text().catch(() => ""));
    return Response.json({ ok: false, error: "send-failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
