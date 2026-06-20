import type { Language } from "@/lib/types";
import { translations } from "@/lib/i18n";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer className="border-t border-border bg-background px-6 py-8 text-center">
      <p className="text-sm text-textMuted">Raphael Sampaio © 2026</p>
      <p className="mt-1 text-xs text-textMuted">{t.built}</p>
    </footer>
  );
}
