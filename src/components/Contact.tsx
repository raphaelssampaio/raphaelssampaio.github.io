'use client'

import { motion } from 'framer-motion'
import type { Language } from '@/lib/types'
import { translations } from '@/lib/i18n'

interface ContactProps {
  lang: Language
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact
  const coffee = translations[lang].about.coffee

  return (
    <section id="contact" className="bg-background px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold text-white">{t.title}</h2>
        <p className="mt-2 text-textMuted">{t.subtitle}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:raphaelsampaio.dev@gmail.com"
            className="rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            📧 {t.email}
          </a>
          <a
            href="https://www.linkedin.com/in/raphael-sampaio/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            💼 {t.linkedin}
          </a>
          <a
            href="https://github.com/raphaelssampaio"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            🐙 {t.github}
          </a>
        </div>

        <div className="mt-6">
          <a
            href="https://buymeacoffee.com/rsscode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-primary border border-border"
          >
            ☕ {coffee}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
