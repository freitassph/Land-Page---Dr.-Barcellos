import React from 'react';
import { WA_LINK } from '../utils/constants';

const CTA: React.FC = () => {
  return (
    <section id="agendamento" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Texture - Lighter on mobile */}
      <div className="absolute inset-0 opacity-[0.02] lg:opacity-[0.03] bg-[radial-gradient(#1B263B_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-med-navy mb-6 lg:mb-8 leading-tight">
          O cuidado começa <br/>
          <span className="italic text-med-sage">no primeiro contato.</span>
        </h2>
        
        <div className="w-[1px] h-12 lg:h-16 bg-med-navy/10 mx-auto mb-6 lg:mb-8"></div>

        <p className="text-med-stone font-light text-base lg:text-lg mb-10 lg:mb-12 max-w-xl mx-auto leading-relaxed text-center text-balance">
          Permita-nos acolher sua família com a atenção que ela merece. 
          Agende sua avaliação através do nosso canal exclusivo.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center group cursor-pointer"
        >
          {/* Updated to Solid Navy Button to match Hero and Header */}
          <span className="px-10 py-4 bg-med-navy text-white text-[10px] lg:text-[11px] uppercase tracking-widest font-semibold hover:bg-med-sage shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-500 min-w-[240px] active:scale-95">
            Agendar Avaliação
          </span>
        </a>
        
        <p className="mt-8 text-[9px] lg:text-[10px] text-med-stone/50 uppercase tracking-widest">
          Atendimento em São José de Ubá - RJ
        </p>

      </div>
    </section>
  );
};

export default CTA;