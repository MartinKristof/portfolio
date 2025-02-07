import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const AnalyticsInjector = () => (
  <>
    <SpeedInsights />
    <Analytics />
  </>
);
