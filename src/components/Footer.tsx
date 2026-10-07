import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 py-8 px-4 sm:px-8 mt-8 no-print">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-stone-100">Modou Lamin Thorp</p>
        <p className="text-xs">Software Developer | Java, Spring Boot, REST APIs &amp; Web Development</p>
      </div>
      <a href="https://github.com/scondlythorp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs hover:text-emerald-400">
        <Github size={14} />GitHub
      </a>
    </div>
  </footer>
);

export { Footer };
