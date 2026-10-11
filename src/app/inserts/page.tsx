'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Search, 
  Filter, 
  TableProperties, 
  LayoutGrid, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  ChevronRight, 
  ArrowLeft,
  X, 
  Info, 
  Check, 
  Download, 
  PhoneCall, 
  SlidersHorizontal, 
  Layers, 
  ChevronDown, 
  Sparkles, 
  RefreshCw, 
  Plus,
  Ruler,
  Gauge,
  Zap,
  Wrench,
  Boxes,
  FileSpreadsheet,
  CheckCircle2,
  Printer,
  Eye,
  Target,
  Disc,
  ArrowUpDown
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RfqModal from '@/components/RfqModal';
import Toast from '@/components/Toast';
import { 
  CUTTING_INSERTS, 
  ISO_MATERIALS_MAP, 
  CuttingInsert, 
  toProduct 
} from '@/data/insertsData';
import { useRfq } from '@/context/RfqContext';

function InsertsContent() {
  const searchParams = useSearchParams();
  const { openRfqModal } = useRfq();

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedShape, setSelectedShape] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [activeInsertModal, setActiveInsertModal] = useState<CuttingInsert | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(50);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedMaterial, selectedCategory, selectedShape, itemsPerPage]);

  // Read initial query params from URL if present
  useEffect(() => {
    const matParam = searchParams.get('material');
    if (matParam && ['p', 'm', 'k', 'n', 's', 'h'].includes(matParam.toLowerCase())) {
      setSelectedMaterial(matParam.toUpperCase());
    }
    const catParam = searchParams.get('category');
    if (catParam) {
      setSelectedCategory(catParam.toLowerCase());
    }
  }, [searchParams]);

  // Compute category counts for tab badges
  const categoryCounts = useMemo(() => {
    return {
      all: CUTTING_INSERTS.length,
      turning: CUTTING_INSERTS.filter(i => i.category === 'turning').length,
      milling: CUTTING_INSERTS.filter(i => i.category === 'milling').length,
      grooving: CUTTING_INSERTS.filter(i => i.category === 'grooving').length,
      threading: CUTTING_INSERTS.filter(i => i.category === 'threading').length,
      udrill: CUTTING_INSERTS.filter(i => i.category === 'udrill').length,
    };
  }, []);

  // Filtered dataset
  const filteredInserts = useMemo(() => {
    return CUTTING_INSERTS.filter((insert) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQuery = 
          insert.orderCode.toLowerCase().includes(query) ||
          insert.description.toLowerCase().includes(query) ||
          insert.code.toLowerCase().includes(query) ||
          insert.name.toLowerCase().includes(query) ||
          insert.categoryLabel.toLowerCase().includes(query) ||
          insert.grade.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      // 2. Material ISO Filter
      if (selectedMaterial !== 'all') {
        if (!insert.isoMaterials.includes(selectedMaterial as any)) {
          return false;
        }
      }

      // 3. Category Filter
      if (selectedCategory !== 'all') {
        if (insert.category !== selectedCategory) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedMaterial, selectedCategory]);

  const totalPages = Math.ceil(filteredInserts.length / itemsPerPage);
  const paginatedInserts = useMemo(() => {
    if (itemsPerPage >= filteredInserts.length) return filteredInserts;
    const start = (currentPage - 1) * itemsPerPage;
    return filteredInserts.slice(start, start + itemsPerPage);
  }, [filteredInserts, currentPage, itemsPerPage]);

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedMaterial('all');
    setSelectedCategory('all');
    setSelectedShape('all');
  };

  const hasActiveFilters = searchQuery !== '' || selectedMaterial !== 'all' || selectedCategory !== 'all' || selectedShape !== 'all';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#007CC2]/20 selection:text-[#007CC2]">
      
      {/* 1. Permanently Fixed TopBar + Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-sm">
        <TopBar />
        <Header />
      </div>

      {/* 2. Main Page Content Canvas with generous clearance for fixed TopBar + Header */}
      <div className="pt-[80px] sm:pt-[124px] md:pt-[172px] lg:pt-[176px] flex-1 flex flex-col font-sans">
        
        {/* Page Breadcrumbs Bar */}
        <div className="bg-white border-b border-slate-200 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-[#007CC2] transition-colors flex items-center gap-1">
                <span>Home</span>
              </Link>
              <ChevronRight size={13} className="text-slate-300" />
              <Link href="/#cutting-inserts" className="hover:text-[#007CC2] transition-colors">
                <span>Cutting Inserts</span>
              </Link>
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-[#007CC2] font-bold">Technical ISO Specification Table</span>
            </div>
          </div>
        </div>

        {/* Hero Banner: Featuring Authentic LexusTec Tooling Background Image */}
        <div className="relative text-white border-b border-slate-800 pt-14 sm:pt-18 lg:pt-22 pb-4 sm:pb-5 overflow-hidden bg-slate-950 flex flex-col justify-end min-h-[280px] sm:min-h-[330px] lg:min-h-[360px]">
          
          {/* Authentic LexusTec Inserts & Packaging Background Photo - Vividly Visible */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/lexustec/inserts-hero-bg.jpg"
              alt="LexusTec TNMG 160408 FL LT10 Carbide Turning Inserts"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center sm:object-right opacity-90 select-none pointer-events-none"
            />
            {/* Subtle Vignette for Text Clarity without Bottom Shadow */}
            <div className="absolute inset-0 bg-slate-950/25" />
            
            {/* Top Subtle Edge Gradient */}
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-slate-950/70 to-transparent" />

            {/* High-Tech Blueprint Grids Watermark */}
            <div className="absolute inset-0 bg-[radial-gradient(#007CC220_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-30" />
          </div>

          <div className="absolute -top-32 right-12 w-[480px] h-[480px] bg-[#007CC2]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-10 w-[360px] h-[360px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Main Content Layout - All Items Aligned to Bottom */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-end items-center gap-5 sm:gap-6">
            
            {/* 1. Centered Section Title */}
            <div className="text-center mx-auto">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)]">
                Cutting <span className="bg-gradient-to-r from-[#38bdf8] via-[#00a3ff] to-cyan-300 bg-clip-text text-transparent">Inserts</span>
              </h1>
            </div>

            {/* 2. Horizontal Line Divider */}
            <div className="w-full border-t border-white/20 pt-4 sm:pt-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
                
                {/* Left: Popular Standards Chips Below the Line */}
                <div className="flex flex-wrap items-center sm:items-end justify-center sm:justify-start gap-2 text-xs font-sans">
                  <span className="text-slate-300 font-bold text-xs uppercase tracking-wider mr-1 drop-shadow-sm pb-1 sm:pb-0.5">
                    Popular Standards:
                  </span>
                  {[
                    { label: 'CNMG', query: 'CNMG' },
                    { label: 'WNMG', query: 'WNMG' },
                    { label: 'TNMG', query: 'TNMG' },
                    { label: 'CCMT', query: 'CCMT' },
                    { label: 'DCMT', query: 'DCMT' },
                    { label: 'APMT', query: 'APMT' },
                    { label: 'MGMN', query: 'MGMN' },
                    { label: '16ER', query: '16ER' },
                    { label: 'SPGT', query: 'SPGT' },
                  ].map(item => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setSearchQuery(item.query)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/65 hover:bg-[#007CC2] text-slate-200 hover:text-white border border-white/15 hover:border-[#007CC2] text-xs font-bold tracking-tight transition-all backdrop-blur-md shadow-xs active:scale-95"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Right: Only WhatsApp Icon to Connect */}
                <div className="flex items-center sm:items-end gap-2 shrink-0">
                  <a
                    href="https://wa.me/919350509134?text=Hi%20P.P.S%20Industrial%2C%20I%20would%20like%20to%20inquire%20about%20bulk%20cutting%20inserts%20catalog."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all"
                    title="Connect on WhatsApp"
                    aria-label="Connect on WhatsApp"
                  >
                    <MessageCircle size={22} className="fill-current" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 3. Sticky Filter & Controls Toolbar */}
        <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-[80px] sm:top-[124px] md:top-[172px] lg:top-[176px] z-30 shadow-xs font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 space-y-3">
            
            {/* Top Row: Search Input + Category Segment Tabs + View Switcher */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              
              {/* Search Bar with Instant Icon & Clear Button */}
              <div className="relative flex-1 max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search order code (LT001...), description, or grade..."
                  className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007CC2] focus:bg-white focus:ring-2 focus:ring-[#007CC2]/20 transition-all shadow-2xs font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-200 transition-colors"
                    aria-label="Clear search query"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Category Segment Tabs with Live Item Counts */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 font-sans">
                {[
                  { id: 'all', label: 'All Inserts', count: categoryCounts.all },
                  { id: 'turning', label: 'Turning', count: categoryCounts.turning },
                  { id: 'milling', label: 'Milling', count: categoryCounts.milling },
                  { id: 'grooving', label: 'Grooving', count: categoryCounts.grooving },
                  { id: 'threading', label: 'Threading', count: categoryCounts.threading },
                  { id: 'udrill', label: 'U-Drill', count: categoryCounts.udrill }
                ].map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      selectedCategory === cat.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-xs font-bold tabular-nums px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat.id
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Mode Switcher: Desktop Table vs Cards */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0 self-end md:self-auto border border-slate-200 font-sans">
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'table'
                      ? 'bg-white text-[#007CC2] shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Switch to Dense Technical Table View"
                >
                  <TableProperties size={15} />
                  <span className="hidden sm:inline">Engineering Table</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#007CC2] shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Switch to Card Grid View"
                >
                  <LayoutGrid size={15} />
                  <span className="hidden sm:inline">Visual Cards</span>
                </button>
              </div>

            </div>

            {/* Bottom Row: Workpiece Material (ISO 513) Filter Matrix */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 font-sans">
              
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                  <Filter size={12} className="text-[#007CC2]" />
                  <span>ISO 513 Workpiece:</span>
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedMaterial('all')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    selectedMaterial === 'all'
                      ? 'bg-[#007CC2] text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All ({CUTTING_INSERTS.length})
                </button>

                {(['P', 'M', 'K', 'N', 'S', 'H'] as const).map(code => {
                  const mat = ISO_MATERIALS_MAP[code];
                  const isSelected = selectedMaterial === code;
                  const count = CUTTING_INSERTS.filter(i => i.isoMaterials.includes(code)).length;

                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setSelectedMaterial(isSelected ? 'all' : code)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                        isSelected
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                      title={`${mat.code}: ${mat.name} (${mat.description})`}
                    >
                      <span className={`w-5 h-5 rounded flex items-center justify-center font-bold text-xs shadow-2xs ${mat.badgeBg} ${mat.badgeText}`}>
                        {mat.code}
                      </span>
                      <span>{mat.name}</span>
                      <span className="text-xs opacity-75 font-bold tabular-nums">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Reset button if filtered */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs text-[#007CC2] hover:text-[#005688] font-bold flex items-center gap-1.5 hover:underline py-1"
                >
                  <RefreshCw size={13} />
                  <span>Reset All Filters</span>
                </button>
              )}

            </div>

          </div>
        </div>

        {/* 4. Results Bar & Quick Count */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 w-full font-sans">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span>
                Showing <strong className="text-slate-900 font-extrabold tabular-nums">{filteredInserts.length}</strong> of{' '}
                <strong className="text-slate-900 font-extrabold tabular-nums">{CUTTING_INSERTS.length}</strong> industrial insert specifications
              </span>
              {selectedMaterial !== 'all' && (
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[#007CC2] border border-[#bde2f5] font-bold">
                  ISO Class {selectedMaterial} ({ISO_MATERIALS_MAP[selectedMaterial as keyof typeof ISO_MATERIALS_MAP]?.name})
                </span>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Real-Time Warehouse Stock Active</span>
            </div>
          </div>
        </div>

        {/* 5. Main Data View (Engineering Table or Visual Cards) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full flex-1 font-sans">
          
          {filteredInserts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 my-6 shadow-xs font-sans">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">No cutting inserts matched your criteria</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                No inserts match your current search and filter combination. Try clearing your search term or selecting another workpiece material class.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-[#007CC2] text-white font-bold text-xs shadow-sm hover:bg-[#006aa6] transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : viewMode === 'table' ? (
            
            /* ============================================================== */
            /* ELEVATED DESKTOP TECHNICAL COMPARISON TABLE VIEW               */
            /* ============================================================== */
            <div className="space-y-4 font-sans">
              
              {/* Desktop Technical Table Container */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md ring-1 ring-slate-900/5 overflow-hidden hidden md:block">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse font-sans">
                    
                    {/* Clean Spacious Table Header - Exactly Matching Actual Data Columns */}
                    <thead>
                      <tr className="bg-slate-900 text-slate-100 border-b-2 border-[#007CC2] text-xs font-bold uppercase tracking-wider select-none">
                        
                        <th className="py-4 px-6 font-bold w-[16%]">
                          <div className="flex items-center gap-2">
                            <Disc size={15} className="text-[#38bdf8]" />
                            <span>Order Code</span>
                          </div>
                        </th>

                        <th className="py-4 px-6 font-bold w-[38%]">
                          <div className="flex items-center gap-2">
                            <SlidersHorizontal size={15} className="text-emerald-400" />
                            <span>Descriptions</span>
                          </div>
                        </th>

                        <th className="py-4 px-6 font-bold w-[18%]">
                          <div className="flex items-center gap-2">
                            <Target size={15} className="text-amber-400" />
                            <span>Inserts (Operation)</span>
                          </div>
                        </th>

                        <th className="py-4 px-6 font-bold w-[16%]">
                          <div className="flex items-center gap-2">
                            <ShieldCheck size={15} className="text-indigo-400" />
                            <span>List Price / Pcs INR</span>
                          </div>
                        </th>

                        <th className="py-4 px-6 font-bold text-right w-[12%]">
                          <div className="flex items-center justify-end gap-2">
                            <FileSpreadsheet size={15} className="text-[#38bdf8]" />
                            <span>Inquire</span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body with Spacious Rows and Natural Font Sizing */}
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {paginatedInserts.map((insert, index) => {
                        const isEven = index % 2 === 0;

                        return (
                          <tr
                            key={insert.id}
                            className={`${isEven ? 'bg-white' : 'bg-slate-50/50'} hover:bg-[#f0f8fc] transition-colors group cursor-pointer border-l-4 border-l-transparent hover:border-l-[#007CC2]`}
                            onClick={() => setActiveInsertModal(insert)}
                          >
                            {/* 1. ORDER CODE */}
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#007CC2] transition-all overflow-hidden shadow-2xs">
                                  <Image
                                    src={insert.image}
                                    alt={insert.orderCode}
                                    width={44}
                                    height={44}
                                    className="object-contain w-full h-full"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <span className="font-extrabold text-base text-slate-900 group-hover:text-[#007CC2] transition-colors">
                                    {insert.orderCode}
                                  </span>
                                </div>
                              </div>
                            </td>

                            {/* 2. DESCRIPTIONS */}
                            <td className="py-4 px-6">
                              <div className="space-y-1">
                                <span className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#007CC2] transition-colors leading-snug">
                                  {insert.description}
                                </span>
                                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                                  <span>Grade: <strong className="text-slate-800">{insert.grade}</strong></span>
                                  <span>•</span>
                                  <div className="flex items-center gap-1">
                                    {insert.isoMaterials.map(matCode => {
                                      const mat = ISO_MATERIALS_MAP[matCode];
                                      return (
                                        <span
                                          key={matCode}
                                          className={`w-4.5 h-4.5 rounded flex items-center justify-center font-bold text-[10px] ${mat.badgeBg} ${mat.badgeText}`}
                                          title={`${mat.code}: ${mat.name}`}
                                        >
                                          {mat.code}
                                        </span>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </td>

                            {/* 3. INSERTS (Operation) */}
                            <td className="py-4 px-6">
                              <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
                                insert.category === 'threading' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                                insert.category === 'grooving' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                                insert.category === 'udrill' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                                insert.category === 'milling' ? 'bg-cyan-100 text-cyan-800 border border-cyan-200' :
                                'bg-blue-100 text-blue-800 border border-blue-200'
                              }`}>
                                {insert.categoryLabel}
                              </span>
                            </td>

                            {/* 4. LIST PRICE / PCS INR */}
                            <td className="py-4 px-6">
                              <div className="space-y-0.5">
                                <span className="font-extrabold text-base text-slate-900 tabular-nums">
                                  {insert.priceFormatted}
                                </span>
                                <span className="block text-xs text-slate-400 font-medium">
                                  per pc (MOQ 10)
                                </span>
                              </div>
                            </td>

                            {/* 5. INQUIRE ACTION */}
                            <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => openRfqModal(toProduct(insert))}
                                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-[#007CC2] text-white font-bold text-xs transition-colors shadow-2xs whitespace-nowrap active:scale-95 flex items-center gap-1.5"
                                  title="Add to Technical RFQ Basket"
                                >
                                  <Plus size={14} />
                                  <span>RFQ</span>
                                </button>

                                <a
                                  href={`https://wa.me/919350509134?text=${encodeURIComponent(insert.whatsappMessage)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-colors"
                                  title="Inquire on WhatsApp"
                                >
                                  <MessageCircle size={16} className="fill-current" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Table Footer with Pagination Controls */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-sans">
                  <div className="flex flex-wrap items-center gap-3">
                    <span>
                      Showing <strong className="text-slate-900 font-bold tabular-nums">{filteredInserts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}</strong> to{' '}
                      <strong className="text-slate-900 font-bold tabular-nums">{Math.min(currentPage * itemsPerPage, filteredInserts.length)}</strong> of{' '}
                      <strong className="text-slate-900 font-bold tabular-nums">{filteredInserts.length}</strong> items
                    </span>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <div className="flex items-center gap-1.5">
                      <span>Per page:</span>
                      {[25, 50, 100].map(size => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setItemsPerPage(size)}
                          className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors ${
                            itemsPerPage === size
                              ? 'bg-slate-900 text-white'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setItemsPerPage(filteredInserts.length || 320)}
                        className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors ${
                          itemsPerPage >= filteredInserts.length
                            ? 'bg-slate-900 text-white'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        All
                      </button>
                    </div>
                  </div>

                  {totalPages > 1 && itemsPerPage < filteredInserts.length && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        Previous
                      </button>
                      <span className="px-2 font-medium">Page {currentPage} of {totalPages}</span>
                      <button
                        type="button"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* MOBILE TABLE VIEW: Responsive Touch Cards */}
              <div className="space-y-3 md:hidden font-sans">
                <div className="px-2 py-1 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">Carbide Inserts Specifications</span>
                  <span className="font-bold text-[#007CC2]">Tap card for details</span>
                </div>

                {paginatedInserts.map((insert) => (
                  <div
                    key={insert.id}
                    onClick={() => setActiveInsertModal(insert)}
                    className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3 cursor-pointer hover:border-[#007CC2] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-2xs">
                        <Image
                          src={insert.image}
                          alt={insert.orderCode}
                          width={52}
                          height={52}
                          className="object-contain w-full h-full"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-extrabold text-base text-slate-900 tracking-tight">
                            {insert.orderCode}
                          </span>
                          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            insert.category === 'threading' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                            insert.category === 'grooving' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                            insert.category === 'udrill' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                            insert.category === 'milling' ? 'bg-cyan-100 text-cyan-800 border border-cyan-200' :
                            'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}>
                            {insert.categoryLabel}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {insert.description}
                        </h4>

                        {/* Grade and ISO Badges */}
                        <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500">
                          <span>Grade: <strong className="text-slate-800 font-semibold">{insert.grade}</strong></span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            {insert.isoMaterials.map(matCode => {
                              const mat = ISO_MATERIALS_MAP[matCode];
                              return (
                                <span
                                  key={matCode}
                                  className={`w-4.5 h-4.5 rounded flex items-center justify-center font-bold text-[10px] ${mat.badgeBg} ${mat.badgeText}`}
                                  title={`${mat.code}: ${mat.name}`}
                                >
                                  {mat.code}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price and Action Row */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">List Price / Pcs</span>
                        <span className="text-base font-black text-slate-900 tabular-nums">
                          {insert.priceFormatted}
                        </span>
                      </div>

                      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => openRfqModal(toProduct(insert))}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-[#007CC2] text-white font-bold text-xs shadow-2xs transition-colors flex items-center gap-1"
                        >
                          <Plus size={13} />
                          <span>RFQ</span>
                        </button>
                        <a
                          href={`https://wa.me/919350509134?text=${encodeURIComponent(insert.whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors"
                          title="Inquire on WhatsApp"
                        >
                          <MessageCircle size={16} className="fill-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Mobile Pagination */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between gap-2 text-xs text-slate-600 font-sans shadow-xs">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  <span className="font-bold text-slate-800">
                    Page {currentPage} of {totalPages || 1}
                  </span>
                  <button
                    type="button"
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>

            </div>

          ) : (

            /* ============================================================== */
            /* CARD GRID VIEW                                                 */
            /* ============================================================== */
            <div className="space-y-6 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedInserts.map((insert) => (
                  <div
                    key={insert.id}
                    onClick={() => setActiveInsertModal(insert)}
                    className="bg-white rounded-3xl border border-slate-200 hover:border-[#007CC2] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                  >
                    {/* Photo Canvas */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                      <Image
                        src={insert.image}
                        alt={insert.orderCode}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-4 group-hover:scale-108 transition-transform duration-500"
                      />

                      {/* Code Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="font-sans text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-[#007CC2] text-white shadow-xs tracking-tight">
                          {insert.orderCode}
                        </span>
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          insert.category === 'threading' ? 'bg-purple-100 text-purple-800' :
                          insert.category === 'grooving' ? 'bg-emerald-100 text-emerald-800' :
                          insert.category === 'udrill' ? 'bg-amber-100 text-amber-800' :
                          insert.category === 'milling' ? 'bg-cyan-100 text-cyan-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {insert.categoryLabel}
                        </span>
                      </div>

                      {/* ISO Pills */}
                      <div className="absolute top-3 right-3 flex items-center gap-1">
                        {insert.isoMaterials.map(matCode => {
                          const mat = ISO_MATERIALS_MAP[matCode];
                          return (
                            <span
                              key={matCode}
                              className={`w-5 h-5 rounded flex items-center justify-center font-bold text-xs shadow-xs ${mat.badgeBg} ${mat.badgeText}`}
                              title={`${mat.code}: ${mat.name}`}
                            >
                              {mat.code}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4 font-sans">
                      <div className="space-y-2">
                        <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#007CC2] transition-colors leading-snug">
                          {insert.description}
                        </h3>

                        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <span>Grade: <strong className="text-slate-800">{insert.grade}</strong></span>
                          <span>•</span>
                          <span>{insert.brand}</span>
                        </div>
                      </div>

                      {/* Price & Action Row */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">List Price</span>
                          <span className="text-lg font-black text-slate-900 tabular-nums">
                            {insert.priceFormatted}
                          </span>
                        </div>

                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => openRfqModal(toProduct(insert))}
                            className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-[#007CC2] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs active:scale-95"
                          >
                            <Plus size={13} />
                            <span>RFQ</span>
                          </button>

                          <a
                            href={`https://wa.me/919350509134?text=${encodeURIComponent(insert.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] hover:text-white font-bold text-xs transition-colors flex items-center gap-1.5 active:scale-95"
                          >
                            <MessageCircle size={15} className="fill-current" />
                            <span className="hidden sm:inline">Quote</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Grid Pagination Footer */}
              <div className="px-6 py-4 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-sans shadow-xs">
                <div className="flex flex-wrap items-center gap-3">
                  <span>
                    Showing <strong className="text-slate-900 font-bold tabular-nums">{filteredInserts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}</strong> to{' '}
                    <strong className="text-slate-900 font-bold tabular-nums">{Math.min(currentPage * itemsPerPage, filteredInserts.length)}</strong> of{' '}
                    <strong className="text-slate-900 font-bold tabular-nums">{filteredInserts.length}</strong> items
                  </span>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1.5">
                    <span>Per page:</span>
                    {[25, 50, 100].map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setItemsPerPage(size)}
                        className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors ${
                          itemsPerPage === size
                            ? 'bg-slate-900 text-white'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {totalPages > 1 && itemsPerPage < filteredInserts.length && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    <span className="px-2 font-medium">Page {currentPage} of {totalPages}</span>
                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>

          )}

        </div>

        {/* 6. Technical Blueprint Slide-Over Dialog / Modal */}
        {activeInsertModal && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 font-sans"
            onClick={() => setActiveInsertModal(null)}
          >
            <div 
              className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden p-6 sm:p-8 space-y-6 relative font-sans"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveInsertModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 pr-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center shrink-0 shadow-sm">
                  <Image
                    src={activeInsertModal.image}
                    alt={activeInsertModal.orderCode}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="space-y-1 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xs px-2.5 py-0.5 rounded-full bg-[#007CC2] text-white tracking-tight">
                      {activeInsertModal.orderCode}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      activeInsertModal.category === 'threading' ? 'bg-purple-100 text-purple-800' :
                      activeInsertModal.category === 'grooving' ? 'bg-emerald-100 text-emerald-800' :
                      activeInsertModal.category === 'udrill' ? 'bg-amber-100 text-amber-800' :
                      activeInsertModal.category === 'milling' ? 'bg-cyan-100 text-cyan-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {activeInsertModal.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {activeInsertModal.description}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Grade: <strong className="text-slate-800">{activeInsertModal.grade}</strong> • Brand: <strong className="text-slate-800">{activeInsertModal.brand}</strong>
                  </p>
                </div>
              </div>

              {/* Commercial Pricing Card */}
              <div className="p-4 rounded-2xl bg-[#f0f8fc] border border-[#bde2f5] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">List Price / Pcs (INR)</span>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">
                    {activeInsertModal.priceFormatted}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Standard packaging: 10 pcs / box</span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available in Stock
                  </span>
                  <span className="block text-xs text-slate-500 mt-1">Direct dispatch Gurugram / Delhi-NCR</span>
                </div>
              </div>

              {/* ISO Material Compatibility Badges */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 font-sans">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Applicable Workpiece Materials (ISO Standard):
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeInsertModal.isoMaterials.map(matCode => {
                    const mat = ISO_MATERIALS_MAP[matCode];
                    return (
                      <div key={matCode} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs text-xs">
                        <span className={`w-5 h-5 rounded flex items-center justify-center font-bold text-xs ${mat.badgeBg} ${mat.badgeText}`}>
                          {mat.code}
                        </span>
                        <span className="font-bold text-slate-800">{mat.name}</span>
                        <span className="text-xs text-slate-400 hidden sm:inline">({mat.description})</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200 font-sans">
                <button
                  type="button"
                  onClick={() => {
                    openRfqModal(toProduct(activeInsertModal));
                    setActiveInsertModal(null);
                  }}
                  className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-slate-900 hover:bg-[#007CC2] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Plus size={16} />
                  <span>Add to RFQ Basket</span>
                </button>

                <a
                  href={`https://wa.me/919350509134?text=${encodeURIComponent(activeInsertModal.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#1fa851] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle size={16} className="fill-current" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Global RFQ Modal and Toast */}
      <RfqModal />
      <Toast />

      {/* Modern Comprehensive Footer */}
      <Footer />
    </div>
  );
}

export default function InsertsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white font-sans">
        <div className="text-center space-y-2">
          <div className="w-8 h-8 border-4 border-[#007CC2] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest font-sans">Loading Inserts Table...</p>
        </div>
      </div>
    }>
      <InsertsContent />
    </Suspense>
  );
}
