import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ContactMethod {
  icon: IconType;
  label: string;
  value: string;
  href: string;
  color: string;
}

export function ContactSection() {
  const contactMethods: ContactMethod[] = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'weschweitzer@outlook.com',
      href: 'mailto:weschweitzer@outlook.com',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/william-schweitzer',
      href: 'https://linkedin.com/in/william-schweitzer',
      color: 'from-blue-700 to-blue-500',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/WilliamSchweitzer',
      href: 'https://github.com/WilliamSchweitzer',
      color: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-4 md:py-12 md:px-24"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Let&apos;s connect and discuss opportunities
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map(method => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={
                  method.label !== 'Email' ? 'noopener noreferrer' : undefined
                }
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <Icon className="w-12 h-12 mb-4 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                    {method.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/90 transition-colors duration-300 break-all">
                    {method.value}
                  </p>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Open to full-time opportunities and interesting projects
          </p>
        </div>
      </div>
    </section>
  );
}
