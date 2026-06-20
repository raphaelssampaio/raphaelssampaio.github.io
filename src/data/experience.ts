import { Experience } from '../lib/types'

export const experience: Experience[] = [
  {
    company: 'Klog Academy',
    role: { en: 'Founder & Solo Engineer', pt: 'Fundador & Engenheiro Solo' },
    period: '2025 — Present',
    description: {
      en: 'Built and launched an EdTech app from scratch teaching mathematics to children with Singapore Math CPA method and sci-fi gamification. Full product ownership: engineering, design, content and go-to-market.',
      pt: 'Construiu e lançou um app EdTech do zero ensinando matemática para crianças com o método Singapore Math CPA e gamificação sci-fi. Propriedade total do produto: engenharia, design, conteúdo e go-to-market.'
    },
    tech: ['React Native', 'Expo', 'Firebase', 'RevenueCat', 'Zustand', 'MMKV']
  },
  {
    company: 'Assuresoft / Mindless Labs',
    role: { en: 'React Native Engineer', pt: 'Engenheiro React Native' },
    period: '2023 — 2026',
    description: {
      en: 'Developed a mental health mobile app focused on mindfulness and emotional wellbeing, available on both iOS and Android.',
      pt: 'Desenvolveu um app mobile de saúde mental focado em mindfulness e bem-estar emocional, disponível para iOS e Android.'
    },
    tech: ['React Native', 'Expo', 'TypeScript']
  },
  {
    company: 'Grão',
    role: { en: 'Senior React Native Engineer', pt: 'Engenheiro Senior React Native' },
    period: '2021 — 2023',
    description: {
      en: 'Core engineer on a Brazilian fintech super-app with 250K+ downloads. Implemented features across digital account, investments and transfers with bank-grade security and 80% test coverage.',
      pt: 'Engenheiro core de um super-app de fintech brasileiro com mais de 250 mil downloads. Implementou funcionalidades em conta digital, investimentos e transferências com segurança bancária e 80% de cobertura de testes.'
    },
    tech: ['React Native', 'TypeScript', 'Redux', 'Jest', 'Detox']
  },
  {
    company: 'ScrumLaunch',
    role: { en: 'React Native Engineer', pt: 'Engenheiro React Native' },
    period: '2019 — 2021',
    description: {
      en: 'Worked on US-based client projects including Dabbl (rewards app) and Matchday (sports app for football fans).',
      pt: 'Trabalhou em projetos de clientes americanos incluindo Dabbl (app de recompensas) e Matchday (app de esportes para fãs de futebol).'
    },
    tech: ['React Native', 'TypeScript', 'Redux']
  }
]
