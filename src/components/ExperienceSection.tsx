import Image from 'next/image';

interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  location?: string;
  logo: string;
  responsibilities: string[];
  technologies: string[];
  description: string;
}

function ExperienceItem({
  company,
  role,
  duration,
  location,
  logo,
  responsibilities,
  technologies,
  description,
}: ExperienceItemProps) {
  return (
    <div className="mb-12 last:mb-0">
      {/* Company Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Company Logo */}
        <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center p-2">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Role and Company Info */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {role}
          </h3>
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            {company}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {duration}
            {location && ` | ${location}`}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Key Responsibilities */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
          Key Responsibilities
        </h4>
        <ul className="space-y-2">
          {responsibilities.map((item, index) => (
            <li
              key={index}
              className="flex items-start text-gray-700 dark:text-gray-300"
            >
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const experiences: ExperienceItemProps[] = [
    {
      company: 'Tata Consultancy Services | Consultant for Kroger',
      role: 'Software Engineer',
      duration: 'February 2021 - Present · 4 years 9 months',
      logo: '/logos/tcs-logo.png',
      description:
        "Serve as an Operations Reliability Engineer supporting multiple teams within Kroger's Product domain, ensuring the reliability and performance of their nationwide web and mobile applications that serve millions of customers daily. Architect and maintain monitoring solutions, troubleshoot production issues, and implement observability best practices across distributed systems.",
      responsibilities: [
        'Design and implement comprehensive monitoring solutions using Grafana, Dynatrace, and ELK Stack to ensure application reliability and performance',
        'Monitor and troubleshoot Kubernetes pods through Rancher, performing redeployments and scaling operations to maintain service availability',
        'Collaborate with development teams to establish SLOs and improve system observability across the platform',
        'Troubleshoot production incidents using log analysis and implement preventive measures to reduce downtime',
        'Support CI/CD pipelines using Harness and GCP infrastructure',
      ],
      technologies: [
        'Grafana',
        'Dynatrace',
        'GCP',
        'ELK Stack',
        'Kubernetes',
        'Rancher',
        'ServiceNow',
        'Prometheus',
        'Python',
      ],
    },
    {
      company: 'Fox Corporation | Fox Sports',
      role: 'Software Engineering Intern',
      duration: 'May 2018 - July 2019 · 1 year 3 months',
      location: 'Blue Ash, OH',
      logo: '/logos/fox-logo.png',
      description:
        "Contributed to the Web Development team building Fox Sports' large-scale, data-driven web platform serving millions of sports fans. Worked in an Agile/Scrum environment, collaborating with cross-functional teams to deliver high-priority features and maintain the production site.",
      responsibilities: [
        'Developed and maintained features for the Fox Sports website using React/Preact and Redux for state management',
        'Implemented responsive UI components with TypeScript, HTML, and CSS',
        'Participated in code reviews and sprint planning, contributing to team velocity improvements',
      ],
      technologies: [
        '.NET Framework',
        'C#',
        'SQL Server',
        'React/Preact',
        'Redux',
        'Node.js',
        'TypeScript',
        'HTML',
        'CSS',
        'Git',
        'Azure DevOps',
      ],
    },
    {
      company: 'Lendogram',
      role: 'Web Development Intern',
      duration: 'January 2017 - April 2017 · 4 months',
      location: 'Toronto, Canada',
      logo: '/logos/lendogram-logo.png',
      description:
        'Gained foundational web development experience building features for a fintech startup. Worked with Ruby on Rails to develop full-stack web applications, learning software engineering fundamentals and best practices.',
      responsibilities: [
        'Collaborated with CEO and lead developer to implement features and resolve bugs',
      ],
      technologies: ['Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'Git', 'SQL'],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center p-4 md:py-12 md:px-24"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          My professional journey in software engineering
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
