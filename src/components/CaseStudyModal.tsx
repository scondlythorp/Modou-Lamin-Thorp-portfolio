import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  Workflow,
  Cpu,
  BookmarkCheck,
  TrendingUp
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'deepdive'>('overview');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex justify-center p-3 sm:p-6 no-print"
      onClick={onClose}
    >
      <div 
        className="relative bg-white text-stone-900 rounded-2xl w-full max-w-4xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Sticky Header */}
        <div className="sticky top-0 z-20 bg-stone-900 text-stone-100 p-5 sm:px-8 sm:py-6 border-b border-stone-800 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                {project.status}
              </span>
              <span className="text-xs text-stone-400 font-mono">
                Role: {project.role}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study"
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Selector Bar */}
        <div className="bg-stone-100 px-6 sm:px-8 py-2.5 border-b border-stone-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-emerald-900 shadow-sm border border-stone-300'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Quick Recruiter Overview
            </button>
            <button
              onClick={() => setActiveTab('deepdive')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'deepdive'
                  ? 'bg-white text-emerald-900 shadow-sm border border-stone-300'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Technical Deep Dive & Architecture
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-stone-900 text-white hover:bg-stone-800 transition-colors"
            >
              <Github size={13} />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-sm">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider font-mono mr-1">
              Stack:
            </span>
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded bg-stone-100 text-stone-800 font-mono text-xs border border-stone-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {activeTab === 'overview' ? (
            /* Quick Recruiter Overview View */
            <div className="space-y-6">
              {/* Executive Summary */}
              <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={16} className="text-emerald-700" />
                  Executive Summary
                </h3>
                <p className="text-stone-700 leading-relaxed text-sm">
                  {caseStudy.summary}
                </p>
              </div>

              {/* Problem & Importance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-2">
                    <AlertCircle size={15} className="text-rose-700" />
                    The Operational Problem
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-700" />
                    Why It Matters
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {caseStudy.problemImportance}
                  </p>
                </div>
              </div>

              {/* Solution Overview */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                  The Implemented Solution
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                  Key Functional Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.keyFeatures.map((feat, i) => (
                    <li 
                      key={i} 
                      className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5 text-xs sm:text-sm text-stone-700"
                    >
                      <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lessons Learned & Impact */}
              <div className="p-5 rounded-xl bg-stone-100 border border-stone-200/90 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                  <BookmarkCheck size={16} className="text-emerald-700" />
                  Key Engineering Takeaways
                </h3>
                <ul className="list-disc list-inside text-xs sm:text-sm text-stone-600 space-y-1">
                  {caseStudy.whatLearned.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* Technical Deep Dive View */
            <div className="space-y-8">
              {/* Architecture Layers */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                  <Workflow size={16} className="text-emerald-700" />
                  System Architecture Breakdown
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.architecture.map((arch, i) => (
                    <div key={i} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
                        {arch.layer}
                      </span>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {arch.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database Schema Highlights */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                  <Database size={16} className="text-emerald-700" />
                  Relational Schema Highlights & Models
                </h3>
                <div className="bg-stone-950 text-stone-200 rounded-xl p-4 font-mono text-xs space-y-2 border border-stone-800">
                  {caseStudy.databaseSchemaHighlights.map((schemaLine, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 select-none">→</span>
                      <span className="text-stone-300">{schemaLine}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Logic & Invariants */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                  <Cpu size={16} className="text-emerald-700" />
                  Domain Business Logic & Invariants
                </h3>
                <div className="space-y-2">
                  {caseStudy.businessLogicHighlights.map((logic, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-stone-50 border-l-4 border-emerald-700 text-xs sm:text-sm text-stone-700">
                      {logic}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges and How They Were Solved */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle size={16} className="text-amber-700" />
                  Technical Challenges Overcome
                </h3>
                <div className="space-y-3">
                  {caseStudy.challengesAndSolutions.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-semibold text-stone-900 flex items-start gap-2">
                        <span className="text-rose-700 font-bold">Challenge:</span>
                        <span>{item.challenge}</span>
                      </div>
                      <div className="text-xs text-stone-600 flex items-start gap-2 pl-4 border-l-2 border-emerald-700">
                        <span className="text-emerald-800 font-bold">Solution:</span>
                        <span>{item.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Engineering Roadmap */}
              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                  <TrendingUp size={16} className="text-emerald-700" />
                  Planned Improvements & Next Iteration
                </h3>
                <ul className="list-disc list-inside text-xs text-stone-600 space-y-1">
                  {caseStudy.futureRoadmap.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer */}
        <div className="sticky bottom-0 bg-stone-50 border-t border-stone-200 p-4 sm:px-8 flex items-center justify-between gap-4">
          <span className="text-xs text-stone-500">
            Project status verified • No fabricated statistics
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-200 transition-colors"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-800 text-white hover:bg-emerald-900 transition-colors"
            >
              <Github size={14} />
              <span>Inspect on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
