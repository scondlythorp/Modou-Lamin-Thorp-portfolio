import React from 'react';
import { ArrowDown, Mail, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onNavigateToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onNavigateToContact
}) => {
  return (
    <section id="hero" className="pt-4 sm:pt-8 pb-10 space-y-8">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-200/70 text-stone-700 border border-stone-300">
          <MapPin size={12} className="text-emerald-700" />
          The Gambia
        </span>
      </div>

      {/* Main Headline & Identity */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
          Modou Lamin Thorp
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-800 tracking-tight">
          Software Developer | Java, Spring Boot, REST APIs & Web Development
        </p>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
          Early-career developer with hands-on experience building Java and Node.js applications, REST APIs, and relational database-backed projects. Interested in contributing to a technical team while continuing to grow.
        </p>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 pt-2">
        <button
          onClick={onExploreProjects}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition-all hover:translate-y-[-1px] active:translate-y-[0px]"
        >
          <span>Explore Featured Projects</span>
          <ArrowDown size={16} />
        </button>

        <button
          onClick={onNavigateToContact}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
        >
          <Mail size={16} />
          <span>Let's Connect</span>
        </button>
      </div>

      <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-500 font-mono">
        <span className="text-stone-400 font-sans uppercase font-semibold text-[11px] tracking-wider">
          Core technologies:
        </span>
        <span className="text-stone-700 font-medium">Java / Spring Boot</span>
        <span className="text-stone-300">•</span>
        <span className="text-stone-700 font-medium">Node.js / Express</span>
        <span className="text-stone-300">•</span>
        <span className="text-stone-700 font-medium">REST APIs / SQL</span>
      </div>
    </section>
  );
};
