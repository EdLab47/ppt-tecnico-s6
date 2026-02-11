import React from 'react';

const ObjectiveBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-2xl text-white mb-10 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <i className="fas fa-bullseye"></i> Objetivo de la Actividad
      </h2>
      <div className="space-y-3 text-lg leading-relaxed">
        <p>
          <strong>Aplicarás tus conocimientos de PowerPoint</strong> para convertir una historia escrita en un reporte visual, usando tus propias palabras para describir el uso de la tecnología.
        </p>
        <p>
          <strong>Relación con el Taller:</strong> Analizarás cómo los sistemas electrónicos y el control técnico son la clave para resolver problemas en una ciudad moderna.
        </p>
      </div>
    </div>
  );
};

export default ObjectiveBanner;