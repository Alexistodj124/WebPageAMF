import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  const links = [
    { to: '/', key: 'home', end: true },
    { to: '/servicios', key: 'services' },
    { to: '/casos-de-exito', key: 'cases' },
    { to: '/industrias', key: 'industries' },
    { to: '/contacto', key: 'contact' },
  ]

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand" aria-label="AMF Technologies — Home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>AMF Technologies</span>
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <LanguageSwitcher />
          <NavLink to="/contacto" className="btn btn-primary">
            {t('nav.cta')}
          </NavLink>
        </div>

        <button
          type="button"
          className="hamburger"
          aria-label={open ? t('nav.close_menu') : t('nav.open_menu')}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`container mobile-menu ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu}>
            {t(`nav.${link.key}`)}
          </NavLink>
        ))}
        <LanguageSwitcher />
        <NavLink to="/contacto" className="btn btn-primary" onClick={closeMenu}>
          {t('nav.cta')}
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
