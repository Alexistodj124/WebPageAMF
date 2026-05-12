import { useTranslation } from 'react-i18next'
import { clientLogos } from '../data/clients'

function ClientLogos() {
  const { t } = useTranslation()
  return (
    <section className="logos-band reveal">
      <div className="container">
        <p className="logos-label">{t('logos_band.label')}</p>
        <div className="logos-grid">
          {clientLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.logo}
              alt={logo.name}
              className="client-logo"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
