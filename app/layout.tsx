import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { lines, services, site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Star Shine | Eventos deportivos y bienestar empresarial en Barranquilla",
    template: "%s | Star Shine",
  },
  description: site.description,
  keywords: [
    "eventos deportivos Barranquilla",
    "bienestar empresarial",
    "team building Barranquilla",
    "torneos interempresariales",
    "organización de eventos Atlántico",
    "juzgamiento deportivo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: site.name,
    title: "Star Shine | Creamos momentos de oro",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f1026",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#negocio`,
  name: site.legalName,
  alternateName: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/brand/logo-purple.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  areaServed: ["Barranquilla", "Atlántico", "Región Caribe de Colombia"],
  sameAs: [`https://instagram.com/${site.instagram}`],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: [
      ...services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.short, url: `${site.url}/servicios/${s.slug}` },
      })),
      ...lines
        .filter((l) => l.key !== "eventos")
        .map((l) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: l.title, description: l.text, url: `${site.url}${l.href}` },
        })),
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" className={poppins.variable}>
      <body className="font-sans">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ember focus:px-5 focus:py-3">
          Saltar al contenido
        </a>
        <SmoothScroll />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppFab />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
