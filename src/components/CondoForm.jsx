import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { sendLead } from '../utils/sendLead'

const initialState = {
  name: '',
  condo: '',
  houses: '',
  contact: '',
  website: '',
}

function CondoForm() {
  const { t } = useTranslation()
  const [data, setData] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setData((prev) => ({ ...prev, [name]: value }))
    if (status !== 'submitting') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (data.website) {
      setStatus('success')
      setData(initialState)
      return
    }

    if (!data.name || !data.houses || !data.contact) {
      setError(t('condominios.form.errors.required'))
      return
    }

    setStatus('submitting')

    try {
      const result = await sendLead('condominios', t('condominios.form.subject', { name: data.name }), {
        nombre: data.name,
        condominio: data.condo,
        casas: data.houses,
        contacto: data.contact,
      })
      setStatus(result === 'sent' ? 'success' : 'mail')
      setData(initialState)
    } catch (err) {
      console.error(err)
      setStatus('idle')
      setError(t('condominios.form.errors.submit'))
    }
  }

  const required = t('contact.form.required_marker')
  const submitting = status === 'submitting'

  return (
    <div className="contact-form condo-form">
      <h2>{t('condominios.form.title')}</h2>
      <p>{t('condominios.form.subtitle')}</p>

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="website"
          value={data.website}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
          className="honeypot"
          aria-hidden="true"
        />

        <div className="form-row">
          <label htmlFor="condo-name">
            {t('condominios.form.name')} <span aria-hidden="true">{required}</span>
          </label>
          <input
            id="condo-name"
            name="name"
            type="text"
            autoComplete="name"
            value={data.name}
            onChange={handleChange}
            required
            disabled={submitting}
          />
        </div>

        <div className="form-row">
          <label htmlFor="condo-condo">{t('condominios.form.condo')}</label>
          <input
            id="condo-condo"
            name="condo"
            type="text"
            value={data.condo}
            onChange={handleChange}
            disabled={submitting}
          />
        </div>

        <div className="form-row">
          <label htmlFor="condo-houses">
            {t('condominios.form.houses')} <span aria-hidden="true">{required}</span>
          </label>
          <input
            id="condo-houses"
            name="houses"
            type="text"
            inputMode="numeric"
            value={data.houses}
            onChange={handleChange}
            required
            disabled={submitting}
          />
        </div>

        <div className="form-row">
          <label htmlFor="condo-contact">
            {t('condominios.form.contact')} <span aria-hidden="true">{required}</span>
          </label>
          <input
            id="condo-contact"
            name="contact"
            type="text"
            value={data.contact}
            onChange={handleChange}
            required
            disabled={submitting}
          />
        </div>

        {error ? <div className="form-error" role="alert">{error}</div> : null}
        {status === 'success' ? (
          <div className="form-success" role="status">{t('condominios.form.success')}</div>
        ) : null}
        {status === 'mail' ? (
          <div className="form-success" role="status">{t('condominios.form.mail')}</div>
        ) : null}

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? t('contact.form.submitting') : t('condominios.form.submit')}
        </button>
      </form>
    </div>
  )
}

export default CondoForm
