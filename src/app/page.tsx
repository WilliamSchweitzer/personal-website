'use client';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        <Hero />
        <AboutSection />

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center p-4 md:py-12 md:px-24 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold mb-6">Projects</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">Coming soon...</p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center justify-center p-4 md:py-12 md:px-24 bg-white/50 dark:bg-gray-900/50">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold mb-6">Experience</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">Coming soon...</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center p-4 md:py-12 md:px-24 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
}