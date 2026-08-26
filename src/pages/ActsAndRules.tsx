import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function ActsAndRules() {
  const documents = [
    { title: "Ancient Monuments and Archaeological Sites and Remains Act 1958", href: "/For_ASI_Website/Act/1958 Act.pdf" },
    { title: "Antiquities and Art Treasure Act 1972", href: "/For_ASI_Website/Act/AAT Act 1972.pdf" },
    { title: "AMASR Act 2010 Gazette Notification", href: "/For_ASI_Website/Act/AMASR_Act2010_Gazette_Notification_new.pdf" },
    { title: "Ancient Monuments Preservation Act 1904", href: "/For_ASI_Website/Act/AMP Act, 1904.pdf" },
    { title: "Ancient Monuments Rule 1904", href: "/For_ASI_Website/Act/Ancient Monuments Rule 1904.pdf" },
    { title: "Antiquities and Art Treasure Act 1972 (Hindi)", href: "/For_ASI_Website/Act/Antiquities and Art Treasure Act-1972, Hindi.pdf" },
    { title: "Antiquities and Art Treasure Rules 1973", href: "/For_ASI_Website/Act/Antiquities and Art Treasure Rules 1973.pdf" },
    { title: "Act Rules 1959", href: "/For_ASI_Website/Act/actRules1959.pdf" }
  ];

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
      className="w-full min-h-screen bg-transparent text-[#E6D8B8] relative overflow-hidden pb-20"
    >
      <Helmet>
        <title>Acts & Rules - ASI Puri Circle</title>
      </Helmet>

      {/* Background Glows for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <FileText className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Acts & Rules
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Download and read the official legislative frameworks governing the Archaeological Survey of India.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {documents.map((doc, idx) => (
            <motion.li key={idx} variants={itemVariants}>
              <a
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center p-5 bg-[var(--color-glass-surface)] backdrop-blur-xl rounded-2xl border border-[var(--color-glass-border)] text-[var(--color-dark-stone)] hover:border-[var(--color-saffron)] hover:bg-white/50 transition-all duration-300 shadow-sm"
              >
                <div className="p-3 rounded-full bg-white shadow-inner group-hover:bg-[var(--color-saffron)]/10 transition-colors mr-5">
                  <FileText className="w-6 h-6 text-[var(--color-saffron)]" />
                </div>
                <span className="font-semibold text-lg group-hover:text-[var(--color-indigo)] transition-colors">
                  {doc.title}
                </span>
                <span className="ml-auto text-[var(--color-saffron)] font-bold opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-[-8px]">
                  &rarr;
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
