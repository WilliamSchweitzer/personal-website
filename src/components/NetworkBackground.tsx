'use client';

export function NetworkBackground() {
  const lines = [
    { left: '12%', delay: '0s', duration: '5s' },
    { left: '24%', delay: '1.2s', duration: '6.5s' },
    { left: '36%', delay: '2.8s', duration: '4.8s' },
    { left: '48%', delay: '0.5s', duration: '7s' },
    { left: '60%', delay: '1.8s', duration: '5.5s' },
    { left: '72%', delay: '2.3s', duration: '6s' },
    { left: '84%', delay: '0.9s', duration: '5.2s' },
    { left: '96%', delay: '1.5s', duration: '6.8s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {lines.map((line, i) => (
        <div
          key={i}
          className="absolute w-px h-full opacity-40"
          style={{
            left: line.left,
            background:
              'linear-gradient(180deg, transparent, rgba(96, 165, 250, 0.5), transparent)',
          }}
        >
          {/* Animated pulse traveling down */}
          <div
            className="absolute w-1 h-20 -translate-x-1/2"
            style={{
              background:
                'linear-gradient(180deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
              boxShadow: '0 0 10px rgba(96, 165, 250, 0.6)',
              animation: `slideDown ${line.duration} linear ${line.delay} infinite`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
