const services = [
  {
    title: 'Desarrollo de software completamente personalizado',
    description:
      'Construimos soluciones desde cero o modernizamos tus plataformas actuales con una base tecnológica sólida.',
  },
  {
    title: 'Sistemas internos inteligentes',
    description:
      'Inventario, pedidos, reportes, automatización y dashboards integrados en una sola operación coherente.',
  },
  {
    title: 'Integraciones y soporte continuo',
    description:
      'Conectamos tus herramientas críticas y acompañamos el crecimiento de tu empresa con soporte cercano.',
  },
]

function Services() {
  return (
    <section id="services" className="section reveal">
      <div className="container">
        <h2 className="section-title">Servicios pensados para tu operación</h2>
        <p className="section-subtitle">
          Cada proyecto parte de un diagnóstico profundo para construir la solución exacta
          que tu equipo necesita.
        </p>
        <div className="grid-3">
          {services.map((service) => (
            <article key={service.title} className="card">
              <div className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M10 4v12"
                    stroke="#0b6bcb"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
