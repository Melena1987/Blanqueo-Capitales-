import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-corporate-900 p-2 rounded-lg">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <h1 className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-corporate-900' : 'text-corporate-900'}`}>
            Blanqueo Capitales
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-corporate-900 transition-colors">Inicio</a>
          <a href="#formulario" className="text-sm font-medium text-slate-600 hover:text-corporate-900 transition-colors">Formulario</a>
          <a href="#contacto" className="text-sm font-medium text-slate-600 hover:text-corporate-900 transition-colors">Ayuda</a>
        </nav>
      </div>
    </header>
  );
};