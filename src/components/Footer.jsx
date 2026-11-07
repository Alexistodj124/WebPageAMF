import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Icon from './Icon'
import LanguageSwitcher from './LanguageSwitcher'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand" aria-label="AMF Technologies — Home">
              <img src="/logo.png" alt="AMF" className="brand-logo" />
              <span className="brand-suffix">Technologies</span>
            </Link>
            <p>{t('footer.tagline')}</p>
          </div>

          <div className="footer-col">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><Link to="/industrias">{t('footer.links.industries')}</Link></li>
              <li><Link to="/casos-de-exito">{t('footer.links.cases')}</Link></li>
              <li><Link to="/contacto">{t('footer.links.about')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.solutions')}</h4>
            <ul>
              <li><Link to="/servicios">{t('footer.links.services_custom')}</Link></li>
              <li><Link to="/servicios">{t('footer.links.services_automation')}</Link></li>
              <li><Link to="/servicios">{t('footer.links.services_integration')}</Link></li>
              <li><Link to="/servicios">{t('footer.links.services_support')}</Link></li>
              <li><Link to="/condominios">{t('footer.links.condominios')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><a href="mailto:alexis@amf-technologies.com">alexis@amf-technologies.com</a></li>
              <li><a href="tel:+50250438645">+502 5043-8645</a></li>
              <li><Link to="/contacto">{t('nav.cta')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t('footer.rights', { year })}</span>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <LanguageSwitcher />
            <div className="social-links">
              <a
                href="https://instagram.com/amf.technologies"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/amf-technologies"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
