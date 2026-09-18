import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { collegeInfo } from '../data/collegeInfo'

const About = () => {
  return (
    <section id="about" className="py-14 sm:py-24 lg:py-32 bg-white overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 relative"
              >
                <div className="absolute inset-0 bg-[url('/images/sarvodaya-building.jpg')] bg-cover bg-center opacity-95 hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 right-2 sm:-bottom-8 sm:-right-6 bg-gold-500 text-navy-900 px-6 py-4 sm:px-8 sm:py-6 rounded-2xl shadow-xl"
            >
              <p className="font-serif text-3xl sm:text-4xl font-bold">{collegeInfo.established}</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-8 pt-6 sm:pt-0"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gold-500 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-semibold"
            >
              About Sarvodaya
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-900 leading-[1.2] mb-6 sm:mb-8 font-normal"
            >
              An environment designed
              <br className="hidden md:inline" />{' '}
              for ambitious learners.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-body-lg text-navy-900/70 leading-relaxed"
            >
              <p>
                Sarvodaya Pre-University College has been a beacon of academic excellence since 1974.
                We are committed to shaping the future of young minds through academic excellence, discipline, and innovation.
              </p>
              <p>
                Our unique integrated approach combines pre-university education with competitive exam coaching
                for NEET, JEE, KCET, CA Foundation, and CS, ensuring students excel in both board examinations
                and entrance tests.
              </p>
              <p>
                With experienced faculty, modern infrastructure, and a focus on holistic development,
                we prepare students to achieve their dreams in medicine, engineering, commerce, and professional careers.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 sm:mt-10 text-navy-900 font-semibold group hover:text-gold-500 transition-colors text-sm sm:text-base"
            >
              Discover Sarvodaya
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
