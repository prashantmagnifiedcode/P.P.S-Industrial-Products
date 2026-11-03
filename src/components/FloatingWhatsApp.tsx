'use client';

import React from 'react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = '919350509134',
  defaultMessage = 'Hi P.P.S Industrial, I would like to inquire about cutting tools and pricing.',
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center group">
      {/* Floating Tooltip Pill (Desktop) */}
      <div 
        className="pointer-events-none absolute right-[calc(100%+12px)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out hidden sm:flex items-center gap-2.5 bg-slate-950/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-xl border border-white/10 whitespace-nowrap"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <div className="flex flex-col">
          <span className="font-bold text-slate-100">Chat on WhatsApp</span>
          <span className="text-[10px] text-emerald-400 font-medium">+91 93505 09134 • Instant Reply</span>
        </div>
        {/* Subtle arrow pointer */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-950/90 border-t border-r border-white/10 rotate-45" />
      </div>

      {/* Main Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with P.P.S Industrial Products on WhatsApp (+91 9350509134)"
        title="Chat with us on WhatsApp (+91 9350509134)"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        {/* Radar ping ripple animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Online Status Dot */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-sm">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
        </span>

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-7 h-7 fill-current drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
        </svg>
      </a>
    </div>
  );
}
