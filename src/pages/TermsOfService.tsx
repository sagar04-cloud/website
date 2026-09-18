import { motion } from 'framer-motion'
import { ArrowLeft, Scale, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react'
import { collegeInfo } from '../data/collegeInfo'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-ivory-50">
      {/* Header Banner */}
      <div className="bg-navy-900 text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Terms of Service
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
              <Scale className="w-6 h-6 text-gold-500 flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold">
                1. Acceptance of Terms
              </h2>
            </div>
            <p className="text-sm sm:text-base">
              By accessing, browsing, or utilizing the official website of Sarvodaya Pre-University College (S.E.T. Pre-University College, Bengaluru), you agree to comply with and be bound by the following Terms of Service. If you do not agree with any part of these terms, please do not use this website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-t border-navy-900/10 pt-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold">
                2. Use of Website Content
              </h2>
            </div>
            <p className="text-sm sm:text-base mb-3">
              All content provided on this website—including text, graphics, course details, campus images, faculty profiles, and logos—is the property of Sarvodaya PU College and protected by intellectual property laws.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-2 text-navy-900/90">
              <li>Content is for personal, non-commercial, and informational use only.</li>
              <li>Unauthorized copying, redistribution, or modification of college media or logos is prohibited.</li>
              <li>Automated scraping or extraction of data without written consent is strictly forbidden.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="border-t border-navy-900/10 pt-6">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-6 h-6 text-gold-500 flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold">
                3. Admission Disclaimers & Eligibility
              </h2>
            </div>
            <p className="text-sm sm:text-base">
              Submitting an online application or inquiry form on this website does not guarantee final admission to Sarvodaya PU College. Admission is strictly subject to candidate eligibility as per the Department of Pre-University Education (Karnataka PU Board), seat availability, verification of original 10th marks cards, and completion of institutional admission procedures.
            </p>
          </div>

          {/* Section 4 */}
          <div className="border-t border-navy-900/10 pt-6">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle className="w-6 h-6 text-gold-500 flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold">
                4. Modifications & Updates
              </h2>
            </div>
            <p className="text-sm sm:text-base">
              Sarvodaya PU College reserves the right to revise or update website information, course offerings, fee structures, academic calendars, or these Terms of Service at any time without prior notice. Continued use of the website following any changes constitutes acceptance of those revisions.
            </p>
          </div>

          {/* Section 5 */}
          <div className="border-t border-navy-900/10 pt-6">
            <h2 className="font-serif text-xl sm:text-2xl text-navy-900 font-semibold mb-3">
              5. Governing Law
            </h2>
            <p className="text-sm sm:text-base mb-4">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.
            </p>

            <div className="bg-ivory-50 p-4 rounded-2xl border border-navy-900/10 text-sm space-y-1 text-navy-900 font-medium">
              <p className="font-semibold text-gold-600">Need Clarification?</p>
              <p>For official inquiries regarding admissions or terms, contact us at:</p>
              <p>Phone: {collegeInfo.phone}</p>
              <p>Email: {collegeInfo.email}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfService
