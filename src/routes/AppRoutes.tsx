import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/Aboutme';
import Projects from '../pages/Projects';
import Contact from '../pages/Contacto';
import LibreriaOnline from '../pages/LibreriaOnline';
import GeaOficialBand from '../pages/GeaOficialBand';
import NotFound from '../pages/NotFound';
import Footer from '../components/Footer';
import AuthServicePage from '../pages/AuthServicePage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/libreria-online" element={<LibreriaOnline />} />
            <Route path="/gea-oficial-band" element={<GeaOficialBand />} />
            <Route path="/auth-service" element={<AuthServicePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;