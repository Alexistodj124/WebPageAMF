import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'
import Services from '../components/Services'
import StatsRow from '../components/StatsRow'
import CaseCard from '../components/CaseCard'
import CtaStrip from '../components/CtaStrip'
import PageMeta from '../components/PageMeta'
import { cases } from '../data/cases'

function Home() {
  const { t } = useTranslation()
  const featured = cases.slice(0, 3)

  return (
    <>
      <PageMeta titleKey="meta.page_titles.home" descriptionKey="meta.default_description" />
      <Hero />
      <ClientLogos />
      <Services />
      <StatsRow />

      <section className="section reveal">
        <div className="container">
          <span className="eyebrow">{t('cases.eyebrow')}</span>
          <h2 className="section-title">{t('cases.title')}</h2>
          <p className="section-subtitle">{t('cases.subtitle')}</p>
          <div className="case-grid">
            {featured.map((c) => (
              <CaseCard key={c.id} id={c.id} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  )
}

export default Home
