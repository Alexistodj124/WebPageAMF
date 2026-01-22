import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/landing.css'

function App() {
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
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
