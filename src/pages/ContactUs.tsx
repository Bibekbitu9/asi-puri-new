import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, Scale } from 'lucide-react';

export default function ContactUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-transparent min-h-screen py-16"
    >
      <Helmet>
        <title>Contact Us - ASI Puri Circle</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <MessageSquare className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[4rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Get in Touch
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[var(--color-dark-stone)] opacity-80 leading-relaxed max-w-2xl mx-auto">
            Reach out to the Archaeological Survey of India, Puri Circle. We're here to assist you with any inquiries regarding our monuments and heritage.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full mt-6" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Office Address Card */}
          <motion.div
            variants={itemVariants}
            className="group flex flex-col items-center text-center bg-[var(--color-glass-surface)] p-7 sm:p-8 rounded-[2rem] border border-[var(--color-glass-border)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(226,122,63,0.1)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-saffron)]/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl text-[var(--color-saffron)] mb-5 shadow-sm border border-white/40 group-hover:bg-[var(--color-saffron)] group-hover:text-white transition-colors duration-300">
              <MapPin className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-[var(--color-indigo)] mb-4">Office Address</h3>

            <div className="w-full space-y-3.5 my-auto">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-[var(--color-glass-border)]/60 shadow-xs flex flex-col items-center">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron)] bg-[var(--color-saffron)]/10 px-3 py-1 rounded-full mb-2">
                  Headquarters
                </span>
                <p className="font-bold text-[var(--color-indigo)] text-sm sm:text-base leading-snug">
                  Superintending Archaeologist
                </p>
                <p className="text-xs font-semibold text-[#8C3310] mt-1">
                  ASI Puri Circle Office
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-[var(--color-glass-border)]/60 shadow-xs flex flex-col items-center text-xs leading-relaxed text-[var(--color-dark-stone)] opacity-90">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron)] bg-[var(--color-saffron)]/10 px-3 py-1 rounded-full mb-1">
                  Location
                </span>
                <p className="font-medium text-[var(--color-indigo)] mt-1">
                  Puratattva Bhawan, 3rd Floor, Samantarapur
                </p>
                <p className="font-semibold text-[#8C3310] mt-0.5">
                  Bhubaneswar, Odisha – 751002
                </p>
              </div>
            </div>
          </motion.div>

          {/* Email & Support Card */}
          <motion.div
            variants={itemVariants}
            className="group flex flex-col items-center text-center bg-[var(--color-glass-surface)] p-7 sm:p-8 rounded-[2rem] border border-[var(--color-glass-border)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(226,122,63,0.1)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-indigo)]/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl text-[var(--color-indigo)] mb-5 shadow-sm border border-white/40 group-hover:bg-[var(--color-indigo)] group-hover:text-white transition-colors duration-300">
              <Mail className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-[var(--color-indigo)] mb-4">Official Email</h3>

            <div className="w-full space-y-3.5 my-auto">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-[var(--color-glass-border)]/60 shadow-xs flex flex-col items-center">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron)] bg-[var(--color-saffron)]/10 px-3 py-1 rounded-full mb-2">
                  Citizen Inquiries
                </span>
                <a
                  href="mailto:circlepuri.asi@gmail.com"
                  className="font-bold text-[var(--color-indigo)] hover:text-[var(--color-saffron)] transition-colors break-all text-xs sm:text-sm flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--color-saffron)] shrink-0" />
                  <span>circlepuri.asi@gmail.com</span>
                </a>
                <p className="text-[10px] text-[var(--color-dark-stone)] opacity-70 mt-1">
                  Prompt official response within working days
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-[var(--color-glass-border)]/60 shadow-xs flex flex-col items-center">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron)] bg-[var(--color-saffron)]/10 px-3 py-1 rounded-full mb-1">
                  Working Hours
                </span>
                <p className="text-xs font-semibold text-[var(--color-indigo)] mt-1">
                  Monday – Friday: 9:30 AM – 6:00 PM
                </p>
                <p className="text-[11px] text-[var(--color-dark-stone)] opacity-70 mt-0.5">
                  Closed on Weekends &amp; National Holidays
                </p>
              </div>
            </div>
          </motion.div>

          {/* RTI CPIO Card */}
          <motion.div
            variants={itemVariants}
            className="group flex flex-col items-center text-center bg-[var(--color-glass-surface)] p-7 sm:p-8 rounded-[2rem] border border-[var(--color-glass-border)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(226,122,63,0.1)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-saffron)]/5 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl text-[var(--color-saffron)] mb-5 shadow-sm border border-white/40 group-hover:bg-[var(--color-saffron)] group-hover:text-white transition-colors duration-300">
              <Scale className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-[var(--color-indigo)] mb-4">RTI &amp; CPIO</h3>

            <div className="w-full space-y-3.5 my-auto">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-[var(--color-glass-border)]/60 shadow-xs flex flex-col items-center">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron)] bg-[var(--color-saffron)]/10 px-3 py-1 rounded-full mb-2">
                  Central Public Information Officer
                </span>
                <p className="font-bold text-[var(--color-indigo)] text-sm sm:text-base leading-snug">
                  Sh. Sudipta Sen
                </p>
                <p className="text-xs font-semibold text-[#8C3310] mt-1">
                  ASAE
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-[var(--color-glass-border)]/60 shadow-xs flex flex-col items-center">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--color-saffron)] bg-[var(--color-saffron)]/10 px-3 py-1 rounded-full mb-2">
                  First Appellate Authority
                </span>
                <p className="font-bold text-[var(--color-indigo)] text-sm sm:text-base leading-snug">
                  Dr. Milan Kumar Chauley
                </p>
                <p className="text-xs font-semibold text-[#8C3310] mt-1">
                  Superintending Archaeologist
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </motion.div>
  );
}
