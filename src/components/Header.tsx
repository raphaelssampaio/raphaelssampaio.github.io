"use client";

import type { Language } from "@/lib/types";
import { translations } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

interface HeaderProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

const navItems: { key: keyof typeof translations.en.nav; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
];

export default function Header({ lang, onChangeLang }: HeaderProps) {
  const nav = translations[lang].nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-2">
          <span className="font-sans text-lg font-semibold text-white">
            Raphael Sampaio
          </span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-textMuted transition-colors hover:text-text"
              >
                {nav[item.key]}
              </a>
            ))}
          </nav>

          <LanguageToggle lang={lang} onChange={onChangeLang} />
        </div>
      </div>
    </header>
  );
}
