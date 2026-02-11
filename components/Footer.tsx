import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString('es-ES', options));
  }, []);

  return (
    <footer className="text-center py-10 text-slate-400 text-sm border-t border-slate-200">
      <p className="font-semibold text-indigo-600 mb-2">Diseño Instruccional para Secundaria - Taller de Tecnología</p>
      <p>{currentDate}</p>
      <p className="mt-4 text-xs opacity-80">💡 ¿Tienes dudas? Consulta con tu profesor</p>
    </footer>
  );
};

export default Footer;