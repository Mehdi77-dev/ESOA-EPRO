import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRegistration } from '../context/RegistrationContext';

const backgroundImages = [
  "/Images/herosection1.png",
  "/Images/herosection2.jpg",
  "/Images/herosection3.jpg"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { openRegistration } = useRegistration();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900 pt-48 pb-40">
      
      {/* --- SLIDER BACKGROUND (z-0) --- */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {backgroundImages.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Background slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* --- OVERLAY SOMBRE (z-10) --- */}
      <div className="absolute inset-0 bg-slate-950/50 z-10 pointer-events-none"></div>
      
      {/* --- BACKGROUND DECORATIONS (z-10) --- */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none z-10"></div>
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none z-10"></div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-10" viewBox="0 0 1440 800" preserveAspectRatio="none">
        <path d="M-100,600 C300,800 800,200 1600,600" fill="none" stroke="rgba(37, 99, 235, 0.3)" strokeWidth="1" />
        <path d="M-100,200 C400,-100 1000,900 1600,200" fill="none" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1" />
        <path d="M-200,800 C400,600 1000,1000 1600,800" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
      </svg>

      {/* --- MAIN CONTENT (z-20) --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto px-6 relative z-20 w-full flex flex-col items-center"
      >
        
        {/* Surtitre avec les points */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-8">
          <span className="text-orange-500 text-xl leading-none tracking-widest">&bull;&bull;&bull;</span>
          <span className="text-orange-500 font-bold text-sm md:text-[13px] tracking-[0.25em] uppercase">
            École de formation paramédicale
          </span>
          <span className="text-orange-500 text-xl leading-none tracking-widest">&bull;&bull;&bull;</span>
        </motion.div>
        
        {/* Titre H1 */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-[4rem] font-extrabold text-white leading-[1.15] mb-8">
          Construisez votre avenir<br className="hidden md:block" /> dans les métiers de la <span className="relative inline-block">
            santé
            {/* Ligne orange courbée sous "santé" */}
            <svg className="absolute -bottom-3 left-0 w-full h-4 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
              <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>
        
        {/* Paragraphe */}
        <motion.p variants={itemVariants} className="text-slate-300 text-[1.1rem] max-w-2xl mx-auto leading-relaxed mb-12">
          Des formations professionnelles reconnues pour vous préparer<br className="hidden md:block" /> aux métiers d'avenir dans l'optique, l'orthoptie, l'audioprothèse et l'orthophonie.
        </motion.p>
        
        {/* Boutons d'action */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16">
          <Link 
            to="/formations"
            className="group flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white font-medium text-[15px] px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
          >
            Découvrir nos formations
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </Link>
          
          <button 
            onClick={openRegistration}
            className="group flex items-center justify-center gap-2 bg-[#ef6c00] text-white font-medium text-[15px] px-10 py-3.5 rounded-full hover:bg-[#e65c00] transition-all duration-300 w-full sm:w-auto focus:outline-none"
          >
            S'inscrire
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </motion.div>
        
        {/* Badge d'Accréditation */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center relative">
          <img 
            src="/Logo/logoherosection.png" 
            alt="Accrédité par l'État" 
            className="w-48 h-48 md:w-56 md:h-56 object-contain mb-1"
          />
          <p className="text-slate-300 text-sm tracking-wide relative">
            Établissement privé accrédité par l'État
            <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
              <path d="M0,10 Q50,0 100,15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            </svg>
          </p>
        </motion.div>
        
      </motion.div>

      {/* --- SVG WAVE TRANSITION (z-20) --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px] z-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="relative block w-full h-12 md:h-20" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,192 C480,320 960,320 1440,64 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      
    </section>
  );
};

export default Hero;
