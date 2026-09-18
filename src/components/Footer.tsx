import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import { collegeInfo } from '../data/collegeInfo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src="/images/logo.jpg"
                alt="S.E.T. Pre-University College Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full bg-white p-1 shadow-lg flex-shrink-0"
              />
              <div>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight">
                  SARVODAYA
                </h2>
                <p className="text-gold-400 text-[10px] sm:text-xs tracking-wider uppercase font-semibold mt-0.5">
                  S.E.T. Pre-University College (R) Bengaluru
                </p>
              </div>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm mt-3">
              Committed to shaping young minds through academic excellence, discipline, and holistic PU education.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-gold-400">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-white/70 hover:text-gold-400 transition-colors">
                  About College
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/70 hover:text-gold-400 transition-colors">
                  Academic Programs
                </a>
              </li>
              <li>
                <a href="#integrated" className="text-white/70 hover:text-gold-400 transition-colors">
                  Integrated NEET / JEE
                </a>
              </li>
              <li>
                <a href="#results" className="text-white/70 hover:text-gold-400 transition-colors">
                  Results & Ranks
                </a>
              </li>
              <li>
                <a href="#faculty" className="text-white/70 hover:text-gold-400 transition-colors">
                  Faculty & Staff
                </a>
              </li>
              <li>
                <a href="#campus" className="text-white/70 hover:text-gold-400 transition-colors">
                  Campus Life
                </a>
              </li>
              <li>
                <a href="#admissions" className="text-white/70 hover:text-gold-400 transition-colors">
                  Admissions 2026
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-gold-400">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70 leading-relaxed break-words">
                {collegeInfo.address}
              </li>
              <li>
                <a href={`tel:${collegeInfo.phone}`} className="text-white/70 hover:text-gold-400 transition-colors">
                  {collegeInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${collegeInfo.email}`} className="text-white/70 hover:text-gold-400 transition-colors break-all">
                  {collegeInfo.email}
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <p className="text-white/40 text-xs sm:text-sm">
            © {currentYear} Sarvodaya Pre-University College. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs sm:text-sm">
            <a
              href="#privacy"
              onClick={() => {
                window.location.hash = '#privacy'
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={() => {
                window.location.hash = '#terms'
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
