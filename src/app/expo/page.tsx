'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  Trophy,
  MapPin,
  Building2,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Maximize2,
  X
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface OfficialExpoAward {
  id: string;
  awardTitle: string;
  awardType: string;
  expoName: string;
  edition: string;
  hall: string;
  stall: string;
  dates: string;
  location: string;
  venue: string;
  image: string;
  badge: string;
  badgeColor: string;
  trophyDescription: string;
  highlights: string[];
  presentedBy: string;
}

const OFFICIAL_EXPO_AWARDS: OfficialExpoAward[] = [
  {
    id: 'amtex-2026',
    awardTitle: 'AMTEX Valued Participation Recognition Award',
    awardType: 'Golden Winged Victory Plaque in Dark Wood Shadow Box',
    expoName: 'AMTEX 2026',
    edition: 'Asian Machine Tool Exhibition',
    hall: 'Main Exhibition Hall',
    stall: 'Stall F50',
    dates: 'July 24 – 27, 2026',
    location: 'Greater Noida, Delhi NCR, India',
    venue: 'India Expo Centre & Mart, Greater Noida',
    image: '/images/expos/amtex.png',
    badge: 'Recent Major Event',
    badgeColor: 'bg-[#007CC2] text-white',
    trophyDescription:
      '"In appreciation of your valued participation in AMTEX® Asian Machine Tool Exhibition. Thank you for being a part of AMTEX 2026 — Built by RX."',
    highlights: [
      'Showcased high-performance cutting tools & CNC tool holders',
      'Interactive technical consultations for custom tooling requirements',
      'Live displays of precision adaptors & custom carbide inserts',
      'Networked with leading industrial manufacturers & production engineers',
    ],
    presentedBy: 'RX India & AMTEX Exhibition Board',
  },
  {
    id: 'machauto-2026',
    awardTitle: 'MachAuto Expo Valued Exhibitor Star Trophy',
    awardType: 'Black & Brushed Silver Tower Trophy with Golden Star Crest',
    expoName: 'MachAuto Expo 2026',
    edition: "15th Edition of India's Leading Machine Tools Exhibition",
    hall: 'Hall 2',
    stall: 'Stall B-14',
    dates: 'February 20 – 23, 2026',
    location: 'Ludhiana, Punjab, India',
    venue: 'Ludhiana Exhibition Centre (LEC), G.T. Road, Sahnewal / GLADA Ground',
    image: '/images/expos/machauto_2026.png',
    badge: 'Flagship Punjab Expo',
    badgeColor: 'bg-amber-500 text-slate-950',
    trophyDescription:
      '"Your Presence Has Been Greatly Appreciated. Thanks PPS INDUSTRIAL PRODUCTS for Participation at MACHAUTO EXPO — Powered by CICU, Organised by UDAN Media & Communications, In Association with ALMTI."',
    highlights: [
      'Live demonstrations of high-speed CNC tooling systems',
      'One-on-one technical consultations for custom tools',
      'Showcased top-tier authorized dealership brands (LexusTec, Hittco, CP GRAT-EX)',
      'Interactive Q&A sessions for workshop owners and tooling engineers',
    ],
    presentedBy: 'CICU, UDAN Media & ALMTI',
  },
  {
    id: 'indus-tech-bhiwadi-2025',
    awardTitle: 'Indus-Tech Valued Exhibitor Gear Trophy',
    awardType: 'Dual Precision Interlocking Gears on Brushed Steel & Acrylic Base',
    expoName: 'Indus-tech® Machine Tools & Automation Expo 2025',
    edition: 'Focusing on Manufacturing Automation & Tech Innovation',
    hall: 'Industrial Pavilion',
    stall: 'Stall D-42',
    dates: 'October 3 – 5, 2025',
    location: 'Bhiwadi, Rajasthan / Delhi-NCR Hub, India',
    venue: 'Industrial Trade Center, Bhiwadi Hub',
    image: '/images/expos/october_2025.png',
    badge: 'Industrial Automation Expo',
    badgeColor: 'bg-cyan-600 text-white',
    trophyDescription:
      '"Our Valued EXHIBITOR • Thanks for Participation as our valued Exhibitor in INDUSTECH MACHINE TOOLS & AUTOMATION EXPO — Dronacharya Events. Awarded to P.P.S INDUSTRIAL PRODUCTS."',
    highlights: [
      'Showcased high-precision ER Collet systems & BT40 holders',
      'Conducted 50+ customized milling solutions and cycle-time audits',
      'Engaged with regional automotive and aerospace vendors',
      'Introduced new PCD/PCBN tooling assortments for hardened steels',
    ],
    presentedBy: 'Dronacharya Events & Industrial Expo Council',
  },
  {
    id: 'indus-tech-faridabad-2024',
    awardTitle: 'Indus-Tech Machine Tools & Automation Expo Trophy',
    awardType: 'Precision Machined Silver Gear Plaque on Pedestal',
    expoName: 'Indus-tech® Machine Tools & Automation Expo 2024',
    edition: 'Connecting Manufacturing Corridors & Machine Tooling',
    hall: 'Hall 1',
    stall: 'Stall A-8',
    dates: 'December 20 – 23, 2024',
    location: 'Faridabad, Delhi NCR, India',
    venue: 'Industrial Hub Grounds, Faridabad Cluster',
    image: '/images/expos/indus_tech_2024.png',
    badge: 'Manufacturing Corridors',
    badgeColor: 'bg-emerald-600 text-white',
    trophyDescription:
      '"Our Valued EXHIBITOR • Thanks for Participation as our valued Exhibitor in INDUSTECH MACHINE TOOLS & AUTOMATION EXPO — Dronacharya Events. Awarded to P.P.S INDUSTRIAL PRODUCTS."',
    highlights: [
      'Presented live boring and threading tool displays',
      'Networked with regional machine shop distributors and CNC job shops',
      'Showcased high-durability carbide inserts with multi-layer PVD coatings',
      'Conducted post-exhibition technical workshops for metal-cutting efficiency',
    ],
    presentedBy: 'Dronacharya Events & Machine Tooling Forum',
  },
];

