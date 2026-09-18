import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Introduction from './sections/Introduction'
import About from './sections/About'
import Programs from './sections/Programs'
import IntegratedPrograms from './sections/IntegratedPrograms'
import WhySarvodaya from './sections/WhySarvodaya'
import Results from './sections/Results'
import Faculty from './sections/Faculty'
import Campus from './sections/Campus'
import Gallery from './sections/Gallery'
import Admissions from './sections/Admissions'
import AdmissionProcess from './sections/AdmissionProcess'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'faculty' | 'privacy' | 'terms'>('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#faculty') {
        setCurrentView('faculty')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#privacy') {
        setCurrentView('privacy')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#terms') {
        setCurrentView('terms')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setCurrentView('home')
      }
    }

    // Initial check
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-full overflow-x-hidden min-h-screen bg-ivory-50 relative"
    >
      <Navbar />

      {currentView === 'faculty' ? (
        /* Separate Dedicated Faculty Page */
        <div className="min-h-screen">
          {/* Faculty Header Banner */}
          <div className="bg-navy-900 text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                Distinguished Faculty & Mentors
              </h1>
              <p className="text-white/70 text-sm sm:text-base mb-4 max-w-2xl">
                Meet the eminent professors guiding Sarvodaya students to academic excellence.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = ''
                  setCurrentView('home')
                }}
                className="inline-flex items-center gap-2 text-gold-400 text-xs sm:text-sm font-semibold hover:text-gold-300 transition-colors"
              >
                &larr; Back to Main Website
              </a>
            </div>
          </div>

          {/* Full Faculty Section */}
          <Faculty />

          <Footer />
        </div>
      ) : currentView === 'privacy' ? (
        /* Separate Dedicated Privacy Policy Page */
        <>
          <PrivacyPolicy />
          <Footer />
        </>
      ) : currentView === 'terms' ? (
        /* Separate Dedicated Terms of Service Page */
        <>
          <TermsOfService />
          <Footer />
        </>
      ) : (
        /* Home Page View */
        <>
          <Hero />
          <Introduction />
          <About />
          <Programs />
          <IntegratedPrograms />
          <WhySarvodaya />
          <Results />
          <Campus />
          <Gallery />
          <Admissions />
          <AdmissionProcess />
          <FAQ />
          <Contact />
          <Footer />
        </>
      )}
    </motion.div>
  )
}

export default App
