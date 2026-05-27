'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BrandCard } from '@/components/cards/BrandCard';
import { brands } from '@/data/brands';
import { useTranslation } from '@/hooks/useTranslation';

export function ExclusiveBrands() {
  const { t } = useTranslation();

  return (
    <section className="bg-navy-950 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(201,169,110,0.04),transparent)]" />
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute top-0 left-0 right-0" />

      <div className="container-luxury relative z-10">
        <div className="mb-16">
          <SectionHeading
            eyebrow={t.brands.eyebrow}
            title={t.brands.title}
            subtitle={t.brands.subtitle}
            align="center"
            light
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <BrandCard key={brand.id} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
