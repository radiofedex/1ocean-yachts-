'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Brand } from '@/types';

interface BrandCardProps {
  brand: Brand;
  index?: number;
}

export function BrandCard({ brand, index = 0 }: BrandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <Link
        href={brand.href}
        className="group block h-full relative overflow-hidden border border-navy-700 hover:border-gold-500/30 transition-all duration-500 bg-navy-900/50"
      >
        {/* Image area */}
        <div className="relative h-64 overflow-hidden">
          {/* IMAGE PLACEHOLDER: Replace with next/image pointing to /public/assets/brands/{brand.id}.jpg */}
          <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
            <span className="text-silver-400/20 text-xs font-inter tracking-[0.3em] uppercase">
              {/* ASSET: /public/assets/brands/{brand.id}.jpg */}
              {brand.name}
            </span>
          </div>
          <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="p-8">
          {brand.founded && (
            <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500/70 mb-2">
              Est. {brand.founded}
            </p>
          )}

          <h3 className="font-cormorant text-3xl text-white font-light mb-2 group-hover:text-gold-100 transition-colors duration-300">
            {brand.name}
          </h3>

          <p className="font-inter text-xs text-silver-400 tracking-wide mb-4 italic">
            {brand.tagline}
          </p>

          <div className="w-8 h-px bg-gold-500/40 mb-4 group-hover:w-16 group-hover:bg-gold-500 transition-all duration-500" />

          <p className="font-inter text-sm text-silver-400/70 leading-relaxed line-clamp-3 mb-6">
            {brand.description}
          </p>

          {brand.specialty && (
            <p className="font-inter text-xs text-silver-500 mb-5">
              <span className="text-gold-500/50">Specialty:</span>{' '}
              {brand.specialty}
            </p>
          )}

          <div className="flex items-center gap-2 text-gold-500/60 group-hover:text-gold-400 transition-colors duration-300">
            <span className="font-inter text-xs tracking-widest uppercase">Discover</span>
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
