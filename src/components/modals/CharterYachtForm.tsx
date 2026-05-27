'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CTAButton } from '@/components/ui/CTAButton';
import { useModal } from '@/context/ModalContext';
import { useTranslation } from '@/hooks/useTranslation';
import { americaDestinations, europeDestinations } from '@/data/destinations';
import type { CharterRegion } from '@/types';

type Step = 1 | 2 | 3;

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  destination: string;
  dates: string;
  guests: string;
  yachtType: string;
  budget: string;
  message: string;
}

const inputClass =
  'w-full bg-navy-950 border border-navy-700 text-white font-inter text-sm px-4 py-3 placeholder-silver-500/40 focus:outline-none focus:border-gold-500/60 transition-colors duration-200';

export function CharterYachtForm() {
  const { t } = useTranslation();
  const m = t.modals.charter;
  const { charterRegion, setCharterRegion } = useModal();

  const [step, setStep] = useState<Step>(charterRegion ? 2 : 1);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    dates: '',
    guests: '',
    yachtType: '',
    budget: '',
    message: '',
  });

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function selectRegion(region: CharterRegion) {
    setCharterRegion(region);
    setStep(2);
  }

  function selectDestination(dest: string) {
    setSelectedDestination(dest);
    setForm((prev) => ({ ...prev, destination: dest }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to backend - replace console.log with API call
    console.log('Charter Yacht Form Submission:', {
      region: charterRegion,
      destination: selectedDestination,
      ...form,
    });
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  const destinations = charterRegion === 'america' ? americaDestinations : europeDestinations;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center gap-6"
      >
        <div className="w-16 h-16 rounded-full border border-gold-500/40 flex items-center justify-center">
          <svg className="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-cormorant text-2xl text-white font-light">{m.success}</p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <React.Fragment key={s}>
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-inter text-xs transition-colors duration-300 ${
                s <= step
                  ? 'bg-gold-500 text-navy-900'
                  : 'bg-navy-800 border border-navy-600 text-silver-500'
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-px transition-colors duration-300 ${
                  s < step ? 'bg-gold-500/50' : 'bg-navy-700'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1: Region Selection */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => selectRegion('america')}
                className="group relative overflow-hidden border border-navy-700 hover:border-gold-500/50 p-8 text-left transition-all duration-300 hover:bg-navy-800/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  {/* IMAGE PLACEHOLDER */}
                  <div className="w-full h-28 bg-gradient-to-br from-navy-700 to-navy-900 mb-5 flex items-center justify-center overflow-hidden">
                    <span className="text-silver-500/20 text-xs font-inter">
                      {/* ASSET: /public/assets/destinations/america-thumb.jpg */}
                      Caribbean & Americas
                    </span>
                  </div>
                  <h3 className="font-cormorant text-2xl text-white font-light mb-2">
                    {m.region_america}
                  </h3>
                  <p className="font-inter text-xs text-silver-400">{m.region_america_desc}</p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>

              <button
                onClick={() => selectRegion('europe')}
                className="group relative overflow-hidden border border-navy-700 hover:border-gold-500/50 p-8 text-left transition-all duration-300 hover:bg-navy-800/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  {/* IMAGE PLACEHOLDER */}
                  <div className="w-full h-28 bg-gradient-to-br from-navy-700 to-navy-900 mb-5 flex items-center justify-center overflow-hidden">
                    <span className="text-silver-500/20 text-xs font-inter">
                      {/* ASSET: /public/assets/destinations/europe-thumb.jpg */}
                      Mediterranean
                    </span>
                  </div>
                  <h3 className="font-cormorant text-2xl text-white font-light mb-2">
                    {m.region_europe}
                  </h3>
                  <p className="font-inter text-xs text-silver-400">{m.region_europe_desc}</p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: Destination Selection */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <p className="font-inter text-xs tracking-widest uppercase text-silver-400 mb-4">
                Select a Destination
              </p>
              <div className="flex flex-wrap gap-2">
                {destinations.map((dest) => (
                  <button
                    key={dest}
                    onClick={() => selectDestination(dest)}
                    className={`px-4 py-2 font-inter text-sm transition-all duration-200 border ${
                      selectedDestination === dest
                        ? 'bg-gold-500 text-navy-900 border-gold-500'
                        : 'bg-transparent text-silver-300 border-navy-700 hover:border-gold-500/50 hover:text-white'
                    }`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>

            {/* Europe PDF Brochure */}
            {charterRegion === 'europe' && (
              <div className="p-5 bg-gold-500/5 border border-gold-500/20">
                <p className="font-inter text-xs text-silver-400 mb-3">
                  Discover our curated Mediterranean charter collection
                </p>
                {/* PDF: Place europe-charter.pdf at /public/assets/pdf/europe-charter.pdf */}
                <a
                  href="/assets/pdf/europe-charter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-5 py-2.5 font-inter text-xs font-medium tracking-wider uppercase hover:bg-gold-400 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {m.pdf_button}
                </a>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => { setStep(1); setCharterRegion(null); }}
                className="font-inter text-xs text-silver-400 hover:text-gold-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                {t.common.back}
              </button>
              <CTAButton
                variant="primary"
                onClick={() => setStep(3)}
              >
                {t.common.next}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </CTAButton>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Contact Form */}
        {step === 3 && (
          <motion.form
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
                  {m.fields.name} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
                  {m.fields.email} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
                  {m.fields.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  placeholder="+1 305 000 0000"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
                  {m.fields.destination}
                </label>
                <input
                  type="text"
                  name="destination"
                  value={form.destination}
                  onChange={handleFormChange}
                  placeholder={selectedDestination || 'Enter destination...'}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
                  {m.fields.dates}
                </label>
                <input
                  type="text"
                  name="dates"
                  value={form.dates}
                  onChange={handleFormChange}
                  placeholder="e.g. July 10–20, 2025"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
                  {m.fields.guests}
                </label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleFormChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="">Select...</option>
                  {m.guests_options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
                  {m.fields.yacht_type}
                </label>
                <select
                  name="yachtType"
                  value={form.yachtType}
                  onChange={handleFormChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="">Select...</option>
                  {m.yacht_type_options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
                  {m.fields.budget}
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleFormChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="">Select...</option>
                  {m.budget_options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
                {m.fields.message}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleFormChange}
                rows={3}
                placeholder="Tell us about your dream charter..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="font-inter text-xs text-silver-400 hover:text-gold-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                {t.common.back}
              </button>
              <CTAButton
                type="submit"
                variant="primary"
                size="md"
                disabled={loading}
              >
                {loading ? 'Sending...' : m.cta}
              </CTAButton>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
