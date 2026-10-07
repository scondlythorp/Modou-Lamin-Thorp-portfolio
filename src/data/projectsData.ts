export interface PortfolioProject {
  title: string;
  technologies: string[];
  description: string;
  image: string;
  imageAlt: string;
}

export const PROJECTS_DATA: PortfolioProject[] = [
  {
    title: 'Pharmacy Management System',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'JWT', 'bcrypt', 'Zod'],
    description: 'Built REST APIs for medicines, staff, suppliers, purchases, sales, stock, and reporting. Implemented authentication, role-based access control, validation, and relational database models.',
    image: '/assets/pharmacy-project.svg',
    imageAlt: 'Illustration of pharmacy inventory records and medicine stock'
  },
  {
    title: 'Library Management System',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'SQL'],
    description: 'Developed a Java and Spring Boot application for library records and core lending workflows. Worked on backend logic and database interactions, and practiced REST API development and debugging.',
    image: '/assets/library-project.svg',
    imageAlt: 'Illustration of a library catalogue and book lending records'
  },
  {
    title: 'ATM System',
    technologies: ['Java', 'Object-oriented programming', 'Database concepts'],
    description: 'Developed an ATM application with core banking-style operations and transaction logic. Applied object-oriented programming, validation, and structured error handling.',
    image: '/assets/atm-project.svg',
    imageAlt: 'Illustration of an ATM interface and account transaction records'
  }
];
