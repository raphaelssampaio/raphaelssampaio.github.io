'use client'

import { motion } from 'framer-motion'
import type { Language } from '@/lib/types'
import { translations } from '@/lib/i18n'

interface AboutProps {
  lang: Language
}

export default function About({ lang }: AboutProps) {
  const about = translations[lang].about
  const paragraphs = about.body.split('\n\n')

  return (
    <section id="about" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-l-4 border-primary pl-4 text-3xl font-bold text-white"
        >
          {about.title}
        </motion.h2>

        <div className="mt-10 flex flex-col gap-10 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:w-3/5"
          >
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 text-base leading-relaxed text-textMuted">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 md:w-2/5"
          >
            <div className="rounded-lg border border-border bg-surface p-4">
              <p className="text-sm text-textMuted">
                📍 <span className="text-text">{about.location}</span>
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4">
              <p className="text-sm text-textMuted">
                ✅ <span className="text-green-500">{about.available}</span>
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4">
              <p className="text-sm text-textMuted">
                💼 <span className="text-text">{about.focus}</span>
              </p>
            </div>
            <a
              href="https://buymeacoffee.com/rsscode"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-surface p-4 text-sm text-textMuted transition-colors hover:border-primary"
            >
              ☕ <span className="text-text">{about.coffee}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
