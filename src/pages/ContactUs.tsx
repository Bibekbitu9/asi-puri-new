import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';

export default function ContactUs() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[var(--color-surface)] min-h-screen py-16"
    >
      <Helmet>
        <title>Contact Us - ASI</title>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <MessageSquare className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Get in Touch
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Have questions about our monuments, ongoing excavations, or want to report an issue? We'd love to hear from you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-[var(--color-indigo)]">Contact Information</h2>
            <p className="text-[var(--color-dark-stone)] opacity-80 pb-4">
              Reach out to the Archaeological Survey of India, Puri Circle through any of the channels below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-glass-surface)] rounded-xl border border-[var(--color-glass-border)] text-[var(--color-saffron)] shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-indigo)]">Office Address</h3>
                  <p className="text-[var(--color-dark-stone)] opacity-80 leading-relaxed mt-1">
                    Archaeological Survey of India<br />
                    Puri Circle Office,<br />
                    Near Jagannath Temple, Puri<br />
                    Odisha, India - 752001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-glass-surface)] rounded-xl border border-[var(--color-glass-border)] text-[var(--color-saffron)] shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-indigo)]">Phone Number</h3>
                  <p className="text-[var(--color-dark-stone)] opacity-80 leading-relaxed mt-1">
                    +91 (6752) 222000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-glass-surface)] rounded-xl border border-[var(--color-glass-border)] text-[var(--color-saffron)] shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-indigo)]">Email Address</h3>
                  <p className="text-[var(--color-dark-stone)] opacity-80 leading-relaxed mt-1">
                    circlepuri.asi@gov.in
                  </p>
                </div>
              </div>
            </div>
            

          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--color-glass-surface)] p-8 rounded-3xl border border-[var(--color-glass-border)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Subtle background flair */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-saffron)]/10 rounded-bl-full pointer-events-none" />
            
            <h2 className="text-2xl font-bold text-[var(--color-indigo)] mb-6">Send us a Message</h2>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[var(--color-dark-stone)] mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo)] focus:border-transparent text-slate-800 shadow-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[var(--color-dark-stone)] mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo)] focus:border-transparent text-slate-800 shadow-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-[var(--color-dark-stone)] mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo)] focus:border-transparent text-slate-800 shadow-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[var(--color-dark-stone)] mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo)] focus:border-transparent text-slate-800 shadow-sm transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-indigo)] to-[#3A2016] text-[#E6D8B8] font-bold text-sm py-3.5 rounded-xl hover:shadow-[0_8px_20px_rgb(45,24,16,0.3)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
