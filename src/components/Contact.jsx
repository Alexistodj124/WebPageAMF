import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.message) {
      setError('Completa los campos obligatorios antes de enviar.')
      return
    }

    if (!formData.email.includes('@')) {
      setError('Ingresa un email válido.')
      return
    }

    setStatus('sent')
    setFormData(initialState)
  }

  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <h2 className="section-title">Conversemos sobre tu proyecto</h2>
        <p className="section-subtitle">
          Cuéntanos qué necesitas y diseñamos una propuesta a la medida de tu empresa.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contacto directo</h3>
            <div className="contact-list">
              <span>Teléfono: +502 5043-8645</span>
              <span>Instagram: amf.technologies</span>
              <span>Nombre: Alexis Mesias Flores</span>
            </div>
            <p className="helper" style={{ marginTop: '18px' }}>
              Te respondemos con una propuesta clara y sin compromisos.
            </p>
          </div>
          <div className="contact-card">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nombre *</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="correo@empresa.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="company">Empresa</label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos el reto que quieres resolver"
                  required
                />
              </div>
              {error ? <span className="helper">{error}</span> : null}
              {status === 'sent' ? (
                <div className="success">Mensaje enviado. ¡Gracias por contactarnos!</div>
              ) : null}
              <button className="btn btn-primary" type="submit">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
