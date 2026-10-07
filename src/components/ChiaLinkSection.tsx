import React from 'react';

export const ChiaLinkSection: React.FC = () => (
  <section id="chialink" className="py-8 border-t border-stone-200">
    <div className="rounded-2xl bg-stone-900 text-stone-100 p-6 sm:p-8 space-y-4">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
          Team project & achievement
        </span>
        <h2 className="text-2xl font-bold text-white">ChiaLink</h2>
        <p className="text-sm text-stone-300">Production &amp; Market Intelligence Platform · MVP</p>
      </div>
      <p className="text-sm text-stone-300 max-w-3xl leading-relaxed">
        Contributed to an MVP focused on farmer production, cooperative aggregation, and buyer-demand visibility. Worked on data flows, platform structure, and technical implementation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <p><span className="text-stone-400">Role:</span> Developer / Technical Lead</p>
        <p><span className="text-stone-400">Team:</span> Transformation — Team 3 (6 members)</p>
        <p className="sm:col-span-2 font-semibold text-emerald-300">Top 8 of 20 teams in the DRC innovation competition</p>
      </div>
      <p className="text-xs text-stone-400">
        Africa Elevate DRC Virtual Tech Startup Innovation Bootcamp 2026
      </p>
    </div>
  </section>
);