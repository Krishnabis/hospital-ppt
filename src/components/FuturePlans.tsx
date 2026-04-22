"use client";

import { motion } from "framer-motion";
import { Server, ChartSpline, GraduationCap, MonitorSmartphone } from "lucide-react";

export default function FuturePlans() {
  const cards = [
    { title: "Digital HMIS Integration", desc: "Complete paperless hospital management system driving real-time data flow.", icon: Server, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Smart KPI Tracking", desc: "Automated dashboards for instantaneous quality indicator monitoring.", icon: ChartSpline, color: "text-indigo-500", bg: "bg-indigo-50" },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 bg-slate-900 border-t border-slate-800 overflow-hidden">
      
      {/* Background Neon Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-white">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 drop-shadow-sm">
            Roadmap to the Future
          </h2>
          <div className="h-1 w-24 bg-sky-500 rounded-full mx-auto shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
          <p className="mt-6 text-slate-400 max-w-2xl text-lg">
            Navigating geographical challenges through digital innovation to deliver uncompromised quality healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:bg-slate-800 transition-colors group cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                   <card.icon size={28} className={card.color} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">{card.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
