"use client";

import React, { useState } from 'react';
import WorkHero from '@/components/ui/WorkHero';
import WorkGridSection from '@/components/ui/WorkGridSection';
import WorkImpactStatsSection from '@/components/ui/WorkImpactStatsSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import CTASection from '@/components/ui/CTASection';

const categories = [
  'ALL',
  'AI & INTELLIGENCE',
  'ENTERPRISE & LMS',
  'HEALTHCARE TECH',
  'FINTECH & WEB3',
  'MOBILE APPS'
];

export default function WorkPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  return (
    <div className="flex flex-col">
      <WorkHero 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
        categories={categories} 
      />
      <WorkGridSection activeCategory={activeCategory} />
      <WorkImpactStatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
