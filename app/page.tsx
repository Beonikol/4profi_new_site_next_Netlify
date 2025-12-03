// app/page.tsx
"use client";

import Hero from "@/components/Hero/Hero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import ServicesBlock from "@/components/Sections/ServicesBlock";
import PromoSection from "@/components/PromoSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* НОВИЙ КІНОМАТИЧНИЙ HERO */}
      <Hero />

      {/* НАПРЯМКИ */}
      <ServicesBlock />

      {/* АКЦІЇ */}
      <PromoSection />

      {/* CTA */}
      <CTA />
    </main>
  );
}