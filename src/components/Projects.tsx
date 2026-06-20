'use client'

import { motion } from 'framer-motion'
import type { Language, Project } from '@/lib/types'
import { translations } from '@/lib/i18n'
import { projects } from '@/data/projects'

interface ProjectsProps {
  lang: Language
}

const statusStyles: Record<Project['status'], string> = {
  live: 'bg-green-500/10 text-green-500',
  archived: 'bg-gray-500/10 text-gray-400',
  'in-progress': 'bg-amber-500/10 text-amber-500',
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

export default function Projects({ lang }: ProjectsProps) {
  const t = translations[lang].projects
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <section id="projects" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white">{t.title}</h2>
        <p className="mt-2 text-textMuted">{t.subtitle}</p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sorted.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="flex flex-col rounded-lg border border-border bg-surface p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{project.emoji}</span>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
                >
                  {t.status[project.status]}
                </span>
              </div>

              <p className="mt-3 text-sm text-primary">{project.role[lang]}</p>
              <p className="mt-2 text-sm leading-relaxed text-textMuted">
                {project.description[lang]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-700/40 px-2 py-1 font-mono text-xs text-textMuted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                {project.links.web && (
                  <a
                    href={project.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textMuted transition-colors hover:text-primary"
                  >
                    {t.viewWeb}
                  </a>
                )}
                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textMuted transition-colors hover:text-primary"
                  >
                    {t.viewAppStore}
                  </a>
                )}
                {project.links.playStore && (
                  <a
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textMuted transition-colors hover:text-primary"
                  >
                    {t.viewPlayStore}
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textMuted transition-colors hover:text-primary"
                  >
                    {t.viewGithub}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
