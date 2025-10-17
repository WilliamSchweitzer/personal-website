'use client';

import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
          >
            WS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            <a
              href="#about"
              className="relative px-4 py-2 group overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                About
              </span>
              {/* Bottom bar that expands to background */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:h-full"></span>
            </a>

            <a
              href="#projects"
              className="relative px-4 py-2 group overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Projects
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:h-full"></span>
            </a>

            <a
              href="#experience"
              className="relative px-4 py-2 group overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Experience
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:h-full"></span>
            </a>

            <a
              href="#contact"
              className="relative px-4 py-2 group overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:h-full"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <a
              href="#about"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
              onClick={handleLinkClick}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
              onClick={handleLinkClick}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
