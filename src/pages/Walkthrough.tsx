import { motion } from 'framer-motion';
import { ExternalLink, Compass } from 'lucide-react';
import { Image } from '@unpic/react';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function Walkthrough() {
  const { t } = useTranslation();

  const walkthroughs = [
    {
      id: 'lalitgiri',
      title: 'Buddhist Complex, Lalitagiri',
      description: 'Experience a complete 360-degree virtual tour of the ancient Buddhist complex at Lalitagiri. Explore the stupas, monasteries, and the museum containing relics and sculptures.',
      url: 'https://asi-tour.in/lalitgiri/',
      image: '/images/(23) Ruins of Buddhist temples,Nalitgiri (Lalitgiri), Cuttack/06. Excavated Buddhist Site, Lalitagiri, Cuttack (3).JPG'
    },
    {
      id: 'ratnagiri',
      title: 'Buddhist Monuments, Ratnagiri',
      description: 'Take a virtual walk through the majestic ruins of the Ratnagiri Mahavihara. Witness the exquisitely carved door jambs, colossal Buddha heads, and intricate votive stupas.',
      url: 'https://asi-tour.in/ratnagiri/',
      image: '/images/(32) Old hill, Ratnagiri, Jajpur/4.JPG'
    }
  ];

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
      <SEO title="Virtual Walkthroughs" />
      
      {/* Background Glows for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <Compass className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Virtual Walkthroughs
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Immerse yourself in 360-degree virtual tours of our most magnificent monuments.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        {/* Walkthrough Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {walkthroughs.map((w, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group perspective-1000 h-full flex">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-saffron)] to-transparent rounded-[28px] blur-md opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-[28px] overflow-hidden shadow-[0_20px_40px_rgba(74,28,10,0.05)] flex flex-col flex-1 hover:border-[var(--color-saffron)] transition-colors">
                
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-indigo)]/40 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <Image
                    alt={w.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={w.image}
                    layout="fullWidth"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-sm z-20 uppercase tracking-widest flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" /> 360° Tour
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-[1.5rem] font-bold text-[var(--color-indigo)] tracking-tight mb-4">
                      {w.title}
                    </h2>
                    
                    <p className="text-[var(--color-dark-stone)] opacity-90 text-base leading-relaxed mb-6">
                      {w.description}
                    </p>
                  </div>

                  <a
                    href={w.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 font-bold text-[var(--color-saffron)] hover:text-[var(--color-indigo)] transition-colors group/link w-fit"
                  >
                    Start Walkthrough
                    <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
