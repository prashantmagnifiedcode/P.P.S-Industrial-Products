'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ChevronRight,
  Sparkles,
  Phone,
  ShieldCheck,
  Zap,
  Wrench,
  Check,
  Send
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RfqModal from '@/components/RfqModal';
import Toast from '@/components/Toast';
import { TOOLING_CATEGORIES, ToolingItem } from '@/data/toolingData';
import { ISO_MATERIALS_MAP } from '@/data/insertsData';
import { useRfq } from '@/context/RfqContext';

export default function ToolingDetailPage() {
  const params = useParams();
  const rawSlug = params?.slug as string;
  const tooling = rawSlug ? TOOLING_CATEGORIES[rawSlug] : undefined;

  const { openRfqModal, addToRfq } = useRfq();
  const [selectedStandard, setSelectedStandard] = useState<string>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  // Fallback if slug is not found
  if (!tooling) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
        <div className="fixed top-0 left-0 right-0 z-50 shadow-sm">
          <TopBar />
          <Header />
        </div>
        <div className="pt-[140px] flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Tooling Category Not Found</h2>
          <p className="text-slate-600 mb-6 text-sm">Please select a valid tooling category from the menu or catalog.</p>
          <Link
            href="/tooling"
            className="px-6 py-2.5 rounded-xl bg-[#007CC2] text-white font-bold text-sm hover:bg-[#006aa6] transition-all"
          >
            Browse All Tooling
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter items if user clicks a popular standard chip in hero
  const displayedItems = selectedStandard === 'all'
    ? tooling.items
    : tooling.items.filter(item =>
      item.code.toLowerCase().includes(selectedStandard.toLowerCase()) ||
      item.name.toLowerCase().includes(selectedStandard.toLowerCase())
    );

  const handleQuickAdd = (item: ToolingItem) => {
    addToRfq({
      id: item.id,
      name: `${item.code} - ${item.name}`,
      category: tooling.categoryLabel,
      grade: item.gradeOrType,
      sku: item.code,
      isoCode: item.code,
      coating: item.gradeOrType,
      application: item.application,
      description: item.name,
      materials: item.materials,
      tolerance: 'ISO Standard',
      stock: item.stock,
      rating: 5,
      inStock: true,
      featured: true,
      image: item.image,
      specs: item.specs
    });

    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

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
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto">
              <Link href="/" className="hover:text-[#007CC2] transition-colors flex items-center gap-1 shrink-0">
                <span>Home</span>
              </Link>
              <ChevronRight size={13} className="text-slate-300 shrink-0" />
              <Link href="/tooling" className="hover:text-[#007CC2] transition-colors shrink-0">
                <span>Tooling Systems</span>
              </Link>
              <ChevronRight size={13} className="text-slate-300 shrink-0" />
              <span className="text-slate-400 shrink-0">{tooling.categoryLabel}</span>
              <ChevronRight size={13} className="text-slate-300 shrink-0" />
              <span className="text-[#007CC2] font-bold truncate">
                {tooling.titlePrefix} {tooling.titleHighlight}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Banner: Centered Text layout */}
        <section className="relative text-white border-b border-slate-800 pt-14 sm:pt-18 lg:pt-22 pb-4 sm:pb-5 overflow-hidden bg-slate-950 flex flex-col justify-end min-h-[280px] sm:min-h-[330px] lg:min-h-[360px]">
          {/* Authentic Tooling Background Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src={tooling.heroImage}
              alt={`${tooling.titlePrefix} ${tooling.titleHighlight}`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center sm:object-right opacity-85 select-none pointer-events-none"
            />
            {/* Subtle Vignette for Text Clarity without Bottom Shadow */}
            <div className="absolute inset-0 bg-slate-950/45" />

            {/* Top Subtle Edge Gradient */}
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-slate-950/70 to-transparent" />

            {/* High-Tech Blueprint Grids Watermark */}
            <div className="absolute inset-0 bg-[radial-gradient(#007CC220_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-30" />
          </div>

          <div className="absolute -top-32 right-12 w-[480px] h-[480px] bg-[#007CC2]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-10 w-[360px] h-[360px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Main Content Layout - All Items Aligned to Bottom with Centered Text */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-end items-center gap-5 sm:gap-6">

            {/* 1. Centered Section Title */}
            <div className="text-center mx-auto max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={12} className="text-cyan-300" />
                <span>{tooling.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)]">
                {tooling.titlePrefix}{' '}
                <span className="bg-gradient-to-r from-[#38bdf8] via-[#00a3ff] to-cyan-300 bg-clip-text text-transparent">
                  {tooling.titleHighlight}
                </span>
              </h1>

              <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto font-normal drop-shadow-md leading-relaxed">
                {tooling.subtitle}
              </p>
            </div>

            {/* 2. Horizontal Line Divider */}
            <div className="w-full border-t border-white/20 pt-4 sm:pt-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">

                {/* Left: Popular Standards Chips Below the Line */}
                <div className="flex flex-wrap items-center sm:items-end justify-center sm:justify-start gap-2 text-xs font-sans">
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-wider mr-1 drop-shadow-sm pb-1 sm:pb-0.5">
                    Popular Standards:
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedStandard('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-tight transition-all backdrop-blur-md shadow-xs active:scale-95 ${selectedStandard === 'all'
                      ? 'bg-[#007CC2] text-white border border-[#007CC2]'
                      : 'bg-slate-900/65 text-slate-200 hover:text-white border border-white/15 hover:border-[#007CC2]'
                      }`}
                  >
                    All Items
                  </button>
                  {tooling.popularStandards.map((std) => {
                    const isChipActive = selectedStandard === std.split(' ')[0];
                    return (
                      <button
                        key={std}
                        type="button"
                        onClick={() => setSelectedStandard(isChipActive ? 'all' : std.split(' ')[0])}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-tight transition-all backdrop-blur-md shadow-xs active:scale-95 ${isChipActive
                          ? 'bg-[#007CC2] text-white border border-[#007CC2]'
                          : 'bg-slate-900/65 hover:bg-[#007CC2] text-slate-200 hover:text-white border border-white/15 hover:border-[#007CC2]'
                          }`}
                      >
                        {std}
                      </button>
                    );
                  })}
                </div>

                {/* Right: Rapid Quote Trigger */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => openRfqModal()}
                    className="px-4 py-2 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-[#007CC2]/30 transition-all hover:scale-105 active:scale-95"
                  >
                    <Send size={13} />
                    <span>Instant RFQ Inquiries</span>
                  </button>
                </div>
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
                P.P.S Central Hub (Sector 5 Gurugram):
              </span>
              <span className="text-slate-600">
                Ready stock available with express dispatch Pan India &amp; Delhi-NCR.
              </span>
            </div>
            <a
              href="tel:+919350509134"
              className="font-bold text-[#007CC2] hover:text-[#005688] flex items-center gap-1 shrink-0"
            >
              <Phone size={12} />
              <span>Urgent Helpline: +91 93505 09134</span>
            </a>
          </div>
        </div>

        {/* 4. Engineering Highlights, Machining Feeds & Product Series Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-10 sm:space-y-12">

          {/* Engineering Highlights & Recommended Machining Parameters Matrix */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-8 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f0f8fc] text-[#007CC2] border border-[#bde2f5] text-[10px] font-bold uppercase tracking-wider">
                  <Wrench size={11} />
                  <span>Engineering Specs &amp; Application Guide</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Technical Geometry &amp; Cutting Performance
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck size={14} className="text-[#007CC2]" />
                <span>Sector 5 Gurugram Verified Warehouse Stock</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
              {tooling.techOverview}
            </p>

            {/* Machining Feeds & Speeds Parameters (Mobile Friendly Responsive Cards) */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Zap size={13} className="text-[#007CC2]" />
                <span>Recommended Machining Parameters by Workpiece Material</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tooling.machiningParameters.map((param, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-[#f0f8fc] border border-slate-200 hover:border-[#bde2f5] transition-colors space-y-3"
                  >
                    <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#007CC2]" />
                      <span>{param.workpiece}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-xl bg-white border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Cutting Speed (vc)</span>
                        <span className="font-extrabold text-slate-800">{param.cuttingSpeed}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Feed Rate (fn)</span>
                        <span className="font-extrabold text-slate-800">{param.feedRate}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Depth of Cut (ap)</span>
                        <span className="font-extrabold text-slate-800">{param.depthOfCut}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Coolant Type</span>
                        <span className="font-extrabold text-slate-800">{param.coolant}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Available Tooling Series Showcase (Clean B2B Cards, 1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Available Series &amp; Specifications</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#f0f8fc] text-[#007CC2] border border-[#bde2f5] font-extrabold">
                    {displayedItems.length} Series
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Direct master distributor pricing with express delivery Pan India
                </p>
              </div>

              {selectedStandard !== 'all' && (
                <button
                  type="button"
                  onClick={() => setSelectedStandard('all')}
                  className="self-start sm:self-auto text-xs font-bold text-[#007CC2] hover:text-[#005688] flex items-center gap-1"
                >
                  <span>Reset filter (Show all {tooling.items.length})</span>
                  <ChevronRight size={13} />
                </button>
              )}
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {displayedItems.map((item) => {
                const isAdded = addedItemIds[item.id];

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#007CC2] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Photo Thumbnail + Top Badges */}
                      <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-white/20">
                            {item.brand}
                          </span>
                          {item.highlight && (
                            <span className="text-[9.5px] font-black px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow-xs">
                              {item.highlight}
                            </span>
                          )}
                        </div>

                        {/* Item Code Overlay */}
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-base sm:text-lg font-black text-white tracking-tight drop-shadow-md">
                            {item.code}
                          </h3>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 space-y-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-800 leading-snug line-clamp-2">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                            {item.application}
                          </p>
                        </div>

                        {/* Grade & Coating */}
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grade:</span>
                          <span className="text-xs font-extrabold text-slate-900 truncate">{item.gradeOrType}</span>
                        </div>

                        {/* Material Compatibility Pills (ISO P M K N S H) */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            Material Applications:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {item.materials.map((mat) => {
                              const isoInfo = ISO_MATERIALS_MAP[mat];
                              return (
                                <span
                                  key={mat}
                                  title={`${isoInfo?.name || mat} - ${isoInfo?.description || ''}`}
                                  className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold flex items-center gap-1 ${isoInfo?.badgeBg || 'bg-slate-700'
                                    } ${isoInfo?.badgeText || 'text-white'}`}
                                >
                                  <span>{mat}</span>
                                  <span className="text-[9px] opacity-80 font-normal">
                                    {isoInfo?.name ? isoInfo.name.split(' ')[0] : ''}
                                  </span>
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Dimensional Specs Grid */}
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            Key Dimensions &amp; Geometry:
                          </span>
                          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                            {item.specs.map((sp, idx) => (
                              <div
                                key={idx}
                                className="px-2 py-1 rounded-lg bg-slate-50 border border-slate-100/80 flex items-center justify-between"
                              >
                                <span className="text-slate-500 truncate mr-1">{sp.label}</span>
                                <span className="font-extrabold text-slate-900 shrink-0">{sp.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Stock Status Badge */}
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                          <span className="font-bold text-emerald-700 truncate">{item.stock}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Bottom */}
                    <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => handleQuickAdd(item)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 ${isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                          }`}
                      >
                        {isAdded ? (
                          <>
                            <Check size={14} className="stroke-[3]" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <span>+ Add to RFQ</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          addToRfq({
                            id: item.id,
                            name: `${item.code} - ${item.name}`,
                            category: tooling.categoryLabel,
                            grade: item.gradeOrType,
                            sku: item.code,
                            isoCode: item.code,
                            coating: item.gradeOrType,
                            application: item.application,
                            description: item.name,
                            materials: item.materials,
                            tolerance: 'ISO Standard',
                            stock: item.stock,
                            rating: 5,
                            inStock: true,
                            featured: true,
                            image: item.image,
                            specs: item.specs
                          });
                          openRfqModal();
                        }}
                        className="py-2.5 px-3 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm shadow-[#007CC2]/20 transition-all active:scale-95"
                      >
                        <Send size={12} />
                        <span>Instant RFQ</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* B2B Engineering Helpline & Custom Orders Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-6 sm:p-8 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={12} />
                <span>Specialized B2B Tooling Assistance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Need Non-Standard Diameters or Annual Contract Supply?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Our Gurugram technical team provides tool life benchmarking, feed rate optimization, and scheduled bulk deliveries for automotive and general manufacturing machine shops Pan India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20I%20need%20technical%20assistance%20for%20tooling."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
              >
                <span>💬 WhatsApp Support</span>
              </a>

              <button
                type="button"
                onClick={() => openRfqModal()}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-[#007CC2]/30"
              >
                <Send size={13} />
                <span>Submit RFQ Inquiries</span>
              </button>
            </div>
          </div>

        </div>

        {/* Global Footer */}
        <Footer />
      </div>

      {/* Global Interactive B2B Quotation Modal & Toast Notification */}
      <RfqModal />
      <Toast />
    </div>
  );
}
