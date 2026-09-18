import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { collegeInfo } from '../data/collegeInfo'

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[100dvh] lg:min-h-screen overflow-hidden bg-navy-950 flex flex-col justify-center py-12 lg:py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-10" />
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="w-full h-full bg-[url('/images/sarvodaya-building.jpg')] bg-cover bg-center brightness-105 contrast-105 saturate-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col justify-center items-center px-4 sm:px-6 pt-24 sm:pt-32 lg:pt-36 pb-12 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-6xl mx-auto flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            <span className="h-px w-6 bg-gold-400 hidden sm:inline-block" />
            <p className="text-gold-400 text-xs sm:text-sm tracking-[0.25em] uppercase font-bold">
              {collegeInfo.name}
            </p>
            <span className="h-px w-6 bg-gold-400 hidden sm:inline-block" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-serif text-3xl sm:text-5xl lg:text-hero text-white leading-[1.08] mb-6 font-normal tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          >
            {collegeInfo.tagline}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-sm sm:text-base lg:text-body-lg text-white max-w-2xl mx-auto mb-8 font-medium leading-relaxed px-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            {collegeInfo.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto mb-8"
          >
            <a
              href="#programs"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-navy-900 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-gold-400 hover:text-navy-950 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#admissions"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/40 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/15 backdrop-blur-sm transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stream Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center max-w-3xl"
          >
            {collegeInfo.streams.map((stream) => (
              <span
                key={stream}
                className="text-white/90 text-[11px] sm:text-xs tracking-widest uppercase font-medium px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-navy-900/60 backdrop-blur-md border border-white/15 hover:border-gold-400/60 transition-colors"
              >
                {stream}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToNext}
          className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors p-2"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
