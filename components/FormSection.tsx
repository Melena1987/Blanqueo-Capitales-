import React, { useState } from 'react';
import { ExternalLink, Loader2, AlertCircle } from 'lucide-react';

export const FormSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Nota: Los enlaces 'forms.gle' suelen bloquearse en iframes debido a redirecciones y X-Frame-Options.
  // Para iframes, lo ideal es usar el enlace largo: https://docs.google.com/forms/d/e/.../viewform?embedded=true
  const formUrl = "https://forms.gle/vCkYiBc3jubuSuU58";

  return (
    <section id="formulario" className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-corporate-900">Formulario de Registro</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Por favor, complete todos los campos requeridos.
          </p>
        </div>

        {/* Warning Banner for File Upload Forms */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-start gap-3 max-w-3xl mx-auto">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
                <p className="font-semibold mb-1">Importante sobre la subida de archivos</p>
                <p>Google Forms requiere iniciar sesión para subir archivos. Si el formulario no carga correctamente abajo, es obligatorio usar el botón azul para abrirlo en una ventana segura.</p>
            </div>
        </div>

        <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200 relative min-h-[600px]">
            {/* Loading Indicator */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-slate-50">
                    <Loader2 className="h-10 w-10 text-emerald-600 animate-spin mb-4" />
                    <p className="text-slate-600 font-medium">Conectando con servidor seguro...</p>
                </div>
            )}

            {/* Direct Link Header - Always Visible */}
            <div className="bg-slate-100 border-b border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-slate-600 text-sm font-medium hidden sm:block">
                    ¿Problemas de visualización?
                </span>
                <a 
                    href={formUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow-md"
                >
                    <ExternalLink className="h-4 w-4" />
                    Abrir Formulario en Pantalla Completa
                </a>
            </div>

            {/* Google Form Iframe */}
            <iframe 
                src={formUrl} 
                className="w-full h-[1200px] border-0" 
                title="Formulario de Blanqueo de Capitales"
                onLoad={() => setIsLoading(false)}
                allow="autoplay"
            >
                Cargando...
            </iframe>
        </div>
      </div>
    </section>
  );
};