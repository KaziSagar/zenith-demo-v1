import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Moon, Sun, GraduationCap } from 'lucide-react';
import { content } from '../data/content';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // CHANGED: Default state is now 'true' (Dark Mode ON by default)
  const [isDark, setIsDark] = useState(true);
  
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const isActive = (path: string) => location.pathname === path 
    ? "text-brand-gold font-semibold" 
    : "text-slate-600 dark:text-slate-400 hover:text-brand-gold dark:hover:text-brand-gold transition-colors";

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-gold/20 selection:text-brand-dark">
      
      {/* Top Info Bar - Fixed: Now adapts to Light/Dark Mode */}
      <div className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-2 text-xs font-medium border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-brand-gold transition cursor-default">
              <Phone size={14} className="text-brand-gold" /> {content.contact.phone[0]}
            </span>
            <span className="hidden md:flex items-center gap-2 hover:text-brand-gold transition cursor-default">
              <MapPin size={14} className="text-brand-gold" /> Nandipara, Dhaka
            </span>
          </div>
          <div className="flex items-center gap-2 text-brand-gold font-bold tracking-wider uppercase">
            EST. 2012
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container-custom h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-brand-gold flex items-center justify-center text-white shadow-lg shadow-brand-gold/20 group-hover:bg-brand-dark transition-colors">
              <GraduationCap size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-slate-900 dark:text-white leading-none">ZENITH</span>
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">Private Care</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/teachers" className={isActive('/teachers')}>Teachers</Link>
            <Link to="/results" className={isActive('/results')}>Results</Link>
            <Link to="/contact" className={isActive('/contact')}>Admissions</Link>
            
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link to="/contact" className="bg-brand-gold text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-dark transition shadow-lg shadow-brand-gold/20">
              Apply Now
            </Link>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button onClick={() => setIsDark(!isDark)} className="text-slate-500">
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-slate-600 dark:text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 p-4 flex flex-col gap-2 shadow-xl absolute w-full z-50">
            <Link to="/" className="p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 dark:text-slate-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/teachers" className="p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 dark:text-slate-200" onClick={() => setIsMenuOpen(false)}>Teachers</Link>
            <Link to="/results" className="p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 dark:text-slate-200" onClick={() => setIsMenuOpen(false)}>Results</Link>
            <Link to="/contact" className="p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 text-brand-gold font-bold" onClick={() => setIsMenuOpen(false)}>Apply Now</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Outlet />
      </main>

      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-slate-900 dark:text-white text-lg">Zenith Private Care</h3>
            <p className="text-slate-500 text-sm mt-1">Excellence in Education since 2012.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-brand-gold transition">Facebook</a>
            <a href="#" className="hover:text-brand-gold transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}