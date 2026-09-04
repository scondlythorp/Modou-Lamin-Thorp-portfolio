import React from 'react';
import { Github, Mail, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenArchive: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenResume, onOpenArchive }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 py-12 px-4 sm:px-8 mt-12 no-print">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-stone-900">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-xs tracking-wider">
                MLT
              </div>
              <span className="text-base font-bold text-stone-100">
                Modou Lamin Thorp
              </span>
            </div>
            <p className="text-xs text-stone-400">
              Software Developer • Backend Systems, REST APIs & Relational Databases
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-400 hover:text-stone-100 hover:bg-stone-900 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
          <div className="space-y-2">
            <h4 className="font-semibold text-stone-200 uppercase tracking-wider text-[11px]">
              Direct Links
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-emerald-400 transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors">
                  About & Background
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-emerald-400 transition-colors">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('skills')} className="hover:text-emerald-400 transition-colors">
                  Technical Stack
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-stone-200 uppercase tracking-wider text-[11px]">
              Resources & Archive
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button onClick={onOpenResume} className="hover:text-emerald-300 text-emerald-400 font-medium transition-colors text-left">
                  Resume & CV (PDF & Download)
                </button>
              </li>
              <li>
                <button onClick={onOpenArchive} className="hover:text-emerald-400 transition-colors text-left">
                  All 10 Projects Archive
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('opportunities')} className="hover:text-emerald-400 transition-colors text-left">
                  Target Roles Alignment
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-stone-200 uppercase tracking-wider text-[11px]">
              Verified Channels
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://github.com/scondlythorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <Github size={13} />
                  <span>GitHub: scondlythorp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:modoulaminthorp4@gmail.com"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <Mail size={13} />
                  <span>modoulaminthorp4@gmail.com</span>
                </a>
              </li>
              <li className="text-[11px] text-stone-500 pt-1">
                The Gambia 🇬🇲 • UTC+0
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Modou Lamin Thorp. Built with authentic engineering data and zero fabricated statistics.</p>
          <p>Civil Service University (CSU) • Computer Science (July 2024 — Sept 2026)</p>
        </div>
      </div>
    </footer>
  );
};
