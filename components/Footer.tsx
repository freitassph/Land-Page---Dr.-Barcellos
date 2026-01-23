import React from 'react';
import { Instagram } from 'lucide-react';
import { WA_LINK } from '../utils/constants';

const Footer: React.FC = () => {
  const mapLink = "https://maps.app.goo.gl/6M6JK3yR9tFkvCLXA";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-med-navy text-med-offwhite pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <span className="font-serif italic text-2xl text-white">Dr. Barcellos</span>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xs text-justify">
              Neuropediatria com rigor científico e olhar humano. Dedicado ao desenvolvimento pleno da infância.
            </p>
            <a
              href="https://www.instagram.com/dr.barcellos____/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white hover:text-med-sage transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-med-sage mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm font-light text-slate-300">
              <li>
                <a 
                  href="#metodo" 
                  onClick={(e) => handleNavClick(e, 'metodo')}
                  className="hover:text-white transition-colors"
                >
                  Metodologia
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleNavClick(e, 'sobre')}
                  className="hover:text-white transition-colors"
                >
                  Especialista
                </a>
              </li>
              <li>
                <a 
                  href="#agendamento" 
                  onClick={(e) => handleNavClick(e, 'agendamento')}
                  className="hover:text-white transition-colors"
                >
                  Agendamento
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleNavClick(e, 'faq')}
                  className="hover:text-white transition-colors"
                >
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-med-sage mb-6">Contato</h4>
             <div className="space-y-1">
               <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block text-lg font-serif italic hover:text-med-sage transition-colors">
                 +55 22 99801-9919
               </a>
               <p className="text-xs text-slate-500 uppercase tracking-wide">Seg - Sex, 09h às 17h</p>
             </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-med-sage mb-6">Localização</h4>
            <address className="not-italic text-sm text-slate-300 font-light leading-relaxed">
              Espaço Mais Saúde<br/>
              Av. David Vieira Ney, 502<br/>
              Centro, São José de Ubá - RJ
            </address>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[10px] uppercase tracking-widest border-b border-slate-600 pb-1 hover:border-white transition-colors">
              Ver no Google Maps
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
          <p>Dr. Warllon Barcellos</p>
          <p>CRM-RJ 52.135959-2</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;