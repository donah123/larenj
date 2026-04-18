'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  {
    title: 'The Architect of',
    accent: 'Sovereign Futures',
    subtitle: 'Established Global Authority',
    description:
      'Navigating the complexities of global citizenship, executive mobility, and strategic enterprise consulting with unparalleled discretion and institutional precision.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center',
    ctaLabel: 'Request Consultation',
    ctaHref: '/contact',
    secondaryLabel: 'Our Methodology',
  },
  {
    title: 'Global Citizenship',
    accent: 'Elevated',
    subtitle: 'Residence with Purpose',
    description:
      'Tailored residency and citizenship solutions for discerning clients seeking secure, seamless, and sovereign global mobility.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&h=1080&fit=crop',
    ctaLabel: 'Discover Residency',
    ctaHref: '/immigration',
    secondaryLabel: 'Learn How',
  },
  {
    title: 'Executive Mobility',
    accent: 'Refined',
    subtitle: 'Strategic Talent Movement',
    description:
      'We enable seamless relocation for senior executives and their families through premium legal, immigration, and employment advisory.',
    image:
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1920&h=1080&fit=crop',
    ctaLabel: 'Explore Employment',
    ctaHref: '/employment',
    secondaryLabel: 'Our Approach',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-section">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <img
          className="w-full h-full object-cover opacity-40 hero-bg"
          src={current.image}
          alt={current.subtitle}
        />
      </div>

      <div className="container mx-auto px-12 relative z-20">
        <div className="relative max-w-4xl space-y-8 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-14 shadow-2xl">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-surface/40 to-surface-container-low/30 pointer-events-none"></div>
          <div className="relative space-y-8">
            <span className="text-primary font-label uppercase tracking-[0.3em] text-sm hero-fade">{current.subtitle}</span>
            <h1 className="text-6xl md:text-7xl font-headline font-bold text-on-background leading-[1.05] tracking-tight hero-fade hero-fade-delay">
              {current.title} <br />
              <span className="italic text-primary">{current.accent}</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-body max-w-2xl leading-relaxed hero-fade hero-fade-delay-2">
              {current.description}
            </p>
            <div className="flex flex-wrap gap-6 hero-fade hero-fade-delay-3">
              <Link
                href={current.ctaHref}
                className="bg-gradient-to-r from-primary to-primary-container px-10 py-4 rounded-md text-on-primary font-bold tracking-wider text-lg shadow-xl transition-transform duration-500 hover:-translate-y-1"
              >
                {current.ctaLabel}
              </Link>
              <button className="border border-outline-variant/30 px-10 py-4 rounded-md text-on-background font-bold tracking-wider text-lg hover:bg-surface-container-high transition-colors duration-300">
                {current.secondaryLabel}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-12 z-30 flex justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.subtitle}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary' : 'bg-on-background/40 hover:bg-on-background/70'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute right-6 top-1/2 z-30 hidden md:flex flex-col gap-4 transform -translate-y-1/2">
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
          className="rounded-full bg-surface/70 p-3 text-on-background shadow-lg hover:bg-surface-container-high transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
          className="rounded-full bg-surface/70 p-3 text-on-background shadow-lg hover:bg-surface-container-high transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}
