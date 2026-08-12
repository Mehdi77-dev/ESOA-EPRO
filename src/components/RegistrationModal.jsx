import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';

const MoroccoFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm object-cover shadow-[0_0_2px_rgba(0,0,0,0.2)]" viewBox="0 0 900 600">
    <rect width="900" height="600" fill="#c1272d"/>
    <path fill="none" stroke="#006233" strokeWidth="25" d="M450 142.5 540 420 304 248.5h292L360 420z"/>
  </svg>
);

const RegistrationModal = () => {
  const { isOpen, closeRegistration } = useRegistration();

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    diplome: '',
    filiere: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Nom & Prénom: only letters and spaces
    const nameRegex = /^[A-Za-zÀ-ÿ\s\-]+$/;
    if (!formData.nom) newErrors.nom = "Le nom est requis.";
    else if (!nameRegex.test(formData.nom)) newErrors.nom = "Le nom ne doit contenir que des lettres.";
    
    if (!formData.prenom) newErrors.prenom = "Le prénom est requis.";
    else if (!nameRegex.test(formData.prenom)) newErrors.prenom = "Le prénom ne doit contenir que des lettres.";

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "L'email est requis.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Format d'email invalide.";

    // Moroccan Phone (+212 format, requires 9 digits)
    const phoneRegex = /^[0-9]{9}$/;
    if (!formData.telephone) newErrors.telephone = "Le numéro est requis.";
    else if (!phoneRegex.test(formData.telephone)) newErrors.telephone = "Veuillez entrer 9 chiffres valides (ex: 612345678).";

    // Diplôme
    if (!formData.diplome) newErrors.diplome = "Le dernier diplôme est requis.";

    // Filière
    if (!formData.filiere) newErrors.filiere = "Veuillez choisir une filière.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-clean inputs for names and phone if possible, or just let validateForm catch it
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 9) {
      setFormData(prev => ({ ...prev, telephone: value }));
      if (errors.telephone) setErrors(prev => ({ ...prev, telephone: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const payload = {
          nom: formData.nom,
          prenom: formData.prenom,
          filiere: formData.filiere,
          diplome: formData.diplome,
          email: formData.email,
          telephone: formData.telephone
        };

        const isProd = import.meta.env.PROD;
        const API_URL = import.meta.env.VITE_API_URL || (isProd ? '' : 'http://localhost:5001');
        
        const response = await fetch(`${API_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.success) {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
            setFormData({ nom: '', prenom: '', email: '', telephone: '', diplome: '', filiere: '' });
            closeRegistration();
          }, 3500);
        } else {
          console.error("Erreur Backend:", result);
          alert("Une erreur s'est produite lors de l'envoi de la demande: " + (result.message || "Erreur inconnue"));
        }
      } catch (error) {
        console.error("Erreur de connexion:", error);
        alert("Impossible de joindre le serveur. Assurez-vous que le backend est lancé.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeRegistration}
          className="absolute inset-0 bg-[#0B1E40]/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between shrink-0">
            <div>
              <h2 className="text-2xl font-bold text-[#0B1E40]">Inscription en ligne</h2>
              <p className="text-slate-500 text-sm mt-1">Remplissez le formulaire pour déposer votre candidature.</p>
            </div>
            <button 
              onClick={closeRegistration}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 overflow-y-auto">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1E40] mb-3">Inscription réussie !</h3>
                <p className="text-slate-500 text-lg">Votre demande a bien été envoyée. Notre équipe vous contactera très prochainement.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Noms */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Prénom <span className="text-orange-500">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                      </div>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        placeholder="Votre prénom"
                        className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.prenom ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'}`}
                      />
                    </div>
                    {errors.prenom && <p className="text-red-500 text-xs ml-1">{errors.prenom}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Nom <span className="text-orange-500">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                      </div>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.nom ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'}`}
                      />
                    </div>
                    {errors.nom && <p className="text-red-500 text-xs ml-1">{errors.nom}</p>}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email <span className="text-orange-500">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.com"
                        className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'}`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Numéro de téléphone <span className="text-orange-500">*</span></label>
                    <div className={`relative group flex bg-slate-50 border rounded-xl focus-within:ring-2 transition-all overflow-hidden ${errors.telephone ? 'border-red-300 focus-within:ring-red-500/20 focus-within:border-red-500' : 'border-slate-200 focus-within:ring-blue-500/20 focus-within:border-blue-500'}`}>
                      <div className="flex items-center gap-2 pl-4 pr-3 py-3 bg-slate-100 border-r border-slate-200 shrink-0">
                        <MoroccoFlag />
                        <span className="font-semibold text-slate-700 text-sm">+212</span>
                      </div>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handlePhoneChange}
                        placeholder="6 XX XX XX XX"
                        className="w-full pl-3 pr-4 py-3 bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    {errors.telephone && <p className="text-red-500 text-xs ml-1">{errors.telephone}</p>}
                  </div>
                </div>

                {/* Diplôme & Filière */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Dernier diplôme obtenu <span className="text-orange-500">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <GraduationCap className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                      </div>
                      <select
                        name="diplome"
                        value={formData.diplome}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 focus:outline-none focus:ring-2 transition-all appearance-none ${errors.diplome ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'}`}
                      >
                        <option value="" disabled>Sélectionnez votre diplôme</option>
                        <option value="Baccalauréat">Baccalauréat</option>
                        <option value="Bac+2">Bac +2</option>
                        <option value="Licence (Bac+3)">Licence (Bac +3)</option>
                        <option value="Master (Bac+5)">Master (Bac +5)</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    {errors.diplome && <p className="text-red-500 text-xs ml-1">{errors.diplome}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Filière souhaitée <span className="text-orange-500">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <BookOpen className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                      </div>
                      <select
                        name="filiere"
                        value={formData.filiere}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-800 focus:outline-none focus:ring-2 transition-all appearance-none ${errors.filiere ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'}`}
                      >
                        <option value="" disabled>Choisissez une filière</option>
                        <option value="Optique">Optique - Lunetterie</option>
                        <option value="Orthoptie">Orthoptie</option>
                        <option value="Audioprothèse">Audioprothèse</option>
                        <option value="Orthophonie">Orthophonie</option>
                      </select>
                    </div>
                    {errors.filiere && <p className="text-red-500 text-xs ml-1">{errors.filiere}</p>}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    type="button"
                    onClick={closeRegistration}
                    className="mr-4 px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-esoa-orange text-white font-bold py-3 px-8 rounded-xl hover:bg-[#e06612] transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RegistrationModal;
