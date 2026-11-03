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
  Zap,
  PhoneCall
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

  // Listen for Escape key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

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

  // Close handler: closes modal immediately and tracks dismissal
  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsOpen(false);

    try {
      const currentCount = parseInt(localStorage.getItem(STORAGE_KEY_CLOSE_COUNT) || '0', 10);
      if (currentCount === 0) {
        localStorage.setItem(STORAGE_KEY_CLOSE_COUNT, '1');
        setupSecondTrigger();
      } else {
        localStorage.setItem(STORAGE_KEY_CLOSE_COUNT, '2');
        localStorage.setItem(STORAGE_KEY_DISMISSED, 'true');
        cleanupScroll();
        if (timerRef.current) clearTimeout(timerRef.current);
      }
    } catch (err) {
      console.error(err);
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
      {/* Floating Trigger Button - Premium Light Gray Look with Shining Glare (Centered on Mobile) */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 z-[45] pointer-events-auto">
        <button
          onClick={() => {
            setIsSuccess(false);
            setErrorMsg('');
            setIsOpen(true);
          }}
          type="button"
          id="quick-quote-trigger"
          aria-label="Contact with Sales Person"
          title="Contact with Sales Person - Instant Tooling Consultation"
          className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 hover:from-white hover:to-white text-slate-900 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.08)] border-[1.5px] border-slate-300 hover:border-slate-400 flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base font-extrabold focus:outline-none focus:ring-0 outline-none transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer whitespace-nowrap"
        >
          {/* Continuous Shining Glare Effect */}
          <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <span className="absolute -inset-y-2 -left-1/2 w-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shine pointer-events-none" />
          </span>

          <PhoneCall size={18} className="text-slate-800 group-hover:text-black transition-colors shrink-0" />
          <span className="tracking-tight whitespace-nowrap text-slate-900 group-hover:text-black">
            Contact with sales person
          </span>
        </button>
      </div>

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
            {/* Top Light Gray Premium Stage Header */}
            <div className="relative bg-gradient-to-r from-slate-100 via-slate-50 to-white p-5 sm:p-6 text-slate-900 border-b border-slate-200/90 overflow-hidden before:absolute before:top-0 before:inset-x-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-slate-400 before:to-transparent">
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(0,0,0,0.03),_rgba(0,0,0,0)_60%)] pointer-events-none" />

              {/* Close (X) Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-30 text-slate-600 hover:text-slate-950 bg-slate-200/80 hover:bg-slate-300 rounded-full w-9 h-9 flex items-center justify-center transition-all cursor-pointer border border-slate-300/80 active:scale-90"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 space-y-1.5 pr-10">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Contact with Sales Person
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Drop your contact number below. Our Sector 5 Gurugram sales engineers will connect with direct dispatch pricing and stock availability.
                </p>
              </div>
            </div>

            {/* Modal Body: Form or Success State */}
            <div className="p-5 sm:p-7">
              {isSuccess ? (
                /* Success Confirmation State */
                <div className="text-center py-4 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-slate-100 border border-slate-300 text-slate-900 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle size={36} className="text-slate-900" />
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
                    <div className="inline-block bg-slate-100 border border-slate-300 rounded-xl px-4 py-2 text-xs font-mono text-slate-800">
                      Inquiry ID: <span className="font-bold text-slate-950">{refNumber}</span>
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
                        placeholder="Enter 10-digit mobile number"
                        className="w-full pl-20 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007CC2]/30 focus:border-[#007CC2] transition-all"
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
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007CC2]/30 focus:border-[#007CC2] transition-all resize-none"
                    />
                  </div>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-between text-[11px] text-slate-600 py-1.5 border-t border-slate-200">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} className="text-slate-500" />
                      <span>15-Min Response</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck size={12} className="text-slate-500" />
                      <span>Direct Depot Stock</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Phone size={12} className="text-slate-500" />
                      <span>+91 9350509134</span>
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] active:bg-[#005e94] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#007CC2]/25 transition-all cursor-pointer active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-white" />
                        <span>Connecting to Sales Desk...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} className="text-white" />
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
