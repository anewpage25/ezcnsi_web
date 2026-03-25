import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="snap-section relative flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-electric-blue uppercase mb-4">About Us</h2>
          <p className="text-2xl md:text-4xl font-light leading-relaxed max-w-full break-keep">
            저희 EZ는 정보화 시스템을 보다 <span className="font-semibold text-white">사용하기 쉽게(EZ)</span> 구축하고<br className="hidden lg:block"/>
            저희 EZ가 구축한 시스템을 통해 고객이 이로운 지혜 <span className="font-semibold text-electric-blue">“이지”(利智)</span>에 다가설 수 있도록 하는 것이 기업 철학입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-navy-800/50 border border-navy-700 p-8 lg:p-10 rounded-2xl backdrop-blur-sm hover:border-royal-blue/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-2">(주)이지씨엔에스아이</h3>
            <p className="text-electric-blue text-sm mb-8">공공기관 정보시스템 구축 및 운영</p>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex flex-col sm:flex-row sm:gap-4"><span className="text-white font-mono w-20 shrink-0 mb-1 sm:mb-0">2014.10</span> <span>법인 설립</span></li>
              <li className="flex flex-col sm:flex-row sm:gap-4"><span className="text-white font-mono w-20 shrink-0 mb-1 sm:mb-0">2019</span> <span>조달 입찰참가자격등록 / 중소기업확인 / 소프트웨어 사업자 신고</span></li>
              <li className="flex flex-col sm:flex-row sm:gap-4"><span className="text-white font-mono w-20 shrink-0 mb-1 sm:mb-0">2020</span> <span>직접생산 확인 / 연구개발전담부서 등록</span></li>
              <li className="flex flex-col sm:flex-row sm:gap-4"><span className="text-white font-mono w-20 shrink-0 mb-1 sm:mb-0">2023</span> <span>현 사옥 이전</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-navy-800/50 border border-navy-700 p-8 lg:p-10 rounded-2xl backdrop-blur-sm hover:border-electric-blue/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-2">(주)이지오름</h3>
            <p className="text-electric-blue text-sm mb-8">공공기관 정보시스템 구축 및 운영 / 인공지능 기반 시스템 / R&D</p>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex flex-col sm:flex-row sm:gap-4"><span className="text-white font-mono w-20 shrink-0 mb-1 sm:mb-0">2024.01</span> <span>법인 설립 (㈜이지씨엔에스아이 출자 법인)</span></li>
              <li className="flex flex-col sm:flex-row sm:gap-4"><span className="text-white font-mono w-20 shrink-0 mb-1 sm:mb-0">2025.12</span> <span>인공지능 Live Call Center EZ call 개발완료</span></li>
              <li className="flex flex-col sm:flex-row sm:gap-4"><span className="text-white font-mono w-20 shrink-0 mb-1 sm:mb-0">2026.04</span> <span>한국가스공사 EZ call 시험운영 (Voice bot, Chatbot 동시 운영)</span></li>
              <li className="flex flex-col sm:flex-row sm:gap-4"><span className="text-white font-mono w-20 shrink-0 mb-1 sm:mb-0">2026.04</span> <span>네이버 클라우드(클라우드 스퀘어)와 인공지능 SaaS 업무 협약</span></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
