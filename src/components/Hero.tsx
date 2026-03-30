import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const slides = [
  { 
    title: "Your Business Partner EZ CNSI", 
    subtitle: "Trusted digital partner for public information systems",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
  },
  { 
    title: "공공 정보화 SI/SM", 
    subtitle: "공공부문에 특화된 정보시스템 구축 및 운영",
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    title: "인공지능 시스템", 
    subtitle: "인공지능 Live Call Center, Voice bot, Chat Bot",
    image: "https://cdn.imweb.me/upload/S202412123c3b63e7f7510/1c13afb4799a0.png"
  },
  { 
    title: "정보시스템 컨설팅", 
    subtitle: "정보시스템 설계 및 구축 컨설팅",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop"
  },
  { 
    title: "콘텐츠 관리시스템", 
    subtitle: "비전문가도 쉽고 능동적으로 관리가 가능한 CMS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop"
  },
  { 
    title: "프로젝트 관리 지원", 
    subtitle: "프로젝트 관리지원 및 프로젝트 매니저 파견",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1920&auto=format&fit=crop"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="snap-section relative flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0 bg-navy-900">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={slides[current].image}
            alt={slides[current].title}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Dark Overlays for readability and tech vibe */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/10 to-navy-900/80 z-10"></div>
        <div className="absolute inset-0 opacity-10 z-10" style={{
          backgroundImage: 'linear-gradient(var(--color-electric-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-electric-blue) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col justify-center items-start min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl drop-shadow-md">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex gap-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  current === index ? 'w-10 bg-electric-blue' : 'w-4 bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer hover:text-electric-blue transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-gray-400 hover:text-electric-blue transition-colors" />
      </button>
    </section>
  );
}
