"use client";

import { motion } from "framer-motion";
import { FileText, ClipboardList } from "lucide-react";

const sops = [
  "Procedure(s) guide collection, identification, handling, safe transportation, processing, and disposal of specimens.",
  "Process addresses discharge of all patients including medico-legal cases and patients leaving against medical advice.",
  "Policy on Admission and Registration",
  "Documented procedure(s) address care of patients arriving in the emergency, including handling of medico-legal cases.",
  "Documented policies and procedures are used to guide the rational use of blood and blood products.",
  "Documented procedure for the administration of anaesthesia with recovery room scoring.",
  "Documented procedure addresses prevention of adverse events like wrong site, wrong patient, and wrong surgery.",
  "Documented procedure incorporating purchase, storage, prescription, and dispensation of medications.",
  "Documented procedures address procurement and usage of implantable prostheses.",
  "Documented operational and maintenance (preventive and breakdown) plan for clinical and support service equipment. (ENGINEER SUPPORT)",
  "The organization has a documented safe exit plan in case of fire and non-fire emergencies.",
  "Documented disciplinary and grievance handling procedure.",
  "Documented policies and procedures for maintaining confidentiality, integrity, and security of records, data, and information.",
  "Documented procedures exist for retention time of medical records, data, and information.",
  "Policy on Maintenance for medical gas pipeline system and vacuum system.",
  "Policy on uniform use of CPR",
  "Infection Control Manual"
];

export default function SopIndex() {
  return (
    <section id="sop" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-slate-50/50 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-200">
                <FileText size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
              SOP INDEX
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Standard Operating Procedures (SOPs) governing clinical, administrative, and emergency protocols at HNB Base Hospital.
          </p>
        </motion.div>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {sops.map((sop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="glass p-6 rounded-3xl flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all group bg-white border border-slate-100"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-sky-500 flex items-center justify-center font-black text-sm shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors shadow-inner">
                {idx + 1}
              </div>
              <p className="text-slate-700 font-bold text-sm leading-relaxed pt-2">
                {sop}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-[2.5rem] bg-slate-900 text-white w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-[5rem]" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-sky-400">
                <ClipboardList size={28} />
            </div>
            <div>
                <h4 className="font-black text-xl tracking-tight">Compliance Statement</h4>
                <p className="text-slate-400 text-sm font-medium">All procedures are regularly reviewed and updated for NABH compliance.</p>
            </div>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-sky-500 text-white font-black text-xs tracking-widest uppercase relative z-10">
            Certified Protocols
          </div>
        </motion.div>

      </div>
    </section>
  );
}
