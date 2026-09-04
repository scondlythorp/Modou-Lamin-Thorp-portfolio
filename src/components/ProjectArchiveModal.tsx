import React, { useState, useEffect } from 'react';
import { Project, ProjectCategory } from '../types';
import { X, Search, Filter, Github, ArrowRight, Database, FolderGit2 } from 'lucide-react';

interface ProjectArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectArchiveModal: React.FC<ProjectArchiveModalProps> = ({
  isOpen,
  onClose,
  projects,
  onSelectProject
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filterCategories = [
    'All',
    'Backend & APIs',
    'Enterprise & SaaS',
    'Local Problem Solving',
    'Agritech & Data',
    'Academic & Systems'
  ];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = 
      selectedCategory === 'All' || 
      proj.category === selectedCategory || 
      proj.secondaryCategories.includes(selectedCategory as ProjectCategory);

    const matchesSearch = 
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.technologies.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex justify-center p-3 sm:p-6 no-print"
      onClick={onClose}
    >
      <div 
        className="relative bg-white text-stone-900 rounded-2xl w-full max-w-4xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-900 text-stone-100 p-5 sm:px-8 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FolderGit2 size={18} className="text-emerald-400" />
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Complete Project Archive
              </h2>
            </div>
            <p className="text-xs text-stone-400">
              Index of all {projects.length} verified software engineering systems, prototypes, and academic implementations.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close archive modal"
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-stone-100 p-4 sm:px-8 border-b border-stone-200 space-y-3">
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by project name, keyword, or technology (e.g., PostgreSQL, Python, FEFO)..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-white rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-800"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider font-mono mr-1">
              Category:
            </span>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <p className="text-sm font-semibold text-stone-700">No projects found matching your filter.</p>
              <p className="text-xs text-stone-500">Try clearing the search query or selecting 'All' categories.</p>
            </div>
          ) : (
            filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  onClose();
                  onSelectProject(proj);
                }}
                className="group p-4 sm:p-5 rounded-xl border border-stone-200 bg-white hover:border-emerald-700 hover:shadow-sm transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                      {proj.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {proj.status}
                    </span>
                    {proj.isFeatured && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                        Featured #{proj.featuredOrder}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2">
                    {proj.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <span className="text-xs font-semibold text-emerald-800 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-stone-50 border-t border-stone-200 p-4 sm:px-8 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Showing {filteredProjects.length} of {projects.length} verified projects
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            Close Archive
          </button>
        </div>
      </div>
    </div>
  );
};
