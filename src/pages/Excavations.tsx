import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Pickaxe, Download } from 'lucide-react';

export default function Excavations() {
  const reports = [
    {
      title: "Parabhadi Excavation Report",
      description: "Detailed findings from the recent archaeological excavations at Parabhadi.",
      href: "/For_ASI_Website/Excavation/Parabhadi excavation report - Final-1.pdf"
    },
    {
      title: "Report on Excavation at Barabati Fort",
      description: "Comprehensive study of the ancient monuments and ruins at Barabati Fortress.",
      href: "/For_ASI_Website/Excavation/Report on Excavation at Barabati Fort.pdf"
    },
    {
      title: "Report on Excavation at Ratnagiri (2024-25)",
      description: "Latest insights into the prosperous Mahayana-Vajrayana Buddhist center at Ratnagiri.",
      href: "/For_ASI_Website/Excavation/Report on Excavation at Ratnagiri 2024- 25 (Print).pdf"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-transparent text-[#E6D8B8] relative overflow-hidden pb-20"
    >
      <Helmet>
        <title>Excavations - ASI Puri Circle</title>
      </Helmet>

      {/* Background Glows for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <Pickaxe className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Archaeological Excavations
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Explore our detailed reports and findings from the latest archaeological digs across the Puri Circle.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reports.map((report, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group perspective-1000 h-full flex">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-saffron)] to-transparent rounded-[28px] blur-md opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-[28px] p-8 shadow-[0_20px_40px_rgba(74,28,10,0.05)] flex flex-col flex-1 hover:border-[var(--color-saffron)] transition-colors">
                
                <div className="p-4 rounded-full bg-white border border-[var(--color-glass-border)] shadow-sm w-fit mb-6">
                  <Pickaxe className="w-8 h-8 text-[var(--color-saffron)]" />
                </div>
                
                <h2 className="font-serif text-[1.5rem] font-bold text-[var(--color-indigo)] tracking-tight mb-4 line-clamp-2">
                  {report.title}
                </h2>
                
                <p className="text-[var(--color-dark-stone)] opacity-90 text-base leading-relaxed flex-grow">
                  {report.description}
                </p>

                <a
                  href={report.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-[var(--color-saffron)] hover:text-[var(--color-indigo)] transition-colors group/link w-fit"
                >
                  <Download className="w-5 h-5 group-hover/link:-translate-y-1 transition-transform" />
                  View Report PDF
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
