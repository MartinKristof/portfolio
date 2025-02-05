'use client';

import { Button } from '@pf/components/ui/button';
import { ChevronUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={scrollToTop} aria-label="Scroll to top">
            <ChevronUp className="h-6 w-6" />
          </Button>
          <p className="text-sm text-muted-foreground">© {currentYear} Martin Krištof</p>
        </div>
      </div>
    </footer>
  );
};
