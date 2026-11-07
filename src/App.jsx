import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import IndustriesPage from './pages/IndustriesPage'
import ContactPage from './pages/ContactPage'
import CondominiosPage from './pages/CondominiosPage'
import './styles/landing.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function App() {
  const { i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || 'es'
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/casos-de-exito" element={<CaseStudiesPage />} />
          <Route path="/industrias" element={<IndustriesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/condominios" element={<CondominiosPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
