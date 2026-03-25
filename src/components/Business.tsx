import { motion } from 'motion/react';
import { Server, Bot, Lightbulb, LayoutTemplate, Users } from 'lucide-react';

const businesses = [
  { id: '01', title: '공공 정보화 SI/SM', desc: '공공부문에 특화된 정보시스템 구축 및 운영', icon: Server },
  { id: '02', title: '인공지능 시스템', desc: '인공지능 Live Call Center, Voice bot, Chat Bot', icon: Bot },
  { id: '03', title: '정보시스템 컨설팅', desc: '정보시스템 설계 및 구축 컨설팅', icon: Lightbulb },
  { id: '04', title: '콘텐츠 관리시스템', desc: '비전문가도 쉽고 능동적으로 관리가 가능한 CMS', icon: LayoutTemplate },
  { id: '05', title: '프로젝트 관리 지원', desc: '프로젝트 관리지원 및 프로젝트 매니저 파견', icon: Users },
];

export default function Business() {
  return (
    <section id="business" className="snap-section relative flex flex-col justify-center py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-electric-blue uppercase mb-4">Our Business</h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed">
            기관별 특성에 맞춰 성과를 극대화 하는 정보시스템 구축<br/>
            정보시스템의 높은 품질을 통해 국민 만족도 향상
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-navy-800 p-8 rounded-2xl border border-navy-700 hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-royal-blue/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="p-3 bg-navy-900 rounded-xl text-electric-blue group-hover:bg-electric-blue group-hover:text-navy-900 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black text-navy-700 group-hover:text-royal-blue/30 transition-colors">{item.id}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
