import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Methodology from './components/Methodology';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll handling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Active Section Observer
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => navObserver.observe(section));

    // Reveal Animation Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            revealObserver.unobserve(entry.target); // Animate once
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => {
      el.classList.add('reveal-hidden');
      revealObserver.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => navObserver.unobserve(section));
      revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <div className={`font-sans antialiased text-med-navy bg-med-offwhite ${mobileMenuOpen ? 'overflow-hidden max-h-screen' : ''}`}>
      <Header 
        scrolled={scrolled} 
        activeSection={activeSection} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <Hero />
        {/* Increased vertical rhythm between sections for luxurious feel */}
        <Methodology />
        <About />
        <CTA />
        <FAQ />
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
};

export default App;