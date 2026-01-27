
import React, { useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, activeSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (closeBtnRef.current) closeBtnRef.current.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      if (targetId === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        // Offset ajustado para considerar o padding extra visual
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinkClass = (section: string) => `
    relative text-[10px] font-bold uppercase tracking-widest-nav transition-colors duration-500 py-2
    ${activeSection === section ? 'text-med-navy' : 'text-med-stone/80 hover:text-med-navy'}
    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
    after:w-1 after:h-1 after:rounded-full after:bg-med-sage after:opacity-0 
    after:transition-all after:duration-500
    ${activeSection === section ? 'after:opacity-100' : ''}
  `;

  const menuItems = [
    { id: 'metodo', label: 'Metodologia' },
    { id: 'sobre', label: 'Especialista' },
    { id: 'agendamento', label: 'Agendamento' },
    { id: 'faq', label: 'Dúvidas' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-1000 ease-luxury ${
          scrolled 
            ? 'bg-med-offwhite/80 backdrop-blur-md h-20 border-b border-med-navy/5' 
            : 'bg-transparent h-24 lg:h-32 border-transparent'
        }`}
      >
        <nav className="max-w-[90rem] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, 'inicio')}
            className="group z-50 relative"
          >
            <div className="flex flex-col leading-none">
              <span className="font-serif italic text-xl md:text-2xl text-med-navy tracking-tight group-hover:text-med-sage transition-colors duration-500">
                Dr. Barcellos
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            <a href="#metodo" onClick={(e) => handleNavClick(e, 'metodo')} className={navLinkClass('metodo')}>
              Metodologia
            </a>
            <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className={navLinkClass('sobre')}>
              Especialista
            </a>
            <a href="#agendamento" onClick={(e) => handleNavClick(e, 'agendamento')} className={navLinkClass('agendamento')}>
              Agendar
            </a>
            <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className={navLinkClass('faq')}>
              Dúvidas
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-3 -mr-3 text-med-navy hover:text-med-sage transition-colors"
            aria-label="Abrir Menu"
          >
            <Menu className="w-6 h-6" strokeWidth={0.8} />
          </button>

          {/* CTA Button Desktop - Minimalist Outline */}
          <a
             href="#agendamento"
             onClick={(e) => handleNavClick(e, 'agendamento')}
             className="hidden lg:inline-block px-8 py-3 bg-med-navy text-white text-[10px] font-bold uppercase tracking-widest hover:bg-med-sage transition-colors duration-500"
          >
            Agendar Consulta
          </a>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-med-offwhite z-[60] flex flex-col items-center justify-center transition-transform duration-[0.8s] ease-luxury will-change-transform ${
          mobileMenuOpen ? 'translate-y-0' : 'translate-y-full pointer-events-none'
        }`}
      >
        <button
          ref={closeBtnRef}
          onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(false); }}
          className="absolute top-8 right-8 p-4 text-med-navy hover:rotate-90 transition-transform duration-500"
          aria-label="Fechar Menu"
        >
          <X className="w-8 h-8" strokeWidth={0.5} />
        </button>

        <div 
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col space-y-8 text-center"
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="font-serif text-3xl md:text-4xl text-med-navy active:text-med-sage transition-colors duration-300 py-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
