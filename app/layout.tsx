import type React from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@pf/lib/utils';
import '@pf/app/styles/globals.css';
import { CookieConsentProvider } from '@pf/contexts/cookie-consent-context';
import { CookieConsentDialog } from '@pf/components/cookie-consent-dialog';
import { AnalyticsInjector } from './components/analytics-injector';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Martin Krištof - React Expert & Conference Speaker',
  description:
    'React expert, conference speaker, and technical trainer specializing in modern web development, React optimization, Next.js., and QA.',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/ico',
        url: '/favicon/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'apple',
        type: 'image/png',
        sizes: '180x180',
        url: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <meta name="robots" content="index,follow" />
    <body className={cn(inter.className, 'min-h-screen bg-background antialiased')}>
      <CookieConsentProvider>
        {children}
        <CookieConsentDialog />
        <AnalyticsInjector />
      </CookieConsentProvider>
    </body>
  </html>
);

export default RootLayout;
