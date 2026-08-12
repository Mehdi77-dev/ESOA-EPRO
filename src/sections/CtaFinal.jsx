import React from 'react';
import { Link } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';

const CtaFinal = () => {
  const { openRegistration } = useRegistration();

  return (
    <section className="bg-white py-10 lg:py-16 px-6 lg:px-8">
      {/* Central Impact Block */}
      <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden relative shadow-2xl shadow-blue-900/20">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-esoa-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 py-20 px-8 text-center flex flex-col items-center">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Votre avenir dans la santé commence <span className="relative inline-block text-blue-500">
              ici.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 opacity-90">
            Rejoignez une école reconnue, des équipements de pointe et un réseau de professionnels prêts à vous accompagner vers la réussite.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button 
              onClick={openRegistration}
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full bg-esoa-orange text-white font-bold text-[16px] hover:bg-[#e06612] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] focus:outline-none"
            >
              S'inscrire maintenant
            </button>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full bg-transparent border-2 border-white/20 text-white font-bold text-[16px] hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300"
            >
              Télécharger la brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
