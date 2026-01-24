import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Escuta Ativa & Anamnese",
      desc: "O diagnóstico começa muito antes do exame físico. Dedicamos tempo para entender a história familiar, o contexto escolar e as nuances do comportamento."
    },
    {
      num: "02",
      title: "Avaliação Neuropsicomotora",
      desc: "Aplicação de protocolos internacionais (SBNI) para mapear habilidades cognitivas, motoras e sensoriais, identificando potencialidades e desafios."
    },
    {
      num: "03",
      title: "Estratégia Terapêutica",
      desc: "Não entregamos apenas um laudo. Construímos um projeto de intervenção singular, orientando família, escola e equipe multidisciplinar."
    }
  ];

  return (
    <section id="metodo" className="py-24 lg:py-36 bg-med-offwhite relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - Centered for elegance */}
        <div className="mb-20 lg:mb-32 text-center max-w-3xl mx-auto reveal-on-scroll">
          <span className="text-med-sage text-[10px] font-bold uppercase tracking-widest-nav mb-4 block">
            Nossa Abordagem
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-med-navy leading-tight mb-6">
            Diagnóstico com precisão, <br/> 
            <span className="italic text-med-stone/60">condução com afeto.</span>
          </h2>
        </div>

        {/* Minimalist List Layout */}
        <div className="grid lg:grid-cols-3 gap-0 lg:divide-x divide-med-sage/10 border-t border-b border-med-sage/10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative p-8 lg:p-12 transition-all duration-700 hover:bg-white hover:shadow-elevation-1 reveal-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Number - Changed from Navy to Sage for visual consistency */}
              <div className="mb-8 lg:mb-12 flex justify-between items-start">
                <span className="font-serif text-4xl lg:text-5xl text-med-sage/30 group-hover:text-med-sage transition-colors duration-500">
                  {step.num}
                </span>
                <div className="w-12 h-[1px] bg-med-sage/20 group-hover:w-20 group-hover:bg-med-sage transition-all duration-700"></div>
              </div>
              
              <h3 className="text-med-navy font-serif text-xl lg:text-2xl mb-4 lg:mb-6 group-hover:text-med-sage transition-colors duration-500">
                {step.title}
              </h3>
              
              <p className="text-sm lg:text-base text-med-stone font-light leading-loose text-justify lg:text-left">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
           <p className="text-[9px] text-med-stone/40 uppercase tracking-widest">
             * Diretrizes da Sociedade Brasileira de Neurologia Infantil
           </p>
        </div>

      </div>
    </section>
  );
};

export default Methodology;