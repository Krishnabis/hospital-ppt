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

const assemblyPointMap: Record<string, string> = {
  "Emergency": "Assembly Point 1",
  "Registration Counter": "Assembly Point 2",
  "Gynae Ward": "Assembly Point 3",
  "Oxygen Plant": "Assembly Point 4",
  "CSSD": "Assembly Point 5",
  "Respiratory Ward": "Assembly Point 6",
  "MICU": "Assembly Point 7"
};

export default function FloorMap() {
  const [activeBlock, setActiveBlock] = useState(blocks[0]);
  const [activeFloorIndex, setActiveFloorIndex] = useState(0);

  // Reset floor index when changing blocks
  const handleBlockChange = (block: typeof blocks[0]) => {
    setActiveBlock(block);
    setActiveFloorIndex(0);
  };

  return (
    <section id="map" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-white overflow-hidden">
      
      {/* Dynamic Background */}


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

          {/* Center Column: Floor Selector (Elevator Style) */}
          <div className="relative w-full flex flex-col items-center justify-center min-h-[360px] lg:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBlock.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col-reverse gap-3 w-full max-w-sm my-auto"
              >
                {activeBlock.floors.map((floor, idx) => {
                  const isSelected = activeFloorIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveFloorIndex(idx)}
                      className={`relative w-full p-4 rounded-2xl flex items-center justify-between border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${
                        isSelected 
                          ? 'bg-slate-900 border-slate-800 text-white transform scale-105 shadow-xl z-10' 
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {isSelected && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${activeBlock.color} opacity-20`} />
                      )}
                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
                        }`}>
                          L{idx}
                        </div>
                        <span className={`font-bold text-lg ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                          {floor.name}
                        </span>
                      </div>
                      
                      <div className={`relative z-10 text-xs font-bold px-3 py-1 rounded-full ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {floor.depts.length} Depts
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
            <p className="mt-8 text-slate-400 text-[11px] font-bold animate-pulse uppercase tracking-widest">
              ↑ Select Floor
            </p>
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
                    {activeBlock.floors[activeFloorIndex].depts.map((d, i) => {
                      const ap = assemblyPointMap[d];
                      return (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.02 }}
                          className={`relative group px-4 py-2 rounded-xl text-[12px] font-bold shadow-sm border transition-all flex items-center gap-2 cursor-default ${
                            ap ? 'bg-blue-500 text-white border-blue-600 hover:bg-blue-600 shadow-blue-500/30 shadow-md' : 'bg-white text-slate-700 border-slate-100 hover:border-sky-300'
                          }`}
                        >
                          {d}
                          {ap && (
                            <>
                              <Info size={14} className="text-white opacity-90" />
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold whitespace-nowrap rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
                                {ap}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-slate-900" />
                              </div>
                            </>
                          )}
                        </motion.div>
                      );
                    })}
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
