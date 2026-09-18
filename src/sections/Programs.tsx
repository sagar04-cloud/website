import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, BookOpen, Compass, X, Sparkles } from 'lucide-react'
import { programs, ProgramDetail } from '../data/programs'

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramDetail | null>(null)

  const handleApplyNow = (programId: string) => {
    setSelectedProgram(null)
    window.dispatchEvent(new CustomEvent('select-course', { detail: programId }))
    const admissionsElem = document.getElementById('admissions')
    if (admissionsElem) {
      admissionsElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="programs" className="py-14 sm:py-24 lg:py-32 bg-ivory-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 sm:mb-16 lg:mb-24"
        >
          <p className="text-gold-500 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-semibold">
            Academic Programs
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-navy-900 mb-4">
            Choose Your Direction.
          </h2>
          <p className="text-navy-900/60 text-sm sm:text-base max-w-xl mx-auto">
            Click on any course card below to view detailed subjects, career opportunities, and eligibility.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProgram(program)}
              className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer border border-navy-900/5 hover:border-gold-400/50 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative p-6 sm:p-8 lg:p-10">
                {/* Card Top */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-navy-900/50 text-xs tracking-widest uppercase mb-1 font-semibold block">
                      {program.title} Stream
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-navy-900 font-bold group-hover:text-gold-600 transition-colors">
                      {program.subtitle}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 group-hover:bg-navy-900 text-navy-900 group-hover:text-gold-400 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <p className="text-sm sm:text-base text-navy-900/70 mb-6 leading-relaxed font-normal">
                  {program.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-navy-900/75 text-xs sm:text-sm leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer CTA bar */}
              <div className="bg-ivory-50/80 px-6 sm:px-8 py-4 border-t border-navy-900/5 flex items-center justify-between text-xs sm:text-sm font-semibold text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  Explore Course Details
                </span>
                <span className="text-gold-600 group-hover:text-gold-400 font-bold">
                  View Details &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-navy-900/10 max-h-[90vh] overflow-y-auto"
            >
              {/* Top Banner - Unified Theme Color matching website (Navy 900 & Gold) */}
              <div className="p-6 sm:p-8 bg-navy-900 text-white relative border-b border-gold-400/20">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-navy-950 flex items-center justify-center transition-all duration-300"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="text-gold-400 text-xs uppercase font-semibold tracking-widest block mb-1">
                  {selectedProgram.title} Stream • Pre-University
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                  {selectedProgram.subtitle} Course Details
                </h3>
                <p className="text-white/80 text-sm sm:text-base font-normal">
                  {selectedProgram.tagline}
                </p>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-navy-900 font-serif text-lg font-semibold mb-2">
                    Course Overview
                  </h4>
                  <p className="text-navy-900/75 text-sm sm:text-base leading-relaxed">
                    {selectedProgram.description}
                  </p>
                </div>

                {/* Subjects Included */}
                <div className="bg-ivory-50 p-5 rounded-2xl border border-navy-900/5">
                  <div className="flex items-center gap-2 text-navy-900 font-serif font-semibold text-base mb-3">
                    <BookOpen className="w-5 h-5 text-gold-500" />
                    Subjects Included
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProgram.subjects.map((sub, i) => (
                      <div key={i} className="text-xs sm:text-sm text-navy-900/80 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Pathways */}
                <div>
                  <div className="flex items-center gap-2 text-navy-900 font-serif font-semibold text-lg mb-3">
                    <Compass className="w-5 h-5 text-gold-500" />
                    Future Career Pathways
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProgram.careerPathways.map((path, i) => (
                      <div key={i} className="bg-navy-900/5 p-3 rounded-xl text-xs sm:text-sm text-navy-900 font-medium flex items-center gap-2">
                        <span className="text-gold-500 font-bold">&check;</span>
                        {path}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration & Eligibility */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-navy-900/10 text-xs sm:text-sm text-navy-900/70">
                  <div>
                    <strong className="text-navy-900">Duration:</strong> {selectedProgram.duration}
                  </div>
                  <div>
                    <strong className="text-navy-900">Eligibility:</strong> {selectedProgram.eligibility}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-6 border-t border-navy-900/10 flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="w-full sm:w-auto border border-navy-900/20 text-navy-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-navy-900/5 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleApplyNow(selectedProgram.id)}
                    className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                  >
                    Apply For {selectedProgram.subtitle}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Programs
