import React, { useState, useEffect } from 'react';
import { SidebarNav } from './components/SidebarNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SkillsSection } from './components/SkillsSection';
import { JourneySection } from './components/JourneySection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { ChiaLinkSection } from './components/ChiaLinkSection';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PROJECTS_DATA } from './data/projectsData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

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
      const sections = ['hero', 'about', 'skills', 'projects', 'chialink', 'journey', 'github', 'opportunities', 'contact'];
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
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10 space-y-4">
        {/* Hero Section */}
        <HeroSection
          onExploreProjects={() => handleNavigate('projects')}
          onNavigateToContact={() => handleNavigate('contact')}
        />

        {/* Professional introduction */}
        <AboutSection />

        {/* Technical skills appear before projects */}
        <SkillsSection />

        {/* Projects */}
        <FeaturedProjects
          projects={PROJECTS_DATA}
        />

        <ChiaLinkSection />

        {/* Education and training */}
        <JourneySection />

        <GitHubSection />

        {/* Career interests */}
        <OpportunitiesSection />

        {/* Contact */}
        <ContactSection />

        <Footer />
      </main>
    </div>
  );
}
