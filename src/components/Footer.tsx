'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Award,
  ExternalLink
} from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

export default function Footer() {
  const { openRfqModal } = useRfq();

  return (
    <footer className="bg-black text-white border-t border-neutral-900" id="contact">
      
      {/* Top Banner: Emergency Tooling Delivery & Breakdown Support */}
      <div className="bg-[#007CC2] border-b border-[#006aa6] text-white py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-extrabold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Urgent Spindle Breakdown Support</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                Facing CNC Line Stoppage or Critical Tool Wear in Delhi-NCR?
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                Our Sector 5 Gurugram depot holds extensive safety stock of standard TNMG/CNMG inserts, BT40 chucks, and end mills for express dispatch Pan India.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:+919350509134"
                className="px-5 py-3 rounded-2xl bg-white text-[#007CC2] hover:bg-slate-100 font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Phone size={15} />
                <span>Call Hotline: +91 93505 09134</span>
              </a>

              <button
                type="button"
                onClick={() => openRfqModal()}
                className="px-5 py-3 rounded-2xl bg-[#005688] hover:bg-[#00436a] border border-white/25 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <span>Instant RFQ Dispatch</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="py-14 sm:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Column 1: Brand & Firm Profile (4 cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <Link href="/" className="flex items-center gap-3 group focus:outline-none">
                <Image
                  src="/ppslogo-white.png"
                  alt="P.P.S Industrial Products Logo"
                  width={44}
                  height={44}
                  className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
                />
                <div className="flex flex-col">
                  <span className="font-black text-lg text-white tracking-tight leading-tight group-hover:text-[#38bdf8] transition-colors">
                    P.P.S Industrial Products
                  </span>
                  <span className="text-[11px] font-bold text-[#38bdf8] uppercase tracking-wider">
                    Authorized Dealer • Est. 2010
                  </span>
                </div>
              </Link>

              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Specialized distributor and stockist of high-performance tungsten carbide inserts, CNC collet chuck tooling, solid carbide end mills, and precision metrology instruments catering to automotive, aerospace, and precision engineering industries across India.
              </p>

              {/* Trust Badges */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                  <ShieldCheck size={16} className="text-[#38bdf8]" />
                  <span>GSTIN Registered &amp; Active B2B Supplier</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                  <Award size={16} className="text-amber-400" />
                  <span>100% Genuine Inserts with Batch Traceability</span>
                </div>
              </div>
            </div>

            {/* Column 2: Tooling Solutions (3 cols) */}
            <div className="lg:col-span-3 space-y-3 text-left">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38bdf8] border-b border-neutral-900 pb-2">
                Precision Tooling
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/inserts" className="text-white font-bold hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-[#38bdf8]" />
                    <span>Cutting Inserts Table &amp; Speeds</span>
                    <span className="px-1.5 py-0.2 rounded bg-[#007CC2] text-[9px] font-black uppercase text-white">LIVE SPECS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/expo" className="text-amber-400 hover:text-white transition-colors flex items-center gap-1.5 font-bold">
                    <ChevronRight size={13} className="text-amber-400" />
                    <span>Manufacturing Expos &amp; Trade Shows</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tooling" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-bold">
                    <ChevronRight size={13} className="text-[#38bdf8]" />
                    <span>Browse All Tooling (12 Lines)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tooling/tnmg-cnmg-wnmg-inserts" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>Carbide Inserts (TNMG / CNMG / WNMG)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tooling/apmt-face-mills" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>Milling Cutters &amp; APMT 1135</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tooling/solid-carbide-end-mills" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>Solid Carbide 4-Flute End Mills</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tooling/bt40-bt50-spindle-chucks" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>BT40 &amp; BT50 Collet Chuck Systems</span>
                  </Link>
                </li>
                <li>
                  <Link href="/er-tools" className="text-slate-200 hover:text-[#38bdf8] font-semibold transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-[#38bdf8]" />
                    <span>ER Collets &amp; Toolholders (DIN 6499)</span>
                    <span className="px-1.5 py-0.5 rounded bg-cyan-600 text-[9px] font-extrabold uppercase text-white">SHOWCASE</span>
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>Hard-Turning CBN &amp; PCD Inserts</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Authorized Brand Partners (2 cols) */}
            <div className="lg:col-span-2 space-y-3 text-left">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38bdf8] border-b border-neutral-900 pb-2">
                Brand Partners
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="#partners" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>Lexustec Tools</span>
                  </Link>
                </li>
                <li>
                  <Link href="#partners" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>Hittco Tools</span>
                  </Link>
                </li>
                <li>
                  <Link href="#partners" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>Union Material</span>
                  </Link>
                </li>
                <li>
                  <Link href="#pferd" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>PFERD Germany</span>
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>CP Grat-Ex</span>
                  </Link>
                </li>
                <li>
                  <Link href="#partners" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>Shaviv by Vargus</span>
                  </Link>
                </li>
                <li>
                  <Link href="#blades" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight size={13} className="text-slate-600" />
                    <span>Jaldhara Tools</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Headquarters & Contact Info (3 cols) */}
            <div className="lg:col-span-3 space-y-3.5 text-left">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38bdf8]">
                  Headquarters
                </h4>
                <a
                  href="https://maps.google.com/?q=Sheetla+Mata+Road+Sector+5+Gurugram+122001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-slate-400 hover:text-[#38bdf8] flex items-center gap-1 transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink size={10} />
                </a>
              </div>

              {/* Embedded Interactive Map Card with Direct Navigation */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 h-28 sm:h-32 w-full bg-neutral-900 shadow-sm group">
                <iframe
                  title="P.P.S Industrial Products Depot Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.384639912759!2d77.02441117549377!3d28.459500075759735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d5828859bf%3A0xc39f82d2b512c1e7!2sSheetla%20Mata%20Rd%2C%20Sector%205%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <a
                  href="https://maps.google.com/?q=Sheetla+Mata+Road+Sector+5+Gurugram+122001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/85 hover:bg-[#007CC2] text-white border border-white/20 text-[10px] font-bold backdrop-blur-xs flex items-center gap-1 shadow-sm transition-colors"
                  title="Open location in Google Maps"
                >
                  <MapPin size={10} className="text-[#38bdf8]" />
                  <span>Navigate</span>
                  <ExternalLink size={9} />
                </a>
              </div>

              {/* Address displayed directly below the map */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin size={15} className="text-[#38bdf8] shrink-0 mt-0.5" />
                  <div className="text-slate-300 leading-relaxed">
                    <strong className="text-white block font-semibold">Office No.4, Behind Petrol Pump,</strong>
                    Near Sec-5, Part-VI, Main Sheetla Mata Road, Gurugram, Haryana - 122001, India
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-[#38bdf8] shrink-0" />
                  <a href="tel:+919350509134" className="text-slate-300 hover:text-white font-bold transition-colors">
                    +91 93505 09134
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-[#38bdf8] shrink-0" />
                  <a href="mailto:ppsindustrialproducts@yahoo.in" className="text-slate-300 hover:text-white font-medium transition-colors truncate">
                    ppsindustrialproducts@yahoo.in
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#38bdf8] shrink-0" />
                  <span className="text-slate-400">
                    Mon–Sat: 8:30 AM – 7:30 PM IST
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="border-t border-neutral-900 py-5 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} P.P.S Industrial Products. All rights reserved. Precision Cutting Tools &amp; Industrial Engineering Supplier.
            </p>
            <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400">
              <span className="text-emerald-500">GST Active Supplier</span>
              <span>•</span>
              <span>Gurugram Central Depot</span>
              <span>•</span>
              <span>Pan India Delivery</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
