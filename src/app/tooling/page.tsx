'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Search,
  ArrowRight,
  Sparkles,
  Phone,
  Package,
  Wrench,
  Cpu,
  Layers,
  Send,
  CheckCircle2,
  TableProperties
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RfqModal from '@/components/RfqModal';
import Toast from '@/components/Toast';
import { TOOLING_CATEGORIES } from '@/data/toolingData';
import { useRfq } from '@/context/RfqContext';

export default function ToolingOverviewPage() {
  const { openRfqModal } = useRfq();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Object.values(TOOLING_CATEGORIES);

  const filteredCategories = categories.filter((cat) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      cat.titlePrefix.toLowerCase().includes(q) ||
      cat.titleHighlight.toLowerCase().includes(q) ||
      cat.categoryLabel.toLowerCase().includes(q) ||
      cat.subtitle.toLowerCase().includes(q) ||
      cat.popularStandards.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#007CC2]/20 selection:text-[#007CC2]">
      {/* 1. Permanently Fixed TopBar + Header */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-sm">
        <TopBar />
        <Header />
      </div>

      {/* 2. Main Page Content Canvas */}
      <div className="pt-[80px] sm:pt-[124px] md:pt-[172px] lg:pt-[176px] flex-1 flex flex-col font-sans">

        {/* Page Breadcrumbs Bar */}
        <div className="bg-white border-b border-slate-200 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-[#007CC2] transition-colors flex items-center gap-1">
                <span>Home</span>
              </Link>
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-[#007CC2] font-bold">Industrial Tooling Systems Catalog</span>
            </div>
          </div>
        </div>

        {/* Hero Banner: Centered Text layout like the Inserts page */}
        <section className="relative text-white border-b border-slate-800 pt-14 sm:pt-18 lg:pt-22 pb-4 sm:pb-5 overflow-hidden bg-slate-950 flex flex-col justify-end min-h-[280px] sm:min-h-[330px] lg:min-h-[360px]">
          {/* Authentic Tooling Background Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/collet-milling.jpg"
              alt="Industrial Tooling Systems PPS"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-80 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-slate-950/45" />
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-slate-950/70 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(#007CC220_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-30" />
          </div>

          <div className="absolute -top-32 right-12 w-[480px] h-[480px] bg-[#007CC2]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-10 w-[360px] h-[360px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Centered Section Title */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-end items-center gap-5 sm:gap-6">
            <div className="text-center mx-auto max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={12} className="text-cyan-300" />
                <span>Sector 5 Gurugram Central Depot Stock</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)]">
                Industrial <span className="bg-gradient-to-r from-[#38bdf8] via-[#00a3ff] to-cyan-300 bg-clip-text text-transparent">Tooling</span>
              </h1>

              <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto font-normal drop-shadow-md leading-relaxed">
                Comprehensive inventory of ISO turning inserts, carbide boring bars, high-feed face mills, solid end mills, and precision CNC spindle toolholding systems.
              </p>
            </div>

            {/* Horizontal Line Divider */}
            <div className="w-full border-t border-white/20 pt-4 sm:pt-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
                <div className="flex flex-wrap items-center sm:items-end justify-center sm:justify-start gap-2 text-xs font-sans">
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-wider mr-1 drop-shadow-sm pb-1 sm:pb-0.5">
                    Popular Categories:
                  </span>
                  {['TNMG Inserts', 'APMT Face Mills', 'ER32 Collets', 'BT40 Chucks', 'Solid Carbide'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSearchQuery(item.split(' ')[0])}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/65 hover:bg-[#007CC2] text-slate-200 hover:text-white border border-white/15 hover:border-[#007CC2] text-xs font-bold tracking-tight transition-all backdrop-blur-md shadow-xs active:scale-95"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <Link
                  href="/inserts"
                  className="px-4 py-2 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-[#007CC2]/30 transition-all hover:scale-105 active:scale-95 shrink-0"
                >
                  <TableProperties size={13} />
                  <span>View 500+ Inserts Table</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Depot Logistics Notification Strip */}
        <div className="bg-[#f0f8fc] border-b border-[#bde2f5] py-2.5 px-4 text-xs text-slate-700">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-900">
                Authorized Master Stockist:
              </span>
              <span className="text-slate-600">
                12 core tooling categories with live express stock dispatch Pan India.
              </span>
            </div>
            <a
              href="tel:+919350509134"
              className="font-bold text-[#007CC2] hover:text-[#005688] flex items-center gap-1 shrink-0"
            >
              <Phone size={12} />
              <span>Emergency Dispatch: +91 93505 09134</span>
            </a>
          </div>
        </div>

        {/* 4. Search and Tooling Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">

          {/* Search bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search tooling by name, ISO standard, or holder type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#007CC2] bg-white"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Tooling Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/tooling/${cat.slug}`}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#007CC2] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo Stage */}
                <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
                  <Image
                    src={cat.heroImage}
                    alt={cat.titlePrefix}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#007CC2] text-white shadow-xs">
                      {cat.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-black text-lg text-white">
                      {cat.titlePrefix} {cat.titleHighlight}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {cat.subtitle}
                    </p>

                    {/* Popular Standards */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cat.popularStandards.slice(0, 4).map((std) => (
                        <span
                          key={std}
                          className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-bold"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#007CC2] group-hover:text-[#005688]">
                    <span>View Specifications &amp; Stock</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Global Footer */}
        <Footer />
      </div>

      <RfqModal />
      <Toast />
    </div>
  );
}
