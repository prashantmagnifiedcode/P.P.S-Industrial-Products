'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  category: string;
  url: string;
  renderLogo: () => React.ReactNode;
}

const PARTNERS: Partner[] = [
  {
    id: 'lexustec',
    name: 'Lexustec Cutting Tools',
    category: 'Carbide Turning & Milling',
    url: 'https://lexustec.com/',
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-10 px-2">
        <Image
          src="/lexustec-logo.png"
          alt="Lexustec Cutting Tools Official Logo"
          width={140}
          height={35}
          className="h-7 w-auto object-contain rounded-xs shadow-2xs max-w-[140px]"
        />
      </div>
    )
  },
  {
    id: 'hittco',
    name: 'Hittco Tools',
    category: 'Solid Drills & Reamers',
    url: 'https://hittco.com/',
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-10 px-2">
        <Image
          src="/hittco-logo.png"
          alt="Hittco Tools Ltd Original Logo"
          width={130}
          height={40}
          className="h-7 w-auto object-contain max-w-[130px]"
        />
      </div>
    )
  },
  {
    id: 'union',
    name: 'Union Material',
    category: 'Ceramic & Superhard Inserts',
    url: 'https://www.unionmaterials.com/eng/html/main.html',
    renderLogo: () => (
      <svg viewBox="0 0 200 50" className="w-full h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="20,6 34,14 34,30 20,38 6,30 6,14" stroke="#007CC2" strokeWidth="2.5" fill="#f0f8fc" />
        <circle cx="20" cy="22" r="4.5" fill="#007CC2" />
        <text x="42" y="28" fill="#0f172a" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="900" letterSpacing="1">
          UNION
        </text>
        <text x="43" y="41" fill="#007CC2" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="800" letterSpacing="2.5">
          MATERIAL
        </text>
      </svg>
    )
  },
  {
    id: 'pferd',
    name: 'PFERD Germany',
    category: 'German Abrasives & Burrs',
    url: 'https://se.pferd.com/',
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-10 px-2">
        <Image
          src="/pferd-logo.svg"
          alt="PFERD TOOLS Germany"
          width={130}
          height={40}
          className="h-7 w-auto object-contain max-w-[130px]"
        />
      </div>
    )
  },
  {
    id: 'gratex',
    name: 'CP Grat-Ex',
    category: 'Hole Deburring Tools',
    url: 'https://deburringtools.com/',
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-10 px-2">
        <Image
          src="https://deburringtools.com/wp-content/uploads/2023/12/cp-gratex-logo.png"
          alt="CP GRAT-EX Deburring Tools"
          width={150}
          height={35}
          unoptimized
          className="h-7 w-auto object-contain max-w-[150px]"
        />
      </div>
    )
  },
  {
    id: 'shaviv',
    name: 'Shaviv by Vargus',
    category: 'Precision Hand Tools',
    url: 'https://www.vargus.com/en/product-lines/shaviv/',
    renderLogo: () => (
      <svg viewBox="0 0 200 50" className="w-full h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 35 C10 24, 18 12, 30 8 C27 14, 22 22, 20 33 Z" fill="#007CC2" />
        <circle cx="30" cy="10" r="3" fill="#f59e0b" />
        <text x="40" y="28" fill="#0f172a" fontFamily="system-ui, -apple-system, sans-serif" fontSize="19" fontWeight="900" letterSpacing="1">
          SHAVIV
        </text>
        <text x="41" y="41" fill="#64748b" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7.5" fontWeight="800" letterSpacing="2">
          VARGUS ISRAEL
        </text>
      </svg>
    )
  },
  {
    id: 'jaldhara',
    name: 'Jaldhara Small Tools',
    category: 'Industrial Blades & Cutters',
    url: 'https://www.jaldharatools.com/',
    renderLogo: () => (
      <div className="flex items-center justify-center w-full h-10 px-1 text-center">
        <span className="text-[12px] font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#007CC2] transition-colors">
          JALDHARA SMALL TOOLS PVT. LTD.
        </span>
      </div>
    )
  }
];

export default function PartnersSection() {
  return (
    <section className="py-8 sm:py-10 bg-white border-b border-slate-200" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal, High-Impact Section Label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-9 pb-4 sm:pb-5 border-b border-slate-200/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#007CC2] shrink-0" />
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 leading-snug">
              Our Authorized Brand Partners
            </h2>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#007CC2] bg-[#f0f8fc] px-3 py-1 rounded-full border border-[#007CC2]/15 self-start sm:self-auto leading-normal">
            <ShieldCheck size={14} className="stroke-[2.5] shrink-0" />
            <span>100% Genuine Factory Sourcing • Gurugram Depot Stock</span>
          </div>
        </div>

        {/* Clean, Focused Logo Grid (At a Single Glance) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {PARTNERS.map(partner => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-50/70 hover:bg-[#f0f8fc] border border-slate-200/80 hover:border-[#007CC2] transition-all duration-300 flex flex-col justify-between items-center text-center group hover:shadow-lg hover:-translate-y-1"
              title={`Visit ${partner.name}`}
            >
              {/* Prominent Logo with Smooth Scale-Up Animation */}
              <div className="w-full h-12 flex items-center justify-center transform transition-transform duration-300 ease-out group-hover:scale-112 origin-center">
                {partner.renderLogo()}
              </div>

              {/* Minimal Product Category Tag */}
              <div className="w-full pt-2 mt-1 border-t border-slate-200/60">
                <span className="text-[10px] font-extrabold text-slate-600 group-hover:text-[#007CC2] transition-colors truncate block">
                  {partner.category}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
