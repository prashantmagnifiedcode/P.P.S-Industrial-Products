import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  TableProperties,
  FileSpreadsheet
} from 'lucide-react';
import { CUTTING_INSERTS, ISO_MATERIALS_MAP } from '@/data/insertsData';

// Showcase authentic Lexustec insert photography across major CNC operations
const FEATURED_CODES = ['LT134', 'LT041', 'LT069', 'LT009', 'LT281', 'LT085'];

export default function CuttingInsertsHomeSection() {
  const featuredInserts = FEATURED_CODES.map(code =>
    CUTTING_INSERTS.find(item => item.orderCode === code)
  ).filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-[#bde2f5]/80 relative overflow-hidden" id="cutting-inserts">

      {/* Precision Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#007CC20a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,124,194,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Header with Trust Badge & Headline */}
        <div className="space-y-3 max-w-3xl text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#007CC2] animate-pulse" />
            <span>ISO Certified Cutting Insert Inventory • Gurugram Depot</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Carbide &amp; Ceramic <span className="bg-gradient-to-r from-[#007CC2] via-[#006aa6] to-[#004f7c] bg-clip-text text-transparent">Cutting Inserts</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Direct authorized inventory of precision ISO turning, 90° shoulder milling, double-ended parting &amp; threading inserts. Engineered with advanced CVD/PVD coatings for maximum tool life and chatter-free chip evacuation.
          </p>
        </div>

        {/* 2. Featured Inserts Showcase (Real Photos from Lexustec / PPS) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-12">
          {featuredInserts.map((insert) => (
            <Link
              key={insert.id}
              href={`/inserts?category=${insert.category}`}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Top Photo Stage with Image Hero */}
              <div className="relative aspect-square sm:aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-2 sm:p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                <Image
                  src={insert.image}
                  alt={insert.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 sm:p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Floating Shape & Category Pill */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center gap-1 pointer-events-none">
                  <span className="font-sans text-[10px] sm:text-xs font-extrabold px-1.5 sm:px-2.5 py-0.5 rounded-full bg-[#007CC2] text-white shadow-xs tracking-tight">
                    {insert.orderCode}
                  </span>
                  <span className="hidden sm:inline-block text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-white/90 text-slate-700 border border-slate-200 shadow-2xs backdrop-blur-xs">
                    {insert.categoryLabel}
                  </span>
                </div>

                {/* ISO Badges in Top Right */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex items-center gap-0.5 sm:gap-1 pointer-events-none">
                  {insert.isoMaterials.map(matCode => {
                    const mat = ISO_MATERIALS_MAP[matCode];
                    return (
                      <span
                        key={matCode}
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded sm:rounded-md flex items-center justify-center font-bold text-[9px] sm:text-xs shadow-xs ${mat.badgeBg} ${mat.badgeText}`}
                        title={`${mat.code} - ${mat.name}`}
                      >
                        {mat.code}
                      </span>
                    );
                  })}
                </div>

              </div>

              {/* Middle: Details & Technical Highlights */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-center">
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    <span className="text-[10px] sm:text-xs font-bold text-[#007CC2] uppercase tracking-wider truncate">
                      {insert.categoryLabel}
                    </span>
                    <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">
                      Grade: {insert.grade}
                    </span>
                  </div>

                  <h3 className="font-black text-xs sm:text-base sm:text-lg text-slate-900 group-hover:text-[#007CC2] transition-colors leading-snug line-clamp-2">
                    {insert.description}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 3. High-Converting VIEW MORE Callout Banner -> Navigates to /inserts Table */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-[#061e33] to-slate-950 p-6 sm:p-10 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#007CC2]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#38bdf8] text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                <FileSpreadsheet size={14} className="text-[#38bdf8]" />
                <span>Full Technical Specifications &amp; ISO Database</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Looking for the Complete <span className="text-[#38bdf8]">Cutting Inserts Table</span>?
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                Compare comprehensive speeds &amp; feeds, chipbreakers, dimensional tolerances, and ISO workpiece suitability in our interactive technical catalog. Fully optimized for desktop data comparison and mobile field reference.
              </p>

              {/* Quick Jump Category Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
                <Link
                  href="/inserts?category=turning"
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/10 transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>Turning (CNMG / WNMG / TNMG)</span>
                </Link>
                <Link
                  href="/inserts?category=milling"
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/10 transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>Milling (APMT / ONMU)</span>
                </Link>
                <Link
                  href="/inserts?category=grooving"
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/10 transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>Grooving (MGMN)</span>
                </Link>
                <Link
                  href="/inserts?category=threading"
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/10 transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>Threading (16ER)</span>
                </Link>
              </div>
            </div>

            {/* View More Primary Button */}
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/inserts"
                className="px-7 py-4 rounded-2xl bg-[#007CC2] hover:bg-[#0091e6] text-white font-black text-sm sm:text-base flex items-center gap-3 shadow-lg shadow-[#007CC2]/40 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <TableProperties size={20} className="group-hover:rotate-6 transition-transform" />
                <span>View Full Inserts Table</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
