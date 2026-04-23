"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Stethoscope, 
  Activity, 
  ArrowRight, 
  Thermometer, 
  Wind, 
  HeartPulse, 
  ShieldAlert,
  ClipboardCheck,
  UserCheck,
  Zap,
  Microscope,
  Baby
} from "lucide-react";

/* ─── PATHWAY DATA ─── */

const pathwaysData = {
  emergency: {
    label: "Emergency Department",
    icon: ShieldAlert,
    options: [
      {
        id: "copd",
        name: "COPD Patient",
        steps: [
          { title: "Triage & Vitals", desc: "Immediate assessment of respiratory distress and SpO2 monitoring." },
          { title: "Oxygen Therapy", desc: "Controlled oxygen delivery to maintain SpO2 (88-92%)." },
          { title: "Medication", desc: "Administration of bronchodilators and systemic steroids." },
          { title: "Specialist Review", desc: "Evaluation by Respiratory Specialist for further management." },
          { title: "Final Disposition", desc: "Decision for ward admission or monitored discharge." }
        ]
      },
      {
        id: "febrile",
        name: "Febrile Illness",
        steps: [
          { title: "Fever Screening", desc: "Temperature check and history of travel or exposure." },
          { title: "Laboratory Tests", desc: "Blood counts, malarial parasite check, and cultures." },
          { title: "Fluid Management", desc: "Initiation of IV fluids and antipyretics." },
          { title: "Diagnosis", desc: "Review of results and identification of infection source." },
          { title: "Stabilization", desc: "Monitoring response to treatment before ward transfer." }
        ]
      },
      {
        id: "anemia",
        name: "Anemia",
        steps: [
          { title: "Hemoglobin Check", desc: "Point-of-care testing and clinical severity assessment." },
          { title: "Blood Ordering", desc: "Cross-matching and procurement from Blood Centre." },
          { title: "Transfusion", desc: "Safe administration with vital monitoring throughout." },
          { title: "Root Cause Study", desc: "Identifying cause (Iron deficiency, loss, etc.)" },
          { title: "Follow-up Plan", desc: "Scheduling outpatient review and iron supplements." }
        ]
      },
      {
        id: "chest-pain",
        name: "Chest Pain",
        steps: [
          { title: "Stat ECG", desc: "Perform 12-lead ECG within 10 minutes of arrival." },
          { title: "Cardiac Enzymes", desc: "Stat Troponin-I and serum electrolytes check." },
          { title: "Cardiac Consult", desc: "Emergency review by On-call Cardiologist." },
          { title: "Stat Meds", desc: "Loading dose of Aspirin and Clopidogrel as per protocol." },
          { title: "Observation/CCU", desc: "Transfer to CCU for monitoring or serial ECGs." }
        ]
      }
    ]
  },
  surgery: {
    label: "Surgery Department",
    icon: Activity,
    options: [
      {
        id: "pre-op",
        name: "Pre-Operative Pathway",
        steps: [
          { title: "Informed Consent", desc: "Discussion of risks and benefits with signature." },
          { title: "PAC Review", desc: "Final Pre-Anesthetic Checkup and fitness clearance." },
          { title: "Surgical Marking", desc: "Marking the surgical site by the operating surgeon." },
          { title: "Pre-Op Meds", desc: "Antibiotic prophylaxis and premedication." },
          { title: "OR Transfer", desc: "Checking surgical safety checklist before incision." }
        ]
      },
      {
        id: "post-op",
        name: "Post-Operative Pathway",
        steps: [
          { title: "Recovery Room", desc: "Monitoring vitals and recovery scoring post-anesthesia." },
          { title: "Pain Control", desc: "Initiation of PCA or scheduled analgesic protocol." },
          { title: "Wound Review", desc: "Inspection of dressing and drain output monitoring." },
          { title: "Mobilization", desc: "Early ambulation as per surgical guidelines." },
          { title: "Discharge Prep", desc: "Teaching wound care and medication adherence." }
        ]
      }
    ]
  },
  nicu: {
    label: "NICU",
    icon: Baby,
    options: [
      {
        id: "jaundice",
        name: "Neonatal Jaundice",
        steps: [
          { title: "Bilirubin Check", desc: "Transcutaneous or serum bilirubin screening." },
          { title: "Phototherapy", desc: "Initiation of single/double surface phototherapy." },
          { title: "Hydration", desc: "Ensuring frequent feeding and hydration monitoring." },
          { title: "Serial Labs", desc: "Monitoring decline in bilirubin levels every 12-24h." },
          { title: "Parent Counseling", desc: "Guidance on home care and warning signs." }
        ]
      },
      {
        id: "preterm",
        name: "Pre-term Care",
        steps: [
          { title: "Thermal Control", desc: "Placement in warmer or incubator to maintain temp." },
          { title: "Resp. Support", desc: "Oxygen or CPAP as per respiratory distress score." },
          { title: "Nutrition", desc: "Orogastric feeding and TPN initiation if required." },
          { title: "Growth Monitor", desc: "Daily weight and nutritional intake tracking." },
          { title: "KMC", desc: "Initiating Kangaroo Mother Care for stabilization." }
        ]
      }
    ]
  }
};

export default function ClinicalPathways() {
  const [activeDept, setActiveDept] = useState<keyof typeof pathwaysData>("emergency");
  const [activeOption, setActiveOption] = useState(pathwaysData.emergency.options[0]);

  const handleDeptChange = (dept: keyof typeof pathwaysData) => {
    setActiveDept(dept);
    setActiveOption(pathwaysData[dept].options[0]);
  };

  return (
    <section id="pathways" className="relative w-full py-24 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-[100px] opacity-50 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-50 rounded-full blur-[100px] opacity-50 -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-black tracking-[0.3em] text-sky-500 uppercase mb-4">
            Evidence Based Medicine
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-6">
            Clinical Pathways
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-sky-400 to-emerald-500 rounded-full mx-auto mb-8 shadow-lg" />
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
            Standardized protocols ensuring consistent, high-quality care through every stage of the patient journey.
          </p>
        </motion.div>

        {/* Dept Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(pathwaysData).map(([key, dept]) => (
            <button
              key={key}
              onClick={() => handleDeptChange(key as any)}
              className={`flex items-center gap-3 px-8 py-4 rounded-3xl font-bold transition-all duration-300 ${
                activeDept === key 
                ? "bg-white text-sky-600 shadow-xl ring-2 ring-sky-100 scale-105" 
                : "bg-slate-200/50 text-slate-500 hover:bg-white hover:shadow-md"
              }`}
            >
              <dept.icon size={20} />
              {dept.label}
            </button>
          ))}
        </div>

        {/* Pathway Option Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {pathwaysData[activeDept].options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveOption(opt)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeOption.id === opt.id
                ? "bg-sky-500 text-white shadow-lg shadow-sky-200"
                : "bg-white text-slate-500 hover:bg-sky-50"
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="relative w-full max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeDept}-${activeOption.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0"
            >
              {activeOption.steps.map((step, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row items-center">
                  
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="w-full lg:w-48 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center mb-4 text-sky-500 font-black text-lg group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <h4 className="font-black text-slate-800 text-sm mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Flow Connector */}
                  {idx < activeOption.steps.length - 1 && (
                    <div className="flex items-center justify-center py-4 lg:py-0 lg:px-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        className="flex flex-col lg:flex-row items-center opacity-30"
                      >
                        <ArrowRight size={24} className="text-sky-400 rotate-90 lg:rotate-0" />
                        <div className="hidden lg:block w-4 h-px bg-sky-300" />
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
