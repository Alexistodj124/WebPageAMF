import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { sendLead } from '../utils/sendLead'

const initialState = {
  name: '',
  email: '',
  company: '',
  industry: '',
  message: '',
  website: '',
}

function ContactForm() {
  const { t } = useTranslation()
  const [data, setData] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (data.website) {
      setStatus('success')
      setData(initialState)
      return
    }

    if (!data.name || !data.email || !data.message) {
      setError(t('contact.form.errors.required'))
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError(t('contact.form.errors.email'))
      return
    }

    setStatus('submitting')

    try {
      const result = await sendLead('contacto', `AMF · ${data.name}`, {
        nombre: data.name,
        correo: data.email,
        empresa: data.company,
        industria: data.industry,
        mensaje: data.message,
      })
      setStatus(result === 'sent' ? 'success' : 'mail')
      setData(initialState)
    } catch (err) {
      console.error(err)
      setStatus('idle')
      setError(t('contact.form.errors.submit'))
    }
  }

  const required = t('contact.form.required_marker')
  const submitting = status === 'submitting'

  return (
    <div className="contact-form">
      <h3>{t('contact.form.title')}</h3>
      <p>{t('contact.form.subtitle')}</p>

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
          <label htmlFor="name">
            {t('contact.form.name')} <span aria-hidden="true">{required}</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={data.name}
            onChange={handleChange}
            placeholder={t('contact.form.name_placeholder')}
            required
            disabled={submitting}
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">
            {t('contact.form.email')} <span aria-hidden="true">{required}</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            placeholder={t('contact.form.email_placeholder')}
            required
            disabled={submitting}
          />
        </div>

        <div className="form-row">
          <label htmlFor="company">{t('contact.form.company')}</label>
          <input
            id="company"
            name="company"
            type="text"
            value={data.company}
            onChange={handleChange}
            placeholder={t('contact.form.company_placeholder')}
            disabled={submitting}
          />
        </div>

        <div className="form-row">
          <label htmlFor="industry">{t('contact.form.industry')}</label>
          <select
            id="industry"
            name="industry"
            value={data.industry}
            onChange={handleChange}
            disabled={submitting}
          >
            <option value="">{t('contact.form.industry_placeholder')}</option>
            {['finance', 'retail', 'health', 'logistics', 'manufacturing', 'services'].map((id) => (
              <option key={id} value={id}>
                {t(`industries.items.${id}.tag`)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="message">
            {t('contact.form.message')} <span aria-hidden="true">{required}</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={data.message}
            onChange={handleChange}
            placeholder={t('contact.form.message_placeholder')}
            required
            disabled={submitting}
          />
        </div>

        {error ? <div className="form-error" role="alert">{error}</div> : null}
        {status === 'success' ? (
          <div className="form-success" role="status">{t('contact.form.success')}</div>
        ) : null}
        {status === 'mail' ? (
          <div className="form-success" role="status">{t('contact.form.mail')}</div>
        ) : null}

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? t('contact.form.submitting') : t('contact.form.submit')}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
