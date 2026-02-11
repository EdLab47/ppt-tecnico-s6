import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg text-center mb-10">
      <p className="text-lg font-bold text-slate-800 mb-6 flex justify-center items-center gap-2">
        <i className="fas fa-cloud-download-alt"></i> Descarga de Materiales
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a 
          href="https://drive.google.com/file/d/12zPQZYSd0H7gqPUPRSV-yHMCSXSdsKRB/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-red-600 to-red-500 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-red-500/40 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <i className="fas fa-file-pdf"></i> El Pulso de la Ciudad.pdf
        </a>
        <a 
          href="https://drive.google.com/file/d/1_mRqnm0xnR03mBm0sbo8zoOYJlcwLFM_/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-indigo-600 to-violet-500 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <i className="fas fa-images"></i> Silicio_y_Supervivencia (Imágenes)
        </a>
      </div>
    </div>
  );
};

export default DownloadSection;