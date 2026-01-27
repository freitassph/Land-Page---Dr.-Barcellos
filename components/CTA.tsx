
import React from 'react';
import { MapPin, Video, ArrowRight } from 'lucide-react';
import { WA_LINK_ONLINE, WA_LINK_UBA, WA_LINK_MIRACEMA } from '../utils/constants';

const CTA: React.FC = () => {
  const locations = [
    {
      id: 'online',
      type: 'Telemedicina',
      title: 'Atendimento Online',
      description: 'Consultas via videochamada com a mesma atenção, escuta e rigor técnico do atendimento presencial.',
      address: 'Plataforma Digital Segura',
      link: WA_LINK_ONLINE,
      icon: <Video className="w-6 h-6" strokeWidth={1} />,
    },
    {
      id: 'uba',
      type: 'Presencial',
      title: 'São José de Ubá - RJ',
      description: 'Atendimento clínico especializado no coração de Ubá.',
      address: 'Espaço Mais Saúde',
      addressLine2: 'Av. David Vieira Ney, 502, Centro',
      link: WA_LINK_UBA,
      icon: <MapPin className="w-6 h-6" strokeWidth={1} />,
    },
    {
      id: 'miracema',
      type: 'Presencial',
      title: 'Miracema - RJ',
      description: 'Estrutura completa para avaliação neuropsicomotora.',
      address: 'Consultório Particular',
      addressLine2: 'Rua Miguel Bruno de Martino, 73, Centro',
      link: WA_LINK_MIRACEMA,
      icon: <MapPin className="w-6 h-6" strokeWidth={1} />,
    }
  ];

  return (
    <section id="agendamento" className="py-24 lg:py-36 bg-white relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1B263B_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 reveal-on-scroll">
          <span className="text-med-sage text-[10px] font-bold uppercase tracking-widest-nav mb-4 block">
            Agendamento
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-med-navy mb-6 leading-tight">
            Escolha como prefere <br/>
            <span className="italic text-med-sage">ser atendido.</span>
          </h2>
          <p className="text-med-stone font-light text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Disponibilizamos três modalidades de atendimento para melhor acolher a sua família.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((loc, index) => (
            <div 
              key={loc.id}
              className="group relative flex flex-col bg-med-offwhite border border-med-navy/5 p-8 lg:p-10 hover:border-med-sage/30 hover:shadow-elevation-2 transition-all duration-500 reveal-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 lg:mb-8 text-med-navy group-hover:text-med-sage transition-colors duration-500">
                {loc.icon}
              </div>

              <span className="text-[9px] uppercase tracking-widest text-med-stone/60 mb-2 block">
                {loc.type}
              </span>
              
              <h3 className="font-serif text-2xl text-med-navy mb-4 group-hover:text-med-sage transition-colors duration-300">
                {loc.title}
              </h3>

              <div className="flex-grow">
                 {loc.address && (
                   <div className="mb-4">
                     <p className="text-sm font-semibold text-med-navy/80">{loc.address}</p>
                     {loc.addressLine2 && (
                       <p className="text-sm text-med-stone/80 font-light">{loc.addressLine2}</p>
                     )}
                   </div>
                 )}
                 
                 {loc.id === 'online' && (
                    <p className="text-sm text-med-stone/80 font-light leading-relaxed mb-4">
                      {loc.description}
                    </p>
                 )}
              </div>

              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-between w-full py-4 border-t border-med-navy/10 group-hover:border-med-sage/30 transition-colors duration-500"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-med-navy group-hover:text-med-sage transition-colors">
                  Agendar Agora
                </span>
                <ArrowRight className="w-4 h-4 text-med-navy/40 group-hover:text-med-sage group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CTA;
