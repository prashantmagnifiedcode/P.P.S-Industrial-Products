'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Flame, 
  ChevronRight, 
  ChevronLeft, 
  ExternalLink, 
  Play 
} from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

const CP_GRATEX_CAROUSEL_ITEMS = [
  {
    id: 'cburr-34016',
    title: 'C-BuRR Universal Deburring Tool',
    partNo: 'Part #34016',
    badge: '360° Swivel Chuck',
    image: 'https://deburringtools.com/wp-content/uploads/2026/08/C-BuRR-34016.png',
    description: 'Ergonomic handle with push-button blade release. Free 360° rotation for smooth edge burr removal on metals and plastics.',
    target: 'Sheet Metal & Curved Contours'
  },
  {
    id: 'c101c-blades',
    title: 'C-101(C) Cobalt Swivel Blades (10 Pcs)',
    partNo: 'Part #C-101(C)',
    badge: '64 HRC Cobalt',
    image: 'https://deburringtools.com/wp-content/uploads/2026/09/C-101C.png',
    description: 'Heavy-duty 3.2mm shank cobalt-enhanced HSS swivel blades for aggressive burr stripping on steel, cast iron, and flame-cut plates.',
    target: 'Heavy Steel & Castings'
  },
  {
    id: 'cs30-vibracut',
    title: 'CS-30-3F VIBRA CUT Countersink (1–30mm)',
    partNo: 'Part #48340',
    badge: 'Anti-Vibration 3F',
    image: 'https://deburringtools.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-26-2026-01_17_48-PM-1.png',
    description: 'Patented unequal 3-flute spacing eliminates harmonic chatter, delivering mirror-smooth 90° concentric chamfers in mills and drill presses.',
    target: 'Chatter-Free Hole Chamfering'
  },
  {
    id: 'cburr-set21',
    title: 'C-BuRR Set 21 Master Kit (21 Pcs)',
    partNo: 'Part #31621',
    badge: 'Master Workshop Set',
    image: 'https://deburringtools.com/wp-content/uploads/2026/06/C-Burr-Set-21-.png',
    description: 'Complete workshop kit including heavy handle, telescopic holder bar for deep recesses, countersink tool, and 20 assorted blades.',
    target: 'Full Machine Shop Setup'
  },
  {
    id: 'dt25-sheetmetal',
    title: 'DT-25 Sheet Metal Dual-Edge Deburrer',
    partNo: 'Part #31025',
    badge: 'Dual Cutting Discs',
    image: 'https://deburringtools.com/wp-content/uploads/2026/06/DT-25-Set-blades-1.jpg',
    description: 'Opposed circular HSS cutting wheels with safety hand guard. Simultaneously deburrs both top and bottom edges up to 10mm thickness.',
    target: 'Laser & Punched Sheet Edges'
  },
  {
    id: 'c102-blades',
    title: 'C-102 Finishing Blades (10 Pcs)',
    partNo: 'Part #12120',
    badge: 'High Positive Rake',
    image: 'https://deburringtools.com/wp-content/uploads/2026/02/1.png',
    description: 'High positive rake geometry engineered for smooth, clean deburring of brass, bronze, cast iron, and plastic mouldings without digging.',
    target: 'Brass, Bronze & Plastics'
  },
  {
    id: 'p3c-scraper',
    title: 'P-3(C) Triangular Scraper Blade',
    partNo: 'Part #11302',
    badge: 'Hollow Ground 3-Sided',
    image: 'https://deburringtools.com/wp-content/uploads/2026/08/P-3C.png',
    description: 'Three-sided double-ended hollow ground scraper blade designed for internal cross-holes, keyway slots, and precision machine scraping.',
    target: 'Internal Cross-Holes & Slots'
  },
  {
    id: 'cburr-set3',
    title: 'C-BuRR Set 3 Yellow Hand Tool Kit',
    partNo: 'Part #31614',
    badge: 'Compact Field Kit',
    image: 'https://deburringtools.com/wp-content/uploads/2026/03/C-Burr-Set-3-31614.jpg',
    description: 'High-visibility yellow ergonomic handle equipped with 3 specialized blades for hole exits, sheet edges, and external contour deburring.',
    target: 'Field Service & Maintenance'
  },
  {
    id: 'cs30-4f',
    title: 'CS-30-4F Heavy Duty Countersink',
    partNo: 'Part #48350',
    badge: '4-Flute Tough',
    image: 'https://deburringtools.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-26-2026-01_13_53-PM.png',
    description: '4-flute heavy-duty countersink for deep chamfering and large-diameter hole deburring in structural steels and tough alloy fabrications.',
    target: 'Structural & Heavy Fabrications'
  },
  {
    id: 'orbitool-11000',
    title: '11000 Orbitool Internal Deburrer',
    partNo: 'Part #11000',
    badge: 'Internal Cross-Hole',
    image: 'https://deburringtools.com/wp-content/uploads/2024/02/11000-1-1.png',
    description: 'Automated & manual cross-hole deburring tool with flexible spring-loaded protective disc that deburrs internal hole exits without scratching.',
    target: 'Intersecting Cross-Drilled Holes'
  }
];
export default function ProductCatalogSection() {
  const { rfqItems, openRfqModal } = useRfq();

  // Deburring Tools Media Showcase States
  const [activeVideo, setActiveVideo] = useState<'featured' | 'blades' | 'countersinks'>('featured');

  // Small-Height Carousel States & Auto-play
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setCarouselIdx(prev => (prev + 1) % CP_GRATEX_CAROUSEL_ITEMS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);



  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden" id="products">
      
      {/* Subtle Coordinate Grid Texture in Brand Cyan/Blue */}
      <div className="absolute inset-0 bg-[radial-gradient(#007CC20d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_top,#007CC20a,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Purpose, Reach & RFQ Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#007CC2]" />
              <span>Direct Central Depot Inventory • Sector 5 Gurugram</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Precision Cutting Tools &amp; <span className="bg-gradient-to-r from-[#007CC2] via-[#006aa6] to-[#004f7c] bg-clip-text text-transparent">CNC Tooling</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Direct authorized inventory supplying authentic tungsten carbide inserts, solid micro-grain end mills, balanced collet chuck arbors, and official <strong>CP GRAT-EX® deburring &amp; countersink systems</strong> sourced directly from <a href="https://deburringtools.com/" target="_blank" rel="noopener noreferrer" className="text-[#007CC2] font-semibold underline hover:text-[#005688]">deburringtools.com</a>.
            </p>
          </div>

          {/* Official IndiaMART Verified Profile (In place of Inquiry Basket) */}
          <div className="shrink-0 flex items-center">
            <a
              href="https://www.indiamart.com/pps-industrialproducts/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-3.5 group"
              title="Available on IndiaMART - P.P.S Industrial Products"
            >
              <div className="h-10 w-14 bg-white rounded-xl border border-slate-100 flex items-center justify-center p-1 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Image
                  src="/indiamart-logo.png"
                  alt="IndiaMART Official Logo"
                  width={64}
                  height={45}
                  priority
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    TrustSEAL Verified Supplier
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#007CC2] transition-colors">
                    Available on IndiaMART
                  </span>
                  <ExternalLink size={13} className="text-[#007CC2] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* 1. FEATURED BRAND SPOTLIGHT: CP GRAT-EX (deburringtools.com) Video & Photo Showcase in Official Brand Colors */}
        <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#f0f8fc] via-white to-[#ebf6fc] border border-[#bde2f5] p-6 sm:p-10 text-slate-900 shadow-sm relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#007CC2]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Brand Identity, Original Logo, and Live Link to deburringtools.com */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="flex flex-wrap items-center gap-3">
                {/* Original Logo directly linked from deburringtools.com (no white box) */}
                <a
                  href="https://deburringtools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:opacity-90 transition-opacity"
                  title="Visit CP GRAT-EX (deburringtools.com)"
                >
                  <Image
                    src="https://deburringtools.com/wp-content/uploads/2023/12/cp-gratex-logo.png"
                    alt="CP GRAT-EX Original Logo (deburringtools.com)"
                    width={180}
                    height={42}
                    unoptimized
                    priority
                    className="h-8 sm:h-9 w-auto object-contain select-none"
                  />
                </a>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] text-xs font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007CC2] animate-pulse" />
                  Official Channel Partner
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  CP GRAT-EX® Deburring &amp; Countersink Tools
                </h3>
                <p className="text-xs sm:text-sm text-[#007CC2] font-bold mt-1">
                  Manufacturer Since 1992 • Direct Sourcing from deburringtools.com
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Eliminate secondary deburring bottlenecks and burrs on CNC machined parts, sheet metal stampings, cross-drilled holes, and piping. Watch official demonstration videos and explore authentic products linked directly from the manufacturer&apos;s live database.
              </p>

              {/* Action Buttons: Visit deburringtools.com + Filter Catalog */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://deburringtools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-2xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-[#007CC2]/20 active:scale-95 transition-all"
                >
                  <span>Visit deburringtools.com</span>
                  <ExternalLink size={15} />
                </a>

                <button
                  type="button"
                  onClick={() => openRfqModal()}
                  className="px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 text-[#007CC2] font-bold text-xs sm:text-sm transition-colors border border-[#bde2f5] shadow-2xs"
                >
                  Request Technical RFQ
                </button>
              </div>
            </div>

            {/* Right: Embedded Video Player in Clean White Frame */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#bde2f5] p-3 sm:p-4 shadow-sm">
                {/* Video Sub-Tabs */}
                <div className="flex items-center justify-between gap-2 px-1 pb-3 border-b border-slate-100 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Play size={13} className="text-[#007CC2]" />
                    Official Demonstration
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setActiveVideo('featured')}
                      className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all flex items-center gap-1 ${
                        activeVideo === 'featured'
                          ? 'bg-[#007CC2] text-white shadow-xs'
                          : 'bg-[#f0f8fc] text-[#007CC2] hover:bg-[#e0f2fe] border border-[#bde2f5]'
                      }`}
                    >
                      <Flame size={11} className={activeVideo === 'featured' ? 'text-amber-300' : 'text-[#007CC2]'} />
                      Featured Video
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveVideo('blades')}
                      className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
                        activeVideo === 'blades'
                          ? 'bg-[#007CC2] text-white shadow-xs'
                          : 'bg-[#f0f8fc] text-[#007CC2] hover:bg-[#e0f2fe] border border-[#bde2f5]'
                      }`}
                    >
                      Deburring Blades
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveVideo('countersinks')}
                      className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
                        activeVideo === 'countersinks'
                          ? 'bg-[#007CC2] text-white shadow-xs'
                          : 'bg-[#f0f8fc] text-[#007CC2] hover:bg-[#e0f2fe] border border-[#bde2f5]'
                      }`}
                    >
                      Countersinks
                    </button>
                  </div>
                </div>

                {/* Responsive 16:9 Iframe Video Embed */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
                  <iframe
                    src={
                      activeVideo === 'featured'
                        ? 'https://www.youtube.com/embed/4TEKqGyGEbI?rel=0&modestbranding=1'
                        : activeVideo === 'blades'
                        ? 'https://www.youtube.com/embed/k5q-E-Y7xL4?rel=0&modestbranding=1'
                        : 'https://www.youtube.com/embed/FjR3l_cW3Yk?rel=0&modestbranding=1'
                    }
                    title={
                      activeVideo === 'featured'
                        ? 'CP GRAT-EX Deburring Tools Official Demonstration (deburringtools.com)'
                        : activeVideo === 'blades'
                        ? 'CP GRAT-EX Deburring Blades Demonstration'
                        : 'CP GRAT-EX Countersinks Overview'
                    }
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>

                <div className="p-1 pt-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <span>Source: Official CP GRAT-EX Channel</span>
                    <a
                      href="https://youtu.be/4TEKqGyGEbI?si=NQhItBNql-7JD1Un"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#007CC2] hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                  <span className="text-emerald-600 font-bold">100% Genuine Certified Indian Tooling</span>
                </div>
              </div>
            </div>

          </div>

          {/* Photo-First CP GRAT-EX Product Showcase Carousel in Brand Colors (#007CC2, #f0f8fc, #bde2f5, white) */}
          <div 
            className="mt-8 pt-6 border-t border-[#bde2f5]"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            {/* Carousel Header with Navigation Buttons */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#007CC2] animate-pulse" />
                <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                  CP GRAT-EX® Product Photos • Sourced from deburringtools.com
                </h4>
                <span className="hidden sm:inline-block text-[11px] text-[#007CC2] font-mono font-bold bg-[#f0f8fc] border border-[#bde2f5] px-2 py-0.5 rounded-full">
                  Photo {carouselIdx + 1} of {CP_GRATEX_CAROUSEL_ITEMS.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCarouselIdx(prev => (prev - 1 + CP_GRATEX_CAROUSEL_ITEMS.length) % CP_GRATEX_CAROUSEL_ITEMS.length)}
                  className="p-2 rounded-xl bg-white hover:bg-[#007CC2] text-[#007CC2] hover:text-white border border-[#bde2f5] hover:border-[#007CC2] shadow-2xs transition-all active:scale-95"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setCarouselIdx(prev => (prev + 1) % CP_GRATEX_CAROUSEL_ITEMS.length)}
                  className="p-2 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white shadow-sm shadow-[#007CC2]/20 transition-all active:scale-95"
                  aria-label="Next Photo"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Photo-Centric Carousel Grid: 3 Hero Photos on Desktop, 2 on Mobile/Tablet */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[0, 1, 2].map((offset) => {
                const item = CP_GRATEX_CAROUSEL_ITEMS[(carouselIdx + offset) % CP_GRATEX_CAROUSEL_ITEMS.length];
                const isHiddenOnSmall = offset === 2 ? 'hidden lg:flex' : 'flex';

                return (
                  <div
                    key={`${item.id}-${offset}`}
                    className={`${isHiddenOnSmall} flex-col bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden group`}
                  >
                    {/* Large Prominent Photo Stage (Photo is the Hero) */}
                    <div className="relative aspect-[16/10] bg-white overflow-hidden p-2 sm:p-3 flex items-center justify-center border-b border-slate-100 group-hover:bg-slate-50/50 transition-colors">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-contain p-1.5 sm:p-2.5 group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Floating Part & Feature Pills in Brand Colors */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none gap-1">
                        <span className="font-mono text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2.5 py-0.5 rounded-full bg-[#007CC2] text-white shadow-xs truncate">
                          {item.partNo}
                        </span>
                        <span className="hidden xs:inline-block text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-[#f0f8fc] text-[#007CC2] border border-[#bde2f5] shadow-2xs truncate">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Photo Description & Details */}
                    <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-1.5 sm:space-y-2.5">
                      <div>
                        <h5 className="font-extrabold text-xs sm:text-base text-slate-900 group-hover:text-[#007CC2] transition-colors leading-snug line-clamp-1">
                          {item.title}
                        </h5>
                        <p className="hidden sm:block text-xs text-slate-600 leading-relaxed mt-1 font-normal line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-1 pt-1.5 sm:pt-2.5 border-t border-slate-100">
                        <span className="hidden sm:inline-block text-[10px] font-semibold text-[#007CC2] bg-[#f0f8fc] border border-[#bde2f5] px-2 py-0.5 rounded-md truncate">
                          {item.target}
                        </span>
                        <a
                          href="https://deburringtools.com/shop/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] sm:text-[11px] text-[#007CC2] hover:text-[#005688] font-bold flex items-center gap-0.5 shrink-0 hover:underline"
                        >
                          <span>deburringtools.com</span>
                          <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicator Dots in Brand Colors */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {CP_GRATEX_CAROUSEL_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCarouselIdx(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === carouselIdx ? 'w-6 bg-[#007CC2]' : 'w-1.5 bg-[#bde2f5] hover:bg-[#007CC2]/60'
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
