import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: "Les diplômes sont-ils reconnus par l'État ?",
    answer: "Oui, ESOA-EPRO est un établissement privé accrédité par l'État. Nos diplômes sont reconnus et vous permettent d'exercer directement après l'obtention ou de poursuivre vos études."
  },
  {
    id: 2,
    question: "Faut-il un baccalauréat spécifique pour s'inscrire ?",
    answer: "L'admission est principalement ouverte aux titulaires d'un baccalauréat scientifique, technique ou équivalent. Chaque dossier est étudié avec soin par notre commission d'admission."
  },
  {
    id: 3,
    question: "Quelle est la part de pratique dans les formations ?",
    answer: "La pratique est au cœur de notre pédagogie. Près de 70% de la formation est dédiée aux travaux pratiques en laboratoires modernes et aux stages cliniques professionnels."
  },
  {
    id: 4,
    question: "Proposez-vous un accompagnement pour trouver un emploi ?",
    answer: "Absolument. Nous disposons d'un vaste réseau de partenaires dans le secteur de la santé (cliniques, centres d'optique, hôpitaux) et nous accompagnons nos lauréats dans leur insertion professionnelle."
  }
];

const QuestionMarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

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

const AccordionItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white mb-4 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 border ${isOpen ? 'border-orange-500' : 'border-transparent'}`}
    >
      <button
        className="w-full text-left flex items-center justify-between py-4 px-5 focus:outline-none group"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-orange-500">
            <QuestionMarkIcon />
          </div>
          <span className={`font-semibold text-[15px] lg:text-[16px] transition-colors duration-300 ${isOpen ? 'text-orange-600' : 'text-slate-700 group-hover:text-blue-900'}`}>
            {faq.question}
          </span>
        </div>
        <div className={`w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-orange-500 text-white' : 'text-orange-500 group-hover:bg-orange-100'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} />
          </svg>
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out px-5 lg:px-16 ${isOpen ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
        <p className="text-slate-600 leading-relaxed text-[15px]">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
};

const FaqSection = () => {
  const [openId, setOpenId] = useState(null); // All closed by default as in screenshot

  return (
    <section className="py-16 lg:py-24 bg-slate-50/50 relative overflow-hidden" id="faq">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-14 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text & Accordion */}
          <div className="flex flex-col justify-center">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-10 bg-orange-500"></div>
                <span className="text-orange-500 font-bold uppercase tracking-wider text-[15px]">Vos questions</span>
                <div className="h-px w-10 bg-orange-500"></div>
              </div>
              <h2 className="text-[2.5rem] sm:text-[3rem] font-extrabold text-[#0B1E40] leading-[1.1] mb-6">
                Questions <span className="relative inline-block text-blue-600">Fréquemment
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none"><path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
                </span> Posées
              </h2>
              <p className="text-slate-500 text-[17px] mb-10 max-w-lg leading-relaxed">
                Tout ce que vous devez savoir sur nos formations, nos admissions et notre établissement.
              </p>
            </motion.div>

            {/* Accordions */}
            <div className="flex flex-col w-full max-w-xl mb-12">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  faq={faq}
                  index={index}
                  isOpen={openId === faq.id}
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              ))}
            </div>

            {/* Contact Help Box */}
            <div className="flex flex-wrap items-center gap-6 max-w-xl bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-blue-500">
              <div className="w-16 h-16 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600 shrink-0">
                <HeadsetIcon />
              </div>
              <div className="flex-1 min-w-[200px]">
                <h4 className="text-[#0B1E40] font-bold text-[17px] mb-0.5">Besoin d'aide ?</h4>
                <p className="text-slate-500 text-[14px]">Notre équipe est à votre écoute pour répondre à toutes vos questions.</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-slate-200"></div>
              <a href="#contact" className="flex items-center gap-2 text-orange-500 font-bold text-[15px] hover:text-orange-600 transition-colors shrink-0 mt-4 sm:mt-0">
                Nous contacter
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          {/* Right Column: Image with specific border radius and accents */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-[600px] aspect-[4/5] mx-auto lg:ml-auto lg:mr-0 mt-10 lg:mt-0"
          >
            {/* Top-left Orange decorative curve border */}
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 rounded-tl-[8.5rem] border-t-[4px] border-l-[4px] border-orange-500 z-0"></div>

            {/* Top-left dots pattern */}
            <div className="absolute -left-12 top-20 w-32 h-32 bg-[radial-gradient(circle,#082f82_2.5px,transparent_2.5px)] bg-[size:16px_16px] opacity-20 -z-10"></div>
            
            {/* Bottom-right dots pattern */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[radial-gradient(circle,#082f82_2.5px,transparent_2.5px)] bg-[size:16px_16px] opacity-20 z-0"></div>

            {/* Dark Blue shape bottom left */}
            <div className="absolute -bottom-10 -left-6 w-[60%] h-48 bg-[#0B1E40] rounded-tl-[4rem] rounded-bl-[1rem] rounded-br-[4rem] rounded-tr-[1rem] -z-10 transform -rotate-[15deg]"></div>

            {/* Image Wrapper */}
            <div className="w-full h-full relative z-10 rounded-[1.5rem] rounded-tl-[8rem] rounded-br-[1.5rem] overflow-hidden shadow-2xl bg-white">
              <img 
                src="/Images/herosection1.png" 
                alt="Étudiante" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
