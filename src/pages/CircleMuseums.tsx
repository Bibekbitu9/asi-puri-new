import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Building2, Calendar, LayoutDashboard } from 'lucide-react';

export default function CircleMuseums() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const museums = [
    {
      name: 'Archaeological Museum, Ratnagiri',
      location: 'Dist-Jajpur, Odisha',
      openingYear: '1998',
      antiquities: '252 displayed / 3288 reserve',
      material: 'Stone, Terracotta and Metal objects',
      area: '4782 Sq.m.',
      description: 'The Archaeological Museum, Ratnagiri houses antiquities retrieved from the excavations (1958-62) of the famous Buddhist site, Ratnagiri. The important exhibits include stone sculptures of Buddha, Avalokitesvara, Tara, Jambhala, and bronze images representing the rich cultural heritage of Odisha during 9th-13th Century CE.'
    },
    {
      name: 'Archaeological Museum, Lalitagiri',
      location: 'Dist-Cuttack, Odisha',
      openingYear: '2018',
      antiquities: '50 displayed / 325 reserve',
      material: 'Stone objects',
      area: '4750.91 Sq.m.',
      description: 'The Archaeological Museum, Lalitgiri is enriched with objects recovered from scientific excavations at the Buddhist Site, Lalitgiri. It was inaugurated in 2018. The collection includes Relic Caskets and stone sculptures of Buddha, Maitreya, and Tara ranging from 5th-12th Century CE.'
    },
    {
      name: 'Archaeological Museum, Konark',
      location: 'Dist-Puri, Odisha',
      openingYear: '1968',
      antiquities: '262 displayed / 455 reserve',
      material: 'Stones',
      area: '41250.29 Sq.m.',
      description: 'Located near the magnificent Sun temple, this site museum preserves fallen architectural and sculptural specimens of the Sun temple. Originally opened with three galleries in 1968, it now has four galleries displaying 260 antiquities retrieved from the clearance work of the Sun temple.'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-transparent text-[#E6D8B8] relative overflow-hidden pb-20"
    >
      <SEO title="Circle Museums - ASI Puri Circle" />
      
      {/* Background Glows for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <LayoutDashboard className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Archaeological Museums
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Discover the rich cultural heritage of Odisha preserved within the three archaeological museums under the Puri Circle.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {museums.map((museum, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-saffron)] to-transparent rounded-[28px] blur-md opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-[28px] p-6 md:p-10 shadow-[0_20px_40px_rgba(74,28,10,0.05)] flex flex-col md:flex-row gap-8">
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="font-serif text-[2rem] font-bold text-[var(--color-indigo)] tracking-tight">
                      {museum.name}
                    </h2>
                    <p className="text-[var(--color-saffron)] font-bold uppercase tracking-widest text-sm mt-2">
                      {museum.location}
                    </p>
                  </div>
                  
                  <p className="text-[var(--color-dark-stone)] opacity-90 text-lg leading-relaxed text-justify">
                    {museum.description}
                  </p>
                </div>

                <div className="md:w-72 bg-white/50 rounded-2xl p-6 border border-[var(--color-glass-border)] h-fit shadow-sm">
                  <h3 className="text-[var(--color-indigo)] font-bold uppercase tracking-widest text-sm border-b border-[var(--color-glass-border)] pb-3 mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">Opened</p>
                        <p className="text-[var(--color-dark-stone)] font-medium">{museum.openingYear}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">Antiquities</p>
                        <p className="text-[var(--color-dark-stone)] font-medium">{museum.antiquities}</p>
                        <p className="text-[var(--color-dark-stone)] opacity-70 text-xs mt-1">{museum.material}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <LayoutDashboard className="w-5 h-5 text-[var(--color-saffron)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[var(--color-dark-stone)] opacity-60 uppercase text-[10px] tracking-wider font-bold">Area</p>
                        <p className="text-[var(--color-dark-stone)] font-medium">{museum.area}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
