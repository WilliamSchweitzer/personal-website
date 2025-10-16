import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NetworkBackground } from '@/components/NetworkBackground';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Will Schweitzer | Software Engineer',
  description:
    'Portfolio of Will Schweitzer, Software Engineer specializing in monitoring, observability, and infrastructure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <NetworkBackground />
        {children}
      </body>
    </html>
  );
}
