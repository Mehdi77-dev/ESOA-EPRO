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
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    formations.forEach((formation) => {
      const img = new Image();
      img.src = formation.image;
    });
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === formations.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? formations.length - 1 : prev - 1));

  const handlePointerDown = (clientX) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handlePointerUp = (clientX) => {
    if (!isDragging) return;
    const distance = startX - clientX;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setIsDragging(false);
  };

  const getVariant = (index) => {
    const diff = (index - currentIndex + formations.length) % formations.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === formations.length - 1) return 'left';
    return 'hidden';
  };

  const variants = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 30 },
    right: { x: "60%", scale: 0.85, opacity: 0.4, zIndex: 20 },
    left: { x: "-60%", scale: 0.85, opacity: 0.4, zIndex: 20 },
    hidden: { x: "0%", scale: 0.7, opacity: 0, zIndex: 10 },
  };

  return (
    <section className="relative py-10 lg:py-16 bg-slate-50/50 overflow-hidden" id="formations">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto px-4 mb-12 md:mb-20"
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

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full h-[550px] lg:h-[650px] flex justify-center items-center overflow-hidden touch-none"
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
          onTouchMove={(e) => isDragging && e.preventDefault()}
          onTouchEnd={(e) => handlePointerUp(e.changedTouches[0].clientX)}
          onMouseDown={(e) => handlePointerDown(e.clientX)}
          onMouseMove={(e) => isDragging && e.preventDefault()}
          onMouseUp={(e) => handlePointerUp(e.clientX)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {formations.map((formation, index) => {
            const variant = getVariant(index);
            const isCenter = variant === 'center';
            
            return (
              <motion.div
                key={formation.id}
                variants={variants}
                initial={false}
                animate={variant}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => {
                  if (variant === 'right') nextSlide();
                  if (variant === 'left') prevSlide();
                }}
                className={`absolute w-[85%] md:w-[60%] lg:w-[45%] h-[90%] md:h-[95%] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden bg-slate-200 ${isCenter ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
              >
                {/* Background Image */}
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E40]/60 via-transparent to-transparent pointer-events-none transition-opacity duration-500"></div>

                {/* Content Card (Visible only when centered) */}
                <div 
                  className={`absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 transform ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className={`text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide uppercase ${formation.badgeColor}`}>
                      {formation.badge}
                    </span>
                    <div className="text-blue-600 font-bold text-sm tracking-widest">
                      0{index + 1} <span className="text-slate-300 font-medium">/ 0{formations.length}</span>
                    </div>
                  </div>

                  <h3 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] font-bold text-[#0B1E40] mb-3 sm:mb-4 leading-[1.2]">
                    {formation.title}
                  </h3>
                  
                  <div className={`h-1 w-10 mb-4 sm:mb-5 ${getLineColor(formation.themeColor)}`}></div>
                  
                  <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8 hidden sm:block">
                    {formation.description}
                  </p>
                  
                  <Link 
                    to={formation.link} 
                    className={`inline-flex items-center gap-2 font-bold text-[14px] sm:text-[15px] group/link ${getLinkColor(formation.themeColor)}`}
                    onClick={(e) => !isCenter && e.preventDefault()}
                  >
                    Découvrir le programme
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </Link>
                </div>

                {/* Fallback Title when NOT centered (for visual hint) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isCenter ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold text-center px-4 drop-shadow-lg">
                    {formation.title}
                  </h3>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-6 lg:mt-8">
          {formations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400 w-2.5'
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
