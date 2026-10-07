import React from 'react';
import { PROJECTS_DATA, PortfolioProject } from '../data/projectsData';

interface FeaturedProjectsProps {
  projects: PortfolioProject[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => (
  <section id="projects" className="py-8 space-y-5 border-t border-stone-200">
    <div className="space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
        Selected work
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
        Featured Engineering Projects
      </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <article key={project.title} className="overflow-hidden bg-white rounded-xl border border-stone-200 shadow-sm">
          <img src={project.image} alt={project.imageAlt} className="w-full aspect-[16/9] object-cover bg-stone-100" loading="lazy" />
          <div className="p-5 space-y-4">
            <h3 className="text-lg font-bold text-stone-900">{project.title}</h3>
            <p className="text-sm text-stone-600 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((technology) => (
              <span key={technology} className="px-2 py-1 rounded bg-stone-100 text-stone-700 text-[11px]">
                {technology}
              </span>
            ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeaturedProjects;