export default function ExpoPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc?: string } | null>(
    null
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#007CC2] selection:text-white">
      {/* 1. Permanently Fixed TopBar + Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-sm">
        <TopBar />
        <Header />
      </div>

      {/* 2. Main Page Content Canvas */}
      <div className="pt-[80px] sm:pt-[124px] md:pt-[172px] lg:pt-[176px] flex-1 flex flex-col">
        {/* Page Breadcrumbs Bar */}
        <div className="bg-white border-b border-slate-200 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-[#007CC2] transition-colors flex items-center gap-1">
                <span>Home</span>
              </Link>
              <ChevronRight size={13} className="text-slate-300" />
              <Link href="/expo" className="hover:text-[#007CC2] transition-colors">
                <span>Exhibitions</span>
              </Link>
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-[#007CC2] font-bold">Expo Awards, Stalls &amp; Recognitions</span>
            </div>
          </div>
        </div>

        {/* Hero Banner: Featuring Official P.P.S_Stall.png & Primary Colors */}
        <section className="relative text-white border-b border-slate-800 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 overflow-hidden bg-gradient-to-br from-[#07192d] via-slate-950 to-[#003454] flex flex-col justify-end min-h-[300px] sm:min-h-[340px] lg:min-h-[380px]">
          {/* Authentic Official P.P.S Exhibition Banner Background Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/expos/P.P.S_Stall.png"
              alt="P.P.S Industrial Products Exhibition Stall and Expo Showcase"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top opacity-35 select-none pointer-events-none"
            />
            {/* Seamless Vignette Blend into Primary Colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#07192d]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />

            {/* High-Tech Blueprint Grids Watermark */}
            <div className="absolute inset-0 bg-[radial-gradient(#007CC225_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
          </div>

          <div className="absolute -top-28 right-10 w-[420px] h-[420px] bg-[#007CC2]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-10 w-[320px] h-[320px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3.5">
              {/* Season / Honor Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007CC2]/20 border border-[#007CC2]/40 text-[#38bdf8] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
                <Trophy size={14} className="text-amber-400" />
                <span>Industry Presence &amp; Trade Show Honors</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                Exhibitions &amp;{' '}
                <span className="bg-gradient-to-r from-[#38bdf8] via-[#00a3ff] to-cyan-300 bg-clip-text text-transparent">
                  Trade Expos
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
                Connecting directly with manufacturers, production engineers, and workshop owners. We showcase state-of-the-art tooling innovations, live precision machining setups, and official exhibition awards across India&apos;s leading national manufacturing expos.
              </p>

              {/* Official Site Stats Strip in Primary Brand Colors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2 max-w-2xl">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-black text-white">4+</div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">
                    Major Expos
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-black text-[#38bdf8]">5,000+</div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">
                    Stall Visitors
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-black text-amber-300">150+</div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">
                    Live Demonstrations
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">
                    Technical Advisory
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. AWARDS ONLY SHOWCASE: Real Awards, Stalls, Hall, Location & Expo Details in Primary Colors */}
        <section className="py-12 sm:py-16 bg-[#f0f8fc] border-b border-[#bde2f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007CC2]/10 border border-[#007CC2]/30 text-[#007CC2] text-xs font-extrabold uppercase tracking-wider">
                <Trophy size={14} className="text-[#007CC2]" />
                <span>Verified Exhibitor Awards &amp; Stall Details</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Honors Received Across National Manufacturing Expos
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Official recognition trophies and stall participations awarded to <strong className="text-[#007CC2]">P.P.S. Industrial Products</strong> by major national trade show organizers.
              </p>
            </div>

            {/* Awards Grid: Each Card Features Real Trophy Photograph, Hall, Location, Stall & Expo Name in Primary Colors */}
            <div className="space-y-10">
              {OFFICIAL_EXPO_AWARDS.map((award, index) => (
                <div
                  key={award.id}
                  className="bg-white rounded-3xl border-2 border-[#bde2f5] hover:border-[#007CC2] shadow-lg shadow-[#007CC2]/5 overflow-hidden transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    
                    {/* Left: Authentic Trophy Photograph Directly From ppsindustrialproducts.com */}
                    <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[420px] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center p-6 overflow-hidden group">
                      <div className="relative w-full h-full min-h-[320px] flex items-center justify-center">
                        <Image
                          src={award.image}
                          alt={`${award.awardTitle} - ${award.expoName}`}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                        />
                      </div>

                      {/* Top Badge */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md backdrop-blur-md border border-white/20 bg-slate-900/80 text-white">
                        <Trophy size={13} className="text-amber-400 fill-current" />
                        <span>{award.badge}</span>
                      </div>

                      {/* Enlarge Button */}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedImage({
                            src: award.image,
                            title: `${award.awardTitle} • ${award.expoName}`,
                            desc: award.trophyDescription,
                          })
                        }
                        className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-slate-900/85 hover:bg-[#007CC2] text-white border border-white/20 transition-all shadow-md group-hover:scale-110 active:scale-95"
                        title="Enlarge Award Trophy Image"
                        aria-label="Enlarge Award Trophy Image"
                      >
                        <Maximize2 size={16} />
                      </button>
                    </div>

                    {/* Right: Hall, Location, Stall & Expo Name in Primary Colors */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        
                        {/* Top Row: Expo Name & Dates */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#007CC2]" />
                            <span className="text-xs font-black uppercase tracking-wider text-[#007CC2]">
                              {award.expoName}
                            </span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] text-xs font-bold flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{award.dates}</span>
                          </span>
                        </div>

                        {/* Award Title & Type */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                            {award.awardTitle}
                          </h3>
                          <p className="text-xs sm:text-sm font-bold text-[#007CC2] mt-1 flex items-center gap-1.5">
                            <Award size={15} />
                            <span>{award.awardType}</span>
                          </p>
                        </div>

                        {/* HALL, STALL & LOCATION DETAILS BOX (Primary Brand Colors #007CC2 & #f0f8fc) */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-[#f0f8fc] border border-[#bde2f5] space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            
                            {/* Hall & Stall Details */}
                            <div className="flex items-start gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-white border border-[#bde2f5] flex items-center justify-center text-[#007CC2] shrink-0 shadow-2xs">
                                <Building2 size={16} />
                              </div>
                              <div>
                                <span className="text-slate-500 block font-semibold text-[11px] uppercase tracking-wide">
                                  Hall &amp; Stall Number
                                </span>
                                <strong className="text-slate-900 font-extrabold text-sm sm:text-base text-[#007CC2]">
                                  {award.hall}, {award.stall}
                                </strong>
                              </div>
                            </div>

                            {/* Location / City */}
                            <div className="flex items-start gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-white border border-[#bde2f5] flex items-center justify-center text-[#007CC2] shrink-0 shadow-2xs">
                                <MapPin size={16} />
                              </div>
                              <div>
                                <span className="text-slate-500 block font-semibold text-[11px] uppercase tracking-wide">
                                  Host City &amp; Region
                                </span>
                                <strong className="text-slate-900 font-extrabold text-sm sm:text-base">
                                  {award.location}
                                </strong>
                              </div>
                            </div>
                          </div>

                          {/* Full Venue Name */}
                          <div className="pt-2 border-t border-[#bde2f5]/80 flex items-start gap-2 text-xs text-slate-700">
                            <MapPin size={14} className="text-[#007CC2] shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-slate-900 font-bold">Venue:</strong> {award.venue}
                            </span>
                          </div>
                        </div>

                        {/* Inscription on Trophy */}
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs italic text-slate-700 leading-relaxed">
                          <strong className="not-italic font-bold text-slate-900 block mb-1">
                            Inscription on Trophy / Plaque:
                          </strong>
                          {award.trophyDescription}
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Image Modal Lightbox for High-Resolution Award Trophies */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between text-white">
                <h4 className="text-sm sm:text-base font-bold truncate pr-4">
                  {selectedImage.title}
                </h4>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close preview"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative h-[55vh] sm:h-[70vh] w-full bg-black flex items-center justify-center p-4">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-4 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <span className="text-center sm:text-left">{selectedImage.desc || 'Official Trade Show Award Trophy • P.P.S. Industrial Products'}</span>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors shrink-0"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
