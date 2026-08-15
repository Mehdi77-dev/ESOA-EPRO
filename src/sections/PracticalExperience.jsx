import React from 'react';
import { motion } from 'framer-motion';

// SVG Icons
const ClinicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <path d="M9 14h6"></path>
    <path d="M12 11v6"></path>
  </svg>
);

const PartnersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const PracticalExperience = () => {
  return (
    <section className="relative py-10 lg:py-16 bg-white overflow-hidden" id="experience-pratique">
      
      <div className="max-w-[1480px] mx-auto px-6 lg:px-14 xl:px-20 relative z-10">
        
        {/* 1. Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-orange-400"></div>
            <span className="text-orange-500 font-bold uppercase tracking-wider text-[16px]">
              Pédagogie active
            </span>
            <div className="h-px w-10 bg-orange-400"></div>
          </div>
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-[#0B1E40] leading-[1.1] mb-6 tracking-tight">
            Apprenez avec les standards <span className="relative inline-block text-blue-600">
              de demain
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-slate-500 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Plongez au cœur de la pratique avec nos laboratoires sur-équipés et nos cliniques d'application.
          </p>
        </motion.div>

        {/* 2. Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          
          {/* Block 1 (Large - 2 cols) - Laboratoires Haute Technologie */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 group relative bg-slate-100 rounded-[2rem] overflow-hidden min-h-[380px] sm:min-h-[420px] transition-all duration-300 flex flex-col justify-end"
          >
            
            {/* Background Image */}
            <img 
              src="/Images/Laboratoire.png" 
              alt="Laboratoires Haute Technologie" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
            {/* Overlay Gradient - lighter to show the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E40]/90 via-[#0B1E40]/30 to-transparent"></div>
            
            {/* Content at bottom left */}
            <div className="relative z-10 p-8 lg:p-10 w-full md:w-3/4">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-4">
                Équipement de pointe
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Laboratoires Haute Technologie</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed">
                Pratiquez vos futures interventions dans des salles techniques qui reproduisent fidèlement l'environnement professionnel hospitalier et libéral.
              </p>
            </div>
          </motion.div>

          {/* Block 2 (Small - 1 col) - Clinique interne */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white border border-slate-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] rounded-[2rem] p-8 lg:p-10 transition-all duration-300 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] relative overflow-hidden"
          >
            {/* Dots decoration top-right */}
            <div className="absolute top-4 right-4 w-28 h-28 bg-[radial-gradient(circle,#cbd5e1_2px,transparent_2px)] bg-[size:12px_12px] opacity-40 pointer-events-none"></div>
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <ClinicIcon />
              </div>
              <h3 className="text-[22px] font-bold text-[#0B1E40] mb-4">Clinique interne</h3>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                Exercez-vous sur des cas réels au sein de notre clinique d'application, en contact direct avec de vrais patients, encadrés par nos professeurs expérimentés.
              </p>
            </div>

            {/* Arrow button */}
            <div className="mt-6">
              <a href="#contact" className="w-12 h-12 rounded-full border-2 border-slate-200 text-slate-400 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors duration-300">
                <ArrowIcon />
              </a>
            </div>
          </motion.div>

          {/* Block 3 (Small - 1 col) - 70% de Pratique */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group bg-gradient-to-br from-[#0B1E40] to-blue-900 shadow-[0_15px_40px_-10px_rgba(11,30,64,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(11,30,64,0.4)] rounded-[2rem] p-8 lg:p-10 transition-all duration-300 flex flex-col justify-center min-h-[260px] sm:min-h-[300px] overflow-hidden"
          >
            {/* Decorative huge text in background */}
            <div className="absolute -right-6 -bottom-8 text-[180px] font-black text-white/[0.03] pointer-events-none leading-none select-none">
              70
            </div>
            
            <div className="relative z-10">
              <div className="mb-5">
                <span className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 drop-shadow-sm">
                  70%
                </span>
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3">Une approche "Hands-on"</h3>
              <p className="text-blue-100/80 leading-relaxed text-[15px]">
                Convaincus que la formation passera toujours par la pratique, nous mettons en avant l'expérience concrète.
              </p>
            </div>
          </motion.div>

          {/* Block 4 (Medium - 2 cols) - Réseau de partenaires */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 group bg-white border border-slate-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] rounded-[2rem] p-8 lg:p-10 transition-all duration-300 flex flex-col justify-center min-h-[260px] sm:min-h-[300px] overflow-hidden relative"
          >
            
            {/* Top row: icon + text */}
            <div className="flex items-start gap-5 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                <PartnersIcon />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#0B1E40] mb-2">Vaste réseau de partenaires</h3>
                <p className="text-slate-500 leading-relaxed text-[15px] max-w-xl">
                  Nos partenariats solides avec des cliniques, CHU, organismes et entreprises vous offrent des opportunités uniques de stages et d'insertion professionnelle.
                </p>
              </div>
            </div>
            
            {/* Infinite Marquee for Partners */}
            <div className="relative w-full overflow-hidden flex items-center -mx-4 px-4">
              {/* Fade edges to smooth the marquee entering/exiting */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                className="flex gap-4 w-max"
              >
                {[
                  { name: "CHU", sub: "HÔPITAL & UNIVERSITAIRES", color: "bg-blue-600", symbol: "+" },
                  { name: "International", sub: "Medical Center", color: "bg-emerald-600", symbol: "⊕" },
                  { name: "MedTech", sub: "INNOVATION", color: "bg-sky-500", symbol: "◆" },
                  { name: "Clinique", sub: "Assalam", color: "bg-teal-500", symbol: "☽" },
                  { name: "BioLabs", sub: "MAROC", color: "bg-violet-600", symbol: "✦" },
                  // Duplicated array for infinite scroll
                  { name: "CHU", sub: "HÔPITAL & UNIVERSITAIRES", color: "bg-blue-600", symbol: "+" },
                  { name: "International", sub: "Medical Center", color: "bg-emerald-600", symbol: "⊕" },
                  { name: "MedTech", sub: "INNOVATION", color: "bg-sky-500", symbol: "◆" },
                  { name: "Clinique", sub: "Assalam", color: "bg-teal-500", symbol: "☽" },
                  { name: "BioLabs", sub: "MAROC", color: "bg-violet-600", symbol: "✦" }
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-[1.25rem] bg-white border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] min-w-[200px]">
                    <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center shadow-md`}>
                      <span className="text-white text-sm font-bold">{p.symbol}</span>
                    </div>
                    <span className="text-[14px] font-bold text-[#0B1E40] leading-tight">
                      {p.name}<br/><span className="text-[10px] font-medium text-slate-400">{p.sub}</span>
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PracticalExperience;
