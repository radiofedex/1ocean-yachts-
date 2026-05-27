'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { YachtCard } from '@/components/cards/YachtCard';
import { CTAButton } from '@/components/ui/CTAButton';
import { yachts } from '@/data/yachts';
import { useTranslation } from '@/hooks/useTranslation';
import type { Yacht } from '@/types';

type FilterType = 'all' | 'sale' | 'charter';

export function FeaturedYachts() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredYachts: Yacht[] = yachts.filter((y) => {
    if (filter === 'all') return true;
    if (filter === 'sale') return y.status === 'sale' || y.status === 'both';
    if (filter === 'charter') return y.status === 'charter' || y.status === 'both';
    return true;
  });

  const tabs: { id: FilterType; label: string }[] = [
    { id: 'all', label: t.yachts.filter_all },
    { id: 'sale', label: t.yachts.filter_sale },
    { id: 'charter', label: t.yachts.filter_charter },
  ];

  return (
    <section className="bg-[#F8F6F1] py-24 md:py-32">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow={t.yachts.eyebrow}
            title={t.yachts.title}
            subtitle={t.yachts.subtitle}
            align="left"
          />

          {/* Filter tabs */}
          <div className="flex gap-1 flex-shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 font-inter text-xs tracking-widest uppercase transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-navy-950 text-white'
                    : 'text-navy-500 hover:text-navy-800 border border-navy-200/50 hover:border-navy-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredYachts.map((yacht, i) => (
              <YachtCard key={yacht.id} yacht={yacht} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredYachts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-inter text-sm text-navy-400">No yachts found for this filter.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <CTAButton
            variant="outline"
            href="/yachts-for-sale"
            className="border-navy-400/30 text-navy-600 hover:bg-navy-950/5 hover:border-navy-600"
          >
            {t.yachts.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
