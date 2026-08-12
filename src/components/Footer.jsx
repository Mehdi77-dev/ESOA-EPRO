import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#082A52] text-white relative overflow-hidden">
      
      {/* Decorative Background Elements (Very Low Opacity) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full border-[1px] border-white/[0.03] opacity-20" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full border-[1px] border-white/[0.03] opacity-20" />
        <div className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-white/[0.05]" />
        <div className="absolute top-[60%] right-[30%] w-3 h-3 rounded-full bg-white/[0.05]" />
      </div>

      <div className="max-w-[1450px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10 pt-20 pb-12">
        
        {/* =================== SECTION 1 — CTA BANNER =================== */}
        <div className="bg-[#0D3768] rounded-[24px] px-8 py-10 lg:py-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 shadow-lg relative overflow-hidden">
          {/* Subtle CTA Decoration */}
          <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
          
          <div className="w-full lg:w-[60%] flex flex-col text-center lg:text-left">
            <h2 className="text-[28px] lg:text-[32px] font-bold text-white leading-[1.2] mb-3">
              Votre avenir dans les métiers de la santé commence <span className="relative inline-block text-blue-400">
                ici.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-[#B9C9DA] text-[16px] lg:text-[18px]">
              Découvrez nos formations et construisez votre projet professionnel avec ESOA-EPRO.
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">
            <a
              href="#formations"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#082A52] font-bold text-[16px] px-8 h-[54px] rounded-[14px] hover:bg-[#EAF3FF] hover:-translate-y-[2px] transition-all duration-300 shadow-sm"
            >
              Découvrir nos formations
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
            <a href="#contact" className="text-[#B9C9DA] hover:text-white font-medium text-[15px] transition-colors flex items-center gap-1 group">
              Nous contacter
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* =================== SECTION 2 — MAIN FOOTER =================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* COLUMN 1 — BRAND (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col">
            <a href="/" className="inline-flex items-center justify-center mb-6 bg-white p-2 rounded-[1.25rem] w-[180px] h-[75px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
              <img
                src="/Logo/logoesoaepro.png"
                alt="ESOA-EPRO"
                className="w-full h-full object-contain scale-[1.35]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-[#082A52] font-extrabold text-xl tracking-tight">ESOA-EPRO</span>
            </a>
            <p className="text-[#B9C9DA] text-[15px] leading-[1.7] max-w-[300px] mb-6">
              ESOA-EPRO accompagne les étudiants vers des métiers d’avenir dans le domaine de la santé grâce à des formations professionnelles spécialisées et orientées vers la pratique.
            </p>
            <p className="text-white font-semibold text-[15px] tracking-wide">
              Des compétences. Une expertise. Un avenir.
            </p>
          </div>

          {/* COLUMN 2 — NAVIGATION (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-white font-bold text-[18px] mb-6">Navigation</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Formations', path: '/formations' },
                { name: 'L\'école', path: '/ecole' },
                { name: 'Nous trouver', path: '/nous-trouver' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[#B9C9DA] hover:text-white transition-colors text-[15px] flex items-center group">
                    <span className="w-0 overflow-hidden opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-[#F97316]">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — NOS FORMATIONS (Spans 3 columns) */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-[18px] mb-6">Nos formations</h3>
            <ul className="flex flex-col gap-3.5">
              {['Optique', 'Orthoptie', 'Audioprothèse', 'Orthophonie'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#B9C9DA] hover:text-white transition-colors text-[15px] flex items-center justify-between group max-w-[200px]">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <svg className="w-3.5 h-3.5 text-[#F97316] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 — NOUS SUIVRE (Spans 3 columns) */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-[18px] mb-6">Nous suivre</h3>
            <p className="text-[#B9C9DA] text-[15px] leading-[1.6] mb-6 max-w-[260px]">
              Suivez ESOA-EPRO et découvrez nos actualités, événements et nouveautés.
            </p>
            
            <div className="flex items-center gap-3.5 mb-10">
              <a 
                href="https://www.instagram.com/epro.esoa/?hl=fr" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-pink-500/25 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.822a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/EsoaEpro/?locale=fr_FR" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-blue-500/25 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-[#0077b5] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-blue-500/25 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Optional Contact Area */}
            <div className="flex flex-col border-t border-white/10 pt-6">
              <span className="text-white font-bold text-[16px] mb-1">Une question ?</span>
              <span className="text-[#B9C9DA] text-[14px] mb-3">Notre équipe est à votre écoute.</span>
              <a href="#contact" className="text-white hover:text-[#F97316] text-[14px] font-semibold flex items-center gap-1 group w-max transition-colors">
                Nous contacter
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

        {/* =================== SECTION 4 — LEGAL BOTTOM BAR =================== */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#B9C9DA] text-[14px]">
            © 2026 ESOA-EPRO. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
            <a href="#" className="text-[#B9C9DA] hover:text-white text-[14px] transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-[#B9C9DA] hover:text-white text-[14px] transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
