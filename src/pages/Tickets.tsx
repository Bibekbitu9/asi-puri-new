import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Ticket, 
  CreditCard, 
  Banknote, 
  QrCode, 
  Sparkles, 
  Info, 
  MapPin, 
  ExternalLink, 
  Maximize2, 
  Download, 
  X, 
  Copy, 
  Check, 
  Smartphone
} from 'lucide-react';

interface TicketItem {
  id: number;
  slug: string;
  name: string;
  location: string;
  category: string;
  image: string;
  imageAlt: string;
  qrCode: string;
  qrCodeClean: string;
  bookingUrl: string;
  offline: {
    indian: string;
    foreigner: string;
  };
  online: {
    indian: string;
    foreigner: string;
    discount: string | null;
  };
  hasDiscount: boolean;
}

export default function Tickets() {
  const [selectedQR, setSelectedQR] = React.useState<TicketItem | null>(null);
  const [copiedUrl, setCopiedUrl] = React.useState<boolean>(false);
  const [downloading, setDownloading] = React.useState<boolean>(false);

  const ticketData: TicketItem[] = [
    {
      id: 1,
      slug: "sun-temple-konark",
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
      hasDiscount: true,
      qrCode: "/new update/Review_26thOct/Ticket_QR_Codes/Sun Temple, Konark.jpeg",
      qrCodeClean: "/images/tickets/qr/sun-temple-konark.jpeg",
      bookingUrl: "https://asi.paygov.org.in/asi/v1/redirectQR?mnmtCd=azIwLzVRemZ5aXlPeTNyQmZFL201dz09"
    },
    {
      id: 2,
      slug: "archaeological-museum-konark",
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
      hasDiscount: false,
      qrCode: "/new update/Review_26thOct/Ticket_QR_Codes/Archaeological Museum, Konark.jpeg",
      qrCodeClean: "/images/tickets/qr/archaeological-museum-konark.jpeg",
      bookingUrl: "https://asi.paygov.org.in/asi/v1/redirectQR?mnmtCd=RWVsN3V6ckZoSk5DSkI1SEhRZFBsQT09"
    },
    {
      id: 3,
      slug: "buddhist-site-ratnagiri",
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
      hasDiscount: true,
      qrCode: "/new update/Review_26thOct/Ticket_QR_Codes/Ratnagiri Site.jpeg",
      qrCodeClean: "/images/tickets/qr/buddhist-site-ratnagiri.jpeg",
      bookingUrl: "https://asi.payumoney.com/quick/thm"
    },
    {
      id: 4,
      slug: "archaeological-museum-ratnagiri",
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
      hasDiscount: false,
      qrCode: "/new update/Review_26thOct/Ticket_QR_Codes/Ratnagiri Museum.jpeg",
      qrCodeClean: "/images/tickets/qr/archaeological-museum-ratnagiri.jpeg",
      bookingUrl: "https://asi.payumoney.com/quick/amr"
    },
    {
      id: 5,
      slug: "buddhist-site-lalitagiri",
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
      hasDiscount: true,
      qrCode: "/new update/Review_26thOct/Ticket_QR_Codes/Buddhist Site, Lalitagiri.jpeg",
      qrCodeClean: "/images/tickets/qr/buddhist-site-lalitagiri.jpeg",
      bookingUrl: "https://asi.paygov.org.in/asi/v1/redirectQR?mnmtCd=MnAzU1U3Rm9KRTl1eEd0UGh5VWhuUT09"
    }
  ];

  // Hash anchor navigation listener
  React.useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
      }
    }
  }, []);

  // Keyboard accessibility for QR modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedQR(null);
      }
    };
    if (selectedQR) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedQR]);

  const handleDownloadQR = async (qrPath: string, name: string) => {
    try {
      setDownloading(true);
      const response = await fetch(qrPath);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${name.replace(/[^a-zA-Z0-9]/g, '_')}_Ticket_QR.jpeg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      const link = document.createElement('a');
      link.href = qrPath;
      link.download = `${name.replace(/[^a-zA-Z0-9]/g, '_')}_Ticket_QR.jpeg`;
      link.target = '_blank';
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch {
      // Fallback
    }
  };

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
          content="Official ticket prices, visitor entry fees, and instant fast-track QR codes for Centrally Protected Ticketed Monuments and Site Museums under Archaeological Survey of India, Puri Circle." 
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
            Official entry fees, tariff schedule, and fast-track QR ticketing for Centrally Protected Monuments and Site Museums under ASI Puri Circle.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        {/* Visitor Advisory & Guidelines Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10"
        >
          {/* Card 1: Digital Booking Discount */}
          <div className="bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-2xl p-5 shadow-xs hover:border-[var(--color-saffron)] transition-all flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[var(--color-saffron)]/10 text-[var(--color-saffron)] shrink-0 shadow-xs border border-[var(--color-saffron)]/20 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-serif font-bold text-[var(--color-indigo)] text-sm sm:text-base">
                  Cashless Discount
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-200">
                  Save ₹5 – ₹50
                </span>
              </div>
              <p className="text-xs text-[var(--color-dark-stone)] opacity-85 leading-relaxed">
                Pay online or with Card/UPI to enjoy discounted entry tariffs at select monuments.
              </p>
            </div>
          </div>

          {/* Card 2: Instant QR Turnstile Entry */}
          <div className="bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-2xl p-5 shadow-xs hover:border-[var(--color-saffron)] transition-all flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-600/10 text-emerald-700 shrink-0 shadow-xs border border-emerald-600/20 mt-0.5">
              <QrCode className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-serif font-bold text-[var(--color-indigo)] text-sm sm:text-base">
                  Fast-Track QR Entry
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-200">
                  Instant Access
                </span>
              </div>
              <p className="text-xs text-[var(--color-dark-stone)] opacity-85 leading-relaxed">
                Scan each monument's dedicated QR code to purchase e-tickets directly and skip counter queues.
              </p>
            </div>
          </div>

          {/* Card 3: Free Admission for Children */}
          <div className="bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-2xl p-5 shadow-xs hover:border-[var(--color-saffron)] transition-all flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-[#8C3310] shrink-0 shadow-xs border border-amber-500/20 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-serif font-bold text-[var(--color-indigo)] text-sm sm:text-base">
                  Free Child Admission
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-200">
                  Up to 15 Yrs
                </span>
              </div>
              <p className="text-xs text-[var(--color-dark-stone)] opacity-85 leading-relaxed">
                Children up to 15 years are admitted free of cost at all monuments and site museums under ASI Puri Circle.
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
              id={item.slug}
              variants={itemVariants}
              className="group bg-[var(--color-glass-surface)] backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[var(--color-glass-border)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[var(--color-saffron)] hover:shadow-[0_20px_40px_rgba(226,122,63,0.12)] transition-all duration-300 overflow-hidden flex flex-col md:flex-row scroll-mt-28"
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

                  {/* Fast-Track QR Code Container */}
                  <div className="bg-gradient-to-br from-white/95 via-[#FCF8F2] to-amber-50/70 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-[var(--color-saffron)]/30 shadow-xs flex flex-col justify-between gap-3">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-[var(--color-saffron)] font-semibold text-xs">
                          <QrCode className="w-4 h-4 text-[var(--color-saffron)] shrink-0" />
                          <span>Fast-Track QR</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          Ready to Scan
                        </span>
                      </div>

                      {/* QR Thumbnail with Enlarge Action */}
                      <div className="flex items-center gap-3 pt-1">
                        <button
                          type="button"
                          onClick={() => setSelectedQR(item)}
                          className="group/qr relative p-1.5 bg-white rounded-lg border border-stone-200/90 shadow-xs hover:border-[var(--color-saffron)] hover:shadow-md transition-all shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)]"
                          aria-label={`Enlarge QR code for ${item.name}`}
                          title={`Click to enlarge QR code for ${item.name}`}
                        >
                          <img
                            src={encodeURI(item.qrCode)}
                            alt={`Official ticket QR Code for ${item.name}`}
                            className="w-16 h-16 sm:w-18 sm:h-18 object-contain rounded"
                            onError={(e) => {
                              if (e.currentTarget.src !== item.qrCodeClean) {
                                e.currentTarget.src = item.qrCodeClean;
                              }
                            }}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/qr:opacity-100 transition-opacity rounded flex items-center justify-center text-white">
                            <Maximize2 className="w-4 h-4" />
                          </div>
                        </button>

                        <div className="flex-1 space-y-1">
                          <p className="text-[11px] font-medium text-[var(--color-dark-stone)] opacity-85 leading-tight">
                            Scan with camera or UPI app for instant e-ticket.
                          </p>
                          <button
                            type="button"
                            onClick={() => setSelectedQR(item)}
                            className="text-[10px] font-bold text-[#8C3310] hover:text-[var(--color-saffron)] transition-colors inline-flex items-center gap-1 cursor-pointer"
                          >
                            <Maximize2 className="w-3 h-3" />
                            <span>Enlarge &amp; Download</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Direct Booking Portal Button */}
                    <div className="pt-2 border-t border-[var(--color-saffron)]/20">
                      <a
                        href={item.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[var(--color-indigo)] via-[#8C3310] to-[var(--color-saffron)] text-white text-xs font-bold shadow-xs hover:shadow-md hover:brightness-105 active:scale-98 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
                        aria-label={`Open official online booking portal for ${item.name}`}
                      >
                        <span>Book Online Now</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* How It Works Advisory */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] shadow-xs"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[var(--color-saffron)]/10 text-[var(--color-saffron)] border border-[var(--color-saffron)]/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[var(--color-indigo)]">
                How Fast-Track QR Ticketing Works
              </h3>
              <p className="text-xs text-[var(--color-dark-stone)] opacity-75">
                Quick, cashless, contactless entry in 4 simple steps:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/60 border border-stone-200/60 space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-[var(--color-saffron)] text-white text-xs font-bold inline-flex items-center justify-center">1</span>
              <h4 className="text-xs font-bold text-[var(--color-indigo)]">Scan QR Code</h4>
              <p className="text-[11px] text-[var(--color-dark-stone)] opacity-80 leading-relaxed">
                Scan the monument's QR code using your phone camera, Google Lens, or any UPI app.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 border border-stone-200/60 space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-[var(--color-saffron)] text-white text-xs font-bold inline-flex items-center justify-center">2</span>
              <h4 className="text-xs font-bold text-[var(--color-indigo)]">Select Date &amp; Visitors</h4>
              <p className="text-[11px] text-[var(--color-dark-stone)] opacity-80 leading-relaxed">
                Choose your visit date, number of adult visitors, and children on the official portal.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 border border-stone-200/60 space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-[var(--color-saffron)] text-white text-xs font-bold inline-flex items-center justify-center">3</span>
              <h4 className="text-xs font-bold text-[var(--color-indigo)]">Pay via UPI / Card</h4>
              <p className="text-[11px] text-[var(--color-dark-stone)] opacity-80 leading-relaxed">
                Complete secure cashless payment to instantly receive your official discounted digital pass.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 border border-stone-200/60 space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-[var(--color-saffron)] text-white text-xs font-bold inline-flex items-center justify-center">4</span>
              <h4 className="text-xs font-bold text-[var(--color-indigo)]">Turnstile Entry</h4>
              <p className="text-[11px] text-[var(--color-dark-stone)] opacity-80 leading-relaxed">
                Scan your mobile e-ticket QR directly at the turnstile gate without standing in counter lines.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Enlarged High-Resolution QR Modal */}
      <AnimatePresence>
        {selectedQR && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-modal-title"
            onClick={() => setSelectedQR(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md bg-gradient-to-br from-white via-[#FCF8F2] to-[#F6EDE2] rounded-3xl p-6 sm:p-7 border border-[#C19A6B]/30 shadow-2xl text-[var(--color-dark-stone)] space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                type="button"
                onClick={() => setSelectedQR(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                aria-label="Close QR Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="text-center space-y-1.5 pr-6">
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#A8451A] bg-amber-100/90 border border-amber-200 px-3 py-0.5 rounded-full">
                  {selectedQR.category}
                </span>
                <h3 id="qr-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[var(--color-indigo)] leading-tight">
                  {selectedQR.name}
                </h3>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--color-dark-stone)] opacity-75 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
                  <span>{selectedQR.location}</span>
                </div>
              </div>

              {/* High-Resolution QR Display */}
              <div className="flex flex-col items-center justify-center">
                <div className="p-4 bg-white rounded-2xl border-2 border-[var(--color-saffron)]/30 shadow-md">
                  <img
                    src={encodeURI(selectedQR.qrCode)}
                    alt={`Official ticket QR code for ${selectedQR.name}`}
                    className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-lg"
                    onError={(e) => {
                      if (e.currentTarget.src !== selectedQR.qrCodeClean) {
                        e.currentTarget.src = selectedQR.qrCodeClean;
                      }
                    }}
                  />
                </div>
                <p className="mt-3 text-xs text-center text-[var(--color-dark-stone)] opacity-80 max-w-xs leading-relaxed">
                  Point your smartphone camera or any UPI app (GPay, PhonePe, Paytm) at this code to book official entry tickets.
                </p>
              </div>

              {/* Quick Tariff Reminder */}
              <div className="p-3 rounded-xl bg-white/70 border border-stone-200/70 text-xs flex items-center justify-between">
                <span className="text-[var(--color-dark-stone)] opacity-75 font-medium">Online Tariff:</span>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[var(--color-saffron)]">Indian: {selectedQR.online.indian}</span>
                  <span className="text-stone-300">|</span>
                  <span className="font-bold text-[var(--color-saffron)]">Foreigner: {selectedQR.online.foreigner}</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="space-y-2 pt-1">
                <a
                  href={selectedQR.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[var(--color-indigo)] via-[#8C3310] to-[var(--color-saffron)] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 active:scale-98 transition-all"
                >
                  <span>Open Official Booking Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleDownloadQR(selectedQR.qrCodeClean, selectedQR.name)}
                    disabled={downloading}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-xs font-bold text-[var(--color-dark-stone)] shadow-xs transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
                    <span>{downloading ? 'Saving...' : 'Save QR'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyLink(selectedQR.bookingUrl)}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-xs font-bold text-[var(--color-dark-stone)] shadow-xs transition-colors cursor-pointer"
                  >
                    {copiedUrl ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
