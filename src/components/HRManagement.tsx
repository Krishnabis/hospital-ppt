"use client";

import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { UserPlus, UserRound, Users, Stethoscope } from "lucide-react";

export default function HRManagement() {
  const count = useMotionValue(0);
  const displayCount = useTransform(count, (latest) => Math.round(latest));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) {
      animate(count, 986, { duration: 2.5, ease: "easeOut" });
    }
  }, [hasAnimated, count]);

  const stats = [
    { name: "Officers & Professors", icon: UserPlus, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Associate & Asst Profs", icon: Stethoscope, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "SR & JR (Residents)", icon: UserRound, color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Clerical, Contract & Regular", icon: Users, color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 bg-white overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           onViewportEnter={() => setHasAnimated(true)}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Human Resources
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our greatest asset is our dedicated team of medical professionals, nursing staff, and support personnel who work round the clock to deliver exceptional care.
          </p>
        </motion.div>

        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-16">
          
          {/* Neon Hero Counter */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col items-center justify-center glass-neon p-12 rounded-[3rem] shadow-2xl relative"
          >
            <div className="flex items-baseline gap-2">
              <motion.span className="text-8xl md:text-9xl font-black tabular-nums tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-600">
                {displayCount}
              </motion.span>
              <span className="text-6xl font-bold text-sky-500">+</span>
            </div>
            <p className="mt-4 text-xl font-bold text-slate-400 uppercase tracking-widest">
              Total Active Staff
            </p>

            {/* Floating avatars effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem]">
              {[
                { left: "22%", top: "18%", duration: 3.2 },
                { left: "76%", top: "25%", duration: 4.1 },
                { left: "43%", top: "67%", duration: 3.8 },
                { left: "85%", top: "72%", duration: 4.6 },
                { left: "15%", top: "54%", duration: 3.5 },
                { left: "60%", top: "12%", duration: 4.9 },
              ].map((avatar, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [10, -20, 10], 
                    opacity: [0.1, 0.5, 0.1] 
                  }}
                  transition={{ 
                    duration: avatar.duration, 
                    repeat: Infinity, 
                    delay: i * 0.5 
                  }}
                  className="absolute"
                  style={{
                    left: avatar.left,
                    top: avatar.top
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-slate-200 shadow-sm border border-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Breakdown Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.15), duration: 0.5 }}
                className="glass p-6 rounded-3xl flex flex-col group hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] transition-all bg-white relative overflow-hidden"
              >
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <stat.icon size={120} className={stat.color} />
                </div>

                <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mb-4 shadow-inner relative z-10`}>
                  <stat.icon size={24} className={stat.color} />
                </div>
                
                <h4 className="text-xl md:text-2xl font-extrabold text-slate-800 relative z-10 mt-2">
                  {stat.name}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
