import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import type React from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@pf/lib/utils';
import '@pf/app/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Martin Krištof - React Expert & Conference Speaker',
  description:
    'React expert, conference speaker, and technical trainer specializing in modern web development, React optimization, Next.js., and QA.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={cn(inter.className, 'min-h-screen bg-background antialiased')}>
      {children}
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
