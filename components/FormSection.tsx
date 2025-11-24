import React, { useState } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';

export const FormSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const formUrl = "https://forms.gle/vCkYiBc3jubuSuU58";

  return (
    <section id="formulario" className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-corporate-900">Formulario de Registro</h3>
          <p className="mt-4 text-slate-600">
            Por favor, complete todos los campos requeridos. Si tiene problemas para visualizar el formulario, utilice el botón de acceso directo.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200 relative min-h-[800px]">
            {/* Loading Indicator */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-slate-50/80 backdrop-blur-sm">
                    <Loader2 className="h-10 w-10 text-emerald-600 animate-spin mb-4" />
                    <p className="text-slate-600 font-medium">Cargando formulario seguro...</p>
                </div>
            )}

            {/* Direct Link Banner (Always visible in case iframe is blocked by browser policies) */}
            <div className="bg-blue-50 border-b border-blue-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-blue-800 text-sm">
                    <span className="font-semibold">Nota:</span>
                    <span>Si el formulario requiere inicio de sesión de Google, es posible que deba abrirlo en una nueva ventana.</span>
                </div>
                <a 
                    href={formUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                >
                    <ExternalLink className="h-4 w-4" />
                    Abrir en nueva ventana
                </a>
            </div>

            {/* Google Form Iframe */}
            <iframe 
                src={formUrl} 
                className="w-full h-[1400px] border-0" 
                title="Formulario de Blanqueo de Capitales"
                onLoad={() => setIsLoading(false)}
            >
                Cargando...
            </iframe>
        </div>
      </div>
    </section>
  );
};