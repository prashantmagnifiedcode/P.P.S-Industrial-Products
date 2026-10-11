'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Folder, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  Crosshair, 
  MapPin, 
  Clock, 
  ChevronDown,
  ExternalLink,
  MessageCircle,
  Zap,
  ShieldCheck,
  Truck,
  Copy,
  Check
} from 'lucide-react';

const QUICK_TOPICS = [
  { id: 'quote', label: '🏷️ Price & Stock Quote', subject: 'Carbide Inserts & Tooling Quote' },
  { id: 'breakdown', label: '⚡ Emergency Line-Stop Breakdown', subject: 'Emergency Spindle Breakdown Line-Stop' },
  { id: 'collets', label: '🧰 CNC Collets & Holders', subject: 'CNC Collets & Toolholding Inquiry' },
  { id: 'dealership', label: '📦 Wholesale / Dealership', subject: 'Dealership & Wholesale Sourcing' }
];

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<'details' | 'locate'>('details');
  const [selectedTopic, setSelectedTopic] = useState<string>('quote');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Carbide Inserts & Tooling Quote',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleTopicSelect = (topic: typeof QUICK_TOPICS[0]) => {
    setSelectedTopic(topic.id);
    setFormData(prev => ({ ...prev, subject: topic.subject }));
  };

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: 'Carbide Inserts & Tooling Quote',
          message: ''
        });
      }, 5000);
    }, 900);
  };

  return (
    <section className="w-full bg-slate-50/70 border-b border-slate-200 py-16 sm:py-24 relative overflow-hidden" id="contact">
      
      {/* 1. Precision CNC & Cutting Tools Background Illustration (Brand Colors) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50 sm:opacity-60 mix-blend-multiply">
        <Image
          src="/contact-illustration.jpg"
          alt="P.P.S Precision Cutting Tools & Industrial Infrastructure"
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center select-none"
        />
        {/* Soft edge-blending gradient overlay to ensure perfect card contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white/20 to-slate-50/80" />
      </div>

      {/* Precision Coordinate Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_top,#007CC215,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#007CC208_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section: High-Clarity Headline & Fast-Track Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Let&rsquo;s Start a <span className="bg-gradient-to-r from-[#007CC2] via-[#006aa6] to-[#004f7c] bg-clip-text text-transparent">Conversation</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Drop your requirements below for factory-direct tooling quotes, emergency NCR buffer dispatches, or locate our Gurugram central depot.
          </p>
        </div>

        {/* Main Grid: Form (Left) & Contact Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Focused High-Conversion Form Card */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
            
            {/* Quick WhatsApp Alternative Banner (Huge B2B Friction Reducer) */}
            <div className="mb-6 p-3.5 px-4 rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-emerald-950 font-medium">
                <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <span className="font-bold text-emerald-900">Need Immediate Pricing? </span>
                  <span className="text-emerald-700">Chat directly with tooling engineers on WhatsApp</span>
                </div>
              </div>
              <a
                href="https://wa.me/919350509134?text=Hi%20PPS%2C%20I%20would%20like%20to%20get%20a%20cutting%20tools%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-2xs transition-colors shrink-0 flex items-center gap-1.5"
              >
                <span>WhatsApp Now</span>
                <ArrowRight size={12} />
              </a>
            </div>

            {/* Quick Topic Chips (Instant Focus Selector) */}
            <div className="mb-5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                What do you need help with?
              </label>
              <div className="flex flex-wrap gap-2">
                {QUICK_TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleTopicSelect(topic)}
                    className={`py-1.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      selectedTopic === topic.id
                        ? 'bg-[#f0f8fc] border-[#007CC2] text-[#007CC2] shadow-2xs font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-14 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200 shadow-sm animate-bounce">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Inquiry Dispatched Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed mb-4">
                  Thank you, <strong>{formData.name || 'Valued Customer'}</strong>. Your tooling request has been assigned to our Gurugram technical desk. An engineer will follow up within <strong>30 minutes</strong>.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                  <span>Reference ID: PPS-{(Math.random() * 900000 + 100000).toFixed(0)}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Name <span className="text-[#007CC2]">*</span>
                    </label>
                    <div className="relative flex items-center rounded-xl border border-slate-200 focus-within:border-[#007CC2] focus-within:ring-3 focus-within:ring-[#007CC2]/10 transition-all bg-white overflow-hidden shadow-2xs">
                      <div className="pl-3.5 text-slate-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full py-3 pl-2.5 pr-3 text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none font-medium"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Email <span className="text-[#007CC2]">*</span>
                    </label>
                    <div className="relative flex items-center rounded-xl border border-slate-200 focus-within:border-[#007CC2] focus-within:ring-3 focus-within:ring-[#007CC2]/10 transition-all bg-white overflow-hidden shadow-2xs">
                      <div className="pl-3.5 text-slate-400">
                        <Mail size={16} />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full py-3 pl-2.5 pr-3 text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Phone Number <span className="text-[#007CC2] font-semibold text-[10px]">(For urgent callback)</span>
                    </label>
                    <div className="relative flex items-center rounded-xl border border-slate-200 focus-within:border-[#007CC2] focus-within:ring-3 focus-within:ring-[#007CC2]/10 transition-all bg-white overflow-hidden shadow-2xs">
                      <div className="pl-3.5 text-slate-400">
                        <Phone size={16} />
                      </div>
                      <input
                        type="tel"
                        placeholder="+91 93505 09134"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full py-3 pl-2.5 pr-3 text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none font-medium"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Company / Workshop Name
                    </label>
                    <div className="relative flex items-center rounded-xl border border-slate-200 focus-within:border-[#007CC2] focus-within:ring-3 focus-within:ring-[#007CC2]/10 transition-all bg-white overflow-hidden shadow-2xs">
                      <div className="pl-3.5 text-slate-400">
                        <Building2 size={16} />
                      </div>
                      <input
                        type="text"
                        placeholder="Your Company / Machine Shop"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full py-3 pl-2.5 pr-3 text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Subject */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Inquiry Subject <span className="text-[#007CC2]">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 focus-within:border-[#007CC2] focus-within:ring-3 focus-within:ring-[#007CC2]/10 transition-all bg-white overflow-hidden shadow-2xs">
                    <div className="pl-3.5 text-slate-400">
                      <Folder size={16} />
                    </div>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full py-3 pl-2.5 pr-9 text-sm text-slate-800 bg-transparent outline-none appearance-none font-medium cursor-pointer"
                    >
                      <option value="Carbide Inserts & Tooling Quote">Carbide Inserts &amp; Tooling Quote</option>
                      <option value="CNC Collets & Toolholding Inquiry">CNC Collets &amp; Toolholding Inquiry</option>
                      <option value="Emergency Spindle Breakdown Line-Stop">Emergency Spindle Breakdown Line-Stop</option>
                      <option value="Technical Application & Tool Trial">Technical Application &amp; Tool Trial</option>
                      <option value="Dealership & Wholesale Sourcing">Dealership &amp; Wholesale Sourcing</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <div className="absolute right-3.5 pointer-events-none text-slate-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Requirement Details <span className="text-[#007CC2]">*</span>
                    </label>
                    <span className="text-[11px] font-medium text-slate-400">
                      {formData.message.length}/2000
                    </span>
                  </div>
                  <div className="relative rounded-xl border border-slate-200 focus-within:border-[#007CC2] focus-within:ring-3 focus-within:ring-[#007CC2]/10 transition-all bg-white overflow-hidden shadow-2xs">
                    <textarea
                      required
                      rows={4}
                      maxLength={2000}
                      placeholder="Specify tool grades (e.g. TNMG 160408, ER32 collet, BT40 holder, diameter, material to cut, or quantity needed)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none resize-none font-medium"
                    />
                  </div>
                </div>

                {/* Cloudflare Turnstile Verification Badge */}
                <div className="pt-1 flex items-center justify-between">
                  <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-slate-50/90 border border-slate-200 shadow-2xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                      <CheckCircle2 size={13} className="stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">Verified Secure</span>
                    <div className="h-4 w-px bg-slate-200 ml-0.5" />
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                      <svg className="w-4 h-4 text-[#F38020]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.8 10.3c-.3-2.6-2.5-4.6-5.2-4.6-2.3 0-4.3 1.5-5 3.6-.4-.1-.8-.2-1.3-.2-2.3 0-4.2 1.8-4.3 4.1C1.3 13.5 0 15 0 16.8 0 19.1 1.9 21 4.2 21h14.6c2.9 0 5.2-2.3 5.2-5.2 0-2.6-1.9-4.8-4.5-5.2-.2-.1-.5-.2-.7-.3z"/>
                      </svg>
                      <span>Cloudflare</span>
                    </div>
                    <span className="text-[9px] text-slate-400">Privacy • Terms</span>
                  </div>

                  <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                    🔒 SSL Encrypted • Zero Spam
                  </span>
                </div>

                {/* High-Impact Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-black text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75"
                  >
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Send Inquiry & Request Quote'}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Trust Badges directly beneath CTA */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px] text-slate-500 font-medium">
                  <div className="flex items-center justify-center gap-1">
                    <ShieldCheck size={13} className="text-[#007CC2]" />
                    <span>100% Genuine</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Zap size={13} className="text-[#007CC2]" />
                    <span>&lt; 30 Min Response</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Truck size={13} className="text-[#007CC2]" />
                    <span>Same-Day NCR Buffer</span>
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Hours Card */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            
            {/* Top Switcher Tabs: Details vs Locate Us */}
            <div className="p-1 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('details')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'details'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Info size={14} className={activeTab === 'details' ? 'text-[#007CC2]' : 'text-slate-400'} />
                <span>Details</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('locate')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'locate'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Crosshair size={14} className={activeTab === 'locate' ? 'text-[#007CC2]' : 'text-slate-400'} />
                <span>Locate Us</span>
              </button>
            </div>

            {/* Tab 1: Details Active */}
            {activeTab === 'details' ? (
              <div className="space-y-6">
                
                {/* Direct Contact Cards */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Contact Desk
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Support</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Call Us */}
                    <div className="p-3.5 px-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#007CC2] transition-colors flex items-center justify-between gap-3 group shadow-2xs">
                      <a href="tel:+919350509134" className="flex items-center gap-3.5 flex-1 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Phone size={17} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Call Us
                          </div>
                          <div className="text-sm font-black text-slate-900 group-hover:text-[#007CC2] transition-colors">
                            +91 93505 09134
                          </div>
                        </div>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleCopy('+919350509134', 'phone')}
                        title="Copy phone number"
                        className="p-2 rounded-lg text-slate-400 hover:text-[#007CC2] hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        {copiedPhone ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      </button>
                    </div>

                    {/* Email Us */}
                    <div className="p-3.5 px-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#007CC2] transition-colors flex items-center justify-between gap-3 group shadow-2xs">
                      <a href="mailto:ppsindustrialproducts@yahoo.in" className="flex items-center gap-3.5 flex-1 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Mail size={17} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Email Us
                          </div>
                          <div className="text-sm font-black text-slate-900 group-hover:text-[#007CC2] transition-colors truncate">
                            ppsindustrialproducts@yahoo.in
                          </div>
                        </div>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleCopy('ppsindustrialproducts@yahoo.in', 'email')}
                        title="Copy email address"
                        className="p-2 rounded-lg text-slate-400 hover:text-[#007CC2] hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      </button>
                    </div>

                    {/* Headquarters */}
                    <div className="p-3.5 px-4 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3.5 shadow-2xs">
                      <div className="w-10 h-10 rounded-xl bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] flex items-center justify-center shrink-0">
                        <MapPin size={17} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Headquarters &amp; Central Depot
                        </div>
                        <div className="text-xs font-bold text-slate-900 leading-snug">
                          Shop-No. 4, Behind Petrol Pump, Sector 5, Gurugram-122001, Haryana
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <Clock size={14} className="text-[#007CC2]" />
                      <span className="uppercase tracking-wider">Business Hours</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">Indian Standard Time (IST)</span>
                  </div>

                  {/* Dark Night Schedule Box */}
                  <div className="bg-[#0B1528] rounded-2xl p-5 border border-slate-800 text-white shadow-inner space-y-3">
                    {/* Mon - Fri */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300">Mon - Fri</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-100 font-bold tracking-wide">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>

                    {/* Saturday */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300">Saturday</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-100 font-bold tracking-wide">
                        10:00 AM - 2:00 PM
                      </span>
                    </div>

                    {/* Sunday */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300">Sunday</span>
                      <span className="px-2.5 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold text-[11px]">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* Tab 2: Locate Us (Map & Directions) */
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-[270px] bg-slate-100 shadow-inner">
                  <iframe
                    title="P.P.S Industrial Products Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.384639912759!2d77.02441117549377!3d28.459500075759735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d5828859bf%3A0xc39f82d2b512c1e7!2sSheetla%20Mata%20Rd%2C%20Sector%205%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-bold text-slate-900">Sector 5 Central Depot</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Main Sheetla Mata Road, Gurugram • Pan India Dispatch Hub
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sheetla+Mata+Road+Sector+5+Gurugram+122001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors shrink-0"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
