import { legal } from "@/lib/site";

type Props = { before: string; link: string };

/** Autorización de tratamiento de datos personales (Ley 1581 de 2012) */
export function ConsentCheckbox({ before, link }: Props) {
  return (
    <label className="flex items-start gap-3 text-sm text-white/70">
      <input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 accent-[var(--color-ember)]" />
      <span>
        {before}{" "}
        <a href={legal.policyPath} target="_blank" rel="noopener" className="text-white underline underline-offset-2 hover:text-lilac">
          {link}
        </a>
        .
      </span>
    </label>
  );
}
