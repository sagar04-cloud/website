import { motion } from 'framer-motion'

const Introduction = () => {
  return (
    <section className="py-14 sm:py-24 lg:py-48 px-4 sm:px-6 lg:px-8 bg-ivory-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-navy-900/60 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6 font-semibold"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-serif text-section text-navy-900 leading-[1.15] mb-6 sm:mb-10"
          >
            Education is not simply about
            <br className="hidden md:inline" />{' '}
            what students learn.
            <br className="hidden md:inline" />{' '}
            It is about what they become.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-body-lg text-navy-900/70 max-w-3xl mx-auto leading-relaxed"
          >
            At Sarvodaya Pre-University College, we believe in transforming potential into possibility. 
            Through academic excellence, integrated competitive exam preparation, and holistic student development, 
            we nurture ambitious learners to achieve their dreams in medicine, engineering, commerce, and beyond.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction
