"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Flame, Trash2, Wind, Pill, Radiation, Microscope, Zap, Map, FileText, Activity } from "lucide-react";

const categories = [
  { id: "infra", name: "Infrastructure" },
  { id: "clinical", name: "Clinical" },
  { id: "radiology", name: "Radiology/AERB" }
];

const compliances = [
  // INFRASTRUCTURE & ENVIRONMENT
  { 
    category: "infra",
    name: "Clinical Establishment Act", 
    short: "CEA", 
    icon: ShieldCheck, 
    color: "text-emerald-500", 
    bg: "bg-emerald-50", 
    license: "DRA/CEA/Govt/296", 
    authority: "CMO Office",
    issue: "13/07/2025", 
    expiry: "12/07/2026" 
  },
  { 
    category: "infra",
    name: "Bio-Medical Waste", 
    short: "BMW", 
    icon: Trash2, 
    color: "text-amber-500", 
    bg: "bg-amber-50", 
    license: "UKPCB/DEHRADUN/RO/PAURI/BMW/4127706", 
    authority: "Uttarakhand Pollution Control Board",
    issue: "27/01/2026", 
    expiry: "31/03/2028" 
  },
  { 
    category: "infra",
    name: "Consent under Water Act", 
    short: "WATER", 
    icon: Activity, 
    color: "text-blue-500", 
    bg: "bg-blue-50", 
    license: "UKPCB/DEHRADUN/RO/PAURI/BMW/4127706", 
    authority: "Uttarakhand Pollution Control Board",
    issue: "27/01/2026", 
    expiry: "31/03/2028" 
  },
  { 
    category: "infra",
    name: "Consent under Air Act", 
    short: "AIR", 
    icon: Wind, 
    color: "text-sky-500", 
    bg: "bg-sky-50", 
    license: "UKPCB/DEHRADUN/RO/PAURI/BMW/4127706", 
    authority: "Uttarakhand Pollution Control Board",
    issue: "27/01/2026", 
    expiry: "31/03/2028" 
  },
  { 
    category: "infra",
    name: "TAN Registration", 
    short: "TAN", 
    icon: FileText, 
    color: "text-slate-500", 
    bg: "bg-slate-50", 
    license: "MRTV01259G", 
    authority: "Income Tax Department",
    issue: "NA", 
    expiry: "NA" 
  },
  { 
    category: "infra",
    name: "Fire NOC", 
    short: "FIRE", 
    icon: Flame, 
    color: "text-rose-500", 
    bg: "bg-rose-50", 
    license: "73207212", 
    authority: "CFO Office",
    issue: "21/07/2025", 
    expiry: "Reapplied (Pending)" 
  },

  // CLINICAL SERVICES
  { 
    category: "clinical",
    name: "Blood Bank License", 
    short: "BLOOD", 
    icon: Zap, 
    color: "text-red-500", 
    bg: "bg-red-50", 
    license: "1/UA/SC/P/BB/2003", 
    authority: "Food Safety & Drug Administration",
    issue: "16/09/2023", 
    expiry: "15/09/2028" 
  },
  { 
    category: "clinical",
    name: "MTP License", 
    short: "MTP", 
    icon: Pill, 
    color: "text-indigo-500", 
    bg: "bg-indigo-50", 
    license: "Sub Rule 6 of Rule 5", 
    authority: "CMO Office",
    issue: "14/01/2026", 
    expiry: "Permanent" 
  },
  { 
    category: "clinical",
    name: "PC-PNDT Registration", 
    short: "PNDT", 
    icon: Microscope, 
    color: "text-purple-500", 
    bg: "bg-purple-50", 
    license: "PNDT/02/2001", 
    authority: "CMO Office",
    issue: "04/10/2025", 
    expiry: "30/12/2026" 
  },

  // RADIOLOGY & AERB
  { 
    category: "radiology",
    name: "AERB - Fixed X-Ray (1)", 
    short: "X-RAY", 
    icon: Radiation, 
    color: "text-orange-500", 
    bg: "bg-orange-50", 
    license: "UK-60275-RF-XR-006", 
    authority: "AERB",
    issue: "20/01/2023", 
    expiry: "20/01/2028" 
  },
  { 
    category: "radiology",
    name: "AERB - Fixed X-Ray (2)", 
    short: "X-RAY", 
    icon: Radiation, 
    color: "text-orange-600", 
    bg: "bg-orange-50", 
    license: "UK-60275-RF-XR-004", 
    authority: "AERB",
    issue: "20/01/2023", 
    expiry: "20/01/2028" 
  },
  { 
    category: "radiology",
    name: "AERB - Mobile X-Ray (1)", 
    short: "X-RAY", 
    icon: Map, 
    color: "text-blue-600", 
    bg: "bg-blue-50", 
    license: "UK-60275-RF-XR-013", 
    authority: "AERB",
    issue: "20/01/2023", 
    expiry: "20/01/2028" 
  },
  { 
    category: "radiology",
    name: "AERB - Mobile X-Ray (2)", 
    short: "X-RAY", 
    icon: Map, 
    color: "text-blue-700", 
    bg: "bg-blue-50", 
    license: "UK-60275-RF-XR-014", 
    authority: "AERB",
    issue: "20/01/2023", 
    expiry: "20/01/2028" 
  },
  { 
    category: "radiology",
    name: "AERB - CT Scan", 
    short: "CT", 
    icon: Radiation, 
    color: "text-amber-600", 
    bg: "bg-amber-50", 
    license: "UK-60275-RF-XL-009", 
    authority: "AERB",
    issue: "20/01/2023", 
    expiry: "20/01/2028" 
  },
  { 
    category: "radiology",
    name: "MRI Registration", 
    short: "MRI", 
    icon: Activity, 
    color: "text-teal-600", 
    bg: "bg-teal-50", 
    license: "PCPNDT/2023-24/4460", 
    authority: "NA",
    issue: "30/08/2023", 
    expiry: "NA" 
  },
  { 
    category: "radiology",
    name: "AERB - C-Arm", 
    short: "C-ARM", 
    icon: Radiation, 
    color: "text-cyan-600", 
    bg: "bg-cyan-50", 
    license: "UK-60275-RF-XR-021", 
    authority: "AERB",
    issue: "06/04/2026", 
    expiry: "06/04/2031" 
  },
];

