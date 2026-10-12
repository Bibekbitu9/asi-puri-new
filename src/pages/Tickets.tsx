import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Ticket, CreditCard, Banknote, QrCode, Sparkles, Info, MapPin } from 'lucide-react';

export default function Tickets() {
  const ticketData = [
    {
      id: 1,
      name: "Sun Temple, Konark",
      location: "Konark, Puri",
      category: "World Heritage Site",
      image: "/images/tickets/sun-temple-konark.jpg",
      imageAlt: "Sun Temple Konark vimana and sculpted temple complex",
      offline: {
        indian: "Rs. 40/-",
        foreigner: "Rs. 600/-"
      },
      online: {
        indian: "Rs. 35/-",
        foreigner: "Rs. 550/-",
        discount: "Save Rs. 5 / Rs. 50"
      },
      hasDiscount: true
    },
    {
      id: 2,
      name: "Archaeological Museum, Konark",
      location: "Konark, Puri",
      category: "Site Museum",
      image: "/images/tickets/archaeological-museum-konark.jpg",
      imageAlt: "Archaeological Museum Konark antique royal sculpture and frieze",
      offline: {
        indian: "Rs. 10/-",
        foreigner: "Rs. 10/-"
      },
      online: {
        indian: "Rs. 10/-",
        foreigner: "Rs. 10/-",
        discount: null
      },
      hasDiscount: false
    },
    {
      id: 3,
      name: "Buddhist Site, Ratnagiri",
      location: "Ratnagiri, Jajpur",
      category: "Archaeological Site",
      image: "/images/tickets/buddhist-site-ratnagiri.jpg",
      imageAlt: "Ratnagiri Mahavihara excavated Buddhist monastic complex",
      offline: {
        indian: "Rs. 25/-",
        foreigner: "Rs. 300/-"
      },
      online: {
        indian: "Rs. 20/-",
        foreigner: "Rs. 250/-",
        discount: "Save Rs. 5 / Rs. 50"
      },
      hasDiscount: true
    },
    {
      id: 4,
      name: "Archaeological Museum, Ratnagiri",
      location: "Ratnagiri, Jajpur",
      category: "Site Museum",
      image: "/images/tickets/archaeological-museum-ratnagiri.jpg",
      imageAlt: "Archaeological Museum Ratnagiri chlorite sculpted doorway and antiquities",
      offline: {
        indian: "Rs. 5/-",
        foreigner: "Rs. 5/-"
      },
      online: {
        indian: "Rs. 5/-",
        foreigner: "Rs. 5/-",
        discount: null
      },
      hasDiscount: false
    },
    {
      id: 5,
      name: "Buddhist Site, Lalitagiri",
      location: "Lalitagiri, Cuttack",
      category: "Archaeological Site",
      image: "/images/tickets/buddhist-site-lalitagiri.jpg",
      imageAlt: "Lalitagiri excavated apsidal chaityagriha and stupa complex",
      offline: {
        indian: "Rs. 25/-",
        foreigner: "Rs. 300/-"
      },
      online: {
        indian: "Rs. 20/-",
        foreigner: "Rs. 250/-",
        discount: "Save Rs. 5 / Rs. 50"
      },
      hasDiscount: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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
      className="w-full min-h-screen bg-transparent text-[#E6D8B8] relative overflow-hidden pb-24"
    >
      <Helmet>
        <title>Tickets &amp; Entry Fees - ASI Puri Circle</title>
        <meta 
          name="description" 
          content="Official ticket prices, visitor entry fees and digital tariff schedule for Centrally Protected Ticketed Monuments and Site Museums under Archaeological Survey of India, Puri Circle." 
        />
      </Helmet>

      {/* Ambient Heritage Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-1">
            <Ticket className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Tickets &amp; Tariff
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Official entry fees and tariff schedule for Centrally Protected Ticketed Monuments and Site Museums under ASI Puri Circle.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        {/* Visitor Advisory & Guidelines Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10"
        >
          {/* Card 1: Digital Booking Discount */}
          <div className="bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[var(--color-saffron)] transition-all flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[var(--color-saffron)]/10 text-[var(--color-saffron)] shrink-0 shadow-xs border border-[var(--color-saffron)]/20 mt-0.5">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-serif font-bold text-[var(--color-indigo)] text-base sm:text-lg">
                  Digital Booking Discount
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Save ₹5 – ₹50
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-dark-stone)] opacity-85 leading-relaxed">
                Visitors paying through cashless/digital modes (Card or UPI) enjoy discounted entry tariffs at select monuments.
              </p>
            </div>
          </div>

          {/* Card 2: Free Admission for Children */}
          <div className="bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[var(--color-saffron)] transition-all flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-[#8C3310] shrink-0 shadow-xs border border-amber-500/20 mt-0.5">
              <Info className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-serif font-bold text-[var(--color-indigo)] text-base sm:text-lg">
                  Free Child Admission
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Up to 15 Yrs
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-dark-stone)] opacity-85 leading-relaxed">
                Children up to 15 years of age are admitted free of cost at all Centrally Protected Monuments and Site Museums under ASI Puri Circle.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tickets Cards List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {ticketData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-[var(--color-glass-surface)] backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[var(--color-glass-border)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[var(--color-saffron)] hover:shadow-[0_20px_40px_rgba(226,122,63,0.12)] transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
            >
              
              {/* Thumbnail Image Container */}
              <div className="w-full md:w-64 lg:w-72 h-52 sm:h-60 md:h-auto relative overflow-hidden shrink-0 bg-stone-900/10">
                <img 
                  src={item.image} 
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Gradient Overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30 pointer-events-none" />

                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#E6D8B8] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Mobile / Image Bottom Pill (Discount Tag) */}
                {item.hasDiscount && (
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-200 bg-amber-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-amber-500/40 shadow-xs">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Digital Discount
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content & Pricing Section */}
              <div className="flex-1 p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-5">
                
                {/* Header Information */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-[var(--color-dark-stone)] opacity-70 mb-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-saffron)] shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--color-indigo)] tracking-tight group-hover:text-[var(--color-saffron)] transition-colors duration-200">
                    {item.name}
                  </h2>
                </div>

                {/* Tariff Comparison & QR Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 items-stretch">
                  
                  {/* Offline (Counter) Price Box */}
                  <div className="bg-white/60 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-white/80 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[var(--color-dark-stone)] opacity-75 mb-2 font-medium text-xs">
                        <Banknote className="w-4 h-4 text-[#8C3310]" />
                        <span>Counter Ticket</span>
                      </div>
                      <div className="space-y-1.5 pt-0.5">
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-[var(--color-dark-stone)] opacity-80">Indian:</span>
                          <span className="font-bold text-[var(--color-indigo)]">{item.offline.indian}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-[var(--color-dark-stone)] opacity-80">Foreigner:</span>
                          <span className="font-bold text-[var(--color-indigo)]">{item.offline.foreigner}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-stone-200/50 text-[10px] text-[var(--color-dark-stone)] opacity-60">
                      Standard counter fare
                    </div>
                  </div>

                  {/* Online / Card Price Box */}
                  <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-white/70 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-[var(--color-saffron)]/30 shadow-xs relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <div className="flex items-center gap-1.5 text-[var(--color-saffron)] font-semibold text-xs">
                          <CreditCard className="w-4 h-4 text-[var(--color-saffron)]" />
                          <span>Online / Card</span>
                        </div>
                        {item.online.discount && (
                          <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100/90 px-1.5 py-0.5 rounded border border-emerald-200">
                            Save Rs. 5-50
                          </span>
                        )}
                      </div>
                      <div className="space-y-1.5 pt-0.5">
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-[var(--color-dark-stone)] opacity-80">Indian:</span>
                          <span className="font-bold text-[var(--color-saffron)]">{item.online.indian}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-[var(--color-dark-stone)] opacity-80">Foreigner:</span>
                          <span className="font-bold text-[var(--color-saffron)]">{item.online.foreigner}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[var(--color-saffron)]/20 text-[10px] font-medium text-[var(--color-saffron)]">
                      {item.online.discount ? item.online.discount : "Cashless digital tariff"}
                    </div>
                  </div>

                  {/* QR Code Container */}
                  <div className="sm:col-span-2 lg:col-span-1 flex flex-row lg:flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white/50 border-2 border-dashed border-[var(--color-glass-border)] text-center gap-3">
                    <div className="p-2 rounded-xl bg-white shadow-xs shrink-0">
                      <QrCode className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--color-saffron)]" />
                    </div>
                    <div className="flex flex-col items-start lg:items-center">
                      <span className="text-xs font-bold text-[var(--color-indigo)]">
                        Fast-Track QR
                      </span>
                      <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full mt-1">
                        Coming Soon
                      </span>
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

