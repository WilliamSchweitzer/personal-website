'use client';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { ProjectsSection } from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        <Hero />

        <AboutSection />

        <ProjectsSection />

        <ExperienceSection />

        <ContactSection />
      </main>
    </>
  );
}
