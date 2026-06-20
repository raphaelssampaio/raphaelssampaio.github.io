"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/types";
import { translations } from "@/lib/i18n";

interface HeroProps {
  lang: Language;
}

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero({ lang }: HeroProps) {
  const hero = translations[lang].hero;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="text-lg text-textMuted">{hero.greeting}</p>
        <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Raphael Sampaio
        </h1>
        <p className="mt-4 text-xl font-semibold text-primary sm:text-2xl">
          {hero.title}
        </p>
        <p className="mt-4 text-base text-textMuted sm:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo("#projects")}
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {hero.cta}
          </button>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-primary"
          >
            {hero.ctaContact}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
