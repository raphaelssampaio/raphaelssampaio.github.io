import { Skill } from '../lib/types'

export const skills: Skill[] = [
  {
    category: { en: 'Mobile', pt: 'Mobile' },
    items: [
      'React Native (CLI & Expo)',
      'Expo Router',
      'TypeScript',
      'JavaScript (ES6+)',
      'Java (Android)',
      'iOS (Swift/Xcode)',
      'React Native Skia',
      'Shopify FlashList',
      'React Native Gesture Handler',
      'React Native SVG',
      'React Native Nitro Modules'
    ]
  },
  {
    category: { en: 'State & Data', pt: 'Estado & Dados' },
    items: ['Redux Toolkit', 'TanStack Query', 'MMKV', 'Zustand 5', 'Context API']
  },
  {
    category: { en: 'UI & Styling', pt: 'UI & Estilização' },
    items: ['Tailwind CSS', 'Styled Components', 'Reanimated 4', 'Expo Linear Gradient', 'Expo Blur', 'Expo Haptics']
  },
  {
    category: { en: 'Testing & QA', pt: 'Testes & QA' },
    items: ['Jest', 'React Native Testing Library', 'Detox']
  },
  {
    category: { en: 'Backend & Cloud', pt: 'Backend & Cloud' },
    items: ['Firebase (Auth, Firestore, Crashlytics, Analytics)', 'REST APIs', 'GraphQL', 'AWS', 'CI/CD (Bitrise / GitHub Actions)']
  },
  {
    category: { en: 'Tools', pt: 'Ferramentas' },
    items: ['Git', 'Xcode', 'Android Studio', 'Flipper', 'Claude Code']
  },
  {
    category: { en: 'Certifications', pt: 'Certificações' },
    items: [
      'React Native Specialist Track — Rocketseat',
      'AWS Cloud Quest: Generative AI Practitioner — Mar 2026',
      'AWS Cloud Quest: Cloud Practitioner — Mar 2026',
      'Postgraduate — Information Security (Unichristus)',
      'Graduation — Systems Analysis & Development (Estácio de Sá)'
    ]
  }
]
