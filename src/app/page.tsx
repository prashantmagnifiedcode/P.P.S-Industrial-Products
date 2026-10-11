'use client';

import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import AboutSection from '@/components/AboutSection';
import CuttingInsertsHomeSection from '@/components/CuttingInsertsHomeSection';
import LexustecSection from '@/components/LexustecSection';
import ProductCatalogSection from '@/components/ProductCatalogSection';
import PferdSection from '@/components/PferdSection';
import JaldharaSection from '@/components/JaldharaSection';
import HittcoSection from '@/components/HittcoSection';
import TeamSection from '@/components/TeamSection';
import DailyPartnerSection from '@/components/DailyPartnerSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import RfqModal from '@/components/RfqModal';
import Toast from '@/components/Toast';

export default function HomePage() {
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

      {/* 1. Permanently Fixed TopBar + Header Container (Never scrolls away) */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}>
        <TopBar />
        <Header isScrolled={isScrolled} />
      </div>

      {/* 2. Main Content Canvas with dynamic top padding for fixed header */}
      <div className="pt-[74px] sm:pt-[112px] md:pt-[156px] flex-1 flex flex-col">

        {/* Sequence designed for maximum B2B reach, instant credibility & conversion */}
        <main className="flex-1 flex flex-col">

          {/* 1. Hero Section: High-converting headline, CTAs, trust stats, and cutting tool imagery */}
          <HeroSection />

          {/* 2. Authorized Brand Partners: Instant trust building right below hero */}
          <PartnersSection />

          {/* 3. About Us: Company story since 2010, Sector 5 depot, and collet milling photography */}
          <AboutSection />

          {/* 4. Cutting Inserts Section: High-res insert photography + View More -> /inserts */}
          <CuttingInsertsHomeSection />

          {/* 5. Lexustec Cutting Tools Showcase (Directly above CP GRAT-EX) */}
          <LexustecSection />

          {/* 5. Products Showcase: CP GRAT-EX deburring & countersink systems */}
          <ProductCatalogSection />

          {/* 5. PFERD Germany: Authorized Dealer Showcase */}
          <PferdSection />

          {/* 7. We Sell Blades: Jaldhara Small Tools Precision Blades Showcase */}
          <JaldharaSection />

          {/* 8. Hittco Tools: Precision HSS & Solid Carbide Tooling (from last) */}
          <HittcoSection />

          {/* 9. Support Network & Team Section */}
          <TeamSection />

          {/* 5. Small, focused Courier & Delivery Partners section */}
          <DailyPartnerSection />

          {/* 6. Contact & Facility Locator Section */}
          <ContactSection />

        </main>

        {/* 7. Comprehensive Modern Footer */}
        <Footer />

      </div>

      {/* Global Interactive B2B Quotation Modal & Toast Notification */}
      <RfqModal />
      <Toast />
    </div>
  );
}
