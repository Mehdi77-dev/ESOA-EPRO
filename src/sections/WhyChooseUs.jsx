import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ value, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(value * easeOutQuart));
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isVisible]);

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

const AnimatedFadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Icons for Cards
const GraduationCapIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const MicroscopeIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18h8"></path>
    <path d="M3 22h18"></path>
    <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
    <path d="M9 14h2"></path>
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
  </svg>
);

const UserProfileIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const ChartTrendingUpIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

// Icons for Stats Banner
const UsersGroupIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const BriefcaseIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const BadgeIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);


const WhyChooseUs = () => {
  return (
    <section className="pt-16 lg:pt-24 pb-8 lg:pb-12 bg-white relative overflow-hidden" id="pourquoi-esoa">
      {/* Decorative Dots Pattern Background */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[radial-gradient(circle,#0B1E40_2px,transparent_2px)] bg-[size:24px_24px] opacity-[0.03]"></div>
      
      <div className="max-w-[1480px] mx-auto px-6 lg:px-14 xl:px-20 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-orange-400"></div>
            <span className="text-orange-500 font-bold uppercase tracking-wider text-[16px]">
              Pourquoi ESOA-EPRO ?
            </span>
            <div className="h-px w-10 bg-orange-400"></div>
          </div>
          
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-[#0B1E40] leading-[1.1] mb-6 tracking-tight">
            Formez-vous aux <br className="hidden sm:block" />
            <span className="relative inline-block text-blue-600">
              métiers de la santé
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span> de demain
          </h2>
          <p className="text-slate-500 text-lg lg:text-[1.1rem] leading-relaxed max-w-2xl mx-auto">
            Des formations spécialisées pour construire des compétences concrètes et durables.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            {/* Gray dots pattern top left */}
            <div className="absolute -top-6 -left-4 sm:-left-8 w-40 h-40 bg-[radial-gradient(circle,#cbd5e1_2.5px,transparent_2.5px)] bg-[size:16px_16px] -z-20"></div>

            {/* Dark Blue Background Shape */}
            <div className="absolute top-10 left-0 w-[85%] h-[90%] bg-[#0B1E40] rounded-[2rem] -z-10"></div>
            
            {/* Main Image Wrapper */}
            <div className="relative w-[85%] ml-auto aspect-[3/4]">
              {/* Orange dots pattern bottom right */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[radial-gradient(circle,#f97316_2.5px,transparent_2.5px)] bg-[size:16px_16px] z-0"></div>
              
              {/* Main Image */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-white">
                <img 
                  src="/Images/whychooseussection.png" 
                  alt="Étudiante avec microscope" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Overlapping small image */}
            <div className="absolute -bottom-12 -left-4 sm:-left-8 w-[55%] aspect-square rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-8 border-white z-20">
              <img 
                src="/Images/whychooseussection2.png" 
                alt="Consultation" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </motion.div>

          {/* Right Side: Features 2x2 Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 mt-28 lg:mt-0 lg:pl-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1 */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 group border border-blue-500 hover:border-blue-600">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <GraduationCapIcon />
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1E40] mb-3">Des formations spécialisées</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  4 formations d'excellence dans les métiers de la santé : Optique, Orthoptie, Audioprothèse et Orthophonie.
                </p>
                <a href="/formations" className="inline-flex items-center text-blue-600 font-bold text-[15px] hover:text-blue-700 transition-colors">
                  En savoir plus <span className="ml-1 text-lg">→</span>
                </a>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 group border border-blue-500 hover:border-blue-600">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <MicroscopeIcon />
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1E40] mb-3">Une pédagogie pratique</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  Apprenez en conditions réelles avec des équipements professionnels de pointe pour vous préparer aux exigences du métier.
                </p>
                <a href="/pedagogie" className="inline-flex items-center text-blue-600 font-bold text-[15px] hover:text-blue-700 transition-colors">
                  En savoir plus <span className="ml-1 text-lg">→</span>
                </a>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 group border border-blue-500 hover:border-blue-600">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <UserProfileIcon />
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1E40] mb-3">Des formateurs experts</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  Nos enseignants sont des professionnels expérimentés, engagés à transmettre leur savoir-faire et leur passion.
                </p>
                <a href="/ecole" className="inline-flex items-center text-blue-600 font-bold text-[15px] hover:text-blue-700 transition-colors">
                  En savoir plus <span className="ml-1 text-lg">→</span>
                </a>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 group border border-blue-500 hover:border-blue-600">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ChartTrendingUpIcon />
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1E40] mb-3">Un accompagnement personnalisé</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  Un suivi individualisé tout au long de votre cursus pour vous aider à atteindre vos objectifs et réussir votre insertion.
                </p>
                <a href="/ecole" className="inline-flex items-center text-blue-600 font-bold text-[15px] hover:text-blue-700 transition-colors">
                  En savoir plus <span className="ml-1 text-lg">→</span>
                </a>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <div className="mt-8 lg:mt-12 bg-white rounded-[2.5rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] border border-slate-50 p-8 sm:p-10 lg:p-12 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            {/* Stat 1 */}
            <AnimatedFadeIn delay={0}>
              <div className="flex items-center justify-center sm:justify-start gap-5 pt-6 sm:pt-0 sm:px-4 lg:px-8 h-full">
                <div className="w-[60px] h-[60px] rounded-full bg-[#082f82] text-white flex items-center justify-center shrink-0">
                  <GraduationCapIcon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-[28px] font-black text-[#0B1E40] leading-none mb-1">
                    <AnimatedCounter value={4} duration={3500} />
                  </h4>
                  <p className="text-[13px] font-bold text-slate-500 leading-snug">Formations<br />spécialisées</p>
                </div>
              </div>
            </AnimatedFadeIn>

            {/* Stat 2 */}
            <AnimatedFadeIn delay={150}>
              <div className="flex items-center justify-center sm:justify-start gap-5 pt-6 sm:pt-0 sm:px-4 lg:px-8 h-full">
                <div className="w-[60px] h-[60px] rounded-full bg-[#082f82] text-white flex items-center justify-center shrink-0">
                  <UsersGroupIcon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-[28px] font-black text-[#0B1E40] leading-none mb-1">
                    <AnimatedCounter prefix="+" value={1200} duration={4500} />
                  </h4>
                  <p className="text-[13px] font-bold text-slate-500 leading-snug">Étudiants<br />formés</p>
                </div>
              </div>
            </AnimatedFadeIn>

            {/* Stat 3 */}
            <AnimatedFadeIn delay={300}>
              <div className="flex items-center justify-center sm:justify-start gap-5 pt-6 sm:pt-0 sm:px-4 lg:px-8 h-full">
                <div className="w-[60px] h-[60px] rounded-full bg-[#082f82] text-white flex items-center justify-center shrink-0">
                  <BriefcaseIcon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-[28px] font-black text-[#0B1E40] leading-none mb-1">
                    <AnimatedCounter value={90} suffix="%" duration={4000} />
                  </h4>
                  <p className="text-[13px] font-bold text-slate-500 leading-snug">Taux d'insertion<br />professionnelle</p>
                </div>
              </div>
            </AnimatedFadeIn>

            {/* Stat 4 */}
            <AnimatedFadeIn delay={450}>
              <div className="flex items-center justify-center sm:justify-start gap-5 pt-6 sm:pt-0 sm:px-4 lg:px-8 h-full">
                <div className="w-[60px] h-[60px] rounded-full bg-[#082f82] text-white flex items-center justify-center shrink-0">
                  <BadgeIcon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-[18px] font-black text-[#0B1E40] leading-tight mb-1">Accrédité<br />par l'État</h4>
                  <p className="text-[12px] font-bold text-slate-500">Établissement privé reconnu</p>
                </div>
              </div>
            </AnimatedFadeIn>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
