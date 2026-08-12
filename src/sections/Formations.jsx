import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const formations = [
  {
    id: 1,
    title: "Optique - Lunetterie",
    badge: "DIPLÔME D'ÉTAT",
    badgeColor: "text-blue-600 bg-blue-50",
    themeColor: "blue",
    image: "/Images/optique.jpg",
    description: "Formez-vous aux métiers de l'optique et de la lunetterie et accompagnez vos futurs patients vers une meilleure vision.",
    link: "/formations/optique"
  },
  {
    id: 2,
    title: "Orthoptie",
    badge: "BAC +3",
    badgeColor: "text-purple-600 bg-purple-50",
    themeColor: "purple",
    image: "/Images/orthoptie.jpg",
    description: "Devenez un professionnel de la santé visuelle et contribuez au dépistage, à la rééducation et à la recherche en orthoptie.",
    link: "/formations/orthoptie"
  },
  {
    id: 3,
    title: "Audioprothèse",
    badge: "DIPLÔME D'ÉTAT",
    badgeColor: "text-orange-600 bg-orange-50",
    themeColor: "orange",
    image: "/Images/audioprothese.jpg",
    description: "Spécialisez-vous dans la correction de l'audition et améliorez la qualité de vie des personnes malentendantes.",
    link: "/formations/audioprothese"
  },
  {
    id: 4,
    title: "Orthophonie",
    badge: "BAC +5",
    badgeColor: "text-emerald-600 bg-emerald-50",
    themeColor: "emerald",
    image: "/Images/orthophonie.jpg",
    description: "Accompagnez les patients dans le développement et la rééducation de la communication et du langage.",
    link: "/formations/orthophonie"
  }
];

const getLineColor = (theme) => {
  switch(theme) {
    case 'blue': return 'bg-blue-600';
    case 'purple': return 'bg-purple-600';
    case 'orange': return 'bg-orange-500';
    case 'emerald': return 'bg-emerald-500';
    default: return 'bg-blue-600';
  }
};

const getLinkColor = (theme) => {
  switch(theme) {
    case 'blue': return 'text-blue-600';
    case 'purple': return 'text-purple-600';
    case 'orange': return 'text-orange-500';
    case 'emerald': return 'text-emerald-500';
    default: return 'text-blue-600';
  }
};

const FormationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Préchargement discret des images en arrière-plan
    formations.forEach((formation) => {
      const img = new Image();
      img.src = formation.image;
    });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === formations.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? formations.length - 1 : prev - 1));
  };

  const currentFormation = formations[currentIndex];

  return (
    <section className="relative py-10 lg:py-16 bg-slate-50/50 overflow-hidden" id="formations">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-orange-400"></div>
            <span className="text-orange-500 font-bold uppercase tracking-wider text-[16px]">
              Votre parcours
            </span>
            <div className="h-px w-10 bg-orange-400"></div>
          </div>
          
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-[#0B1E40] leading-[1.1] mb-6 tracking-tight">
            Découvrez nos filières<br />
            <span className="relative inline-block text-blue-600">
              d'excellence
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-[1200px] mx-auto px-12 md:px-16 mb-10">
          
          {/* Main Slide Area */}
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-[2.5rem] shadow-2xl overflow-hidden bg-slate-200">
            
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentFormation.image}
                alt={currentFormation.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Dark gradient overlay to ensure card readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E40]/30 via-transparent to-transparent pointer-events-none"></div>

            {/* Content Card (Bottom Left Overlapping) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-[90%] md:max-w-[480px] bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              >
                
                {/* Top of Card: Badge & Counter */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide uppercase ${currentFormation.badgeColor}`}>
                    {currentFormation.badge}
                  </span>
                  <div className="text-blue-600 font-bold text-sm tracking-widest">
                    0{currentIndex + 1} <span className="text-slate-300 font-medium">/ 0{formations.length}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[1.8rem] md:text-[2.2rem] font-bold text-[#0B1E40] mb-4 leading-[1.2]">
                  {currentFormation.title}
                </h3>
                
                {/* Colored Line */}
                <div className={`h-1 w-10 mb-6 ${getLineColor(currentFormation.themeColor)}`}></div>
                
                {/* Description */}
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                  {currentFormation.description}
                </p>
                
                {/* CTA Link */}
                <Link to={currentFormation.link} className={`inline-flex items-center gap-2 font-bold text-[15px] group/link ${getLinkColor(currentFormation.themeColor)}`}>
                  Découvrir le programme
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" strokeWidth={2.5} />
                </Link>

              </motion.div>
            </AnimatePresence>
            
          </div>

          {/* Navigation Arrows (Outside) */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(0,0,0,0.1)] border border-slate-100 text-slate-700 hover:text-blue-600 hover:scale-105 transition-all focus:outline-none z-20"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(0,0,0,0.1)] border border-slate-100 text-slate-700 hover:text-blue-600 hover:scale-105 transition-all focus:outline-none z-20"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-4">
          {formations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Aller à la formation ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FormationsSection;
