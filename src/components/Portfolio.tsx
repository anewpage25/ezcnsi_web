import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portfolios = [
  { name: '한국정보통신진흥협회', category: 'Public Sector / Information System' },
  { name: '국립장기조직혈액관리원', category: 'Public Sector / Information System' },
  { name: '국제교류재단', category: 'Public Sector / Information System' },
  { name: '한국가스공사', category: 'Public Sector / AI Service' },
];

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % portfolios.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + portfolios.length) % portfolios.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="portfolio" className="snap-section relative flex flex-col justify-center py-24 overflow-hidden bg-navy-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-blue/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-electric-blue uppercase mb-4">Portfolio</h2>
          <p className="text-2xl font-light text-gray-300">주요 구축 사례</p>
        </motion.div>

        <div className="relative h-[350px] md:h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 rounded-3xl shadow-2xl"
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-electric-blue) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              <span className="relative z-10 text-electric-blue text-xs md:text-sm font-medium tracking-widest uppercase mb-6">{portfolios[current].category}</span>
              <h3 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{portfolios[current].name}</h3>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button onClick={prev} className="absolute left-2 md:-left-6 w-12 h-12 flex items-center justify-center bg-navy-800 border border-navy-600 rounded-full text-white hover:bg-electric-blue hover:text-navy-900 transition-colors z-20 shadow-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="absolute right-2 md:-right-6 w-12 h-12 flex items-center justify-center bg-navy-800 border border-navy-600 rounded-full text-white hover:bg-electric-blue hover:text-navy-900 transition-colors z-20 shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {portfolios.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${current === idx ? 'w-10 bg-electric-blue' : 'w-4 bg-navy-600 hover:bg-navy-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
