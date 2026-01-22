const benefits = [
  {
    title: 'Optimización de procesos',
    description: 'Flujos más claros y menos pasos manuales en cada área crítica.',
  },
  {
    title: 'Ahorro de tiempo y costos',
    description: 'Automatización que reduce reprocesos y mejora la eficiencia operativa.',
  },
  {
    title: 'Escalabilidad',
    description: 'Soluciones preparadas para crecer contigo sin perder rendimiento.',
  },
  {
    title: 'Seguridad adaptada',
    description: 'Permisos y controles hechos a la medida de tu modelo de negocio.',
  },
]

function Benefits() {
  return (
    <section id="benefits" className="section">
      <div className="container">
        <h2 className="section-title">Beneficios que se sienten desde el primer mes</h2>
        <p className="section-subtitle">
          Creamos tecnología que acompaña a tus equipos, con entregables claros y visión
          de largo plazo.
        </p>
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <article key={benefit.title} className="card">
              <div className="icon" style={{ background: 'rgba(21, 179, 163, 0.12)' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10l3 3 9-9"
                    stroke="#15b3a3"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
