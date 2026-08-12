import React from 'react';

// Icons for the Trust Banner
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const TrustBanner = () => {
  return (
    <div className="w-full px-4 relative z-20 -mt-12 md:-mt-16 mb-12">
      <div className="max-w-6xl mx-auto bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/20 py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-slate-700/50 gap-y-4 md:gap-y-6 lg:gap-y-0">
          
          {/* Block 1 */}
          <div className="flex items-center gap-4 p-4">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-800 flex items-center justify-center text-orange-500">
              <CalendarIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">Depuis 1997</span>
              <span className="text-sm text-slate-400 mt-1">École de formation historique</span>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex items-center gap-4 p-4 lg:pl-8">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-800 flex items-center justify-center text-orange-500">
              <ShieldIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">Accréditation d'État</span>
              <span className="text-sm text-slate-400 mt-1">Ministère de l'Enseignement Supérieur</span>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex items-center gap-4 p-4 lg:pl-8">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-800 flex items-center justify-center text-orange-500">
              <UsersIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">+1000 Lauréats</span>
              <span className="text-sm text-slate-400 mt-1">Opticiens et professionnels opérationnels</span>
            </div>
          </div>

          {/* Block 4 */}
          <div className="flex items-center gap-4 p-4 lg:pl-8">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-800 flex items-center justify-center text-orange-500">
              <GlobeIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">Rayonnement</span>
              <span className="text-sm text-slate-400 mt-1">Présents au Maroc et à l'étranger</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
