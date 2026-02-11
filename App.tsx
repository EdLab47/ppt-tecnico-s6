import React from 'react';
import Header from './components/Header';
import ObjectiveBanner from './components/ObjectiveBanner';
import InstructionGrid from './components/InstructionGrid';
import DownloadSection from './components/DownloadSection';
import Checklist from './components/Checklist';
import Troubleshooting from './components/Troubleshooting';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen p-5 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <Header />
        
        <ObjectiveBanner />
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-600 flex items-center justify-center gap-3">
            <i className="fas fa-cogs"></i>
            ESPECIFICACIONES TÉCNICAS (ORDEN DE TRABAJO)
          </h2>
        </div>

        <InstructionGrid />
        
        <DownloadSection />
        
        <Checklist />
        
        <Troubleshooting />
        
        <Footer />
      </div>
    </div>
  );
}