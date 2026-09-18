import { motion } from 'framer-motion'
import { admissionProcess } from '../data/admission'

const AdmissionProcess = () => {
  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 sm:mb-16 lg:mb-24"
        >
          <p className="text-gold-500 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-semibold">
            Process
          </p>
          <h2 className="font-serif text-section text-navy-900">Your Journey to Sarvodaya.</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-navy-900/20 transform lg:-translate-x-1/2" />

          {admissionProcess.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white transform -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} ml-16 lg:ml-0`}>
                <span className="font-serif text-5xl text-navy-900/20 mb-2 block">
                  {step.step}
                </span>
                <h3 className="font-serif text-2xl text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-900/60 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Spacer */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdmissionProcess
