'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  Phone,
  MessageCircle,
  FileText,
  Download,
  ArrowRight,
  MapPin,
  Clock,
  Truck,
  Sparkles,
  Filter,
  Search,
  ChevronDown,
  Check,
  Send,
  RefreshCw,
  Box,
  BadgeCheck,
  Compass,
  Briefcase
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RfqModal from '@/components/RfqModal';
import Toast from '@/components/Toast';

interface DealershipBrand {
  id: string;
  name: string;
  legalEntity: string;
  country: string;
  estYear: string;
  logo: string;
  logoType?: 'image' | 'svg-union' | 'svg-shaviv';
  bannerImage: string;
  dealershipStatus: string;
  authorizationTier: string;
  categoryTag: string;
  filterCategory: 'inserts' | 'carbide' | 'abrasives' | 'deburring' | 'blades';
  territory: string;
  scopeSummary: string;
  keyProducts: string[];
  certifications: string[];
  stockHighlights: string;
  leadTime: string;
  moq: string;
  externalUrl?: string;
  whatsappMessage: string;
}

const AUTHORIZED_BRANDS: DealershipBrand[] = [
  {
    id: 'lexustec',
    name: 'Lexustec Cutting Tools',
    legalEntity: 'Lexustec Precision Tooling Co., Ltd.',
    country: 'Taiwan / Global CNC',
    estYear: 'Est. 2008',
    logo: '/lexustec-logo.png',
    logoType: 'image',
    bannerImage: '/lexustec-banner.jpg',
    dealershipStatus: 'Authorized Primary Master Distributor',
    authorizationTier: 'Tier-1 Direct OEM Distributorship',
    categoryTag: 'Carbide & Ceramic Inserts',
    filterCategory: 'inserts',
    territory: 'Pan-India & Delhi-NCR Central Depot',
    scopeSummary: 'Exclusive primary inventory of ISO turning (CNMG, WNMG, TNMG, DNMG), 90° shoulder milling inserts (APMT 1135 / 1604), double-ended grooving inserts (MGMN), and full-profile 60° threading inserts (16ER/IR).',
    keyProducts: [
      'ISO Turning Inserts (CNMG, WNMG, TNMG, DNMG)',
      'Shoulder Milling Inserts (APMT 1135 & 1604)',
      'Parting & Grooving Inserts (MGMN 200 / 300 / 400)',
      'Threading 60° Inserts (16ER AG60 / ISO Metric)',
      'High-Feed Octagonal Milling (ONMU 0505)'
    ],
    certifications: [
      'ISO 9001:2015 Certified Manufacturing',
      'Batch Test Certificates (MTC/CoC Provided)',
      'Authentic Hologram Sealed Packaging'
    ],
    stockHighlights: '5,000+ units in ready stock at Sector 5 Depot',
    leadTime: 'Same-Day Dispatch (4:30 PM Cutoff)',
    moq: '1 Pack (10 Pcs) for Trial / Bulk Dealer Carton Rates',
    externalUrl: '/inserts',
    whatsappMessage: 'Hi P.P.S Industrial, I would like to inquire about Dealership & Wholesale rates for Lexustec Cutting Inserts.'
  },
  {
    id: 'hittco',
    name: 'Hittco Tools Ltd',
    legalEntity: 'Hittco Tools Limited (BSE Listed)',
    country: 'Bengaluru, India',
    estYear: 'Est. 1974',
    logo: '/hittco-logo.png',
    logoType: 'image',
    bannerImage: '/hittco-banner.jpg',
    dealershipStatus: 'Authorized Direct Distributor & Stockist',
    authorizationTier: 'Authorized National Distributor',
    categoryTag: 'Solid Micrograin Carbide',
    filterCategory: 'carbide',
    territory: 'North India & Pan-India Dispatch',
    scopeSummary: 'Authorized stockist for Hittco high-performance solid carbide 4-flute AlTiN coated end mills, 5xD / 8xD through-coolant carbide twist drills, and ultra-precision H7 tolerance machine reamers.',
    keyProducts: [
      'Solid Carbide 4-Flute AlTiN Coated End Mills (Ø3mm to Ø25mm)',
      'Internal Coolant Carbide Drills 5xD & 8xD (DIN 6537)',
      'Solid Carbide Precision Machine Reamers (H7 Tolerance DIN 212)',
      'Solid Carbide Ball Nose & Corner Radius End Mills',
      'Micrograin Carbide Step Drills & Sub-micron Tooling'
    ],
    certifications: [
      'DIN 6537 & DIN 212 Geometric Tolerances',
      'BSE Listed Manufacturer Standards',
      'OEM Direct Batch Traceability'
    ],
    stockHighlights: 'Comprehensive diameter stock available for instant order fulfillment',
    leadTime: 'Ready Stock: Immediate / Custom: 7-10 Days',
    moq: 'Single Piece Trial / 10+ Pcs Wholesale Tier',
    externalUrl: 'https://hittco.com/',
    whatsappMessage: 'Hi P.P.S Industrial, please share Hittco Tools Ltd dealership catalog and wholesale pricing structure.'
  },
  {
    id: 'pferd',
    name: 'PFERD TOOLS Germany',
    legalEntity: 'August Rüggeberg GmbH & Co. KG (PFERD-Werkzeuge)',
    country: 'Marienheide, Germany',
    estYear: 'Est. 1799 (Over 225 Years)',
    logo: '/pferd-logo.svg',
    logoType: 'image',
    bannerImage: '/pferd-banner.webp',
    dealershipStatus: 'Authorized Dealer & Direct Stockist',
    authorizationTier: 'Official German Brand Stockist',
    categoryTag: 'Carbide Burrs & Abrasives',
    filterCategory: 'abrasives',
    territory: 'Authorized Dealer Depot (Delhi-NCR & Pan-India)',
    scopeSummary: 'World-renowned benchmark in industrial surface finishing. Authorized supplier for PFERD tungsten carbide rotary burrs (3CUT, 4CUT, 5CUT, ALU cut), mounted grinding points, ceramic cutting discs, and high-precision deburring files.',
    keyProducts: [
      'Tungsten Carbide Rotary Burrs (Cylindrical ZYA, Ball KUD, Tree RBF)',
      'ALU Cut Burrs for Non-Ferrous & Aviation Alloys',
      'Mounted Grinding Points (Vitrified & Resin Bonded)',
      'POLIFAN® High-Performance Flap Discs & Cut-Off Wheels',
      'Precision Industrial Needle Files & Deburring Rifflers'
    ],
    certifications: [
      'oSa Safety Certified (EN 12413 / EN 13743)',
      'Made in Germany Precision Tolerances',
      'ISO 9001 & ISO 14001 Quality Certified'
    ],
    stockHighlights: 'Full size range of 3mm & 6mm shank burrs in stock',
    leadTime: 'Same-Day Dispatch from Gurugram Depot',
    moq: 'Pack of 5 or 10 / Master Carton Wholesale Rates',
    externalUrl: 'https://www.pferd.com/',
    whatsappMessage: 'Hi P.P.S Industrial, please share PFERD Germany rotary burr wholesale prices and dealer terms.'
  },
  {
    id: 'gratex',
    name: 'CP GRAT-EX® Deburring Systems',
    legalEntity: 'CP GRAT-EX Precision Deburring Tools',
    country: 'Switzerland / Global Deburring',
    estYear: 'Pioneering Automated Deburring',
    logo: 'https://deburringtools.com/wp-content/uploads/2023/12/cp-gratex-logo.png',
    logoType: 'image',
    bannerImage: '/collet-milling.jpg',
    dealershipStatus: 'Authorized Direct Stockist',
    authorizationTier: 'Official Deburring Partner Line',
    categoryTag: 'Hole Deburring & Countersinking',
    filterCategory: 'deburring',
    territory: 'Authorized Stockist (Sector 5 Depot)',
    scopeSummary: 'Patented through-hole deburring and countersink systems that deburr front and rear edges of cross-holes in a single continuous machine pass without flipping the workpiece, reducing cycle times by up to 70%.',
    keyProducts: [
      'Through-Hole Front & Back Deburring Toolholders',
      'High-Speed Replaceable Deburring Blades (HSS-E & Carbide)',
      'Adjustable Spring Tension Regulating Tools',
      'Precision 90° Countersink Sets with Zero Chatter Design',
      'CNC Cross-Hole Automatic Deburring Systems'
    ],
    certifications: [
      'Patented Spring-Loaded Cutting Geometry',
      'Automotive Cycle Time Reduction Validated',
      'Direct Factory Guaranteed Replacement Spares'
    ],
    stockHighlights: 'Tool bodies & genuine replacement blade kits always in stock',
    leadTime: 'Immediate Depot Dispatch',
    moq: '1 Complete Tool Set / Multi-Pack Blades',
    externalUrl: 'https://deburringtools.com/',
    whatsappMessage: 'Hi P.P.S Industrial, please share CP GRAT-EX Deburring Systems catalog and dealership details.'
  },
  {
    id: 'union',
    name: 'Union Materials',
    legalEntity: 'Union Materials Corporation',
    country: 'South Korea',
    estYear: 'Est. 1978',
    logo: '',
    logoType: 'svg-union',
    bannerImage: '/lexustec-banner.jpg',
    dealershipStatus: 'Authorized Direct Stockist',
    authorizationTier: 'Official High-Hardness Partner Line',
    categoryTag: 'Ceramic, PCD & CBN Tooling',
    filterCategory: 'inserts',
    territory: 'Pan-India Supply & High-Hardness Machining',
    scopeSummary: 'South Korean high-technology cutting materials specialist. Authorized stockist of pure oxide ceramic, silicon nitride ceramic (Si3N4), whisker ceramic, and polycrystalline cubic boron nitride (PCBN) inserts for dry machining and hard turning.',
    keyProducts: [
      'Silicon Nitride (Si3N4) Inserts for Grey & Ductile Cast Iron',
      'Al2O3 Mixed Ceramic Inserts for Hardened Steel (45 to 65 HRC)',
      'Whisker Ceramic Inserts for Super Alloys (Inconel/Titanium)',
      'PCBN Solid & Tipped Inserts for Continuous & Interrupted Turning',
      'Roll Machining High-Volume Ceramic Inserts (SNGN / RNGN)'
    ],
    certifications: [
      'Korea Standards (KS) & ISO 9001 Certified',
      'High Thermal Shock Resistance Chemistry',
      'Direct Factory Importer Verification'
    ],
    stockHighlights: 'Key automotive brake disc & roll turning grades in stock',
    leadTime: '1 to 2 Business Days',
    moq: '1 Pack (10 Pcs)',
    whatsappMessage: 'Hi P.P.S Industrial, I would like to inquire about Union Materials Ceramic & PCBN inserts wholesale availability.'
  },
  {
    id: 'jaldhara',
    name: 'Jaldhara Small Tools',
    legalEntity: 'Jaldhara Small Tools Pvt. Ltd.',
    country: 'India',
    estYear: 'Est. 1985',
    logo: '/jaldhara-logo.svg',
    logoType: 'image',
    bannerImage: '/jaldhara-banner.jpg',
    dealershipStatus: 'Authorized Distributor & Stockist',
    authorizationTier: 'Direct Industrial Blades Distributorship',
    categoryTag: 'Industrial Machine Blades',
    filterCategory: 'blades',
    territory: 'Authorized Regional Stockist & Custom Fabricator',
    scopeSummary: 'Leading precision manufacturer of industrial machine shear blades, circular slitter knives, bi-metal M42 bandsaw cutters, HSS slitting saws, and paper/metal guillotine shear knives.',
    keyProducts: [
      'Rectangular Guillotine Shear Blades (High-Carbon High-Chromium D2 / H13)',
      'Circular Slitter Cutters & Spacers for Sheet Metal Coils',
      'Bi-Metal M42 & HSS Variable Pitch Bandsaw Blades',
      'Staggered Teeth Side & Face Milling Cutters (HSS M2 / M35)',
      'HSS Metal Slitting Saw Blades (DIN 1837 Fine & DIN 1838 Coarse)'
    ],
    certifications: [
      'Precision Surface Grinding to ±0.005mm',
      'Vacuum Heat Treatment 58-62 HRC',
      'Custom Dimensions to OEM Engineering Drawings'
    ],
    stockHighlights: 'Standard length guillotine shears & slitting saws in ready stock',
    leadTime: 'Ready Stock: 24h / Custom Blades: 10-14 Days',
    moq: '1 Pair / Blade Set',
    whatsappMessage: 'Hi P.P.S Industrial, please share Jaldhara Small Tools blade dealership prices and fabrication lead times.'
  },
  {
    id: 'shaviv',
    name: 'Shaviv by Vargus',
    legalEntity: 'Vargus Ltd. (Neve Yamin)',
    country: 'Israel / Global',
    estYear: 'Est. 1960',
    logo: '',
    logoType: 'svg-shaviv',
    bannerImage: '/collet-milling.jpg',
    dealershipStatus: 'Authorized Partner Line',
    authorizationTier: 'Authorized Hand Tool Distributor',
    categoryTag: 'Precision Hand Deburring',
    filterCategory: 'deburring',
    territory: 'Pan-India Distribution',
    scopeSummary: 'The original world pioneer in manual scraping and hand deburring tools. Offering heavy-duty Mango and Aluminum handles, interchangeable high-speed steel & cobalt blades (B, E, F series), and scraper blades for sheet metal, plastic, and die-cast parts.',
    keyProducts: [
      'SHAVIV Mango-II Ergonomic Deburring Tool Handles',
      'Heavy Duty "E" Style High-Speed Steel Deburring Blades',
      'Precision "B" Style Blades for Narrow Slot & Hole Edges',
      'Sheet Magic Sheet Metal Edge Deburring Double Cutters',
      'Ceramic Scraper Tools for Plastic Deflashing'
    ],
    certifications: [
      'Ergonomic Health & Safety Compliance',
      'Original Vargus High-Purity Steel Standard',
      '100% Guaranteed Genuine Blades & Collets'
    ],
    stockHighlights: 'High-volume blade multipacks (10/50 pcs) & Mango sets in stock',
    leadTime: 'Same-Day Dispatch',
    moq: 'Single Set / Wholesale Carton (10 Sets)',
    externalUrl: 'https://www.vargus.com/en/product-lines/shaviv/',
    whatsappMessage: 'Hi P.P.S Industrial, please share Shaviv hand deburring wholesale pricing and dealer box quantities.'
  }
];

const FAQS = [
  {
    q: 'How does the P.P.S Industrial Products Dealership Program work?',
    a: 'P.P.S Industrial Products acts as the authorized Tier-1 master distributor and stockist for premier cutting tool brands like Lexustec, Hittco, PFERD, and CP GRAT-EX. Through our dealership program, regional industrial suppliers, tool rooms, CNC job shops, and wholesale traders gain access to direct factory-tier wholesale pricing, ready inventory from our Sector 5 Gurugram depot, guaranteed 100% genuine OEM tooling with test certificates, and full technical application support.'
  },
  {
    q: 'What are the Minimum Order Quantities (MOQs) for dealership pricing?',
    a: 'We understand that dealers and workshops have varying production volumes. We offer tiered wholesale pricing: for initial trials, dealers can order standard factory packs (e.g., 10 inserts or single end mills). For commercial wholesale margins, tier discounts trigger at carton quantities (50–100+ inserts, 10+ carbide tools, or consolidated monthly recurring orders).'
  },
  {
    q: 'Are manufacturer test certificates (MTC/CoC) provided with orders?',
    a: 'Yes, 100%. Every single batch of inserts, carbide drills, end mills, and deburring tools sourced through our authorized dealerships carries official manufacturer batch traceability and test certificates (MTC / Certificate of Conformity) validating metallurgy, dimensional tolerances, and coating specifications.'
  },
  {
    q: 'How fast are wholesale dealership orders dispatched?',
    a: 'We maintain over 10,000 SKUs in continuous ready stock at our central depot in Sector 5, Gurugram. All in-stock orders confirmed before 4:30 PM IST are dispatched on the same business day via our express courier and cargo logistics partners (Delhivery, TCI Express, SafeXpress, Blue Dart).'
  },
  {
    q: 'Can our customers receive technical machining & cutting data support?',
    a: 'Yes. Our in-house technical tooling specialists assist our dealer network with speed/feed recommendations, ISO material suitability (P, M, K, N, S, H), chipbreaker selection, and cycle time optimization for specific customer workpiece alloys.'
  },
  {
    q: 'How do we register as a regional dealer or wholesale partner?',
    a: 'Simply complete the interactive Dealership Application Form on this page or message our Wholesale Desk on WhatsApp (+91 93505 09134). After a quick KYC and trade review (GSTIN & business credentials), your dealer account will be activated with a customized wholesale price card.'
  }
];

export default function DealershipPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'inserts' | 'carbide' | 'abrasives' | 'deburring' | 'blades'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formState, setFormState] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    businessType: 'Regional Industrial Reseller / Tooling Dealer',
    selectedBrands: ['Lexustec Cutting Tools', 'Hittco Tools Ltd'],
    monthlyVolume: '₹50,000 – ₹2,00,000 / month',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const filteredBrands = useMemo(() => {
    return AUTHORIZED_BRANDS.filter((brand) => {
      const matchesCategory = selectedFilter === 'all' || brand.filterCategory === selectedFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        brand.name.toLowerCase().includes(q) ||
        brand.legalEntity.toLowerCase().includes(q) ||
        brand.categoryTag.toLowerCase().includes(q) ||
        brand.scopeSummary.toLowerCase().includes(q) ||
        brand.keyProducts.some((p) => p.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const toggleBrandSelection = (brandName: string) => {
    setFormState((prev) => {
      const exists = prev.selectedBrands.includes(brandName);
      if (exists) {
        return { ...prev, selectedBrands: prev.selectedBrands.filter((b) => b !== brandName) };
      } else {
        return { ...prev, selectedBrands: [...prev.selectedBrands, brandName] };
      }
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.companyName || !formState.contactPerson || !formState.phone) {
      alert('Please fill in Company Name, Contact Person, and WhatsApp Phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = 'PPS-DLR-' + Math.floor(10000 + Math.random() * 90000);
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
    }, 800);
  };

  const resetForm = () => {
    setSubmittedRef(null);
    setFormState({
      companyName: '',
      contactPerson: '',
      phone: '',
      email: '',
      city: '',
      state: '',
      businessType: 'Regional Industrial Reseller / Tooling Dealer',
      selectedBrands: ['Lexustec Cutting Tools', 'Hittco Tools Ltd'],
      monthlyVolume: '₹50,000 – ₹2,00,000 / month',
      notes: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#007CC2]/20 selection:text-[#007CC2]">
      {/* 1. Permanently Fixed TopBar + Header */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-sm">
        <TopBar />
        <Header />
      </div>

      {/* 2. Main Page Content Canvas */}
      <div className="pt-[80px] sm:pt-[124px] md:pt-[172px] lg:pt-[176px] flex-1 flex flex-col font-sans">




        {/* 8. Interactive Dealership Application & Wholesale Partner Form */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200" id="dealership-application">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-slate-50/90 border border-slate-200/90 text-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
              
              {/* Subtle Luminous Highlights */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-slate-200/60 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#007CC2]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                
                {/* Header */}
                <div className="space-y-2 mb-8 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
                    <Briefcase size={14} className="text-[#007CC2]" />
                    <span>Official Partner Registration</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Apply for Dealership &amp; Wholesale Account
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal">
                    Complete this quick application to access our Tier-1 wholesale catalog, OEM certificate archives, and regional stockist benefits.
                  </p>
                </div>

                {submittedRef ? (
                  <div className="bg-white border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-sm animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                      <CheckCircle2 size={32} />
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-xl font-black text-slate-900">Dealership Application Received!</h4>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Thank you for applying to join the P.P.S Authorized Dealership Network.
                      </p>
                    </div>

                    <div className="inline-block bg-slate-100 border border-slate-200 rounded-xl px-5 py-3">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 block font-semibold">Your Application Reference:</span>
                      <span className="text-xl font-black text-[#007CC2] tracking-widest">{submittedRef}</span>
                    </div>

                    <p className="text-xs text-slate-600 max-w-md mx-auto font-normal leading-relaxed">
                      Our Wholesale Desk Manager has received your details and will contact you via WhatsApp / phone within 2 business hours with your customized rate card.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={`https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20I%20have%20submitted%20Dealership%20Application%20Ref%3A%20${submittedRef}%20for%20${encodeURIComponent(formState.companyName)}.%20Please%20accelerate%20our%20wholesale%20rate%20card.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-all"
                      >
                        <MessageCircle size={16} />
                        <span>Instant WhatsApp Follow-up</span>
                      </a>

                      <button
                        onClick={resetForm}
                        className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-all border border-slate-200"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Company / Dealership Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Precision Tools &amp; Hardware Corp."
                          value={formState.companyName}
                          onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Proprietor / Contact Person <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Sharma (Managing Director)"
                          value={formState.contactPerson}
                          onChange={(e) => setFormState({ ...formState, contactPerson: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          WhatsApp / Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Business Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. purchase@precisiontools.in"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">City / Industrial Area</label>
                        <input
                          type="text"
                          placeholder="e.g. Manesar / Pune / Rajkot"
                          value={formState.city}
                          onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">State / Territory</label>
                        <input
                          type="text"
                          placeholder="e.g. Haryana / Maharashtra / Gujarat"
                          value={formState.state}
                          onChange={(e) => setFormState({ ...formState, state: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Est. Monthly Volume</label>
                        <select
                          value={formState.monthlyVolume}
                          onChange={(e) => setFormState({ ...formState, monthlyVolume: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] shadow-2xs"
                        >
                          <option value="Under ₹50,000 / month">Under ₹50,000 / month</option>
                          <option value="₹50,000 – ₹2,00,000 / month">₹50,000 – ₹2,00,000 / month</option>
                          <option value="₹2,00,000 – ₹5,00,000 / month">₹2,00,000 – ₹5,00,000 / month</option>
                          <option value="₹5,00,000+ / month (Wholesale Tier)">₹5,00,000+ / month (Wholesale)</option>
                        </select>
                      </div>
                    </div>

                    {/* Brand Multi-Select Pills */}
                    <div className="space-y-2 pt-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Select Brands of Interest (Click to toggle):
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Lexustec Cutting Tools',
                          'Hittco Tools Ltd',
                          'PFERD TOOLS Germany',
                          'CP GRAT-EX® Deburring',
                          'Union Materials Korea',
                          'Jaldhara Small Tools',
                          'Shaviv by Vargus'
                        ].map((brandName) => {
                          const isSelected = formState.selectedBrands.includes(brandName);
                          return (
                            <button
                              type="button"
                              key={brandName}
                              onClick={() => toggleBrandSelection(brandName)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                                isSelected
                                  ? 'bg-[#007CC2] text-white border border-[#007CC2] shadow-xs'
                                  : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100 shadow-2xs'
                              }`}
                            >
                              {isSelected ? <Check size={12} className="text-white" /> : <span className="w-3 h-3 rounded-full border border-slate-300" />}
                              <span>{brandName}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Specific Notes */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Additional Requirements / Specific Tooling SKUs
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Tell us about your existing client base, specific insert grades needed, or immediate quotes requested..."
                        value={formState.notes}
                        onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#007CC2] focus:border-transparent shadow-2xs"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                        <span>Your data is strictly confidential and protected by P.P.S B2B trade policy.</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#007CC2] hover:bg-[#0091e6] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#007CC2]/30 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw size={16} className="animate-spin" />
                            <span>Processing Application...</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Submit Dealership Application</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </section>


        {/* 10. Dealership FAQ Section (Interactive Accordion) */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#007CC2] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Dealership &amp; Wholesale Inquiries
              </h2>
              <p className="text-sm text-slate-600 font-normal">
                Everything you need to know about partnering with P.P.S Industrial Products as an authorized stockist.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#007CC2] transition-colors"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#007CC2]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 11. Bottom Conversion Callout */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100/60 text-slate-900 border-t border-slate-200/90 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles size={14} className="text-[#007CC2]" />
              <span>Expand Your Cutting Tool Supply Business</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
              Ready to Access Direct Factory Wholesale Tooling Rates?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Connect with our Gurugram Central Depot today. Our commercial tooling team will configure your wholesale dealer price list and assign your territory manager immediately.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#dealership-application"
                className="px-8 py-4 rounded-xl bg-[#007CC2] hover:bg-[#0091e6] text-white font-black text-sm sm:text-base inline-flex items-center gap-2 shadow-lg shadow-[#007CC2]/40 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Register as Dealer Now</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20I%20would%20like%20to%20speak%20with%20your%20Wholesale%20Dealership%20Head."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base inline-flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

      </div>

      {/* RfqModal and Toast */}
      <RfqModal />
      <Toast />

      {/* Footer */}
      <Footer />
    </div>
  );
}
