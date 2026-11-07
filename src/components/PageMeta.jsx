import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function PageMeta({ titleKey, descriptionKey }) {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()

  useEffect(() => {
    if (titleKey) document.title = t(titleKey)
    if (descriptionKey) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', t(descriptionKey))
    }
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `https://amf-technologies.com${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`)
    document.documentElement.lang = i18n.resolvedLanguage || 'es'
  }, [titleKey, descriptionKey, pathname, t, i18n.resolvedLanguage])

  return null
}

export default PageMeta
