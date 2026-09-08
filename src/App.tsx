import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loaded routes for code splitting
const Home = lazy(() => import('./pages/Home'));
const Monuments = lazy(() => import('./pages/Monuments'));
const MonumentDetail = lazy(() => import('./pages/MonumentDetail'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const CircleMuseums = lazy(() => import('./pages/CircleMuseums'));
const Walkthrough = lazy(() => import('./pages/Walkthrough'));

const ActsAndRules = lazy(() => import('./pages/ActsAndRules'));
const Excavations = lazy(() => import('./pages/Excavations'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

import KonarkLoader from './components/KonarkLoader';

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex-grow flex items-center justify-center min-h-[50vh]">
    <KonarkLoader className="w-20 h-20" />
  </div>
);

// Inner component to access location for AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/monuments" element={<Monuments />} />
        <Route path="/monuments/:id" element={<MonumentDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/circle-museums" element={<CircleMuseums />} />
        <Route path="/walkthrough" element={<Walkthrough />} />
        <Route path="/acts-and-rules" element={<ActsAndRules />} />
        <Route path="/excavations" element={<Excavations />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div 
          className="flex flex-col min-h-screen text-[#2D1810] font-sans selection:bg-[#C4873B]/30 selection:text-[#2D1810] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/BG.png')" }}
        >
          <Header />
          
          <main className="flex-grow flex flex-col" id="main-content">
            <Suspense fallback={<LoadingFallback />}>
              <AnimatedRoutes />
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
