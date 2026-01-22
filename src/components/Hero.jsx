import { useEffect, useState } from 'react'

function Hero() {
  const fullTitle = 'AMF Technologies'
  const [title, setTitle] = useState(fullTitle)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) {
      setTitle(fullTitle)
      return
    }

    let index = 0
    setTitle('')
    const interval = window.setInterval(() => {
      index += 1
      setTitle(fullTitle.slice(0, index))
      if (index >= fullTitle.length) {
        window.clearInterval(interval)
      }
    }, 200)

    return () => window.clearInterval(interval)
  }, [fullTitle])

  return (
    <section id="hero" className="section hero reveal">
      <div className="container hero-grid">
        <div>
          <p className="helper">Software a la medida para empresas en crecimiento</p>
          <h1 className="hero-title">
            {title}
            <span className="typing-cursor" aria-hidden="true" />
          </h1>
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
