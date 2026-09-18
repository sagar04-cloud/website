import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { collegeInfo } from '../data/collegeInfo'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#programs' },
    { name: 'Programs', href: '#integrated' },
    { name: 'Results', href: '#results' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Campus', href: '#campus' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 max-w-full ${
          isScrolled
            ? 'bg-navy-900/90 backdrop-blur-md shadow-xl py-0 border-b border-white/10'
            : 'bg-black/25 backdrop-blur-md py-1 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
            >
              <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
                <img 
                  src="/images/logo.jpg" 
                  alt="S.E.T Pre-University College Logo" 
                  className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full bg-white p-0.5 shadow-md group-hover:scale-105 transition-transform" 
                />
                <div className="text-white">
                  <p className="font-serif text-sm sm:text-lg font-semibold tracking-tight leading-snug">
                    {collegeInfo.name}
                  </p>
                  <p className="text-[9px] sm:text-xs text-gold-400 tracking-wider uppercase font-medium">
                    S.E.T. Pre-University College
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-gold-400 text-sm font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden lg:block"
            >
              <a
                href="#admissions"
                className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none z-[70] relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6 text-white" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-navy-900 min-h-screen lg:hidden flex flex-col justify-between p-6 pt-24 overflow-y-auto max-w-full"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-6 my-auto"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-2xl sm:text-3xl font-serif hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#admissions"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-gold-500 text-navy-900 px-8 py-3.5 rounded-full text-base font-semibold shadow-lg"
              >
                Apply Now
              </motion.a>
            </motion.div>

            <div className="text-center text-white/50 text-xs pt-6 border-t border-white/10">
              S.E.T. Pre-University College • Rajajinagar, Bengaluru
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
