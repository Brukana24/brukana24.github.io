import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ERPSolutions from './components/ERPSolutions';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import ITInfrastructure from './components/ITInfrastructure';
import ITConsultancy from './components/ITConsultancy';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'erp', 'software', 'infrastructure', 'consultancy', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <div id="home">
          <Hero onNavigate={handleNavigate} />
          <Services onNavigate={handleNavigate} />
          <WhyChooseUs />
        </div>

        <div id="erp">
          <ERPSolutions />
        </div>

        <div id="software">
          <SoftwareDevelopment />
        </div>

        <div id="infrastructure">
          <ITInfrastructure />
        </div>

        <div id="consultancy">
          <ITConsultancy />
        </div>

        <div id="about">
          <AboutUs />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
