import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Pickaxe } from 'lucide-react';
import { Image } from '@unpic/react';

export default function Excavations() {
  const dummyExcavations = [
    {
      id: 1,
      title: "Asurgarh Fort Excavation",
      location: "Kalahandi, Odisha",
      year: "2018-19",
      description: "Extensive excavation revealing an ancient fortified settlement with advanced water management and punch-marked coins.",
      image: "/images/(6) Prehistoric Sites, Baidyapur, Mayurbhanj/10.jpg"
    },
    {
      id: 2,
      title: "Barabati Fort Trenches",
      location: "Cuttack, Odisha",
      year: "2021-22",
      description: "Excavation of the laterite block pillars and ancient temple remains within the historical medieval fort complex.",
      image: "/images/(7) Prehistoric Sites, Kuchai, Mayurbhanj,/1.JPG"
    },
    {
      id: 3,
      title: "Sisupalgarh Urban Settlement",
      location: "Bhubaneswar, Odisha",
      year: "2022-23",
      description: "Unearthing the monumental gateway complex of one of India's largest and most well-preserved early historic fortifications.",
      image: "/images/(8) Prehistoric Sites, Kuliana, Mayurbhanj/1.JPG"
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
        <title>Excavations - ASI</title>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <Pickaxe className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Recent Excavations
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Uncovering the buried history, artifacts, and ancient settlements across the region through scientific archaeological methods.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {dummyExcavations.map((item, idx) => (
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
