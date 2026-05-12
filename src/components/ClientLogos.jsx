import { useTranslation } from 'react-i18next'
import { clientLogos } from '../data/clients'

function ClientLogos() {
  const { t } = useTranslation()
  const loop = [...clientLogos, ...clientLogos]

  return (
    <section className="logos-band reveal">
      <div className="container">
        <p className="logos-label">{t('logos_band.label')}</p>
        <div className="logos-marquee" aria-label={t('logos_band.label')}>
          <div className="logos-track">
            {loop.map((logo, i) => (
              <div className="logos-slide" key={`${logo.name}-${i}`} aria-hidden={i >= clientLogos.length}>
                <img
                  src={logo.logo}
                  alt={i < clientLogos.length ? logo.name : ''}
                  className="client-logo"
                  loading="lazy"
                  style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
