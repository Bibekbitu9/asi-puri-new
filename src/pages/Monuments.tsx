import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Landmark, ArrowUpDown } from 'lucide-react';
import { Image } from '@unpic/react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import KonarkLoader from '../components/KonarkLoader';
import SkeletonCard from '../components/SkeletonCard';
import monumentsData from '../data/monuments.json';

export default function Monuments() {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [sortBy, setSortBy] = useState<'id' | 'name'>('id');
  
  // Infinite Scroll State
  const ITEMS_PER_BATCH = 12;
  const [loadedCount, setLoadedCount] = useState(ITEMS_PER_BATCH);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Translate monument details dynamically
  const getMonumentName = (m: any) => {
    const lang = i18n.language as 'en' | 'hi' | 'od';
    return m.names[lang] || m.names.en;
  };

  const getMonumentLocality = (m: any) => {
    const lang = i18n.language as 'en' | 'hi' | 'od';
    return m.metadata[lang]?.locality || m.metadata.en?.locality || '';
  };

  const getMonumentDistrict = (m: any) => {
    return m.metadata.en?.district || 'Other';
  };

  const getMonumentDescription = (m: any) => {
    const lang = i18n.language as 'en' | 'hi' | 'od';
    return m.descriptions[lang] || m.descriptions.en || '';
  };

  const districts = useMemo(() => {
    const set = new Set<string>();
    monumentsData.forEach(m => {
      const dist = getMonumentDistrict(m);
      if (dist) set.add(dist);
    });
    return Array.from(set).sort();
  }, []);

  const filteredMonuments = useMemo(() => {
    return monumentsData
      .filter(m => {
        const name = getMonumentName(m).toLowerCase();
        const loc = getMonumentLocality(m).toLowerCase();
        const dist = getMonumentDistrict(m).toLowerCase();
        const query = searchQuery.toLowerCase();
        
        const matchesQuery = name.includes(query) || loc.includes(query) || dist.includes(query) || m.id.toString() === query;
        const matchesDistrict = selectedDistrict ? getMonumentDistrict(m) === selectedDistrict : true;
        
        return matchesQuery && matchesDistrict;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return getMonumentName(a).localeCompare(getMonumentName(b));
        }
        return a.id - b.id;
      });
  }, [searchQuery, selectedDistrict, sortBy, i18n.language]);

  // Reset loaded count when filters change
  useEffect(() => {
    setLoadedCount(ITEMS_PER_BATCH);
  }, [searchQuery, selectedDistrict, sortBy]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayedMonuments = filteredMonuments.slice(0, loadedCount);
  const hasMore = loadedCount < filteredMonuments.length;

  // Intersection Observer for Infinite Scroll
  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (isLoadingMore) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setIsLoadingMore(true);
        // Simulate a slight network delay for the smooth loader effect
        setTimeout(() => {
          setLoadedCount(prev => prev + ITEMS_PER_BATCH);
          setIsLoadingMore(false);
        }, 800);
      }
    }, { rootMargin: '200px' }); // Trigger 200px before reaching the bottom

    if (node) observerRef.current.observe(node);
  }, [isLoadingMore, hasMore]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-transparent text-[#E6D8B8] relative overflow-hidden pb-20"
    >
      <SEO title={t('nav.monuments') || 'Monuments'} />

      {/* Background Glows for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative z-10 space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-[var(--color-glass-surface)] border border-[var(--color-glass-border)] shadow-sm mb-2">
            <Landmark className="w-8 h-8 text-[var(--color-saffron)]" />
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-indigo)] via-[#A8451A] to-[var(--color-saffron)] leading-tight drop-shadow-[0_4px_12px_rgba(226,122,63,0.2)]">
            {t('monuments.title')}
          </h1>
          <p className="font-sans text-sm sm:text-base text-[var(--color-dark-stone)] opacity-80">
            {t('monuments.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-indigo)] to-[var(--color-saffron)] mx-auto rounded-full" />
        </motion.div>

        {/* Filters and Search */}
        <div className="bg-[var(--color-glass-surface)] backdrop-blur-xl rounded-[28px] p-4 sm:p-6 shadow-[0_20px_40px_rgba(74,28,10,0.05)] border border-[var(--color-glass-border)] flex flex-col md:flex-row gap-4 justify-between items-center z-50 relative">
          <div className="relative w-full md:max-w-md" ref={wrapperRef}>
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <Search className="w-5 h-5" />
            </span>
            <input
              className="w-full bg-[var(--color-neutral)] border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-[var(--color-dark-stone)] shadow-sm transition-all"
              placeholder={t('monuments.search')}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => { if(searchQuery.trim()) setShowSuggestions(true); }}
            />
            {/* Suggestions Dropdown */}
            {showSuggestions && searchQuery.trim() && filteredMonuments.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 text-left">
                {filteredMonuments.slice(0, 5).map((m) => (
                  <div 
                    key={m.id}
                    onClick={() => {
                      navigate(`/monuments/${m.id}`);
                      setShowSuggestions(false);
                    }}
                    className="px-4 py-3 hover:bg-[var(--color-neutral)] cursor-pointer flex flex-col gap-1 border-b border-slate-100 last:border-0 transition-colors"
                  >
                    <div className="text-sm font-bold text-slate-800 line-clamp-1">{getMonumentName(m)}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 flex-shrink-0" /> <span className="line-clamp-1">{getMonumentLocality(m)}, {getMonumentDistrict(m)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
            <select
              className="w-full sm:w-48 bg-[var(--color-neutral)] border border-slate-200 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-dark-stone)] shadow-sm font-semibold transition-all"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">{t('monuments.all_districts') || 'All Districts'}</option>
              {districts.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>



            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-200 hover:bg-[var(--color-neutral)] hover:border-[var(--color-muted-gold)] rounded-full py-2.5 px-4 text-sm font-bold text-slate-700 hover:text-[var(--color-primary)] transition-all shadow-sm"
              onClick={() => setSortBy(sortBy === 'id' ? 'name' : 'id')}
            >
              <ArrowUpDown className="w-4 h-4 text-[var(--color-primary)]" />
              <span>
                {sortBy === 'id' ? 'Sort: Numeric' : 'Sort: Alphabetical'}
              </span>
            </button>
          </div>
        </div>

        {/* Monuments Directory Grid */}
        {displayedMonuments.length > 0 ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedMonuments.map((m, index) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % ITEMS_PER_BATCH) * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-[var(--color-glass-surface)] backdrop-blur-xl rounded-[28px] overflow-hidden border border-[var(--color-glass-border)] shadow-[0_20px_40px_rgba(74,28,10,0.05)] hover:shadow-[0_20px_50px_rgba(196,135,59,0.15)] hover:border-[var(--color-saffron)] transition-all duration-300 flex flex-col group"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-neutral)]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-stone)]/60 via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
                    <Image
                      alt={getMonumentName(m)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={m.images[0] || '/placeholder.svg'}
                      layout="fullWidth"
                      loading="lazy"
                      background="auto"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[var(--color-primary)] border border-slate-200 text-[10px] font-extrabold px-2 py-1 rounded shadow-sm z-20">
                      #{m.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <h2 className="font-sans text-lg font-bold text-[var(--color-dark-stone)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-snug">
                        {getMonumentName(m)}
                      </h2>
                      
                      <div className="space-y-2 text-xs text-slate-500 font-sans font-semibold">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[var(--color-muted-gold)] flex-shrink-0" />
                          <span className="line-clamp-1">{getMonumentLocality(m)}, {getMonumentDistrict(m)}</span>
                        </div>
                        {m.metadata.en?.period && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[var(--color-muted-gold)] flex-shrink-0" />
                            <span>{m.metadata.en.period}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-sans">
                        {getMonumentDescription(m)}
                      </p>
                    </div>

                    <Link
                      className="mt-6 w-full text-center bg-[var(--color-neutral)] border border-[var(--color-muted-gold)] hover:bg-gradient-to-r hover:from-[var(--color-primary)] hover:to-[#A8451A] hover:text-white hover:border-transparent text-[var(--color-primary)] shadow-sm font-sans font-bold uppercase tracking-widest text-xs py-3 rounded-full transition-all duration-300 block"
                      to={`/monuments/${m.id}`}
                    >
                      {t('monuments.view_details')}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Loading Indicator & Sentinel */}
            {hasMore && (
              <div ref={lastElementRef} className="py-8">
                {isLoadingMore ? (
                  <div className="space-y-8">
                    <div className="flex justify-center">
                      <KonarkLoader className="w-12 h-12" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <SkeletonCard />
                      <SkeletonCard />
                      <SkeletonCard />
                    </div>
                  </div>
                ) : (
                  <div className="h-10" /> /* Invisible sentinel target */
                )}
              </div>
            )}
            {!hasMore && displayedMonuments.length > 0 && (
              <div className="text-center py-8 text-slate-400 font-semibold text-sm">
                You have reached the end.
              </div>
            )}
          </div>
        ) : (
          <div className="text-center bg-white rounded-2xl p-16 border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
            <Landmark className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="font-sans text-sm font-semibold text-slate-500">
              {t('monuments.no_results')}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
