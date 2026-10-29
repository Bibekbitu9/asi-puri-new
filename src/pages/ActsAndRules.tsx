import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Search, 
  X, 
  Scale, 
  Compass, 
  Camera, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Filter,
  Calendar,
  ArrowUpDown
} from 'lucide-react';

interface DocumentItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  fallbackHref: string;
  category: 'Act' | 'Rule' | 'Policy';
  year: string;
  yearValue: number;
  size: string;
  isNew?: boolean;
}

export default function ActsAndRules() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Act' | 'Rule' | 'Policy'>('All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Documents arranged year-wise (chronological order)
  const documents: DocumentItem[] = [
    {
      id: "amp-act-1904",
      title: "Ancient Monuments Preservation Act 1904",
      subtitle: "Historic preservation legislation for the protection of monuments, excavation sites, and regulation of antiquities traffic.",
      href: "/act-and-rules/amp-act-1904.pdf",
      fallbackHref: "/act-and-rules/amp-act-1904.pdf",
      category: "Act",
      year: "1904",
      yearValue: 1904,
      size: "606 KB"
    },
    {
      id: "ancient-monuments-rules-1904",
      title: "Ancient Monuments Rule 1904",
      subtitle: "Early statutory administrative rules formulated under the Ancient Monuments Preservation Act of 1904.",
      href: "/act-and-rules/ancient-monuments-rules-1904.pdf",
      fallbackHref: "/act-and-rules/ancient-monuments-rules-1904.pdf",
      category: "Rule",
      year: "1904",
      yearValue: 1904,
      size: "147 KB"
    },
    {
      id: "amasr-act-1958",
      title: "Ancient Monuments and Archaeological Sites and Remains Act 1958",
      subtitle: "Principal statutory act providing preservation of ancient and historical monuments, archaeological sites, and remains of national importance.",
      href: "/act-and-rules/amasr-act-1958.pdf",
      fallbackHref: "/act-and-rules/amasr-act-1958.pdf",
      category: "Act",
      year: "1958",
      yearValue: 1958,
      size: "388 KB"
    },
    {
      id: "amasr-rules-1959",
      title: "Act Rules 1959 (AMASR Rules)",
      subtitle: "Detailed operational and procedural regulations established pursuant to the AMASR Act 1958.",
      href: "/act-and-rules/amasr-rules-1959.pdf",
      fallbackHref: "/act-and-rules/amasr-rules-1959.pdf",
      category: "Rule",
      year: "1959",
      yearValue: 1959,
      size: "111 KB"
    },
    {
      id: "aat-act-1972",
      title: "Antiquities and Art Treasure Act 1972",
      subtitle: "Act to regulate export trade in antiquities and art treasures and prevent smuggling of, and fraudulent dealings in antiquities.",
      href: "/act-and-rules/aat-act-1972.pdf",
      fallbackHref: "/act-and-rules/aat-act-1972.pdf",
      category: "Act",
      year: "1972",
      yearValue: 1972,
      size: "328 KB"
    },
    {
      id: "aat-rules-1973",
      title: "Antiquities and Art Treasure Rules 1973",
      subtitle: "Administrative, licensing, and recordkeeping statutory rules enacted under the Antiquities and Art Treasure Act 1972.",
      href: "/act-and-rules/aat-rules-1973.pdf",
      fallbackHref: "/act-and-rules/aat-rules-1973.pdf",
      category: "Rule",
      year: "1973",
      yearValue: 1973,
      size: "266 KB"
    },
    {
      id: "amasr-act-2010",
      title: "AMASR Act 2010 Gazette Notification",
      subtitle: "Official Gazette Notification enacting statutory amendments to the AMASR Act defining prohibited and regulated heritage zones.",
      href: "/act-and-rules/amasr-act-2010-gazette-notification.pdf",
      fallbackHref: "/act-and-rules/amasr-act-2010-gazette-notification.pdf",
      category: "Rule",
      year: "2010",
      yearValue: 2010,
      size: "588 KB"
    },
    {
      id: "nma-rules-2011",
      title: "National Monuments Authority Rules 2011 and Amendments",
      subtitle: "Statutory rules and subsequent regulatory amendments establishing procedures and powers of the National Monuments Authority.",
      href: "/act-and-rules/nma-rules-2011-amendments.pdf",
      fallbackHref: "/act-and-rules/nma-rules-2011-amendments.pdf",
      category: "Rule",
      year: "2011",
      yearValue: 2011,
      size: "5.1 MB"
    },
    {
      id: "guide-policy-2014",
      title: "Guide Policy 2014",
      subtitle: "Comprehensive policy guidelines for engagement, licensing, authorization, and code of conduct for tourist/monument guides at Centrally Protected Monuments.",
      href: "/new update/Review_26thOct/Guide policy 2014.pdf",
      fallbackHref: "/act-and-rules/guide-policy-2014.pdf",
      category: "Policy",
      year: "2014",
      yearValue: 2014,
      size: "6.3 MB",
      isNew: true
    },
    {
      id: "cultural-events-guidelines",
      title: "Guidelines for Holding Cultural Events at Protected Monuments (2016)",
      subtitle: "Official parameters, permissions, and conditions for organizing cultural performances and functions at Centrally Protected sites.",
      href: "/act-and-rules/guidelines-cultural-events-protected-monuments.pdf",
      fallbackHref: "/act-and-rules/guidelines-cultural-events-protected-monuments.pdf",
      category: "Policy",
      year: "2016",
      yearValue: 2016,
      size: "3.0 MB"
    },
    {
      id: "photography-policy-2017-2018",
      title: "Photography Policy 2017 & 2018 (Gazette of India)",
      subtitle: "Official Gazette notifications detailing terms, conditions, filming operation protocols, and fee structures for still photography, filming, and videography at Centrally Protected Monuments.",
      href: "/new update/Review_26thOct/2017 & 2018 photography policy gazetted of india_0001.pdf",
      fallbackHref: "/act-and-rules/photography-policy-2017-2018-gazette-of-india.pdf",
      category: "Policy",
      year: "2017-2018",
      yearValue: 2017,
      size: "7.6 MB",
      isNew: true
    }
  ];

  const filteredDocuments = useMemo(() => {
    return documents
      .filter((doc) => {
        const matchesCategory = 
          selectedCategory === 'All' ? true : doc.category === selectedCategory;
        
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch = query === '' || 
          doc.title.toLowerCase().includes(query) ||
          doc.subtitle.toLowerCase().includes(query) ||
          doc.year.toLowerCase().includes(query) ||
          doc.category.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.yearValue - b.yearValue;
        } else {
          return b.yearValue - a.yearValue;
        }
      });
  }, [documents, selectedCategory, searchQuery, sortOrder]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  const getCategoryBadge = (category: DocumentItem['category']) => {
    switch (category) {
      case 'Act':
        return {
          bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          icon: <Scale className="w-3.5 h-3.5 text-indigo-600" />
        };
      case 'Rule':
        return {
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          icon: <BookOpen className="w-3.5 h-3.5 text-amber-700" />
        };
      case 'Policy':
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
        };
    }
  };

  const getDocumentIcon = (id: string, category: DocumentItem['category']) => {
    if (id.includes('photography')) {
      return <Camera className="w-6 h-6 text-[var(--color-saffron)]" />;
    }
    if (id.includes('guide')) {
      return <Compass className="w-6 h-6 text-[var(--color-saffron)]" />;
    }
    if (category === 'Act') {
      return <Scale className="w-6 h-6 text-[var(--color-saffron)]" />;
    }
    return <FileText className="w-6 h-6 text-[var(--color-saffron)]" />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-transparent text-[#E6D8B8] relative overflow-hidden pb-24"
    >
      <Helmet>
        <title>Acts, Rules &amp; Policies - ASI Puri Circle</title>
        <meta 
          name="description" 
          content="Official acts, statutory rule letters, gazette notifications, and policy frameworks arranged year-wise governing Archaeological Survey of India, Puri Circle." 
        />
      </Helmet>

      {/* Ambient Heritage Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-1">
            <Scale className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            Acts, Rules &amp; Policies
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            Official legislative acts, statutory rule letters, gazette notifications, and policy guidelines governing Centrally Protected Monuments under ASI Puri Circle, arranged year-wise.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        {/* Search, Filter & Year Sort Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-2xl p-4 sm:p-5 mb-8 shadow-xs flex flex-col gap-4"
        >
          {/* Top Row: Search & Sort Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
            {/* Search Box */}
            <div className="relative w-full sm:flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search acts, rules, circulars, or year..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white/90 border border-[#C19A6B]/30 text-xs sm:text-sm text-[var(--color-dark-stone)] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-saffron)] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Year Sorting Button */}
            <button
              type="button"
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 hover:bg-white border border-[#C19A6B]/30 text-xs font-bold text-[var(--color-indigo)] shadow-xs transition-all w-full sm:w-auto justify-center cursor-pointer hover:border-[var(--color-saffron)]"
              title="Toggle Chronological / Reverse Year Sorting"
            >
              <Calendar className="w-3.5 h-3.5 text-[var(--color-saffron)]" />
              <span>
                {sortOrder === 'asc' ? 'Year: 1904 → 2018 (Oldest First)' : 'Year: 2018 → 1904 (Newest First)'}
              </span>
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-400" />
            </button>
          </div>

          {/* Bottom Row: Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full pt-1 border-t border-stone-200/50 scrollbar-none">
            <span className="text-xs font-bold text-[var(--color-dark-stone)] opacity-70 flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" />
              Category:
            </span>
            {(['All', 'Act', 'Rule', 'Policy'] as const).map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === 'All' 
                ? documents.length 
                : documents.filter(d => d.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[var(--color-indigo)] to-[#8C3310] text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-[var(--color-dark-stone)] border border-stone-200/80'
                  }`}
                >
                  {cat === 'All' ? 'All Documents' : cat === 'Policy' ? 'Policies & Guidelines' : `${cat}s`} ({count})
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Documents List */}
        {filteredDocuments.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[var(--color-glass-surface)] backdrop-blur-xl rounded-3xl border border-[var(--color-glass-border)]">
            <FileText className="w-12 h-12 text-stone-400 mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-lg font-bold text-[var(--color-indigo)] mb-1">
              No documents found
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-dark-stone)] opacity-75 max-w-sm mx-auto mb-4">
              We couldn't find any act, rule letter, or policy matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] text-white text-xs font-bold shadow-xs hover:brightness-105 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {filteredDocuments.map((doc) => {
              const badge = getCategoryBadge(doc.category);
              return (
                <motion.li key={doc.id} variants={itemVariants}>
                  <div className="group relative bg-[var(--color-glass-surface)] backdrop-blur-xl rounded-2xl border border-[var(--color-glass-border)] hover:border-[var(--color-saffron)] hover:shadow-[0_12px_32px_rgba(226,122,63,0.12)] transition-all duration-300 overflow-hidden p-5 sm:p-6 text-[var(--color-dark-stone)]">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      {/* Document Details */}
                      <div className="flex items-start gap-4 flex-1">
                        {/* Icon */}
                        <div className="p-3.5 rounded-2xl bg-white shadow-inner group-hover:bg-[var(--color-saffron)]/10 transition-colors shrink-0 border border-stone-200/70 mt-0.5">
                          {getDocumentIcon(doc.id, doc.category)}
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-1.5 flex-1 min-w-0">
                          {/* Badges */}
                          <div className="flex items-center gap-2 flex-wrap">
                            {/* Year Badge */}
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-950 bg-amber-100/90 px-2.5 py-0.5 rounded-full border border-amber-300 shadow-xs">
                              <Calendar className="w-3 h-3 text-[#A8451A]" />
                              <span>{doc.year}</span>
                            </span>

                            {/* Category Badge */}
                            <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${badge.bg}`}>
                              {badge.icon}
                              <span>{doc.category}</span>
                            </span>

                            <span className="text-[10px] font-medium text-stone-500">
                              PDF • {doc.size}
                            </span>

                            {doc.isNew && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-300 animate-pulse">
                                <Sparkles className="w-2.5 h-2.5 text-emerald-700" />
                                Updated Policy
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h2 className="font-serif font-bold text-base sm:text-lg text-[var(--color-indigo)] group-hover:text-[var(--color-saffron)] transition-colors leading-snug">
                            {doc.title}
                          </h2>

                          {/* Subtitle */}
                          <p className="text-xs text-[var(--color-dark-stone)] opacity-80 leading-relaxed max-w-2xl">
                            {doc.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-200/50">
                        {/* View in New Tab */}
                        <a
                          href={encodeURI(doc.href)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-indigo)] via-[#8C3310] to-[var(--color-saffron)] text-white text-xs font-bold shadow-xs hover:shadow-md hover:brightness-105 active:scale-98 transition-all"
                          aria-label={`Read ${doc.title} in new tab`}
                        >
                          <span>View PDF</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {/* Direct Download */}
                        <a
                          href={encodeURI(doc.fallbackHref || doc.href)}
                          download
                          className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 hover:text-[var(--color-saffron)] shadow-xs transition-colors"
                          aria-label={`Download ${doc.title} PDF`}
                          title={`Download ${doc.title}`}
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </div>

                    </div>

                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        )}

        {/* Application Forms & Legal Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-[var(--color-glass-surface)] backdrop-blur-xl border border-[var(--color-glass-border)] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[var(--color-saffron)]/10 text-[var(--color-saffron)] border border-[var(--color-saffron)]/20">
                <FileText className="w-4 h-4" />
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[var(--color-indigo)]">
                Looking for Application Forms &amp; Permissions?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-dark-stone)] opacity-85 leading-relaxed">
              For filming operations, commercial photography, construction/mining permissions in regulated zones, or research licences, please download the official statutory forms from our Forms repository.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link
              to="/forms"
              className="group inline-flex items-center justify-center gap-2 w-full md:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--color-indigo)] to-[#8C3310] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 active:scale-98 transition-all"
            >
              <span>Download Forms</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
