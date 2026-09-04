import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Database, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenArchive: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
  onOpenArchive
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Enterprise & SaaS',
    'Backend & APIs',
    'Local Problem Solving',
    'Agritech & Data'
  ];

  const featuredList = projects
    .filter(p => p.isFeatured)
    .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));

  const filteredProjects = activeCategory === 'All'
    ? featuredList
    : featuredList.filter(
        p => p.category === activeCategory || p.secondaryCategories.includes(activeCategory)
      );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Flagship Prototype':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Completed System':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'Functional Prototype':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-300';
    }
  };

  return (
    <section id="projects" className="py-10 space-y-8 border-t border-stone-200">
      {/* Section Header with Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Technical Portfolio
            </span>
            <span className="text-xs text-stone-500 font-mono">({featuredList.length} Flagship Systems)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-sm text-stone-600 max-w-2xl">
            Selected projects demonstrating relational schema design, transactional business logic, role-based security, and localized domain problem solving.
          </p>
        </div>

        <button
          onClick={onOpenArchive}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors shrink-0"
        >
          <FolderGit2 size={15} />
          <span>View All 10 Projects Archive</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeCategory === cat
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden hover:border-emerald-700/50"
          >
            <div className="p-6 space-y-4">
              {/* Header tags */}
              <div className="flex items-start justify-between gap-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getStatusBadge(project.status)}`}>
                  {project.status}
                </span>

                <span className="text-[11px] font-medium text-stone-400 font-mono">
                  #{project.featuredOrder}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-emerald-800">
                  {project.subtitle}
                </p>
              </div>

              {/* Tagline / Value Proposition */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {project.tagline}
              </p>

              {/* Scope & Architecture Callout */}
              <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70 text-xs text-stone-700 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-stone-900 text-[11px] uppercase tracking-wider">
                  <Database size={13} className="text-emerald-700" />
                  <span>Domain Model & Scope:</span>
                </div>
                <p className="text-stone-600 leading-relaxed text-[11px]">
                  {project.metricsOrScope}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 5).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono text-[11px] border border-stone-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2 py-0.5 rounded bg-stone-50 text-stone-400 font-mono text-[11px]">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="px-6 py-3.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between gap-3">
              <button
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span>Read Technical Case Study</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                  title="View GitHub Repository"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
