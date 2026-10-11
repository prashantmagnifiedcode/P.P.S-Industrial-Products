'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, MessageCircle } from 'lucide-react';

interface HittcoProduct {
  id: string;
  name: string;
  image: string;
  whatsappMessage: string;
}

const HITTCO_PRODUCTS: HittcoProduct[] = [
  {
    id: 'HITTCO-CARBIDE-END-MILL',
    name: 'Solid Carbide 4-Flute AlTiN Coated End Mills',
    image: '/hittco/carbide-end-mill.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco Solid Carbide 4-Flute End Mills.'
  },
  {
    id: 'HITTCO-COOLANT-DRILL',
    name: 'Solid Carbide Internal Coolant Twist Drills (5xD / 8xD)',
    image: '/hittco/coolant-drill.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco Solid Carbide Coolant Drills.'
  },
  {
    id: 'HITTCO-CARBIDE-REAMER',
    name: 'Solid Carbide Precision Machine Reamers (H7 Tolerance)',
    image: '/hittco/carbide-reamer.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco Solid Carbide Machine Reamers.'
  },
  {
    id: 'HITTCO-JOBBER-DRILL',
    name: 'HSS-Co M35 5% Cobalt Heavy-Duty Jobber Drills',
    image: '/hittco/jobber-drill.png',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco HSS-Co M35 Jobber Drills.'
  },
  {
    id: 'HITTCO-CENTER-DRILL',
    name: 'HSS 60° Precision Center & Starter Drills (BS Series)',
    image: '/hittco/center-drill.png',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco HSS 60° Center Drills.'
  },
  {
    id: 'HITTCO-TOOL-BIT',
    name: 'HSS M42 8% Cobalt Ground Lathe Tool Bits',
    image: '/hittco/tool-bit.png',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Hittco HSS M42 Cobalt Tool Bits.'
  }
];

export default function HittcoSection() {
  return (
    <section className="w-full bg-white border-b border-[#bde2f5] pb-16 sm:pb-20" id="hittco">
      
      {/* Clean Deep Black Stage */}
      <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] bg-black overflow-hidden border-y border-slate-900 flex items-center justify-center">
        
        {/* Crisp Background Metallic Tool Stage Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hittco-banner.jpg"
            alt="Hittco Tools Solid Carbide & HSS Cutting Tools"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
          {/* Deep Clean Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#080d16] to-black" />
          {/* Ambient High-Tech Cyan Glow focused behind Hittco Emblem */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_rgba(0,124,194,0.28),_rgba(0,0,0,0)_70%)]" />
        </div>

        {/* Brand Banner Content & Official Logo */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pb-20 sm:pb-28">
          
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
                src="/hittco-logo.png"
                alt="Hittco Tools Ltd Official Logo (hittco.com)"
                width={300}
                height={100}
                priority
                className="h-12 sm:h-16 w-auto object-contain drop-shadow-[0_4px_25px_rgba(0,124,194,0.5)]"
              />
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight uppercase">
              PRECISION <span className="bg-gradient-to-r from-[#38bdf8] via-[#00a3ff] to-[#60a5fa] bg-clip-text text-transparent">HSS &amp; CARBIDE TOOLS</span>
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Authorized direct distributor &amp; stockist for <strong className="text-white font-semibold">Hittco Tools Ltd</strong> — premium Indian manufacturer since 1974 delivering solid carbide end mills, coolant drills, precision reamers, and HSS-Co tooling.
            </p>
          </div>

          {/* High-Contrast Glassmorphic Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href="https://hittco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md border border-white/20 hover:border-white/40 backdrop-blur-md transition-all active:scale-95"
            >
              <span>Visit hittco.com</span>
              <ExternalLink size={13} className="text-[#38bdf8]" />
            </a>

            <a
              href="https://www.indiamart.com/pps-industrialproducts/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md border border-white/20 hover:border-white/40 backdrop-blur-md transition-all active:scale-95"
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
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-[#007CC2]/40 transition-all active:scale-95"
            >
              <MessageCircle size={15} className="fill-current" />
              <span>WhatsApp Tooling Desk</span>
            </a>
          </div>
        </div>

        {/* Soft Transparent Bottom Gradient Fade to White Page */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* Overlapping Hittco Product Cards: Contains Image, on Hover Shows Just Name */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 lg:-mt-28 relative z-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {HITTCO_PRODUCTS.map((prod) => (
            <a
              key={prod.id}
              href={`https://wa.me/919350509134?text=${encodeURIComponent(prod.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-3xl overflow-hidden bg-white border-2 border-[#bde2f5] hover:border-[#007CC2] shadow-md hover:shadow-2xl transition-all duration-500 group h-64 sm:h-72 lg:h-80 flex items-center justify-center p-6 sm:p-8 cursor-pointer active:scale-[0.98]"
              title={`Inquire about ${prod.name}`}
            >
              {/* Product Image Stage */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* On Hover: Smooth Brand Blue Overlay Showing JUST the Name of Product */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#007CC2]/95 via-[#007CC2]/85 to-[#007CC2]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-2xs">
                <h4 className="text-base sm:text-lg lg:text-xl font-black text-white leading-snug tracking-tight drop-shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {prod.name}
                </h4>
                
                <span className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#007CC2] font-bold text-xs shadow-xs transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <MessageCircle size={13} className="fill-current" />
                  <span>Inquire on WhatsApp</span>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
