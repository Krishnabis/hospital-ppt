"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { User, Users, Briefcase, Stethoscope, ChevronDown, Shield, Plus } from "lucide-react";

export default function OrgStructure() {
  const [activeTab, setActiveTab] = useState<"clinical" | "nonClinical" | "nursing" | "committees">("clinical");

  const clinicalDepts = [
    "Medicine", "Surgery", "Pediatrics", "OBG", "Orthopedics", "Psychiatry",
    "ENT", "Ophthalmology", "Dermatology", "Anesthesia", "Radiology",
    "Dentistry", "Intensive Care", "Emergency",
    "Physiotherapy & Occupational Therapy", "Pulmonology & Respiratory Medicine"
  ];

  const adminDepts = [
    "Administration", "Stores & Procurement", "Maintenance", "Finance & Accounts",
    "IT & HIS", "Transport & Ambulance", "Housekeeping & Sanitation", "Laundry & Linen",
    "Human Resources (HR)", "Food & Beverage (Dietary)", "Registration & Reception", "Security Services"
  ];

  const ansStaff = [
    { name: "Mr. Jai Hind Sharma", area: "General Wards" },
    { name: "Mr. Achlesh Parashar", area: "Operation Theatre & ICU" },
    { name: "Mr. Suresh Kumar", area: "OPD & Emergency" },
  ];

  const deptIncharges = [
    { dept: "Medicine", incharge: "Nursing Incharge" },
    { dept: "Surgery", incharge: "Nursing Incharge" },
    { dept: "Pediatrics", incharge: "Nursing Incharge" },
    { dept: "OBG", incharge: "Nursing Incharge" },
    { dept: "Orthopedics", incharge: "Nursing Incharge" },
    { dept: "Psychiatry", incharge: "Nursing Incharge" },
    { dept: "ENT", incharge: "Nursing Incharge" },
    { dept: "Ophthalmology", incharge: "Nursing Incharge" },
    { dept: "Dermatology", incharge: "Nursing Incharge" },
    { dept: "Anesthesia", incharge: "Nursing Incharge" },
    { dept: "Radiology", incharge: "Nursing Incharge" },
    { dept: "Dentistry", incharge: "Nursing Incharge" },
    { dept: "Intensive Care", incharge: "ICU Nursing Incharge" },
    { dept: "Emergency", incharge: "Emergency Nursing Incharge" },
    { dept: "Physiotherapy & Occupational Therapy", incharge: "Nursing Incharge" },
    { dept: "Pulmonology & Respiratory Medicine", incharge: "Nursing Incharge" },
  ];

  const hospitalCommittees = [
    {
      name: "APEX COMMITTEE – TOR",
      members: [
        "Chairperson – Principal – Prof. (Dr.) Ashutosh Sayana",
        "Secretary – Medical Superintendent – Dr. Rakesh Rawat",
        "Convener – Deputy MS & Professor Blood Centre – Dr. Deepa Hatwal",
        "Member – Professor Microbiology – Dr. Shekhar Pal",
        "Member – HOD & Professor Ophthalmology – Dr. A.N. Pandey",
        "Member – Incharge Emergency – Dr. Mohit Kumar",
        "Member – ANS – Mr. Jai Hind Sharma"
      ]
    },
    {
      name: "HR, Disciplinary & Grievance Committee – TOR",
      members: [
        "Chairperson – Principal – Prof. (Dr.) Ashutosh Sayana",
        "Secretary – Medical Superintendent – Dr. Rakesh Rawat",
        "Convener – Deputy Medical Superintendent – Dr. Deepa Hatwal",
        "Member – Professor & Head (Micro) – Dr. Vinita Rawat",
        "Member – Associate Professor (Psychiatry) – Dr. Mohit Saini",
        "Member – ANS – Mr. Jai Hind Sharma",
        "Member – Administrative Officer – Mr. Sandeep Panwar"
      ]
    },
    {
      name: "Quality & Safety Committee – TOR",
      members: [
        "Chairperson – Medical Superintendent – Dr. Rakesh Rawat",
        "Secretary – Professor Microbiology – Dr. Shekhar Pal",
        "Convener – Associate Professor – Dr. Satish Kumar",
        "Member – Associate Professor (Pharma) – Dr. Rajendra Sharma",
        "Member – Chief Pharmacist – Mr. R.S. Chauhan",
        "Member – ANS – Mr. Achlesh Prashar",
        "Member – Record Clerk / Quality Control & Maintenance – Mr. Yogesh Rawat",
        "Member – Health Inspector – Mr. Karan Sukhbeer"
      ]
    },
    {
      name: "Infection Control Committee – TOR",
      members: [
        "Chairperson – Medical Superintendent – Dr. Rakesh Rawat",
        "Secretary – Incharge & Associate Professor Blood Bank – Dr. Satish Kumar",
        "Convener – Professor Microbiology – Dr. Shekhar Pal",
        "Member – Assistant Professor (Community Medicine) – Dr. Surendra Singh",
        "Member – ANS – Mr. Jai Hind",
        "Member – Health Inspector – Mr. Karan Sukhbeer",
        "Member – Record Clerk / Quality Control & Maintenance – Mr. Yogesh Rawat"
      ]
    },
    {
      name: "Drugs & Therapeutics Committee – TOR",
      members: [
        "Chairperson – Medical Superintendent – Dr. Rakesh Rawat",
        "Secretary – Assistant Professor Pharmacology – Dr. Rajendra Singh",
        "Convener – Assistant Professor & I/C Emergency – Dr. Mohit Kumar",
        "Member – HOD & Professor Paediatric – Dr. C.M. Sharma",
        "Member – HOD & Associate Professor General Medicine – Dr. Leena Firmal",
        "Member – HOD & Associate Professor (Psychiatry) – Dr. Mohit Saini",
        "Member – Chief Pharmacist & I/C Purchase – Mr. R.S. Chauhan",
        "Member – ANS – Mr. Jai Hind",
        "Member – Chief Pharmacist (Drugs) – Mr. Vinod Shah"
      ]
    },
    {
      name: "Medical Record Committee – TOR",
      members: [
        "Chairperson – Medical Superintendent – Dr. Rakesh Rawat",
        "Secretary – Deputy Medical Superintendent – Dr. Deepa Hatwal",
        "Convener – Chief Pharmacist (I/C MRD) – Mr. Vinod Shah",
        "Member – HOD & Professor Anaesthesia – Dr. Ajai Vikram Singh",
        "Member – HOD & Professor Obs & Gynae – Dr. Nav Jyoti Bora",
        "Member – HOD & Associate Professor General Medicine – Dr. Leena Firmal",
        "Member – HOD & Professor Paediatric – Dr. C.M. Sharma",
        "Member – HOD & Professor Orthopedic – Dr. Daya Krishan Tamta"
      ]
    },
    {
      name: "Internal Complaints Committee – TOR",
      members: [
        "Chairperson – Principal – Prof. (Dr.) Ashutosh Sayana",
        "Secretary – Medical Superintendent – Dr. Rakesh Rawat",
        "Convener – Professor & Head (Micro) – Dr. Vinita Rawat",
        "Member – Deputy Medical Superintendent – Dr. Deepa Hatwal",
        "Member – Associate Professor (Psychiatry) – Dr. Mohit Saini",
        "Member – SNO – Smt. Pushpa Yadav",
        "Member – NGO Representative – Smt. Indu Vashisht"
      ]
    },
    {
      name: "Blood Transfusion Committee – TOR",
      members: [
        "Chairperson – Medical Superintendent – Dr. Rakesh Rawat",
        "Secretary – Professor Blood Centre – Dr. Deepa Hatwal",
        "Convener – Incharge / Associate Professor – Dr. Satish Kumar",
        "Member – HOD & Professor Obs & Gynae – Dr. Nav Jyoti Bora",
        "Member – HOD & Associate Professor General Medicine – Dr. Leena Firmal",
        "Member – HOD & Professor Paediatric – Dr. C.M. Sharma",
        "Member – Incharge Emergency – Dr. Mohit Saini",
        "Member – ANS – Mr. Achlesh Parashar"
      ]
    },
    {
      name: "Kitchen and Dietary Committee – TOR",
      members: [
        "Chairperson – Medical Superintendent – Dr. Rakesh Rawat",
        "Secretary – Professor Blood Centre – Dr. Deepa Hatwal",
        "Convener – Professor Microbiology – Dr. Shekhar Pal",
        "Member – Assistant Professor (Community Medicine) – Dr. Surendra Singh",
        "Member – ANS – Mr. Jai Hind",
        "Member – Health Inspector – Mr. Karan Sukhbeer",
        "Member – Record Clerk / Quality Control & Maintenance – Mr. Yogesh Rawat"
      ]
    },
    {
      name: "Breakdown and Maintenance Committee – TOR",
      members: [
        "Chairperson – Medical Superintendent – Dr. Rakesh Rawat",
        "Secretary – Professor Microbiology – Dr. Shekhar Pal",
        "Convener – Record Clerk / Quality Control & Maintenance – Mr. Yogesh Rawat",
        "Member – Chief Pharmacist – Mr. R.S. Chauhan",
        "Member – ANS – Mr. Jai Hind",
        "Member – Record Clerk (I/C Civil Works) – Mr. Vikesh Kapruwan",
        "Member – Record Clerk (I/C Computer Section & CCTV) – Mr. Sanjay Pandey",
        "Member – Health Inspector – Mr. Karan Sukhbeer"
      ]
    }
  ];

  const [expandedCommittee, setExpandedCommittee] = useState<number | null>(null);

  const toggleCommittee = (idx: number) => {
    if (expandedCommittee === idx) {
      setExpandedCommittee(null);
    } else {
      setExpandedCommittee(idx);
    }
  };

  return (
    <section id="org" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Organizational Structure
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto">
            Governing hierarchy and departmental framework of HNB Base Hospital
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("clinical")}
            className={`relative px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === "clinical" ? "text-sky-600 bg-sky-50 shadow-md ring-1 ring-sky-200" : "text-slate-500 hover:bg-slate-100"
              }`}
          >
            <Stethoscope size={20} /> Clinical Directorate
          </button>
          
          <button
            onClick={() => setActiveTab("nonClinical")}
            className={`relative px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === "nonClinical" ? "text-indigo-600 bg-indigo-50 shadow-md ring-1 ring-indigo-200" : "text-slate-500 hover:bg-slate-100"
              }`}
          >
            <Briefcase size={20} /> Non-Clinical / Support Services
          </button>

          <button
            onClick={() => setActiveTab("nursing")}
            className={`relative px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === "nursing" ? "text-rose-600 bg-rose-50 shadow-md ring-1 ring-rose-200" : "text-slate-500 hover:bg-slate-100"
              }`}
          >
            <Users size={20} /> Nursing Organogram
          </button>
          
          <button
            onClick={() => setActiveTab("committees")}
            className={`relative px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === "committees" ? "text-emerald-600 bg-emerald-50 shadow-md ring-1 ring-emerald-200" : "text-slate-500 hover:bg-slate-100"
              }`}
          >
            <Shield size={20} /> Governance & Committees
          </button>
        </div>

        {/* Diagram Area */}
        <div className="w-full max-w-7xl bg-white rounded-[3rem] border border-slate-100 p-8 md:p-12 shadow-xl relative min-h-[700px] flex flex-col items-center">
          <AnimatePresence mode="wait">

            {activeTab === "clinical" && (
              <motion.div
                key="clinical"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center w-full relative pb-12"
              >
                {/* Level 1: Dean */}
                <div className="glass-neon px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-emerald-300 shadow-xl bg-white relative z-20 w-80">
                  <h3 className="font-black text-slate-800 text-xl">Principal & Dean</h3>
                  <div className="flex items-center gap-2 mt-2 text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                    <User size={14} /> Prof. (Dr.) Ashutosh Sayana
                  </div>
                </div>

                <div className="w-1 h-8 bg-emerald-300 relative z-10" />

                {/* Level 2: MS */}
                <div className="glass-neon px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-sky-400 shadow-lg bg-white relative z-20 w-80">
                  <h3 className="font-bold text-slate-800 text-lg">Medical Superintendent</h3>
                  <div className="flex items-center gap-2 mt-2 text-sky-600 font-bold text-sm bg-sky-50 px-3 py-1 rounded-full">
                    <User size={14} /> Dr. Rakesh Rawat
                  </div>
                </div>

                <div className="w-1 h-8 bg-sky-400 relative z-10" />

                {/* Level 4: DMS */}
                <div className="glass px-6 py-3 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col items-center w-80 shadow-md relative z-20">
                  <h4 className="font-bold text-slate-700">Deputy Medical Superintendent</h4>
                  <div className="flex items-center gap-2 mt-1 text-indigo-600 font-bold text-sm">
                    <User size={14} /> Dr. Deepa Hatwal
                  </div>
                </div>

                <div className="w-1 h-8 bg-indigo-300 relative z-10" />

                {/* Two-column layout: HOD grid (left) | ANS→ICN→Incharges→Staff Nurses (right) */}
                <div className="flex flex-col lg:flex-row gap-8 w-full items-start justify-center">

                  {/* LEFT COLUMN: HOD of all departments */}
                  <div className="flex flex-col items-center flex-1 min-w-0">
                    <div className="px-6 py-2 rounded-full bg-sky-700 text-white font-bold text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                      <Stethoscope size={14} /> HOD of Departments
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-full">
                      {clinicalDepts.map((dept, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.03 * idx, type: "spring" }}
                          className="glass px-3 py-3 rounded-xl flex flex-col items-center justify-center text-center border-t-[3px] border-sky-400 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
                        >
                          <Stethoscope size={14} className="text-sky-400 mb-1 opacity-60" />
                          <span className="text-[11px] font-black text-slate-700 leading-tight">{dept}</span>
                          <span className="text-[9px] font-semibold text-sky-500 mt-1">HOD / Professor</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: ANS → ICN → Incharges → Staff Nurses */}
                  <div className="flex flex-col items-center flex-1 min-w-0">

                    {/* ANS header */}
                    <div className="px-6 py-2 rounded-full bg-rose-600 text-white font-bold text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
                      <Users size={14} /> ANS (Nursing)
                    </div>

                    {/* 3 ANS nodes side-by-side */}
                    <div className="flex gap-2 justify-center w-full mb-1">
                      {ansStaff.map((ans, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="glass-neon px-3 py-3 rounded-xl flex flex-col items-center border-[2px] border-rose-300 shadow-md bg-white text-center flex-1"
                        >
                          <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center mb-1">
                            <User size={13} className="text-rose-500" />
                          </div>
                          <span className="font-black text-slate-800 text-[11px]">ANS</span>
                          <span className="font-bold text-rose-600 text-[10px] mt-0.5">{ans.name}</span>
                          <span className="text-[9px] text-slate-400 mt-0.5 bg-rose-50 px-1.5 py-0.5 rounded-full">{ans.area}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Arrow + ICN beside ANS row */}
                    <div className="flex items-center gap-2 self-end pr-0 mb-2">
                      <div className="flex items-center gap-1 text-violet-400 text-xs font-bold">
                        <span className="text-base">→</span>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="glass-neon px-3 py-2 rounded-xl flex flex-col items-center border-[2px] border-violet-400 shadow-md bg-white text-center w-32"
                        >
                          <Stethoscope size={13} className="text-violet-500 mb-1" />
                          <span className="font-black text-slate-800 text-[11px]">ICN</span>
                          <span className="text-[9px] text-violet-500 mt-0.5 bg-violet-50 px-1.5 py-0.5 rounded-full">Infection Control</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Connector */}
                    <div className="w-1 h-5 bg-rose-200" />

                    {/* Dept Incharges label */}
                    <div className="px-5 py-2 rounded-full bg-rose-700 text-white font-bold text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                      <Users size={13} /> Dept. Nursing Incharges
                    </div>

                    {/* Incharges grid */}
                    <div className="grid grid-cols-2 gap-2 w-full mb-3">
                      {deptIncharges.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.02 * idx, type: "spring" }}
                          className="glass px-2 py-2 rounded-xl flex flex-col items-center justify-center text-center border-t-[3px] border-rose-300 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
                        >
                          <span className="text-[10px] font-black text-slate-700 leading-tight">{item.dept}</span>
                          <span className="text-[9px] font-semibold text-rose-500 mt-0.5">{item.incharge}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Connector */}
                    <div className="w-1 h-5 bg-rose-200" />

                    {/* Staff Nurses */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="glass px-6 py-4 rounded-2xl flex flex-col items-center border-[3px] border-pink-300 bg-pink-50 shadow-lg w-full text-center"
                    >
                      <Users size={20} className="text-pink-400 mb-2" />
                      <span className="font-black text-slate-800 text-sm">Staff Nurses / Nursing Officers</span>
                      <span className="text-[10px] text-slate-500 mt-1">All Clinical Departments</span>
                    </motion.div>

                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "nonClinical" && (
              <motion.div
                key="nonClinical"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center w-full relative"
              >
                {/* Level 1: Dean */}
                <div className="glass-neon px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-emerald-300 shadow-xl bg-white relative z-20 w-80">
                  <h3 className="font-black text-slate-800 text-xl">Principal & Dean</h3>
                  <div className="flex items-center gap-2 mt-2 text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                    <User size={14} /> Prof. (Dr.) Ashutosh Sayana
                  </div>
                </div>

                <div className="w-1 h-8 bg-emerald-300 relative z-10" />

                {/* Level 2: Financial Controller */}
                <div className="glass-neon px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-purple-400 shadow-lg bg-white relative z-20 w-80">
                  <h3 className="font-bold text-slate-800 text-lg">Financial Controller</h3>
                  <div className="flex items-center gap-2 mt-2 text-purple-600 font-bold text-sm bg-purple-50 px-3 py-1 rounded-full">
                    <User size={14} /> Prashant Kumar (P.F.S)
                  </div>
                </div>

                <div className="w-1 h-8 bg-purple-400 relative z-10" />

                {/* Level 3: MS */}
                <div className="glass-neon px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-sky-400 shadow-xl bg-white relative z-20 w-80">
                  <h3 className="font-bold text-slate-800 text-lg">Medical Superintendent</h3>
                  <div className="flex items-center gap-2 mt-2 text-sky-600 font-bold text-sm bg-sky-50 px-3 py-1 rounded-full">
                    <User size={14} /> Dr. Rakesh Rawat
                  </div>
                </div>

                <div className="w-1 h-8 bg-sky-300 relative z-10" />

                {/* Level 2: DMS */}
                <div className="glass px-6 py-3 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col items-center w-80 shadow-md relative z-20">
                  <h4 className="font-bold text-slate-700">Deputy Medical Supt. (Admin)</h4>
                  <p className="text-xs font-semibold text-indigo-600 mt-1">Operations & Support Services</p>
                </div>

                <div className="w-1 h-8 bg-indigo-300 relative z-10" />

                {/* Central Hub for support services */}
                <div className="glass-neon px-8 py-3 rounded-full bg-slate-100 border border-slate-200 w-full max-w-md shadow-inner relative z-20 mb-8 flex items-center justify-center">
                  <h4 className="font-bold text-slate-600 text-sm tracking-widest uppercase">Support & Admin Departments</h4>
                </div>

                {/* Grid for 12 Admin Departments */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full relative z-20">
                  {adminDepts.map((dept, idx) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * idx, type: "spring" }}
                      key={idx}
                      className="glass px-4 py-5 rounded-2xl flex flex-col items-center justify-center text-center border-t-4 border-indigo-400 bg-white shadow-md hover:-translate-y-1 hover:shadow-xl transition-all"
                    >
                      <Users size={20} className="text-indigo-400 mb-3 opacity-50" />
                      <span className="text-xs font-bold text-slate-700 leading-tight">{dept}</span>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            )}

            {activeTab === "nursing" && (
              <motion.div
                key="nursing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center w-full relative pb-8"
              >
                {/* Level 1: Principal */}
                <div className="glass-neon px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-emerald-300 shadow-xl bg-white relative z-20 w-80">
                  <h3 className="font-black text-slate-800 text-xl">Principal & Dean</h3>
                  <div className="flex items-center gap-2 mt-2 text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                    <User size={14} /> Prof. (Dr.) Ashutosh Sayana
                  </div>
                </div>

                <div className="w-1 h-8 bg-emerald-300" />

                {/* Level 2: MS */}
                <div className="glass-neon px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-sky-400 shadow-lg bg-white relative z-20 w-80">
                  <h3 className="font-bold text-slate-800 text-lg">Medical Superintendent</h3>
                  <div className="flex items-center gap-2 mt-2 text-sky-600 font-bold text-sm bg-sky-50 px-3 py-1 rounded-full">
                    <User size={14} /> Dr. Rakesh Rawat
                  </div>
                </div>

                <div className="w-1 h-8 bg-sky-300" />

                {/* Level 3: 3 ANS + 1 ICN side by side */}
                <div className="relative flex items-start justify-center gap-0 w-full max-w-5xl">
                  {/* Horizontal bar across ANS boxes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-rose-300" style={{ width: '62%' }} />

                  {/* 3 ANS nodes */}
                  {ansStaff.map((ans, idx) => (
                    <div key={idx} className="flex flex-col items-center" style={{ flex: '0 0 auto', width: '200px', margin: '0 8px' }}>
                      <div className="w-1 h-8 bg-rose-300" />
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="glass-neon px-4 py-4 rounded-2xl flex flex-col items-center border-[3px] border-rose-300 shadow-lg bg-white w-full text-center"
                      >
                        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mb-2">
                          <User size={16} className="text-rose-500" />
                        </div>
                        <span className="font-black text-slate-800 text-sm">ANS</span>
                        <span className="font-bold text-rose-600 text-xs mt-1">{ans.name}</span>
                        <span className="text-[10px] text-slate-400 font-semibold mt-1 bg-rose-50 px-2 py-0.5 rounded-full">{ans.area}</span>
                      </motion.div>
                    </div>
                  ))}

                  {/* ICN — parallel, slightly below ANS, connected by a side line */}
                  <div className="flex flex-col items-center ml-6 mt-8">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                      className="relative"
                    >
                      {/* horizontal connector line from left */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-6 h-px bg-violet-300" />
                      <div className="glass-neon px-5 py-4 rounded-2xl flex flex-col items-center border-[3px] border-violet-400 shadow-lg bg-white w-48 text-center">
                        <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center mb-2">
                          <Stethoscope size={16} className="text-violet-500" />
                        </div>
                        <span className="font-black text-slate-800 text-sm">ICN</span>
                        <span className="text-[10px] text-slate-500 font-semibold mt-1 bg-violet-50 px-2 py-0.5 rounded-full">Infection Control Nurse</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="w-1 h-8 bg-rose-200 mt-2" />

                {/* Level 4: Department Incharges label */}
                <div className="px-8 py-3 rounded-full bg-rose-700 text-white w-full max-w-lg shadow-lg flex items-center justify-center gap-3 mb-6">
                  <Users size={18} className="text-rose-200" />
                  <h4 className="font-bold text-sm tracking-widest uppercase text-rose-100">Department Nursing Incharges</h4>
                </div>

                {/* Grid of Department Incharges */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full relative z-20">
                  {deptIncharges.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.04 * idx, type: "spring" }}
                      className="glass px-4 py-4 rounded-2xl flex flex-col items-center justify-center text-center border-t-4 border-rose-300 bg-white shadow-md hover:-translate-y-1 hover:shadow-xl transition-all"
                    >
                      <Users size={18} className="text-rose-400 mb-2 opacity-60" />
                      <span className="text-xs font-black text-slate-700 leading-tight">{item.dept}</span>
                      <span className="text-[10px] font-semibold text-rose-500 mt-1 bg-rose-50 px-2 py-0.5 rounded-full">{item.incharge}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Connector */}
                <div className="w-1 h-5 bg-rose-200 mt-2" />

                {/* Staff Nurses / Nursing Officers */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="glass px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-pink-300 bg-pink-50 shadow-lg w-full max-w-sm text-center mt-1"
                >
                  <Users size={22} className="text-pink-400 mb-2" />
                  <span className="font-black text-slate-800 text-base">Staff Nurses / Nursing Officers</span>
                  <span className="text-xs text-slate-500 mt-1">All Clinical Departments</span>
                </motion.div>

              </motion.div>
            )}

            {activeTab === "committees" && (
              <motion.div
                key="committees"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center w-full"
              >
                {/* Level 1: Dean */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="glass-neon px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-emerald-300 shadow-xl bg-white relative z-20 w-80"
                >
                  <h3 className="font-black text-slate-800 text-xl">Principal & Dean</h3>
                  <div className="flex items-center gap-2 mt-2 text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">
                    <User size={14} /> Prof. (Dr.) Ashutosh Sayana
                  </div>
                </motion.div>

                <div className="w-1 h-8 bg-emerald-300 relative z-10" />

                {/* Level 2: MS */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
                  className="glass-neon px-8 py-4 rounded-2xl flex flex-col items-center border-[3px] border-sky-400 shadow-lg bg-white relative z-20 w-80"
                >
                  <h3 className="font-bold text-slate-800 text-lg">Medical Superintendent</h3>
                  <div className="flex items-center gap-2 mt-2 text-sky-600 font-bold text-sm bg-sky-50 px-3 py-1 rounded-full">
                    <User size={14} /> Dr. Rakesh Rawat
                  </div>
                  <p className="text-xs font-semibold text-slate-500 text-center mt-3 pt-2 border-t border-slate-100 w-full">Reports to Principal & Dean</p>
                </motion.div>

                <div className="w-1 h-8 bg-indigo-300 relative z-10" />

                {/* Title Node for Committees */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="glass px-8 py-3 rounded-full bg-slate-800 text-white w-full max-w-md shadow-lg relative z-20 flex items-center justify-center gap-3 mb-8"
                >
                  <Shield size={20} className="text-emerald-400" />
                  <h4 className="font-bold text-sm tracking-widest uppercase"><span className="text-slate-400">Hospital Committees</span></h4>
                </motion.div>

                {/* Grid of 10 Detailed Committees */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4">
                  {hospitalCommittees.map((committee, idx) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.02) }}
                      key={idx}
                      onClick={() => setExpandedCommittee(idx)}
                      className="glass p-5 rounded-2xl flex items-center gap-4 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div className="absolute right-0 top-0 w-12 h-12 bg-emerald-500/5 rounded-bl-[2rem] transition-colors group-hover:bg-emerald-500/10" />
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100">
                        {idx + 1}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-sm text-slate-700 leading-snug">{committee.name}</h4>
                        <p className="text-[10px] uppercase font-black text-emerald-500 tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Roster →
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Local Modal inside OrgStructure for Committees */}
                <AnimatePresence>
                  {expandedCommittee !== null && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setExpandedCommittee(null)}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white/20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="bg-slate-900 px-8 py-6 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                              <Shield size={24} />
                            </div>
                            <div>
                              <h3 className="text-white font-black text-xl leading-tight">{hospitalCommittees[expandedCommittee].name}</h3>
                              <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Committee Roster</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => setExpandedCommittee(null)}
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          >
                            <Plus size={24} className="rotate-45" />
                          </button>
                        </div>
                        
                        <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                          <div className="flex flex-col gap-3">
                            {hospitalCommittees[expandedCommittee].members.map((member, mIdx) => {
                              const parts = member.split("–");
                              const role = parts[0]?.trim();
                              const rest = parts.slice(1).join("–").trim();
                              return (
                                <motion.div 
                                  key={mIdx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: mIdx * 0.05 }}
                                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group"
                                >
                                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 transition-transform group-hover:scale-150" />
                                  <div className="flex flex-col">
                                    <span className="font-black text-slate-800 text-sm tracking-tight leading-none mb-1.5">{role}</span>
                                    {rest && <span className="text-slate-500 font-bold text-xs">{rest}</span>}
                                  </div>
                                </motion.div>
                              )
                            })}
                          </div>
                        </div>
                        
                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-center">
                          <button 
                            onClick={() => setExpandedCommittee(null)}
                            className="px-8 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm tracking-wide hover:bg-emerald-600 transition-colors shadow-lg"
                          >
                            Close Roster
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
