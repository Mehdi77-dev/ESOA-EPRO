import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import WhyChooseUs from '../sections/WhyChooseUs';
import ExcellenceSection from '../sections/ExcellenceSection';
import Formations from '../sections/Formations';
import PracticalExperience from '../sections/PracticalExperience';
import AdmissionsProcess from '../sections/AdmissionsProcess';
import CtaFinal from '../sections/CtaFinal';
import FaqSection from '../sections/FaqSection';
import ContactFormSection from '../sections/ContactFormSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <ExcellenceSection />
        <Formations />
        <PracticalExperience />
        <AdmissionsProcess />
        <CtaFinal />
        <FaqSection />
        <ContactFormSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
