import { motion } from 'motion/react';

const portfolios = [
  { client: '국사편찬위원회', project: '한국사능력검정시험 운영시스템 및 기출문제시스템 위탁운영 용역 45회차' },
  { client: '국립 장기조직혈액관리원', project: '국립 장기조직혈액관리원 정보시스템 운영 유지관리' },
  { client: '한국국제교류재단', project: '한국국제교류재단 통합정보시스템 운영 및 유지보수' },
  { client: '한국가스공사', project: '도시가스 수요관리 홈페이지 보안고도화, 기능개발 및 운영 용역' },
  { client: '보건복지부 국립장기조직혈액관리원', project: '장기조직기능 전자동의시스템 구축' },
  { client: '한국정보통신진흥협회', project: '이용자 역량강화 및 피해예방 온라인 교육시스템 구축' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="snap-section relative flex flex-col justify-center py-24 overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-royal-blue/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-royal-blue"></span>
            <h2 className="text-sm font-bold tracking-[0.2em] text-royal-blue uppercase">Portfolio</h2>
            <span className="w-8 h-[2px] bg-royal-blue"></span>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-navy-900">주요 구축 사례</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-royal-blue/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Decorative Dot Pattern */}
              <div className="absolute -right-6 -top-6 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-royal-blue) 2px, transparent 2px)', backgroundSize: '10px 10px' }}></div>

              {/* Number Indicator */}
              <div className="text-gray-100 group-hover:text-royal-blue/10 font-mono text-6xl font-black absolute top-6 right-6 transition-colors duration-500 select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-1 bg-royal-blue mb-8 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-royal-blue transition-colors duration-300 break-keep pr-12">
                  {portfolio.client}
                </h3>
                
                <p className="text-gray-600 leading-relaxed break-keep mt-auto pt-4">
                  {portfolio.project}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
