import React from 'react';
import { JOURNEY_DATA } from '../data/journeyData';
import { GraduationCap, Code2, Users, Wrench, Calendar, MapPin } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Education':
        return <GraduationCap size={16} className="text-emerald-700" />;
      case 'Independent Engineering':
        return <Code2 size={16} className="text-emerald-700" />;
      case 'Community & Leadership':
        return <Users size={16} className="text-emerald-700" />;
      default:
        return <Wrench size={16} className="text-emerald-700" />;
    }
  };

  return (
    <section id="journey" className="py-10 space-y-8 border-t border-stone-200">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
          Career Trajectory
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Professional Journey & Education
        </h2>
        <p className="text-sm text-stone-600 max-w-2xl">
          An honest timeline of academic learning, hands-on system building, university technology leadership, and practical technical support.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-300">
        {JOURNEY_DATA.map((item) => (
          <div key={item.id} className="relative space-y-2 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-emerald-700 flex items-center justify-center shadow-sm">
              {getTypeIcon(item.type)}
            </div>

            {/* Content Box */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-stone-200 shadow-sm space-y-3 hover:border-emerald-700/50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 font-mono">
                    {item.type}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-stone-700">
                    {item.organization}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-0.5 text-xs text-stone-500 shrink-0 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-stone-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 pt-1">
                <p className="text-xs font-semibold text-stone-800">Key Focus & Milestones:</p>
                <ul className="space-y-1 text-xs text-stone-600">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold select-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology tags */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stone-100">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
