'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Truck,
  Layers
} from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

interface Slide {
  id: string;
  image: string;
  rawImage: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  specs: string[];
  ctaText: string;
  ctaAction: 'rfq' | 'link';
  linkUrl?: string;
  productType: string;
}

const SLIDES: Slide[] = [
  {
    id: 'slide-threading',
    image: '/hero/hero-threading-studio.jpg',
    rawImage: '/hero/hero-threading-inserts.jpg',
    badge: 'ISO & Pitch Precision • Direct Factory Stock',
    title: 'High-Precision CNC Laydown',
    titleHighlight: 'Threading Inserts',
    subtitle: 'Internal & external IR/ER profile carbide threading inserts engineered for micro-accurate pitch tolerances, zero chatter, and mirror thread finish.',
    specs: ['ISO 60° / UN / Whitworth', 'Micro-Grain Carbide Substrate', 'Gurugram Depot Ready'],
    ctaText: 'Request Threading Quote',
    ctaAction: 'rfq',
    productType: 'Threading Inserts'
  },
  {
    id: 'slide-pcd-cbn',
    image: '/hero/hero-pcd-studio.jpg',
    rawImage: '/hero/hero-pcd-inserts.jpg',
    badge: 'LexusTec™ Superhard Cutting Technologies',
    title: 'Diamond PCD & Solid PCBN',
    titleHighlight: 'Hard-Turning Inserts',
    subtitle: 'CCGW & rhombic inserts engineered for extreme tolerance finish turning of hardened steels (45–65 HRC), grey iron, and abrasive non-ferrous aluminum.',
    specs: ['Sub-Micron Surface Finish', 'Extreme Edge Wear Life', 'Aerospace & Auto Grade'],
    ctaText: 'Get Superhard Quote',
    ctaAction: 'rfq',
    productType: 'PCD & PCBN Inserts'
  },
  {
    id: 'slide-gold-taps',
    image: '/hero/hero-gold-taps-studio.jpg',
    rawImage: '/hero/hero-gold-taps.jpg',
    badge: 'LexusTec™ Gold TiN Series • HSS-E Cobalt',
    title: 'Titanium Nitride TiN-Coated',
    titleHighlight: 'Machine Taps',
    subtitle: 'Ultra-low friction gold TiN flutes with 6H precision tolerance for high-speed through & blind hole tapping in alloy steels and stainless.',
    specs: ['M12 × 1.25 Metric / Multi-Size', '6H Precision Tolerance', 'High Heat & Wear Resistance'],
    ctaText: 'Request Tapping Quote',
    ctaAction: 'rfq',
    productType: 'TiN Gold Taps'
  },
  {
    id: 'slide-hsse-taps',
    image: '/hero/hero-hsse-taps-studio.jpg',
    rawImage: '/hero/hero-hsse-taps.jpg',
    badge: 'LexusTec™ Cobalt Heavy-Duty Tooling',
    title: 'Heavy-Duty Cobalt HSS-E',
    titleHighlight: 'Spiral Flute Taps',
    subtitle: 'Precision-ground spiral and straight flute geometry for rapid chip evacuation, heavy torque endurance, and extended tool life in CNC tapping centers.',
    specs: ['7/16-20 UNF-2B / Metric / BSW', 'Rapid Chip Evacuation', 'Heavy Torque Rated'],
    ctaText: 'Explore LexusTec Tooling',
    ctaAction: 'rfq',
    productType: 'Cobalt HSS-E Taps'
  }
];

