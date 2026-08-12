import React from 'react';
import { Shield, Target, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const ExcellenceSection = () => {
  return (
    <section className="bg-white pt-4 lg:pt-8 pb-10 lg:pb-16 px-4" id="excellence">
      {/* Container Principal */}
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Partie Haute */}
        <div className="flex flex-col lg:flex-row relative items-center gap-10 lg:gap-16">
          
          {/* Colonne de Gauche (Le Texte) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[50%] py-10 flex flex-col justify-center relative z-20 bg-white"
          >
            
            {/* Titre H2 */}
            <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-[#0B1E40] leading-[1.1] mb-8 tracking-tight">
              Une formation de<br />
              qualité,<br />
              une <span className="relative inline-block text-blue-600">
                excellence
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span><br />
              accréditée<br />
              par l'État
            </h2>
            
            {/* Paragraphes */}
            <p className="text-slate-600 leading-relaxed text-[1.05rem] mb-6 pr-4">
              ESOA-EPRO est fière d'être parmi les écoles proposant le plus grand nombre de filières dans le domaine paramédical au Maroc. Forts d'une expérience de plus de 27 ans, nous vous offrons une formation d'une qualité inégalée.
            </p>
            <p className="text-slate-600 leading-relaxed text-[1.05rem] mb-8 pr-4">
              Le savoir-faire, la patience et la passion de notre direction pédagogique, associés à la rigueur de notre corps enseignant, sont les valeurs profondes qui garantissent votre réussite.
            </p>
            
            {/* Boîte de mise en avant */}
            <div className="bg-[#f4f7fc] rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden mr-4">
              {/* Ligne bleue verticale à gauche */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
              
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 ml-2 shadow-sm border border-slate-200 bg-white">
                <img src="/Icon/iconesoaepro.jpg" alt="Logo ESOA-EPRO" className="w-full h-full object-cover p-1" />
              </div>
              <p className="text-[0.95rem] text-[#0B1E40] leading-relaxed">
                Pour concrétiser votre projet professionnel dans la pratique paramédicale, <br className="hidden md:block" />
                <span className="font-bold text-blue-700">ESOA-EPRO</span> est votre choix le plus judicieux.
              </p>
            </div>
            
          </motion.div>
          
          {/* Colonne de Droite (La Carte Blanche) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[50%] flex justify-center"
          >
            
            {/* La Carte Blanche */}
            <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] p-10 max-w-[500px] w-full border border-slate-50 flex flex-col items-center">
              
              {/* Image Accréditation */}
              <div className="w-[300px] h-[300px] flex items-center justify-center mb-6">
                <img 
                  src="/Images/accreditation.png" 
                  alt="Accréditation par l'État" 
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Ligne Séparatrice */}
              <div className="w-[80%] h-px bg-orange-300 mb-8"></div>
              
              {/* Contenu Bas de Carte */}
              <div className="flex items-start gap-5 w-full">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-bold text-[#0B1E40] mb-2 leading-tight">
                    Établissement accrédité<br /> par l'État
                  </h3>
                  <p className="text-slate-500 text-[0.95rem] leading-relaxed">
                    Un gage de qualité, de sérieux et de confiance. Cette certification officielle atteste de l'excellence de nos programmes et garantit la valorisation de votre diplôme sur le marché du travail pour accompagner sereinement votre avenir professionnel.
                  </p>
                </div>
              </div>
              
            </div>
            
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ExcellenceSection;
