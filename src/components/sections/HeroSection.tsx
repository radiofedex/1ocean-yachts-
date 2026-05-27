'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/CTAButton';
import { useModal } from '@/context/ModalContext';
import { useTranslation } from '@/hooks/useTranslation';

export function HeroSection() {
  const { openModal } = useModal();
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-900/70 to-navy-950/90" />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,169,110,0.08),transparent)]" />

        {/* IMAGE PLACEHOLDER: Replace with actual hero video/image */}
        {/*
          Replace with actual hero video at /public/assets/videos/hero.mp4:
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-800/50 to-navy-950">
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />
        </div>
      </div>

      {/* Decorative horizontal lines */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.4 }}
        className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"
      />

      {/* Vertical decorative lines */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute top-0 bottom-0 left-16 md:left-24 w-px bg-gradient-to-b from-transparent via-gold-500/10 to-transparent hidden lg:block"
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="absolute top-0 bottom-0 right-16 md:right-24 w-px bg-gradient-to-b from-transparent via-gold-500/10 to-transparent hidden lg:block"
      />

      {/* Main Content */}
      <div className="relative z-10 container-luxury text-center px-6 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-gold-500/50" />
            <p className="font-inter text-xs md:text-sm tracking-[0.4em] uppercase text-gold-400">
              {t.hero.eyebrow}
            </p>
            <span className="w-8 h-px bg-gold-500/50" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-cormorant text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-light leading-[0.95] text-balance mb-8 max-w-5xl"
          >
            {t.hero.headline.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i === 0 ? (
                  <span>{line}</span>
                ) : (
                  <>
                    <br />
                    <span className="text-gradient-gold italic">{line}</span>
                  </>
                )}
              </React.Fragment>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="font-inter text-base md:text-lg text-silver-300/70 font-light max-w-2xl leading-relaxed mb-12"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <CTAButton
              variant="primary"
              size="lg"
              onClick={() => openModal('buy')}
            >
              {t.hero.cta_buy}
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              onClick={() => openModal('sell')}
            >
              {t.hero.cta_sell}
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="lg"
              onClick={() => openModal('charter')}
            >
              {t.hero.cta_charter}
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-inter text-xs tracking-[0.3em] uppercase text-silver-500/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent"
        />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
