import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Award, BookOpen, X, Sparkles } from 'lucide-react'
import { facultyMembers, FacultyMember } from '../data/faculty'

const Faculty = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All')
  const [activeMember, setActiveMember] = useState<FacultyMember | null>(null)

  const categories = ['All', 'Science', 'Commerce', 'Languages']

  const filteredFaculty = selectedDept === 'All'
    ? facultyMembers
    : facultyMembers.filter((item) => item.department === selectedDept)

  return (
    <section id="faculty" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-gold-500 text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
            Our Mentors & Educators
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-navy-900 mb-6 font-normal tracking-tight">
            Distinguished Faculty.
          </h2>
          <p className="text-navy-900/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our highly experienced professors bring decades of academic excellence, personal mentorship, and proven results.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedDept === dept
                  ? 'bg-navy-900 text-gold-400 shadow-md scale-105'
                  : 'bg-ivory-50 text-navy-900/70 hover:bg-navy-900/5 hover:text-navy-900'
              }`}
            >
              {dept === 'All' ? 'All Departments' : `${dept}`}
            </button>
          ))}
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {filteredFaculty.map((member, index) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setActiveMember(member)}
                className="group cursor-pointer bg-ivory-50/70 hover:bg-white rounded-3xl p-5 border border-navy-900/5 hover:border-gold-400/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden mb-5 bg-navy-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute bottom-3 left-3 bg-navy-900/90 backdrop-blur-md text-gold-400 text-[10px] sm:text-xs tracking-wider uppercase font-semibold px-3 py-1 rounded-full border border-gold-400/30">
                      {member.experience}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="font-serif text-xl text-navy-900 font-medium group-hover:text-gold-600 transition-colors mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 text-xs font-semibold tracking-wide uppercase mb-2">
                    {member.designation}
                  </p>
                  <p className="text-navy-900/60 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {member.qualification}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-900/5 flex items-center justify-between text-xs text-navy-900/80 font-medium group-hover:text-navy-950">
                  <span className="flex items-center gap-1.5 text-navy-900/60">
                    <BookOpen className="w-3.5 h-3.5 text-gold-500" />
                    {member.subject.split(' ')[0]}
                  </span>
                  <span className="text-gold-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View Profile &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Member Details Modal */}
      <AnimatePresence>
        {activeMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-navy-900/10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveMember(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-navy-900/10 hover:bg-navy-900 text-navy-900 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-navy-900 shadow-md">
                    <img
                      src={activeMember.image}
                      alt={activeMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="inline-block bg-gold-400/20 text-gold-700 text-xs uppercase font-semibold px-3 py-1 rounded-full mb-2">
                      {activeMember.department}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-navy-900 font-normal">
                      {activeMember.name}
                    </h3>
                    <p className="text-gold-600 font-medium text-sm sm:text-base mt-1">
                      {activeMember.designation}
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs sm:text-sm text-navy-900/70 font-medium">
                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-gold-500" />
                        {activeMember.qualification}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-gold-500" />
                        {activeMember.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 border-t border-navy-900/10 pt-6">
                  <div>
                    <h4 className="text-navy-900 font-serif text-lg font-medium mb-2">
                      Biography & Overview
                    </h4>
                    <p className="text-navy-900/70 text-sm sm:text-base leading-relaxed">
                      {activeMember.bio}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-navy-900 font-serif text-lg font-medium mb-3">
                      Key Highlights & Achievements
                    </h4>
                    <div className="space-y-2 sm:space-y-2.5">
                      {activeMember.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-ivory-50 p-3 rounded-xl text-xs sm:text-sm text-navy-900">
                          <Award className="w-4 h-4 text-gold-500 flex-shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-navy-900/10 flex justify-end">
                  <button
                    onClick={() => setActiveMember(null)}
                    className="bg-navy-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-500 hover:text-navy-900 transition-colors"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Faculty
