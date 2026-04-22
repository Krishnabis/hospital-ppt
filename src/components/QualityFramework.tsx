"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Crosshair, ClipboardCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Safety First Policy",
    desc: "Strict adherence to infection control, zero-tolerance for medical negligence.",
    icon: ShieldCheck,
    color: "from-rose-400 to-rose-600",
  },
  {
    title: "Continuous Monitoring",
    desc: "24/7 surveillance of clinical outcomes and patient feedback mechanisms.",
    icon: Crosshair,
    color: "from-sky-400 to-sky-600",
  },
  {
    title: "Audits & Compliance",
    desc: "Regular internal and external medical audits mapping to NABH standards.",
    icon: ClipboardCheck,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    title: "Quality Improvement",
    desc: "Data-driven PDCA (Plan-Do-Check-Act) cycles for process optimization.",
    icon: TrendingUp,
    color: "from-indigo-400 to-indigo-600",
  }
];

export default function QualityFramework() {
  return (
    <section id="quality" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-white overflow-hidden">
      
      {/* Dynamic Background Path */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
         <motion.path 
            d="M -100 500 Q 300 100 700 500 T 1500 500" 
            fill="none" 
            stroke="url(#path-grad)" 
            strokeWidth="100" 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
         />
         <defs>
           <linearGradient id="path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="#38bdf8" />
             <stop offset="100%" stopColor="#818cf8" />
           </linearGradient>
         </defs>
      </svg>

      <div className="container mx-auto px-6 relative z-10 flex flex-col xl:flex-row items-center gap-16">
        
        {/* Left Side text */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full xl:w-1/3"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-6">
            Quality & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Patient Safety</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mb-8 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
          <p className="text-slate-600 text-lg leading-relaxed">
            Our framework is designed to ensure the highest standards of clinical excellence. We meticulously track and enhance every touchpoint of patient care through continuous evaluation and systematic improvements.
          </p>
        </motion.div>

        {/* Right Side Timeline */}
        <div className="w-full xl:w-2/3 relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`glass-neon p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden bg-white ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-90 z-0" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <step.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
