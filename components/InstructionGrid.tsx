import React from 'react';

const InstructionGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      
      {/* 1. Preparación de Materiales */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
        <i className="fas fa-download text-3xl text-indigo-600 mb-5 block"></i>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">1️⃣ Preparación de Materiales</h2>
        <ol className="list-decimal list-inside text-slate-600 space-y-3">
          <li>Descarga el archivo de lectura <strong>"El Pulso de la Ciudad.pdf"</strong>.</li>
          <li>Descarga el archivo de imágenes <strong>"Silicio_y_Supervivencia"</strong>.</li>
          <li className="font-semibold text-indigo-700 bg-indigo-50 p-2 rounded">
            Lectura obligatoria: Lee la historia completa. Sin leerla, no podrás completar los desafíos.
          </li>
        </ol>
      </div>

      {/* 2. Formato de Diseño */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
        <i className="fas fa-text-height text-3xl text-violet-500 mb-5 block"></i>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">2️⃣ Formato de Diseño Obligatorio</h2>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li><strong>Tipo de letra:</strong> Comic Sans MS.</li>
          <li><strong>Tamaño de letra:</strong> 18 o 20 puntos para tus explicaciones.</li>
        </ul>
      </div>

      {/* 3. El Proceso de Trabajo */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 md:col-span-2 hover:-translate-y-1 transition-transform duration-300">
        <i className="fas fa-project-diagram text-3xl text-emerald-500 mb-5 block"></i>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">3️⃣ El Proceso de Trabajo (La Conexión de Evidencias)</h2>
        
        <div className="bg-slate-50 p-4 rounded-xl my-4 border-l-4 border-indigo-600">
          <strong className="text-indigo-600 block mb-2"><i className="fas fa-file-powerpoint mr-2"></i> Diapositiva 1 (Portada):</strong>
          <p className="text-slate-600 mb-2">Debe ir <strong>limpia y sin imágenes</strong>. Escribe:</p>
          <ul className="list-disc list-inside ml-5 text-slate-600 grid grid-cols-1 md:grid-cols-2 gap-1">
            <li>Escuela</li>
            <li>Materia</li>
            <li>Título del trabajo</li>
            <li>Tu nombre completo</li>
            <li>Grado</li>
            <li>Grupo</li>
            <li>Fecha</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl my-4 border-l-4 border-indigo-600">
          <strong className="text-indigo-600 text-lg block mb-2"><i className="fas fa-link mr-2"></i> Cuerpo del Trabajo (Unir Imagen con Historia):</strong>
          <p className="text-slate-600 mb-4">
            Para cada imagen que insertes, debes buscar en el PDF el <strong>momento exacto</strong> donde se cuenta lo que pasa en esa foto. Tu texto y tu imagen deben decir lo mismo.
          </p>
          
          <div className="bg-white p-6 rounded-xl border-2 border-emerald-500 shadow-sm">
            <h3 className="text-emerald-600 font-bold mb-4 flex items-center gap-2 text-lg">
                <i className="fas fa-list-ol"></i> Llena exactamente estos 5 renglones con tus palabras:
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-emerald-50 rounded-lg text-emerald-900 border border-emerald-100">
                <strong className="block text-emerald-700">🎬 Renglón 1 (La Acción):</strong>
                <span>¿Qué está pasando en esta parte de la historia que coincida con la imagen?</span>
              </div>
              
              <div className="p-3 bg-blue-50 rounded-lg text-blue-900 border border-blue-100">
                <strong className="block text-blue-700">🔌 Renglón 2 (El Objeto):</strong>
                <span>¿Qué aparato o componente electrónico aparece en la foto?</span>
              </div>
              
              <div className="p-3 bg-amber-50 rounded-lg text-amber-900 border border-amber-100">
                <strong className="block text-amber-700">⚠️ Renglón 3 (La Falla):</strong>
                <span>Según la lectura de esa parte, ¿qué problema tiene ese aparato?</span>
              </div>
              
              <div className="p-3 bg-purple-50 rounded-lg text-purple-900 border border-purple-100">
                <strong className="block text-purple-700">🛠️ Renglón 4 (La Solución):</strong>
                <span>¿Qué herramienta o técnica usaron para arreglarlo?</span>
              </div>
              
              <div className="p-3 bg-pink-50 rounded-lg text-pink-900 border border-pink-100">
                <strong className="block text-pink-700">🏙️ Renglón 5 (El Resultado):</strong>
                <span>¿Cómo ayuda este arreglo a la ciudad?</span>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border-2 border-red-500 p-4 rounded-xl mt-6 flex items-start gap-3">
            <i className="fas fa-ban text-red-600 text-xl mt-1"></i>
            <div>
                <strong className="text-red-700 block">REGLA DE ORO (Prohibido copiar):</strong>
                <p className="text-red-800">No puedes copiar frases del PDF. Úsalo para informarte, pero escribe tú la explicación.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Estándar de Calidad */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 md:col-span-2 hover:-translate-y-1 transition-transform duration-300">
        <i className="fas fa-award text-3xl text-amber-500 mb-5 block"></i>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">4️⃣ Estándar de Calidad</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border-t-4 border-indigo-600 shadow-sm">
                <strong className="text-indigo-600 block mb-2 text-lg">✓ Coherencia</strong>
                <p className="text-slate-600">¿Tu texto explica realmente lo que se ve en la imagen?</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border-t-4 border-indigo-600 shadow-sm">
                <strong className="text-indigo-600 block mb-2 text-lg">✓ Ortografía</strong>
                <p className="text-slate-600">Usa el corrector (línea roja) haciendo clic derecho.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border-t-4 border-indigo-600 shadow-sm">
                <strong className="text-indigo-600 block mb-2 text-lg">✓ Puntuación</strong>
                <p className="text-slate-600">Inicia con Mayúscula y termina con punto.</p>
            </div>
        </div>
      </div>

      {/* 5. Guardado Final */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
        <i className="fas fa-save text-3xl text-indigo-600 mb-5 block"></i>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">5️⃣ Guardado Final</h2>
        <p className="text-slate-600 mb-2">Nombra tu archivo:</p>
        <code className="block bg-slate-800 text-emerald-400 p-3 rounded-lg mb-4 font-mono text-sm break-all">
          Historia_Tecnica_TuNombre_Grado_Grupo
        </code>
        <p className="text-slate-600">Guárdalo en la carpeta <strong>Tareas</strong>.</p>
      </div>

    </div>
  );
};

export default InstructionGrid;