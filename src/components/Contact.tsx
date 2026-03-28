import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';

declare global {
  interface Window {
    daum: any;
  }
}

export default function Contact() {
  const map1Rendered = useRef(false);
  const map2Rendered = useRef(false);

  useEffect(() => {
    let checkInterval: NodeJS.Timeout;

    const initMaps = () => {
      // Wait until Lander is fully loaded by the roughmapLoader
      if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
        clearInterval(checkInterval);
        
        const container1 = document.getElementById('daumRoughmapContainer1774449235800');
        const container2 = document.getElementById('daumRoughmapContainer1774449294763');
        
        if (container1 && !map1Rendered.current) {
          const width1 = container1.parentElement?.clientWidth || 640;
          new window.daum.roughmap.Lander({
            "timestamp" : "1774449235800",
            "key" : "jxvc5at696h",
            "mapWidth" : width1.toString(),
            "mapHeight" : "400"
          }).render();
          map1Rendered.current = true;
        }

        if (container2 && !map2Rendered.current) {
          const width2 = container2.parentElement?.clientWidth || 640;
          new window.daum.roughmap.Lander({
            "timestamp" : "1774449294763",
            "key" : "jxqxvegctj9",
            "mapWidth" : width2.toString(),
            "mapHeight" : "400"
          }).render();
          map2Rendered.current = true;
        }
      }
    };

    // Continuously check if the Lander constructor is ready
    checkInterval = setInterval(initMaps, 200);

    return () => {
      clearInterval(checkInterval);
    };
  }, []);

  return (
    <section id="contact" className="snap-section relative flex flex-col justify-between pt-24 pb-8 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-electric-blue uppercase mb-4">Contact Us</h2>
          <p className="text-3xl font-light">함께 혁신을 만들어갈 준비가 되셨나요?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* EZ CNSI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-navy-800 rounded-2xl overflow-hidden border border-navy-700 flex flex-col hover:border-royal-blue/50 transition-colors"
          >
            <div className="h-[400px] w-full bg-navy-700 relative">
              <div id="daumRoughmapContainer1774449235800" className="root_daum_roughmap root_daum_roughmap_landing w-full h-full"></div>
            </div>
            <div className="p-8 flex-grow">
              <div className="mb-6 h-12 md:h-14">
                <img src="/logo/ezcnsi_white_logo.png" alt="(주)이지씨앤에스아이" className="h-full object-contain object-left" />
              </div>
              <div className="space-y-4 text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
                  <p>서울특별시 금천구 가산디지털1로 205-27<br/>가산 A1타워 4층 426호</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-electric-blue shrink-0" />
                  <p>02-6218-0050</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EZ OREUM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-navy-800 rounded-2xl overflow-hidden border border-navy-700 flex flex-col hover:border-electric-blue/50 transition-colors"
          >
            <div className="h-[400px] w-full bg-navy-700 relative">
              <div id="daumRoughmapContainer1774449294763" className="root_daum_roughmap root_daum_roughmap_landing w-full h-full"></div>
            </div>
            <div className="p-8 flex-grow">
              <div className="mb-6 h-12 md:h-14">
                <img src="/logo/ezoreum_white_logo.png" alt="(주)이지오름" className="h-full object-contain object-left" />
              </div>
              <div className="space-y-4 text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
                  <p>제주특별자치도 서귀포시 인정오름로 86번길 27<br/>105동 101호</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-electric-blue shrink-0" />
                  <p>064-902-9900</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-16 border-t border-navy-800 pt-8 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} EZ CNSI & EZ OREUM. All rights reserved.</p>
      </footer>
    </section>
  );
}
