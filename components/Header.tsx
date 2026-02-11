import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden text-center py-16 px-5 bg-gradient-to-br from-indigo-600 to-violet-500 rounded-[30px] text-white mb-10 shadow-lg">
      {/* Animated Grid Background */}
      <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] pointer-events-none animate-grid"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }}>
      </div>

      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
          📢 Reto de Aplicación: Reconstrucción de Historia Técnica
        </h1>
        <p className="text-lg md:text-xl font-light opacity-90">
          El Pulso de la Ciudad - Silicio y Supervivencia
        </p>
      </div>
    </header>
  );
};

export default Header;