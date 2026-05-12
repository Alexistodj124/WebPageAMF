import { useTranslation } from 'react-i18next'

function CaseCard({ id }) {
  const { t } = useTranslation()
  const base = `cases.items.${id}`
  const tech = t(`${base}.tech`, { returnObjects: true })

  return (
    <article className="case-card">
      <div className="case-card-cover">
        <span className="case-card-cover-label">{t(`${base}.industry_label`)}</span>
      </div>
      <div className="case-card-body">
        <h3>{t(`${base}.title`)}</h3>
        <p>{t(`${base}.description`)}</p>
        <div className="case-tech">
          {Array.isArray(tech)
            ? tech.map((tech_item) => (
                <span key={tech_item} className="case-tech-pill">
                  {tech_item}
                </span>
              ))
            : null}
        </div>
        <div className="case-metrics">
          {[0, 1, 2].map((i) => (
            <div key={i} className="case-metric">
              <span className="case-metric-value">{t(`${base}.metrics.${i}.value`)}</span>
              <span className="case-metric-label">{t(`${base}.metrics.${i}.label`)}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default CaseCard
