
import React from 'react';
import { Instagram } from 'lucide-react';
import { WA_LINK_ONLINE, WA_LINK_UBA, WA_LINK_MIRACEMA } from '../utils/constants';

const Footer: React.FC = () => {
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
    <footer className="bg-med-navy text-med-offwhite pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-6 max-w-xs">
            <div className="flex flex-col">
              <span className="font-serif italic text-2xl text-white">Dr. Barcellos</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">CRM-RJ 52.135959-2</span>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed text-justify">
              Atendimento com rigor científico e olhar humano. Dedicado ao desenvolvimento pleno da infância.
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

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-24">
            {/* Agendamento */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-med-sage mb-6">Agendamento</h4>
              <ul className="space-y-4 text-sm font-light text-slate-300">
                <li>
                  <a 
                    href={WA_LINK_ONLINE}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Online
                  </a>
                </li>
                <li>
                  <a 
                    href={WA_LINK_UBA}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    São José de Ubá
                  </a>
                </li>
                <li>
                  <a 
                    href={WA_LINK_MIRACEMA}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Miracema
                  </a>
                </li>
              </ul>
            </div>

            {/* Navegação */}
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
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-2 text-[10px] text-slate-500 tracking-widest">
          <p className="uppercase">DESIGNED FOR EXCELLENCE</p>
          <a 
            href="https://www.instagram.com/freitas.lab/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="lowercase hover:text-med-sage transition-colors duration-300"
          >
            @freitas.lab
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
