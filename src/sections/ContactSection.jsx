import React from 'react';
import { motion } from 'framer-motion';

// SVG Icons
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50/50 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center sm:items-start text-center sm:text-left mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10 bg-orange-400 hidden sm:block"></div>
            <span className="text-orange-500 font-bold uppercase tracking-wider text-[16px]">
              Nous trouver
            </span>
            <div className="h-px w-10 bg-orange-400 hidden sm:block"></div>
          </div>
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-[#0B1E40] leading-[1.1] mb-6 tracking-tight">
            Venez nous <span className="relative inline-block text-blue-600">
              rencontrer
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous faire visiter notre campus.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 w-full h-full"
          >
            <div className="bg-white rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col justify-between h-full py-4 lg:py-6">
              
              {/* Item 1 - Address */}
              <a href="https://www.google.com/maps/search/?api=1&query=13+Rue+dimachk,+derrière+hôtel+Balima,+hassan,+Rabat" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 px-6 lg:px-8 py-5 hover:bg-slate-50/80 transition-colors">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPinIcon />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#0B1E40] font-bold text-lg mb-0.5">Adresse du Campus</h4>
                  <p className="text-slate-600">13 Rue dimachk, Rabat</p>
                  <p className="text-slate-500 text-sm mt-0.5">Maroc 10000</p>
                </div>
                <div className="text-orange-200 group-hover:text-orange-500 transition-colors">
                  <ChevronRightIcon />
                </div>
              </a>

              <div className="h-px bg-slate-100 mx-8"></div>

              {/* Item 2 - Phone */}
              <a href="tel:+212537737883" className="group flex items-center gap-5 px-6 lg:px-8 py-5 hover:bg-slate-50/80 transition-colors">
                <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                  <PhoneIcon />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#0B1E40] font-bold text-lg mb-0.5">Téléphone</h4>
                  <p className="text-slate-600">05 37 73 78 83</p>
                  <p className="text-slate-500 text-sm mt-0.5">Appel direct disponible</p>
                </div>
                <div className="text-orange-200 group-hover:text-orange-500 transition-colors">
                  <ChevronRightIcon />
                </div>
              </a>

              <div className="h-px bg-slate-100 mx-8"></div>

              {/* Item 3 - WhatsApp */}
              <div className="group flex items-center gap-5 px-6 lg:px-8 py-5 hover:bg-slate-50/80 transition-colors cursor-default">
                <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <WhatsAppIcon />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <h4 className="text-[#0B1E40] font-bold text-lg mb-0.5">WhatsApp</h4>
                  <a href="https://wa.me/212667797767" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600 transition-colors w-fit">
                    06 67 79 77 67
                  </a>
                  <a href="https://wa.me/212661185829" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600 transition-colors w-fit">
                    06 61 18 58 29
                  </a>
                  <p className="text-slate-500 text-sm mt-0.5">Service d'admission direct</p>
                </div>
                <div className="text-orange-200 group-hover:text-orange-500 transition-colors cursor-pointer" onClick={() => window.open("https://wa.me/212667797767", "_blank")}>
                  <ChevronRightIcon />
                </div>
              </div>

              <div className="h-px bg-slate-100 mx-8"></div>

              {/* Item 4 - Email */}
              <a href="mailto:contact@esoasup.com" className="group flex items-center gap-5 px-6 lg:px-8 py-5 hover:bg-slate-50/80 transition-colors">
                <div className="w-14 h-14 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <MailIcon />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#0B1E40] font-bold text-lg mb-0.5">Email</h4>
                  <p className="text-slate-600">contact@esoasup.com</p>
                  <p className="text-slate-500 text-sm mt-0.5">Nous vous répondons rapidement</p>
                </div>
                <div className="text-orange-200 group-hover:text-orange-500 transition-colors">
                  <ChevronRightIcon />
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right Column - Google Maps */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 w-full h-full min-h-[400px] lg:min-h-[500px] rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative group"
          >
            <iframe 
              src="https://maps.google.com/maps?q=13%20rue%20Dimachk%2C%20Rabat%2C%20Morocco&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
              title="Carte Google Maps ESOA-EPRO"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
