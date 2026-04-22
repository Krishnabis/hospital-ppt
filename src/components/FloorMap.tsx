"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Info } from "lucide-react";

const blocks = [
  {
    id: "block1",
    name: "Block 1",
    floors: [
      { name: "Ground Floor", depts: ["Emergency", "Emergency OT", "Ayushman Center", "OPD (Ortho, Medicine, Surgery, Eye, TB Chest, PMR, Dental)", "ECG", "Dispensary (Pharmacy)", "Minor OT", "Injection Room", "Dressing Room", "PAC", "Registration Counter", "Billing Counter", "CT, MRI, X-Ray, Ultrasound", "Sample Collection", "ASHA Help Desk"] },
      { name: "First Floor", depts: ["MS Office", "Principal Office", "MRD Office", "Blood Bank", "Dialysis", "RICU", "JSY", "Gynae OT", "Gynae Ward", "Labour Room", "OPD (Gynae, Pediatrics, ENT, Cancer, Skin)", "ANM Room", "Infertility Room", "Gynae Demo Room"] },
      { name: "Second Floor", depts: ["NICU", "Surgery", "Medicine Office"] },
      { name: "Third Floor", depts: ["Skill Center"] }
    ],
    assemblyPoints: ["AP-1: Near Emergency", "AP-2: Near OPD Registration", "AP-3: Near Gynae Ward"],
    color: "from-sky-400 to-indigo-500",
    shadow: "shadow-sky-500/30"
  },
  {
    id: "block2",
    name: "Block 2",
    floors: [
      { name: "Ground Floor", depts: ["Oxygen Plant", "Surgery Ward (1, 3)", "Biometric Office", "EEG Lab", "Electrician Room", "Internet Server Room", "Lab"] },
      { name: "First Floor", depts: ["Main Store (Pharmacy)", "ANS Office", "Pediatrics Ward", "Surgery Ward 2", "OT", "Private Ward (6 Beds)"] },
      { name: "Second Floor", depts: ["LT-5", "OT"] }
    ],
    assemblyPoints: ["AP-4: Near Oxygen Plant"],
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/30"
  },
  {
    id: "block3",
    name: "Block 3",
    floors: [
      { name: "Ground Floor", depts: ["Ortho Ward (M/F)", "Kitchen", "CSSD"] },
      { name: "First Floor", depts: ["Medicine 1 Ward", "ENT Ward"] },
      { name: "Second Floor", depts: ["Eye Ward", "Medicine 2 Ward", "Endoscopy Room", "ECG"] }
    ],
    assemblyPoints: ["AP-5: Near CSSD"],
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/30"
  },
  {
    id: "block4",
    name: "Block 4",
    floors: [
      { name: "Ground Floor", depts: ["Respiratory Ward", "Bronchoscopy"] },
      { name: "First Floor", depts: ["Cath Lab", "MICU"] },
      { name: "Second Floor", depts: ["Neuro Ward", "AICU"] },
      { name: "Third Floor", depts: ["RT & Palliative Psychiatry Ward", "Skin Ward"] }
    ],
    assemblyPoints: ["AP-6: Near Respiratory", "AP-7: Near MICU"],
    color: "from-rose-400 to-red-500",
    shadow: "shadow-rose-500/30"
  }
];

