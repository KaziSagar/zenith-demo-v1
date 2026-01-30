import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Navigation } from 'lucide-react';
import { content } from '../data/content';

export default function Contact() {
  const [distance, setDistance] = useState<string | null>(null);
  const [loadingLoc, setLoadingLoc] = useState(false);
  
  const phoneDisplay = Array.isArray(content.contact.phone) 
    ? content.contact.phone.join(", ") 
    : content.contact.phone || "Call us";

  // UPDATED Coordinates (from Contact-location.tsx)
  const ZENITH_LAT = 23.7453471;
  const ZENITH_LNG = 90.4479871;

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; 
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return (R * c).toFixed(1);
  };

  const handleFloatingButtonClick = () => {
    if (distance) {
      openGoogleMapsRoute();
      return;
    }

    setLoadingLoc(true);
    
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      setLoadingLoc(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        
        const dist = calculateDistance(userLat, userLng, ZENITH_LAT, ZENITH_LNG);
        setDistance(dist);
        setLoadingLoc(false);
      },
      () => {
        alert("Unable to retrieve location. Please allow access.");
        setLoadingLoc(false);
      }
    );
  };

  const openGoogleMapsRoute = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        window.open(`https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${ZENITH_LAT},${ZENITH_LNG}`, '_blank');
      },
      () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${ZENITH_LAT},${ZENITH_LNG}`, '_blank');
      }
    );
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
            Admissions & <span className="text-brand-gold">Contact</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-sans">
            Visit our campus or request a callback to secure your seat for the new session.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white dark:bg-slate-950 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Left Side: Info */}
            <div className="p-10 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
              
              <div className="relative z-10 w-full">
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6 font-sans mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-brand-gold shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Campus Location</h3>
                      <p className="leading-relaxed font-medium">
                        Zenith Private Care, Zenith Golli,<br/>
                        2 No Noor Mosque Road, Dhaka 1219
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-brand-gold shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone Numbers</h3>
                      <p className="font-medium">{phoneDisplay}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-brand-gold shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email Address</h3>
                      <p className="font-medium">{content.contact.email}</p>
                    </div>
                  </div>
                </div>

                {/* --- MAP SECTION --- */}
                <div className="w-full h-72 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md relative group">
                   
                   <iframe 
                     title="Zenith Map"
                     src={`https://maps.google.com/maps?q=${ZENITH_LAT},${ZENITH_LNG}&z=15&output=embed`}
                     className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                     style={{ 
                        width: '100%', 
                        height: 'calc(100% + 100px)', 
                        marginTop: '-100px', 
                        border: 0 
                     }} 
                     allowFullScreen={true} 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>

                   {/* Floating Action Button (Distance Calculator) */}
                   <div className="absolute bottom-4 left-4 z-10">
                      <button 
                        onClick={handleFloatingButtonClick}
                        disabled={loadingLoc}
                        className="bg-brand-gold text-white px-4 py-2.5 rounded-lg shadow-xl font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-brand-dark transition-colors transform hover:-translate-y-1 ring-2 ring-white/20"
                      >
                        {loadingLoc ? (
                          <span>Locating...</span>
                        ) : distance ? (
                          <>
                            <Navigation size={16} className="animate-pulse" /> Navigate ({distance} km)
                          </>
                        ) : (
                          <>
                            <Navigation size={16} /> Calculate Distance
                          </>
                        )}
                      </button>
                   </div>
                </div>

              </div>
            </div>

            {/* Right Side: Request Call Form */}
            <div className="p-10 bg-white dark:bg-slate-950">
              <h2 className="text-2xl font-serif font-bold mb-6 text-slate-900 dark:text-white">Request a Call Back</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Student Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition text-slate-900 dark:text-white" 
                    placeholder="Enter full name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition text-slate-900 dark:text-white" 
                    placeholder="017..." 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Class of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition text-slate-900 dark:text-white">
                    <option>Class 9-10 (SSC)</option>
                    <option>Class 11-12 (HSC)</option>
                    <option>Junior Sections (6-8)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-brand-gold text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 group">
                  Send Request <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                <p className="text-slate-400 text-sm italic text-center">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}