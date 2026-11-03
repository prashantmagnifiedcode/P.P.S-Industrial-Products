'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  Award,
  Layers,
  CheckCircle2,
  Trophy,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const OFFICIAL_STATS = [
  {
    value: '15+',
    title: 'Years Experience',
    subtitle: 'Est. 2010 in Gurugram, supplying machine shops across India.',
    icon: <Award size={20} className="text-[#007CC2]" />
  },
  {
    value: '5,000+',
    title: 'Active Clients',
    subtitle: 'Trusted by automotive Tier-1s, mould makers & CNC job shops.',
    icon: <Building2 size={20} className="text-[#007CC2]" />
  },
  {
    value: '100K+',
    title: 'Products Delivered',
    subtitle: 'Authentic carbide inserts, solid end mills & CNC toolholding.',
    icon: <Layers size={20} className="text-[#007CC2]" />
  },
  {
    value: '100%',
    title: 'Quality Compliant',
    subtitle: 'Direct authorized OEM distributor with verified batch certificates.',
    icon: <ShieldCheck size={20} className="text-[#007CC2]" />
  }
];

export default function AboutSection() {
  return (
    <section 
      className="w-full bg-white border-b border-slate-200 py-10 sm:py-16 relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[900px] before:h-[400px] before:bg-[radial-gradient(ellipse_at_top,#007CC20d,transparent_70%)] before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(#007CC20f_1px,transparent_1px)] after:[background-size:24px_24px] after:[mask-image:radial-gradient(ellipse_75%_55%_at_50%_35%,#000_30%,transparent_100%)] after:pointer-events-none" 
      id="about"
    >
      
      {/* 1. Visual: Transparent Graphic on Clean Stage with Soft Depth */}
      <div className="w-full pb-6 flex items-center justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl flex items-center justify-center relative before:absolute before:inset-0 before:rounded-full before:bg-[#007CC2]/5 before:blur-2xl before:pointer-events-none">
            <Image
              src="/about-transparent.png"
              alt="About P.P.S Industrial Products - Precision in Every Cut"
              width={960}
              height={360}
              unoptimized
              priority
              className="w-full h-auto object-contain drop-shadow-sm select-none relative z-10"
            />
          </div>
        </div>
      </div>

      {/* 2. Horizontal Detail Block & 4 Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 relative z-10">
        
        {/* Editorial Executive Statements with Top Gradient Hairline & Corner Depth */}
        <div className="relative overflow-hidden bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs hover:border-[#007CC2]/60 hover:shadow-md transition-all duration-300 before:absolute before:top-0 before:inset-x-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#007CC2] before:to-transparent after:absolute after:-bottom-12 after:-right-12 after:w-48 after:h-48 after:bg-[#007CC2]/5 after:rounded-full after:blur-2xl after:pointer-events-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            
            {/* Statement 1: Core Specialization */}
            <div className="flex flex-col justify-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007CC2] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#007CC2]"></span>
                <span>Precision Engineering</span>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Based in Gurugram, we specialize in advanced <strong className="font-extrabold text-slate-900">CNC Tools, Cutting Tools, and Threading Tools</strong> designed for environments where precision is non-negotiable.
              </p>
            </div>

            {/* Subtle Vertical Divider on Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />

            {/* Statement 2: Industrial Trust & Standards */}
            <div className="flex flex-col justify-start md:pl-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007CC2] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#007CC2]"></span>
                <span>Industrial Trust</span>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                We have earned the trust of <strong className="font-extrabold text-slate-900">over 5,000 clients</strong> across critical sectors like <span className="font-semibold text-slate-900">aerospace, automotive, and heavy engineering</span>, ensuring that every tool aligns with the highest international standards for durability and exactitude.
              </p>
            </div>

          </div>
        </div>

        {/* Smart Credential Cards: Expo Awards & IndiaMART - Big Visible Imagery with Unified Gray Premium Look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 mt-6">
          
          {/* Card 1: Expo Awards & Participation */}
          <Link
            href="/expo"
            className="group relative overflow-hidden bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-all duration-200 flex items-center justify-between gap-3.5 sm:gap-5 active:scale-[0.99]"
          >
            <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0 flex-1">
              {/* BIG Visible Trophy Image Frame */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center shrink-0 shadow-xs group-hover:border-slate-300 group-hover:scale-105 transition-all">
                <Image
                  src="/images/expos/machauto_2026.png"
                  alt="Expo Exhibitor Award Trophy"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
                <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xs">
                  <Trophy size={11} className="text-white" />
                </span>
              </div>

              {/* Minimalist Microcopy */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-slate-200/80 text-slate-800 border border-slate-300/70">
                    Expo Awards
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                    AMTEX • MachAuto • Indus-Tech
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 truncate group-hover:text-black transition-colors">
                  Exhibitor Recognition Trophies
                </h4>
                <p className="text-xs text-slate-500 line-clamp-1 sm:line-clamp-2 mt-0.5">
                  Honored for tooling excellence across India&apos;s premier machine tools expos
                </p>
              </div>
            </div>

            {/* Gray Premium Action Pill */}
            <div className="shrink-0 flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 bg-white group-hover:bg-slate-900 group-hover:text-white px-3 py-2 rounded-xl border border-slate-200 group-hover:border-slate-900 transition-all">
              <span className="hidden xs:inline">View</span>
              <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Available on IndiaMART */}
          <a
            href="https://www.indiamart.com/pps-industrialproducts/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-all duration-200 flex items-center justify-between gap-3.5 sm:gap-5 active:scale-[0.99]"
            title="Available on IndiaMART - Verified Supplier Profile"
          >
            <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0 flex-1">
              {/* BIG Visible IndiaMART Logo Frame */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200 p-2.5 flex items-center justify-center shrink-0 shadow-xs group-hover:border-slate-300 group-hover:scale-105 transition-all">
                <Image
                  src="/indiamart-logo.png"
                  alt="IndiaMART Official Verified Logo"
                  width={96}
                  height={68}
                  className="w-full h-full object-contain"
                />
                <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xs">
                  <CheckCircle2 size={11} className="text-white" />
                </span>
              </div>

              {/* Minimalist Microcopy */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-slate-200/80 text-slate-800 border border-slate-300/70">
                    Verified Seller
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                    TrustSEAL Certified
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 truncate group-hover:text-black transition-colors">
                  Available on IndiaMART
                </h4>
                <p className="text-xs text-slate-500 line-clamp-1 sm:line-clamp-2 mt-0.5">
                  Explore 5,000+ cutting tools &amp; instant direct wholesale quotes
                </p>
              </div>
            </div>

            {/* Gray Premium Action Pill */}
            <div className="shrink-0 flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 bg-white group-hover:bg-slate-900 group-hover:text-white px-3 py-2 rounded-xl border border-slate-200 group-hover:border-slate-900 transition-all">
              <span className="hidden xs:inline">Store</span>
              <ExternalLink size={14} />
            </div>
          </a>

        </div>

        {/* 3. Horizontal 4-Stat Metric Row with Accent Lines */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {OFFICIAL_STATS.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 hover:border-[#007CC2] p-5 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between group before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-[#007CC2] before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f0f8fc] border border-[#bde2f5] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#007CC2] transition-colors">
                    {item.value}
                  </span>
                </div>

                <h4 className="font-extrabold text-sm text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.subtitle}
                </p>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#007CC2]">
                <CheckCircle2 size={12} />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
