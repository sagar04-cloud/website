import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { integratedPrograms } from '../data/integratedPrograms'

const IntegratedPrograms = () => {
  return (
    <section id="integrated" className="py-14 sm:py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 sm:mb-16 lg:mb-24"
        >
          <p className="text-gold-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-semibold">
            Competitive Preparation
          </p>
          <h2 className="font-serif text-section text-white">Prepare Beyond the Classroom.</h2>
        </motion.div>

        <div className="space-y-6">
          {integratedPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-8 lg:p-12 hover:bg-white/10 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <span className="font-serif text-5xl lg:text-6xl text-gold-400/30 group-hover:text-gold-400/50 transition-colors">
                    {program.number}
                  </span>
                </div>
                
                <div className="lg:col-span-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2">
                        {program.title}
                      </h3>
                      <p className="text-white/60 text-lg mb-4">
                        {program.subtitle}
                      </p>
                      <p className="text-white/70 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                    
                    <button className="flex items-center gap-2 text-gold-400 font-semibold group-hover:gap-4 transition-all whitespace-nowrap">
                      Explore
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntegratedPrograms
