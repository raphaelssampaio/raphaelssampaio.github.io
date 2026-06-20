import { Skill } from '../lib/types'

export const skills: Skill[] = [
  {
    category: { en: 'Mobile', pt: 'Mobile' },
    items: ['React Native', 'Expo', 'iOS (Swift/Xcode)', 'Android (Kotlin)', 'tvOS', 'Android TV']
  },
  {
    category: { en: 'Frontend', pt: 'Frontend' },
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES5/ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: { en: 'State & Data', pt: 'Estado & Dados' },
    items: ['Redux', 'Zustand', 'MMKV', 'React Query', 'Firebase', 'Supabase']
  },
  {
    category: { en: 'Backend & Cloud', pt: 'Backend & Cloud' },
    items: ['Node.js', 'REST APIs', 'GraphQL', 'AWS (Cloud Practitioner)', 'Firebase', 'Vercel']
  },
  {
    category: { en: 'Tools & Practices', pt: 'Ferramentas & Práticas' },
    items: ['Git', 'Claude Code', 'Cursor', 'Figma', 'Jest', 'Detox', 'RevenueCat', 'CodeMirror 6']
  },
  {
    category: { en: 'Certifications', pt: 'Certificações' },
    items: ['AWS Cloud Practitioner', 'AWS Generative AI Practitioner', 'Postgraduate — Information Security (Unichristus)']
  }
]
