import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/landing.css'

function App() {
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
