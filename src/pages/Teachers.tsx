import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import { GraduationCap, ArrowRight } from 'lucide-react';

const TeacherCard = ({ teacher }: any) => (
  <div className="bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-brand-gold/50 transition-all group relative flex flex-col h-full">
    {/* Fixed Hover Effect: Instant Gold Bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">{teacher.name}</h3>
        <GraduationCap className="text-brand-gold/50 group-hover:text-brand-gold transition-colors" size={20} />
      </div>
      <span className="inline-block bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded mb-4 font-bold uppercase tracking-wider">
        {teacher.subject}
      </span>
      <div className="text-sm border-t border-slate-100 dark:border-slate-800 pt-3 mt-2">
        <p className="text-slate-500 dark:text-slate-400 font-sans leading-relaxed line-clamp-2">{teacher.qualifications}</p>
      </div>
    </div>

    {/* See Profile Button - Gold Hover State */}
    <div className="px-6 pb-6 pt-0">
      <Link 
        to={`/teachers/${teacher.id}`}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-bold transition-all duration-300 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold"
      >
        See Profile <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

export default function Teachers() {
  const { principal } = content.faculty;

  return (
    <div className="pt-28 pb-20 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="container-custom space-y-20">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Our Distinguished Faculty</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Experienced educators dedicated to guiding students towards academic excellence.
          </p>
        </div>

        {/* PRINCIPAL SECTION (Elevated) */}
        <div className="max-w-5xl mx-auto">
           <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden relative">
              <div className="grid md:grid-cols-2">
                {/* FIXED: Changed object-center back to object-top to show the head */}
                <div className="h-64 md:h-full relative min-h-[300px] md:min-h-[450px]">
                   <img 
                      src={principal.image} 
                      alt={principal.name} 
                      className="absolute inset-0 w-full h-full object-cover object-top" 
                   />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                   <div className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2">Message from the Founder</div>
                   <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-1">{principal.name}</h2>
                   <p className="text-slate-500 mb-6">{principal.qualifications}</p>
                   
                   {/* Quote Text */}
                   <div className="relative">
                      <p className="text-slate-600 dark:text-slate-300 italic relative z-10 leading-relaxed">
                        "{principal.message}"
                      </p>
                   </div>

                   <div className="mt-8">
                     <Link to={`/teachers/${principal.id}`} className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-bold text-sm hover:bg-brand-gold dark:hover:bg-brand-gold hover:text-white dark:hover:text-white transition-colors shadow-md">
                        See Profile
                     </Link>
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* HSC Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
              <span className="text-brand-gold">HSC</span> (Higher Secondary)
            </h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.faculty.hsc.map((teacher, idx) => (
              <TeacherCard key={idx} teacher={teacher} />
            ))}
          </div>
        </div>

        {/* SSC Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
              <span className="text-brand-gold">SSC</span> (Secondary)
            </h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.faculty.ssc.map((teacher, idx) => (
              <TeacherCard key={idx} teacher={teacher} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}