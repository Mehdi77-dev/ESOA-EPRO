import React from 'react';
import { GraduationCap, FileEdit, Users, School } from 'lucide-react';
import { motion } from 'framer-motion';

const admissionsSteps = [
  {
    id: '01',
    title: 'Choisissez votre formation',
    description: 'Découvrez nos 4 filières et choisissez celle qui correspond à votre projet professionnel.',
    icon: <GraduationCap className="w-6 h-6" strokeWidth={2} />,
    theme: 'blue'
  },
  {
    id: '02',
    title: 'Déposez votre candidature',
    description: 'Remplissez le formulaire en ligne et soumettez votre dossier académique complet.',
    icon: <FileEdit className="w-6 h-6" strokeWidth={2} />,
    theme: 'purple'
  },
  {
    id: '03',
    title: 'Passez l\'entretien',
    description: 'Échangez avec notre équipe pédagogique pour valider votre motivation et votre projet.',
    icon: <Users className="w-6 h-6" strokeWidth={2} />,
    theme: 'orange'
  }
];

const getThemeColors = (theme) => {
  switch (theme) {
    case 'blue': return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-500' };
    case 'purple': return { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-500' };
    case 'orange': return { bg: 'bg-orange-50', text: 'text-orange-500', border: 'border-orange-500' };
    default: return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-500' };
  }
};

const HeadsetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    <path d="M19 22v-3"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const CustomSchoolIcon = ({ className = "w-14 h-14" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20c3-1 9-1 18 0" />
    <path d="M9 19v-9l3-2.5 3 2.5v9" />
    <path d="M9 13H5v6" />
    <path d="M15 13h4v6" />
    <path d="M10.5 19v-2a1.5 1.5 0 0 1 3 0v2" />
    <path d="M12 6.5l-1-1 1-1 1 1z" />
    
    <circle cx="12" cy="11.5" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="12" cy="14" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    
    <circle cx="6.5" cy="15" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="6.5" cy="17" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="7.5" cy="15" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="7.5" cy="17" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    
    <circle cx="16.5" cy="15" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="16.5" cy="17" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="17.5" cy="15" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="17.5" cy="17" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

const AdmissionsProcess = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden" id="admissions">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-14 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text & Steps */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-orange-500"></div>
              <span className="text-orange-500 font-bold uppercase tracking-wider text-[15px]">Admissions</span>
              <div className="h-px w-10 bg-orange-500"></div>
            </div>
            
            <h2 className="text-[2.5rem] sm:text-[3rem] font-extrabold text-[#0B1E40] leading-[1.1] mb-6">
              Construisez votre parcours<br className="hidden sm:block" />
              <span className="relative inline-block text-blue-600 ml-0 sm:ml-2 mt-2 sm:mt-0">en 3 étapes
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none"><path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
              </span>
            </h2>
            
            <p className="text-slate-500 text-[17px] mb-12 max-w-lg leading-relaxed">
              Un processus d'admissions simple et transparent pour intégrer notre établissement.
            </p>

            {/* Steps Timeline */}
            <div className="flex flex-col gap-6 w-full max-w-xl mb-12 relative">
              {admissionsSteps.map((step, index) => {
                const colors = getThemeColors(step.theme);
                return (
                  <div key={index} className="flex relative gap-6">
                    {/* Timeline line */}
                    {index < 2 && (
                      <div className="absolute top-12 left-6 bottom-[-1.5rem] w-px border-l-[2px] border-dotted border-slate-300 z-0"></div>
                    )}
                    
                    {/* Number Circle */}
                    <div className={`w-12 h-12 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center shrink-0 z-10 font-bold text-lg`}>
                      {step.id}
                    </div>

                    {/* Card */}
                    <div className={`flex-1 bg-white rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.04)] border ${colors.border} p-5 flex items-center gap-5 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] relative overflow-hidden group/card hover:-translate-y-1`}>
                      
                      <div className={`w-14 h-14 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center shrink-0 relative z-10`}>
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-[#0B1E40] font-bold text-[16px] mb-1">{step.title}</h4>
                        <p className="text-slate-500 text-[14px] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Help Box */}
            <div className="flex flex-wrap items-center gap-6 max-w-xl bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-blue-500">
              <div className="w-14 h-14 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600 shrink-0">
                <HeadsetIcon />
              </div>
              <div className="flex-1 min-w-[200px]">
                <h4 className="text-[#0B1E40] font-bold text-[16px] mb-0.5">Besoin d'aide ?</h4>
                <p className="text-slate-500 text-[13px]">Notre équipe est à votre écoute pour répondre à toutes vos questions.</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <a href="#contact" className="flex items-center gap-2 text-orange-500 font-bold text-[15px] hover:text-orange-600 transition-colors shrink-0 mt-2 sm:mt-0 px-2">
                Nous contacter
                <ArrowRightIcon />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Image with blue accent */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-[520px] aspect-[4/5] mx-auto lg:ml-auto lg:mr-0 mt-12 lg:mt-0"
          >
            
            {/* Dots pattern top-left (blue) */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(circle,#2563eb_2px,transparent_2px)] bg-[size:14px_14px] opacity-30 z-0 pointer-events-none"></div>

            {/* Dots pattern bottom-left (orange) */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(circle,#f97316_2px,transparent_2px)] bg-[size:14px_14px] opacity-40 z-0 pointer-events-none"></div>

            {/* Orange curved line — top right corner */}
            <div className="absolute -top-4 -right-4 w-[45%] h-[35%] border-t-[3px] border-r-[3px] border-orange-500 rounded-tr-[3rem] z-0 pointer-events-none"></div>

            {/* Image */}
            <div className="w-full h-full relative z-10 rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]">
              <img 
                src="/Images/admissionsimage.png" 
                alt="Admissions" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Blue curved accent — bottom right */}
            <div className="absolute -bottom-8 -right-8 w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] z-5 pointer-events-none">
              <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M220 0 C220 0, 220 180, 220 180 C220 202, 202 220, 180 220 L40 220 C18 220, 0 202, 0 180 L0 180 C0 180, 0 120, 0 120 C0 54, 54 0, 120 0 Z" fill="#2563eb" />
              </svg>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionsProcess;
