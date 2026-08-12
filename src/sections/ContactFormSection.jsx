import React, { useState } from 'react';
import { User, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const MoroccoFlag = () => (
  <svg className="w-6 h-4 rounded-sm object-cover shadow-[0_0_2px_rgba(0,0,0,0.2)]" viewBox="0 0 900 600">
    <rect width="900" height="600" fill="#c1272d"/>
    <path fill="none" stroke="#006233" strokeWidth="25" d="M450 142.5 540 420 304 248.5h292L360 420z"/>
  </svg>
);

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle phone input strictly
  const handlePhoneChange = (e) => {
    // Replace anything that is not a digit
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 9) {
      setFormData(prev => ({ ...prev, phone: value }));
    }
  };

  // Handle name input to strictly prevent numbers
  const handleNameChange = (e) => {
    // Replace any digits
    const { name, value } = e.target;
    const cleanValue = value.replace(/[0-9]/g, '');
    setFormData(prev => ({ ...prev, [name]: cleanValue }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-10 lg:py-16 bg-white relative overflow-hidden" id="contact-form">
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-esoa-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1480px] mx-auto px-6 lg:px-14 xl:px-20 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-orange-400"></div>
            <span className="text-orange-500 font-bold uppercase tracking-wider text-[16px]">
              Gardons le contact
            </span>
            <div className="h-px w-10 bg-orange-400"></div>
          </div>
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-[#0B1E40] leading-[1.1] mb-6 tracking-tight">
            Laissez-nous un <span className="relative inline-block text-blue-600">
              message
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            Vous avez des questions sur nos formations ou notre école ? Remplissez ce formulaire et notre équipe vous recontactera rapidement.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-slate-100">
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0B1E40] mb-3">Message envoyé avec succès !</h3>
                <p className="text-slate-500 text-lg">Nous avons bien reçu votre demande. Notre équipe vous répondra dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Prénom Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Prénom <span className="text-orange-500">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" strokeWidth={2} />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleNameChange}
                        required
                        pattern="[A-Za-zÀ-ÿ\s\-]+"
                        title="Veuillez utiliser uniquement des lettres."
                        placeholder="Ex: Mohamed"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Nom Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Nom <span className="text-orange-500">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" strokeWidth={2} />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleNameChange}
                        required
                        pattern="[A-Za-zÀ-ÿ\s\-]+"
                        title="Veuillez utiliser uniquement des lettres."
                        placeholder="Ex: Alami"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Numéro de téléphone <span className="text-orange-500">*</span></label>
                    <div className="relative group flex bg-slate-50 border border-slate-200 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-300 overflow-hidden">
                      {/* Country Prefix & Flag */}
                      <div className="flex items-center gap-2 pl-4 pr-3 py-3.5 bg-slate-100 border-r border-slate-200 shrink-0">
                        <MoroccoFlag />
                        <span className="font-semibold text-slate-700 text-sm">+212</span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                        pattern="[0-9]{9}"
                        maxLength="9"
                        title="Veuillez entrer 9 chiffres (ex: 612345678)"
                        placeholder="6 XX XX XX XX"
                        className="w-full pl-3 pr-4 py-3.5 bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Adresse Email <span className="text-orange-500">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" strokeWidth={2} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre.email@exemple.com"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Votre Message <span className="text-orange-500">*</span></label>
                  <div className="relative group">
                    <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" strokeWidth={2} />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex justify-center sm:justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-esoa-orange text-white font-bold text-lg py-4 px-10 rounded-2xl hover:bg-[#e06612] transition-all duration-300 shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                  >
                    {/* Hover effect background */}
                    <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                    
                    <span className="relative z-10">
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </span>
                  </button>
                </div>

              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactFormSection;
