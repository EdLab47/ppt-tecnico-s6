import React from 'react';

const Troubleshooting: React.FC = () => {
  return (
    <div className="bg-emerald-50 border-2 border-emerald-500 p-8 rounded-3xl mb-10">
      <div className="bg-emerald-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4">
        Solución de Problemas
      </div>
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
        <i className="fas fa-tools"></i> "Si algo sale diferente..."
      </h2>
      
      <div className="space-y-4">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-xl">
          <h3 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
             ❓ Si no sabes qué poner en el renglón 5:
          </h3>
          <p className="text-amber-900">Escribe algo como: <strong>"Este paso es necesario para que la ciudad tenga luz nuevamente"</strong>.</p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-xl">
          <h3 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
            ❓ Si te sobran palabras y te pasas de 5 líneas:
          </h3>
          <p className="text-amber-900">Borra palabras pequeñas como <strong>"entonces"</strong>, <strong>"luego"</strong> o <strong>"también"</strong>.</p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-xl">
          <h3 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
            ❓ Si el texto se sale de la diapositiva:
          </h3>
          <p className="text-amber-900">Haz el cuadro de texto <strong>más ancho hacia los lados</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default Troubleshooting;