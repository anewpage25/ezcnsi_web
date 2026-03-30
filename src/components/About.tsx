import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="snap-section relative flex items-center py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-royal-blue/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[10%] left-[5%] text-[25rem] font-black text-gray-900/[0.02] select-none leading-none tracking-tighter">EZ</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
          
          {/* Left Column: Philosophy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 flex flex-col justify-center lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-royal-blue"></span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-royal-blue uppercase">About Us</h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-[1.4] mb-8 break-keep">
              사용하기 <span className="text-royal-blue">쉽게(EZ)</span><br/>
              이로운 <span className="text-royal-blue">지혜(利智)</span>에<br/>
              다가서다.
            </h3>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed break-keep">
              저희 EZ는 정보화 시스템을 보다 사용하기 쉽게 구축하고, 저희가 구축한 시스템을 통해 고객이 이로운 지혜에 다가설 수 있도록 하는 것이 기업 철학입니다.
            </p>
          </motion.div>

          {/* Right Column: Timeline / Companies */}
          <div className="lg:w-7/12 relative w-full">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[11px] md:left-[19px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-royal-blue/50 via-gray-200 to-gray-200"></div>

            <div className="space-y-12">
              {/* EZ CNSI */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-[8px] top-8 w-6 h-6 bg-white border-[4px] border-royal-blue rounded-full shadow-md z-10 group-hover:scale-125 group-hover:bg-royal-blue transition-all duration-300"></div>
                
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:border-royal-blue/20 transition-all duration-300">
                  <h4 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3 group-hover:text-royal-blue transition-colors">(주)이지씨엔에스아이</h4>
                  <p className="text-gray-500 font-medium text-sm md:text-base mb-8 pb-6 border-b border-gray-100">공공기관 정보시스템 구축 및 운영</p>
                  
                  <ul className="space-y-6">
                    <li className="flex flex-col sm:flex-row sm:gap-6">
                      <span className="text-royal-blue font-bold font-mono text-lg w-24 shrink-0">2014.10</span>
                      <span className="text-gray-700 font-medium mt-1 sm:mt-0">법인 설립</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:gap-6">
                      <span className="text-royal-blue font-bold font-mono text-lg w-24 shrink-0">2019</span>
                      <span className="text-gray-700 font-medium mt-1 sm:mt-0 leading-relaxed">조달 입찰참가자격등록 /<br/>중소기업확인 /<br/>소프트웨어 사업자 신고</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:gap-6">
                      <span className="text-royal-blue font-bold font-mono text-lg w-24 shrink-0">2020</span>
                      <span className="text-gray-700 font-medium mt-1 sm:mt-0 leading-relaxed">직접생산 확인 /<br/>기술연구소 등록</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:gap-6">
                      <span className="text-royal-blue font-bold font-mono text-lg w-24 shrink-0">2023</span>
                      <span className="text-gray-700 font-medium mt-1 sm:mt-0">현 사옥 이전</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* EZ OREUM */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-[8px] top-8 w-6 h-6 bg-white border-[4px] border-royal-blue rounded-full shadow-md z-10 group-hover:scale-125 group-hover:bg-royal-blue transition-all duration-300"></div>
                
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:border-royal-blue/20 transition-all duration-300">
                  <h4 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3 group-hover:text-royal-blue transition-colors">(주)이지오름</h4>
                  <p className="text-gray-500 font-medium text-sm md:text-base mb-8 pb-6 border-b border-gray-100">공공기관 정보시스템 구축 및 운영 / 인공지능 기반 시스템 / R&D</p>
                  
                  <ul className="space-y-6">
                    <li className="flex flex-col sm:flex-row sm:gap-6">
                      <span className="text-royal-blue font-bold font-mono text-lg w-24 shrink-0">2024.01</span>
                      <span className="text-gray-700 font-medium mt-1 sm:mt-0 leading-relaxed">법인 설립<br/>(㈜이지씨엔에스아이 출자 법인)</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:gap-6">
                      <span className="text-royal-blue font-bold font-mono text-lg w-24 shrink-0">2025.12</span>
                      <span className="text-gray-700 font-medium mt-1 sm:mt-0 leading-relaxed">인공지능 Live Call Center<br/>EZ Call 개발완료</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:gap-6">
                      <span className="text-royal-blue font-bold font-mono text-lg w-24 shrink-0">2026.04</span>
                      <span className="text-gray-700 font-medium mt-1 sm:mt-0 leading-relaxed">한국가스공사 EZ Call 시험운영<br/><span className="text-sm text-gray-500 font-normal">(Voice bot, Chatbot 동시 운영)</span></span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:gap-6">
                      <span className="text-royal-blue font-bold font-mono text-lg w-24 shrink-0">2026.04</span>
                      <span className="text-gray-700 font-medium mt-1 sm:mt-0 leading-relaxed">네이버 클라우드(클라우드 스퀘어)와<br/>인공지능 SaaS 업무 협약</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
