import { motion } from 'framer-motion';
import { Calendar, Tag, Bell } from 'lucide-react';

const updatesData = [
  {
    id: 1,
    date: 'March 15, 2026',
    category: 'Conservation',
    title: 'Phase II Restoration of Jagannath Temple Commences',
    summary: 'The second phase of the structural conservation of the Jagannath Temple has officially begun, focusing on the preservation of the inner compound wall.'
  },
  {
    id: 2,
    date: 'March 10, 2026',
    category: 'Notice',
    title: 'New Visitor Guidelines for Konark Sun Temple',
    summary: 'Updated guidelines for visitors to ensure the safety of the monument and enhance the visitor experience during peak tourist seasons.'
  },
  {
    id: 3,
    date: 'March 05, 2026',
    category: 'Discovery',
    title: 'New Inscriptions Found near Ratnagiri',
    summary: 'Recent excavations have unearthed previously unknown stone inscriptions dating back to the 9th century CE near the Ratnagiri Buddhist complex.'
  }
];

export default function LatestUpdates() {
  return (
    <section 
      className="py-16 md:py-24 bg-transparent relative overflow-hidden" 
      id="latest-updates"
      aria-labelledby="latest-updates-heading"
    >
      {/* Background heritage ambient glows */}
      <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-muted-gold)] opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-saffron)] opacity-10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/80 border border-[#C19A6B]/30 backdrop-blur-xl shadow-xs">
            <span className="text-[#A8451A] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2">
              <Bell className="w-3.5 h-3.5 text-[#C15C20]" />
              Announcements
            </span>
          </div>
          <h2 
            id="latest-updates-heading"
            className="font-serif text-[1.75rem] md:text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight"
          >
            Latest Updates
          </h2>
          <p className="text-[var(--color-dark-stone)] opacity-85 text-sm sm:text-base max-w-xl mx-auto">
            Stay informed with the latest conservation notices, archaeological discoveries, and circulars from ASI Puri Circle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updatesData.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 hover:bg-white/95 backdrop-blur-xl text-[var(--color-dark-stone)] rounded-3xl p-7 md:p-8 shadow-[0_15px_35px_rgba(74,28,10,0.06)] hover:shadow-[0_20px_45px_rgba(74,28,10,0.12)] flex flex-col h-full border border-[var(--color-glass-border)] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C15C20] via-[#D96B27] to-[#C19A6B]" />

              <div className="flex items-center justify-between mb-4 pt-1">
                <span className="text-xs font-bold tracking-wider text-[#A8451A] uppercase flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20">
                  <Tag className="w-3 h-3 text-[#C15C20]" /> {update.category}
                </span>
                <span className="text-xs font-semibold text-[#6B5A50] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C19A6B]" /> {update.date}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2D1810] group-hover:text-[#A8451A] transition-colors mb-3 leading-snug">
                {update.title}
              </h3>
              <p className="text-[#4A3B32] text-sm leading-relaxed mb-4 flex-grow">
                {update.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
