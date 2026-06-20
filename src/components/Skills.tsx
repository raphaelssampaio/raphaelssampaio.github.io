'use client'

import { motion } from 'framer-motion'
import type { Language } from '@/lib/types'
import { translations } from '@/lib/i18n'
import { skills } from '@/data/skills'

interface SkillsProps {
  lang: Language
}

export default function Skills({ lang }: SkillsProps) {
  const t = translations[lang].skills

  return (
    <section id="skills" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">{t.title}</h2>
        <p className="mt-2 text-textMuted">{t.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <motion.div
              key={skill.category[lang]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="text-lg font-semibold text-white">{skill.category[lang]}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-gray-700/40 px-2 py-1 font-mono text-xs text-textMuted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
