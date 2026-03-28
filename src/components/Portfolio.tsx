import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portfolios = [
  { client: '국사편찬위원회', project: '한국사능력검정시험 운영시스템 및 기출문제시스템 위탁운영 용역 45회차' },
  { client: '국립 장기조직혈액관리원', project: '국립 장기조직혈액관리원 정보시스템 운영 유지관리' },
  { client: '한국국제교류재단', project: '한국국제교류재단 통합정보시스템 운영 및 유지보수' },
  { client: '한국가스공사', project: '도시가스 수요관리 홈페이지 보안고도화, 기능개발 및 운영 용역' },
  { client: '보건복지부 국립장기조직혈액관리원', project: '장기조직기능 전자동의시스템 구축' },
  { client: '한국정보통신진흥협회', project: '이용자 역량강화 및 피해예방 온라인 교육시스템 구축' },
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
    <section id="portfolio" className="snap-section relative flex flex-col justify-center py-24 overflow-hidden bg-gray-50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-blue/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-royal-blue uppercase mb-4">Portfolio</h2>
          <p className="text-2xl font-light text-gray-600">주요 구축 사례</p>
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
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-3xl shadow-xl"
            >
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-royal-blue) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              <h3 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">{portfolios[current].client}</h3>
              <p className="relative z-10 text-gray-600 text-base md:text-lg lg:text-xl font-medium break-keep max-w-4xl mx-auto">{portfolios[current].project}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button onClick={prev} className="absolute left-2 md:-left-6 w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-navy-900 hover:bg-royal-blue hover:text-white transition-colors z-20 shadow-md">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="absolute right-2 md:-right-6 w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-navy-900 hover:bg-royal-blue hover:text-white transition-colors z-20 shadow-md">
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
              className={`h-1.5 transition-all duration-500 rounded-full ${current === idx ? 'w-10 bg-royal-blue' : 'w-4 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
