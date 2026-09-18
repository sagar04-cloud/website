export interface FacultyMember {
  id: string
  name: string
  designation: string
  department: 'Science' | 'Commerce' | 'Languages'
  qualification: string
  experience: string
  subject: string
  bio: string
  achievements: string[]
  image: string
}

export const facultyMembers: FacultyMember[] = [
  {
    id: 'fac-3',
    name: 'Prof. N. Suresh Kumar',
    designation: 'Senior Mathematics Professor',
    department: 'Science',
    qualification: 'M.Sc. in Mathematics',
    experience: '20+ Years Experience',
    subject: 'Mathematics',
    bio: 'Master problem-solver and Mathematics coach known for making complex calculus and algebra intuitive for students.',
    achievements: ['Guided Top 100 Board Rankers', 'Senior Question Paper Consultant', 'Excellence in Pedagogy Award'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fac-4',
    name: 'Dr. Lakshmi Narayana',
    designation: 'Senior Biology Lecturer',
    department: 'Science',
    qualification: 'M.Sc., Ph.D. in Botany',
    experience: '18+ Years Experience',
    subject: 'Biology (Botany & Zoology)',
    bio: 'Expert in NCERT Biology concepts with a proven record of guiding students to score top marks in Biology.',
    achievements: ['Research Publications in Plant Genetics', 'Biology Masterclass Instructor', 'Gold Medalist M.Sc.'],
    image: 'https://images.unsplash.com/photo-1580894732413-a923f71da6e0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fac-5',
    name: 'Prof. Venkatesh Murthy',
    designation: 'Senior Commerce Professor',
    department: 'Commerce',
    qualification: 'M.Com., FCA (Fellow Chartered Accountant)',
    experience: '24+ Years Experience',
    subject: 'Accountancy & Financial Management',
    bio: 'Practicing Chartered Accountant and Commerce professor who equips students with real-world financial acumen and CA Foundation preparation.',
    achievements: ['100% CA Foundation Clearing Rate', 'Ex-Financial Advisor to Govt Undertakings', 'Popular Commerce Speaker'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fac-6',
    name: 'Prof. Deepa S.',
    designation: 'Senior Business Studies Lecturer',
    department: 'Commerce',
    qualification: 'M.Com., M.Phil.',
    experience: '16+ Years Experience',
    subject: 'Business Studies & Management',
    bio: 'Dynamic educator bringing case studies and corporate management principles into classroom teaching.',
    achievements: ['District Level Best Educator', 'Coordinator for Inter-College Commerce Fest', '100/100 Student Scorers'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fac-7',
    name: 'Prof. Rajeshwari M.',
    designation: 'Senior Lecturer in Computer Science',
    department: 'Science',
    qualification: 'M.Sc., M.Tech in Computer Science',
    experience: '14+ Years Experience',
    subject: 'Computer Science (C++ & Python)',
    bio: 'Technology enthusiast training PU students in practical programming, database management, and algorithmic thinking.',
    achievements: ['Established Smart IT Labs', 'Mentor for Coding Competitions', 'Certified Python Educator'],
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fac-8',
    name: 'Prof. Archana Rao',
    designation: 'Senior English Lecturer',
    department: 'Languages',
    qualification: 'M.A. in English Literature, B.Ed.',
    experience: '17+ Years Experience',
    subject: 'English & Communication Skills',
    bio: 'Dedicated language specialist focusing on effective communication, literary appreciation, and personality development.',
    achievements: ['Chief Editor College Annual Journal', 'State Seminar Keynote Speaker', 'Personality Development Coach'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
  }
]
