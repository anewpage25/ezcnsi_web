import { motion } from 'motion/react';

const businesses = [
  { 
    id: '01', 
    title: '공공 정보화 SI/SM', 
    desc: '공공부문에 특화된 정보시스템 구축 및 운영', 
    image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: [
      '공공 정보시스템 구축',
      '공공 정보시스템 유지관리 및 운영'
    ]
  },
  { 
    id: '02', 
    title: '인공지능 시스템', 
    desc: '인공지능 Live Call Center, Voice bot, Chat Bot', 
    image: 'https://cdn.imweb.me/upload/S202412123c3b63e7f7510/1c13afb4799a0.png',
    details: [
      '인공지능 Live call center\n- 인공지능이 실제 상담원과 같이 전화를 받아 민원 대응',
      '인공지능 Voice bot',
      '인공지능 Chat bot'
    ]
  },
  { 
    id: '03', 
    title: '정보시스템 컨설팅', 
    desc: '정보시스템 설계 및 구축 컨설팅', 
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    details: [
      '정보시스템 구축 컨설팅',
      '정보시스템 최적화 지원',
      '정보시스템 설계 지원'
    ]
  },
  { 
    id: '04', 
    title: '콘텐츠 관리시스템', 
    desc: '비전문가도 쉽고 능동적으로 관리가 가능한 CMS', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    details: [
      '비전문가도 쉽게 홈페이지 시스템을 관리 가능',
      '개발언어 DB 지식 없이도 운영 가능한 관리시스템'
    ]
  },
  { 
    id: '05', 
    title: '프로젝트 관리 지원', 
    desc: '프로젝트 관리지원 및 프로젝트 매니저 파견', 
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    details: [
      'PM 파견 지원',
      '방법론에 따른 산출물 지원',
      '정보시스템 감리 대응 지원',
      '프로젝트 위험 품질 관리'
    ]
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {businesses.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col gap-5"
              >
                {/* Image Card with Hover Overlay */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-navy-700 shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Default Gradient for text readability (optional, but good for base styling) */}
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/90 to-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-6">
                    <h3 className="text-xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                    <ul className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.details.map((detail, i) => {
                        const parts = detail.split('\n');
                        return (
                          <li key={i} className="text-gray-200 text-xs md:text-sm flex items-start leading-relaxed">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-electric-blue rounded-full shrink-0"></span>
                            <div className="flex flex-col">
                              <span className="break-keep">{parts[0]}</span>
                              {parts[1] && (
                                <span className="text-[10px] md:text-[11px] text-gray-300 mt-0.5 break-keep tracking-tight">
                                  {parts[1]}
                                </span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Text Below Card */}
                <div className="px-1">
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
