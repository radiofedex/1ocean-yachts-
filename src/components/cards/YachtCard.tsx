'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Yacht } from '@/types';

interface YachtCardProps {
  yacht: Yacht;
  index?: number;
}

export function YachtCard({ yacht, index = 0 }: YachtCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const statusLabel =
    yacht.status === 'sale' || yacht.status === 'both' ? 'For Sale' : 'For Charter';
  const statusColors =
    yacht.status === 'charter'
      ? 'bg-navy-700 text-navy-200 border border-navy-600'
      : 'bg-gold-500/10 text-gold-400 border border-gold-500/30';

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="group relative flex flex-col bg-navy-900 border border-navy-700 overflow-hidden transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_0_40px_rgba(201,169,110,0.06)]"
    >
      {/* Image Area */}
      <div className="relative overflow-hidden h-56 md:h-64">
        {/* IMAGE PLACEHOLDER: Replace with next/image pointing to /public/assets/yachts/{yacht.id}.jpg */}
        <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
          <span className="text-silver-400/20 text-xs font-inter tracking-widest uppercase">
            {/* ASSET: /public/assets/yachts/{yacht.id}.jpg */}
            {yacht.name}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-all duration-500" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className={`font-inter text-xs tracking-widest uppercase px-3 py-1.5 ${statusColors}`}>
            {yacht.status === 'both' ? 'Sale & Charter' : statusLabel}
          </span>
        </div>

        {/* Location */}
        <div className="absolute bottom-4 right-4">
          <span className="font-inter text-xs text-silver-300/80 flex items-center gap-1.5 bg-navy-950/70 px-3 py-1.5">
            <svg className="w-3 h-3 text-gold-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {yacht.location}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-1">
          <span className="font-inter text-xs tracking-[0.2em] uppercase text-silver-500">
            {yacht.year} · {yacht.type} · {yacht.length}
          </span>
        </div>

        <h3 className="font-cormorant text-2xl text-white font-light tracking-wide mt-1 mb-3">
          {yacht.name}
        </h3>

        <p className="font-inter text-sm text-silver-400/70 leading-relaxed line-clamp-2 flex-1 mb-5">
          {yacht.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-navy-800">
          <div>
            {yacht.price ? (
              <p className="font-cormorant text-lg text-gold-400 font-light">
                {yacht.price}
              </p>
            ) : yacht.charterRate ? (
              <p className="font-cormorant text-lg text-gold-400 font-light">
                {yacht.charterRate}
              </p>
            ) : (
              <p className="font-inter text-xs text-silver-500 tracking-widest uppercase">
                Price on Request
              </p>
            )}
          </div>

          <Link
            href={`/yachts-for-sale#${yacht.id}`}
            className="font-inter text-xs tracking-widest uppercase text-gold-400 hover:text-gold-300 flex items-center gap-2 transition-colors duration-200 group/link"
          >
            View Details
            <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