export default function HeroSection() {
  const { openRfqModal } = useRfq();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Auto-scroll carousel timer (5.5 seconds per slide)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 5500);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartXRef.current = null;
  };

  const active = SLIDES[currentSlide];

  return (
    <section
      className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] bg-[#070c18] overflow-hidden flex flex-col justify-between select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="PPS Industrial Products Hero Showcase"
    >
      {/* Dynamic Ambient Blue Glows Matching Primary #007CC2 */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#007CC2]/20 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute -bottom-24 -left-20 w-[450px] h-[450px] bg-[#007CC2]/15 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* Background Slides */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Smooth Ken Burns Effect */}
            <div
              className={`relative w-full h-full transform transition-transform duration-[7000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            >
              <Image
                src={slide.image}
                alt={`${slide.title} ${slide.titleHighlight}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center lg:object-right"
              />
            </div>

            {/* Industrial Vignette Gradient Overlays with PPS Blue Tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-[#070c18]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070c18]/95 via-[#070c18]/70 to-[#070c18]/20 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,124,194,0.18),transparent_60%)]" />
          </div>
        );
      })}

      {/* Main Foreground Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-4 flex-1 flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Badge with PPS Primary Blue */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007CC2]/15 border border-[#007CC2]/40 backdrop-blur-md mb-3 sm:mb-4 shadow-sm shadow-[#007CC2]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#007CC2]" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-sky-200 tracking-wide uppercase">
              {active.badge}
            </span>
          </div>

          {/* Headline with Radiant PPS Blue Gradient */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 drop-shadow-sm">
            {active.title}{' '}
            <span className="bg-gradient-to-r from-[#007CC2] via-[#38bdf8] to-sky-200 bg-clip-text text-transparent">
              {active.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal mb-4 sm:mb-5 max-w-xl drop-shadow-sm">
            {active.subtitle}
          </p>

          {/* Product Technical Specs Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5 sm:mb-6">
            {active.specs.map((spec, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-[#007CC2]/30 text-sky-200 text-[11px] sm:text-xs font-medium backdrop-blur-sm"
              >
                <CheckCircle2 size={12} className="text-[#007CC2] shrink-0" />
                <span>{spec}</span>
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            <button
              type="button"
              onClick={() => openRfqModal()}
              className="relative overflow-hidden group px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#007CC2]/40 active:scale-95 transition-all flex items-center gap-2 border border-sky-300/30"
            >
              <Sparkles size={15} className="fill-current text-white animate-pulse" />
              <span>{active.ctaText}</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20I%20am%20interested%20in%20pricing%20for%20cutting%20tools%20and%20inserts."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/20 hover:border-[#25D366]/60 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-md group"
            >
              <MessageCircle size={15} className="text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="tel:+919350509134"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-slate-300 hover:text-white font-semibold text-xs transition-colors"
            >
              <Phone size={13} className="text-[#007CC2]" />
              <span>+91 93505 09134</span>
            </a>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-slate-950/60 hover:bg-[#007CC2] border border-white/15 text-white backdrop-blur-md transition-all shadow-md active:scale-90"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} className="stroke-[2.5]" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-slate-950/60 hover:bg-[#007CC2] border border-white/15 text-white backdrop-blur-md transition-all shadow-md active:scale-90"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} className="stroke-[2.5]" />
      </button>

      {/* Bottom Controls Bar & Thumbnail Switcher */}
      <div className="relative z-30 w-full bg-slate-950/80 border-t border-white/10 backdrop-blur-md py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          
          {/* Quick Product Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 w-full md:w-auto">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`relative text-left px-3 py-1.5 rounded-lg border transition-all flex items-center justify-between gap-2 ${
                    isActive
                      ? 'bg-[#007CC2]/20 border-[#007CC2] text-white shadow-sm shadow-[#007CC2]/20'
                      : 'bg-slate-900/40 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-sky-400 block leading-tight font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold truncate block">
                      {slide.productType}
                    </span>
                  </div>

                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007CC2] animate-pulse shrink-0" />
                  )}

                  {/* Progress Indicator Line */}
                  {isActive && (
                    <span
                      key={`progress-${currentSlide}`}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#007CC2] animate-carousel-progress"
                      style={{
                        animationPlayState: isPaused ? 'paused' : 'running',
                        animationDuration: '5500ms'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Autoplay Status & Slide Counter */}
          <div className="hidden md:flex items-center gap-3 text-xs font-mono text-slate-400">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-slate-300 transition-colors"
            >
              {isPaused ? <Pause size={10} className="text-amber-400" /> : <Play size={10} className="text-[#007CC2]" />}
              <span>{isPaused ? 'Paused' : 'Autoplay'}</span>
            </button>

            <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-white font-bold text-[11px]">
              0{currentSlide + 1} / 0{SLIDES.length}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
