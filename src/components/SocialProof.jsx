const proofs = [
  'Equipos que reportan mayor claridad en sus procesos y roles.',
  'Operaciones internas con mejor trazabilidad y menos fricciones.',
  'Mayor confianza para escalar sin perder control del negocio.',
]

function SocialProof() {
  return (
    <section id="social-proof" className="section social-proof">
      <div className="container">
        <h2 className="section-title">Clientes satisfechos, resultados reales</h2>
        <p className="section-subtitle">
          Acompañamos a empresas que necesitan soluciones fiables y hechas a su medida.
        </p>
        <div className="grid-3">
          {proofs.map((proof) => (
            <article key={proof} className="card">
              <p>{proof}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
