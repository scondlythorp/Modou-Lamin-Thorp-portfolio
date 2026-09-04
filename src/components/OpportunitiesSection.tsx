import React from 'react';
import { OPPORTUNITIES_DATA } from '../data/opportunitiesData';
import { CheckCircle2, ArrowRight, Briefcase } from 'lucide-react';

interface OpportunitiesSectionProps {
  onContactClick: () => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({ onContactClick }) => {
  return (
    <section id="opportunities" className="py-10 space-y-8 border-t border-stone-200">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
          Target Alignment
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Open to Opportunities
        </h2>
        <p className="text-sm text-stone-600 max-w-2xl">
          "Open to opportunities where I can contribute, learn, and grow while building reliable software." — Ready for global remote positions, regional African tech companies, and local roles in The Gambia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OPPORTUNITIES_DATA.map((role, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-700/50 transition-colors"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <Briefcase size={15} />
                </div>
                <h3 className="text-sm font-bold text-stone-900 leading-tight">
                  {role.title}
                </h3>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {role.scope}
              </p>

              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-[11px] text-stone-700">
                <strong className="text-emerald-900 font-semibold block mb-0.5">Role Alignment:</strong>
                <p className="text-stone-600 leading-snug">{role.alignment}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-100">
              <div className="flex flex-wrap gap-1">
                {role.relevantSkills.map((sk, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-mono text-[10px]"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-stone-800">
        <div className="space-y-1.5 max-w-xl">
          <h3 className="text-base sm:text-lg font-bold text-white">
            Have an open role or contract in mind?
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
            I am available immediately for technical interviews, coding assessments, or code reviews of my published repositories.
          </p>
        </div>

        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shrink-0 shadow-sm"
        >
          <span>Initiate Conversation</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};
