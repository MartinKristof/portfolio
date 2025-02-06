'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@pf/lib/utils';

const NAVIGATION_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Social', href: '#social' },
  { label: 'Talks', href: '#talks' },
  { label: 'Courses', href: '#courses' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Writing', href: '#writing' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0,
      },
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="w-full overflow-x-auto">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center">
            <ul className="flex space-x-4 min-w-max">
              {NAVIGATION_ITEMS.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-foreground',
                      activeSection === item.href.slice(1) ? 'text-foreground' : 'text-muted-foreground',
                    )}
                    onClick={e => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
