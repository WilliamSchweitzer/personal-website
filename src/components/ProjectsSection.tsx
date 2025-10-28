import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiLinux,
  SiPython,
  SiNginx,
  SiFlask,
  SiDocker,
  SiRaspberrypi,
} from 'react-icons/si';
import { IconType } from 'react-icons';
import Image from 'next/image';

interface Technology {
  name: string;
  icon: IconType;
}

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  github: string;
  live?: string;
  image?: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'Home Lab Raspberry Pi Server',
      description:
        'Self-hosted NGINX web server running on Raspberry Pi with custom DDNS solution and MCP Server integration. Built a custom Dynamic DNS updater (adapted from Cloudflare template) that updates Netlify DNS A records via cron job, enabling HTTPS hosting on a custom subdomain with SSL certificates managed through Certbot. Domain registered via AWS Route 53. Includes a Flask dashboard for real-time system monitoring and an MCP Server Playground demonstrating AI agent integration with controlled file system access—showcasing secure LLM interaction with production infrastructure.',
      technologies: [
        { name: 'Linux', icon: SiLinux },
        { name: 'Python', icon: SiPython },
        { name: 'NGINX', icon: SiNginx },
        { name: 'Flask', icon: SiFlask },
        { name: 'Raspberry Pi', icon: SiRaspberrypi },
      ],
      github: 'https://github.com/WilliamSchweitzer/netlify-ddns-updater',
      live: 'https://rp1.wschweitzer.com',
      image: '/raspberry-pi-homelab-composite.png',
    },
    {
      title: 'Obsidian Remote Docker Container Hosted on Raspberry Pi',
      description:
        'Configured NGINX on a Raspberry Pi 3B+ to reverse proxy requests from `/obsidian/` to a locally hosted Obsidian container running via Docker Compose on internal port `3000`. The container uses the ARM64-compatible image `lscr.io/linuxserver/obsidian:latest` and runs within the custom `npm-network` for isolated routing. Due to resource constraints, I simply SSH into `rp1` at my homelab, start the Docker service with `systemctl start docker`, and run `docker compose up -d` in the `obsidian-remote` project folder. Now I can access my notes from anywhere! The NGINX configuration handles WebSocket connections and standard HTTP forwarding seamlessly.',
      technologies: [
        { name: 'Linux', icon: SiLinux },
        { name: 'Docker', icon: SiDocker },
        { name: 'NGINX', icon: SiNginx },
        { name: 'Raspberry Pi', icon: SiRaspberrypi },
      ],
      live: 'https://rp1.wschweitzer.com/obsidian/',
      image: '/obsidian-remote.png',
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'A modern, responsive portfolio website built with Next.js and TypeScript. Features animated typewriter effects, network-themed background animations, and a comprehensive display of my skills and experience. Implements best practices including component composition, React hooks, and Tailwind CSS for styling.',
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'React', icon: SiReact },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
      github: 'https://github.com/WilliamSchweitzer/personal-website',
      live: 'https://ws-personal-website.netlify.app',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center p-4 md:py-12 md:px-24 bg-gray-50/50 dark:bg-gray-800/50"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Things I&apos;ve built and learned from
        </p>

        <div className="space-y-8">
          {/* Project Cards */}
          {projects.map(project => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-xl z-0" />

              {/* Content */}
              <div className="relative z-10">
                {/* Image Section - Only render if image exists */}
                {project.image && (
                  <div className="relative w-full h-64 md:h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Text Content */}
                <div className="p-6 md:p-8">
                  {/* Title and Links */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 flex-shrink-0 ml-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          aria-label="View live project"
                        >
                          <FaExternalLinkAlt className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Built With
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map(tech => {
                        const Icon = tech.icon;
                        return (
                          <span
                            key={tech.name}
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                          >
                            <Icon className="w-4 h-4" />
                            {tech.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 md:p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currently working on exciting new projects involving Go,
                MongoDB, and AI integration. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
