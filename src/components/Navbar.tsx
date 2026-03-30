import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['hero', 'about', 'business', 'portfolio', 'contact'];
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = ['HOME', 'ABOUT', 'BUSINESS', 'PORTFOLIO', 'CONTACT'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="cursor-pointer flex items-center" onClick={() => scrollTo('hero')}>
          <img src="https://cdn.imweb.me/upload/S202412123c3b63e7f7510/2c9cf723b705a.png" alt="(주)이지씨엔에스아이 로고 - 공공 정보화 및 인공지능 시스템 전문기업" className="h-8 md:h-10 object-contain" referrerPolicy="no-referrer" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wider">
          {navItems.map((item) => {
            const id = item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => scrollTo(id)}
                className={`transition-colors hover:text-electric-blue ${activeSection === id ? 'text-electric-blue' : 'text-gray-300'}`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-md border-t border-navy-800 py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {navItems.map((item) => {
            const id = item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => scrollTo(id)}
                className={`text-left text-sm font-medium tracking-wider py-2 transition-colors ${activeSection === id ? 'text-electric-blue' : 'text-gray-300'}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
