'use client';

import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Button } from '@pf/components/ui/button';
import { Card } from '@pf/components/ui/card';

const GALLERY_IMAGES = [
  {
    src: '/frontkon23.jpeg',
    alt: 'Speaking at FrontKon Conference 23',
    caption: 'FrotKon 23 - How to Use Power of the Cooperation',
  },
  {
    src: '/frontendisti23.jpeg',
    alt: 'Frontendisti - December 23',
    caption: 'Frontendisti 23 - How to Use Power of the Cooperation',
  },
  {
    src: '/techmeetup23.jpeg',
    alt: 'TechMeetup 23',
    caption: 'TechMeetup 23 - Next.js 13 + Server Actions',
  },
  {
    src: '/frontkon24.jpeg',
    alt: 'FrontKon Conference Talk 24',
    caption: 'FrontKon 24 - Performance Measurement in CI/CD',
  },
  {
    src: '/techmeetup24.jpeg',
    alt: 'TechMeetup 24',
    caption: 'TechMeetup 24 - React Compiler: The Game Changer?',
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

export const TalksGallery = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying && !isHovered) {
      intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex === GALLERY_IMAGES.length - 1 ? 0 : prevIndex + 1));
      }, AUTOPLAY_INTERVAL);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, isHovered]);

  const previousSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? GALLERY_IMAGES.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === GALLERY_IMAGES.length - 1 ? 0 : prevIndex + 1));
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <Card
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={GALLERY_IMAGES[currentIndex].src || '/placeholder.svg'}
          alt={GALLERY_IMAGES[currentIndex].alt}
          fill
          className="object-cover transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-lg font-medium">{GALLERY_IMAGES[currentIndex].caption}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
          onClick={previousSlide}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-4 bg-background/80 hover:bg-background/90"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <div className="absolute bottom-4 left-4 flex gap-1">
          {GALLERY_IMAGES.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-3' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};
