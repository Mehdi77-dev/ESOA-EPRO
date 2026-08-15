import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Formations from './pages/Formations';
import Ecole from './pages/Ecole';
import Pedagogie from './pages/Pedagogie';
import Equipements from './pages/Equipements';
import VieEtudiante from './pages/VieEtudiante';
import NousTrouver from './pages/NousTrouver';
import Contact from './pages/Contact';
import Inscription from './pages/Inscription';
import FloatingSocialBar from './components/FloatingSocialBar';
import ScrollToTopButton from './components/ScrollToTopButton';
import { RegistrationProvider } from './context/RegistrationContext';
import RegistrationModal from './components/RegistrationModal';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <RegistrationProvider>
      <div className="overflow-x-hidden w-full min-h-screen relative flex flex-col">
        <Router>
          <ScrollToTop />
          <FloatingSocialBar />
          <ScrollToTopButton />
          <RegistrationModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/ecole" element={<Ecole />} />
            <Route path="/ecole/pedagogie" element={<Pedagogie />} />
            <Route path="/ecole/equipements" element={<Equipements />} />
            <Route path="/ecole/vie-etudiante" element={<VieEtudiante />} />
            <Route path="/nous-trouver" element={<NousTrouver />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inscription" element={<Inscription />} />
          </Routes>
        </Router>
      </div>
    </RegistrationProvider>
  );
}

export default App;
