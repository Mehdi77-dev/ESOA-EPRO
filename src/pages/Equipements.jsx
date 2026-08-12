import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Equipements = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow pt-[140px] lg:pt-[150px]">
        {/* Content will be implemented later */}
      </main>
      <Footer />
    </div>
  );
};

export default Equipements;
