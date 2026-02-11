import React from 'react';

const ObjectiveBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-2xl text-white mb-10 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <i className="fas fa-bullseye"></i> Objetivo
      </h2>
      <div className="space-y-3 text-lg leading-relaxed">
        <p>
          <strong>Aprenderás a conectar imágenes con información escrita</strong> para crear un reporte técnico profesional en PowerPoint, usando tus propias palabras.
        </p>
        <div className="bg-white/10 p-4 rounded-xl mt-4 border-l-4 border-white">
            <p>
            <strong>Relación con el Taller:</strong> Analizarás cómo los sistemas electrónicos y el control técnico son la clave para resolver problemas en una ciudad moderna.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveBanner;