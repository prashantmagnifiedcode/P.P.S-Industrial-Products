'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  badge: string;
  category: string;
  url: string;
  isExternal?: boolean;
  renderLogo: () => React.ReactNode;
}

const PARTNERS: Partner[] = [
  {
    id: 'lexustec',
    name: 'Lexustec Tools',
    badge: 'CNC Inserts',
    category: 'Turning & Milling Inserts',
    url: '#lexustec',
    isExternal: false,
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-11 px-2">
        <Image
          src="/lexustec-logo.png"
          alt="Lexustec Cutting Tools Official Logo"
          width={140}
          height={35}
          className="h-7 sm:h-8 w-auto object-contain max-w-[130px]"
        />
      </div>
    )
  },
  {
    id: 'hittco',
    name: 'Hittco Tools Ltd',
    badge: 'Solid Carbide',
    category: 'End Mills & Coolant Drills',
    url: '#hittco',
    isExternal: false,
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-11 px-2">
        <Image
          src="/hittco-logo.png"
          alt="Hittco Tools Ltd Original Logo"
          width={130}
          height={40}
          className="h-7 sm:h-8 w-auto object-contain max-w-[125px]"
        />
      </div>
    )
  },
  {
    id: 'union',
    name: 'Union Materials',
    badge: 'Ceramic & PCD',
    category: 'Hard Turning & Cast Iron',
    url: '/inserts?category=turning',
    isExternal: false,
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-11 px-1">
        <svg viewBox="0 0 200 48" className="h-7 sm:h-8 w-auto max-w-[130px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="18,6 30,13 30,27 18,34 6,27 6,13" stroke="#007CC2" strokeWidth="2.5" fill="#f0f8fc" />
          <circle cx="18" cy="20" r="4" fill="#007CC2" />
          <text x="38" y="24" fill="#0f172a" fontFamily="system-ui, -apple-system, sans-serif" fontSize="17" fontWeight="900" letterSpacing="1">
            UNION
          </text>
          <text x="39" y="37" fill="#007CC2" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="800" letterSpacing="2.2">
            MATERIALS
          </text>
        </svg>
      </div>
    )
  },
  {
    id: 'pferd',
    name: 'PFERD Germany',
    badge: 'German Burrs',
    category: 'Abrasives & Rotary Burrs',
    url: '#pferd',
    isExternal: false,
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-11 px-2">
        <Image
          src="/pferd-logo.svg"
          alt="PFERD TOOLS Germany"
          width={130}
          height={40}
          className="h-7 sm:h-8 w-auto object-contain max-w-[125px]"
        />
      </div>
    )
  },
  {
    id: 'gratex',
    name: 'CP GRAT-EX®',
    badge: 'Hole Deburring',
    category: 'Countersink & Deburring',
    url: '#products',
    isExternal: false,
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-11 px-2">
        <Image
          src="https://deburringtools.com/wp-content/uploads/2023/12/cp-gratex-logo.png"
          alt="CP GRAT-EX Deburring Tools"
          width={150}
          height={35}
          unoptimized
          className="h-7 sm:h-8 w-auto object-contain max-w-[135px]"
        />
      </div>
    )
  },
  {
    id: 'shaviv',
    name: 'Shaviv by Vargus',
    badge: 'Hand Tools',
    category: 'Precision Scraping Tools',
    url: 'https://www.vargus.com/en/product-lines/shaviv/',
    isExternal: true,
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-11 px-1">
        <svg viewBox="0 0 200 48" className="h-7 sm:h-8 w-auto max-w-[130px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 33 C10 23, 17 12, 28 8 C25 14, 21 21, 19 31 Z" fill="#007CC2" />
          <circle cx="28" cy="10" r="3" fill="#f59e0b" />
          <text x="38" y="24" fill="#0f172a" fontFamily="system-ui, -apple-system, sans-serif" fontSize="17" fontWeight="900" letterSpacing="1">
            SHAVIV
          </text>
          <text x="39" y="37" fill="#64748b" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7.5" fontWeight="800" letterSpacing="2">
            VARGUS ISRAEL
          </text>
        </svg>
      </div>
    )
  },
  {
    id: 'jaldhara',
    name: 'Jaldhara Small Tools',
    badge: 'Machine Blades',
    category: 'Shear Blades & Cutters',
    url: '#blades',
    isExternal: false,
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-11 px-2">
        <Image
          src="/jaldhara-logo.svg"
          alt="Jaldhara Small Tools Official Logo"
          width={160}
          height={35}
          className="h-7 sm:h-8 w-auto object-contain max-w-[135px]"
        />
      </div>
    )
  }
];

export default function PartnersSection() {
  return (
    <section className="py-7 sm:py-10 bg-white border-b border-slate-200" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Focused, Clean Section Header (No unnecessary clutter or badges) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8 pb-4 border-b border-slate-200/80">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#007CC2]" />
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 leading-none">
                Our Authorized Brand Partners
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-medium pl-4.5">
              Direct OEM technical distribution &amp; certified industrial lines
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Authorized Stockist Network</span>
          </div>
        </div>

        {/* Clean, Focused Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {PARTNERS.map((partner, idx) => (
            <a
              key={partner.id}
              href={partner.url}
              target={partner.isExternal ? '_blank' : undefined}
              rel={partner.isExternal ? 'noopener noreferrer' : undefined}
              className={`group bg-white rounded-2xl border border-slate-200 hover:border-[#007CC2]/60 p-3 sm:p-4 flex flex-col justify-between items-center text-center shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${
                idx === 6 ? 'col-span-2 sm:col-span-1' : ''
              }`}
              title={`Explore ${partner.name}`}
            >
              {/* Subtle Brand Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#007CC2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Focus Tag */}
              <div className="w-full flex justify-center mb-1">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#f0f8fc] group-hover:text-[#007CC2] transition-colors border border-slate-200/60">
                  {partner.badge}
                </span>
              </div>

              {/* Dedicated Logo Stage with Smooth Scale-Up Animation */}
              <div className="w-full h-14 sm:h-16 flex items-center justify-center my-1.5 transform transition-transform duration-300 ease-out group-hover:scale-108 origin-center">
                {partner.renderLogo()}
              </div>

              {/* Brand Info & Category Specialization */}
              <div className="w-full pt-2 border-t border-slate-100 space-y-0.5">
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 group-hover:text-[#007CC2] transition-colors truncate">
                  {partner.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 truncate">
                  {partner.category}
                </p>
                <div className="pt-1 flex items-center justify-center gap-1 text-[10px] font-bold text-[#007CC2] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>{partner.isExternal ? 'Official Site' : 'Explore Tooling'}</span>
                  {partner.isExternal ? (
                    <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  ) : (
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
