'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/CTAButton';
import { useTranslation } from '@/hooks/useTranslation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  model: string;
  year: string;
  length: string;
  location: string;
  price: string;
  notes: string;
}

const inputClass =
  'w-full bg-navy-950 border border-navy-700 text-white font-inter text-sm px-4 py-3 placeholder-silver-500/40 focus:outline-none focus:border-gold-500/60 transition-colors duration-200';

export function SellYachtForm() {
  const { t } = useTranslation();
  const m = t.modals.sell;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    model: '',
    year: '',
    length: '',
    location: '',
    price: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to backend - replace console.log with API call
    console.log('Sell Yacht Form Submission:', formData);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

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
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Confidentiality note */}
      <div className="flex items-start gap-3 p-4 bg-gold-500/5 border border-gold-500/20">
        <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <p className="font-inter text-xs text-silver-400 leading-relaxed">
          {m.confidentiality_note}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
            {m.fields.name} *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 305 000 0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
            {m.fields.model} *
          </label>
          <input
            type="text"
            name="model"
            required
            value={formData.model}
            onChange={handleChange}
            placeholder="e.g. Benetti 45m, Princess V65..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
            {m.fields.year}
          </label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="2020"
            min="1950"
            max="2030"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
            {m.fields.length}
          </label>
          <input
            type="text"
            name="length"
            value={formData.length}
            onChange={handleChange}
            placeholder="e.g. 42m"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
            {m.fields.location}
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Miami, Monaco..."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
          {m.fields.price}
        </label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder={m.price_placeholder}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
          {m.fields.notes}
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          placeholder="Any additional information about your yacht..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="pt-2">
        <CTAButton
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center"
          disabled={loading}
        >
          {loading ? 'Sending...' : m.cta}
        </CTAButton>
      </div>
    </form>
  );
}
