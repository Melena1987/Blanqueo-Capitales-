import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-corporate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Shield className="h-6 w-6" />
              <span className="font-bold text-xl font-serif">Blanqueo Capitales</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Plataforma dedicada a la gestión transparente y segura de documentación financiera y legal. Comprometidos con la privacidad y la seguridad de sus datos.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Seguridad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>soporte@blanqueocapitales.app</li>
              <li>+34 900 000 000</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Blanqueo Capitales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};