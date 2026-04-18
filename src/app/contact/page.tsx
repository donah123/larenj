'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your inquiry. We will contact you within 24 hours.');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setSubmitMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
            <span className="text-primary font-label uppercase tracking-[0.3em] text-sm mb-6 block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-background mb-8">
              Begin Your Sovereign Journey
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-body max-w-2xl mx-auto leading-relaxed">
              Connect with our team of international experts. Your inquiry will be handled with the utmost discretion and precision.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="container mx-auto px-12">
            <div className="max-w-2xl mx-auto">
              <div className="bg-surface p-12 rounded-lg border border-outline-variant/20">
                <h2 className="text-3xl font-headline font-bold text-on-background mb-8 text-center">Contact Us</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-on-surface mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-on-surface mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="immigration">Immigration Services</option>
                      <option value="employment">Employment Services</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-on-surface mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {submitMessage && (
                    <div className={`p-4 rounded-md ${submitMessage.includes('Thank you') ? 'bg-primary/10 text-primary' : 'bg-error-container text-on-error-container'}`}>
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 px-8 rounded-md hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">location_on</span>
                <h3 className="text-xl font-headline font-bold text-on-background mb-4">Global Headquarters</h3>
                <p className="text-on-surface-variant">
                  123 Sovereign Square<br />
                  London, EC2A 1PQ<br />
                  United Kingdom
                </p>
              </div>
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">phone</span>
                <h3 className="text-xl font-headline font-bold text-on-background mb-4">Direct Line</h3>
                <p className="text-on-surface-variant">
                  +44 20 7123 4567<br />
                  Available 24/7<br />
                  Encrypted Communication
                </p>
              </div>
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">email</span>
                <h3 className="text-xl font-headline font-bold text-on-background mb-4">Secure Inquiry</h3>
                <p className="text-on-surface-variant">
                  confidential@larenj.int<br />
                  PGP Encrypted<br />
                  Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}