import type { Language } from './types'

export const translations = {
  en: {
    // Header
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact'
    },
    // Hero
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Senior React Native Engineer',
      subtitle: 'Building mobile apps, web platforms and EdTech products that reach real users.',
      cta: 'See my work',
      ctaContact: 'Get in touch'
    },
    // About
    about: {
      title: 'About me',
      body: 'I\'m a Senior React Native Engineer with 8+ years of experience building mobile apps for iOS and Android. I\'ve worked on fintech super-apps, mental health platforms, sports apps and EdTech products. I\'m also the founder of Klog Academy, an EdTech app that teaches mathematics using the Singapore Math CPA method with sci-fi gamification.\n\nI\'m currently open to remote contractor roles with US-based companies.',
      location: 'Fortaleza, CE — Brazil',
      available: 'Available for remote work',
      focus: 'Remote contractor — US companies',
      coffee: 'Buy Me a Coffee'
    },
    // Projects
    projects: {
      title: 'Projects',
      subtitle: 'Apps and platforms I\'ve built or contributed to.',
      viewWeb: 'Visit website',
      viewAppStore: 'App Store',
      viewPlayStore: 'Play Store',
      viewGithub: 'GitHub',
      status: {
        live: 'Live',
        archived: 'Archived',
        'in-progress': 'In progress'
      }
    },
    // Skills
    skills: {
      title: 'Skills & Tech',
      subtitle: 'Technologies I work with.'
    },
    // Experience
    experience: {
      title: 'Experience',
      subtitle: 'Companies I\'ve worked with over the years.'
    },
    // Contact
    contact: {
      title: 'Get in touch',
      subtitle: 'Open to remote contractor roles with US-based companies.',
      email: 'Send an email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    // Footer
    footer: {
      built: 'Built with Next.js and Tailwind CSS',
      rights: 'All rights reserved'
    }
  },
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Habilidades',
      experience: 'Experiência',
      contact: 'Contato'
    },
    hero: {
      greeting: 'Olá, eu sou',
      title: 'Engenheiro Senior React Native',
      subtitle: 'Construindo apps mobile, plataformas web e produtos EdTech que chegam a usuários reais.',
      cta: 'Ver meu trabalho',
      ctaContact: 'Entre em contato'
    },
    about: {
      title: 'Sobre mim',
      body: 'Sou um Engenheiro Senior React Native com mais de 8 anos de experiência construindo apps mobile para iOS e Android. Trabalhei em super-apps de fintech, plataformas de saúde mental, apps de esportes e produtos EdTech. Também sou fundador do Klog Academy, um app EdTech que ensina matemática usando o método Singapore Math CPA com gamificação sci-fi.\n\nEstou aberto a vagas remotas como contractor para empresas americanas.',
      location: 'Fortaleza, CE — Brasil',
      available: 'Disponível para trabalho remoto',
      focus: 'Contractor remoto — empresas americanas',
      coffee: 'Buy Me a Coffee'
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Apps e plataformas que construí ou contribuí.',
      viewWeb: 'Visitar site',
      viewAppStore: 'App Store',
      viewPlayStore: 'Play Store',
      viewGithub: 'GitHub',
      status: {
        live: 'Ativo',
        archived: 'Arquivado',
        'in-progress': 'Em progresso'
      }
    },
    skills: {
      title: 'Habilidades & Tecnologias',
      subtitle: 'Tecnologias com as quais trabalho.'
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Empresas com as quais trabalhei ao longo dos anos.'
    },
    contact: {
      title: 'Entre em contato',
      subtitle: 'Aberto a vagas remotas como contractor para empresas americanas.',
      email: 'Enviar e-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: {
      built: 'Construído com Next.js e Tailwind CSS',
      rights: 'Todos os direitos reservados'
    }
  }
}

export type Translations = typeof translations.en
export type TranslationKey = keyof Translations

export function t(lang: Language, section: keyof Translations, key: string): string {
  const s = translations[lang][section] as Record<string, unknown>
  return (s?.[key] as string) ?? ''
}
