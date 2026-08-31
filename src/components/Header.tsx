import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { Image } from '@unpic/react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!location.pathname.startsWith('/monuments') && i18n.language !== 'en') {
      i18n.changeLanguage('en');
    }
  }, [location.pathname, i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  const navItems = [
    { key: 'about', path: '/about', label: 'About Us' },
    { key: 'monuments', path: '/monuments', label: 'Monuments' },
    { key: 'walkthrough', path: '/walkthrough', label: 'Walkthrough' },
    { key: 'museums', path: '/circle-museums', label: 'Museums' },
    { key: 'acts_rules', path: '/acts-and-rules', label: 'Acts & Rules' },
    { key: 'excavations', path: '/excavations', label: 'Excavations' },
    { key: 'contact', path: '/contact-us', label: 'Contact Us' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const currentLangLabel = () => {
    switch (i18n.language) {
      case 'hi': return 'हिन्दी';
      case 'od': return 'ଓଡ଼ିଆ';
      default: return 'English';
    }
  };

  return (
    <>
      
      {/* ==================================================== */}
      {/* MOBILE HEADER (Sticky) */}
      {/* ==================================================== */}
      <header className={`lg:hidden sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#2D1810]/95 backdrop-blur-2xl shadow-xl border-b border-[#C19A6B]/30' : 'bg-gradient-to-r from-[#3A2016] via-[#5A3320] to-[#754829] shadow-md'}`}>
        <div className="px-4 py-2 flex justify-between items-center">
          <Link className="flex items-center gap-2" to="/">
            <div className="relative">
              <Image
                alt="ASI Puri Circle Logo"
                className="h-8 w-8 object-contain"
                src="/asi_logo.jpg.jpeg"
                layout="fixed"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xs font-extrabold bg-gradient-to-r from-amber-200 to-orange-400 bg-clip-text text-transparent uppercase leading-tight">
                {t('hero.title')}
              </span>
              <span className="text-amber-100/70 text-[8px] font-bold tracking-[0.2em] uppercase mt-0.5">
                {t('hero.subtitle')}
              </span>
            </div>
          </Link>
          <button
            className="text-[#E6D8B8] hover:text-amber-400 bg-black/20 p-2 rounded-full border border-white/10 shadow-inner transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-[#1e100a]/95 backdrop-blur-2xl border-t border-white/10 px-4 py-6 shadow-inner overflow-y-auto max-h-[85vh] flex flex-col gap-2">
            
            {/* Mobile Language Panel */}
            {location.pathname.startsWith('/monuments') && (
              <div className="flex flex-col gap-4 mb-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Language</span>
                  <div className="flex gap-2">
                    <button onClick={() => changeLanguage('en')} className={`text-[10px] px-3 py-1.5 rounded-lg font-bold tracking-wider transition-colors ${i18n.language === 'en' || !i18n.language ? 'bg-[#C15C20] text-white shadow-md' : 'bg-black/30 text-white/50 hover:bg-white/10'}`}>EN</button>
                    <button onClick={() => changeLanguage('hi')} className={`text-[10px] px-3 py-1.5 rounded-lg font-bold tracking-wider transition-colors ${i18n.language === 'hi' ? 'bg-[#C15C20] text-white shadow-md' : 'bg-black/30 text-white/50 hover:bg-white/10'}`}>HI</button>
                    <button onClick={() => changeLanguage('od')} className={`text-[10px] px-3 py-1.5 rounded-lg font-bold tracking-wider transition-colors ${i18n.language === 'od' ? 'bg-[#C15C20] text-white shadow-md' : 'bg-black/30 text-white/50 hover:bg-white/10'}`}>OD</button>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Nav Links */}
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  className={`block px-5 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C15C20] to-[#8C3310] text-white shadow-lg shadow-orange-900/20 pl-6 border border-[#C19A6B]/30'
                      : 'text-[#E6D8B8]/70 hover:bg-white/5 hover:text-amber-300 hover:pl-6'
                  }`}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* ==================================================== */}
      {/* DESKTOP TIER 1: Main Header (Non-Sticky) */}
      {/* ==================================================== */}
      <header className="hidden lg:block bg-gradient-to-r from-[#3A2016] via-[#5A3320] to-[#754829] relative z-[60] py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo and Brand */}
            <Link className="flex items-center gap-4 group relative" to="/">
              <div className="relative">
                <Image
                  alt="ASI Puri Circle Logo"
                  className="h-12 w-12 object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  src="/asi_logo.jpg.jpeg"
                  layout="fixed"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-xl font-extrabold bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent tracking-wide uppercase leading-tight drop-shadow-md">
                  {t('hero.title')}
                </span>
                <span className="text-amber-100/70 text-[10px] font-bold tracking-[0.3em] uppercase mt-0.5">
                  {t('hero.subtitle')}
                </span>
              </div>
            </Link>

            {/* Language Selector Desktop */}
            {location.pathname.startsWith('/monuments') && (
              <div className="flex items-center relative">
                <button
                  className="group flex items-center gap-2 bg-black/20 hover:bg-black/40 px-5 py-2.5 rounded-full border border-white/10 hover:border-amber-500/50 transition-all duration-300 shadow-inner"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                >
                  <Globe className="w-4 h-4 text-[#C19A6B] group-hover:text-amber-400 transition-colors" />
                  <span className="text-xs font-bold tracking-widest text-[#E6D8B8] uppercase">{currentLangLabel()}</span>
                  <ChevronDown className={`w-3 h-3 text-white/50 transition-transform duration-300 ${langMenuOpen ? 'rotate-180 text-white' : ''}`} />
                </button>
                {langMenuOpen && (
                  <div className="absolute top-full right-0 mt-3 w-40 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] bg-[#2D1810]/95 backdrop-blur-xl border border-white/10 overflow-hidden origin-top-right transition-all">
                    <div className="py-1 flex flex-col" role="menu">
                      <button className="text-left px-5 py-3 text-xs font-bold text-white/70 hover:bg-gradient-to-r hover:from-[#C15C20] hover:to-[#8C3310] hover:text-white transition-all" onClick={() => changeLanguage('en')}>ENGLISH</button>
                      <button className="text-left px-5 py-3 text-xs font-bold text-white/70 hover:bg-gradient-to-r hover:from-[#C15C20] hover:to-[#8C3310] hover:text-white transition-all" onClick={() => changeLanguage('hi')}>हिन्दी</button>
                      <button className="text-left px-5 py-3 text-xs font-bold text-white/70 hover:bg-gradient-to-r hover:from-[#C15C20] hover:to-[#8C3310] hover:text-white transition-all" onClick={() => changeLanguage('od')}>ଓଡ଼ିଆ</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ==================================================== */}
      {/* DESKTOP TIER 2: Sub-Header Navigation (Sticky) */}
      {/* ==================================================== */}
      <div className={`hidden lg:block sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-[#2D1810]/95 via-[#4A2818]/95 to-[#5C321E]/95 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-[#C19A6B]/30' : 'bg-gradient-to-r from-[#150a06]/90 via-[#2a140d]/90 to-[#1a0c07]/90 backdrop-blur-sm border-y border-white/5 shadow-inner'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center items-center min-h-[2.5rem] py-2 gap-x-8 xl:gap-x-12 gap-y-3">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`group relative font-sans text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center text-center py-1 transition-all duration-300 ${
                    isActive
                      ? 'text-amber-400'
                      : 'text-[#E6D8B8]/80 hover:text-amber-300'
                  }`}
                  to={item.path}
                >
                  <span>{item.label}</span>
                  {/* Active Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 to-orange-500 rounded-t-full shadow-[0_-2px_10px_rgba(251,191,36,0.5)]"></span>
                  )}
                  {/* Hover Underline */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-white/30 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-t-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

    </>
  );
}
