'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/CTAButton';
import { useTranslation } from '@/hooks/useTranslation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  size: string;
  budget: string;
  condition: string;
  location: string;
  message: string;
}

const inputClass =
  'w-full bg-navy-950 border border-navy-700 text-white font-inter text-sm px-4 py-3 placeholder-silver-500/40 focus:outline-none focus:border-gold-500/60 transition-colors duration-200';

export function BuyYachtForm() {
  const { t } = useTranslation();
  const m = t.modals.buy;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    size: '',
    budget: '',
    condition: 'Either',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to backend - replace console.log with API call
    console.log('Buy Yacht Form Submission:', formData);
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
            {m.fields.size}
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="">Select size...</option>
            {m.size_options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
            {m.fields.budget}
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="">Select budget...</option>
            {m.budget_options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
            {m.fields.condition}
          </label>
          <div className="flex gap-4 pt-3">
            {m.condition_options.map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="condition"
                  value={opt}
                  checked={formData.condition === opt}
                  onChange={handleChange}
                  className="accent-gold-500"
                />
                <span className="font-inter text-sm text-silver-300">{opt}</span>
              </label>
            ))}
          </div>
        </div>
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
          placeholder="e.g. Mediterranean, Caribbean, Miami..."
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-inter text-xs tracking-widest uppercase text-silver-400 mb-2">
          {m.fields.message}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us more about your ideal yacht..."
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
