import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CaseCard from '../components/CaseCard'
import CtaStrip from '../components/CtaStrip'
import PageMeta from '../components/PageMeta'
import { cases } from '../data/cases'
import { industries as industriesData } from '../data/industries'

function CaseStudiesPage() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return cases
    return cases.filter((c) => t(`cases.items.${c.id}.industry`) === filter)
  }, [filter, t])

  return (
    <>
      <PageMeta titleKey="meta.page_titles.cases" descriptionKey="meta.default_description" />

      <section className="page-header">
        <div className="container">
          <span className="eyebrow">{t('cases.eyebrow')}</span>
          <h1>{t('cases.title')}</h1>
          <p>{t('cases.subtitle')}</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="case-filters">
            <button
              type="button"
              className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t('cases.filter_all')}
            </button>
            {industriesData.map((ind) => (
              <button
                key={ind.id}
                type="button"
                className={`filter-pill ${filter === ind.id ? 'active' : ''}`}
                onClick={() => setFilter(ind.id)}
              >
                {t(`industries.items.${ind.id}.tag`)}
              </button>
            ))}
          </div>

          <div className="case-grid">
            {filtered.map((c) => (
              <CaseCard key={c.id} id={c.id} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  )
}

export default CaseStudiesPage
