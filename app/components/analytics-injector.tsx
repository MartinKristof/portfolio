'use client';

import { useCookieConsent } from '@pf/contexts/cookie-consent-context';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const AnalyticsInjector = () => {
  const { consent } = useCookieConsent();

  return consent?.analytics ? (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  ) : (
    <SpeedInsights />
  );
};
