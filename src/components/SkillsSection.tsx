import React from 'react';
import { SKILLS_DATA } from '../data/skillsData';
import { 
  Server, 
  Database, 
  Code, 
  Layout, 
  Terminal, 
  Wrench,
  Check,
  ShieldAlert
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server size={18} className="text-emerald-700" />;
      case 'Database':
        return <Database size={18} className="text-emerald-700" />;
      case 'Code':
        return <Code size={18} className="text-emerald-700" />;
      case 'Layout':
        return <Layout size={18} className="text-emerald-700" />;
      case 'Terminal':
        return <Terminal size={18} className="text-emerald-700" />;
      case 'Wrench':
        return <Wrench size={18} className="text-emerald-700" />;
      default:
        return <Server size={18} className="text-emerald-700" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Core Working Stack':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'Working Knowledge':
        return 'bg-blue-50 text-blue-900 border-blue-200';
      case 'Tools & Infrastructure':
        return 'bg-purple-50 text-purple-900 border-purple-200';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-300';
    }
  };

  return (
    <section id="skills" className="py-10 space-y-8 border-t border-stone-200">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
          Technical Profile & Ecosystem
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Skills & Architectural Tools
        </h2>
        <p className="text-sm text-stone-600 max-w-2xl">
          Categorized with practical context and operational experience. No arbitrary percentage ratings — only honest, verified technical capability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_DATA.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-xl border border-stone-200 p-5 space-y-4 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center">
                  {getIcon(group.iconName)}
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getLevelBadge(group.level)}`}>
                  {group.level}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-stone-900">
                  {group.title}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills list with practical context */}
              <ul className="space-y-2.5 pt-2 border-t border-stone-100">
                {group.skills.map((skill, idx) => (
                  <li key={idx} className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-emerald-600' : 'bg-stone-400'}`} />
                      <span className={`text-xs font-semibold ${skill.highlight ? 'text-stone-900' : 'text-stone-700'}`}>
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 pl-3 leading-snug">
                      {skill.context}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Application Support Callout */}
      <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-600">
        <div className="space-y-1">
          <p className="font-semibold text-stone-900 text-sm">
            Continuous Integration & Code Cleanliness
          </p>
          <p className="text-stone-600">
            All code follows clean Git branching, explicit TypeScript interfaces, and strict environment variable segregation (.env) to prevent secret leakage.
          </p>
        </div>
        <span className="px-3 py-1 rounded bg-white border border-stone-300 font-mono text-[11px] text-stone-700 font-semibold shrink-0">
          Clean Code • Secure Defaults
        </span>
      </div>
    </section>
  );
};
