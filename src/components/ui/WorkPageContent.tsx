"use client";

import React, { useState } from 'react';
import WorkHero from '@/components/ui/WorkHero';
import WorkGridSection from '@/components/ui/WorkGridSection';
import WorkImpactStatsSection from '@/components/ui/WorkImpactStatsSection';
import CTASection from '@/components/ui/CTASection';

const categories = [
  'ALL',
  'AI & INTELLIGENCE',
  '3D & WEBGL',
  'MARKETPLACES',
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
      <CTASection />
    </div>
  );
}
