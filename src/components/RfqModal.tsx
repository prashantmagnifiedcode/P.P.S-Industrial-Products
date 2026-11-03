'use client';

import React, { useState, useEffect } from 'react';
import styles from './RfqModal.module.css';
import { 
  X, 
  Trash2, 
  CheckCircle, 
  Send, 
  Building2, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Plus,
  Minus,
  MessageCircle,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import { useRfq } from '@/context/RfqContext';

export default function RfqModal() {
  const { 
    isRfqModalOpen, 
    closeRfqModal, 
    rfqItems, 
    removeFromRfq, 
    clearRfq,
    activeProductForQuote 
  } = useRfq();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: 'Gurugram / Manesar Industrial Hub',
    spindleType: 'VMC (BT40 / BT50 Spindle)',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqRefNumber, setRfqRefNumber] = useState('');

  // Lock body scroll and listen for Escape key when sidebar is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeRfqModal();
      }
    };

    if (isRfqModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRfqModalOpen, closeRfqModal]);

  if (!isRfqModalOpen) return null;

  const handleQuantityChange = (id: string, delta: number) => {
    const current = quantities[id] || 10;
    const updated = Math.max(1, current + delta);
    setQuantities(prev => ({ ...prev, [id]: updated }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `RFQ-PPS-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqRefNumber(generatedRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    clearRfq();
    closeRfqModal();
  };

  // WhatsApp message generator from current RFQ items and form
  const getWhatsAppRfqUrl = () => {
    const itemsSummary = rfqItems.length > 0 
      ? rfqItems.map(item => `• ${item.sku || item.name} (${quantities[item.id] || 10} pcs)`).join('%0A')
      : 'General Tooling Consultation';

    const text = `Hi P.P.S Industrial Products,%0A%0AI would like to request an official wholesale quotation:%0A%0A*Selected Items:*%0A${itemsSummary}%0A%0A*Company:* ${encodeURIComponent(formData.companyName || 'Not specified')}%0A*Contact:* ${encodeURIComponent(formData.contactPerson || 'Not specified')}%0A*Location:* ${encodeURIComponent(formData.city)}`;
    return `https://wa.me/919350509134?text=${text}`;
  };

  return (
    <div 
      className={styles.overlay} 
      onClick={closeRfqModal}
      aria-label="Backdrop"
    >
      <div 
        className={styles.sidebar}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rfq-sidebar-title"
      >
        {/* 1. Header: Premium Lighter Gray with Brand Blue Accents */}
        <div className="bg-gradient-to-r from-slate-100/90 via-slate-50 to-white border-b border-slate-200/90 p-5 sm:p-6 flex items-start justify-between gap-4 shrink-0 shadow-2xs">
          <div className="space-y-1.5 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007CC2]/10 text-[#007CC2] border border-[#007CC2]/20 text-[11px] font-extrabold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Direct Factory Wholesale RFQ</span>
            </div>
            <h2 id="rfq-sidebar-title" className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
              Request for Quotation
            </h2>
            <p className="text-xs text-slate-500 font-normal">
              P.P.S Industrial Products • Sector 5 Gurugram Central Depot
            </p>
          </div>

          <button 
            type="button" 
            onClick={closeRfqModal}
            className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 shadow-2xs flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close RFQ sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* 2. Body Area (Form or Success State) */}
        {isSubmitted ? (
          /* Success Confirmation State */
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500/30 text-emerald-600 flex items-center justify-center shadow-xs">
              <CheckCircle size={38} className="animate-in zoom-in duration-300" />
            </div>

            <div className="space-y-2 max-w-md">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Quotation Request Dispatched!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Thank you, <strong className="text-slate-900">{formData.contactPerson || 'Valued Client'}</strong>. Our tooling commercial team at Sector 5 Gurugram depot has received your specifications.
              </p>
            </div>

            {/* Reference ID Pill Box */}
            <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center space-y-1.5 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Official Quotation Reference ID
              </span>
              <span className="font-mono text-2xl font-black text-[#007CC2] tracking-wider block">
                {rfqRefNumber}
              </span>
              <p className="text-xs text-slate-500 pt-1">
                Official rate card &amp; batch lead time will be sent to <strong className="text-slate-700">{formData.email || 'your email'}</strong> within 2 business hours.
              </p>
            </div>

            <div className="w-full max-w-md pt-2 space-y-3">
              <a
                href={getWhatsAppRfqUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle size={16} />
                <span>Open Instant WhatsApp Thread</span>
              </a>

              <button 
                type="button" 
                onClick={handleReset}
                className="w-full py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Done &amp; Return to Catalog
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col min-h-0">
            <div className={`${styles.drawerBody} p-5 sm:p-6 space-y-6`}>
              
              {/* Section 1: Selected Tooling Items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800">
                    <Layers size={16} className="text-[#007CC2]" />
                    <span>Selected Tooling &amp; Inserts</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#007CC2] text-white text-[11px] font-bold">
                      {rfqItems.length}
                    </span>
                  </div>

                  {rfqItems.length > 0 && (
                    <button
                      type="button"
                      onClick={clearRfq}
                      className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {rfqItems.length === 0 ? (
                  <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-1.5">
                    <p className="font-bold text-sm text-slate-800">No specific items in quotation list.</p>
                    <span className="text-xs text-slate-500 block leading-relaxed max-w-sm mx-auto">
                      You can submit a general technical quotation requirement below or add parts using the "RFQ" button on any product.
                    </span>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                    {rfqItems.map((item) => {
                      const qty = quantities[item.id] || 10;
                      return (
                        <div 
                          key={item.id} 
                          className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-3.5 flex items-center justify-between gap-3 hover:border-slate-300 transition-colors shadow-2xs"
                        >
                          <div className="min-w-0 flex-1 space-y-0.5">
                            <span className="font-mono text-xs font-extrabold text-[#007CC2] block truncate">
                              {item.sku || 'SPEC-PPS'}
                            </span>
                            <span className="font-bold text-sm text-slate-900 block truncate">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-500 block truncate">
                              {item.isoCode || item.category} {item.grade ? `• ${item.grade}` : ''}
                            </span>
                          </div>

                          <div className="flex items-center gap-2.5 shrink-0">
                            {/* Quantity Stepper */}
                            <div className="flex items-center bg-white border border-slate-200 rounded-xl p-0.5 shadow-2xs">
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(item.id, -5)}
                                className="w-7 h-7 rounded-lg bg-slate-50 hover:bg-[#007CC2] hover:text-white text-slate-700 font-bold flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-xs font-black text-slate-900 px-2 tabular-nums">
                                {qty} pcs
                              </span>
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(item.id, 5)}
                                className="w-7 h-7 rounded-lg bg-slate-50 hover:bg-[#007CC2] hover:text-white text-slate-700 font-bold flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus size={12} />
                              </button>
                            </div>

                            {/* Delete Button */}
                            <button
                              type="button"
                              onClick={() => removeFromRfq(item.id)}
                              className="w-8 h-8 rounded-xl bg-white hover:bg-red-50 text-slate-400 hover:text-red-600 border border-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                              title="Remove item"
                              aria-label="Remove item"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Quality Assurance Badge */}
                <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-3.5 flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#007CC2] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600 leading-relaxed font-normal">
                    <strong className="text-slate-900 font-bold block">100% Genuine Certified Carbide &amp; Tooling</strong>
                    <span>All inserts &amp; holders are genuine OEM products with verified batch test certificates from our Sector 5 Gurugram depot.</span>
                  </div>
                </div>
              </div>

              {/* Section 2: Procurement & Buyer Details */}
              <div className="space-y-4 pt-2 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800">
                  <Building2 size={16} className="text-[#007CC2]" />
                  <span>Procurement &amp; Machine Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Company / Workshop Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Precision Engineering"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Contact Person Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Mobile Number (WhatsApp Quote) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 9811X XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Official Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="purchase@apexprecision.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Delivery Industrial Hub
                    </label>
                    <div className="relative">
                      <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                      >
                        <option value="Gurugram / Manesar Industrial Hub">Gurugram / Manesar Industrial Hub</option>
                        <option value="Delhi NCR / Okhla / Mayapuri">Delhi NCR / Okhla / Mayapuri</option>
                        <option value="Faridabad Industrial Corridor">Faridabad Industrial Corridor</option>
                        <option value="Pune / Chakan / Bhosari">Pune / Chakan / Bhosari</option>
                        <option value="Bangalore / Peenya">Bangalore / Peenya</option>
                        <option value="Chennai / Sriperumbudur">Chennai / Sriperumbudur</option>
                        <option value="Pan India (All Industrial Hubs)">Pan India (All Industrial Hubs)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Machine / Spindle Type
                    </label>
                    <select
                      value={formData.spindleType}
                      onChange={(e) => setFormData({ ...formData, spindleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                    >
                      <option value="VMC (BT40 / BT50 Spindle)">VMC (BT40 / BT50 Spindle)</option>
                      <option value="CNC Turning Center (BMT / VDI Turret)">CNC Turning Center (BMT / VDI Turret)</option>
                      <option value="Swiss Type Automatic Lathe">Swiss Type Automatic Lathe</option>
                      <option value="Surface / Cylindrical Grinding">Surface / Cylindrical Grinding</option>
                      <option value="Conventional Toolroom Machinery">Conventional Toolroom Machinery</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    Target Material, Hardness &amp; Special Machining Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Machining EN8 / SS304 / Die Steel 55 HRC. Looking for 50 boxes of TNMG inserts and BT40 collet chucks with test certificate..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs resize-y"
                  />
                </div>
              </div>

            </div>

            {/* 3. Sticky Action Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200/90 shadow-lg shrink-0 space-y-2.5">
              <button 
                type="submit" 
                className="w-full py-3.5 px-6 rounded-xl bg-[#007CC2] hover:bg-[#0091e6] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-[#007CC2]/30 active:scale-[0.99] transition-all cursor-pointer"
              >
                <Send size={16} />
                <span>Submit Quotation Request to P.P.S Sales Team</span>
              </button>

              <a
                href={getWhatsAppRfqUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span>Or send specs instantly to WhatsApp Hotline (+91 93505 09134)</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
