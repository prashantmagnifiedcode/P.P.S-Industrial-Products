'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, MessageCircle } from 'lucide-react';

interface HittcoProduct {
  id: string;
  name: string;
  category: string;
  badge: string;
  spec: string;
  image: string;
  whatsappMessage: string;
}

const HITTCO_PRODUCTS: HittcoProduct[] = [
  {
    id: 'HITTCO-CARBIDE-END-MILL',
    name: 'Solid Carbide 4-Flute AlTiN Coated End Mills',
    category: 'End Mills',
    badge: '4-Flute AlTiN',
    spec: 'Micrograin Carbide',
    image: '/hittco/carbide-end-mill.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco Solid Carbide 4-Flute End Mills.'
  },
  {
    id: 'HITTCO-COOLANT-DRILL',
    name: 'Solid Carbide Internal Coolant Twist Drills (5xD / 8xD)',
    category: 'Coolant Drills',
    badge: 'Thru-Coolant',
    spec: '5xD / 8xD DIN 6537',
    image: '/hittco/coolant-drill.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco Solid Carbide Coolant Drills.'
  },
  {
    id: 'HITTCO-CARBIDE-REAMER',
    name: 'Solid Carbide Precision Machine Reamers (H7 Tolerance)',
    category: 'Machine Reamers',
    badge: 'H7 Reamer',
    spec: 'DIN 212 / 8093',
    image: '/hittco/carbide-reamer.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco Solid Carbide Machine Reamers.'
  },
  {
    id: 'HITTCO-JOBBER-DRILL',
    name: 'HSS-Co M35 5% Cobalt Heavy-Duty Jobber Drills',
    category: 'HSS Drills',
    badge: 'HSS-Co M35',
    spec: 'DIN 338 135° Split',
    image: '/hittco/jobber-drill.png',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco HSS-Co M35 Jobber Drills.'
  },
  {
    id: 'HITTCO-CENTER-DRILL',
    name: 'HSS 60° Precision Center & Starter Drills (BS Series)',
    category: 'Center Drills',
    badge: '60° Form A',
    spec: 'BS 328 / DIN 333',
    image: '/hittco/center-drill.png',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco HSS 60° Center Drills.'
  },
  {
    id: 'HITTCO-TOOL-BIT',
    name: 'HSS M42 8% Cobalt Ground Lathe Tool Bits',
    category: 'Tool Bits',
    badge: 'HSS M42 8% Co',
    spec: '67–69 HRC Ground',
    image: '/hittco/tool-bit.png',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco HSS M42 Cobalt Tool Bits.'
  }
];

export default function HittcoSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 pb-16 sm:pb-20" id="hittco">
      
      {/* Signature Primary Brand Blue Stage */}
      <div className="relative w-full h-auto min-h-[440px] sm:min-h-0 sm:h-[450px] lg:h-[480px] bg-[#007CC2] overflow-hidden flex flex-col justify-center py-10 sm:py-0">
        
        {/* Crisp Background Metallic Tool Stage Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hittco-banner.jpg"
            alt="Hittco Tools Solid Carbide & HSS Cutting Tools"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25 mix-blend-overlay"
            priority
          />
          {/* Deep Primary Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005e94] via-[#007CC2] to-[#005282] opacity-90" />
          {/* Ambient High-Tech White/Cyan Glow focused behind Hittco Emblem */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_rgba(255,255,255,0.22),_rgba(0,0,0,0)_70%)]" />
        </div>

        {/* Brand Banner Content & Official Logo */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pt-4 sm:pt-0 pb-10 sm:pb-28">
          
          {/* Official HITTCO Original Logo directly on stage (no white box) */}
          <div className="inline-flex items-center justify-center pt-2">
            <a
              href="https://hittco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105 duration-300 py-1"
              title="Visit Hittco Tools Ltd (hittco.com)"
            >
              <Image
                src="/hittco-logo-white.png"
                alt="Hittco Tools Ltd Official Logo (hittco.com)"
                width={300}
                height={100}
                priority
                className="h-10 sm:h-16 w-auto object-contain drop-shadow-[0_4px_25px_rgba(0,0,0,0.35)]"
              />
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight uppercase">
              PRECISION <span className="text-[#dbeafe] drop-shadow-xs">HSS &amp; CARBIDE TOOLS</span>
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Authorized direct distributor &amp; stockist for <strong className="text-white font-semibold">Hittco Tools Ltd</strong> — premium Indian manufacturer since 1974 delivering solid carbide end mills, coolant drills, precision reamers, and HSS-Co tooling.
            </p>
          </div>

          {/* High-Contrast Glassmorphic Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href="https://hittco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md border border-white/25 hover:border-white/40 backdrop-blur-md transition-all active:scale-95"
            >
              <span>Visit hittco.com</span>
              <ExternalLink size={13} className="text-white" />
            </a>

            <a
              href="https://www.indiamart.com/pps-industrialproducts/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md border border-white/25 hover:border-white/40 backdrop-blur-md transition-all active:scale-95"
            >
              <div className="bg-white rounded-md px-1.5 py-0.5 flex items-center justify-center">
                <Image
                  src="/indiamart-logo.png"
                  alt="IndiaMART"
                  width={18}
                  height={13}
                  className="h-3 w-auto object-contain"
                />
              </div>
              <span>Hittco on IndiaMART</span>
            </a>

            <a
              href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20I%20would%20like%20to%20inquire%20about%20Hittco%20cutting%20tools."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-white text-[#007CC2] hover:bg-slate-100 font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle size={15} className="fill-current" />
              <span>WhatsApp Tooling Desk</span>
            </a>
          </div>
        </div>

        {/* Soft Transparent Bottom Gradient Fade to White Page */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-44 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* Overlapping Hittco Product Cards: Styled matching Carbide & Ceramic Cutting Inserts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:-mt-20 lg:-mt-24 relative z-20">
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {HITTCO_PRODUCTS.map((prod) => (
            <a
              key={prod.id}
              href={`https://wa.me/919350509134?text=${encodeURIComponent(prod.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              title={`Inquire about ${prod.name}`}
            >
              {/* Top Photo Stage with Image Hero */}
              <div className="relative aspect-square sm:aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-2 sm:p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 sm:p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Floating Shape & Category Pill */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center gap-1 pointer-events-none">
                  <span className="font-sans text-[10px] sm:text-xs font-extrabold px-1.5 sm:px-2.5 py-0.5 rounded-full bg-[#007CC2] text-white shadow-xs tracking-tight">
                    {prod.badge}
                  </span>
                  <span className="hidden sm:inline-block text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-white/90 text-slate-700 border border-slate-200 shadow-2xs backdrop-blur-xs">
                    {prod.category}
                  </span>
                </div>
              </div>

              {/* Middle: Details & Technical Highlights */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    <span className="text-[10px] sm:text-xs font-bold text-[#007CC2] uppercase tracking-wider truncate">
                      {prod.category}
                    </span>
                    <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">
                      {prod.spec}
                    </span>
                  </div>

                  <h3 className="font-black text-xs sm:text-base sm:text-lg text-slate-900 group-hover:text-[#007CC2] transition-colors leading-snug line-clamp-2">
                    {prod.name}
                  </h3>
                </div>

                {/* Direct WhatsApp Action Button in Professional Slate/Gray */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-slate-500 hidden sm:inline-flex items-center gap-1">
                    Hittco India
                  </span>
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-200 text-[10px] sm:text-xs font-bold ml-auto shadow-2xs">
                    <MessageCircle size={12} className="text-slate-500 group-hover:text-white transition-colors" />
                    <span>Inquire on WhatsApp</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