export default function FloorMap() {
  const [activeBlock, setActiveBlock] = useState(blocks[0]);
  const [activeFloorIndex, setActiveFloorIndex] = useState(0);

  // Reset floor index when changing blocks
  const handleBlockChange = (block: typeof blocks[0]) => {
    setActiveBlock(block);
    setActiveFloorIndex(0);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-24 bg-white overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4 text-center">
            Floor & Block Distribution
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-slate-500 font-medium">Click on a floor plate to explore its departments</p>
        </motion.div>

        <div className="w-full max-w-[95rem] grid grid-cols-1 lg:grid-cols-[180px_1fr_1.2fr] gap-8 items-start">
          
          {/* Left Side: Vertical Block Selection */}
          <div className="flex flex-col gap-3 sticky top-24 relative z-20">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 mb-2">Block</h4>
            {blocks.map((block) => (
              <button
                key={block.id}
                onClick={() => handleBlockChange(block)}
                className={`group relative px-5 py-4 rounded-2xl font-bold transition-all duration-300 text-left flex items-start flex-col gap-1 overflow-hidden ${
                  activeBlock.id === block.id 
                    ? `bg-slate-900 text-white shadow-xl` 
                    : 'glass text-slate-500 hover:bg-slate-50'
                }`}
              >
                {activeBlock.id === block.id && (
                  <motion.div 
                    layoutId="sidebarGlow"
                    className={`absolute inset-0 bg-gradient-to-r ${block.color} opacity-10`}
                  />
                )}
                <span className="relative z-10 text-base">{block.name}</span>
                <span className={`relative z-10 text-[9px] uppercase tracking-wider opacity-60 ${activeBlock.id === block.id ? 'text-sky-300' : 'text-slate-400'}`}>
                  {block.floors.length} Levels
                </span>
              </button>
            ))}
          </div>

          {/* Center Column: Interactive 3D Display */}
          <div className="relative w-full flex flex-col items-center">
            <div className="relative h-[480px] w-full flex justify-center items-center perspective-2000 hidden lg:flex">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeBlock.id}
                   initial={{ opacity: 0, rotateX: 60, rotateZ: -45, y: 40, scale: 0.9 }}
                   animate={{ opacity: 1, rotateX: 60, rotateZ: -45, y: 80, scale: 1 }}
                   exit={{ opacity: 0, rotateX: 60, rotateZ: -45, y: 120, scale: 0.9 }}
                   transition={{ 
                     duration: 0.8, 
                     type: "spring", 
                     stiffness: 50, 
                     damping: 15,
                     mass: 1
                   }}
                   className="relative w-64 h-64 preserve-3d"
                   style={{ transformStyle: "preserve-3d" }}
                 >
                   {activeBlock.floors.map((floor, idx) => {
                     const isSelected = activeFloorIndex === idx;
                     return (
                       <motion.div
                         key={idx}
                         initial={{ z: -50, opacity: 0 }}
                         animate={{ 
                           z: idx * 85 + (isSelected ? 30 : 0),
                           opacity: 1,
                           scale: isSelected ? 1.05 : 1,
                           backgroundColor: isSelected ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.75)"
                         }}
                         whileHover={{ z: idx * 85 + 20 }}
                         transition={{ 
                           duration: 0.6, 
                           delay: 0.2 + (idx * 0.1),
                           ease: [0.23, 1, 0.32, 1] 
                         }}
                         onClick={() => setActiveFloorIndex(idx)}
                         className={`absolute inset-0 backdrop-blur-md border shadow-[0_12px_30px_rgba(0,0,0,0.06)] rounded-[1.8rem] flex items-center justify-center cursor-pointer group transition-all duration-300 ${isSelected ? 'border-sky-400 ring-4 ring-sky-400/20' : 'border-white/50'}`}
                       >
                         <div className={`absolute inset-0 bg-gradient-to-br ${activeBlock.color} transition-opacity duration-300 ${isSelected ? 'opacity-15' : 'opacity-0 group-hover:opacity-10'}`} />
                         <div className="transform -rotateZ-[45deg] -rotateX-[60deg] text-center pointer-events-none">
                            <p className={`text-[9px] uppercase tracking-widest font-bold mb-0.5 ${isSelected ? 'text-sky-500' : 'text-slate-400'}`}>L0{idx}</p>
                            <span className={`font-black text-lg bg-white/40 px-3.5 py-1.5 rounded-xl border border-white/50 ${isSelected ? 'text-sky-600' : 'text-slate-800'}`}>
                              {floor.name}
                            </span>
                         </div>
                       </motion.div>
                     );
                   })}
                 </motion.div>
               </AnimatePresence>
            </div>
            <p className="mt-4 text-slate-400 text-[11px] font-bold animate-pulse uppercase tracking-tighter">← Select Level</p>
          </div>

          {/* Right Column: Dynamic Floor Services & Assembly Points */}
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeBlock.id}-${activeFloorIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                {/* Floor Services Card */}
                <div className="glass p-8 rounded-[2.5rem] relative overflow-hidden border border-sky-100/50 shadow-xl min-h-[320px]">
                  <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${activeBlock.color}`} />
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="text-3xl font-black text-slate-800 tracking-tight">
                        {activeBlock.floors[activeFloorIndex].name}
                      </h3>
                      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">{activeBlock.name}</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 font-black text-lg shadow-inner">
                      0{activeFloorIndex}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {activeBlock.floors[activeFloorIndex].depts.map((d, i) => (
                      <motion.span 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.02 }}
                        className="px-4 py-2 bg-white rounded-xl text-[12px] font-bold text-slate-700 shadow-sm border border-slate-100 hover:border-sky-300 transition-all"
                      >
                        {d}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Compact Assembly Points Section (Moved up here) */}
                <div className="p-6 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <MapPin size={60} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-sky-500 flex items-center justify-center">
                        <Info size={18} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold tracking-tight">Assembly Points</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeBlock.assemblyPoints.map((ap, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          <span className="font-bold text-[11px] text-slate-300">{ap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        </div>
    </section>
  );
}
