import React from 'react';
import { Trophy, FileCheck, Star, Award, Download } from 'lucide-react';
import { content } from '../data/content';

export default function Results() {
  // Filter data for the stats cards
  const sscResults = content.success.years.filter(item => item.label.includes('SSC'));
  const hscResults = content.success.years.filter(item => item.label.includes('HSC'));

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-bold border border-brand-gold/20 mb-4">
            <Trophy size={14} /> Academic Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
            Our <span className="text-brand-gold">Success</span> Story
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-sans">
            Year after year, Zenith Private Care produces the highest number of GPA-5 achievers in the region.
          </p>
        </div>

        {/* SECTION: STATS CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* SSC Column */}
          <div className="bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg">
                <FileCheck size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white">SSC Performance</h3>
            </div>
            <div className="space-y-4">
              {sscResults.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-brand-gold/30 transition-colors group">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Batch {item.year}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-brand-gold">{item.count}</span>
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">GPA-5</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HSC Column */}
          <div className="bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-lg">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white">HSC Performance</h3>
            </div>
            <div className="space-y-4">
              {hscResults.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-brand-gold/30 transition-colors group">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Batch {item.year}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-brand-gold">{item.count}</span>
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">GPA-5</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SECTION: DOWNLOADS AREA */}
        <div className="bg-brand-gold/10 dark:bg-brand-gold/5 rounded-3xl p-12 text-center border border-brand-gold/20">
          <Star className="mx-auto text-brand-gold mb-6" size={48} />
          <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">Golden A+ Achievers Gallery</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Download the full list of our scholarship winners and university placements for the last academic year.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-gold text-white font-bold hover:bg-brand-dark transition-colors shadow-lg shadow-brand-gold/20">
            <Download size={18} /> Download Annual Report
          </button>
        </div>

      </div>
    </div>
  );
}