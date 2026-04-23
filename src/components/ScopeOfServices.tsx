"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Stethoscope, Activity, FileDigit, Plus, Microscope, Scan } from "lucide-react";

const nodes = [
  {
    id: "clinical",
    title: "Clinical Services",
    icon: Stethoscope,
    gradient: "from-sky-400 to-blue-500",
    shadow: "shadow-sky-400/50",
    services: [
      "Anesthesiology",
      "Dental",
      "Dermatology & Venereology",
      "General Medicine",
      "General Surgery incl. Laparoscopy",
      "Medical Oncology",
      "Neonatology",
      "Nephrology incl. Dialysis",
      "Obstetrics & Gynaecology",
      "Ophthalmology",
      "Orthopedic Surgery incl. Joint Replacement",
      "Paediatrics",
      "Psychiatry"
    ]
  },
  {
    id: "radiology",
    title: "Radiology & Imaging",
    icon: Scan,
    gradient: "from-indigo-400 to-purple-500",
    shadow: "shadow-indigo-400/50",
    services: ["X-Ray", "Ultrasound", "CT Scan (Computed Tomography)", "MRI (Magnetic Resonance Imaging)", "Color Doppler"]
  },
  {
    id: "pathology",
    title: "Laboratory & Pathology",
    icon: Microscope,
    gradient: "from-rose-400 to-pink-500",
    shadow: "shadow-rose-400/50",
    services: [
      "Microbiology — Serology",
      "Microbiology — Bacteriology",
      "Microbiology — Virology",
      "Microbiology — Mycology",
      "Biochemistry",
      "Clinical Pathology — Histopathology",
      "Clinical Pathology — Hematology",
      "Clinical Pathology — Cytology",
      "Clinical Pathology — Histochemistry",
      "Body & Routine Fluids"
    ]
  },
  {
    id: "support",
    title: "Support Services",
    icon: FileDigit,
    gradient: "from-teal-400 to-emerald-500",
    shadow: "shadow-teal-400/50",
    services: ["Physiotherapy", "Pharmacy", "Dietary Services", "Biomedical Engineering", "Fleet & Ambulance", "Housekeeping"]
  }
];

export default function ScopeOfServices() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Allow clicking anywhere in the section to close the active state
  const handleOutsideClick = () => {
    if (activeNode) setActiveNode(null);
  };

  return (
    <section id="scope"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 bg-slate-50 overflow-hidden cursor-default"
      onClick={handleOutsideClick}
    >
      <div className="container mx-auto px-6 relative z-10 block pointer-events-none">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20 pointer-events-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Quality Care Ecosystem
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto" />
        </motion.div>

        {/* Desktop Hub UI */}
        <div className="hidden lg:flex w-full max-w-6xl mx-auto items-center justify-center relative min-h-[650px] pointer-events-auto">
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-sky-200/50 w-[500px] h-[500px] pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-indigo-200/40 w-[650px] h-[650px] pointer-events-none"
          />

          <div className={`z-10 bg-white shadow-xl rounded-full w-40 h-40 flex flex-col items-center justify-center relative neon-glow pointer-events-none transition-all duration-500 ${activeNode ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
            <h3 className="font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 text-center leading-none">
              SCOPE<br/>OF<br/>SERVICES
            </h3>
          </div>

          {nodes.map((node, index) => {
            const angle = (index * 360) / nodes.length;
            // Slightly smaller radius to fit perfectly
            const x = Math.cos((angle * Math.PI) / 180) * 260;
            const y = Math.sin((angle * Math.PI) / 180) * 260;

            const isActive = activeNode === node.id;
            const isOtherActive = activeNode && !isActive;

            // When active, the node moves to the top center so it has room to expand fully
            const targetX = isActive ? 0 : x;
            const targetY = isActive ? -150 : y;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: isOtherActive ? 0 : 1, 
                  x: isOtherActive ? x * 1.5 : targetX, 
                  y: isOtherActive ? y * 1.5 : targetY,
                  zIndex: isActive ? 50 : 20
                }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className={`absolute cursor-pointer ${isOtherActive ? 'pointer-events-none' : 'pointer-events-auto'}`}
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setActiveNode(isActive ? null : node.id); 
                }}
              >
                <div 
                  className={`glass-neon p-6 rounded-[2rem] transition-all duration-500 ${
                    isActive 
                      ? `w-[550px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] border-sky-300/50 outline outline-4 outline-sky-100/50` 
                      : `w-72 shadow-lg hover:scale-105`
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${node.gradient} text-white flex items-center justify-center shadow-lg flex-shrink-0 transition-transform ${isActive ? 'scale-110' : ''}`}>
                      <node.icon size={24} />
                    </div>
                    <h3 className={`font-bold text-slate-800 transition-all ${isActive ? 'text-2xl' : 'text-xl leading-tight'}`}>
                      {node.title}
                    </h3>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                          {node.services.map((svc, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="text-base font-medium text-slate-700 flex items-center gap-3 bg-white/60 p-2.5 rounded-xl shadow-sm border border-slate-100"
                            >
                              <div className={`w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-r ${node.gradient} shadow-sm`} />
                              {svc}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Accordion UI */}
        <div className="flex lg:hidden flex-col gap-6 w-full max-w-lg mx-auto pointer-events-auto">
          {nodes.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`glass-neon rounded-3xl p-6 relative overflow-hidden transition-all duration-300 pointer-events-auto cursor-pointer ${isActive ? `shadow-xl ${node.shadow}` : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveNode(isActive ? null : node.id);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${node.gradient} text-white flex items-center justify-center shadow-lg`}>
                      <node.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{node.title}</h3>
                  </div>
                  <motion.div animate={{ rotate: isActive ? 45 : 0 }} className="text-slate-400">
                    <Plus size={24} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-6 pl-16 border-t border-slate-200/50 pt-4"
                    >
                      <ul className="space-y-3 pb-2">
                        {node.services.map((svc, i) => (
                          <li key={i} className="text-sm font-medium text-slate-600 flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-r ${node.gradient}`} />
                            {svc}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
