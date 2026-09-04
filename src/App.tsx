import React, { useState, useEffect } from 'react';
import { SidebarNav } from './components/SidebarNav';
import { HeroSection } from './components/HeroSection';
import { CredibilitySnapshot } from './components/CredibilitySnapshot';
import { AboutSection } from './components/AboutSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SkillsSection } from './components/SkillsSection';
import { JourneySection } from './components/JourneySection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectArchiveModal } from './components/ProjectArchiveModal';
import { ResumeModal } from './components/ResumeModal';
import { PROJECTS_DATA } from './data/projectsData';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // Smooth navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = window.innerWidth < 1024 ? 70 : 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'journey', 'opportunities', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col lg:flex-row antialiased selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      {/* Navigation: Desktop Sidebar + Mobile Top Header */}
      <SidebarNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenArchive={() => setIsArchiveOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10 space-y-4">
        {/* Hero Section */}
        <HeroSection
          onExploreProjects={() => handleNavigate('projects')}
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigateToContact={() => handleNavigate('contact')}
        />

        {/* Recruiter & Engineering Snapshot */}
        <CredibilitySnapshot />

        {/* About & Engineering Story */}
        <AboutSection />

        {/* Featured Technical Projects */}
        <FeaturedProjects
          projects={PROJECTS_DATA}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenArchive={() => setIsArchiveOpen(true)}
        />

        {/* Skills & Architecture Stack */}
        <SkillsSection />

        {/* Professional Journey & Education */}
        <JourneySection />

        {/* Target Opportunities & Recruiter Alignment */}
        <OpportunitiesSection
          onContactClick={() => handleNavigate('contact')}
        />

        {/* Direct Contact & Form */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenArchive={() => setIsArchiveOpen(true)}
        />
      </main>

      {/* Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ProjectArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        projects={PROJECTS_DATA}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
