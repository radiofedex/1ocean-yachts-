import React from 'react';
import Link from 'next/link';
import { contactInfo } from '@/data/contact';
import { LanguageSelector } from '@/components/ui/LanguageSelector';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-800/50">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            {/* REPLACE: Place logo at /public/assets/logo.svg or /public/assets/logo.png */}
            <Link href="/" className="inline-block mb-5 group">
              <div className="flex flex-col">
                <span className="font-cormorant text-2xl text-white font-light tracking-[0.15em] group-hover:text-gold-300 transition-colors duration-300">
                  1 OCEAN
                </span>
                <span className="font-inter text-[9px] tracking-[0.5em] text-gold-400 uppercase -mt-0.5">
                  YACHTS
                </span>
              </div>
            </Link>

            <p className="font-inter text-sm text-silver-400/70 leading-relaxed mb-6 max-w-xs">
              Curating Yachting Excellence, One Client at a Time. Miami-based luxury yacht advisory
              with global reach.
            </p>

            <div className="space-y-2.5">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 font-inter text-sm text-silver-400 hover:text-gold-400 transition-colors duration-200 group/link"
              >
                <svg className="w-3.5 h-3.5 text-gold-500/50 group-hover/link:text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2.5 font-inter text-sm text-silver-400 hover:text-gold-400 transition-colors duration-200 group/link"
              >
                <svg className="w-3.5 h-3.5 text-gold-500/50 group-hover/link:text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contactInfo.email}
              </a>
              <p className="flex items-start gap-2.5 font-inter text-sm text-silver-400/70">
                <svg className="w-3.5 h-3.5 text-gold-500/50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.25em] uppercase text-gold-500/70 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Yachts for Sale', href: '/yachts-for-sale' },
                { label: 'Sell Your Yacht', href: '/sell-your-yacht' },
                { label: 'Yacht Management', href: '/yacht-management' },
                { label: 'Crew Placement', href: '/crew-placement' },
                { label: 'Exclusive Brands', href: '/exclusive-brands' },
                { label: 'About', href: '/about' },
                { label: 'Events', href: '/events' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-silver-400/70 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Charter */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.25em] uppercase text-gold-500/70 mb-6">
              Charter
            </h4>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'Charter in America', href: '/charter/america' },
                { label: 'Charter in Europe', href: '/charter/europe' },
                { label: 'All Charter Destinations', href: '/yachts-for-charter' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-silver-400/70 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-inter text-xs tracking-[0.25em] uppercase text-gold-500/70 mb-6">
              Brands
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Palmer Johnson', href: '/exclusive-brands/palmer-johnson' },
                { label: 'G-Tender', href: '/exclusive-brands/g-tender' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-silver-400/70 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.25em] uppercase text-gold-500/70 mb-6">
              Connect
            </h4>
            <ul className="space-y-3 mb-8">
              {contactInfo.instagram && (
                <li>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-silver-400/70 hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {contactInfo.linkedin && (
                <li>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-silver-400/70 hover:text-gold-400 transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {contactInfo.youtube && (
                <li>
                  <a
                    href={contactInfo.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm text-silver-400/70 hover:text-gold-400 transition-colors duration-200"
                  >
                    YouTube
                  </a>
                </li>
              )}
            </ul>

            <div>
              <h4 className="font-inter text-xs tracking-[0.25em] uppercase text-gold-500/70 mb-4">
                Language
              </h4>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      {/* Bottom bar */}
      <div className="container-luxury py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-inter text-xs text-silver-500/50">
            © {currentYear} 1 Ocean Yachts. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="font-inter text-xs text-silver-500/50 hover:text-gold-400/70 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="font-inter text-xs text-silver-500/50 hover:text-gold-400/70 transition-colors duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
