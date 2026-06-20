'use client'

import { motion } from 'framer-motion'
import type { Language } from '@/lib/types'
import { translations } from '@/lib/i18n'
import { experience } from '@/data/experience'

interface ExperienceProps {
  lang: Language
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Experience({ lang }: ExperienceProps) {
  const t = translations[lang].experience

  return (
    <section id="experience" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white">{t.title}</h2>
        <p className="mt-2 text-textMuted">{t.subtitle}</p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mt-10 flex flex-col gap-8"
        >
          {experience.map((exp) => (
            <motion.div
              key={exp.company}
              variants={item}
              className="border-l-2 border-primary pl-6"
            >
              <h3 className="text-lg font-bold text-white">{exp.company}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{exp.role[lang]}</p>
              <p className="mt-1 text-sm text-textMuted">{exp.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-textMuted">
                {exp.description[lang]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-700/40 px-2 py-1 font-mono text-xs text-textMuted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
