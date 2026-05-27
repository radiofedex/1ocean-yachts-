'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItemConfig {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { openModal } = useModal();
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems: NavItemConfig[] = [
    { label: t.nav.sale, href: '/yachts-for-sale' },
    { label: t.nav.sell, href: '/sell-your-yacht' },
    {
      label: t.nav.charter,
      dropdown: [
        { label: t.nav.charter_america, href: '/charter/america' },
        { label: t.nav.charter_europe, href: '/charter/europe' },
      ],
    },
    { label: t.nav.management, href: '/yacht-management' },
    { label: t.nav.crew, href: '/crew-placement' },
    {
      label: t.nav.brands,
      dropdown: [
        { label: t.nav.brands_pj, href: '/exclusive-brands/palmer-johnson' },
        { label: t.nav.brands_gt, href: '/exclusive-brands/g-tender' },
      ],
    },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.events, href: '/events' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-xl border-b border-navy-800/50 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-luxury flex items-center justify-between" ref={dropdownRef}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            {/* REPLACE: Place logo at /public/assets/logo.svg or /public/assets/logo.png */}
            <div className="flex flex-col">
              <span className="font-cormorant text-xl md:text-2xl text-white font-light tracking-[0.15em] group-hover:text-gold-300 transition-colors duration-300">
                1 OCEAN
              </span>
              <span className="font-inter text-[9px] tracking-[0.5em] text-gold-400 uppercase -mt-0.5">
                YACHTS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="nav-link flex items-center gap-1"
                  >
                    {item.label}
                    <motion.svg
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-3 h-3 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                ) : (
                  <Link href={item.href!} className="nav-link relative group/link">
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover/link:w-full transition-all duration-300" />
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-navy-950 border border-navy-700 py-1 shadow-xl z-50"
                    >
                      {item.dropdown.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-5 py-3 font-inter text-xs tracking-widest uppercase text-silver-400 hover:text-gold-400 hover:bg-navy-800/50 transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <LanguageSelector />
            <Link
              href="/contact"
              className="font-inter text-xs tracking-widest uppercase border border-gold-500/40 text-gold-400 px-5 py-2.5 hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-200"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-10"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 bg-navy-950 flex flex-col"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-navy-800">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex flex-col">
                <span className="font-cormorant text-xl text-white font-light tracking-[0.15em]">
                  1 OCEAN
                </span>
                <span className="font-inter text-[9px] tracking-[0.5em] text-gold-400 uppercase -mt-0.5">
                  YACHTS
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center border border-navy-700 text-silver-400"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  {item.dropdown ? (
                    <div>
                      <p className="font-inter text-xs tracking-widest uppercase text-silver-500 pt-4 pb-2">
                        {item.label}
                      </p>
                      {item.dropdown.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block font-cormorant text-2xl text-white font-light py-2.5 pl-4 border-l border-gold-500/20 hover:text-gold-300 hover:border-gold-500 transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="block font-cormorant text-3xl text-white font-light py-3 hover:text-gold-300 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block font-cormorant text-3xl text-gold-400 font-light py-3"
                >
                  {t.nav.contact}
                </Link>
              </motion.div>
            </nav>

            {/* Mobile bottom: CTA Buttons */}
            <div className="px-6 pb-8 pt-4 border-t border-navy-800 space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={() => { openModal('buy'); setMobileOpen(false); }}
                  className="flex-1 bg-gold-500 text-navy-900 py-3 font-inter text-xs font-medium tracking-widest uppercase hover:bg-gold-400 transition-colors"
                >
                  Buy
                </button>
                <button
                  onClick={() => { openModal('sell'); setMobileOpen(false); }}
                  className="flex-1 border border-navy-700 text-white py-3 font-inter text-xs font-medium tracking-widest uppercase hover:border-gold-500/50 transition-colors"
                >
                  Sell
                </button>
                <button
                  onClick={() => { openModal('charter'); setMobileOpen(false); }}
                  className="flex-1 border border-navy-700 text-white py-3 font-inter text-xs font-medium tracking-widest uppercase hover:border-gold-500/50 transition-colors"
                >
                  Charter
                </button>
              </div>
              <div className="flex justify-end pt-2">
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
