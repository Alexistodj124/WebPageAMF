import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage || i18n.language || 'es'

  const change = (code) => {
    if (code === current) return
    i18n.changeLanguage(code)
  }

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LANGS.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={current.startsWith(lang.code) ? 'active' : ''}
          onClick={() => change(lang.code)}
          aria-pressed={current.startsWith(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
