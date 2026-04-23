"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Stethoscope, Activity, Baby, ArrowRight, ClipboardList, 
  Clipboard, HeartPulse, FlaskConical, BriefcaseMedical, Building2,
  Wind, Thermometer, TestTube, Syringe, UserCog, History, 
  ShieldAlert, Droplets, Zap, Eye, Scale, Pill, Microscope, 
  ChevronRight, Box
} from "lucide-react";

type Step = {
  title: string;
  desc: string;
  icon: any;
};

type Pathway = {
  id: string;
  name: string;
  steps: Step[];
};

type Category = {
  id: string;
  name: string;
  icon: any;
  color: string;
  pathways: Pathway[];
};

const clinicalData: Category[] = [
  {
    id: "emergency",
    name: "Emergency Department",
    icon: Stethoscope,
    color: "blue",
    pathways: [
      {
        id: "copd",
        name: "COPD Patient",
        steps: [
          { title: "Triage (0-5 Min)", desc: "Assess Red/Yellow flags (Airway, SpO2, Accessory muscles).", icon: Clipboard },
          { title: "Immediate Actions", desc: "Oxygen therapy (88-92%), sitting position, cardiac monitoring.", icon: Wind },
          { title: "Investigations", desc: "ABG, CBC, CXR, ECG, Serum Electrolytes.", icon: FlaskConical },
          { title: "Treatment", desc: "Nebulization, IV steroids, Antibiotics, BiPAP if pH < 7.35.", icon: BriefcaseMedical },
          { title: "Disposition", desc: "Admit to ICU if unstable, or ward/discharge with counseling.", icon: Building2 }
        ]
      },
      {
        id: "febrile",
        name: "Febrile Illness",
        steps: [
          { title: "Triage", desc: "Check Red Flags: Hypotension, Altered sensorium, Sepsis suspicion.", icon: ShieldAlert },
          { title: "Assessment", desc: "Vitals, Travel & Exposure history.", icon: History },
          { title: "Investigations", desc: "CBC, Malaria/Dengue/Typhoid tests, Blood culture.", icon: Microscope },
          { title: "Management", desc: "IV Fluids, Paracetamol, Empirical Antibiotics.", icon: Pill },
          { title: "Sepsis Protocol", desc: "Lactate measurement, Fluid bolus (30ml/kg) within 1hr.", icon: Zap },
          { title: "Disposition", desc: "Observation ward or admission based on stability.", icon: Building2 }
        ]
      },
      {
        id: "anemia",
        name: "Anemia Patient",
        steps: [
          { title: "Triage", desc: "Identify severity: Pallor, Breathlessness, Syncope.", icon: ShieldAlert },
          { title: "Assessment", desc: "Vitals, Hb estimation, bleeding history.", icon: Clipboard },
          { title: "Investigations", desc: "CBC with indices, Retic count, Blood grouping/cross-match.", icon: Droplets },
          { title: "Management", desc: "Oxygen support, IV access, Packed RBC if Hb < 7g/dL.", icon: Syringe },
          { title: "Disposition", desc: "Admit if Red Flags (Hypotension, Active bleeding) present.", icon: Building2 }
        ]
      },
      {
        id: "chest-pain",
        name: "Chest Pain",
        steps: [
          { title: "Triage (0-10 Min)", desc: "ECG within 10 mins, Pain assessment.", icon: Zap },
          { title: "Actions", desc: "Cardiac monitor, IV access, Oxygen if hypoxic.", icon: HeartPulse },
          { title: "MONA Protocol", desc: "Morphine, Oxygen, Nitrates, Aspirin (Loading dose).", icon: Pill },
          { title: "Investigations", desc: "Serial ECG, Troponin I/T, CK-MB, Chest X-ray.", icon: Microscope },
          { title: "Disposition", desc: "Cath Lab/ICU (STEMI) or Rule-out protocol (Observation).", icon: Building2 }
        ]
      }
    ]
  },
  {
    id: "surgery",
    name: "Surgery Department",
    icon: Activity,
    color: "blue",
    pathways: [
      {
        id: "hernia",
        name: "Hernia (Inguinal/Ventral)",
        steps: [
          { title: "Presentation", desc: "Reducible swelling, Pain on exertion, Irreducibility (Emergency).", icon: ShieldAlert },
          { title: "Evaluation", desc: "Clinical diagnosis, Fitness assessment, USG if doubtful.", icon: Microscope },
          { title: "Management", desc: "Elective mesh repair OR Resuscitation/Surgery for strangulation.", icon: Zap },
          { title: "Post-op Care", desc: "Early ambulation (6-8 hrs), Analgesics, Wound care.", icon: HeartPulse },
          { title: "Discharge", desc: "POD 1-3 with heavy lifting precautions for 4-6 weeks.", icon: Building2 }
        ]
      },
      {
        id: "chole",
        name: "Cholelithiasis",
        steps: [
          { title: "Presentation", desc: "RUQ pain, Dyspepsia, Biliary Colic.", icon: ShieldAlert },
          { title: "Investigations", desc: "USG Abdomen (Gold Standard), LFT, CBC, MRCP if needed.", icon: Microscope },
          { title: "Management", desc: "Laparoscopic Cholecystectomy (Elective or within 72hrs if acute).", icon: Zap },
          { title: "Post-op Care", desc: "Oral intake within 6-8 hrs, mobilization same day.", icon: HeartPulse },
          { title: "Discharge", desc: "Usually within 24-48 hours post-laparoscopy.", icon: Building2 }
        ]
      }
    ]
  },
  {
    id: "nicu",
    name: "NICU Department",
    icon: Baby,
    color: "blue",
    pathways: [
      {
        id: "preterm",
        name: "Preterm/LBW",
        steps: [
          { title: "Admission", desc: "Birth weight < 1800g or Gestation < 34 weeks.", icon: Clipboard },
          { title: "Thermal Care", desc: "Radiant warmer/incubator, Thermal protection.", icon: Thermometer },
          { title: "Respiratory", desc: "Early CPAP use, Minimal handling.", icon: Wind },
          { title: "Nutrition", desc: "Kangaroo Mother Care (KMC), TPN to enteral progression.", icon: HeartPulse },
          { title: "Discharge", desc: "Stable temp, oral feeding, weight gain, no apnea.", icon: Building2 }
        ]
      },
      {
        id: "distress",
        name: "Respiratory Distress",
        steps: [
          { title: "Assessment", desc: "Silverman Anderson Score, SpO2 Monitoring.", icon: Microscope },
          { title: "Diagnostics", desc: "Chest X-ray, ABG Monitoring.", icon: FlaskConical },
          { title: "Treatment", desc: "Oxygen hood -> CPAP -> Surfactant -> Mechanical Ventilation.", icon: Zap },
          { title: "Targets", desc: "Maintain SpO2 between 90-95%.", icon: HeartPulse }
        ]
      }
    ]
  }
];

