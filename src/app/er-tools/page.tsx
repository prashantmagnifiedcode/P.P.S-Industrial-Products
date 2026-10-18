'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  Wrench,
  Gauge,
  PhoneCall,
  MessageCircle,
  FileSpreadsheet,
  Download,
  ChevronRight,
  ArrowRight,
  Boxes,
  Zap,
  Check,
  Cpu,
  Sparkles,
  ExternalLink,
  Info
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RfqModal from '@/components/RfqModal';
import Toast from '@/components/Toast';
import { useRfq } from '@/context/RfqContext';

interface ColletSeriesData {
  series: string;
  range: string;
  diameter: string;
  length: string;
  accuracy: string;
  runout: string;
  standard: string;
  application: string;
  stockStatus: string;
  popularSizes: string[];
}

const COLLET_SERIES: ColletSeriesData[] = [
  {
    series: 'ER11',
    range: '0.5 – 7.0 mm',
    diameter: '11.5 mm',
    length: '18.0 mm',
    accuracy: 'Class AA',
    runout: '< 0.005 mm',
    standard: 'DIN 6499B / ISO 15488',
    application: 'High-speed micro-drilling, PCB routing, miniature engraving spindles',
    stockStatus: 'In Stock (Central Depot)',
    popularSizes: ['1.0mm', '2.0mm', '3.0mm', '3.175mm (1/8")', '4.0mm', '6.0mm']
  },
  {
    series: 'ER16',
    range: '0.5 – 10.0 mm',
    diameter: '17.0 mm',
    length: '27.5 mm',
    accuracy: 'Class AA',
    runout: '< 0.005 mm',
    standard: 'DIN 6499B / ISO 15488',
    application: 'Small diameter end mills, Swiss-type CNC lathes, tapping & reaming',
    stockStatus: 'In Stock (Central Depot)',
    popularSizes: ['2.0mm', '3.0mm', '4.0mm', '6.0mm', '8.0mm', '10.0mm']
  },
  {
    series: 'ER20',
    range: '1.0 – 13.0 mm',
    diameter: '21.0 mm',
    length: '31.5 mm',
    accuracy: 'Class AA',
    runout: '< 0.005 mm',
    standard: 'DIN 6499B / ISO 15488',
    application: 'General VMC milling, drilling, center drills & reamers up to 13mm',
    stockStatus: 'In Stock (Central Depot)',
    popularSizes: ['4.0mm', '6.0mm', '8.0mm', '10.0mm', '12.0mm', '13.0mm']
  },
  {
    series: 'ER25',
    range: '1.0 – 16.0 mm',
    diameter: '26.0 mm',
    length: '34.0 mm',
    accuracy: 'Class AA',
    runout: '< 0.005 mm',
    standard: 'DIN 6499B / ISO 15488',
    application: 'Mid-size CNC milling, roughing cutters, drills and tapping shanks',
    stockStatus: 'In Stock (Central Depot)',
    popularSizes: ['6.0mm', '8.0mm', '10.0mm', '12.0mm', '14.0mm', '16.0mm']
  },
  {
    series: 'ER32',
    range: '2.0 – 20.0 mm',
    diameter: '33.0 mm',
    length: '40.0 mm',
    accuracy: 'Class AA',
    runout: '< 0.005 mm',
    standard: 'DIN 6499B / ISO 15488',
    application: 'Industry standard for BT40 machining centers, heavy end milling & boring',
    stockStatus: 'In Stock (Central Depot)',
    popularSizes: ['6.0mm', '8.0mm', '10.0mm', '12.0mm', '16.0mm', '20.0mm']
  },
  {
    series: 'ER40',
    range: '3.0 – 26.0 mm',
    diameter: '41.0 mm',
    length: '46.0 mm',
    accuracy: 'Class AA',
    runout: '< 0.005 mm',
    standard: 'DIN 6499B / ISO 15488',
    application: 'Heavy roughing, large diameter shank clamping, BT50 tooling setups',
    stockStatus: 'In Stock (Central Depot)',
    popularSizes: ['10.0mm', '12.0mm', '16.0mm', '20.0mm', '25.0mm', '26.0mm']
  },
  {
    series: 'ER50',
    range: '10.0 – 34.0 mm',
    diameter: '52.0 mm',
    length: '60.0 mm',
    accuracy: 'Class AA',
    runout: '< 0.008 mm',
    standard: 'DIN 6499B / ISO 15488',
    application: 'Heavy horizontal machining, large drills, boring bars and face mills',
    stockStatus: 'Available on Order',
    popularSizes: ['16.0mm', '20.0mm', '25.0mm', '30.0mm', '32.0mm', '34.0mm']
  }
];

