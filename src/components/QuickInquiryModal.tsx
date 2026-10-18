'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Phone, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Loader2,
  Zap
} from 'lucide-react';

const STORAGE_KEY_DISMISSED = 'pps_quick_modal_dismissed';
const STORAGE_KEY_CLOSE_COUNT = 'pps_quick_modal_close_count';
const STORAGE_KEY_SUBMITTED = 'pps_quick_modal_submitted';

export default function QuickInquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Track scroll and timer references
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollListenerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Only run on browser client
    if (typeof window === 'undefined') return;

    // Check localStorage (web storage)
    const isDismissed = localStorage.getItem(STORAGE_KEY_DISMISSED) === 'true';
    const isSubmitted = localStorage.getItem(STORAGE_KEY_SUBMITTED) === 'true';
    const closeCount = parseInt(localStorage.getItem(STORAGE_KEY_CLOSE_COUNT) || '0', 10);

    // If user already submitted or dismissed 2+ times, do not trigger automatically
    if (isDismissed || isSubmitted || closeCount >= 2) {
      return;
    }

    if (closeCount === 0) {
      // 1st visit trigger: Exactly 20 seconds after visiting the page
      timerRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 20000);
    } else if (closeCount === 1) {
      // 2nd visit / after 1st close: Trigger after scrolling ~1.5 sections OR after 90 seconds (1.5 min)
      setupSecondTrigger();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (scrollListenerRef.current) {
        window.removeEventListener('scroll', scrollListenerRef.current);
      }
    };
  }, []);

  // Set up trigger for 1.5 section scroll or 90s timer
  const setupSecondTrigger = () => {
    // 90 seconds (1.5 min) timer fallback
    timerRef.current = setTimeout(() => {
      setIsOpen(true);
      cleanupScroll();
    }, 90000);

    // Scroll listener: Trigger when scrolled ~1.5 viewport heights (approx 1.5 sections)
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 1.5;
      if (window.scrollY >= scrollThreshold) {
        setIsOpen(true);
        cleanupScroll();
        if (timerRef.current) clearTimeout(timerRef.current);
      }
    };

    scrollListenerRef.current = handleScroll;
    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  const cleanupScroll = () => {
    if (scrollListenerRef.current) {
      window.removeEventListener('scroll', scrollListenerRef.current);
      scrollListenerRef.current = null;
    }
  };

  // Close handler: enforces the "close twice then never show again" rule
  const handleClose = () => {
    const currentCount = parseInt(localStorage.getItem(STORAGE_KEY_CLOSE_COUNT) || '0', 10);

    if (currentCount === 0) {
      // First time user closes the modal
      const newCount = 1;
      localStorage.setItem(STORAGE_KEY_CLOSE_COUNT, newCount.toString());
      setIsOpen(false);
      // Arm the 1.5 section / 90s trigger for the 2nd appearance
      setupSecondTrigger();
    } else {
      // User closes the modal a second time -> Never show again ("it will not show further this moal, use webstock")
      localStorage.setItem(STORAGE_KEY_CLOSE_COUNT, '2');
      localStorage.setItem(STORAGE_KEY_DISMISSED, 'true');
      setIsOpen(false);
      cleanupScroll();
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  };

  // Submission handler: sends lead directly to server without navigating to WhatsApp
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validate phone number
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quick-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: `+91 ${digitsOnly}`,
          requirement: requirement.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setRefNumber(data.refId || `PPS-${Math.floor(100000 + Math.random() * 900000)}`);
        setIsSuccess(true);
        // Permanently dismiss in web storage so visitor is never prompted again
        localStorage.setItem(STORAGE_KEY_SUBMITTED, 'true');
        localStorage.setItem(STORAGE_KEY_DISMISSED, 'true');
        cleanupScroll();
        if (timerRef.current) clearTimeout(timerRef.current);

        // Auto-close after 5 seconds of showing the success screen
        setTimeout(() => {
          setIsOpen(false);
        }, 5000);
      } else {
        setErrorMsg(data.error || 'Failed to submit requirement. Please try again.');
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Allows opening anytime even if previously dismissed) */}
      <button
        onClick={() => {
          setIsSuccess(false);
          setErrorMsg('');
          setIsOpen(true);
        }}
        type="button"
        id="quick-quote-trigger"
        aria-label="Request Quick Tooling Quotation"
        className="fixed bottom-5 left-5 z-40 bg-[#007CC2] hover:bg-[#006aa6] text-white px-4 py-2.5 rounded-full shadow-lg shadow-[#007CC2]/30 flex items-center gap-2 text-xs sm:text-sm font-bold border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <Zap size={14} className="fill-current text-amber-300 group-hover:rotate-12 transition-transform" />
        <span>Quick Quote</span>
      </button>

      {/* Main Popup Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Signature Blue Stage Header */}
            <div className="relative bg-gradient-to-r from-[#005e94] via-[#007CC2] to-[#005282] p-5 sm:p-6 text-white overflow-hidden">
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.2),_rgba(0,0,0,0)_60%)] pointer-events-none" />

              {/* Close (X) Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all cursor-pointer border border-white/20 active:scale-90"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 space-y-1.5 pr-8">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  Get Instant Quotation
                </h3>
                
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                  Drop your contact number below. Our Sector 5 Gurugram sales engineers will connect with direct dispatch pricing and stock availability.
                </p>
              </div>
            </div>

            {/* Modal Body: Form or Success State */}
            <div className="p-5 sm:p-7">
              {isSuccess ? (
                /* Success Confirmation State */
                <div className="text-center py-4 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle size={36} className="animate-bounce" />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xl font-black text-slate-900">
                      Requirement Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Our tooling engineering desk in Sector 5 Gurugram has received your inquiry. We will contact you at <strong className="text-slate-900">{phone}</strong> within 15 minutes.
                    </p>
                  </div>

                  {refNumber && (
                    <div className="inline-block bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-mono text-slate-700">
                      Inquiry ID: <span className="font-bold text-[#007CC2]">{refNumber}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-3 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95"
                    >
                      Done &amp; Continue Browsing
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Contact Number Field (REQUIRED) */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="inquiry-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      Contact Number <span className="text-rose-500">*</span>
                    </label>

                    <div className="relative flex items-center">
                      {/* Country Flag & Prefix */}
                      <div className="absolute left-3 flex items-center gap-1.5 text-xs font-bold text-slate-600 pointer-events-none border-r border-slate-200 pr-2">
                        <span className="text-base leading-none">🇮🇳</span>
                        <span>+91</span>
                      </div>

                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        autoFocus
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        maxLength={15}
                        className="w-full pl-20 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007CC2]/30 focus:border-[#007CC2] transition-all"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500">
                      We will call or message your quote directly. Zero spam guaranteed.
                    </p>
                  </div>

                  {/* Requirement Field (OPTIONAL) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label 
                        htmlFor="inquiry-requirement"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Your Requirement
                      </label>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Optional
                      </span>
                    </div>

                    <textarea
                      id="inquiry-requirement"
                      rows={3}
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                      placeholder="e.g. 50 pcs CNMG 120408 inserts, BT40 ER32 collet chucks, 10mm carbide end mills, or specific grade inquiry..."
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007CC2]/30 focus:border-[#007CC2] transition-all resize-none"
                    />
                  </div>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 py-1 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} className="text-[#007CC2]" />
                      <span>15-Min Response</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck size={12} className="text-emerald-600" />
                      <span>Direct Depot Stock</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Phone size={12} className="text-[#007CC2]" />
                      <span>+91 9350509134</span>
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#007CC2]/25 transition-all cursor-pointer active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Submitting to Sales Desk...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Request Direct Quotation</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-400 leading-normal">
                    By submitting, our engineers in Gurugram will contact you with factory-direct pricing. Your number is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
