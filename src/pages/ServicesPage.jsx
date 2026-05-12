import { useTranslation } from 'react-i18next'
import Services from '../components/Services'
import CtaStrip from '../components/CtaStrip'
import PageMeta from '../components/PageMeta'
import { processSteps } from '../data/services'

function ServicesPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta titleKey="meta.page_titles.services" descriptionKey="meta.default_description" />

      <section className="page-header">
        <div className="container">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h1>{t('services.title')}</h1>
          <p>{t('services.subtitle')}</p>
        </div>
      </section>

      <Services withCta={false} />

      <section className="section reveal" style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">{t('services.process.title')}</span>
          <h2 className="section-title">{t('services.process.title')}</h2>
          <p className="section-subtitle">{t('services.process.subtitle')}</p>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step} className="process-step">
                <h4>{t(`services.process.steps.${step}.title`)}</h4>
                <p>{t(`services.process.steps.${step}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  )
}

export default ServicesPage
