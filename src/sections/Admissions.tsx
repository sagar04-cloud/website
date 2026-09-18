import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react'

const Admissions = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [message, setMessage] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')

  useEffect(() => {
    const handleSelectCourse = (e: CustomEvent<string>) => {
      if (e.detail) {
        setSelectedCourse(e.detail)
      }
    }
    window.addEventListener('select-course' as any, handleSelectCourse)
    return () => window.removeEventListener('select-course' as any, handleSelectCourse)
  }, [])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10)
    setPhone(digitsOnly)
    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
      setPhoneError('Phone number must contain exactly 10 digits.')
    } else {
      setPhoneError('')
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (value.length > 0 && (!value.includes('@') || !value.includes('.'))) {
      setEmailError('Please enter a valid email address (e.g. name@gmail.com).')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit phone number.')
      return
    }
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address ending with @gmail.com.')
      return
    }
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFullName('')
      setPhone('')
      setEmail('')
      setSelectedCourse('')
      setMessage('')
    }, 4000)
  }

  const inputStyle = {
    backgroundColor: '#07101E',
    color: '#ffffff',
  }

  const inputClass = "w-full border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"

  return (
    <section id="admissions" className="py-14 sm:py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10 sm:mb-16 lg:mb-24"
        >
          <p className="text-gold-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-semibold">
            Admissions 2026-27
          </p>
          <h2 className="font-serif text-section text-white mb-6">
            Your Next Chapter
            <br className="hidden md:inline" />{' '}
            Starts Here.
          </h2>
          <p className="text-white/70 text-body-lg max-w-2xl mx-auto">
            Join Sarvodaya Pre-University College and take the first step toward a successful academic and professional future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <a
              href="#contact"
              className="group flex items-center gap-4 bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl"
            >
              Apply Now for 2026 Batch
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-4 border-2 border-white/30 text-white px-8 py-6 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Talk to Our Admissions Desk
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>

            <div className="space-y-4 pt-8">
              <a
                href="tel:+919916776393"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-gold-400" />
                <span>+91 99167 76393</span>
              </a>
              <a
                href="mailto:contact@sarvodayapuc.com"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-gold-400" />
                <span>contact@sarvodayapuc.com</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-navy-950/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl"
          >
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif text-3xl text-white font-bold">Enquiry Submitted!</h3>
                <p className="text-white/80 text-base max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-gold-400">{fullName}</strong>! Our admissions team will reach out to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={inputStyle}
                    className={inputClass}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-1.5">Phone Number (10 Digits) *</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={handlePhoneChange}
                    style={inputStyle}
                    className={inputClass}
                    placeholder="Enter 10-digit mobile number (e.g. 9916776393)"
                  />
                  {phoneError ? (
                    <p className="text-amber-400 text-xs mt-1">{phoneError}</p>
                  ) : (
                    <p className="text-white/40 text-xs mt-1">{phone.length}/10 digits entered</p>
                  )}
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    style={inputStyle}
                    className={inputClass}
                    placeholder="studentname@gmail.com"
                  />
                  {emailError && (
                    <p className="text-amber-400 text-xs mt-1">{emailError}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-1.5">Course Intended *</label>
                  <select
                    required
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    style={inputStyle}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" style={inputStyle}>Select a course</option>
                    <option value="science-pcmb" style={inputStyle}>Science - PCMB (Physics, Chem, Math, Bio)</option>
                    <option value="science-pcmc" style={inputStyle}>Science - PCMC (Physics, Chem, Math, Comp Sci)</option>
                    <option value="commerce-ceba" style={inputStyle}>Commerce - CEBA (Comp Sci, Econ, Bus, Acct)</option>
                    <option value="commerce-seba" style={inputStyle}>Commerce - SEBA (Stats, Econ, Bus, Acct)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-1.5">Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={inputStyle}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your academic goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold py-4 rounded-xl transition-all duration-300 shadow-xl text-base tracking-wide"
                >
                  Submit Admission Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Admissions
