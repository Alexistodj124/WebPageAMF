import { useState } from 'react'

const navItems = [
  { label: 'Servicios', href: '#services' },
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Resultados', href: '#social-proof' },
  { label: 'Contacto', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen((prev) => !prev)
  const handleClose = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <span className="brand">AMF Technologies</span>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-secondary" href="#benefits">
            Ver beneficios
          </a>
          <a className="btn btn-primary" href="#contact">
            Agendar llamada
          </a>
        </div>
        <button
          className="hamburger"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`container mobile-menu ${open ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleClose}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={handleClose}>
          Agendar llamada
        </a>
      </div>
    </header>
  )
}

export default Navbar
