import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Compass } from 'lucide-react';
import { Image } from '@unpic/react';

export default function Explorations() {
  const dummyExplorations = [
    {
      id: 1,
      title: "Prachi River Valley Survey",
      location: "Puri District, Odisha",
      year: "2020-21",
      description: "Comprehensive survey of the Prachi river valley identifying numerous ancient brick temples and early historic mounds.",
      image: "/images/(9) Ruins of Ancient Fort, Haripur, Mayurbhanj/36. Haripurgarh, Mayurbhanj (2).JPG"
    },
    {
      id: 2,
      title: "Mahanadi Delta Reconnaissance",
      location: "Cuttack & Jagatsinghpur",
      year: "2021-22",
      description: "Exploration aimed at identifying ancient maritime trade routes and coastal settlements along the Mahanadi delta.",
      image: "/images/(10) Ravana Chhaya, Keonjhar/05. Sitabhinji, Keonjhar (1).jpg"
    },
    {
      id: 3,
      title: "Mahendragiri Hills Mapping",
      location: "Gajapati, Odisha",
      year: "2023",
      description: "Documenting rock-cut caves, inscriptions, and early medieval temples scattered across the Mahendragiri ranges.",
      image: "/images/(4) The Ancient Monument of the Black Pagoda/2.JPG"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-transparent min-h-screen py-16"
    >
      <Helmet>
        <title>Explorations - ASI</title>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <Compass className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Field Explorations
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Systematic surveys and mapping to discover undiscovered archaeological sites and heritage landscapes.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {dummyExplorations.map((item, idx) => (
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
