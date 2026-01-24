import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => {
    setSelected(selected === i ? null : i);
  };

  const questions = [
    {
      id: 1,
      question: "Como funciona a primeira consulta?",
      answer: "A consulta inicial é um momento de escuta profunda. Com duração média de 60 minutos, realizamos uma anamnese detalhada e observação clínica da criança para compreender o quadro globalmente, sem pressa."
    },
    {
      id: 2,
      question: "O atendimento aceita planos de saúde?",
      answer: "Para garantir a qualidade e o tempo necessário para cada paciente, o atendimento é exclusivamente particular. Emitimos toda a documentação necessária para que você solicite o reembolso junto ao seu plano."
    },
    {
      id: 3,
      question: "O que devo levar no dia da avaliação?",
      answer: "Traga todos os documentos que contem a história da criança: relatórios escolares, avaliações de outros terapeutas, caderneta de vacinação e exames anteriores. Cada detalhe importa."
    },
    {
      id: 4,
      question: "O Dr. realiza os exames no consultório?",
      answer: "Focamos na avaliação clínica e neurocomportamental. Caso sejam necessários exames complementares (como EEG ou ressonância), faremos o encaminhamento para parceiros de excelência técnica."
    }
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-med-offwhite">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20 reveal-on-scroll">
          <span className="text-[10px] font-bold uppercase tracking-widest-nav text-med-stone block mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-med-navy">
            Orientações Importantes
          </h2>
        </div>

        <div className="space-y-0 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
          {questions.map((item) => (
            <div 
              key={item.id} 
              className={`border-t transition-colors duration-500 last:border-b ${
                selected === item.id ? 'border-med-sage/30' : 'border-border-line'
              }`}
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full py-8 flex justify-between items-center text-left group focus:outline-none"
              >
                <span className={`font-serif text-lg md:text-xl transition-all duration-500 pr-8 ${
                  selected === item.id ? 'text-med-navy' : 'text-med-navy/60 group-hover:text-med-navy'
                }`}>
                  {item.question}
                </span>
                
                <span className={`flex-shrink-0 transition-colors duration-300 ${
                  selected === item.id ? 'text-med-sage' : 'text-med-stone/40 group-hover:text-med-navy'
                }`}>
                  {selected === item.id ? (
                    <Minus className="w-5 h-5" strokeWidth={0.8} />
                  ) : (
                    <Plus className="w-5 h-5" strokeWidth={0.8} />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-700 ease-luxury ${
                  selected === item.id ? 'max-h-64 opacity-100 pb-10' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-med-stone font-light text-base leading-loose max-w-2xl text-justify">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;