const services = [
  {
    title: 'Desarrollo de software completamente personalizado',
    lines: [
      'Iniciamos con tu flujo real como punto de partida.',
      'Definimos módulos a la medida de cada equipo.',
      'Construimos una base sólida y escalable.',
      'Documentamos cada paso para una adopción clara.',
    ],
  },
  {
    title: 'Sistemas internos inteligentes',
    lines: [
      'Conectamos inventario, pedidos y reportes en un solo flujo.',
      'Automatizamos tareas repetitivas sin fricción.',
      'Creamos dashboards para decisiones inmediatas.',
      'Simplificamos la operación diaria de tu equipo.',
    ],
  },
  {
    title: 'Integraciones y soporte continuo',
    lines: [
      'Integramos tus herramientas clave con estabilidad.',
      'Monitoreamos resultados y ajustes necesarios.',
      'Acompañamos el crecimiento con soporte cercano.',
      'Mejoramos continuamente tu ecosistema digital.',
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
