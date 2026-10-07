import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const GitHubSection: React.FC = () => (
  <section id="github" className="py-8 border-t border-stone-200">
    <a
      href="https://github.com/scondlythorp"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-5 py-4 text-stone-800 shadow-sm hover:border-emerald-700/50"
    >
      <Github size={20} className="text-emerald-700" />
      <span className="text-sm font-semibold">GitHub: github.com/scondlythorp</span>
      <ExternalLink size={15} className="text-stone-400" />
    </a>
  </section>
);