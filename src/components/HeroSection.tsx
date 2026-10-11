'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

interface Slide {
  id: string;
  image: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaText: string;
}

const SLIDES: Slide[] = [
  {
    id: 'slide-turning',
    image: '/hero-banner.jpg',
    badge: 'Gurugram Depot • 10,000+ SKUs in Stock',
    title: 'Precision Carbide',
    titleHighlight: 'Turning Inserts',
    subtitle: 'TNMG, CNMG & WNMG inserts in-stock for steel, stainless & cast iron lathe machining.',
    ctaText: 'Request Quote'
  },
  {
    id: 'slide-milling',
    image: '/collet-milling.jpg',
    badge: 'Ultra-Precision Spindle Clamping',
    title: 'Solid Carbide End Mills &',
    titleHighlight: 'ER Collets',
    subtitle: 'Balzers Balinit nano-coated 4-flute cutters with TIR < 0.003mm runout precision.',
    ctaText: 'Explore Milling'
  },
  {
    id: 'slide-cbn-pcd',
    image: '/hero-banner.jpg',
    badge: 'Superhard Cutting Technologies',
    title: 'PCD & Solid PCBN',
    titleHighlight: 'Hard-Turning Inserts',
    subtitle: 'Superior edge life for hardened steels (45–65 HRC) and non-ferrous aluminum.',
    ctaText: 'Get Superhard Quote'
  },
  {
    id: 'slide-logistics',
    image: '/collet-milling.jpg',
    badge: 'Express Tooling Delivery & Breakdown Support',
    title: 'Express Dispatch Across',
    titleHighlight: 'Pan India',
    subtitle: 'Emergency line stoppage inserts and toolholders dispatched directly from Sector 5 depot nationwide.',
    ctaText: 'Call Emergency Dispatch'
  }
];

export default function HeroSection() {
  const { openRfqModal } = useRfq();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Auto-scroll carousel timer (5 seconds per slide)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch Swipe Handlers for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      className="relative w-full h-[300px] sm:h-[350px] lg:h-[390px] bg-slate-950 overflow-hidden flex items-end select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Cutting Tools Image Carousel"
    >
      {/* 1. Full Image Background with Subtle Contrast Gradient (Image Highly Visible) */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
          >
            {/* Background Image with Slow Subtle Ken Burns Zoom */}
            <div className={`relative w-full h-full transform transition-transform duration-[6000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'
              }`}>
              <Image
                src={slide.image}
                alt={`${slide.title} ${slide.titleHighlight}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Subtle Vignette Overlay - Keeps Image 85%+ Visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
          </div>
        );
      })}

      {/* 2. Minimalist, Ultra-Compact Text Overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
        <div className="max-w-md backdrop-blur-md bg-slate-950/50 p-4 sm:p-5 rounded-2xl border border-white/15 shadow-xl space-y-2 text-left">

          {/* Compact Punchy Headline */}
          <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug">
            {SLIDES[currentSlide].title}{' '}
            <span className="bg-gradient-to-r from-[#007CC2] via-[#38bdf8] to-sky-200 bg-clip-text text-transparent">
              {SLIDES[currentSlide].titleHighlight}
            </span>
          </h1>

          {/* 1-Line Description */}
          <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed font-medium line-clamp-1">
            {SLIDES[currentSlide].subtitle}
          </p>

          {/* Compact Action Buttons */}
          <div className="flex items-center gap-2.5 pt-0.5">
            <button
              type="button"
              onClick={() => openRfqModal()}
              className="relative overflow-hidden group px-4 py-2 rounded-lg bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs tracking-wide shadow-sm shadow-[#007CC2]/30 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Sparkles size={13} className="fill-current text-white" />
              <span>{SLIDES[currentSlide].ctaText}</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20I%20am%20interested%20in%20pricing%20for%20cutting%20tools."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <span className="text-xs">💬</span>
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+919350509134"
              className="hidden sm:inline-block text-slate-300 hover:text-white font-bold text-[11px] transition-colors pl-1"
            >
              +91 93505 09134
            </a>
          </div>

        </div>
      </div>

      {/* 3. Subtle Left / Right Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-[#007CC2] border border-white/20 text-white backdrop-blur-md transition-all shadow-md active:scale-90"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={18} className="stroke-[2.5]" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-[#007CC2] border border-white/20 text-white backdrop-blur-md transition-all shadow-md active:scale-90"
        aria-label="Next Slide"
      >
        <ChevronRight size={18} className="stroke-[2.5]" />
      </button>

      {/* 4. Bottom Autoscroll Progress Indicators & Slide Controls */}
      <div className="absolute bottom-2.5 left-0 right-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Slide Indicators with Animated Progress */}
        <div className="flex items-center gap-1.5">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`group relative h-1 transition-all rounded-full overflow-hidden ${isActive ? 'w-6 sm:w-10 bg-white/30' : 'w-2.5 sm:w-3 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {isActive && (
                  <span
                    key={`progress-${currentSlide}`}
                    className="absolute inset-0 bg-[#007CC2] origin-left animate-carousel-progress"
                    style={{
                      animationPlayState: isPaused ? 'paused' : 'running',
                      animationDuration: '5000ms'
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Slide Counter */}
        <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400">
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-slate-400">
            {isPaused ? <Pause size={9} className="text-amber-400" /> : <Play size={9} className="text-[#007CC2]" />}
            <span>{isPaused ? 'Paused' : 'Auto'}</span>
          </span>
          <span className="px-1.5 py-0.5 rounded bg-black/50 border border-white/10 text-white text-[10px]">
            0{currentSlide + 1} / 0{SLIDES.length}
          </span>
        </div>

      </div>

    </section>
  );
}
