import {
  SiElastic,
  SiDynatrace,
  SiGooglecloud,
  SiGrafana,
  SiPrometheus,
  SiKubernetes,
  SiRancher,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiGit,
  SiNodedotjs,
  SiGo,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
} from 'react-icons/si';
import { TbApi, TbServer, TbClipboardData, TbNetwork } from 'react-icons/tb';
import { IconType } from 'react-icons';

interface SkillBadgeProps {
  name: string;
  icon: IconType;
  variant?: 'proficient' | 'familiar';
}

function SkillBadge({
  name,
  icon: Icon,
  variant = 'proficient',
}: SkillBadgeProps) {
  const baseClasses =
    'px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2';
  const variantClasses =
    variant === 'proficient'
      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg'
      : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-600';

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      <Icon className="w-4 h-4" />
      {name}
    </span>
  );
}

export function AboutSection() {
  const proficientSkills = {
    'Monitoring & Observability': [
      { name: 'ServiceNow', icon: TbClipboardData },
      { name: 'Elastic Stack (ELK)', icon: SiElastic },
      { name: 'Dynatrace Managed', icon: SiDynatrace },
      { name: 'Dynatrace SaaS', icon: SiDynatrace },
      { name: 'GCP Logs Explorer', icon: SiGooglecloud },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'Prometheus', icon: SiPrometheus },
    ],
    Infrastructure: [
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Rancher', icon: SiRancher },
    ],
    Development: [
      { name: 'Python', icon: SiPython },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'SQL', icon: SiPostgresql },
      { name: 'Git', icon: SiGit },
      { name: 'REST APIs', icon: TbApi },
    ],
  };

  const familiarSkills = [
    { name: 'MCP Server', icon: TbServer },
    { name: 'MCP Gateway', icon: TbServer },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Go', icon: SiGo },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Docker', icon: SiDocker },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'DNS Servers', icon: TbNetwork },
  ];

  return (
    <div
      id="about"
      className="flex items-center justify-center p-8 md:p-24 pt-0"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Get to know me better
        </p>

        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Hi, I&apos;m Will! I&apos;m a Software Engineer passionate about
            building modern web applications and exploring the intersection of
            full-stack development, network infrastructure, and AI systems.
          </p>

          <p>
            Currently, I&apos;m working on expanding my skills with full-stack
            development, focusing on Next.js, TypeScript, and Go. I enjoy
            solving complex problems with efficient solutions and continuously
            learning new technologies. Right now, I&apos;m building this
            portfolio site and exploring how to integrate AI-powered tools into
            development workflows.
          </p>

          <p>
            When I&apos;m not coding, you can find me experimenting with homelab
            projects, hitting the rock climbing gym, or exploring on my bike.
            I&apos;m particularly interested in developer tools, AI integration,
            and building systems that boost developer productivity. AI is
            transforming software development, and I&apos;m excited to be
            learning how to leverage it effectively both now and in the future.
          </p>

          {/* Skills Section */}
          <div className="pt-12 mt-12 border-t border-gray-300 dark:border-gray-700">
            <h3 className="text-3xl font-bold mb-2 text-center">
              Technical Skills
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              Technologies and tools I work with
            </p>
            <div className="pt-8 space-y-8">
              {/* Proficient Skills - Grouped */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Proficient</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Technologies I work with regularly and can confidently build
                  projects with
                </p>

                {Object.entries(proficientSkills).map(([category, skills]) => (
                  <div key={category} className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.map(skill => (
                        <SkillBadge
                          key={skill.name}
                          name={skill.name}
                          icon={skill.icon}
                          variant="proficient"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Familiar Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Familiar</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Technologies I&apos;ve used in projects and continue to learn
                </p>
                <div className="flex flex-wrap gap-3">
                  {familiarSkills.map(skill => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      variant="familiar"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
