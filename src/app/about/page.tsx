'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#007CC2]/20 selection:text-[#007CC2]">
      {/* 1. Fixed TopBar + Header Container */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}>
        <TopBar />
        <Header isScrolled={isScrolled} />
      </div>

      {/* 2. Main Content Canvas */}
      <div className="pt-[70px] md:pt-[155px] flex-1 flex flex-col bg-slate-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-slate-200 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-[#007CC2] transition-colors flex items-center gap-1">
                <span>Home</span>
              </Link>
              <ChevronRight size={13} className="text-slate-300" />
              <span className="text-[#007CC2] font-bold">About Us</span>
            </div>
          </div>
        </div>

        <main className="flex-1 flex flex-col">
          {/* Main About Section with Expo Awards & IndiaMART Credential Cards */}
          <AboutSection />

          {/* Team and Support Network */}
          <TeamSection />
        </main>
      </div>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

