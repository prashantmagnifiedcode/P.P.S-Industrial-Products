'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layers,
  ChevronDown,
  FileText,
  PhoneCall,
  Menu,
  X,
  Sparkles,
  SlidersHorizontal,
  Flame,
  MapPin,
  Trash2,
  Send,
  Phone,
  Mail,
  Building2,
  User,
  Check,
  Package,
  Wrench,
  Cpu,
  ShieldCheck,
  Clock,
  ExternalLink,
  ChevronRight,
  TableProperties,
  Calendar
} from 'lucide-react';
import { useRfq } from '@/context/RfqContext';
import { PRODUCTS } from '@/data/mockProducts';

interface BrandProductNavItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  badgeClass: string;
  description: string;
  href: string;
  logo: React.ReactNode;
}

const BRAND_PRODUCTS: BrandProductNavItem[] = [
  {
    id: 'lexustec',
    name: 'Lexustec Cutting Tools',
    category: 'Carbide Turning & Milling Inserts',
    badge: 'CNC Inserts',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'CNMG, WNMG, APMT, MGMN, 16ER & ONMU carbide inserts',
    href: '#lexustec',
    logo: (
      <Image
        src="/lexustec-logo.png"
        alt="Lexustec Cutting Tools"
        width={90}
        height={22}
        className="h-4.5 w-auto object-contain rounded-2xs max-w-[90px]"
      />
    ),
  },
  {
    id: 'cp-gratex',
    name: 'CP GRAT-EX® Systems',
    category: 'Deburring & Countersink Tools',
    badge: 'Deburring',
    badgeClass: 'bg-cyan-50 text-[#007CC2] border-[#bde2f5]',
    description: 'Precision hole deburring, chamfering & countersink cutters',
    href: '#products',
    logo: (
      <Image
        src="https://deburringtools.com/wp-content/uploads/2023/12/cp-gratex-logo.png"
        alt="CP GRAT-EX Deburring"
        width={95}
        height={22}
        unoptimized
        className="h-4.5 w-auto object-contain max-w-[95px]"
      />
    ),
  },
  {
    id: 'pferd',
    name: 'PFERD Germany',
    category: 'Surface Finishing & Burrs',
    badge: 'German Quality',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    description: 'High-performance abrasives, files, cut-off wheels & burrs',
    href: '#pferd',
    logo: (
      <Image
        src="/pferd-logo.svg"
        alt="PFERD Germany"
        width={85}
        height={22}
        className="h-4.5 w-auto object-contain max-w-[85px]"
      />
    ),
  },
  {
    id: 'jaldhara',
    name: 'Jaldhara Small Tools',
    category: 'Industrial Machine Knives',
    badge: 'We Sell Blades',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    description: 'Shear blades, circular slitters, bandsaws & slitting saws',
    href: '#blades',
    logo: (
      <span className="text-[10px] font-black text-slate-900 tracking-tight leading-none text-center">
        JALDHARA
      </span>
    ),
  },
  {
    id: 'hittco',
    name: 'Hittco Tools Ltd',
    category: 'Solid Carbide & HSS',
    badge: 'Carbide & HSS',
    badgeClass: 'bg-purple-50 text-purple-800 border-purple-200',
    description: 'Precision solid carbide drills, end mills, reamers & tooling',
    href: '#hittco',
    logo: (
      <Image
        src="/hittco-logo.png"
        alt="Hittco Tools Ltd"
        width={85}
        height={24}
        className="h-4.5 w-auto object-contain max-w-[85px]"
      />
    ),
  },
];

interface HeaderProps {
  isScrolled?: boolean;
}

