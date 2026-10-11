'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  ArrowUpRight
} from 'lucide-react';

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  whatsappMessage: string;
  tag: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    initials: 'RS',
    name: 'Rakesh Kumar Srivastava',
    role: 'CO-FOUNDER & DIRECTOR',
    location: 'Delhi NCR & Gurugram',
    phone: '+919350509134',
    email: 'ppsindustrialproducts@yahoo.in',
    whatsappMessage: 'Hi Rakesh ji, I would like to discuss cutting tool requirements with P.P.S.',
    tag: 'Executive Director'
  },
  {
    initials: 'CS',
    name: 'Customer Support Hub',
    role: 'EXECUTIVE SUPPORT OFFICER',
    location: 'Sector 5 Depot, Gurugram',
    phone: '+919350509134',
    email: 'ppsindustrialproducts@yahoo.in',
    whatsappMessage: 'Hi P.P.S Support, I need help with tooling availability and order status.',
    tag: 'Dispatch & Orders'
  },
  {
    initials: 'MP',
    name: 'Madhya Pradesh Sales',
    role: 'REGIONAL SALES MANAGER',
    location: 'Indore & Central Hub',
    phone: '+919350509134',
    email: 'ppsindustrialproducts@yahoo.in',
    whatsappMessage: 'Hi, I need technical tool trials and wholesale supply in MP region.',
    tag: 'Regional Hub'
  }
];

export default function TeamSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 pb-12 sm:pb-16" id="team">
      
      {/* 1. Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>MEET OUR</span>
              <span className="bg-[#f0f8fc] text-[#007CC2] border border-[#bde2f5] px-2.5 py-0.5 rounded-md font-black shadow-2xs">
                TEAM
              </span>
            </h2>
          </div>

          {/* Real-time Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#007CC2] animate-pulse"></span>
            <span className="font-bold text-slate-900">SUPPORT ACTIVE</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 text-[11px] font-medium">09:00 - 18:30 IST</span>
          </div>
        </div>
      </div>

      {/* 2. Full-Width High-Resolution Team Stage (Expanded Height & Width) */}
      <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-y border-slate-100 flex items-center justify-center">
        
        {/* Crisp, Crystal-Clear 3D TEAM Image */}
        <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <Image
            src="/team-hd.jpg"
            alt="P.P.S Industrial Products Team"
            fill
            sizes="100vw"
            className="object-contain object-center scale-100 sm:scale-105"
            priority
          />
        </div>

        {/* Soft, Transparent Gradient Bottom Fade for Clean Overlap */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* 3. Overlapping Clean Team Cards (High-Quality, Low-Text UI) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 lg:-mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#007CC2] p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header: Monogram Avatar + Tag */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#007CC2] text-white flex items-center justify-center font-black text-xs shadow-xs tracking-wider">
                    {member.initials}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-[#f0f8fc] text-[#007CC2] border border-[#bde2f5]">
                    {member.tag}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#007CC2] transition-colors leading-tight">
                  {member.name}
                </h3>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {member.role}
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-2 mb-4">
                  <MapPin size={12} className="text-[#007CC2] shrink-0" />
                  <span>{member.location}</span>
                </div>
              </div>

              {/* Action Buttons: Primary WhatsApp + Call & Email Direct */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <a
                  href={`https://wa.me/919350509134?text=${encodeURIComponent(member.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle size={14} className="fill-current" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={13} className="opacity-80" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${member.phone}`}
                    className="py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#007CC2] font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone size={11} className="text-[#007CC2]" />
                    <span>Call Direct</span>
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#007CC2] font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Mail size={11} className="text-[#007CC2]" />
                    <span>Email Desk</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
