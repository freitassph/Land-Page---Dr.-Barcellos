
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 lg:py-40 bg-med-navy text-med-offwhite relative overflow-hidden">
      
      {/* Background Texture Detail */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1F2C42] skew-x-12 opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Portrait Column - Image */}
          {/* Removed specific 'order' classes. DOM order puts Image first, satisfying "Image -> Text" flow on Mobile */}
          <div className="lg:col-span-5 relative reveal-on-scroll">
             <div className="relative aspect-[3.5/5] w-full max-w-sm mx-auto shadow-2xl">
                {/* Image Frame */}
                <div className="absolute inset-0 border-[0.5px] border-white/20 translate-x-3 translate-y-3 z-0"></div>
                
                <div className="relative w-full h-full overflow-hidden bg-med-sage/10 transition-all duration-1000 ease-luxury z-10">
                  <img
                    src="https://i.ibb.co/N6hp11NP/IMG-4413.avif"
                    alt="Dr. Warllon Barcellos - PhD"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[2s]"
                    loading="lazy"
                  />
                  
                  {/* Digital Signature Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-med-navy/90 to-transparent">
                    <span className="font-serif italic text-2xl text-luxury-gold/90">Warllon Barcellos</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Biography Column - Text */}
          {/* Removed specific 'order' classes. Flows naturally after image on mobile */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pt-8 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            
            <div className="mb-8 lg:mb-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-med-sage mb-4 block">
                O Especialista
              </span>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-none text-white mb-6">
                Ciência que ilumina,<br/>
                <span className="text-med-sage opacity-80 italic">afeto que guia.</span>
              </h3>
            </div>

            <div className="space-y-6 text-slate-300 font-light text-base md:text-lg leading-relaxed text-justify max-w-2xl">
              <p>
                A trajetória do <strong className="text-white font-medium">Dr. Warllon Barcellos</strong> é marcada pela incessante busca por respostas. Neuropediatra e pesquisador, ele compreende que por trás de cada comportamento existe um cérebro em desenvolvimento pedindo para ser entendido.
              </p>
              <p>
                Com Doutorado (PhD) pela UENF e vasta experiência acadêmica, ele traduz a complexidade da neurociência em caminhos práticos para as famílias. Seu consultório é um espaço onde a evidência científica encontra a sensibilidade humana.
              </p>
            </div>

            {/* Credentials - Refined Grid */}
            <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-10">
              <div className="group">
                <span className="block text-3xl font-serif text-white mb-2 group-hover:text-med-sage transition-colors">PhD</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed">Doutor em Ciências<br/>(UENF)</span>
              </div>
              <div className="group">
                <span className="block text-3xl font-serif text-white mb-2 group-hover:text-med-sage transition-colors">Esp.</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed">Neuropediatria<br/>(IBCMED)</span>
              </div>
              <div className="group">
                <span className="block text-3xl font-serif text-white mb-2 group-hover:text-med-sage transition-colors">Prof.</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed">Docência<br/>Universitária</span>
              </div>
              <div className="group">
                <span className="block text-3xl font-serif text-white mb-2 group-hover:text-med-sage transition-colors">CRM</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed">52.135959-2<br/>Rio de Janeiro</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
