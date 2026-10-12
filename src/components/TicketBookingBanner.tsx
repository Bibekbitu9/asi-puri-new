import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ticket, ArrowRight, CreditCard, Sparkles, ShieldCheck, QrCode } from 'lucide-react';
import { Image } from '@unpic/react';

const ticketedMonuments = [
  {
    id: 1,
    name: "Sun Temple, Konark",
    type: "World Heritage Site",
    location: "Konark, Puri",
    image: "/images/tickets/sun-temple-konark.jpg",
    onlinePrice: "₹35",
    counterPrice: "₹40",
    hasDiscount: true,
  },
  {
    id: 2,
    name: "Archaeological Museum, Konark",
    type: "Site Museum",
    location: "Konark, Puri",
    image: "/images/tickets/archaeological-museum-konark.jpg",
    onlinePrice: "₹10",
    counterPrice: "₹10",
    hasDiscount: false,
  },
  {
    id: 3,
    name: "Buddhist Site, Ratnagiri",
    type: "Excavated Mahavihara",
    location: "Ratnagiri, Jajpur",
    image: "/images/tickets/buddhist-site-ratnagiri.jpg",
    onlinePrice: "₹20",
    counterPrice: "₹25",
    hasDiscount: true,
  },
  {
    id: 4,
    name: "Archaeological Museum, Ratnagiri",
    type: "Site Museum",
    location: "Ratnagiri, Jajpur",
    image: "/images/tickets/archaeological-museum-ratnagiri.jpg",
    onlinePrice: "₹5",
    counterPrice: "₹5",
    hasDiscount: false,
  },
  {
    id: 5,
    name: "Buddhist Site, Lalitagiri",
    type: "Excavated Stupa Complex",
    location: "Lalitagiri, Cuttack",
    image: "/images/tickets/buddhist-site-lalitagiri.jpg",
    onlinePrice: "₹20",
    counterPrice: "₹25",
    hasDiscount: true,
  }
];

export default function TicketBookingBanner() {
  return (
    <section 
      aria-labelledby="ticket-banner-heading"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20 relative z-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl md:rounded-[32px] overflow-hidden bg-gradient-to-br from-white/95 via-[#FCF8F2]/90 to-[#F6EDE2]/90 backdrop-blur-2xl border border-[var(--color-glass-border)] shadow-[0_20px_50px_rgba(74,28,10,0.08)] text-[var(--color-dark-stone)]"
      >
        {/* Subtle Ambient Heritage Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400/10 via-[var(--color-saffron)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-[var(--color-muted-gold)]/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
        
        {/* Subtle Heritage Line Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#8C3310_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />

        <div className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Top Row: Header & Call to Action */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#C19A6B]/20">
            <div className="space-y-3 max-w-3xl">
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#C19A6B]/30 text-[#A8451A] text-xs font-bold uppercase tracking-widest shadow-xs">
                <Ticket className="w-3.5 h-3.5 text-[#C15C20]" />
                <span>Online Visitor Entry &amp; Tariff Advisory</span>
              </div>

              {/* Headline */}
              <h2 
                id="ticket-banner-heading"
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight"
              >
                Book Tickets Online for Protected Monuments &amp; Museums
              </h2>

              {/* Subtitle / Advisory */}
              <p className="text-[var(--color-dark-stone)] opacity-90 text-sm sm:text-base leading-relaxed max-w-2xl">
                Plan ahead and save! Pay via cashless/digital modes (Card or UPI) to enjoy instant entry discounts, avoid ticket counter queues, and access fast-track QR scanning at ASI Puri Circle sites.
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0 pt-2 lg:pt-0">
              <Link
                to="/tickets"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#D96B27] via-[#B85018] to-[#8C3310] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-orange-950/20 hover:shadow-orange-950/30 hover:brightness-105 active:scale-95 transition-all duration-300 border border-amber-300/40 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                aria-label="View official ticket rates and online booking guide"
              >
                <span>View Ticket Rates &amp; Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Key Visitor Benefits Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-[#C19A6B]/25 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                <CreditCard className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-[#2D1810] block">Cashless Discount</span>
                <span className="text-[#6B5A50] text-[11px] sm:text-xs">Save ₹5 on Indian &amp; ₹50 on Foreigner tickets</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-[#C19A6B]/25 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                <QrCode className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-[#2D1810] block">Instant QR Entry</span>
                <span className="text-[#6B5A50] text-[11px] sm:text-xs">Direct turnstile scanning via mobile screen</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-[#C19A6B]/25 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-[#2D1810] block">Free Entry for Minors</span>
                <span className="text-[#6B5A50] text-[11px] sm:text-xs">Children up to 15 years enter free of charge</span>
              </div>
            </div>
          </div>

          {/* 5 Ticketed Monuments & Museums Showcase Cards */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A8451A] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C15C20]" />
                5 Ticketed Monuments &amp; Site Museums
              </span>
              <Link 
                to="/tickets"
                className="text-xs font-semibold text-[#8C3310] hover:text-[#C15C20] transition-colors underline underline-offset-4 decoration-[#C19A6B]/60"
              >
                See all tariffs &amp; fees
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {ticketedMonuments.map((item) => (
                <Link
                  key={item.id}
                  to="/tickets"
                  className="group relative flex sm:flex-col items-center sm:items-start gap-3 p-2.5 rounded-2xl bg-white/90 hover:bg-white border border-[#C19A6B]/25 hover:border-[#C15C20]/40 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  aria-label={`View ticket fees for ${item.name}`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-16 h-16 sm:w-full sm:h-24 rounded-xl overflow-hidden shrink-0 bg-stone-100 border border-stone-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fullWidth"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:block hidden" />
                    
                    {/* Small Discount Pill on Image (Desktop) */}
                    {item.hasDiscount && (
                      <span className="hidden sm:inline-block absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md bg-emerald-600/95 text-[9px] font-bold text-white uppercase tracking-wider shadow-sm">
                        ₹5 Off Online
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1 space-y-1">
                    <span className="text-[10px] font-bold text-[#A8451A] uppercase tracking-wider block truncate">
                      {item.type}
                    </span>
                    <h3 className="text-xs font-bold text-[#2D1810] line-clamp-1 group-hover:text-[#A8451A] transition-colors">
                      {item.name}
                    </h3>
                    
                    {/* Pricing */}
                    <div className="flex items-baseline gap-1.5 pt-0.5">
                      <span className="text-xs font-extrabold text-[#8C3310]">
                        {item.onlinePrice}
                      </span>
                      <span className="text-[10px] text-stone-500 font-medium">
                        online
                      </span>
                      {item.hasDiscount && (
                        <span className="text-[10px] text-stone-400 line-through">
                          {item.counterPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
