'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/CTAButton';
import { useTranslation } from '@/hooks/useTranslation';

export function AboutSection() {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <section className="bg-[#F8F6F1] py-24 md:py-32 overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p variants={fadeInUp} className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
              {t.about.eyebrow}
            </motion.p>
            <motion.div variants={fadeInUp} className="w-8 h-px bg-gold-500 mb-6" />
            <motion.h2
              variants={fadeInUp}
              className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-navy-950 font-light leading-tight mb-6 text-balance"
            >
              {t.about.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.about.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-inter text-base text-navy-600 font-light leading-relaxed mb-5">
              {t.about.subtitle}
            </motion.p>
            <motion.p variants={fadeInUp} className="font-inter text-sm text-navy-500/80 leading-relaxed mb-8">
              {t.about.description}
            </motion.p>

            {/* Differentiators */}
            <motion.ul variants={stagger} className="space-y-3 mb-10">
              {t.about.differentiators.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-inter text-sm text-navy-600"
                >
                  <span className="flex-shrink-0 w-4 h-4 border border-gold-500/50 flex items-center justify-center mt-0.5">
                    <svg className="w-2.5 h-2.5 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <CTAButton
                variant="primary"
                href="/about"
                className="bg-navy-950 border-navy-950 hover:bg-navy-800 text-white"
              >
                {t.about.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </CTAButton>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* IMAGE PLACEHOLDER: Replace with next/image pointing to /public/assets/about/team.jpg or founder.jpg */}
              <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
                <span className="text-silver-400/20 text-xs font-inter tracking-widest uppercase text-center px-8">
                  {/* ASSET: /public/assets/about/team.jpg */}
                  Team Photo
                </span>
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/20 pointer-events-none" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-navy-950 border border-navy-700 p-6 shadow-2xl">
              <p className="font-cormorant text-4xl text-gold-400 font-light">15+</p>
              <p className="font-inter text-xs tracking-widest uppercase text-silver-400 mt-1">
                Years of Excellence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
