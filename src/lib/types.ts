export type Language = 'en' | 'pt'

export interface LocalizedString {
  en: string
  pt: string
}

export interface Project {
  id: string
  title: string
  description: LocalizedString
  role: LocalizedString
  tech: string[]
  status: 'live' | 'archived' | 'in-progress'
  links: {
    web?: string
    appStore?: string
    playStore?: string
    github?: string
  }
  emoji: string
  featured: boolean
}

export interface Experience {
  company: string
  role: LocalizedString
  period: string
  description: LocalizedString
  tech: string[]
}

export interface Skill {
  category: LocalizedString
  items: string[]
}
