import React from 'react';

const skillGroups = [
  {
    title: 'Backend & APIs',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Node.js', 'Express.js', 'JWT', 'bcrypt', 'RBAC', 'Zod']
  },
  {
    title: 'Web development',
    skills: ['JavaScript', 'React.js', 'HTML5', 'CSS3']
  },
  {
    title: 'Databases & tools',
    skills: ['SQL', 'PostgreSQL', 'MySQL', 'Prisma ORM', 'Postman', 'Bruno', 'Git', 'GitHub']
  },
  {
    title: 'Technical practice',
    skills: ['Debugging', 'Software documentation', 'Networking fundamentals', 'Cisco Packet Tracer', 'Database administration']
  }
];

export const SkillsSection: React.FC = () => (
  <section id="skills" className="py-8 space-y-5 border-t border-stone-200">
    <div className="space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
        Technical skills
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
        Technologies I have worked with
      </h2>
      <p className="text-sm text-stone-600 max-w-2xl">
        A practical profile across backend development, APIs, databases, and web technologies.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {skillGroups.map((group) => (
        <div key={group.title} className="bg-white rounded-xl border border-stone-200 p-5 space-y-3 shadow-sm">
          <h3 className="text-sm font-semibold text-stone-900">{group.title}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span key={skill} className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
