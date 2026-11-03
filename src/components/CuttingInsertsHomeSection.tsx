import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CUTTING_INSERTS, ISO_MATERIALS_MAP } from '@/data/insertsData';

// Showcase authentic Lexustec insert photography across major CNC operations
const FEATURED_CODES = ['LT134', 'LT041', 'LT069', 'LT009', 'LT281', 'LT085'];

export default function CuttingInsertsHomeSection() {
  const featuredInserts = FEATURED_CODES.map(code =>
    CUTTING_INSERTS.find(item => item.orderCode === code)
  ).filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden" id="cutting-inserts">

      {/* Precision Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#007CC20a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,124,194,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Header & Headline */}
        <div className="space-y-3 max-w-3xl text-left mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Carbide &amp; Ceramic <span className="bg-gradient-to-r from-[#007CC2] via-[#006aa6] to-[#004f7c] bg-clip-text text-transparent">Cutting Inserts</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Direct authorized inventory of precision ISO turning, 90° shoulder milling, double-ended parting &amp; threading inserts. Engineered with advanced CVD/PVD coatings for maximum tool life and chatter-free chip evacuation.
          </p>
        </div>

        {/* 2. Featured Inserts Showcase (Real Photos from Lexustec / PPS) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
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

      </div>
    </section>
  );
}
