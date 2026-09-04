import React from 'react';
import { Server, Database, GraduationCap, Globe, ShieldCheck } from 'lucide-react';

export const CredibilitySnapshot: React.FC = () => {
  const items = [
    {
      icon: Server,
      title: 'Backend Engineering',
      desc: 'Node.js, Express.js & REST APIs with Zod validation and JWT authentication.'
    },
    {
      icon: Database,
      title: 'Relational Databases',
      desc: 'PostgreSQL & Prisma ORM with normalized schemas and ACID transactions.'
    },
    {
      icon: ShieldCheck,
      title: 'Real-World Modeling',
      desc: 'FEFO pharmacy batching, academic RBAC portals & responsive web architecture.'
    },
    {
      icon: GraduationCap,
      title: 'Computer Science',
      desc: "Bachelor's Degree candidate at Civil Service University (July 2024 — Sept 2026)."
    },
    {
      icon: Globe,
      title: 'Global Readiness',
      desc: 'Based in The Gambia (UTC+0). Open to remote, regional, and on-site roles.'
    }
  ];

  return (
    <section className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-800">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
            Recruiter & Engineering Snapshot
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Verified Competencies & Focus
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Available for Hire
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-stone-800/90 border border-stone-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                <Icon size={18} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-stone-100">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
