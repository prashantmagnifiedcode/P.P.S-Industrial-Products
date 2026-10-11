'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, MessageCircle } from 'lucide-react';

interface LexustecProduct {
  id: string;
  name: string;
  image: string;
  whatsappMessage: string;
}

const LEXUSTEC_PRODUCTS: LexustecProduct[] = [
  {
    id: 'LEXUSTEC-CNMG-120408',
    name: 'CNMG 120408 CVD Diamond Turning Inserts',
    image: '/lexustec/cnmg-turning.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec CNMG 120408 Turning Inserts.'
  },
  {
    id: 'LEXUSTEC-WNMG-080408',
    name: 'WNMG 080408 Trigon 80° Heavy Turning Inserts',
    image: '/lexustec/wnmg-trigon.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec WNMG 080408 Trigon Inserts.'
  },
  {
    id: 'LEXUSTEC-APMT-1604',
    name: 'APMT 1604 PVD Nano-Coated Shoulder Milling Inserts',
    image: '/lexustec/apmt-milling.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec APMT 1604 Milling Inserts.'
  },
  {
    id: 'LEXUSTEC-MGMN-300',
    name: 'MGMN 300 Double-Ended Grooving & Parting Inserts',
    image: '/lexustec/mgmn-grooving.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec MGMN 300 Grooving Inserts.'
  },
  {
    id: 'LEXUSTEC-16ER-250',
    name: '16ER 2.50 ISO LT2527 Precision CNC Threading Inserts',
    image: '/lexustec/lexustec-16er-actual.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec 16ER 2.50 ISO LT2527 Threading Inserts.'
  },
  {
    id: 'LEXUSTEC-ENDMILLS-4FL',
    name: 'Solid Carbide 4-Flute Nano-Coated End Mills',
    image: '/lexustec/lexustec-endmills-actual.jpg',
    whatsappMessage: 'Hi P.P.S Industrial, please share quotation for Lexustec Solid Carbide 4-Flute Nano-Coated End Mills.'
  }
];

export default function LexustecSection() {
  return (
    <section className="w-full bg-white border-b border-[#bde2f5] pb-16 sm:pb-20" id="lexustec">
      
      {/* Clean Deep Black Stage */}
      <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] bg-black overflow-hidden border-y border-slate-900 flex items-center justify-center">
        
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pb-20 sm:pb-28">
          
          {/* Official LEXUSTEC Original Logo directly on stage (no white box) */}
          <div className="inline-flex items-center justify-center pt-2">
            <a
              href="https://lexustec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105 duration-300 py-1"
              title="Visit Lexustec Cutting Tools (lexustec.com)"
            >
              <Image
                src="/lexustec-logo.png"
                alt="Lexustec Cutting Tools (lexustec.com)"
                width={280}
                height={90}
                priority
                className="h-12 sm:h-16 w-auto object-contain drop-shadow-[0_4px_25px_rgba(0,124,194,0.5)]"
              />
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight uppercase">
              HIGH-PERFORMANCE <span className="bg-gradient-to-r from-[#38bdf8] via-[#00a3ff] to-[#60a5fa] bg-clip-text text-transparent">CARBIDE INSERTS</span>
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Authorized primary distributor &amp; direct stockist for <strong className="text-white font-semibold">Lexustec Cutting Tools</strong> — precision ISO turning, 90° shoulder milling, grooving, parting-off, and threading inserts engineered for high-efficiency CNC production.
            </p>
          </div>

          {/* High-Contrast Glassmorphic Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href="https://lexustec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md border border-white/20 hover:border-white/40 backdrop-blur-md transition-all active:scale-95"
            >
              <span>Visit lexustec.com</span>
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
              <span>Lexustec on IndiaMART</span>
            </a>

            <a
              href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20I%20would%20like%20to%20inquire%20about%20Lexustec%20carbide%20inserts."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-[#007CC2]/40 transition-all active:scale-95"
            >
              <MessageCircle size={15} className="fill-current" />
              <span>WhatsApp Carbide Desk</span>
            </a>
          </div>
        </div>

        {/* Soft Transparent Bottom Gradient Fade to White Page */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* Overlapping Lexustec Product Cards: Contains Image, on Hover Shows Just Name */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 lg:-mt-28 relative z-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {LEXUSTEC_PRODUCTS.map((prod) => (
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
