'use client';

import { Layout } from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/CTAButton';
import { useModal } from '@/context/ModalContext';
import { contactInfo } from '@/data/contact';
import { motion } from 'framer-motion';
import { useState } from 'react';

const inputClass =
  'w-full bg-[#F8F6F1] border border-navy-200/50 text-navy-800 font-inter text-sm px-5 py-3.5 placeholder-navy-300/60 focus:outline-none focus:border-gold-500/60 transition-colors duration-200';

export default function ContactPage() {
  const { openModal } = useModal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to backend - replace console.log with API call
    console.log('Contact Form Submission:', form);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  const actionCards = [
    {
      title: 'Buy a Yacht',
      description: 'Find your perfect vessel with expert guidance from our advisory team.',
      cta: 'Begin Enquiry',
      modal: 'buy' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        </svg>
      ),
    },
    {
      title: 'Sell a Yacht',
      description: 'Discreet, expert representation for owners seeking the best possible outcome.',
      cta: 'Request Valuation',
      modal: 'sell' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Charter a Yacht',
      description: 'Plan an extraordinary charter in the Americas or Mediterranean.',
      cta: 'Plan Charter',
      modal: 'charter' as const,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,169,110,0.06),transparent)]" />
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent absolute bottom-0 left-0 right-0" />
        <div className="container-luxury relative z-10">
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Get in Touch
          </p>
          <div className="w-8 h-px bg-gold-500 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            Begin Your Yachting Journey
          </h1>
          <p className="font-inter text-base text-silver-400/70 font-light leading-relaxed max-w-xl">
            Our advisors are available to assist you at every stage. Reach out and we will respond
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Action Cards */}
      <section className="bg-navy-950 py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-800/50">
            {actionCards.map((card) => (
              <button
                key={card.title}
                onClick={() => openModal(card.modal)}
                className="group text-left p-8 bg-navy-900 hover:bg-navy-800/80 transition-all duration-300 border border-transparent hover:border-gold-500/20"
              >
                <div className="w-10 h-10 border border-navy-700 group-hover:border-gold-500/40 flex items-center justify-center text-silver-500 group-hover:text-gold-400 transition-all duration-300 mb-5">
                  {card.icon}
                </div>
                <h3 className="font-cormorant text-2xl text-white font-light mb-2 group-hover:text-gold-100 transition-colors">
                  {card.title}
                </h3>
                <p className="font-inter text-sm text-silver-400/60 leading-relaxed mb-4">
                  {card.description}
                </p>
                <span className="font-inter text-xs tracking-widest uppercase text-gold-500/50 group-hover:text-gold-400 transition-colors">
                  {card.cta} →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-[#F8F6F1] py-24 md:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
                Direct Message
              </p>
              <div className="w-8 h-px bg-gold-500 mb-6" />
              <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-8">
                Send a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-5 border border-navy-200/40"
                >
                  <div className="w-12 h-12 border border-gold-400/40 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-cormorant text-2xl text-navy-950 font-light">
                    Thank you. We will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-xs tracking-widest uppercase text-navy-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs tracking-widest uppercase text-navy-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-xs tracking-widest uppercase text-navy-400 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 305 000 0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-xs tracking-widest uppercase text-navy-400 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">Select a topic...</option>
                        <option>Yacht Purchase Enquiry</option>
                        <option>Yacht Sale Enquiry</option>
                        <option>Charter Enquiry</option>
                        <option>Yacht Management</option>
                        <option>Crew Placement</option>
                        <option>Palmer Johnson / G-Tender</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-xs tracking-widest uppercase text-navy-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="How can we assist you?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <CTAButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center bg-navy-950 border-navy-950 hover:bg-navy-800 text-white"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </CTAButton>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <p className="font-inter text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
                Our Office
              </p>
              <div className="w-8 h-px bg-gold-500 mb-6" />
              <h2 className="font-cormorant text-4xl text-navy-950 font-light mb-8">
                1 Ocean Yachts
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-gold-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-inter text-xs tracking-widest uppercase text-navy-400 mb-1">Address</p>
                    <p className="font-inter text-sm text-navy-700 leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-inter text-xs tracking-widest uppercase text-navy-400 mb-1">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="font-inter text-sm text-navy-700 hover:text-gold-600 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-inter text-xs tracking-widest uppercase text-navy-400 mb-1">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="font-inter text-sm text-navy-700 hover:text-gold-600 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center border border-navy-700">
                <div className="text-center">
                  <svg className="w-8 h-8 text-gold-400/40 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-silver-400/30 text-xs font-inter">
                    888 Biscayne Blvd #505, Miami, FL
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {contactInfo.instagram && (
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-xs tracking-widest uppercase text-silver-400 hover:text-gold-400 transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {contactInfo.linkedin && (
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-xs tracking-widest uppercase text-silver-400 hover:text-gold-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {contactInfo.youtube && (
                  <a
                    href={contactInfo.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-xs tracking-widest uppercase text-silver-400 hover:text-gold-400 transition-colors"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
