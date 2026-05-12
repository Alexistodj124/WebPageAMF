import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function PageMeta({ titleKey, descriptionKey }) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (titleKey) document.title = t(titleKey)
    if (descriptionKey) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', t(descriptionKey))
    }
    document.documentElement.lang = i18n.resolvedLanguage || 'es'
  }, [titleKey, descriptionKey, t, i18n.resolvedLanguage])

  return null
}

export default PageMeta
