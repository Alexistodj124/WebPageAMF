import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import PageMeta from '../components/PageMeta'

function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta titleKey="meta.page_titles.contact" descriptionKey="meta.default_description" />

      <section className="page-header">
        <div className="container">
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>{t('contact.info.title')}</h3>

              <div className="contact-row">
                <Icon name="phone" size={18} />
                <div>
                  <span className="contact-row-label">{t('contact.info.phone_label')}</span>
                  <a className="contact-row-value" href={`tel:${t('contact.info.phone_value').replace(/\s|-/g, '')}`}>
                    {t('contact.info.phone_value')}
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <Icon name="mail" size={18} />
                <div>
                  <span className="contact-row-label">{t('contact.info.email_label')}</span>
                  <a className="contact-row-value" href={`mailto:${t('contact.info.email_value')}`}>
                    {t('contact.info.email_value')}
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <Icon name="pin" size={18} />
                <div>
                  <span className="contact-row-label">{t('contact.info.office_label')}</span>
                  <span className="contact-row-value">{t('contact.info.office_value')}</span>
                </div>
              </div>

              <div className="contact-row">
                <Icon name="instagram" size={18} />
                <div>
                  <span className="contact-row-label">{t('contact.info.social_label')}</span>
                  <a
                    className="contact-row-value"
                    href="https://instagram.com/amf.technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.info.social_value')}
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
