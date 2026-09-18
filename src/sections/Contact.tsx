import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { collegeInfo } from '../data/collegeInfo'

const Contact = () => {
  return (
    <section id="contact" className="py-14 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 sm:mb-16 lg:mb-24"
        >
          <p className="text-gold-500 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-semibold">
            Contact
          </p>
          <h2 className="font-serif text-section text-navy-900">
            Let's Start
            <br className="hidden md:inline" />{' '}
            the Conversation.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href={`tel:${collegeInfo.phone.replace(/\s/g, '')}`}
            className="group bg-ivory-50 rounded-3xl p-6 sm:p-8 hover:bg-navy-900 hover:text-white transition-all duration-500"
          >
            <Phone className="w-8 h-8 mb-6 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <h3 className="font-serif text-2xl mb-2">Call Us</h3>
            <p className="text-navy-900/60 group-hover:text-white/70 transition-colors">
              {collegeInfo.phone}
            </p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href={`https://wa.me/${collegeInfo.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-ivory-50 rounded-3xl p-6 sm:p-8 hover:bg-navy-900 hover:text-white transition-all duration-500"
          >
            <MessageCircle className="w-8 h-8 mb-6 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <h3 className="font-serif text-2xl mb-2">WhatsApp</h3>
            <p className="text-navy-900/60 group-hover:text-white/70 transition-colors">
              {collegeInfo.phone}
            </p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href={`mailto:${collegeInfo.email}`}
            className="group bg-ivory-50 rounded-3xl p-6 sm:p-8 hover:bg-navy-900 hover:text-white transition-all duration-500"
          >
            <Mail className="w-8 h-8 mb-6 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <h3 className="font-serif text-2xl mb-2">Email</h3>
            <p className="text-navy-900/60 group-hover:text-white/70 transition-colors">
              {collegeInfo.email}
            </p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="https://www.google.com/maps/search/?api=1&query=Sarvodaya+Pre+University+College+Magadi+Main+Rd+Agrahara+Dasarahalli+Rajajinagar+Bengaluru+560079"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-ivory-50 rounded-3xl p-8 hover:bg-navy-900 hover:text-white transition-all duration-500 shadow-sm hover:shadow-md"
          >
            <MapPin className="w-8 h-8 mb-6 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <h3 className="font-serif text-2xl mb-2">Visit Campus</h3>
            <p className="text-navy-900/60 group-hover:text-white/70 transition-colors text-sm leading-relaxed">
              {collegeInfo.address}
            </p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 rounded-3xl overflow-hidden shadow-lg border border-navy-900/10"
        >
          <div className="aspect-[16/9] sm:aspect-[21/9] bg-navy-900 relative">
            <iframe
              title="Sarvodaya Pre-University College Google Map"
              src="https://maps.google.com/maps?q=Sarvodaya+Pre-University+College+Magadi+Main+Rd+Agrahara+Dasarahalli+Rajajinagar+Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="hover:filter-none transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
