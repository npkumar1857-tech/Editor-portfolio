import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SelectedWork } from './components/SelectedWork'
import FeaturedProject from './components/FeaturedProject'
import Services from './components/Services'
import { Philosophy } from './components/Philosophy'
import { About } from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <SelectedWork />
        <FeaturedProject />
        <Services />
        <Philosophy />
        <About />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
