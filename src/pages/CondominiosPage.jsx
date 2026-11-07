import { useTranslation } from 'react-i18next'
import CondoForm from '../components/CondoForm'
import Icon from '../components/Icon'
import PageMeta from '../components/PageMeta'

const debtors = [
  { house: 'Casa 14', amount: 'Q 2,048.50' },
  { house: 'Casa 12', amount: 'Q 1,024.50' },
  { house: 'Casa 31', amount: 'Q 978.50' },
  { house: 'Casa 7', amount: 'Q 950.00' },
]

const roles = ['admin', 'neighbor', 'board']
const questions = ['excel', 'card', 'rules']

function CondominiosPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta titleKey="meta.page_titles.condominios" descriptionKey="condominios.subtitle" />

      <section className="condo-hero">
        <div className="container condo-hero-grid">
          <div>
            <span className="eyebrow">{t('condominios.eyebrow')}</span>
            <h1>
              {t('condominios.title_a')} <span>{t('condominios.title_b')}</span>
            </h1>
            <p className="lead">{t('condominios.subtitle')}</p>
            <a href="#condo-contacto" className="btn btn-primary">
              {t('condominios.cta')}
            </a>
          </div>

          <div className="condo-mock" aria-hidden="true">
            <div className="condo-window">
              <div className="condo-window-bar"><i /><i /><i /></div>
              <div className="condo-window-body">
                <div className="condo-window-title">
                  <strong>{t('condominios.mock.debtors')}</strong>
                  <span>Excel</span>
                </div>
                {debtors.map((row) => (
                  <div className="condo-row" key={row.house}>
                    <span>{row.house}</span>
                    <em>{t('condominios.mock.overdue')}</em>
                    <b>{row.amount}</b>
                  </div>
                ))}
              </div>
            </div>

            <div className="condo-phone">
              <div className="condo-phone-screen">
                <small>{t('condominios.mock.owner')}</small>
                <strong>Casa 14</strong>
                <div className="condo-balance">
                  <small>{t('condominios.mock.balance')}</small>
                  <b>Q 2,048.50</b>
                </div>
                <div className="condo-charge"><span>{t('condominios.mock.fee')}</span><b>Q 950.00</b></div>
                <div className="condo-charge"><span>{t('condominios.mock.water')}</span><b>Q 120.00</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <span className="eyebrow">{t('condominios.roles.eyebrow')}</span>
          <h2 className="section-title">{t('condominios.roles.title')}</h2>
          <div className="grid-3 condo-roles">
            {roles.map((role) => (
              <article className="card" key={role}>
                <h3>{t(`condominios.roles.${role}.title`)}</h3>
                <ul className="card-list">
                  {t(`condominios.roles.${role}.items`, { returnObjects: true }).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact reveal">
        <div className="container">
          <h2 className="section-title">{t('condominios.questions.title')}</h2>
          <div className="grid-3 condo-roles">
            {questions.map((question) => (
              <article className="condo-question" key={question}>
                <h3>{t(`condominios.questions.${question}.q`)}</h3>
                <p>{t(`condominios.questions.${question}.a`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="condo-contacto">
        <div className="container condo-form-wrap">
          <CondoForm />
          <a className="condo-direct" href="mailto:alexis@amf-technologies.com">
            <Icon name="mail" size={18} />
            alexis@amf-technologies.com
          </a>
        </div>
      </section>
    </>
  )
}

export default CondominiosPage
