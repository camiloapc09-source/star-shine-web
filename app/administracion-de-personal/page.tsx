import type { Metadata } from "next";
import { PayrollPage } from "@/components/PayrollPage";
import { payroll, payrollPaths } from "@/lib/payroll";

const t = payroll.es;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: payrollPaths.es,
    languages: { "es-CO": payrollPaths.es, en: payrollPaths.en },
  },
  openGraph: { title: `${t.title} | Star Shine`, description: t.metaDescription, locale: "es_CO" },
};

export default function Page() {
  return <PayrollPage lang="es" />;
}
