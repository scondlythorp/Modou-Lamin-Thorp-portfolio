import React, { useState } from 'react';
import { 
  Home, 
  User, 
  FolderGit2, 
  Cpu, 
  Briefcase, 
  FileText, 
  Mail, 
  Github, 
  ExternalLink, 
  Menu, 
  X,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface SidebarNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenArchive: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
  onOpenArchive
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Overview', icon: Home },
    { id: 'about', label: 'About & Story', icon: User },
    { id: 'projects', label: 'Featured Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Technical Stack', icon: Cpu },
    { id: 'journey', label: 'Journey & Education', icon: Briefcase },
    { id: 'opportunities', label: 'Target Roles', icon: CheckCircle2 },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Navigation Header */}
      <header className="lg:hidden sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800 px-4 py-3 flex items-center justify-between no-print">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-semibold flex items-center justify-center text-sm tracking-wider">
            MLT
          </div>
          <div>
            <h1 className="text-sm font-semibold text-stone-100 leading-tight">Modou Lamin Thorp</h1>
            <p className="text-xs text-stone-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Software Developer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1.5 text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition-colors"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-md text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-stone-950/80 backdrop-blur-sm no-print" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute top-[57px] left-0 right-0 bg-stone-900 border-b border-stone-800 p-5 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-1">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors text-left ${
                      isActive 
                        ? 'bg-emerald-950/50 text-emerald-300 border-l-2 border-emerald-500 pl-2.5' 
                        : 'text-stone-300 hover:bg-stone-800/60 hover:text-white'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-emerald-400' : 'text-stone-400'} />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
            >
              <FileText size={15} />
              <span>Resume & CV (Print, PDF & Download)</span>
            </button>

            <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenArchive();
                }}
                className="text-stone-300 hover:text-emerald-400 underline underline-offset-4"
              >
                All 10 Projects Archive
              </button>
              <a
                href="https://github.com/scondlythorp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-300 hover:text-white"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col justify-between w-72 h-screen sticky top-0 bg-stone-950 text-stone-200 border-r border-stone-800 p-6 z-20 shrink-0 no-print">
        {/* Profile Card Header */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3.5">
              <div className="relative">
                {/* Clean Professional Monogram Badge */}
                <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-emerald-950/50 border border-emerald-500/30">
                  MLT
                </div>
                <span 
                  className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-stone-950" 
                  title="Available for opportunities"
                />
              </div>

              <div>
                <h2 className="text-base font-semibold text-stone-100 tracking-tight">
                  Modou Lamin Thorp
                </h2>
                <p className="text-xs text-stone-400 font-mono">
                  scondlythorp
                </p>
              </div>
            </div>

            <div className="bg-stone-900/90 rounded-lg p-3 border border-stone-800/80 space-y-1.5">
              <p className="text-xs text-stone-300 font-medium leading-relaxed">
                Software Developer
              </p>
              <p className="text-[11px] text-stone-400 leading-snug">
                Backend Systems • REST APIs • Databases
              </p>
              <div className="pt-1.5 flex items-center gap-1.5 text-[11px] text-emerald-400/90 font-medium">
                <MapPin size={12} className="text-emerald-500 shrink-0" />
                <span>The Gambia 🇬🇲 • Open to Remote</span>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-2">
              Navigation
            </p>
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                    isActive
                      ? 'bg-emerald-900/40 text-emerald-300 border-l-2 border-emerald-500 pl-2.5 font-semibold'
                      : 'text-stone-400 hover:bg-stone-900 hover:text-stone-200'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-emerald-400' : 'text-stone-300'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions & Links */}
        <div className="pt-6 border-t border-stone-800/80 space-y-4">
          <div className="flex flex-col gap-2">
            <button
              onClick={onOpenResume}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
              title="View, print, save as PDF, or download Resume / CV"
            >
              <FileText size={15} />
              <span>Resume & CV (PDF / Download)</span>
            </button>

            <button
              onClick={onOpenArchive}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-900 transition-colors"
            >
              <FolderGit2 size={14} />
              <span>All 10 Projects Archive</span>
            </button>
          </div>

          {/* Verified External Links */}
          <div className="pt-2 border-t border-stone-900 flex items-center justify-between text-xs text-stone-400">
            <a
              href="https://github.com/scondlythorp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              title="Inspect verified GitHub profile"
            >
              <Github size={14} />
              <span>github/scondlythorp</span>
              <ExternalLink size={11} className="opacity-70" />
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="text-stone-400 hover:text-stone-200 text-xs"
              title="Contact email"
            >
              Email
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
