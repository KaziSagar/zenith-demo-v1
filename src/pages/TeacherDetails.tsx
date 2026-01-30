import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { content } from '../data/content';
import { ArrowLeft, GraduationCap, BookOpen, Star, Quote } from 'lucide-react';

// FIX: Define the shape of a Teacher object so TypeScript knows 'message' is optional
interface Teacher {
  id: string;
  name: string;
  subject: string;
  qualifications: string;
  image: string;
  message?: string; // <--- This '?' makes it optional, fixing the error
}

export default function TeacherDetails() {
  const { id } = useParams();

  // Search for teacher in all categories
  // We explicitly cast them to 'Teacher' or 'null' to satisfy TypeScript
  const principal = content.faculty.principal.id === id ? content.faculty.principal : null;
  const hscTeacher = content.faculty.hsc.find(t => t.id === id);
  const sscTeacher = content.faculty.ssc.find(t => t.id === id);

  // FIX: Cast the result to the Teacher interface
  const teacher = (principal || hscTeacher || sscTeacher) as Teacher | undefined;

  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Teacher Not Found</h2>
          <Link to="/teachers" className="text-brand-gold hover:underline mt-4 inline-block">Back to Faculty</Link>
        </div>
      </div>
    );
  }

  // Helper to determine department text based on whether it's the principal or not
  const isPrincipal = teacher.id === 'principal';
  const departmentText = isPrincipal ? "Administration & English" : "Science & Commerce Wing";

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container-custom">
        <Link to="/teachers" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-gold mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to Faculty List
        </Link>

        <div className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
          <div className="grid md:grid-cols-12">
            
            {/* Image Section */}
            <div className="md:col-span-5 h-96 md:h-auto relative bg-slate-200 dark:bg-slate-900">
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:hidden"></div>
              <div className="absolute bottom-4 left-4 text-white md:hidden">
                <h1 className="text-3xl font-serif font-bold">{teacher.name}</h1>
                <p className="opacity-90">{teacher.subject}</p>
              </div>
            </div>

            {/* Info Section */}
            <div className="md:col-span-7 p-10 md:p-14 flex flex-col justify-center">
              <div className="hidden md:block mb-6">
                <div className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-sm font-bold uppercase tracking-wider mb-2">
                  Faculty Member
                </div>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-2">{teacher.name}</h1>
                <h2 className="text-xl text-slate-500 dark:text-slate-400 font-medium">{teacher.subject} Specialist</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-brand-gold">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Qualifications</h3>
                    <p className="text-slate-600 dark:text-slate-400">{teacher.qualifications}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-brand-gold">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Department</h3>
                    <p className="text-slate-600 dark:text-slate-400">{departmentText}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg text-brand-gold">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Experience</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Experienced in guiding students to achieve GPA-5.
                    </p>
                  </div>
                </div>
              </div>

              {/* Only show quote if it exists (Principal) */}
              {teacher.message && (
                 <div className="mt-10 p-6 bg-brand-gold/5 border-l-4 border-brand-gold relative">
                   <Quote className="absolute top-4 left-4 text-brand-gold/20 -z-10 transform -scale-x-100" size={40} />
                   <p className="text-slate-700 dark:text-slate-300 italic relative z-10">
                     "{teacher.message}"
                   </p>
                 </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}