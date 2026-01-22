const services = [
  {
    title: 'Desarrollo de software completamente personalizado',
    lines: [
      'const producto = diseñarSolucion({',
      "  objetivo: 'tu flujo real',",
      "  enfoque: 'a la medida',",
      "  base: 'escalable',",
      '})',
    ],
  },
  {
    title: 'Sistemas internos inteligentes',
    lines: [
      'const operaciones = integrarSistemas([',
      "  'inventario', 'pedidos',",
      "  'reportes', 'automatización',",
      "  'dashboards',",
      '])',
    ],
  },
  {
    title: 'Integraciones y soporte continuo',
    lines: [
      'const soporte = acompañarCrecimiento({',
      "  integraciones: 'herramientas clave',",
      "  seguimiento: 'cercano',",
      "  mejora: 'constante',",
      '})',
    ],
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
            <article key={service.title} className="card code-card">
              <div className="code-header">
                <span className="code-dot" />
                <span className="code-dot" />
                <span className="code-dot" />
                <span className="code-title">{service.title}</span>
              </div>
              <div className="code-body">
                <ol className="code-lines">
                  {service.lines.map((line) => (
                    <li key={line}>
                      <span className="code-text">{line}</span>
                    </li>
                  ))}
                </ol>
                <span className="typing-cursor code-cursor" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
