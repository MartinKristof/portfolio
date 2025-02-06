'use client';

import * as React from 'react';

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type CookieConsentContextType = {
  consent: CookieConsent | null;
  updateConsent: (consent: CookieConsent) => void;
  resetConsent: () => void;
};

const CookieConsentContext = React.createContext<CookieConsentContextType | null>(null);

export const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = React.useState<CookieConsent | null>(null);

  React.useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent));
    }
  }, []);

  const updateConsent = React.useCallback((newConsent: CookieConsent) => {
    setConsent(newConsent);
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
  }, []);

  const resetConsent = React.useCallback(() => {
    setConsent(null);
    localStorage.removeItem('cookieConsent');
  }, []);

  return (
    <CookieConsentContext.Provider value={{ consent, updateConsent, resetConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = React.useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};
