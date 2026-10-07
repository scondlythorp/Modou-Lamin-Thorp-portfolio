import React, { useState } from 'react';
import { Home, User, FolderGit2, Cpu, Briefcase, Mail, Github, Menu, X } from 'lucide-react';

interface SidebarNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navLinks = [
  { id: 'hero', label: 'Overview', icon: Home },
  { id: 'about', label: 'Introduction', icon: User },
  { id: 'skills', label: 'Technical skills', icon: Cpu },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'chialink', label: 'ChiaLink', icon: Briefcase },
  { id: 'journey', label: 'Education & training', icon: Briefcase },
  { id: 'github', label: 'GitHub', icon: Github },
  { id: 'opportunities', label: 'Career interests', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export const SidebarNav: React.FC<SidebarNavProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800 px-4 py-3 flex items-center justify-between no-print">
        <div>
          <h1 className="text-sm font-semibold text-stone-100 leading-tight">Modou Lamin Thorp</h1>
          <p className="text-xs text-stone-400">Software Developer</p>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-md text-stone-300 hover:text-white hover:bg-stone-800"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-stone-950/80 no-print" onClick={() => setMobileMenuOpen(false)}>
          <nav className="absolute top-[57px] left-0 right-0 bg-stone-900 border-b border-stone-800 p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            {navLinks.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => handleNavClick(id)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-stone-200 hover:bg-stone-800 text-left">
                <Icon size={16} />{label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-stone-950 text-stone-200 border-r border-stone-800 p-6 z-20 shrink-0 no-print">
        <div className="space-y-2 pb-6 border-b border-stone-800">
          <h2 className="text-base font-semibold text-stone-100">Modou Lamin Thorp</h2>
          <p className="text-xs text-stone-400">Software Developer</p>
          <p className="text-xs text-emerald-400">The Gambia</p>
        </div>
        <nav className="space-y-1 pt-5">
          {navLinks.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-left ${activeSection === id ? 'bg-emerald-900/40 text-emerald-300' : 'text-stone-400 hover:bg-stone-900 hover:text-stone-200'}`}
            >
              <Icon size={16} />{label}
            </button>
          ))}
        </nav>
        <a href="https://github.com/scondlythorp" target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 border-t border-stone-800 flex items-center gap-2 text-xs text-stone-400 hover:text-emerald-400">
          <Github size={14} />github.com/scondlythorp
        </a>
      </aside>
    </>
  );
};
