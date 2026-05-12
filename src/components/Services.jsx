import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Icon from './Icon'
import { services } from '../data/services'

function Services({ withCta = true }) {
  const { t } = useTranslation()

  return (
    <section className="section reveal">
      <div className="container">
        <span className="eyebrow">{t('services.eyebrow')}</span>
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>
        <div className="grid-3">
          {services.map((service) => (
            <article key={service.id} className="card">
              <span className="card-icon">
                <Icon name={service.icon} size={22} />
              </span>
              <h3>{t(`services.items.${service.id}.title`)}</h3>
              <p>{t(`services.items.${service.id}.description`)}</p>
              <ul className="card-list">
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`services.items.${service.id}.bullets.${i}`)}</li>
                ))}
              </ul>
              {withCta ? (
                <Link to="/servicios" className="btn-ghost" style={{ marginTop: 18, display: 'inline-block' }}>
                  {t('cases.view_more')}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
