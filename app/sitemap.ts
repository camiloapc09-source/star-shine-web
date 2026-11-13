import type { MetadataRoute } from "next";
import { payrollPaths } from "@/lib/payroll";
import { legal, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({
      url: `${site.url}/servicios/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/contenido-marketing-digital`, changeFrequency: "monthly", priority: 0.8 },
    ...(["es", "en"] as const).map((lang) => ({
      url: `${site.url}${payrollPaths[lang]}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: { "es-CO": `${site.url}${payrollPaths.es}`, en: `${site.url}${payrollPaths.en}` } },
    })),
    ...(legal.policyApproved ? [{ url: `${site.url}${legal.policyPath}`, changeFrequency: "yearly" as const, priority: 0.2 }] : []),
  ];
}
