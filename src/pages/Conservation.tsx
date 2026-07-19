import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Wrench } from 'lucide-react';
import { Image } from '@unpic/react';

export default function Conservation() {
  const dummyConservation = [
    {
      id: 1,
      title: "Konark Sun Temple Preservation",
      location: "Konark, Odisha",
      year: "Ongoing",
      description: "Structural conservation and chemical preservation of the world heritage site to prevent further sandstone degradation.",
      image: "/images/(4) The Ancient Monument of the Black Pagoda/5.JPG"
    },
    {
      id: 2,
      title: "Lingaraj Temple Complex",
      location: "Bhubaneswar, Odisha",
      year: "2021-22",
      description: "Restoration of peripheral shrines and chemical cleaning of the main vimana using non-destructive methods.",
      image: "/images/(3) Varahi Temple, Chaurasi, Puri/3.JPG"
    },
    {
      id: 3,
      title: "Rajarani Temple Landscaping",
      location: "Bhubaneswar, Odisha",
      year: "2022",
      description: "Environmental upgrades and masonry consolidation to protect the delicate carvings from weathering and biological growth.",
      image: "/images/(2) Athara Nala Bridge, Puri/1.JPG"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[var(--color-surface)] min-h-screen py-16"
    >
      <Helmet>
        <title>Conservation - ASI</title>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <Wrench className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Conservation Works
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Dedicated to the structural restoration and chemical preservation of our invaluable heritage monuments.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {dummyConservation.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[var(--color-glass-surface)] rounded-2xl overflow-hidden border border-[var(--color-glass-border)] shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(226,122,63,0.15)] hover:border-[var(--color-muted-gold)] transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-neutral)]">
                <Image
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={item.image}
                  layout="fullWidth"
                  background="auto"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="font-sans text-xl font-bold text-[var(--color-indigo)] mb-3 group-hover:text-[var(--color-saffron)] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[var(--color-dark-stone)] opacity-80 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-[var(--color-glass-border)]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-dark-stone)]">
                    <MapPin className="w-4 h-4 text-[var(--color-saffron)]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-dark-stone)]">
                    <Calendar className="w-4 h-4 text-[var(--color-saffron)]" />
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
