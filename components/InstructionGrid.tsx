import React from 'react';

const InstructionGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      
      {/* 1. Preparación de Materiales */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
        <i className="fas fa-download text-3xl text-indigo-600 mb-5 block"></i>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">1️⃣ Preparación de Materiales</h2>
        <ol className="list-decimal list-inside text-slate-600 space-y-2">
          <li>Descarga <strong>"El Pulso de la Ciudad.pdf"</strong> (Lectura) y <strong>"Silicio_y_Supervivencia"</strong> (Imágenes).</li>
          <li>Guarda ambos en tu <strong>carpeta de Tareas</strong>.</li>
          <li><strong>Lectura rápida:</strong> Lee la historia para saber qué problema hay en la ciudad.</li>
        </ol>
      </div>

      {/* 2. Formato de Diseño */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
        <i className="fas fa-text-height text-3xl text-violet-500 mb-5 block"></i>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">2️⃣ Formato de Diseño Obligatorio</h2>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li><strong>Tipo de letra:</strong> Comic Sans MS</li>
          <li><strong>Tamaño de letra:</strong> 18 o 20 puntos para todos los textos</li>
        </ul>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
          <strong className="text-amber-800 flex items-center gap-2">
            <i className="fas fa-exclamation-circle"></i> Importante:
          </strong>
          <p className="text-sm text-amber-800 mt-1">Este formato debe mantenerse en TODA la presentación.</p>
        </div>
      </div>

      {/* 3. El Proceso de Trabajo */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 md:col-span-2 hover:-translate-y-1 transition-transform duration-300">
        <i className="fas fa-tasks text-3xl text-emerald-500 mb-5 block"></i>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">3️⃣ El Proceso de Trabajo (Pasos Exactos)</h2>
        
        <div className="bg-slate-50 p-4 rounded-xl my-4 border-l-4 border-indigo-600">
          <strong className="text-indigo-600 block mb-2"><i className="fas fa-file-powerpoint mr-2"></i> Diapositiva 1 (Portada):</strong>
          <p className="text-slate-600 mb-2"><strong>Limpia y sin imágenes</strong>. Escribe:</p>
          <ul className="list-disc list-inside ml-5 text-slate-600">
            <li>Escuela</li>
            <li>Materia</li>
            <li>Título</li>
            <li>Nombre completo</li>
            <li>Grado</li>
            <li>Grupo</li>
            <li>Fecha</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl my-4 border-l-4 border-indigo-600">
          <strong className="text-indigo-600 block mb-2"><i className="fas fa-pen-nib mr-2"></i> Cuerpo del Trabajo (La "Guía de 5 Renglones"):</strong>
          <p className="text-slate-600 mb-4">Para cada imagen, inserta una diapositiva nueva y sigue este orden para tus 5 líneas:</p>
          
          <div className="bg-white p-5 rounded-xl border-2 border-emerald-500">
            <h3 className="text-emerald-500 font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-list-ol"></i> Estructura de los 5 Renglones:
            </h3>
            
            <div className="my-3 p-3 bg-emerald-50 rounded-lg text-emerald-800">
              <strong className="block">📝 Renglón 1:</strong>
              <span className="text-sm">Escribe qué está pasando en esa parte de la historia.</span>
            </div>
            
            <div className="my-3 p-3 bg-blue-50 rounded-lg text-blue-800">
              <strong className="block">⚙️ Renglón 2:</strong>
              <span className="text-sm">Menciona qué aparato o componente electrónico aparece en la imagen.</span>
            </div>
            
            <div className="my-3 p-3 bg-amber-50 rounded-lg text-amber-800">
              <strong className="block">❌ Renglón 3:</strong>
              <span className="text-sm">Explica qué problema tiene ese aparato (según lo que leíste).</span>
            </div>
            
            <div className="my-3 p-3 bg-purple-50 rounded-lg text-purple-800">
              <strong className="block">🔧 Renglón 4:</strong>
              <span className="text-sm">Escribe qué están haciendo los personajes para arreglarlo.</span>
            </div>
            
            <div className="my-3 p-3 bg-pink-50 rounded-lg text-pink-800">
              <strong className="block">💡 Renglón 5:</strong>
              <span className="text-sm">Da una opinión breve sobre por qué es importante ese arreglo.</span>
            </div>
          </div>
          
          <div className="bg-red-50 border-2 border-red-500 p-4 rounded-xl mt-4">
            <strong className="text-red-600 block mb-2">🚫 IMPORTANTE:</strong>
            <p className="text-red-800">No copies frases del PDF. Escríbelo como si se lo explicaras a un amigo.</p>
          </div>
        </div>
      </div>

      {/* 4. Estándar de Calidad */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 md:col-span-2 hover:-translate-y-1 transition-transform duration-300">
        <i className="fas fa-check-double text-3xl text-amber-500 mb-5 block"></i>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">4️⃣ Estándar de Calidad (Criterios de Revisión)</h2>
        
        <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-600">
                <strong className="text-indigo-600 block mb-1">✓ Coherencia:</strong>
                <p className="text-slate-600">Lee tu texto al terminar. ¿Se entiende la historia?</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-600">
                <strong className="text-indigo-600 block mb-1">✓ Ortografía:</strong>
                <p className="text-slate-600">Si una palabra tiene una línea roja abajo, haz clic derecho para corregirla.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-600">
                <strong className="text-indigo-600 block mb-1">✓ Puntuación:</strong>
                <p className="text-slate-600">Empieza con Mayúscula y termina con Punto.</p>
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
        <p className="text-slate-600 mb-2"><strong>Ejemplo:</strong> Historia_Tecnica_JuanPerez_2_A.pptx</p>
        <p className="text-slate-600">Guárdalo en la carpeta <strong>Tareas</strong>.</p>
      </div>

    </div>
  );
};

export default InstructionGrid;