import React from 'react';

const roles = [
  'Assistant Software Developer',
  'Junior Software Developer',
  'Backend Developer',
  'Java Developer',
  'Junior Web Developer',
  'IT / Application Support',
  'Software / Technical Internship'
];

export const OpportunitiesSection: React.FC = () => (
  <section id="opportunities" className="py-8 space-y-5 border-t border-stone-200">
    <div className="space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
        Career interests
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
        Ready to learn and contribute
      </h2>
      <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
        I am seeking junior or assistant-level opportunities where I can contribute to software systems, APIs, and databases while learning from experienced technical teams. I am also interested in enterprise and telecommunications environments; my relevant background is software development and networking fundamentals, not telecom engineering.
      </p>
    </div>
    <div className="flex flex-wrap gap-2">
      {roles.map((role) => (
        <span key={role} className="px-3 py-2 rounded-lg bg-white border border-stone-200 text-sm text-stone-700 shadow-sm">
          {role}
        </span>
      ))}
    </div>
  </section>
);
