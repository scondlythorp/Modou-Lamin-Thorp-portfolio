import React from 'react';

export const AboutSection: React.FC = () => (
  <section id="about" className="py-8 space-y-3 border-t border-stone-200">
    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
      Professional introduction
    </span>
    <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
      A practical foundation in software development
    </h2>
    <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
      I have hands-on experience with Java and Spring Boot, Node.js and Express, REST API development, and relational databases. I enjoy building and debugging software, documenting technical work, and collaborating with a team. I am interested in software and application support roles where I can contribute while learning from experienced colleagues.
    </p>
  </section>
);