export default function Header({ isScrolled: propIsScrolled }: HeaderProps = {}) {
  const [internalIsScrolled, setInternalIsScrolled] = useState(false);

  useEffect(() => {
    if (propIsScrolled !== undefined) return;
    const handleScroll = () => {
      setInternalIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [propIsScrolled]);

  const isScrolled = propIsScrolled !== undefined ? propIsScrolled : internalIsScrolled;

  const { rfqItems, addToRfq, removeFromRfq, clearRfq, openRfqModal } = useRfq();
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRfqDrawerOpen, setIsRfqDrawerOpen] = useState(false);

  const handleCategoryClick = () => {
    setIsCategoryMenuOpen(false);
    setIsMobileMenuOpen(false);
    openRfqModal();
  };

  // RFQ Submission state inside Header drawer
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqFormData, setRfqFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    deliveryLocation: 'Pan India / Delhi-NCR',
    notes: '',
  });

  const categoryMenuRef = useRef<HTMLDivElement>(null);
  const productsMenuRef = useRef<HTMLLIElement>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setIsProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 200);
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(event.target as Node)) {
        setIsCategoryMenuOpen(false);
      }
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    };
  }, []);

  // Lock body scroll when mobile drawer or RFQ modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isRfqDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isRfqDrawerOpen]);

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSubmitted(true);
    setTimeout(() => {
      setRfqSubmitted(false);
      clearRfq();
      setIsRfqDrawerOpen(false);
    }, 2800);
  };

  return (
    <>
      <header className="w-full bg-white border-b border-slate-200 shadow-sm">
        {/* Main Header Bar (Existing White with Official Brand Accents) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4 lg:gap-8">

            {/* 1. Logo & Brand Identity (Click to Home '/') */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none rounded-xl p-1 -m-1 transition-transform active:scale-[0.98]"
              aria-label="P.P.S Industrial Products Home"
            >
              {/* Borderless Official Logo */}
              <div className="relative shrink-0">
                <Image
                  src="/ppslogo.svg"
                  alt="P.P.S Industrial Products Logo"
                  width={48}
                  height={48}
                  priority
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Brand Title & Authorized Dealer Badge */}
              <div className="flex flex-col min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-extrabold text-base sm:text-xl lg:text-2xl tracking-tight text-slate-900 group-hover:text-[#007CC2] transition-colors leading-tight">
                    P.P.S Industrial Products
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
                  <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#f0f8fc] text-[#007CC2] border border-[#bde2f5] text-[9px] sm:text-[11px] font-bold tracking-wide uppercase shadow-sm shrink-0">
                    <ShieldCheck size={11} className="stroke-[2.5]" />
                    Authorized Dealer
                  </span>
                  <span className="text-slate-300 hidden md:inline">•</span>
                  <span className="hidden md:inline text-slate-500 font-semibold text-[11px]">
                    Precision Cutting Tools & CNC Tooling
                  </span>
                </div>
              </div>
            </Link>

            {/* 2. Action Cluster */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">

              {/* Available on IndiaMART Verified Profile (Hidden on <sm to prevent mobile overflow) */}
              <a
                href="https://www.indiamart.com/pps-industrialproducts/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2.5 sm:gap-3 px-3 sm:px-3.5 py-1.5 rounded-2xl bg-white hover:bg-[#f0f8fc] border border-[#bde2f5] hover:border-[#007CC2] transition-all group shadow-xs active:scale-95 shrink-0"
                title="Available on IndiaMART - P.P.S Industrial Products"
              >
                <div className="h-8 w-11 bg-white rounded-lg border border-slate-100 flex items-center justify-center p-0.5 shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src="/indiamart-logo.png"
                    alt="IndiaMART Official Logo"
                    width={48}
                    height={34}
                    priority
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Verified Seller
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-slate-900 group-hover:text-[#007CC2] transition-colors">
                      IndiaMART
                    </span>
                    <ExternalLink size={11} className="text-[#007CC2] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Expo & Trade Shows Navigation (Hidden on <sm to prevent mobile overflow) */}
              <Link
                href="/expo"
                className="hidden sm:flex items-center gap-2.5 sm:gap-3 px-3 sm:px-3.5 py-1.5 rounded-2xl bg-white hover:bg-[#f0f8fc] border border-[#bde2f5] hover:border-[#007CC2] transition-all group shadow-xs active:scale-95 shrink-0"
                title="Expos & Trade Shows"
              >
                <div className="h-8 w-8 bg-white rounded-lg border border-[#bde2f5] flex items-center justify-center shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                  <Calendar size={16} className="text-[#007CC2]" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Expos
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007CC2] animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-slate-900 group-hover:text-[#007CC2] transition-colors">
                      Trade Shows
                    </span>
                    <ChevronRight size={11} className="text-[#007CC2] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Mobile Quick Direct Call Hotline Button */}
              <a
                href="tel:+919350509134"
                className="sm:hidden p-2.5 rounded-xl bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] hover:bg-[#e1f2fa] active:scale-95 transition-all flex items-center justify-center shadow-2xs"
                title="Call P.P.S Helpline"
                aria-label="Call +91 93505 09134"
              >
                <Phone size={18} className="stroke-[2.5]" />
              </a>

              {/* Primary Instant RFQ Button (Desktop only - mobile accesses via sidebar) */}
              <button
                type="button"
                onClick={() => setIsRfqDrawerOpen(true)}
                className="hidden md:flex relative overflow-hidden group px-5 py-2.5 rounded-2xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#007CC2]/20 active:scale-95 transition-all items-center gap-2 shrink-0"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Sparkles size={16} className="fill-current text-white" />
                <span>Instant RFQ</span>
              </button>

              {/* Clean Mobile Hamburger Menu Trigger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] hover:bg-[#e1f2fa] active:scale-95 transition-all flex items-center justify-center shadow-xs"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open mobile menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} className="stroke-[2.5]" /> : <Menu size={22} className="stroke-[2.5]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Sub-Bar (Hidden on mobile, desktop/tablet only) */}
        <nav
          aria-label="Tooling Catalog Navigation"
          className={`hidden md:block transition-all duration-300 ${
            isScrolled
              ? 'border-t border-[#006aa6] bg-[#007CC2] text-white shadow-sm'
              : 'border-t border-slate-800/80 bg-black/95 backdrop-blur-md text-white shadow-sm'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-11">

              {/* Left: Mega Menu Trigger */}
              <div className="relative" ref={categoryMenuRef}>
                <button
                  type="button"
                  onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
                  className={`h-11 px-4 font-bold text-xs flex items-center gap-2.5 transition-all border-x ${
                    isScrolled
                      ? isCategoryMenuOpen
                        ? 'bg-[#005688] text-white border-[#005688]'
                        : 'bg-[#0067a3] text-white hover:bg-[#005688] border-[#005688]/60'
                      : isCategoryMenuOpen
                        ? 'bg-slate-800 text-white border-slate-700'
                        : 'bg-slate-900/90 text-white hover:bg-slate-800 border-slate-800'
                  }`}
                >
                  <Layers size={15} />
                  <span>Browse All Tooling</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isCategoryMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Mega Menu Dropdown (White Background with #007CC2 Logo Color Accents) */}
                {isCategoryMenuOpen && (
                  <div className="absolute top-full left-0 w-[840px] max-w-[95vw] bg-white border border-slate-200 rounded-b-2xl shadow-2xl p-4 sm:p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-slate-800">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

                      {/* Col 1 */}
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-[#007CC2] mb-3 pb-2 border-b border-slate-100">
                          <Package size={14} className="text-[#007CC2]" />
                          <span>Turning & Boring</span>
                        </div>
                        <ul className="space-y-2 text-xs">
                          <li>
                            <Link
                              href="/tooling/tnmg-cnmg-wnmg-inserts"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              TNMG / CNMG / WNMG Inserts
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tooling/dnmg-vnmg-finishing-inserts"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              DNMG & VNMG Finishing Inserts
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tooling/carbide-boring-bars-adapters"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              Carbide Boring Bars & Adapters
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tooling/grooving-parting-blades"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              Grooving & Parting Blades
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Col 2 */}
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-[#007CC2] mb-3 pb-2 border-b border-slate-100">
                          <Wrench size={14} className="text-[#007CC2]" />
                          <span>Milling & Drilling</span>
                        </div>
                        <ul className="space-y-2 text-xs">
                          <li>
                            <Link
                              href="/tooling/apmt-face-mills"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              APMT 1135 & 1604 Face Mills
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tooling/solid-carbide-end-mills"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              Solid Carbide End Mills (4F/2F)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tooling/indexable-u-drills"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              Indexable U-Drills (2D–5D)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tooling/roughing-cutters-alloys"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              Roughing Cutters for Alloys
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Col 3 */}
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-[#007CC2] mb-3 pb-2 border-b border-slate-100">
                          <Cpu size={14} className="text-[#007CC2]" />
                          <span>Toolholding Systems</span>
                        </div>
                        <ul className="space-y-2 text-xs">
                          <li>
                            <Link
                              href="/tooling/bt40-bt50-spindle-chucks"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              BT40 / BT50 Spindle Chucks
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tooling/er-precision-collets"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              ER16 / ER25 / ER32 Precision Collets
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tooling/side-lock-end-mill-holders"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              Side-Lock End Mill Holders
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tooling/pull-studs-torque-spanners"
                              onClick={() => setIsCategoryMenuOpen(false)}
                              className="text-slate-600 hover:text-[#007CC2] font-medium transition-colors block py-0.5 text-left w-full"
                            >
                              Pull Studs & Torque Spanners
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Col 4: Rapid Dispatch Callout */}
                      <div className="rounded-xl bg-[#f0f8fc] border border-[#bde2f5] p-4 flex flex-col justify-between">
                        <div>
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#007CC2]/15 text-[#007CC2] text-[10px] font-bold uppercase tracking-wider mb-2">
                            <span>Sector 5 Gurugram Hub</span>
                          </div>
                          <h4 className="font-bold text-slate-900 text-xs mb-1">
                            Urgent Tooling Breakdown Dispatch
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                            Direct express courier dispatch Pan India & Delhi-NCR.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Link
                            href="/tooling"
                            onClick={() => setIsCategoryMenuOpen(false)}
                            className="w-full py-1.5 px-3 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#007CC2] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                          >
                            <Layers size={12} className="text-[#007CC2]" />
                            <span>All Tooling Catalog</span>
                          </Link>
                          <a
                            href="tel:+919350509134"
                            className="w-full py-1.5 px-3 rounded-lg bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                          >
                            <Phone size={12} />
                            <span>Emergency Line</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Center: Main Section Navigation Links (White Text on #007CC2) */}
              <ul className="hidden md:flex items-center gap-1 lg:gap-2">
                {/* Brand Products Dropdown Trigger & Flyout */}
                <li
                  className="relative"
                  ref={productsMenuRef}
                  onMouseEnter={handleProductsMouseEnter}
                  onMouseLeave={handleProductsMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setIsProductsDropdownOpen((prev) => !prev)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isProductsDropdownOpen
                        ? isScrolled
                          ? 'bg-white text-[#007CC2] shadow-sm'
                          : 'bg-white text-slate-950 shadow-sm'
                        : isScrolled
                          ? 'text-white hover:bg-white/15'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                    aria-expanded={isProductsDropdownOpen}
                    aria-haspopup="true"
                    aria-label="Brand Products Dropdown Menu"
                  >
                    <span>Products</span>
                    <span
                      className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded font-extrabold text-[9px] tracking-wider uppercase transition-colors ${
                        isProductsDropdownOpen
                          ? isScrolled
                            ? 'bg-[#007CC2] text-white'
                            : 'bg-slate-950 text-white'
                          : 'bg-amber-400 text-slate-950'
                      }`}
                    >
                      BRANDS
                    </span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        isProductsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Flyout */}
                  {isProductsDropdownOpen && (
                    <div className="absolute top-full left-0 pt-1.5 w-[560px] max-w-[92vw] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white border border-slate-200/95 rounded-2xl shadow-2xl overflow-hidden text-slate-800">
                        {/* Dropdown Top Header */}
                        <div className="px-4 py-3 bg-gradient-to-r from-[#f0f8fc] via-white to-[#f0f8fc] border-b border-[#bde2f5]/70 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#007CC2] animate-pulse" />
                            <div>
                              <h4 className="text-xs font-black uppercase tracking-wider text-[#007CC2]">
                                Brand Products Showcases
                              </h4>
                              <p className="text-[10px] text-slate-500 font-medium">
                                Direct Authorized Stockist Lines • Sector 5 Depot
                              </p>
                            </div>
                          </div>
                          <Link
                            href="#products"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="text-[11px] font-bold text-[#007CC2] hover:text-[#005688] hover:underline flex items-center gap-1"
                          >
                            <span>All Catalog</span>
                            <ChevronRight size={12} />
                          </Link>
                        </div>

                        {/* Brand Products List */}
                        <div className="p-2.5 space-y-1">
                          {BRAND_PRODUCTS.map((brand) => (
                            <Link
                              key={brand.id}
                              href={brand.href}
                              onClick={() => setIsProductsDropdownOpen(false)}
                              className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f0f8fc] border border-transparent hover:border-[#bde2f5] transition-all"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-24 h-10 shrink-0 bg-slate-50 group-hover:bg-white rounded-lg border border-slate-200/80 group-hover:border-[#bde2f5] flex items-center justify-center p-1.5 transition-colors shadow-2xs">
                                  {brand.logo}
                                </div>
                                <div className="min-w-0 text-left">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-xs font-bold text-slate-900 group-hover:text-[#007CC2] transition-colors truncate">
                                      {brand.name}
                                    </span>
                                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${brand.badgeClass}`}>
                                      {brand.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 truncate group-hover:text-slate-600 transition-colors">
                                    {brand.description}
                                  </p>
                                </div>
                              </div>

                              <div className="shrink-0 pl-2">
                                <div className="w-6 h-6 rounded-lg bg-slate-100 group-hover:bg-[#007CC2] text-slate-400 group-hover:text-white flex items-center justify-center transition-all group-hover:translate-x-0.5">
                                  <ChevronRight size={13} />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Dropdown Footer */}
                        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200/70 flex items-center justify-between text-[11px]">
                          <span className="text-slate-500 font-medium">
                            Need urgent same-day tooling dispatch?
                          </span>
                          <a
                            href="tel:+919350509134"
                            className="font-bold text-[#007CC2] hover:text-[#006aa6] flex items-center gap-1 hover:underline"
                          >
                            <Phone size={11} />
                            <span>Call +91 93505 09134</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href="/inserts"
                    className={`px-2 lg:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      isScrolled
                        ? 'text-white hover:bg-white/15'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <TableProperties size={13} className="text-cyan-300" />
                    <span>Cutting Inserts</span>
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-cyan-400 text-slate-950 font-extrabold text-[9px] tracking-wider uppercase">
                      TABLE
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/er-tools"
                    className={`px-2 lg:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      isScrolled
                        ? 'text-white hover:bg-white/15'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Layers size={13} className="text-cyan-300" />
                    <span>ER Collets</span>
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-extrabold text-[9px] tracking-wider uppercase">
                      DIN 6499
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#partners"
                    className={`px-2 lg:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                      isScrolled
                        ? 'text-white hover:bg-white/15'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>Brand Partners</span>
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-extrabold text-[9px] tracking-wider uppercase">
                      <Flame size={9} /> DIRECT
                    </span>
                  </Link>
                </li>
                <li className="hidden lg:block">
                  <Link
                    href="/#about"
                    className={`px-2.5 lg:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                      isScrolled
                        ? 'text-white hover:bg-white/15'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    About PPS
                  </Link>
                </li>
                <li className="hidden xl:block">
                  <Link
                    href="/#team"
                    className={`px-2.5 lg:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                      isScrolled
                        ? 'text-white hover:bg-white/15'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className={`px-2 lg:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                      isScrolled
                        ? 'text-white hover:bg-white/15'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Depot &amp; Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Clean Full-Featured Mobile Slide-Out Sidebar Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end animate-in fade-in duration-200">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar Drawer Panel */}
            <div className="relative w-full max-w-xs sm:max-w-sm bg-white h-full flex flex-col shadow-2xl z-10 overflow-hidden text-slate-800 animate-in slide-in-from-right duration-300">

              {/* Sidebar Header */}
              <div className="px-5 py-4 bg-white border-b border-slate-200 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/ppslogo.svg"
                    alt="P.P.S Industrial Products Logo"
                    width={36}
                    height={36}
                    className="w-8 h-8 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="font-extrabold text-sm text-slate-900 leading-tight">
                      P.P.S Industrial Products
                    </span>
                    <span className="text-[10px] font-bold text-[#007CC2] uppercase tracking-wider">
                      Authorized Dealer
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close Mobile Sidebar"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">

                {/* Primary Actions */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsRfqDrawerOpen(true);
                    }}
                    className="w-full py-3 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#007CC2]/20 active:scale-95 transition-all"
                  >
                    <Sparkles size={16} />
                    <span>Instant B2B RFQ ({rfqItems.length} Parts)</span>
                  </button>

                  <a
                    href="tel:+919350509134"
                    className="w-full py-2.5 rounded-xl bg-[#f0f8fc] border border-[#bde2f5] text-[#007CC2] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#e1f2fa] transition-colors"
                  >
                    <PhoneCall size={15} />
                    <span>Call Hotline: +91 93505 09134</span>
                  </a>
                </div>

                {/* Quick Navigation Cards (Mobile Drawer) */}
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/inserts"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#f0f8fc] border border-slate-200 hover:border-[#bde2f5] flex items-center gap-2 transition-all shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-lg bg-white border border-[#bde2f5] flex items-center justify-center shrink-0">
                      <TableProperties size={13} className="text-[#007CC2]" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Catalog</span>
                      <span className="text-xs font-black text-slate-900 truncate">Inserts Table</span>
                    </div>
                  </Link>

                  <Link
                    href="/er-tools"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#f0f8fc] border border-slate-200 hover:border-[#bde2f5] flex items-center gap-2 transition-all shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-lg bg-white border border-[#bde2f5] flex items-center justify-center shrink-0">
                      <Layers size={13} className="text-[#007CC2]" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">DIN 6499</span>
                      <span className="text-xs font-black text-slate-900 truncate">ER Collets</span>
                    </div>
                  </Link>

                  <a
                    href="https://www.indiamart.com/pps-industrialproducts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#f0f8fc] border border-slate-200 hover:border-[#bde2f5] flex items-center gap-2 transition-all shadow-2xs"
                  >
                    <Image
                      src="/indiamart-logo.png"
                      alt="IndiaMART"
                      width={32}
                      height={22}
                      className="h-4.5 w-auto object-contain shrink-0"
                    />
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Verified</span>
                      <span className="text-xs font-black text-slate-900 truncate">IndiaMART</span>
                    </div>
                  </a>

                  <Link
                    href="/expo"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#f0f8fc] border border-slate-200 hover:border-[#bde2f5] flex items-center gap-2 transition-all shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-lg bg-white border border-[#bde2f5] flex items-center justify-center shrink-0">
                      <Calendar size={13} className="text-[#007CC2]" />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Expos</span>
                      <span className="text-xs font-black text-slate-900 truncate">Trade Shows</span>
                    </div>
                  </Link>
                </div>

                {/* Tooling Categories Breakdown */}
                <div>
                  <span className="text-[11px] font-extrabold text-[#007CC2] uppercase tracking-wider block mb-2">
                    Browse Tooling Catalog
                  </span>
                  <div className="space-y-2.5">
                    {/* Turning */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1.5">
                        <Package size={14} className="text-[#007CC2]" />
                        <span>Carbide Turning & Boring</span>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600 pl-5 list-disc">
                        <li><Link href="/tooling/tnmg-cnmg-wnmg-inserts" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">TNMG / CNMG / WNMG Inserts</Link></li>
                        <li><Link href="/tooling/dnmg-vnmg-finishing-inserts" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">DNMG & VNMG Finishing Inserts</Link></li>
                        <li><Link href="/tooling/carbide-boring-bars-adapters" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">Carbide Boring Bars</Link></li>
                        <li><Link href="/tooling/grooving-parting-blades" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">Grooving & Parting Blades</Link></li>
                      </ul>
                    </div>

                    {/* Milling */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1.5">
                        <Wrench size={14} className="text-[#007CC2]" />
                        <span>Milling & Holemaking</span>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600 pl-5 list-disc">
                        <li><Link href="/tooling/apmt-face-mills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">APMT 1135 & 1604 Face Mills</Link></li>
                        <li><Link href="/tooling/solid-carbide-end-mills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">Solid Carbide End Mills</Link></li>
                        <li><Link href="/tooling/indexable-u-drills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">Indexable U-Drills</Link></li>
                        <li><Link href="/tooling/roughing-cutters-alloys" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">Roughing Cutters for Alloys</Link></li>
                      </ul>
                    </div>

                    {/* Toolholding */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 font-bold text-xs text-slate-900 mb-1.5">
                        <Cpu size={14} className="text-[#007CC2]" />
                        <span>CNC Toolholding Systems</span>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600 pl-5 list-disc">
                        <li><Link href="/tooling/bt40-bt50-spindle-chucks" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">BT40 / BT50 Spindle Chucks</Link></li>
                        <li><Link href="/tooling/er-precision-collets" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">ER16 / ER25 / ER32 Collets</Link></li>
                        <li><Link href="/tooling/side-lock-end-mill-holders" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">Side-Lock End Mill Holders</Link></li>
                        <li><Link href="/tooling/pull-studs-torque-spanners" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#007CC2] text-left block py-0.5">Pull Studs & Torque Spanners</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Brand Products Direct Navigation (Mobile) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-extrabold text-[#007CC2] uppercase tracking-wider block">
                      Brand Products (5 Lines)
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">Authorized Stockist</span>
                  </div>
                  <div className="space-y-1.5">
                    {BRAND_PRODUCTS.map((brand) => (
                      <Link
                        key={brand.id}
                        href={brand.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 rounded-xl bg-slate-50 hover:bg-[#f0f8fc] border border-slate-200/90 hover:border-[#bde2f5] flex items-center justify-between transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-16 h-7 shrink-0 bg-white rounded-md border border-slate-200 flex items-center justify-center p-1">
                            {brand.logo}
                          </div>
                          <div className="min-w-0 text-left">
                            <div className="text-xs font-bold text-slate-900 truncate">
                              {brand.name}
                            </div>
                            <div className="text-[10px] text-slate-500 truncate">
                              {brand.category}
                            </div>
                          </div>
                        </div>
                        <span className={`shrink-0 ml-1.5 px-1.5 py-0.5 rounded text-[8.5px] font-bold uppercase tracking-wider border ${brand.badgeClass}`}>
                          {brand.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Navigation Links */}
                <div>
                  <span className="text-[11px] font-extrabold text-[#007CC2] uppercase tracking-wider block mb-2">
                    Quick Navigation
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    <Link
                      href="/inserts"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="col-span-2 p-2.5 rounded-lg bg-gradient-to-r from-[#007CC2] to-[#005688] text-white font-bold flex items-center justify-between shadow-xs hover:brightness-105 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <TableProperties size={14} className="text-cyan-300" />
                        <span>Cutting Inserts Table &amp; Specs</span>
                      </div>
                      <span className="px-1.5 py-0.5 rounded bg-white text-[#007CC2] text-[9px] font-black uppercase">
                        TABLE
                      </span>
                    </Link>

                    <Link
                      href="/#products"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#007CC2] hover:bg-[#f0f8fc] flex items-center justify-between"
                    >
                      <span>Products &amp; Tools</span>
                      <Sparkles size={12} className="text-[#007CC2]" />
                    </Link>
                    <Link
                      href="/#partners"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#007CC2] hover:bg-[#f0f8fc] flex items-center justify-between"
                    >
                      <span>Brand Partners</span>
                      <Flame size={12} className="text-[#007CC2]" />
                    </Link>
                    <Link
                      href="/#about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#007CC2] hover:bg-[#f0f8fc]"
                    >
                      About PPS
                    </Link>
                    <Link
                      href="/#team"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#007CC2] hover:bg-[#f0f8fc]"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:text-[#007CC2] hover:bg-[#f0f8fc]"
                    >
                      Depot &amp; Contact
                    </Link>
                    <button
                      type="button"
                      onClick={handleCategoryClick}
                      className="p-2.5 rounded-lg bg-[#007CC2] text-white hover:bg-[#006aa6] font-bold text-left flex items-center justify-between shadow-xs"
                    >
                      <span>Request Quote</span>
                      <Sparkles size={12} />
                    </button>
                  </div>
                </div>

                {/* Depot & Logistics Information */}
                <div className="p-3.5 rounded-xl bg-[#f0f8fc] border border-[#bde2f5] space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <MapPin size={14} className="text-[#007CC2]" />
                    <span>Sector 5 Depot, Gurugram</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Same-Day Express Courier & Dispatch Pan India.
                  </p>
                  <div className="pt-2 border-t border-[#bde2f5]/60 text-[11px] text-slate-500 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-[#007CC2]" />
                      <span>Mon–Sat: 8:30 AM – 7:30 PM IST</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail size={12} className="text-[#007CC2]" />
                      <span className="truncate">ppsindustrialproducts@yahoo.in</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                      <ShieldCheck size={12} className="text-[#007CC2]" />
                      <span>GSTIN Verified Supplier</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Self-Contained RFQ Quote Drawer (White & Logo Blue #007CC2 Styling) */}
      {isRfqDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsRfqDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-lg bg-white border-l border-slate-200 h-full flex flex-col shadow-2xl z-10 text-slate-800">
            {/* Header (Official Logo Blue #007CC2 & White Text) */}
            <div className="px-6 py-4 bg-[#007CC2] text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-white/20 text-white">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">B2B Quotation Inquiry</h3>
                  <p className="text-xs text-white/90">P.P.S Industrial Products • Gurugram Depot</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsRfqDrawerOpen(false)}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close RFQ Drawer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {rfqSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check size={32} className="stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Quotation Request Received!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                    Our technical sales team will review your requirement and deliver formal GST pricing and delivery schedule within 30 minutes.
                  </p>
                </div>
              ) : (
                <>
                  {/* Selected Items List */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#007CC2]">
                        Selected Tools & Inserts ({rfqItems.length})
                      </span>
                      {rfqItems.length > 0 && (
                        <button
                          type="button"
                          onClick={() => clearRfq()}
                          className="text-[11px] text-red-600 hover:text-red-700 font-semibold transition-colors flex items-center gap-1"
                        >
                          <Trash2 size={12} />
                          <span>Clear list</span>
                        </button>
                      )}
                    </div>

                    {rfqItems.length > 0 ? (
                      <div className="space-y-2.5">
                        {rfqItems.map((item) => (
                          <div
                            key={item.id}
                            className="p-3 rounded-xl bg-[#f0f8fc] border border-[#bde2f5] flex items-center justify-between gap-3"
                          >
                            <div className="min-w-0">
                              <span className="text-[10px] font-mono font-bold text-[#007CC2] px-1.5 py-0.5 rounded bg-white border border-[#bde2f5]">
                                {item.sku}
                              </span>
                              <h5 className="font-bold text-xs text-slate-900 truncate mt-1">{item.name}</h5>
                              <p className="text-[11px] text-slate-500 font-medium">Grade: {item.grade}</p>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromRfq(item.id)}
                              className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-slate-200 transition-colors shrink-0"
                              title="Remove item"
                            >
                              <X size={15} />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-5 rounded-xl bg-[#f0f8fc] border border-dashed border-[#bde2f5] text-center">
                        <Package size={28} className="text-[#007CC2] mx-auto mb-2" />
                        <p className="text-xs font-bold text-slate-800">Your RFQ basket is empty</p>
                        <p className="text-[11px] text-slate-500 mt-1">
                          Browse categories above, or quickly add popular parts below:
                        </p>
                        <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                          {PRODUCTS.slice(0, 3).map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => addToRfq(p)}
                              className="px-2 py-1 rounded bg-white hover:bg-[#e1f2fa] text-slate-700 hover:text-[#007CC2] border border-[#bde2f5] text-[10px] font-mono font-semibold transition-colors shadow-sm"
                            >
                              + {p.sku}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contact & RFQ Submission Form */}
                  <form onSubmit={handleRfqSubmit} className="space-y-3 pt-3 border-t border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#007CC2] block mb-2">
                      Buyer & Company Information
                    </span>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Company / Workshop Name *</label>
                      <div className="relative">
                        <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Precision Auto Components Ltd"
                          value={rfqFormData.companyName}
                          onChange={(e) => setRfqFormData({ ...rfqFormData, companyName: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#007CC2] focus:ring-2 focus:ring-[#007CC2]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Contact Person *</label>
                        <div className="relative">
                          <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Full name"
                            value={rfqFormData.contactPerson}
                            onChange={(e) => setRfqFormData({ ...rfqFormData, contactPerson: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#007CC2] focus:ring-2 focus:ring-[#007CC2]/20 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                        <div className="relative">
                          <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98..."
                            value={rfqFormData.phone}
                            onChange={(e) => setRfqFormData({ ...rfqFormData, phone: e.target.value })}
                            className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#007CC2] focus:ring-2 focus:ring-[#007CC2]/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Business Email *</label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="purchase@company.com"
                          value={rfqFormData.email}
                          onChange={(e) => setRfqFormData({ ...rfqFormData, email: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#007CC2] focus:ring-2 focus:ring-[#007CC2]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Delivery Destination</label>
                      <div className="relative">
                        <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={rfqFormData.deliveryLocation}
                          onChange={(e) => setRfqFormData({ ...rfqFormData, deliveryLocation: e.target.value })}
                          className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#007CC2] focus:ring-2 focus:ring-[#007CC2]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Additional Specifications / Quantities</label>
                      <textarea
                        rows={2}
                        placeholder="e.g. 50 pcs TNMG 160408, need batch test report and 30-day credit..."
                        value={rfqFormData.notes}
                        onChange={(e) => setRfqFormData({ ...rfqFormData, notes: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#007CC2] focus:ring-2 focus:ring-[#007CC2]/20 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#007CC2] hover:bg-[#006aa6] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#007CC2]/25 transition-all active:scale-[0.98]"
                      >
                        <Send size={16} />
                        <span>Submit RFQ for Instant GST Pricing</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-center text-slate-500 pt-1">
                      Direct Spindle Support: Sector 5 Gurugram Depot • Response in &lt; 30 mins
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
