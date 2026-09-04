import { JourneyItem } from '../types';

export const JOURNEY_DATA: JourneyItem[] = [
  {
    id: 'csu-education',
    period: 'July 2024 — September 2026 (Expected)',
    title: "Bachelor's Degree in Computer Science",
    organization: 'Civil Service University (CSU)',
    type: 'Education',
    location: 'The Gambia',
    description: 'Pursuing foundational and practical higher education in computer science, software design principles, and systems analysis. Focused on rigorous software development, database engineering, and practical computing problem solving.',
    highlights: [
      'Coursework: Data Structures & Algorithms, Relational Database Management Systems (PostgreSQL / MySQL), Object-Oriented Programming (Java), Systems Analysis & Design, and Computer Networking.',
      'Active project development translating theoretical computer science concepts into functional software applications.',
      'Consistent focus on software engineering architectures, database modeling, and server-side logic.'
    ],
    technologies: ['Java', 'Python', 'C / C++', 'Relational Databases', 'Networking Fundamentals'],
    isOngoing: true
  },
  {
    id: 'backend-systems-engineering',
    period: '2024 — Present',
    title: 'Independent Backend & Systems Development',
    organization: 'Self-Directed Engineering & Applied Projects',
    type: 'Independent Engineering',
    location: 'The Gambia / Remote',
    description: 'Engineering comprehensive backend architectures, RESTful APIs, and relational schemas to model and solve real-world workflows in healthcare, education, retail inventory, and transportation.',
    highlights: [
      'Engineered the Pharmacy Sales & Inventory Management System (PSIS) implementing FEFO (First-Expired, First-Out) batch rotation and ACID transaction integrity.',
      'Designed the multi-role Gambia Education Suite (GES) prototype for academic grade recording, role-based access, and student management.',
      'Architected the PASSO Transit Fare API modeled on Greater Banjul municipal transit corridors and tariffs.',
      'Authored automated API integration tests in Postman to ensure payload schema compliance and endpoint reliability.'
    ],
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Zod', 'Postman'],
    isOngoing: true
  },
  {
    id: 'student-tech-engagement',
    period: '2024 — Present',
    title: 'Student Technology Engagement & Peer Collaboration',
    organization: 'Information Technology Students Association (ITSA)',
    type: 'Community & Leadership',
    location: 'Civil Service University, The Gambia',
    description: 'Participating in university technology forums, peer coding sessions, and collaborating on student-led initiatives to foster developer skills and practical technical knowledge.',
    highlights: [
      'Developed the ITSA event registration prototype to streamline workshop signups and attendance records.',
      'Collaborated with fellow students on debugging exercises, algorithm practice, and database schema normalizations.',
      'Advocated for practical software development and modern version control (Git/GitHub) workflows among peers.'
    ],
    technologies: ['Git', 'GitHub', 'Web Technologies', 'Community Coordination'],
    isOngoing: true
  },
  {
    id: 'it-support-foundations',
    period: '2023 — Present',
    title: 'IT Systems, Networking & Application Support Foundations',
    organization: 'Practical Lab & Applied Technical Support',
    type: 'Technical Milestone',
    location: 'The Gambia',
    description: 'Building practical hardware, operating system, and networking capabilities to complement software development with full-lifecycle troubleshooting expertise.',
    highlights: [
      'Simulated local area networks, subnetting, and switch configurations using Cisco Packet Tracer.',
      'Troubleshot operating system issues, environment variable configurations, and database server connection errors.',
      'Performed database maintenance routines, data dumps (pg_dump), and schema migrations across development environments.'
    ],
    technologies: ['Packet Tracer', 'Linux CLI', 'Networking Basics', 'Database Administration'],
    isOngoing: true
  }
];
