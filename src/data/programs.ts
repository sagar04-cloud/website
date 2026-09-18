export interface ProgramDetail {
  id: string
  title: string
  subtitle: string
  tagline: string
  description: string
  features: string[]
  subjects: string[]
  integratedCoaching: string[]
  careerPathways: string[]
  eligibility: string
  duration: string
  color: string
}

export const programs: ProgramDetail[] = [
  {
    id: 'science-pcmb',
    title: 'Science',
    subtitle: 'PCMB',
    tagline: 'Physics, Chemistry, Mathematics, Biology',
    description: 'Our flagship 2-year integrated PCMB program offers an exceptional academic foundation combined with intensive coaching for medical and engineering entrance exams like NEET, JEE, and KCET.',
    features: [
      'Strong foundation in Physics, Chemistry, Mathematics & Biology',
      'Integrated coaching for NEET, JEE & KCET entrance tests',
      'Experienced faculty with proven track record of top ranks',
      'Regular OMR mock exams & weekly performance analytics'
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Kannada / Hindi / Sanskrit'],
    integratedCoaching: ['NEET (UG) Medical Prep', 'JEE Main & Advanced', 'KCET (Karnataka CET)', 'Olympiad & KVPY Mentorship'],
    careerPathways: ['MBBS / BDS / BAMS / BHMS', 'B.Tech / B.E. Engineering', 'Biotechnology & Life Sciences', 'Pure Sciences & Research'],
    eligibility: 'Passed SSLC / 10th Standard or equivalent exam.',
    duration: '2 Years (1st & 2nd Year PU Board + Entrance Coaching)',
    color: 'from-blue-900 to-navy-800'
  },
  {
    id: 'science-pcmc',
    title: 'Science',
    subtitle: 'PCMC',
    tagline: 'Physics, Chemistry, Mathematics, Computer Science',
    description: 'Designed for tech enthusiasts aiming for premier engineering institutions and software innovation. Combines core science with hands-on programming in C++ and Python.',
    features: [
      'Strong foundation in Physics, Chemistry, Mathematics & Computer Science',
      'Integrated coaching for JEE Main, Advanced & KCET',
      'Modern state-of-the-art computer labs & practical coding',
      'Focus on algorithmic problem solving & data structures'
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'English', 'Kannada / Hindi / Sanskrit'],
    integratedCoaching: ['JEE Main & Advanced', 'KCET (Engineering)', 'BITS / COMEDK Prep', 'Coding & Logic Masterclasses'],
    careerPathways: ['B.Tech Computer Science & AI/ML', 'Data Science & Software Engineering', 'Electronics & Communication', 'Robotics & Cybersecurity'],
    eligibility: 'Passed SSLC / 10th Standard or equivalent exam.',
    duration: '2 Years (1st & 2nd Year PU Board + Entrance Coaching)',
    color: 'from-purple-900 to-blue-800'
  },
  {
    id: 'commerce-ceba',
    title: 'Commerce',
    subtitle: 'CEBA',
    tagline: 'Computer Science, Economics, Business Studies, Accountancy',
    description: 'Tailored for students targeting high-growth careers in corporate finance, software accounting, and professional certifications like CA (Chartered Accountancy) and CS.',
    features: [
      'Comprehensive business, accounting & digital finance curriculum',
      'Integrated CA Foundation (CPT) & CS Coaching',
      'Hands-on Tally & Accounting Software training',
      'Industrial visits & interactive business seminars'
    ],
    subjects: ['Computer Science', 'Economics', 'Business Studies', 'Accountancy', 'English', 'Kannada / Hindi / Sanskrit'],
    integratedCoaching: ['CA Foundation (ICAI Prep)', 'CS Executive Entrance (CSEET)', 'IPMAT / CUET Commerce', 'Digital Accounting'],
    careerPathways: ['Chartered Accountant (CA)', 'Company Secretary (CS)', 'B.Com (Hons) / BBA Finance', 'FinTech & Software Analytics'],
    eligibility: 'Passed SSLC / 10th Standard or equivalent exam.',
    duration: '2 Years (1st & 2nd Year PU Board + Professional Coaching)',
    color: 'from-amber-900 to-orange-800'
  },
  {
    id: 'commerce-seba',
    title: 'Commerce',
    subtitle: 'SEBA',
    tagline: 'Statistics, Economics, Business Studies, Accountancy',
    description: 'A math-and-statistics-rich commerce program ideal for aspiring financial analysts, actuaries, economists, and corporate executives.',
    features: [
      'Statistics-focused commerce curriculum for analytical precision',
      'Integrated CS & CA Foundation preparation',
      'Strong grounding in micro/macro economics & trade laws',
      'Personalized mentorship for professional competitive exams'
    ],
    subjects: ['Statistics', 'Economics', 'Business Studies', 'Accountancy', 'English', 'Kannada / Hindi / Sanskrit'],
    integratedCoaching: ['CS Executive (CSEET Prep)', 'CA Foundation (ICAI)', 'CUET / Analytics Entrance', 'Statistical Modeling'],
    careerPathways: ['Actuarial Science & Risk Management', 'Financial Analyst & Stock Market', 'Company Secretary & Corporate Law', 'Economist & Data Analyst'],
    eligibility: 'Passed SSLC / 10th Standard or equivalent exam.',
    duration: '2 Years (1st & 2nd Year PU Board + Professional Coaching)',
    color: 'from-emerald-900 to-teal-800'
  }
]
