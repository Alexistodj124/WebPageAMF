import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function CtaStrip() {
  const { t } = useTranslation()
  return (
    <section className="section reveal">
      <div className="container">
        <div className="cta-strip">
          <div>
            <h2>{t('cta_strip.title')}</h2>
            <p style={{ marginTop: 10 }}>{t('cta_strip.subtitle')}</p>
          </div>
          <div className="cta-strip-actions">
            <Link to="/contacto" className="btn btn-primary">
              {t('cta_strip.primary')}
            </Link>
            <Link to="/servicios" className="btn btn-secondary">
              {t('cta_strip.secondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaStrip
