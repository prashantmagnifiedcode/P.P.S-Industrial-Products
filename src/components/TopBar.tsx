'use client';

import { Phone, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <aside
      aria-label="Quick contact and certifications"
      className="w-full bg-[#007CC2] text-white border-b border-[#006aa6] text-xs relative z-50 select-none shadow-sm hidden sm:block"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        {/* Left Section: Sector 5 Depot & Dispatch Notice */}
        <div className="flex items-center gap-2 text-white/95 font-medium text-[11px] whitespace-nowrap">
          <MapPin size={13} className="text-white shrink-0" />
          <span className="font-bold">Sector 5 Depot, Gurugram</span>
          <span className="text-white/40">•</span>
          <span>Express Pan India Dispatch</span>
        </div>

        {/* Right Section: Hours, Phone, Email, GST */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px] shrink-0">
          {/* Hours (visible on xl screens to prevent truncation) */}
          <div className="hidden xl:flex items-center gap-1.5 text-white/85">
            <Clock size={12} className="text-white/85" />
            <span>Mon–Sat: 8:30 AM – 7:30 PM IST</span>
          </div>

          <div className="hidden xl:block w-px h-3.5 bg-white/25" />

          {/* Direct Phone */}
          <a
            href="tel:+919350509134"
            className="flex items-center gap-1.5 font-bold text-white hover:text-blue-100 transition-colors group"
            title="Call P.P.S Industrial Products Hotline"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#007CC2] transition-colors">
              <Phone size={10} className="fill-current" />
            </div>
            <span className="tracking-tight">+91 93505 09134</span>
          </a>

          <div className="hidden sm:block w-px h-3.5 bg-white/25" />

          {/* Email */}
          <a
            href="mailto:ppsindustrialproducts@yahoo.in"
            className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            title="Send RFQ Email to ppsindustrialproducts@yahoo.in"
          >
            <Mail size={12} className="text-white" />
            <span>ppsindustrialproducts@yahoo.in</span>
          </a>

          <div className="hidden sm:block w-px h-3.5 bg-white/25" />

          {/* GSTIN Badge */}
          <div className="flex items-center gap-1 text-[11px] font-semibold text-white bg-white/15 border border-white/25 px-2 py-0.5 rounded shadow-sm">
            <ShieldCheck size={12} className="text-white" />
            <span>GSTIN Verified</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
