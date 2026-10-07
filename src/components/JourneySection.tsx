import React from 'react';

export const JourneySection: React.FC = () => (
  <section id="journey" className="py-8 space-y-5 border-t border-stone-200">
    <div className="space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
        Education & training
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
        Education and professional development
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <article className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-2">
        <h3 className="font-bold text-stone-900">National Diploma (ND) in Computer Science</h3>
        <p className="text-sm text-stone-600">Civil Service University (CSU), The Gambia</p>
        <p className="text-xs text-stone-500">Completed; certificate pending formal issuance.</p>
      </article>
      <article className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-2">
        <h3 className="font-bold text-stone-900">Training</h3>
        <p className="text-sm text-stone-600">Africa Elevate DRC Virtual Tech Startup Innovation Bootcamp 2026</p>
        <p className="text-xs text-stone-500">Participated as part of the ChiaLink team.</p>
        <h4 className="pt-2 text-sm font-semibold text-stone-800">Other training & certificates</h4>
        <ul className="list-disc pl-5 text-xs text-stone-600 space-y-1">
          <li>Cybersecurity</li>
          <li>Database Management Systems</li>
          <li>Effective Leadership</li>
          <li>Data Science & Analytics</li>
          <li>Professional Networking for Career Growth</li>
          <li>Additional ICT-related training and certificates</li>
        </ul>
      </article>
    </div>
  </section>
);
