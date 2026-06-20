'use client'

import type { Language } from '@/lib/types'

interface LanguageToggleProps {
  lang: Language
  onChange: (lang: Language) => void
}

export default function LanguageToggle({ lang, onChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`flex flex-col items-center gap-0.5 rounded-md border px-2 py-1 transition-opacity ${
          lang === 'en' ? 'border-primary opacity-100' : 'border-transparent opacity-40'
        }`}
        aria-pressed={lang === 'en'}
        aria-label="Switch to English"
      >
        <span className="text-lg leading-none">🇺🇸</span>
        <span className="text-[10px] font-medium text-textMuted">EN</span>
      </button>
      <button
        type="button"
        onClick={() => onChange('pt')}
        className={`flex flex-col items-center gap-0.5 rounded-md border px-2 py-1 transition-opacity ${
          lang === 'pt' ? 'border-primary opacity-100' : 'border-transparent opacity-40'
        }`}
        aria-pressed={lang === 'pt'}
        aria-label="Switch to Portuguese"
      >
        <span className="text-lg leading-none">🇧🇷</span>
        <span className="text-[10px] font-medium text-textMuted">PT</span>
      </button>
    </div>
  )
}