export default function Compliances() {
  const [activeTab, setActiveTab] = useState("infra");

  const filteredCompliances = compliances.filter(c => c.category === activeTab);

  return (
    <section id="compliances" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Statutory Compliances
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto" />
          <p className="mt-6 text-slate-500 font-medium">Verified certificates and operational licenses</p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-slate-200/50 rounded-2xl mb-12 backdrop-blur-sm mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all duration-300 ${activeTab === cat.id ? 'bg-white text-slate-900 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-8 min-h-[400px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 0.4 }}
               className="flex flex-wrap justify-center gap-8 w-full"
             >
               {filteredCompliances.map((item, idx) => (
                 <FlipCard key={`${activeTab}-${idx}`} item={item} index={idx} />
               ))}
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function FlipCard({ item, index }: { item: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="w-72 h-80 cursor-pointer relative group"
      style={{ perspective: 1000 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 60, damping: 15 }}
        className="w-full h-full relative preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass-neon p-6 rounded-[2.5rem] flex flex-col items-center justify-center text-center bg-white shadow-lg border border-white hover:border-sky-100 transition-colors">
          <div className={`w-20 h-20 rounded-[1.5rem] ${item.bg} flex items-center justify-center mb-6 shadow-inner relative group-hover:scale-110 transition-transform`}>
            <item.icon size={36} className={item.color} />
          </div>
          <h3 className="text-xl font-black text-slate-800 mb-2 leading-tight px-2">{item.name}</h3>
          <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-400 text-[10px] font-black tracking-widest uppercase">{item.short}</span>
          
          <div className="absolute bottom-6 flex items-center gap-2 text-slate-300">
             <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
             <p className="text-[10px] font-bold uppercase tracking-tighter">Details View</p>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden glass-neon p-6 rounded-[2.5rem] flex flex-col items-center justify-center text-center bg-white shadow-xl"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="w-full border-b border-slate-100 pb-3 mb-4">
            <p className="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-1">{item.short} Certificate</p>
            <h4 className="text-sm font-black text-slate-800">Verification Details</h4>
          </div>
          
          <div className="space-y-4 w-full text-left">
            <div>
              <p className="text-[9px] text-slate-400 uppercase font-black tracking-wider">License Number</p>
              <p className="font-mono text-[11px] font-bold text-slate-700 leading-tight">{item.license}</p>
            </div>
            <div>
              <p className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Issuing Authority</p>
              <p className="text-[11px] font-bold text-slate-700">{item.authority}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Issue Date</p>
                <p className="text-[11px] font-bold text-slate-600">{item.issue}</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Valid Till</p>
                <p className={`text-[11px] font-black ${item.expiry === 'Permanent' ? 'text-emerald-500' : 'text-slate-600'}`}>{item.expiry}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-1.5">
             <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
             <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Compliant</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
