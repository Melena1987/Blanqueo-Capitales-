import React from 'react';
import { FileText, Lock, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="inicio" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
          Sistema de Recepción Activo
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-900 tracking-tight mb-6">
          Gestión Segura de <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-900 to-emerald-600">
            Documentación Confidencial
          </span>
        </h2>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
          Complete el formulario a continuación para remitir la información requerida de forma segura y encriptada. Cumplimos con los más altos estándares de privacidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 text-left">
          <FeatureCard 
            icon={<Lock className="h-6 w-6 text-emerald-600" />}
            title="Encriptación Extremo a Extremo"
            description="Sus datos viajan seguros mediante protocolos SSL/TLS de última generación."
          />
          <FeatureCard 
            icon={<FileText className="h-6 w-6 text-emerald-600" />}
            title="Subida de Archivos"
            description="Adjunte documentación soporte directamente en nuestra plataforma."
          />
          <FeatureCard 
            icon={<Clock className="h-6 w-6 text-emerald-600" />}
            title="Procesamiento Inmediato"
            description="Su solicitud entra en cola de revisión tan pronto es recibida."
          />
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-slate-900 text-lg mb-2">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
  </div>
);