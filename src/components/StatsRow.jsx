import { useTranslation } from 'react-i18next'

const stats = [
  { value: '60+', key: 'projects' },
  { value: '12', key: 'industries' },
  { value: '99.9%', key: 'uptime' },
  { value: '8+', key: 'experience' },
]

function StatsRow() {
  const { t } = useTranslation()
  return (
    <section className="section reveal">
      <div className="container">
        <span className="eyebrow">{t('stats.title')}</span>
        <h2 className="section-title">{t('stats.title')}</h2>
        <p className="section-subtitle">{t('stats.subtitle')}</p>
        <div className="stats-row">
          {stats.map((s) => (
            <div key={s.key} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{t(`stats.items.${s.key}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsRow
