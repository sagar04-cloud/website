import { motion } from 'framer-motion'
import { ArrowRight, Award } from 'lucide-react'

const Results = () => {
  return (
    <section id="results" className="py-14 sm:py-24 lg:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 sm:mb-16 lg:mb-24"
        >
          <p className="text-gold-500 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-semibold">
            Achievements
          </p>
          <h2 className="font-serif text-section text-navy-900">Performance That Speaks.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Award className="w-20 h-20 mx-auto mb-4 text-gold-400" />
                  <p className="font-serif text-5xl lg:text-6xl font-bold mb-2">100%</p>
                  <p className="text-xl text-white/80">Result Guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="font-serif text-3xl lg:text-4xl text-navy-900 mb-8">
              Excellence in Every Examination
            </h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-navy-900 text-lg mb-1">
                    Consistent Board Results
                  </p>
                  <p className="text-navy-900/60 leading-relaxed">
                    Our students consistently achieve excellent results in PU Board examinations with high pass percentages and distinctions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-navy-900 text-lg mb-1">
                    Competitive Exam Success
                  </p>
                  <p className="text-navy-900/60 leading-relaxed">
                    Integrated coaching programs prepare students effectively for NEET, JEE, KCET, and other competitive examinations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-navy-900 text-lg mb-1">
                    Commerce Excellence
                  </p>
                  <p className="text-navy-900/60 leading-relaxed">
                    Commerce students excel with strong foundation for CA Foundation and CS examinations.
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ x: 10 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-navy-900 font-semibold group"
            >
              View Results
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Results
