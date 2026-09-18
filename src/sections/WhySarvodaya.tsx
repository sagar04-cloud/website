import { motion } from 'framer-motion'
import { whySarvodaya } from '../data/whySarvodaya'
import { Award, BookOpen, Users, TrendingUp, Compass, Building2 } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  'award': Award,
  'book-open': BookOpen,
  'users': Users,
  'trending-up': TrendingUp,
  'compass': Compass,
  'building-2': Building2,
}

const WhySarvodaya = () => {
  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-white overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-8 sm:mb-16 lg:mb-24"
        >
          <p className="text-gold-500 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
            Our Advantages
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-navy-900 font-normal">Why Sarvodaya</h2>
        </motion.div>

        <div className="space-y-0">
          {whySarvodaya.map((item, index) => {
            const Icon = iconMap[item.icon] || Award
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative border-t border-navy-900/10 py-6 sm:py-10 lg:py-16 hover:bg-ivory-50 transition-colors duration-500"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                  {/* Number & Icon inline row for mobile */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-900/30 group-hover:text-gold-500/70 transition-colors font-bold">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-navy-900/5 group-hover:bg-gold-500 group-hover:text-navy-950 text-navy-900 flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 sm:pt-0">
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-navy-900 mb-2 font-medium">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-body-lg text-navy-900/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhySarvodaya
