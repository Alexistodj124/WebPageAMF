function Hero() {
  return (
    <section id="hero" className="section hero reveal">
      <div className="container hero-grid">
        <div>
          <p className="helper">Software a la medida para empresas en crecimiento</p>
          <h1>AMF Technologies</h1>
          <p>
            Diseñamos y construimos plataformas a la medida para que tu operación sea más
            ágil, segura y escalable. El software se adapta a tu empresa, no tu empresa a
            un software.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Agendar llamada
            </a>
            <a className="btn btn-secondary" href="#benefits">
              Ver beneficios
            </a>
          </div>
        </div>
        <div className="hero-card">
          <h3>Lo que entregamos</h3>
          <ul>
            <li>Software 100% alineado a tu flujo y procesos internos.</li>
            <li>Automatización sin fricciones entre equipos y áreas.</li>
            <li>Dashboards claros para tomar decisiones con confianza.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
