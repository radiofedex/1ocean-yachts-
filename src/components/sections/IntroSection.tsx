'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

interface StatItem {
  value: string;
  label: string;
}

export function IntroSection() {
  const { t } = useTranslation();

  const stats: StatItem[] = [
    t.intro.stats.experience,
    t.intro.stats.yachts_sold,
    t.intro.stats.destinations,
    t.intro.stats.clients,
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <section className="bg-[#F8F6F1] py-24 md:py-32">
      <div className="container-luxury">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.p variants={fadeInUp} className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-4">
            {t.intro.eyebrow}
          </motion.p>
          <motion.div variants={fadeInUp} className="w-8 h-px bg-gold-500 mx-auto mb-8" />
          <motion.h2
            variants={fadeInUp}
            className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-navy-950 font-light leading-tight mb-8 text-balance"
          >
            {t.intro.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t.intro.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-inter text-base md:text-lg text-navy-700 font-light leading-relaxed mb-6 max-w-2xl mx-auto">
            {t.intro.subtitle}
          </motion.p>
          <motion.p variants={fadeInUp} className="font-inter text-sm text-navy-500/80 font-light leading-relaxed max-w-xl mx-auto">
            {t.intro.description}
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-navy-200/50"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="p-8 md:p-10 text-center border-r border-navy-200/50 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(2)]:border-navy-200/50 [&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:border-t-0"
            >
              <p className="font-cormorant text-5xl md:text-6xl text-navy-950 font-light mb-2">
                {stat.value}
              </p>
              <div className="w-5 h-px bg-gold-500 mx-auto mb-3" />
              <p className="font-inter text-xs tracking-widest uppercase text-navy-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