export default function ErToolsPage() {
  const { openRfqModal } = useRfq();
  const [selectedSeriesFilter, setSelectedSeriesFilter] = useState<string>('all');

  const filteredSeries = selectedSeriesFilter === 'all'
    ? COLLET_SERIES
    : COLLET_SERIES.filter(item => item.series.toLowerCase() === selectedSeriesFilter.toLowerCase());

  const handleColletRfq = (title: string, category: string, specs: string) => {
    openRfqModal({
      id: `collet-${Date.now()}`,
      name: title,
      category: category,
      grade: 'DIN 6499B Class AA',
      sku: title.replace(/\s+/g, '-').toUpperCase(),
      isoCode: 'DIN 6499',
      coating: 'Cryogenic -120°C Treated SUJ2 Steel',
      application: 'High-Precision CNC Toolholding',
      description: specs,
      materials: ['P', 'M', 'K', 'N', 'S', 'H'],
      tolerance: '< 0.005mm',
      stock: 'In Stock (Gurugram Depot)',
      rating: 5,
      inStock: true,
      featured: true,
      image: '/er-tools/er-spring-collet.jpg',
      specs: [
        { label: 'Specification', value: specs },
        { label: 'Standard', value: 'DIN 6499B' },
        { label: 'Runout', value: '< 0.005mm' }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#007CC2]/20 selection:text-[#007CC2]">
      {/* 1. Header */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-sm">
        <TopBar />
        <Header />
      </div>

      {/* 2. Main Content Canvas */}
      <div className="pt-[74px] sm:pt-[112px] md:pt-[156px] flex-1 flex flex-col">
        <main className="flex-1">

          {/* Breadcrumb Navigation */}
          <div className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Link href="/" className="hover:text-[#007CC2] transition-colors">Home</Link>
                <ChevronRight size={13} className="text-slate-300" />
                <Link href="/tooling" className="hover:text-[#007CC2] transition-colors">Tooling Systems</Link>
                <ChevronRight size={13} className="text-slate-300" />
                <span className="text-[#007CC2] font-bold">ER Collet Systems (DIN 6499)</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#007CC2]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#38bdf8] text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>DIN 6499 / ISO 15488 Certified • Gurugram Depot</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Industrial <span className="bg-gradient-to-r from-[#38bdf8] via-[#00a3ff] to-[#60a5fa] bg-clip-text text-transparent">ER Collet Systems</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  High-precision toolholding collets, dynamically balanced clamping nuts, BT40/HSK spindle chucks, and master box sets. Manufactured from cryogenically stabilized SUJ2 alloy bearing steel with concentric runout certified down to <strong className="text-white font-bold">&le; 0.005 mm (5 Microns Class AA)</strong>.
                </p>

                {/* Quick Trust Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-slate-200 font-semibold flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-400" />
                    Sub-Zero Cryogenic (-120°C)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-slate-200 font-semibold flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-400" />
                    16-Slot 360° Circumferential Grip
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-slate-200 font-semibold flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-400" />
                    Same-Day Depot Dispatch
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 4 Core Pillars: Beautiful Image Showcase Cards */}
          <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#007CC2]">
                Visual Product Range
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Precision Collet &amp; Clamping Hardware
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Explore our full spectrum of CNC spring collets, nuts, holders, and complete master sets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Card 1: ER Spring Collets */}
              <div className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <Image
                    src="/er-tools/er-spring-collet.jpg"
                    alt="Precision ER Spring Collet DIN 6499"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#007CC2] text-white">
                      DIN 6499B
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      &le; 0.005mm AA
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#007CC2] uppercase tracking-wider block">
                      Spring Collets
                    </span>
                    <h3 className="font-black text-base sm:text-lg text-slate-900 group-hover:text-[#007CC2] transition-colors leading-snug">
                      ER Precision Spring Collets
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      16-slot split geometry crafted from SUJ2 alloy bearing steel. Available from ER8 to ER50 with 100% elastic recovery.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1 text-[10px] font-bold">
                      {['ER11', 'ER16', 'ER20', 'ER25', 'ER32', 'ER40'].map(s => (
                        <span key={s} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleColletRfq('ER Precision Spring Collets', 'Collets', 'ER11 to ER40, Runout <0.005mm')}
                        className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-[#007CC2] text-white font-bold text-xs transition-colors shadow-sm"
                      >
                        Add to RFQ
                      </button>
                      <a
                        href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20please%20share%20quotation%20for%20ER%20Precision%20Spring%20Collets."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: ER Clamping Nuts */}
              <div className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <Image
                    src="/er-tools/er-clamping-nut.jpg"
                    alt="Precision Balanced ER Clamping Nut"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#007CC2] text-white">
                      ISO 15488
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                      G2.5 20,000 RPM
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#007CC2] uppercase tracking-wider block">
                      Clamping Nuts
                    </span>
                    <h3 className="font-black text-base sm:text-lg text-slate-900 group-hover:text-[#007CC2] transition-colors leading-snug">
                      Balanced ER Clamping Nuts
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Precision ground threads delivering 25% higher clamping pressure. Available in Hexagon (UM), Mini (M-type), and Bearing nut designs.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1 text-[10px] font-bold">
                      {['Hex UM', 'Mini M', 'Ball Bearing', 'Coolant'].map(s => (
                        <span key={s} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleColletRfq('Balanced ER Clamping Nuts', 'Clamping Nuts', 'Standard, Mini & Bearing nuts, G2.5 balanced')}
                        className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-[#007CC2] text-white font-bold text-xs transition-colors shadow-sm"
                      >
                        Add to RFQ
                      </button>
                      <a
                        href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20please%20share%20quotation%20for%20Balanced%20ER%20Clamping%20Nuts."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: BT40 / HSK Spindle Collet Chucks */}
              <div className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <Image
                    src="/er-tools/er-collet-chuck.jpg"
                    alt="BT40 ER Collet Chuck Tool Holder"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#007CC2] text-white">
                      BT40 / BT50
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      Taper &lt;0.003mm
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#007CC2] uppercase tracking-wider block">
                      Spindle Toolholders
                    </span>
                    <h3 className="font-black text-base sm:text-lg text-slate-900 group-hover:text-[#007CC2] transition-colors leading-snug">
                      Integrated Collet Chucks
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Case-hardened 20CrMnTi alloy steel with ground AT3 taper contact. Pre-balanced to G2.5 at 18,000–25,000 RPM with thru-coolant bore.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1 text-[10px] font-bold">
                      {['BT40-ER32', 'BT40-ER25', 'BT50-ER40', 'HSK63A'].map(s => (
                        <span key={s} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleColletRfq('Integrated Collet Chucks', 'Toolholders', 'BT40, BT50, HSK63A with G2.5 balance')}
                        className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-[#007CC2] text-white font-bold text-xs transition-colors shadow-sm"
                      >
                        Add to RFQ
                      </button>
                      <a
                        href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20please%20share%20quotation%20for%20BT40%2FBT50%20Collet%20Chucks."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Master ER Collet Box Sets */}
              <div className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <Image
                    src="/er-tools/er-collet-set.jpg"
                    alt="Master ER Collet Box Set with Wrench"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-500 text-white">
                      Complete Set
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      Fitted Box + Wrench
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#007CC2] uppercase tracking-wider block">
                      Master Box Sets
                    </span>
                    <h3 className="font-black text-base sm:text-lg text-slate-900 group-hover:text-[#007CC2] transition-colors leading-snug">
                      Master Collet Sets with Wrench
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Complete size progressions in fitted wooden cases with torque spanner. Certified individual runout test sheet included.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1 text-[10px] font-bold">
                      {['ER16 (10 pcs)', 'ER25 (15 pcs)', 'ER32 (18 pcs)', 'ER40 (23 pcs)'].map(s => (
                        <span key={s} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleColletRfq('Master ER Collet Sets with Wrench', 'Collet Sets', 'ER16 to ER40 master sets in fitted wooden box')}
                        className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-[#007CC2] text-white font-bold text-xs transition-colors shadow-sm"
                      >
                        Add to RFQ
                      </button>
                      <a
                        href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20please%20share%20quotation%20for%20Master%20ER%20Collet%20Sets%20with%20Wrench."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Customer-Friendly Visual Quick Size Matrix */}
          <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50 to-white border-y border-[#bde2f5]/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#007CC2]">
                    Quick Size Guide
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    ER Series Dimensional Matrix
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Select a series to inspect clamping range, outer diameter, and typical machining applications.
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-[#bde2f5] shadow-xs">
                  {['all', 'er11', 'er16', 'er20', 'er25', 'er32', 'er40', 'er50'].map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedSeriesFilter(cat)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${selectedSeriesFilter === cat
                          ? 'bg-[#007CC2] text-white shadow-xs'
                          : 'text-slate-600 hover:text-[#007CC2] hover:bg-slate-50'
                        }`}
                    >
                      {cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cards Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSeries.map((item) => (
                  <div
                    key={item.series}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
                  >
                    <div>
                      {/* Big Text Header */}
                      <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                        <div>
                          <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight block group-hover:text-[#007CC2] transition-colors leading-none">
                            ER <span className="text-[#007CC2]">{item.series.replace('ER', '')}</span>
                          </span>
                          <span className="text-sm sm:text-base font-extrabold text-[#007CC2] block mt-1.5">
                            Range: {item.range}
                          </span>
                        </div>
                        <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 mt-0.5 shadow-2xs">
                          {item.runout}
                        </span>
                      </div>

                      {/* Specs Grid with Increased Text */}
                      <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs mb-3.5 font-sans">
                        <div>
                          <span className="text-[11px] uppercase font-bold text-slate-500 block tracking-wider">
                            Major Dia (D)
                          </span>
                          <span className="font-black text-base sm:text-lg text-slate-900">
                            {item.diameter}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] uppercase font-bold text-slate-500 block tracking-wider">
                            Overall Length (L)
                          </span>
                          <span className="font-black text-base sm:text-lg text-slate-900">
                            {item.length}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] uppercase font-bold text-slate-500 block tracking-wider">
                            Standard
                          </span>
                          <span className="font-bold text-xs sm:text-sm text-slate-800 truncate block">
                            DIN 6499B
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] uppercase font-bold text-slate-500 block tracking-wider">
                            Grade
                          </span>
                          <span className="font-black text-xs sm:text-sm text-[#007CC2]">
                            {item.accuracy}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3.5">
                        {item.application}
                      </p>

                      <div className="space-y-1.5 mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                          Stocked Bore Sizes:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.popularSizes.map(sz => (
                            <span key={sz} className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">
                              {sz}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-3.5 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleColletRfq(`${item.series} Precision Collet (${item.range})`, 'ER Collets', `Concentric runout ${item.runout}, D=${item.diameter}, L=${item.length}`)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-[#007CC2] text-white font-extrabold text-xs sm:text-sm transition-colors shadow-xs"
                      >
                        Order {item.series}
                      </button>
                      <a
                        href={`https://wa.me/919350509134?text=${encodeURIComponent(`Hi P.P.S Industrial, please share quotation and bulk pricing for ${item.series} Precision Collet set (${item.range}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white font-bold text-xs sm:text-sm border border-[#25D366]/30 transition-all flex items-center gap-1.5"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle size={15} />
                        <span>Chat</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Engineering Advantages (Minimal, high visual readability) */}
          <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#007CC2]">
                Quality Assurance
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Engineered for High-Speed CNC Production
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-3xl bg-white border border-[#bde2f5] shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#007CC2]/10 border border-[#bde2f5] flex items-center justify-center text-[#007CC2]">
                  <Gauge size={22} />
                </div>
                <h3 className="font-black text-lg text-slate-900">
                  Certified &lt;0.005mm Runout
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Each collet is 100% inspected at 4D distance from nose. Low runout guarantees balanced chip load on cutting flutes and extends solid carbide tool life up to 40%.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#bde2f5] shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#007CC2]/10 border border-[#bde2f5] flex items-center justify-center text-[#007CC2]">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="font-black text-lg text-slate-900">
                  Cryogenic Sub-Zero Stabilized
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Manufactured from high-grade SUJ2 bearing steel and deep-cryogenically treated at -120°C to eliminate retained austenite and prevent dimensional drift over years of use.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#bde2f5] shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#007CC2]/10 border border-[#bde2f5] flex items-center justify-center text-[#007CC2]">
                  <Layers size={22} />
                </div>
                <h3 className="font-black text-lg text-slate-900">
                  Complete Toolholding Ecosystem
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Full stock of collets, balanced clamping nuts (standard, mini, bearing), BT40/BT50 holders, pull studs, and torque spanner wrenches ready for immediate depot dispatch.
                </p>
              </div>
            </div>
          </section>

          {/* High-Converting CTA Banner */}
          <section className="pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-[#061e33] to-slate-950 p-6 sm:p-10 text-white shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#007CC2]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#38bdf8] text-xs font-bold uppercase tracking-wider">
                    <FileSpreadsheet size={14} className="text-[#38bdf8]" />
                    <span>Direct Factory &amp; Depot Pricing</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    Need Custom Sets or Bulk <span className="text-[#38bdf8]">Collet Packages</span>?
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Contact our Sector 5 Gurugram tooling desk for bulk quantity discounts, special imperial size sets, and integrated BT40 spindle tooling packages.
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20please%20share%20bulk%20pricing%20and%20catalog%20for%20ER%20Collet%20systems."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Collet Desk</span>
                  </a>

                  <a
                    href="tel:+919350509134"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <PhoneCall size={16} />
                    <span>Call +91 93505 09134</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Global Footer */}
        <Footer />
      </div>

      {/* Global RFQ Modal & Toast */}
      <RfqModal />
      <Toast />
    </div>
  );
}
