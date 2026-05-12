import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import Icon from './Icon'

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="section hero reveal">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">{t('hero.eyebrow')}</span>
          <h1>{t('hero.title')}</h1>
          <p className="lead">{t('hero.subtitle')}</p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn btn-primary">
              {t('hero.cta_primary')}
            </Link>
            <Link to="/servicios" className="btn btn-secondary">
              {t('hero.cta_secondary')}
            </Link>
          </div>
          <div className="hero-meta">
            <span className="hero-meta-item">
              <Icon name="check" size={16} />
              {t('hero.meta.delivery')}
            </span>
            <span className="hero-meta-item">
              <Icon name="check" size={16} />
              {t('hero.meta.support')}
            </span>
            <span className="hero-meta-item">
              <Icon name="check" size={16} />
              {t('hero.meta.stack')}
            </span>
          </div>
        </div>

        <aside className="hero-panel" aria-label={t('hero.panel.label')}>
          <div className="hero-panel-header">
            <span>{t('hero.panel.label')}</span>
            <span className="status-pill">{t('hero.panel.status')}</span>
          </div>
          <div className="kpi-grid">
            <div className="kpi">
              <span className="kpi-value">98%</span>
              <span className="kpi-label">{t('hero.panel.kpis.delivery')}</span>
            </div>
            <div className="kpi">
              <span className="kpi-value">99.9%</span>
              <span className="kpi-label">{t('hero.panel.kpis.uptime')}</span>
            </div>
            <div className="kpi">
              <span className="kpi-value">9.4</span>
              <span className="kpi-label">{t('hero.panel.kpis.satisfaction')}</span>
            </div>
          </div>
          <div className="hero-panel-footer">
            <Trans i18nKey="hero.panel.footer" components={{ strong: <strong /> }} />
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
