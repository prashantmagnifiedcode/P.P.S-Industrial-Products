'use client';

import React from 'react';
import { Truck, Clock, ShieldCheck, Zap } from 'lucide-react';

function BlueDartLogo() {
  return (
    <svg viewBox="0 0 115 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Blue Dart">
      <text x="0" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontStyle="italic" fontWeight="900" fill="#002b7f" letterSpacing="-0.3">
        BLUE DART
      </text>
      <path d="M88 7 L99 7 L93 12 L101 12 L87 20 L91 14 L85 14 Z" fill="#D40511" />
    </svg>
  );
}

function DtdcLogo() {
  return (
    <svg viewBox="0 0 100 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="DTDC">
      <text x="0" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="900" fill="#C62828" letterSpacing="0.8">
        DTDC
      </text>
      <circle cx="66" cy="8" r="2.5" fill="#007CC2" />
      <path d="M60 13 C64 17, 70 17, 74 13" stroke="#007CC2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DelhiveryLogo() {
  return (
    <svg viewBox="0 0 105 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Delhivery">
      <text x="0" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="900" fill="#0F172A" letterSpacing="0.5">
        delh
      </text>
      <rect x="31" y="6" width="3" height="3" fill="#DC2626" />
      <rect x="31" y="10.5" width="3" height="5.5" fill="#0F172A" />
      <text x="37" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="900" fill="#0F172A" letterSpacing="0.5">
        very
      </text>
    </svg>
  );
}

function SafexpressLogo() {
  return (
    <svg viewBox="0 0 120 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Safexpress">
      <polygon points="2,12 8,5 14,12 11,12 11,19 5,19 5,12" fill="#EAB308" />
      <text x="18" y="16.5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="900" fill="#047857" letterSpacing="0.2">
        SAFEXPRESS
      </text>
    </svg>
  );
}

function DepotRunnerLogo() {
  return (
    <svg viewBox="0 0 120 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="PPS Depot Runner">
      <rect x="0" y="3" width="18" height="18" rx="4" fill="#007CC2" />
      <path d="M4 12 L7.5 15.5 L14 7.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="24" y="13" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fontWeight="900" fill="#0F172A">
        DEPOT FLEET
      </text>
      <text x="24" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7.5" fontWeight="700" fill="#007CC2" letterSpacing="0.3">
        NCR RUNNER
      </text>
    </svg>
  );
}

interface CourierPartner {
  name: string;
  logo: React.ReactNode;
  mode: string;
  speed: string;
  reach: string;
}

const COURIER_PARTNERS: CourierPartner[] = [
  {
    name: 'Blue Dart',
    logo: <BlueDartLogo />,
    mode: 'Air Priority',
    speed: 'Next-Day Air',
    reach: 'Metros & Hubs'
  },
  {
    name: 'DTDC Express',
    logo: <DtdcLogo />,
    mode: 'Express Network',
    speed: '24–48 Hours',
    reach: 'Pan-India (28 States)'
  },
  {
    name: 'Delhivery',
    logo: <DelhiveryLogo />,
    mode: 'Surface Cargo',
    speed: 'Same-Day / Next-Day',
    reach: 'Delhi-NCR & Regional'
  },
  {
    name: 'Safexpress',
    logo: <SafexpressLogo />,
    mode: 'Heavy Logistics',
    speed: '2–3 Days',
    reach: 'Bulk OEM Pallets'
  },
  {
    name: 'Depot Runner',
    logo: <DepotRunnerLogo />,
    mode: 'Urgent Line-Stop',
    speed: '60–120 Mins',
    reach: 'Pan India Express'
  }
];

export default function DailyPartnerSection() {
  return (
    <section className="py-6 sm:py-8 bg-slate-50/70 border-b border-slate-200" id="courier-partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-white text-[#007CC2] border border-slate-200 shadow-2xs">
              <Truck size={15} className="stroke-[2.2]" />
            </span>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                Courier Partners with P.P.S: Daily Sourcing &amp; Dealership Network
              </h2>
              <p className="text-[11px] text-slate-500 font-normal">
                Independent third-party express couriers contracted for daily dispatches nationwide.
              </p>
            </div>
          </div>

          {/* Quick Info Badges */}
          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-700 shrink-0">
            <span className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-700 shadow-2xs">
              <Clock size={12} className="text-[#007CC2]" />
              <span>Cutoff: <strong className="text-slate-900">4:30 PM</strong></span>
            </span>
            <span className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-700 shadow-2xs">
              <ShieldCheck size={12} className="text-emerald-600" />
              <span>100% Insured</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-700 shadow-2xs">
              <Zap size={12} className="text-amber-500" />
              <span>Live AWB</span>
            </span>
          </div>
        </div>

        {/* 5 Courier Partner Tiles with Official Vector Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {COURIER_PARTNERS.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 hover:border-[#007CC2] p-3.5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all group"
            >
              <div>
                {/* Logo & Mode Pill */}
                <div className="flex items-center justify-between gap-1 mb-2.5">
                  <div className="h-6 flex items-center">
                    {c.logo}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                    {c.mode}
                  </span>
                </div>

                {/* Subtitle / Name */}
                <div className="text-xs font-extrabold text-slate-900 group-hover:text-[#007CC2] transition-colors leading-tight mb-1">
                  {c.name}
                </div>
              </div>

              {/* Transit Details */}
              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-2 border-t border-slate-100 mt-2">
                <span className="font-semibold text-slate-800">{c.speed}</span>
                <span className="text-[10px] text-slate-400 truncate max-w-[95px]">{c.reach}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
