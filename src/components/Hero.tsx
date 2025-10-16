'use client';

import { Button } from '@/components/Button';
import Image from 'next/image';

export function Hero() {
  const name = 'Will Schweitzer';
  const title = 'Software Engineer';
  const totalNameLength = name.length;
  const totalTitleLength = title.length;
  const titleStartTime = name.length * 0.05 + 0.3;
  const titleAnimationEnd = titleStartTime + title.length * 0.05 + 0.5;

  const arrowFinishTime = titleAnimationEnd;

  const photoDelays = [
    arrowFinishTime,
    arrowFinishTime + 0.2,
    arrowFinishTime + 0.4,
  ];

  const photos = [
    { src: '/profile-1.jpg', alt: 'Will headshot' },
    { src: '/profile-2.jpg', alt: 'Will climbing' },
    { src: '/profile-3.jpg', alt: 'Will biking' },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-8 md:px-24 md:pt-24 md:pb-12 pt-32">
      <div className="max-w-4xl w-full space-y-16">
        {/* Animated name and title */ }
        <div className="perspective-1000 text-center">
          <h1 
            className="font-bold tracking-tight sm:tracking-wide mb-2"
            style={{ fontSize: 'clamp(1.75rem, 7vw, 3rem)' }}
          >
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
                      animation: `fadeInLetter 0.5s ease-out ${titleStartTime + index * 0.05}s forwards`,
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
            <div className="absolute left-0 top-full mt-2 w-full h-8">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="arrowGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
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

          {/* Photo Gallery - Fades in after arrow */}
          <div className="flex justify-center gap-4 mt-16">
            {photos.map((photo, index) => (
              <div
                key={photo.src}
                className="opacity-0 transform translate-y-4"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${photoDelays[index]}s forwards`,
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={150}
                  height={150}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Currently:{' '}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Software Engineer at Tata Consultancy Services
            </span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
            Consultant for Kroger | Specializing in monitoring, observability,
            and infrastructure
          </p>
        </div>
      </div>
    </section>
  );
}
