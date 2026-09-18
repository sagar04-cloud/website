import { motion } from 'framer-motion'
import { gallery } from '../data/gallery'

const Gallery = () => {
  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 sm:mb-16 lg:mb-24"
        >
          <p className="text-gold-500 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-semibold">
            Gallery
          </p>
          <h2 className="font-serif text-section text-navy-900">Our Campus in Pictures.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {gallery.map((item, index) => {
            const sizeClasses: Record<string, string> = {
              large: 'col-span-1 sm:col-span-2 row-span-1 sm:row-span-2',
              medium: 'col-span-1 row-span-1 sm:row-span-2',
              small: 'col-span-1 row-span-1'
            }
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${sizeClasses[item.size] || 'col-span-1 row-span-1'} rounded-2xl overflow-hidden relative group cursor-pointer min-h-[180px]`}
              >
                <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-base">{item.title}</p>
                    <p className="text-gold-400 text-xs tracking-wider uppercase mt-0.5">{item.category}</p>
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

export default Gallery
