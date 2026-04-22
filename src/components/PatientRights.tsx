"use client";

import { motion } from "framer-motion";
import { HandHeart, Scale, Shield, FileSignature, AlertCircle } from "lucide-react";

export default function PatientRights() {
  const rights = [
    { title: "Right to Information", desc: "Complete information regarding diagnosis and treatment.", icon: FileSignature, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Right to Privacy", desc: "Confidentiality during consultation and treatment.", icon: Shield, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Right to Respect", desc: "Treatment with dignity without discrimination.", icon: HandHeart, color: "text-rose-500", bg: "bg-rose-50" },
    { title: "Fair Treatment", desc: "Access to the best care regardless of background.", icon: Scale, color: "text-indigo-500", bg: "bg-indigo-50" },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Patient Rights & Duties
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl w-full items-start">
          
          {/* Rights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rights.map((right, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-neon p-6 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${right.bg} flex items-center justify-center mb-6`}>
                  <right.icon size={28} className={right.color} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{right.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{right.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-neon p-10 rounded-[3rem] border-sky-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <AlertCircle size={120} className="text-sky-500" />
            </div>
            
            <h3 className="text-3xl font-extrabold text-slate-800 mb-6 relative z-10 flex items-center gap-4">
              Patient Responsibilities
            </h3>
            
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <p className="text-slate-600 leading-relaxed pt-1">Provide correct and complete demographic and medical information.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <p className="text-slate-600 leading-relaxed pt-1">Follow the prescribed treatment plan and communicate any difficulties.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <p className="text-slate-600 leading-relaxed pt-1">Respect the hospital rules, including visiting hours and hygiene protocols.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <p className="text-slate-600 leading-relaxed pt-1">Treat hospital staff, other patients, and visitors with respect and courtesy.</p>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
