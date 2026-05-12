import { useTranslation } from 'react-i18next'
import IndustryCard from '../components/IndustryCard'
import ClientLogos from '../components/ClientLogos'
import CtaStrip from '../components/CtaStrip'
import PageMeta from '../components/PageMeta'
import { industries } from '../data/industries'

function IndustriesPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta titleKey="meta.page_titles.industries" descriptionKey="meta.default_description" />

      <section className="page-header">
        <div className="container">
          <span className="eyebrow">{t('industries.eyebrow')}</span>
          <h1>{t('industries.title')}</h1>
          <p>{t('industries.subtitle')}</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="industries-grid">
            {industries.map((ind) => (
              <IndustryCard key={ind.id} id={ind.id} icon={ind.icon} />
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />
      <CtaStrip />
    </>
  )
}

export default IndustriesPage
