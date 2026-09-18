import { motion } from 'framer-motion'
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Phone } from 'lucide-react'
import { collegeInfo } from '../data/collegeInfo'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-ivory-50">
      {/* Header Banner */}
      <div className="bg-navy-900 text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-gold-400 text-sm sm:text-base mb-4 font-medium">
            S.E.T. Pre-University College • Last Updated: September 2026
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.location.hash = ''
            }}
            className="inline-flex items-center gap-2 text-gold-400 text-xs sm:text-sm font-semibold hover:text-gold-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Main Website
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-navy-900/10 shadow-sm space-y-8 text-navy-900/80 leading-relaxed"
        >
          {/* Section 1 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-gold-500 flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold">
                1. Introduction
              </h2>
            </div>
            <p className="text-sm sm:text-base">
              Welcome to Sarvodaya Pre-University College (S.E.T. Pre-University College, Bengaluru). We respect your privacy and are committed to protecting the personal information of our students, parents, guardians, and website visitors. This Privacy Policy explains how we collect, use, safeguard, and handle your information when you visit our website or submit online admission inquiries.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-t border-navy-900/10 pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-6 h-6 text-gold-500 flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold">
                2. Information We Collect
              </h2>
            </div>
            <p className="text-sm sm:text-base mb-3">
              We collect information that you voluntarily provide to us when filling out admission query forms, contacting our admissions desk, or requesting course details. This may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-2 text-navy-900/90">
              <li>Student's Full Name, Date of Birth, and Academic Details</li>
              <li>Parent / Guardian Name and Contact Information</li>
              <li>Phone Number (10 digits) and Valid Email Address</li>
              <li>Selected Stream (PCMB, PCMC, CEBA, SEBA)</li>
              <li>10th Standard Board / School Information</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="border-t border-navy-900/10 pt-6">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-gold-500 flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold">
                3. How We Use Your Information
              </h2>
            </div>
            <p className="text-sm sm:text-base mb-3">
              The information collected is strictly utilized for educational and administrative purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-2 text-navy-900/90">
              <li>Processing admission applications and evaluation queries</li>
              <li>Contacting parents/students regarding eligibility, counseling dates, and fee structures</li>
              <li>Providing updates regarding competitive exam coaching (NEET, JEE, KCET, CA-CPT)</li>
              <li>Sending important academic notices and event invitations</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="border-t border-navy-900/10 pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-gold-500 flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold">
                4. Data Protection & Confidentiality
              </h2>
            </div>
            <p className="text-sm sm:text-base">
              We implement robust security measures to protect your personal data against unauthorized access, alteration, or disclosure. Sarvodaya PU College does not sell, rent, or trade student or parent personal information to any commercial third parties. Data is accessible strictly to authorized admissions staff and college management.
            </p>
          </div>

          {/* Section 5 */}
          <div className="border-t border-navy-900/10 pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-6 h-6 text-gold-500 flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold">
                5. Contacting Us About Privacy
              </h2>
            </div>
            <p className="text-sm sm:text-base mb-3">
              If you have any questions, concerns, or wish to update your submitted inquiry information, please reach out to our administration office:
            </p>
            <div className="bg-ivory-50 p-4 rounded-2xl border border-navy-900/10 text-sm space-y-1 text-navy-900 font-medium">
              <p>S.E.T. Pre-University College</p>
              <p>Address: {collegeInfo.address}</p>
              <p>Phone: {collegeInfo.phone}</p>
              <p>Email: {collegeInfo.email}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
