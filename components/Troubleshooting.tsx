import React from 'react';

const Troubleshooting: React.FC = () => {
  return (
    <div className="bg-emerald-50 border-2 border-emerald-500 p-8 rounded-3xl mb-10">
      <div className="bg-emerald-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4">
        Solución de Problemas
      </div>
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
        <i className="fas fa-life-ring"></i> "Si algo sale diferente…"
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border-l-4 border-amber-500 p-5 rounded-xl shadow-sm">
          <h3 className="text-amber-800 font-bold mb-2 flex items-start gap-2">
             <i className="fas fa-question-circle mt-1"></i> Si la imagen no coincide con lo que escribiste:
          </h3>
          <p className="text-amber-900">Vuelve a leer el PDF para encontrar el párrafo correcto que explica esa imagen.</p>
        </div>

        <div className="bg-white border-l-4 border-amber-500 p-5 rounded-xl shadow-sm">
          <h3 className="text-amber-800 font-bold mb-2 flex items-start gap-2">
            <i className="fas fa-text-width mt-1"></i> Si el texto no cabe en 5 líneas:
          </h3>
          <p className="text-amber-900">Reduce el tamaño de la letra a <strong>18</strong> o borra palabras que no sean necesarias.</p>
        </div>
      </div>
    </div>
  );
};

export default Troubleshooting;