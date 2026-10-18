'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, MessageCircle } from 'lucide-react';

interface LexustecProduct {
  id: string;
  name: string;
  category: string;
  badge: string;
  spec: string;
  image: string;
  whatsappMessage: string;
}

const LEXUSTEC_PRODUCTS: LexustecProduct[] = [
  {
    id: 'LEXUSTEC-CNMG-120408',
    name: 'CNMG 120408 CVD Diamond Turning Inserts',
    category: 'Turning',
    badge: 'CNMG 120408',
    spec: 'Grade LT1000',
    image: '/lexustec/cnmg-turning.png',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec CNMG 120408 Turning Inserts.'
  },
  {
    id: 'LEXUSTEC-WNMG-080408',
    name: 'WNMG 080408 Trigon 80° Heavy Turning Inserts',
    category: 'Turning',
    badge: 'WNMG 080408',
    spec: 'Grade LT1000',
    image: '/lexustec/wnmg-trigon.webp',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec WNMG 080408 Trigon Inserts.'
  },
  {
    id: 'LEXUSTEC-APMT-1604',
    name: 'APMT 1604 PVD Nano-Coated Shoulder Milling Inserts',
    category: 'Milling',
    badge: 'APMT 1604',
    spec: 'Grade LT3000',
    image: '/lexustec/apmt-milling.png',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec APMT 1604 Milling Inserts.'
  },
  {
    id: 'LEXUSTEC-MGMN-300',
    name: 'MGMN 300 Double-Ended Grooving & Parting Inserts',
    category: 'Parting-Off',
    badge: 'MGMN 300',
    spec: 'Grade LT10',
    image: '/lexustec/mgmn-grooving.png',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec MGMN 300 Grooving Inserts.'
  },
  {
    id: 'LEXUSTEC-16ER-250',
    name: '16ER 2.50 ISO LT2527 Precision CNC Threading Inserts',
    category: 'Threading',
    badge: '16ER 2.50',
    spec: 'Grade LT2527',
    image: '/lexustec/16er-threading.webp',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec 16ER 2.50 ISO LT2527 Threading Inserts.'
  },
  {
    id: 'LEXUSTEC-ENDMILLS-4FL',
    name: 'Solid Carbide 4-Flute Nano-Coated End Mills',
    category: 'Solid Carbide',
    badge: '4-Flute',
    spec: 'AlTiN 55 HRC',
    image: '/lexustec/lexustec-endmills-actual.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec Solid Carbide 4-Flute Nano-Coated End Mills.'
  }
];

export default function LexustecSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 pb-16 sm:pb-20" id="lexustec">
      
      {/* Clean Deep Black Stage - No black border line */}
      <div className="relative w-full h-auto min-h-[440px] sm:min-h-0 sm:h-[450px] lg:h-[480px] bg-black overflow-hidden flex flex-col justify-center py-10 sm:py-0">
        
        {/* Crisp Background Metallic Tool Stage Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/lexustec-banner.jpg"
            alt="Lexustec Carbide Turning & Milling Inserts"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
          {/* Deep Clean Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#080d16] to-black" />
          {/* Ambient High-Tech Cyan Glow focused behind Lexustec Emblem */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_rgba(0,124,194,0.28),_rgba(0,0,0,0)_70%)]" />
        </div>

        {/* Brand Banner Content & Official Logo */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-4 pt-4 sm:pt-0 pb-10 sm:pb-28">
          
          {/* Official LEXUSTEC Original Logo directly on stage (no white box) */}
          <div className="inline-flex items-center justify-center pt-1">
            <a
              href="https://lexustec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105 duration-300 py-1"
              title="Visit Lexustec Cutting Tools (lexustec.com)"
            >
              <Image
                src="/lexustec-logo-white.png"
                alt="Lexustec Cutting Tools (lexustec.com)"
                width={280}
                height={90}
                priority
                className="h-9 sm:h-14 w-auto object-contain drop-shadow-[0_4px_25px_rgba(0,124,194,0.5)]"
              />
            </a>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight uppercase">
              HIGH-PERFORMANCE <span className="bg-gradient-to-r from-[#38bdf8] via-[#00a3ff] to-[#60a5fa] bg-clip-text text-transparent">CARBIDE INSERTS</span>
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
              Authorized primary distributor &amp; direct stockist for <strong className="text-white font-semibold">Lexustec Cutting Tools</strong> — precision ISO turning, 90° shoulder milling, grooving, parting-off, and threading inserts engineered for high-efficiency CNC production.
            </p>
          </div>

          {/* High-Contrast Glassmorphic Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            <a
              href="https://lexustec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md border border-white/20 hover:border-white/40 backdrop-blur-md transition-all active:scale-95"
            >
              <span>Visit lexustec.com</span>
              <ExternalLink size={13} className="text-[#38bdf8]" />
            </a>

            <a
              href="https://www.indiamart.com/pps-industrialproducts/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md border border-white/20 hover:border-white/40 backdrop-blur-md transition-all active:scale-95"
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
              <span>Lexustec on IndiaMART</span>
            </a>

            <a
              href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20I%20would%20like%20to%20inquire%20about%20Lexustec%20carbide%20inserts."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-[#007CC2]/40 transition-all active:scale-95"
            >
              <MessageCircle size={14} className="fill-current" />
              <span>WhatsApp Carbide Desk</span>
            </a>
          </div>
        </div>

        {/* Soft Transparent Bottom Gradient Fade to White Page */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-44 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* Overlapping Lexustec Product Cards: Styled matching Carbide & Ceramic Cutting Inserts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:-mt-20 lg:-mt-24 relative z-20">
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {LEXUSTEC_PRODUCTS.map((prod) => (
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
                    Lexustec Tools
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
