/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { LegalModal } from './components/LegalModals';
import { Project } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1A17] font-sans antialiased selection:bg-[#C85024] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections matching reference image layout */}
      <main>
        {/* Hero Section */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Featured Projects Section */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Services Section */}
        <Services />

        {/* Kind Words / Testimonials Section */}
        <Testimonials />

        {/* How I Work / Process Section */}
        <Process />

        {/* Contact CTA Section */}
        <ContactCta onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModal('privacy')}
        onOpenTerms={() => setLegalModal('terms')}
      />

      {/* Modals & Dialogs */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <LegalModal
        isOpen={legalModal !== null}
        type={legalModal || 'privacy'}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}
