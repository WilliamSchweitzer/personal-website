'use client';

import { Button } from '@/components/Button';

export default function Home() {
  const name = "William Schweitzer";
  const title = "Software Engineer";
  const totalNameLength = name.length;
  const totalTitleLength = title.length;
  const titleStartTime = (name.length * 0.05) + 0.3;
  const titleAnimationEnd = titleStartTime + (title.length * 0.05) + 0.5;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <div className="max-w-2xl w-full space-y-8">
        {/* Animated Welcome Tile */}
        <div className="perspective-1000 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-2">
            {name.split('').map((char, index) => {
              const gradientPosition = (index / totalNameLength) * 100;
              return (
                <span
                  key={`name-${index}`}
                  className="inline-block opacity-0"
                  style={{
                    animation: `fadeInLetter 0.5s ease-out ${index * 0.05}s forwards`,
                    background: `linear-gradient(90deg, rgb(37, 99, 235) 0%, rgb(147, 51, 234) 50%, rgb(219, 39, 119) 100%)`,
                    backgroundPosition: `${gradientPosition}% 0`,
                    backgroundSize: `${totalNameLength * 100}% 100%`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </h1>
          <div className="relative inline-block">
            <p className="text-xl md:text-2xl font-light tracking-wider">
              {title.split('').map((char, index) => {
                const gradientPosition = (index / totalTitleLength) * 100;
                return (
                  <span
                    key={`title-${index}`}
                    className="inline-block opacity-0"
                    style={{
                      animation: `fadeInLetter 0.5s ease-out ${titleStartTime + (index * 0.05)}s forwards`,
                      background: `linear-gradient(90deg, rgb(37, 99, 235) 0%, rgb(147, 51, 234) 50%, rgb(219, 39, 119) 100%)`,
                      backgroundPosition: `${gradientPosition}% 0`,
                      backgroundSize: `${totalTitleLength * 100}% 100%`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                );
              })}
            </p>
            {/* Animated Arrow */}
            <div 
              className="absolute left-0 top-full mt-2 w-full h-8"
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(37, 99, 235)" />
                    <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                    <stop offset="100%" stopColor="rgb(219, 39, 119)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 10 L 180 10 L 175 5 M 180 10 L 175 15"
                  stroke="url(#arrowGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: '220',
                    strokeDashoffset: '220',
                    animation: `drawArrow ${titleAnimationEnd}s ease-out forwards`,
                  }}
                />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-5xl font-bold text-center">Work In Progress</h2>
        
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Building a personal portfolio site to showcase my projects and skills. 
          This is a full-stack learning project featuring Next.js with TypeScript 
          on the frontend, a custom Go server in my home lab, and MongoDB for data 
          storage. I'm following modern best practices and planning to integrate an 
          MCP Server that lets Claude AI interact with the site in real-time. Check 
          back soon!
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Button onClick={() => alert('Coming soon!')}>
            View Projects
          </Button>
          <Button variant="secondary" onClick={() => alert('Coming soon!')}>
            Contact Me
          </Button>
        </div>
      </div>
    </main>
  );
}