export default function ClinicalPathways() {
  const [activeCategory, setActiveCategory] = useState(clinicalData[0]);
  const [activePathway, setActivePathway] = useState(clinicalData[0].pathways[0]);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setActivePathway(cat.pathways[0]);
  };

  return (
    <section id="pathways" className="relative min-h-screen w-full py-24 bg-[#f8fafc] overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <ClipboardList size={24} />
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
                Clinical Pathways
             </h2>
          </div>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto">
            Standardized Treatment Protocols & Care Workflows
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {clinicalData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all ${
                activeCategory.id === cat.id 
                  ? `bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105` 
                  : `bg-white text-slate-500 hover:bg-slate-50 shadow-sm`
              }`}
            >
              <cat.icon size={18} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Pathway Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-24">
          {activeCategory.pathways.map((path) => (
            <button
              key={path.id}
              onClick={() => setActivePathway(path)}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border-2 transition-all ${
                activePathway.id === path.id
                  ? `bg-slate-900 border-slate-900 text-white shadow-lg`
                  : `bg-white border-slate-100 text-slate-500 hover:border-blue-200 hover:text-blue-600`
              }`}
            >
              {path.name}
            </button>
          ))}
        </div>

        {/* Premium Workflow Visualization */}
        <div className="w-full max-w-7xl mx-auto relative px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePathway.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="flex flex-col gap-32"
            >
              {/* Row 1 (Steps 1, 2, 3) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {activePathway.steps.slice(0, 3).map((step, idx) => (
                  <StepCard key={idx} step={step} number={idx + 1} isLast={idx === activePathway.steps.length - 1} />
                ))}
                
                {/* Connector Arrows for Row 1 */}
                <div className="hidden md:block absolute inset-0 pointer-events-none">
                  {activePathway.steps.length > 1 && (
                    <div className="absolute left-[30.5%] top-1/2 -translate-y-1/2 text-blue-500">
                      <ArrowRight size={28} strokeWidth={2.5} />
                    </div>
                  )}
                  {activePathway.steps.length > 2 && (
                    <div className="absolute left-[63.8%] top-1/2 -translate-y-1/2 text-blue-500">
                      <ArrowRight size={28} strokeWidth={2.5} />
                    </div>
                  )}
                </div>

                {/* The "S" Connector Line to Row 2 */}
                {activePathway.steps.length > 3 && (
                   <div className="hidden md:block absolute -bottom-[100px] left-[15%] right-[15%] h-[120px] pointer-events-none">
                      <svg width="100%" height="100%" viewBox="0 0 800 120" fill="none" preserveAspectRatio="none">
                         <path 
                           d="M 680 0 L 680 40 C 680 70, 680 70, 650 70 L 150 70 C 120 70, 120 70, 120 100 L 120 120" 
                           stroke="#3b82f6" 
                           strokeWidth="2.5" 
                           strokeLinecap="round"
                         />
                         <path d="M 112 110 L 120 120 L 128 110" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                   </div>
                )}
              </div>

              {/* Row 2 (Steps 4, 5, 6) */}
              {activePathway.steps.length > 3 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                   {activePathway.steps.slice(3, 6).map((step, idx) => (
                    <StepCard key={idx} step={step} number={idx + 4} isLast={idx + 3 === activePathway.steps.length - 1} />
                  ))}

                  {/* Connector Arrow for Row 2 */}
                  <div className="hidden md:block absolute inset-0 pointer-events-none">
                    {activePathway.steps.length > 4 && (
                      <div className="absolute left-[30.5%] top-1/2 -translate-y-1/2 text-blue-500">
                        <ArrowRight size={28} strokeWidth={2.5} />
                      </div>
                    )}
                    {activePathway.steps.length > 5 && (
                      <div className="absolute left-[63.8%] top-1/2 -translate-y-1/2 text-blue-500">
                        <ArrowRight size={28} strokeWidth={2.5} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function StepCard({ step, number, isLast }: { step: Step; number: number; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: number * 0.1 }}
      className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
    >
      {/* Top Bar with Number and Icon */}
      <div className="flex items-start justify-between mb-8">
        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 font-black text-sm shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {number}
        </div>
        <div className="text-blue-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
          <step.icon size={26} strokeWidth={1.5} />
        </div>
      </div>

      <div className="text-left">
        <h4 className="font-black text-slate-900 text-xl mb-3 tracking-tight leading-tight">
          {step.title}
        </h4>
        <p className="text-slate-500 font-semibold text-sm leading-relaxed">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
