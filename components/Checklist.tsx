import React, { useState, useEffect } from 'react';

const checklistItems = [
  { id: 'check1', label: 'Descargué "El Pulso de la Ciudad.pdf" y las imágenes' },
  { id: 'check2', label: 'Leí la historia completa (Lectura obligatoria)' },
  { id: 'check3', label: 'Configuré Comic Sans MS (18 o 20 pts)' },
  { id: 'check4', label: 'Creé la portada limpia (sin imágenes) con todos los datos' },
  { id: 'check5', label: 'Busqué en el PDF el momento exacto para cada imagen' },
  { id: 'check6', label: 'Renglón 1 (La Acción): ¿Qué está pasando?' },
  { id: 'check7', label: 'Renglón 2 (El Objeto): ¿Qué aparato aparece?' },
  { id: 'check8', label: 'Renglón 3 (La Falla): ¿Qué problema tiene el aparato?' },
  { id: 'check9', label: 'Renglón 4 (La Solución): ¿Qué herramienta usaron?' },
  { id: 'check10', label: 'Renglón 5 (El Resultado): ¿Cómo ayuda a la ciudad?' },
  { id: 'check11', label: 'NO copié frases del PDF (usé mis propias palabras)' },
  { id: 'check12', label: 'Revisé Coherencia, Ortografía y Puntuación' },
  { id: 'check13', label: 'Guardé como: Historia_Tecnica_TuNombre_Grado_Grupo' },
];

const Checklist: React.FC = () => {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});
  const [showToast, setShowToast] = useState(false);
  const [isClosingToast, setIsClosingToast] = useState(false);

  useEffect(() => {
    const loadedState: Record<string, boolean> = {};
    checklistItems.forEach(item => {
      const saved = localStorage.getItem(item.id);
      if (saved === 'true') loadedState[item.id] = true;
    });
    setCheckedState(loadedState);
  }, []);

  const handleCheck = (id: string) => {
    const newState = !checkedState[id];
    const updatedState = { ...checkedState, [id]: newState };
    setCheckedState(updatedState);
    localStorage.setItem(id, String(newState));

    if (newState && Object.values(updatedState).filter(Boolean).length === checklistItems.length) {
      setShowToast(true);
      setIsClosingToast(false);
      setTimeout(() => {
        setIsClosingToast(true);
        setTimeout(() => setShowToast(false), 500);
      }, 3000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg mb-10">
      <h3 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
        <i className="fas fa-clipboard-check"></i> Lista de Verificación de la Misión
      </h3>
      <div className="space-y-3">
        {checklistItems.map(item => (
          <div 
            key={item.id} 
            className={`flex items-start p-4 rounded-xl transition-all duration-300 ${
              checkedState[item.id] ? 'bg-indigo-50 translate-x-1' : 'bg-slate-50 hover:bg-slate-100 hover:translate-x-1'
            }`}
          >
            <input
              type="checkbox"
              id={item.id}
              checked={!!checkedState[item.id]}
              onChange={() => handleCheck(item.id)}
              className="mt-1 w-5 h-5 accent-indigo-600 cursor-pointer flex-shrink-0"
            />
            <label 
              htmlFor={item.id} 
              className={`ml-4 cursor-pointer flex-1 select-none ${
                checkedState[item.id] ? 'line-through opacity-60 text-indigo-800' : 'text-slate-700'
              }`}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>

      {showToast && (
        <div className={`fixed top-5 right-5 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-8 py-5 rounded-xl shadow-2xl font-bold z-50 flex items-center gap-3 ${isClosingToast ? 'toast-slide-out' : 'toast-slide-in'}`}>
          <i className="fas fa-check-circle text-2xl"></i>
          ¡Misión Cumplida! Has completado todos los pasos
        </div>
      )}
    </div>
  );
};

export default Checklist;