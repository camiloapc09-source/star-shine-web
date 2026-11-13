import { ImageResponse } from "next/og";

export const alt = "Star Shine · Creamos momentos de oro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen que aparece al compartir el link en WhatsApp, Facebook, LinkedIn… */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          color: "white",
          background: "linear-gradient(135deg, #0f1026 0%, #4429a6 60%, #7f71d9 100%)",
        }}
      >
        <div style={{ fontSize: 40, color: "#f2421b", display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#f2421b">
            <path d="M12 0c.6 6.6 4.4 10.9 12 12-7.6 1.1-11.4 5.4-12 12-.6-6.6-4.4-10.9-12-12C7.6 10.9 11.4 6.6 12 0Z" />
          </svg>
          STAR SHINE
        </div>
        <div style={{ fontSize: 110, fontWeight: 800, lineHeight: 0.95, marginTop: 20, display: "flex", flexDirection: "column" }}>
          <span>CREAMOS MOMENTOS</span>
          <span>DE ORO</span>
        </div>
        <div style={{ fontSize: 34, marginTop: 30, opacity: 0.8, display: "flex" }}>
          Eventos deportivos y bienestar empresarial · Barranquilla
        </div>
      </div>
    ),
    size,
  );
}
