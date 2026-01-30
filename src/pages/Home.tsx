import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MonitorPlay, Users, ShieldCheck, FileCheck, Award } from 'lucide-react';
import { content } from '../data/content';

const FeatureCard = ({ title, desc, icon: Icon }: any) => (
  <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-gold/50 transition-colors shadow-sm group">
    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans">{desc}</p>
  </div>
);

const StatCard = ({ value, label, sub }: any) => (
  <div className="bg-white dark:bg-slate-950 p-8 rounded-xl border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden group hover:border-brand-gold/30 transition-colors">
    <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
    <div className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-2">{value}</div>
    <div className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2">{label}</div>
    <div className="text-slate-500 dark:text-slate-400 text-sm">{sub}</div>
  </div>
);

export default function Home() {
  const iconMap: any = { MonitorPlay, Users, ShieldCheck, FileCheck };

  return (
    <div className="pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* SECTION 1: HERO - Fixed Image & Reduced Overlay */}
      <section className="relative pt-32 pb-24 px-4 text-center overflow-hidden min-h-[600px] flex flex-col justify-center items-center">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop" 
            alt="Students studying together" 
            className="w-full h-full object-cover"
          />
          {/* Lighter Overlay (50% opacity instead of 80%) so image is clear */}
          <div className="absolute inset-0 bg-slate-900/50 dark:bg-slate-950/70 backdrop-blur-[2px]"></div>
          {/* Gradient Fade at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-bold border border-brand-gold/30 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            Admissions Open 2026
          </motion.div>

          {/* Added Drop Shadow to text so it remains readable on the brighter image */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] drop-shadow-lg">
            Building the <span className="text-brand-gold">Future</span> <br/>
            with Excellence.
          </h1>

          <p className="text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed font-light font-sans drop-shadow-md">
            Zenith Private Care combines modern technology with traditional discipline to produce <span className="text-brand-gold font-semibold">GPA-5 achievers</span> every single year.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <Link to="/contact" className="px-8 py-3.5 rounded-xl bg-brand-gold text-white font-bold shadow-lg shadow-brand-gold/20 hover:bg-white hover:text-slate-900 transition-all hover:-translate-y-1">
              Apply for Admission
            </Link>
            <Link to="/results" className="px-8 py-3.5 rounded-xl border border-white/40 text-white font-medium hover:border-brand-gold hover:text-brand-gold transition-colors backdrop-blur-sm hover:bg-white/10">
              View Success Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-6xl mx-auto px-4 relative flex items-center justify-center -mt-6 z-20">
        <div className="relative bg-slate-50 dark:bg-slate-900 px-4 text-slate-300 dark:text-slate-700 p-2 rounded-full">
          <Award size={32} className="text-brand-gold" />
        </div>
      </div>

      {/* SECTION 2: STATS */}
      <section className="container-custom mt-12">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">Our Impact</h2>
          <p className="text-slate-600 dark:text-slate-400">Consistent results over the last decade.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <StatCard value="135+" label="GPA-5 Achievers" sub="In SSC & HSC Exams" />
          <StatCard value="100%" label="Pass Rate" sub="Consistent Academic Record" />
          <StatCard value="15+" label="Years Experience" sub="Established in 2012" />
        </div>
      </section>

      {/* SECTION 3: FEATURES */}
      <section className="container-custom mt-24">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">Why Choose Zenith?</h2>
          <p className="text-slate-600 dark:text-slate-400">We provide an environment that fosters learning and discipline.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.about.features.map((feature, idx) => (
            <FeatureCard 
              key={idx}
              title={feature.title}
              desc={feature.description}
              icon={iconMap[feature.icon]}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom mt-24">
        <div className="bg-white dark:bg-slate-950 rounded-3xl p-12 text-center relative overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Secure Your Child's Future</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Seats are limited for the upcoming academic session. Schedule a visit to our Nandipara campus today.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-gold text-white font-bold hover:bg-brand-dark transition-colors shadow-lg shadow-brand-gold/20">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}