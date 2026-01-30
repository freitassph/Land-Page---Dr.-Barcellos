import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('agendamento');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-med-offwhite pt-32 pb-12 lg:py-24 xl:py-0 overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-white/60 to-transparent pointer-events-none" />
      
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 w-full relative z-10 grid lg:grid-cols-12 gap-8 items-center h-full">
        
        {/* Text Column - More White Space */}
        <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:pl-4 reveal-on-scroll">
          
          <div className="flex items-center gap-4 mb-8 lg:mb-10 xl:mb-12">
            <span className="h-[1px] w-8 lg:w-12 bg-med-navy/30"></span>
            <span className="text-[10px] uppercase tracking-widest-nav text-med-stone font-medium">
              Neuropediatria & Desenvolvimento
            </span>
          </div>

          {/* Typography tuned for Tablet Landscape (lg) vs Desktop (xl) */}
          <h1 className="font-serif text-[3.2rem] sm:text-6xl lg:text-7xl xl:text-[6.5rem] text-med-navy leading-[1.05] tracking-tight mb-8 lg:mb-10 text-balance">
            Clareza para <br />
            <span className="italic font-light text-med-sage relative inline-block">
              acolher.
              {/* Subtle underline decoration */}
              <span className="absolute bottom-2 left-0 w-full h-[3px] bg-med-sage/30 rounded-full"></span>
            </span>
          </h1>

          {/* MOBILE ONLY IMAGE - Sandwich Layout Strategy */}
          <div className="block lg:hidden relative w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[320px] mx-auto aspect-[3.8/5] mt-4 mb-10 reveal-on-scroll">
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-med-sage/20 rounded-full blur-2xl z-0"></div>
             
             <div className="relative w-full h-full overflow-hidden shadow-elevation-2 z-10">
               <div className="absolute inset-0 bg-gradient-to-t from-med-navy/20 to-transparent opacity-60 z-20 mix-blend-multiply"></div>
               <img
                src="https://i.ibb.co/jkTDc4yS/IMG-4406.avif"
                alt="Dr. Warllon Barcellos - Neuropediatra"
                className="w-full h-full object-cover object-top animate-subtle-zoom will-change-transform"
              />
             </div>

             {/* Mobile Badge - Updated Content */}
             <div className="absolute bottom-3 -left-2 xs:bottom-4 xs:-left-4 bg-white p-3 xs:p-4 shadow-elevation-2 z-30 border-t-[2px] border-med-sage/40 max-w-[140px] xs:max-w-[170px]">
               <p className="font-serif italic text-xl xs:text-2xl text-med-navy leading-none mb-1">Doutor</p>
               <div className="text-[7px] xs:text-[8px] uppercase tracking-widest text-med-stone leading-relaxed font-medium">
                 <p className="mb-1">Pela UENF</p>
                 <p className="mt-1 pt-1 border-t border-med-navy/5 text-[6px] opacity-70">CRM-RJ 52.135959-2</p>
               </div>
             </div>
          </div>

          <p className="text-med-stone font-light text-base lg:text-lg leading-loose max-w-lg mb-10 lg:mb-14 text-left border-l border-med-navy/10 pl-6">
            Uma abordagem que une a precisão da <strong className="font-medium text-med-navy">ciência</strong> ao acolhimento necessário para compreender cada criança em sua singularidade.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <a
              href="#agendamento"
              onClick={handleScrollToBooking}
              className="group relative px-10 py-5 bg-med-navy text-white text-[11px] uppercase tracking-widest font-semibold transition-all duration-700 hover:bg-med-sage hover:pr-12 overflow-hidden shadow-elevation-1 hover:shadow-elevation-2"
            >
              <span className="relative z-10">Agendar Consulta</span>
            </a>

            <div className="hidden lg:flex flex-col justify-center h-full border-l border-med-navy/10 pl-6">
               <span className="text-[11px] font-bold text-med-navy uppercase tracking-widest">Dr. Warllon Barcellos</span>
               <span className="text-[10px] text-med-stone tracking-wide mt-1">CRM-RJ 52.135959-2</span>
            </div>
          </div>
        </div>

        {/* Image Column - Artistic & Editorial (DESKTOP ONLY) */}
        <div className="hidden lg:flex lg:col-span-6 relative order-2 flex-col items-center lg:items-end h-full reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          
          <div className="relative w-full max-w-[340px] md:max-w-md lg:max-w-[440px] aspect-[3.8/5] mt-8 lg:mt-0">
            
            {/* Abstract Elements behind image */}
            <div className="absolute top-10 -left-10 w-full h-full border border-med-sage/10 hidden lg:block z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-med-sage/10 rounded-full blur-3xl z-0"></div>
            
            <div className="relative w-full h-full overflow-hidden z-10 shadow-elevation-2 group">
               {/* Image Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-med-navy/10 to-transparent opacity-60 z-20 mix-blend-multiply"></div>
               
               <img
                src="https://i.ibb.co/jkTDc4yS/IMG-4406.avif"
                alt="Dr. Warllon Barcellos - Neuropediatra"
                className="w-full h-full object-cover object-top opacity-100 animate-subtle-zoom will-change-transform"
                width="800"
                height="1000"
              />
            </div>

            {/* Floating Badge - Updated Content */}
            <div className="absolute bottom-8 -left-6 lg:bottom-8 lg:-left-12 xl:bottom-12 xl:-left-20 bg-white p-8 shadow-elevation-2 z-30 min-w-[240px] border-t-[3px] border-med-sage/40">
              <p className="font-serif italic text-4xl text-med-navy leading-none mb-2">Doutor</p>
              <div className="text-[10px] uppercase tracking-widest text-med-stone leading-relaxed font-medium">
                <p className="mb-2">Pela UENF</p>
                <p className="mt-2 pt-2 border-t border-med-navy/5 text-[8px] opacity-70">CRM-RJ 52.135959-2</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden xl:flex absolute bottom-10 left-12 flex-row items-center gap-4 transition-opacity duration-500 opacity-40 hover:opacity-100">
        <ArrowDown className="w-4 h-4 text-med-navy animate-bounce" strokeWidth={0.8} />
        <span className="text-[9px] uppercase tracking-[0.3em] text-med-navy">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;