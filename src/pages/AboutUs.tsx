import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Building2, Compass, MapPin, Map, Building } from 'lucide-react';

export default function AboutUs() {
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-transparent text-[#E6D8B8] relative overflow-hidden pb-20"
    >
      <SEO title="About ASI Puri Circle" />
      
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
            <Building2 className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            About ASI Puri Circle
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80 uppercase tracking-[0.2em] font-bold">
            Heritage Gateway
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 md:space-y-12"
        >
          {/* About Puri Circle */}
          <motion.div variants={itemVariants} className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-saffron)] to-transparent rounded-[28px] blur-md opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-[28px] p-6 md:p-10 shadow-[0_20px_40px_rgba(74,28,10,0.05)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-white shadow-inner">
                  <Building2 className="w-6 h-6 text-[var(--color-saffron)]" />
                </div>
                <h2 className="font-serif text-[1.5rem] md:text-[2rem] font-bold text-[var(--color-indigo)] tracking-tight">
                  Formation & History
                </h2>
              </div>
              <div className="text-[var(--color-dark-stone)] opacity-90 text-base md:text-lg leading-relaxed text-justify space-y-4">
                <p>
                  The Puri Circle was created vide notification number J-11014/3/2023-Planning, dated 9/11/2022 after bifurcation of the erstwhile Bhubaneswar Circle in the state of Odisha. The jurisdiction of the Circle includes the districts of Angul, Bhadrak, Balesore, Cuttack, Dhenkanal, Deogarh, Jagatsinghpur, Jajpur, Jharsuguda, Kendrapada, Keonjhar, Mayurbhanj, Sundargarh, Sambalpur and Puri,.
                </p>
                <p>
                  As of now there are 40 (Forty) Centrally Protected monuments within its domain, which includes prehistoric sites, Buddhist monuments, Medieval forts, Temples, Historical bridges etc. The Sun temple Konark is a world heritage property and the world famous Lord Jagannath temple Puri are under its jurisdiction.
                </p>
                <p>
                  Apart this three archaeological Museums are under this circle namely Archaeological Museum Konark, district Puri, established in 1968; Archaeological Museum Ratnagiri, district Jajpur; established in 1998 and Archaeological Museum Lalitagiri, district Cuttack, established in 2018.
                </p>
                <p>
                  The conservation and maintenance of the monuments / sites are managed through its four Sub Circle namely Puri Sub Circle, Konark Subcircle, Cuttack Sub Circle and Dhenkanal Sub Circle.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sub-Circles */}
          <motion.div variants={itemVariants} className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-saffron)] to-transparent rounded-[28px] blur-md opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-[28px] p-6 md:p-10 shadow-[0_20px_40px_rgba(74,28,10,0.05)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-white shadow-inner">
                  <Map className="w-6 h-6 text-[var(--color-saffron)]" />
                </div>
                <h2 className="font-serif text-[1.5rem] md:text-[2rem] font-bold text-[var(--color-indigo)] tracking-tight">
                  Sub-Circles Details
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  { 
                    name: 'Cuttack Sub-Circle', 
                    cpm: '28 CPMs', 
                    inCharge: 'Sr. CA Siddhartha Sankar Garai', 
                    contact: '9474627202',
                    highlights: [
                      'Ruins of Buddhist temples and images, Nalitagiri, Dist- Cuttack',
                      'Archaeological Museum, Ratnagiri, Dist-Jajpur',
                      'Archaeological Museum, Lalitagiri, Dist- Cuttack',
                      'Old hill containing many valuable sculptures and images. Ratanagiri, Dist-Jajpur',
                      'Udayagiri Hill, Old hill containing many valuable sculptures, images and inscriptions, etc. of Buddhist age which require protection. On the top, there is a Math and a small temple of Mahakal. Udayagiri, Dist-Jajpur',
                      'Ancient Buddhist Site,Langudi Hill, Langudi, Dist- Jajpur',
                      'The ancient monuments of Barabati Fortress and the ruins and remains of all ancient edifices, walls, gateways, etc., save and excepting the Mosque'
                    ]
                  },
                  { 
                    name: 'Puri Sub-Circle', 
                    cpm: '2 CPMs', 
                    inCharge: 'Sr. CA Sourav Tewary', 
                    contact: '7980703277',
                    highlights: [
                      'Shri Jagannath Temple and subsidiary shrines together with adjacent area'
                    ]
                  },
                  { 
                    name: 'Konark Sub Circle', 
                    cpm: '2 CPMs', 
                    inCharge: 'CA Trailokyanath Behera', 
                    contact: '9801980199',
                    highlights: [
                      '1. The Ancient Monument of the Black Pagoda and The Ruins and Remains of all Ancient Edifices, Images, Structures, Basements, Pillars, Carvings, Walls, Gateways etc.',
                      '1. Archaeological Museum, Konark, Dist- Puri`'
                    ]
                  },
                  { 
                    name: 'Dhekanal Sub-Circle', 
                    cpm: '8 CPMs', 
                    inCharge: 'CA Jyoti Ranjan Pradhan', 
                    contact: '9348549465',
                    highlights: [
                      'Chandrasekhar Temple (Group of Monuments and Ancient Steps), Dhekannal',
                      'Ananta Sayi Vishnu, Dhekannal'
                    ]
                  }
                ].map((sc, idx) => (
                  <div key={idx} className="bg-white/50 border border-[var(--color-glass-border)] rounded-xl p-6 hover:bg-white/80 transition-colors shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-[var(--color-glass-border)] pb-4 md:pb-0 md:pr-4">
                      <h3 className="text-[var(--color-indigo)] font-bold text-xl mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-[var(--color-saffron)]" /> {sc.name}
                      </h3>
                      <div className="text-sm text-[var(--color-dark-stone)] opacity-90 space-y-2">
                        <p><span className="font-bold text-[var(--color-indigo)]">Monuments:</span> {sc.cpm}</p>
                        <p><span className="font-bold text-[var(--color-indigo)]">In-Charge:</span> {sc.inCharge}</p>
                        <p><span className="font-bold text-[var(--color-indigo)]">Contact:</span> {sc.contact}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-[var(--color-saffron)] text-sm uppercase tracking-widest mb-3">Key Highlights</h4>
                      <ul className="list-disc list-outside ml-5 space-y-1.5 text-[var(--color-dark-stone)] opacity-80 text-sm">
                        {sc.highlights.map((highlight, hIdx) => (
                          <li key={hIdx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}
