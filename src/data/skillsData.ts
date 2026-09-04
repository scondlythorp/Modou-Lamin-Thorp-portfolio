import { SkillCategoryGroup } from '../types';

export const SKILLS_DATA: SkillCategoryGroup[] = [
  {
    id: 'backend',
    title: 'Backend Engineering & APIs',
    description: 'Constructing robust server architectures, structured REST endpoints, and secure transactional workflows.',
    iconName: 'Server',
    level: 'Core Working Stack',
    skills: [
      { name: 'Node.js', context: 'Runtime environment for scalable server-side execution and event-driven services', highlight: true },
      { name: 'Express.js', context: 'REST API routing, middleware chaining, and HTTP request lifecycles', highlight: true },
      { name: 'REST API Design', context: 'Predictable HTTP verbs, status codes, query pagination, and payload structures', highlight: true },
      { name: 'JWT Authentication', context: 'Stateless access tokens and refresh token validation mechanisms' },
      { name: 'bcrypt', context: 'Secure password hashing with salted one-way cryptographic algorithms' },
      { name: 'Zod Validation', context: 'Schema declaration and runtime payload sanitization' },
      { name: 'RBAC (Role-Based Access)', context: 'Hierarchical permission checks guarding sensitive business routes' }
    ]
  },
  {
    id: 'databases',
    title: 'Relational Databases & Data Modeling',
    description: 'Designing normalized relational schemas, enforcing referential integrity, and writing optimized queries.',
    iconName: 'Database',
    level: 'Core Working Stack',
    skills: [
      { name: 'PostgreSQL', context: 'Primary relational database for ACID-compliant transactional applications', highlight: true },
      { name: 'Prisma ORM', context: 'Type-safe queries, schema declarations, and database migrations', highlight: true },
      { name: 'Database Normalization', context: '1NF, 2NF, 3NF schema design reducing redundancy and data anomalies' },
      { name: 'MySQL', context: 'Relational database schema modeling and SQL queries' },
      { name: 'pgAdmin & Workbench', context: 'Database administration, index inspection, and query execution plans' },
      { name: 'MongoDB / NoSQL', context: 'Working familiarity with document-based data persistence' }
    ]
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Writing readable, maintainable, and type-safe code across multiple language paradigms.',
    iconName: 'Code',
    level: 'Core Working Stack',
    skills: [
      { name: 'JavaScript (ES6+)', context: 'Async/await, Promises, closures, modular architecture, and DOM APIs', highlight: true },
      { name: 'Python', context: 'Data analysis, algorithms, and decision-support logic', highlight: true },
      { name: 'Java', context: 'Object-oriented programming, inheritance, data structures, and JDBC', highlight: true },
      { name: 'HTML5 & Semantic Markup', context: 'Accessible, SEO-conscious document structuring' },
      { name: 'CSS3 & Modern Layouts', context: 'Flexbox, CSS Grid, mobile-first responsive styling' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    description: 'Translating backend data models into responsive, accessible, and clean user interfaces.',
    iconName: 'Layout',
    level: 'Working Knowledge',
    skills: [
      { name: 'React', context: 'Component-driven interfaces, hooks state management, and props contracts', highlight: true },
      { name: 'Tailwind CSS', context: 'Utility-first styling, design token consistency, and responsive breakpoints', highlight: true },
      { name: 'Responsive Web Design', context: 'Mobile-first layout precision for smartphones, tablets, and desktops' },
      { name: 'Web Accessibility (a11y)', context: 'WCAG-conscious semantic elements, keyboard navigation, and aria tags' },
      { name: 'State Management', context: 'Deterministic local state and client-side caching strategies' }
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools & Workflow',
    description: 'Employing industry standard tooling for version control, API testing, and debugging.',
    iconName: 'Terminal',
    level: 'Tools & Infrastructure',
    skills: [
      { name: 'Git & GitHub', context: 'Branching, commit history hygiene, pull requests, and code reviews', highlight: true },
      { name: 'Postman', context: 'API endpoint testing, environment variables, and automated collections', highlight: true },
      { name: 'VS Code & PyCharm', context: 'Configured IDE environments with linter and debugger extensions' },
      { name: 'dotenv', context: 'Environment variable segregation protecting secrets from client exposure' },
      { name: 'Linux / Bash CLI', context: 'Command-line navigation, script execution, and process management' }
    ]
  },
  {
    id: 'it-support',
    title: 'IT & Application Support',
    description: 'System diagnostic abilities, network fundamentals, and hardware/software troubleshooting.',
    iconName: 'Wrench',
    level: 'Systems & Support',
    skills: [
      { name: 'Cisco Packet Tracer', context: 'Simulating local area network topologies, IP addressing, and routing' },
      { name: 'System Troubleshooting', context: 'Diagnosing operating system issues, application crashes, and log errors' },
      { name: 'Database Backups & Export', context: 'Executing pg_dump, CSV exports, and data recovery steps' },
      { name: 'Hardware & OS Configuration', context: 'Workstation setups, peripheral connectivity, and software deployment' }
    ]
  }
];
