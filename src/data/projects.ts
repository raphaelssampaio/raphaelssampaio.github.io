import { Project } from "../lib/types";

export const projects: Project[] = [
  {
    id: "klog-academy",
    title: "Klog Academy",
    description: {
      en: "EdTech app that teaches mathematics to children using the Singapore Math CPA method with sci-fi gamification. Built and launched solo from zero — available on App Store and Google Play.",
      pt: "App EdTech que ensina matemática para crianças usando o método Singapore Math CPA com gamificação sci-fi. Construído e lançado solo do zero — disponível na App Store e Google Play.",
    },
    role: {
      en: "Founder & Solo Engineer",
      pt: "Fundador & Engenheiro Solo",
    },
    tech: ["React Native", "Expo", "Firebase", "RevenueCat", "Zustand", "MMKV"],
    status: "live",
    links: {
      web: "https://www.klogacademy.com.br",
      appStore: "https://apps.apple.com/br/app/klog-academy/id6764077956",
      playStore:
        "https://play.google.com/store/apps/details?id=com.klogacademy",
    },
    emoji: "🚀",
    featured: true,
  },
  {
    id: "grao",
    title: "Grão",
    description: {
      en: "Brazilian fintech super-app with 250K+ downloads. Features include digital account, investments, transfers, and bank-grade security. Built with 80% test coverage.",
      pt: "Super-app de fintech brasileiro com mais de 250 mil downloads. Inclui conta digital, investimentos, transferências e segurança bancária. Construído com 80% de cobertura de testes.",
    },
    role: {
      en: "Senior React Native Engineer",
      pt: "Engenheiro Senior React Native",
    },
    tech: ["React Native", "TypeScript", "Redux", "Jest", "Detox"],
    status: "live",
    links: {
      appStore: "https://apps.apple.com/br/app/gr%C3%A3o/id1547413307",
      playStore:
        "https://play.google.com/store/apps/details?id=com.graoapp&hl=pt_BR",
    },
    emoji: "💰",
    featured: true,
  },
  {
    id: "mindless",
    title: "Mindless Labs",
    description: {
      en: "Mental health mobile app focused on mindfulness, habit and emotional wellbeing. Available on both App Store and Google Play.",
      pt: "App mobile de saúde mental focado em mindfulness, rastreamento de hábitos e bem-estar emocional. Disponível na App Store e Google Play.",
    },
    role: {
      en: "React Native Engineer",
      pt: "Engenheiro React Native",
    },
    tech: ["React Native", "Expo", "TypeScript"],
    status: "live",
    links: {
      appStore: "https://apps.apple.com/us/app/mindless-labs/id6673917251",
      playStore:
        "https://play.google.com/store/apps/details?id=com.mindless.mindlessapp",
    },
    emoji: "🧘",
    featured: true,
  },
  {
    id: "matchday",
    title: "Matchday",
    description: {
      en: "Sports app for football fans — match schedules, live scores, team news and community features. Available on App Store and Google Play.",
      pt: "App de esportes para fãs de futebol — calendário de jogos, placares ao vivo, notícias dos times e funcionalidades de comunidade. Disponível na App Store e Google Play.",
    },
    role: {
      en: "React Native Engineer",
      pt: "Engenheiro React Native",
    },
    tech: ["React Native", "TypeScript", "Redux"],
    status: "live",
    links: {
      appStore: "https://apps.apple.com/br/app/play-matchday/id1666868601",
      playStore:
        "https://play.google.com/store/apps/details?id=com.matchday_app&hl=pt_BR",
    },
    emoji: "⚽",
    featured: false,
  },
  {
    id: "nodekatas",
    title: "NodeKatas",
    description: {
      en: "Open-source browser-based interactive platform for learning Node.js. 30 exercises across 3 trails, running real Node.js via WebContainers. Supports 6 languages.",
      pt: "Plataforma interativa open-source baseada em browser para aprender Node.js. 30 exercícios em 3 trilhas, rodando Node.js real via WebContainers. Suporta 6 idiomas.",
    },
    role: {
      en: "Creator & Solo Engineer",
      pt: "Criador & Engenheiro Solo",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "WebContainers",
      "CodeMirror 6",
      "Tailwind CSS",
    ],
    status: "live",
    links: {
      web: "https://nodekatas.vercel.app/",
      github: "https://github.com/raphaelssampaio/nodekatas",
    },
    emoji: "🟢",
    featured: true,
  },
  {
    id: "reactjskatas",
    title: "ReactJSKatas",
    description: {
      en: "Open-source browser-based interactive platform for learning React. 34 exercises across 4 trails including React 19. Uses Babel Standalone + iframe for live preview. Supports 6 languages.",
      pt: "Plataforma interativa open-source baseada em browser para aprender React. 34 exercícios em 4 trilhas incluindo React 19. Usa Babel Standalone + iframe para preview ao vivo. Suporta 6 idiomas.",
    },
    role: {
      en: "Creator & Solo Engineer",
      pt: "Criador & Engenheiro Solo",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Babel Standalone",
      "CodeMirror 6",
      "Tailwind CSS",
    ],
    status: "live",
    links: {
      web: "https://reactjskatas.vercel.app/",
      github: "https://github.com/raphaelssampaio/reactjskatas",
    },
    emoji: "⚛️",
    featured: true,
  },
  {
    id: "webkatas",
    title: "WebKatas",
    description: {
      en: "Open-source browser-based interactive platform for learning HTML, CSS, Flexbox/Grid and JavaScript. 60 exercises across 4 trails. Supports 6 languages.",
      pt: "Plataforma interativa open-source baseada em browser para aprender HTML, CSS, Flexbox/Grid e JavaScript. 60 exercícios em 4 trilhas. Suporta 6 idiomas.",
    },
    role: {
      en: "Creator & Solo Engineer",
      pt: "Criador & Engenheiro Solo",
    },
    tech: ["Next.js", "TypeScript", "CodeMirror 6", "Tailwind CSS"],
    status: "in-progress",
    links: {
      github: "https://github.com/raphaelssampaio/webkatas",
    },
    emoji: "🌐",
    featured: true,
  },
];
