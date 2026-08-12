import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFormationsOpen, setMobileFormationsOpen] = useState(false);
  const [mobileEcoleOpen, setMobileEcoleOpen] = useState(false);
  
  const [formationsDropdownOpen, setFormationsDropdownOpen] = useState(false);
  const [ecoleDropdownOpen, setEcoleDropdownOpen] = useState(false);

  const { openRegistration } = useRegistration();

  const location = useLocation();
  const navRef = useRef(null);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close dropdowns on click outside or route change
  useEffect(() => {
    setFormationsDropdownOpen(false);
    setEcoleDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setFormationsDropdownOpen(false);
        setEcoleDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 w-full pointer-events-none">
      <header className="w-full h-[98px] bg-white shadow-[0_4px_20px_rgba(15,35,65,0.05)] border-b border-[#0f23410f] pointer-events-auto flex justify-center">
        <div className="w-full max-w-[1480px] h-full flex items-center justify-between px-6 lg:px-14 xl:px-20">
        
        {/* Logo (Left) */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="/Logo/logoesoaepro.png"
            alt="ESOA-EPRO"
            className="w-[170px] lg:w-[185px] h-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          {/* Fallback text logo */}
          <div className="hidden items-center gap-1.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-esoa-navy to-esoa-blue flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <div className="leading-none">
              <span className="text-esoa-navy font-extrabold text-xl tracking-tight">ESOA</span>
              <span className="block text-esoa-navy/60 font-semibold text-[11px] tracking-[0.15em] -mt-0.5">EPRO</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav (Center) */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-9 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          
          {/* Accueil */}
          <Link to="/" className="relative flex flex-col items-center group py-2">
            <span className={`text-esoa-navy ${isActive('/') ? 'font-semibold' : 'font-medium'} text-[17px] lg:text-[18px] group-hover:text-esoa-blue transition-colors`}>
              Accueil
            </span>
            {isActive('/') && (
              <span className="absolute bottom-0 w-[60px] h-[2px] bg-esoa-cyan rounded-full"></span>
            )}
          </Link>

          {/* Formations (Dropdown) */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => setFormationsDropdownOpen(true)}
            onMouseLeave={() => setFormationsDropdownOpen(false)}
          >
            <button
              onClick={() => {
                setFormationsDropdownOpen(!formationsDropdownOpen);
                setEcoleDropdownOpen(false);
              }}
              className={`text-esoa-navy ${isActive('/formations') ? 'font-semibold' : 'font-medium'} text-[17px] lg:text-[18px] hover:text-esoa-blue transition-colors flex items-center gap-1.5 focus:outline-none`}
            >
              Formations
              <svg 
                className={`w-4 h-4 text-esoa-navy/60 group-hover:text-esoa-blue transition-all duration-200 ${formationsDropdownOpen ? 'rotate-180 text-esoa-blue' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {isActive('/formations') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-esoa-cyan rounded-full"></span>
            )}

            {/* Formations Dropdown Menu */}
            <div className={`absolute top-[100%] left-0 w-64 bg-white rounded-[16px] shadow-[0_10px_35px_rgba(15,35,65,0.12)] border border-[#0f23410f] py-2.5 transition-all duration-200 z-50 ${formationsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'}`}>
              <Link 
                to="/formations" 
                className="block px-4 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-[#f0f7ff] hover:text-esoa-blue transition-colors"
              >
                Optique
              </Link>
              <Link 
                to="/formations" 
                className="block px-4 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-[#f0f7ff] hover:text-esoa-blue transition-colors"
              >
                Orthoptie
              </Link>
              <Link 
                to="/formations" 
                className="block px-4 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-[#f0f7ff] hover:text-esoa-blue transition-colors"
              >
                Audioprothèse
              </Link>
              <Link 
                to="/formations" 
                className="block px-4 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-[#f0f7ff] hover:text-esoa-blue transition-colors"
              >
                Orthophonie
              </Link>
            </div>
          </div>
          
          {/* L'école (Dropdown) */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => setEcoleDropdownOpen(true)}
            onMouseLeave={() => setEcoleDropdownOpen(false)}
          >
            <button 
              onClick={() => {
                setEcoleDropdownOpen(!ecoleDropdownOpen);
                setFormationsDropdownOpen(false);
              }}
              className={`text-esoa-navy ${isActive('/ecole') ? 'font-semibold' : 'font-medium'} text-[17px] lg:text-[18px] hover:text-esoa-blue transition-colors flex items-center gap-1.5 focus:outline-none`}
            >
              L'école
              <svg 
                className={`w-4 h-4 text-esoa-navy/60 group-hover:text-esoa-blue transition-all duration-200 ${ecoleDropdownOpen ? 'rotate-180 text-esoa-blue' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {isActive('/ecole') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-esoa-cyan rounded-full"></span>
            )}

            {/* L'école Dropdown Menu */}
            <div className={`absolute top-[100%] left-0 w-60 bg-white rounded-[16px] shadow-[0_10px_35px_rgba(15,35,65,0.12)] border border-[#0f23410f] py-2.5 transition-all duration-200 z-50 ${ecoleDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'}`}>
              <Link 
                to="/ecole" 
                className="block px-4 py-2.5 text-[15px] font-medium text-esoa-navy hover:bg-[#f0f7ff] hover:text-esoa-blue transition-colors"
              >
                Notre établissement
              </Link>
              <Link 
                to="/ecole/pedagogie" 
                className="block px-4 py-2.5 text-[15px] font-medium text-esoa-navy hover:bg-[#f0f7ff] hover:text-esoa-blue transition-colors"
              >
                Notre pédagogie
              </Link>
              <Link 
                to="/ecole/equipements" 
                className="block px-4 py-2.5 text-[15px] font-medium text-esoa-navy hover:bg-[#f0f7ff] hover:text-esoa-blue transition-colors"
              >
                Nos équipements
              </Link>
              <Link 
                to="/ecole/vie-etudiante" 
                className="block px-4 py-2.5 text-[15px] font-medium text-esoa-navy hover:bg-[#f0f7ff] hover:text-esoa-blue transition-colors"
              >
                Vie étudiante
              </Link>
            </div>
          </div>

          {/* Nous trouver */}
          <Link to="/nous-trouver" className="relative flex flex-col items-center group py-2">
            <span className={`text-esoa-navy ${isActive('/nous-trouver') ? 'font-semibold' : 'font-medium'} text-[17px] lg:text-[18px] group-hover:text-esoa-blue transition-colors`}>
              Nous trouver
            </span>
            {isActive('/nous-trouver') && (
              <span className="absolute bottom-0 w-[60px] h-[2px] bg-esoa-cyan rounded-full"></span>
            )}
          </Link>

          {/* Contact */}
          <Link to="/contact" className="relative flex flex-col items-center group py-2">
            <span className={`text-esoa-navy ${isActive('/contact') ? 'font-semibold' : 'font-medium'} text-[17px] lg:text-[18px] group-hover:text-esoa-blue transition-colors`}>
              Contact
            </span>
            {isActive('/contact') && (
              <span className="absolute bottom-0 w-[60px] h-[2px] bg-esoa-cyan rounded-full"></span>
            )}
          </Link>
        </nav>

        {/* CTA (Right) */}
        <div className="hidden lg:flex items-center gap-6 h-full py-4">
          <button
            onClick={openRegistration}
            className="w-[145px] h-[54px] bg-esoa-orange text-white font-semibold text-[16px] lg:text-[17px] rounded-[13px] hover:bg-[#e06714] transition-all hover:-translate-y-[1px] shadow-sm hover:shadow-md flex items-center justify-center gap-2 focus:outline-none"
          >
            S'inscrire
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-esoa-navy rounded-full transition-all ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-esoa-navy rounded-full transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-esoa-navy rounded-full transition-all ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>

        {/* Mobile menu dropdown */}
        <div className={`lg:hidden absolute top-[98px] left-0 right-0 bg-white shadow-xl border-b border-gray-100 transition-all overflow-hidden ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 border-none'}`}>
          <div className="px-6 py-5 flex flex-col gap-3.5">
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-esoa-navy font-semibold text-base">Accueil</Link>
            
            {/* Mobile Formations Submenu */}
            <div className="flex flex-col">
              <button 
                onClick={() => setMobileFormationsOpen(!mobileFormationsOpen)}
                className="text-gray-600 font-medium text-base hover:text-esoa-navy transition-colors flex items-center justify-between py-1"
              >
                <span>Formations</span>
                <svg className={`w-4 h-4 transition-transform ${mobileFormationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {mobileFormationsOpen && (
                <div className="pl-4 flex flex-col gap-2 pt-2 pb-1 border-l-2 border-esoa-cyan/30 my-1">
                  <Link to="/formations" onClick={() => setMobileOpen(false)} className="text-gray-500 text-sm hover:text-esoa-navy">Optique</Link>
                  <Link to="/formations" onClick={() => setMobileOpen(false)} className="text-gray-500 text-sm hover:text-esoa-navy">Orthoptie</Link>
                  <Link to="/formations" onClick={() => setMobileOpen(false)} className="text-gray-500 text-sm hover:text-esoa-navy">Audioprothèse</Link>
                  <Link to="/formations" onClick={() => setMobileOpen(false)} className="text-gray-500 text-sm hover:text-esoa-navy">Orthophonie</Link>
                </div>
              )}
            </div>

            {/* Mobile L'école Submenu */}
            <div className="flex flex-col">
              <button 
                onClick={() => setMobileEcoleOpen(!mobileEcoleOpen)}
                className="text-gray-600 font-medium text-base hover:text-esoa-navy transition-colors flex items-center justify-between py-1"
              >
                <span>L'école</span>
                <svg className={`w-4 h-4 transition-transform ${mobileEcoleOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {mobileEcoleOpen && (
                <div className="pl-4 flex flex-col gap-2 pt-2 pb-1 border-l-2 border-esoa-cyan/30 my-1">
                  <Link to="/ecole" onClick={() => setMobileOpen(false)} className="text-gray-500 text-sm hover:text-esoa-navy">Notre établissement</Link>
                  <Link to="/ecole/pedagogie" onClick={() => setMobileOpen(false)} className="text-gray-500 text-sm hover:text-esoa-navy">Notre pédagogie</Link>
                  <Link to="/ecole/equipements" onClick={() => setMobileOpen(false)} className="text-gray-500 text-sm hover:text-esoa-navy">Nos équipements</Link>
                  <Link to="/ecole/vie-etudiante" onClick={() => setMobileOpen(false)} className="text-gray-500 text-sm hover:text-esoa-navy">Vie étudiante</Link>
                </div>
              )}
            </div>

            <Link to="/nous-trouver" onClick={() => setMobileOpen(false)} className="text-gray-600 font-medium text-base hover:text-esoa-navy transition-colors">Nous trouver</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-gray-600 font-medium text-base hover:text-esoa-navy transition-colors">Contact</Link>
            <div className="pt-3 border-t border-gray-100">
              <button 
                onClick={() => {
                  setMobileOpen(false);
                  openRegistration();
                }}
                className="bg-esoa-orange text-white font-semibold text-base w-[145px] h-[54px] rounded-[13px] flex items-center justify-center gap-2 focus:outline-none"
              >
                S'inscrire
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
        </div>

        </div>
      </header>
    </div>
  );
};

export default Navbar;
