"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Stethoscope, Activity, Baby, ArrowRight, ArrowDown, ClipboardList
} from "lucide-react";

type Step = {
  title: string;
  desc: string;
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
    color: "sky",
    pathways: [
      {
        id: "copd",
        name: "COPD Patient",
        steps: [
          { title: "Triage (0-5 Min)", desc: "Assess Red/Yellow flags (Airway, SpO2, Accessory muscles)." },
          { title: "Immediate Actions", desc: "Oxygen therapy (88-92%), sitting position, cardiac monitoring." },
          { title: "Investigations", desc: "ABG, CBC, CXR, ECG, Serum Electrolytes." },
          { title: "Treatment", desc: "Nebulization, IV steroids, Antibiotics, BiPAP if pH < 7.35." },
          { title: "Disposition", desc: "Admit to ICU if unstable, or ward/discharge with counseling." }
        ]
      },
      {
        id: "febrile",
        name: "Febrile Illness",
        steps: [
          { title: "Triage", desc: "Check Red Flags: Hypotension, Altered sensorium, Sepsis suspicion." },
          { title: "Assessment", desc: "Vitals, Travel & Exposure history." },
          { title: "Investigations", desc: "CBC, Malaria/Dengue/Typhoid tests, Blood culture." },
          { title: "Management", desc: "IV Fluids, Paracetamol, Empirical Antibiotics." },
          { title: "Sepsis Protocol", desc: "Lactate measurement, Fluid bolus (30ml/kg) within 1hr." },
          { title: "Disposition", desc: "Observation ward or admission based on stability." }
        ]
      },
      {
        id: "anemia",
        name: "Anemia Patient",
        steps: [
          { title: "Triage", desc: "Identify severity: Pallor, Breathlessness, Syncope." },
          { title: "Assessment", desc: "Vitals, Hb estimation, bleeding history." },
          { title: "Investigations", desc: "CBC with indices, Retic count, Blood grouping/cross-match." },
          { title: "Management", desc: "Oxygen support, IV access, Packed RBC if Hb < 7g/dL." },
          { title: "Disposition", desc: "Admit if Red Flags (Hypotension, Active bleeding) present." }
        ]
      },
      {
        id: "chest-pain",
        name: "Chest Pain",
        steps: [
          { title: "Triage (0-10 Min)", desc: "ECG within 10 mins, Pain assessment." },
          { title: "Actions", desc: "Cardiac monitor, IV access, Oxygen if hypoxic." },
          { title: "MONA Protocol", desc: "Morphine, Oxygen, Nitrates, Aspirin (Loading dose)." },
          { title: "Investigations", desc: "Serial ECG, Troponin I/T, CK-MB, Chest X-ray." },
          { title: "Disposition", desc: "Cath Lab/ICU (STEMI) or Rule-out protocol (Observation)." }
        ]
      }
    ]
  },
  {
    id: "surgery",
    name: "Surgery Department",
    icon: Activity,
    color: "emerald",
    pathways: [
      {
        id: "hernia",
        name: "Hernia (Inguinal/Ventral)",
        steps: [
          { title: "Presentation", desc: "Reducible swelling, Pain on exertion, Irreducibility (Emergency)." },
          { title: "Evaluation", desc: "Clinical diagnosis, Fitness assessment, USG if doubtful." },
          { title: "Management", desc: "Elective mesh repair OR Resuscitation/Surgery for strangulation." },
          { title: "Post-op Care", desc: "Early ambulation (6-8 hrs), Analgesics, Wound care." },
          { title: "Discharge", desc: "POD 1-3 with heavy lifting precautions for 4-6 weeks." }
        ]
      },
      {
        id: "chole",
        name: "Cholelithiasis",
        steps: [
          { title: "Presentation", desc: "RUQ pain, Dyspepsia, Biliary Colic." },
          { title: "Investigations", desc: "USG Abdomen (Gold Standard), LFT, CBC, MRCP if needed." },
          { title: "Management", desc: "Laparoscopic Cholecystectomy (Elective or within 72hrs if acute)." },
          { title: "Post-op Care", desc: "Oral intake within 6-8 hrs, mobilization same day." },
          { title: "Discharge", desc: "Usually within 24-48 hours post-laparoscopy." }
        ]
      },
      {
        id: "abscess",
        name: "Surgical Abscess",
        steps: [
          { title: "Presentation", desc: "Swelling, Pain, Fever, Fluctuation." },
          { title: "Evaluation", desc: "Clinical diagnosis, CBC, USG for deep abscess." },
          { title: "Management", desc: "Incision & Drainage (I&D), Pus Culture, Antibiotics." },
          { title: "Post-op", desc: "Daily dressing, Glycemic control, Pain management." }
        ]
      },
      {
        id: "mesenteric",
        name: "Mesenteric Ischemia",
        steps: [
          { title: "Emergency Actions", desc: "ABC Resuscitation, Oxygen, IV access, Fluid bolus." },
          { title: "Investigations", desc: "ABG, Lactate, CT Angiography (Preferred)." },
          { title: "Management", desc: "Antibiotics, Anticoagulation, Emergency Laparotomy." },
          { title: "Intraoperative", desc: "Assess bowel viability, Resection of necrotic bowel." },
          { title: "ICU Care", desc: "Sepsis monitoring, Nutritional support." }
        ]
      }
    ]
  },
  {
    id: "nicu",
    name: "NICU Department",
    icon: Baby,
    color: "indigo",
    pathways: [
      {
        id: "preterm",
        name: "Preterm/LBW",
        steps: [
          { title: "Admission", desc: "Birth weight < 1800g or Gestation < 34 weeks." },
          { title: "Thermal Care", desc: "Radiant warmer/incubator, Thermal protection." },
          { title: "Respiratory", desc: "Early CPAP use, Minimal handling." },
          { title: "Nutrition", desc: "Kangaroo Mother Care (KMC), TPN to enteral progression." },
          { title: "Discharge", desc: "Stable temp, oral feeding, weight gain, no apnea." }
        ]
      },
      {
        id: "distress",
        name: "Respiratory Distress",
        steps: [
          { title: "Assessment", desc: "Silverman Anderson Score, SpO2 Monitoring." },
          { title: "Diagnostics", desc: "Chest X-ray, ABG Monitoring." },
          { title: "Treatment", desc: "Oxygen hood -> CPAP -> Surfactant -> Mechanical Ventilation." },
          { title: "Targets", desc: "Maintain SpO2 between 90-95%." }
        ]
      },
      {
        id: "sepsis",
        name: "Neonatal Sepsis",
        steps: [
          { title: "Early Signs", desc: "Lethargy, Poor feeding, Temp instability, Apnea." },
          { title: "Screening", desc: "Sepsis screen, Blood Culture." },
          { title: "Management", desc: "Empirical Antibiotics within 1hr, Fluid management." },
          { title: "Monitoring", desc: "CRP trends, Vitals, Feeding tolerance." }
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
    <section id="pathways" className="relative min-h-screen w-full py-24 bg-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white shadow-lg">
                <ClipboardList size={24} />
             </div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight uppercase">
                Clinical Pathways
             </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Visualized clinical care flows and treatment protocols for Emergency, Surgery, and NICU departments.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {clinicalData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all ${
                activeCategory.id === cat.id 
                  ? `bg-slate-900 text-white shadow-xl scale-105` 
                  : `bg-slate-50 text-slate-500 hover:bg-slate-100`
              }`}
            >
              <cat.icon size={20} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Pathway Selection (Buttons) */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {activeCategory.pathways.map((path) => (
            <button
              key={path.id}
              onClick={() => setActivePathway(path)}
              className={`px-5 py-2 rounded-xl text-sm font-bold border transition-all ${
                activePathway.id === path.id
                  ? `bg-slate-900 border-transparent text-white shadow-md`
                  : `bg-white border-slate-200 text-slate-600 hover:border-sky-400 hover:text-sky-500`
              }`}
            >
              {path.name}
            </button>
          ))}
        </div>

        {/* Grid-based Flow Visualization (3 steps per row) */}
        <div className="w-full max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePathway.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-16 px-4"
            >
              {activePathway.steps.map((step, idx) => {
                const isEndOfRow = (idx + 1) % 3 === 0;
                const isLastStep = idx === activePathway.steps.length - 1;
                
                return (
                  <div key={idx} className="relative">
                    
                    {/* Step Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="w-full h-full glass p-8 rounded-[2.5rem] border border-slate-100 shadow-sm bg-white hover:shadow-xl transition-all group flex flex-col items-center text-center relative z-10"
                    >
                      <div className={`w-12 h-12 rounded-2xl bg-slate-50 text-${activeCategory.color}-500 flex items-center justify-center font-black text-lg mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors`}>
                        {idx + 1}
                      </div>
                      <h4 className="font-black text-slate-800 text-lg mb-3 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>

                    {/* Arrow Logic - Placed OUTSIDE the card flow */}
                    {!isLastStep && (
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
                        {/* Horizontal Arrow (Right) - Between items in same row */}
                        {!isEndOfRow && (
                          <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 text-slate-300 transform scale-125">
                             <ArrowRight size={32} strokeWidth={2.5} />
                          </div>
                        )}
                        
                        {/* Vertical Arrow (Down) - At end of row pointing to next row */}
                        {isEndOfRow && (
                          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-16 text-slate-300 transform scale-125">
                             <ArrowDown size={32} strokeWidth={2.5} />
                          </div>
                        )}

                        {/* Always Down on Mobile between every step */}
                        <div className="md:hidden absolute left-1/2 -translate-x-1/2 -bottom-16 text-slate-300 transform scale-110">
                           <ArrowDown size={24} strokeWidth={2.5} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
