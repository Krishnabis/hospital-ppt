"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShieldAlert, Radiation, Flame, Users, Droplets, Bomb, UserX, ChevronDown, Plus } from "lucide-react";

const codeCommittees = [
  { 
    name: "CODE BLUE", 
    desc: "Cardiac Arrest / Medical Emergency",
    roles: ["Team Leader: Duty Doctor ICU", "Members: ER Nurse, Anesthetist, Ward Boy"],
    color: "from-blue-500 to-sky-400", bg: "bg-blue-50", text: "text-blue-500", icon: ShieldAlert, border: "#3b82f6"
  },
  { 
    name: "CODE RED", 
    desc: "Fire Emergency",
    roles: ["Team Leader: Fire Safety Officer", "Members: Security Head, Maintenance, Admin On-Duty"],
    color: "from-rose-500 to-red-400", bg: "bg-rose-50", text: "text-rose-500", icon: Flame, border: "#f43f5e"
  },
  { 
    name: "CODE ORANGE", 
    desc: "Hazardous Spill Management",
    roles: ["Team Leader: Housekeeping Supervisor", "Members: Infection Control, Safety Officer"],
    color: "from-orange-500 to-amber-400", bg: "bg-orange-50", text: "text-orange-600", icon: Droplets, border: "#f97316"
  },
  { 
    name: "CODE YELLOW", 
    desc: "Internal & External Disaster",
    roles: ["Team Leader: Medical Superintendent", "Members: All HODs, ER In-Charge, Blood Bank"],
    color: "from-amber-500 to-yellow-400", bg: "bg-amber-50", text: "text-amber-500", icon: Radiation, border: "#f59e0b"
  },
  { 
    name: "CODE PINK", 
    desc: "Missing Child / Abduction",
    roles: ["Team Leader: Security In-Charge", "Members: Pediatrician, Nursing Supt, Front Desk"],
    color: "from-pink-500 to-rose-400", bg: "bg-pink-50", text: "text-pink-500", icon: Users, border: "#ec4899"
  },
  { 
    name: "CODE BLACK", 
    desc: "Bomb Threat / Suspicious Object",
    roles: ["Team Leader: Security Head", "Members: Admin, Local Police Liaison"],
    color: "from-slate-700 to-slate-900", bg: "bg-slate-100", text: "text-slate-800", icon: Bomb, border: "#1e293b"
  },
  { 
    name: "CODE VIOLET", 
    desc: "Violent Patient / Weapon / Hostage",
    roles: ["Team Leader: Security Quick Response Team", "Members: Admin, Psych Head"],
    color: "from-violet-500 to-purple-400", bg: "bg-violet-50", text: "text-violet-600", icon: UserX, border: "#8b5cf6"
  },
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

export default function Committees() {
  const [selectedCommittee, setSelectedCommittee] = useState<any | null>(null);

  return (
    <section id="committees" className="relative min-h-[60vh] w-full flex items-center justify-center py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Hospital Committees & Protocols
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Ensuring swift and structured management of hospital-wide administration and emergencies through specialized response teams.
          </p>
        </motion.div>

        {/* Core Hospital Committees Grid */}
        <div className="w-full max-w-5xl flex flex-col items-center mb-20">
          <div className="glass px-8 py-3 rounded-full bg-slate-800 text-white w-full max-w-md shadow-lg relative z-20 flex items-center justify-center gap-3 mb-8">
            <h4 className="font-bold text-sm tracking-widest uppercase text-emerald-400">Institutional Committees</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
            {hospitalCommittees.map((committee, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (idx * 0.05) }}
                key={idx}
                onClick={() => setSelectedCommittee(committee)}
                className="glass p-5 rounded-2xl flex items-center gap-4 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer bg-slate-50 relative group overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-16 h-16 bg-sky-500/5 rounded-bl-[3rem] transition-colors group-hover:bg-sky-500/10" />
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm bg-white text-indigo-600 shadow-sm border border-indigo-50">
                  {idx + 1}
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-sm text-slate-700 leading-snug">{committee.name}</h4>
                  <p className="text-[10px] uppercase font-black text-sky-500 tracking-widest mt-1 opacity-100 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    View Details <span className="text-lg">→</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedCommittee && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCommittee(null)}
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
                    <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white shadow-lg">
                      <ShieldAlert size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-black text-xl leading-tight">{selectedCommittee.name}</h3>
                      <p className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Committee Structure</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCommittee(null)}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <Plus size={24} className="rotate-45" />
                  </button>
                </div>
                
                <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                  <div className="flex flex-col gap-3">
                    {selectedCommittee.members.map((member: string, mIdx: number) => {
                      const parts = member.split("–");
                      const role = parts[0]?.trim();
                      const rest = parts.slice(1).join("–").trim();
                      return (
                        <motion.div 
                          key={mIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: mIdx * 0.05 }}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors group"
                        >
                          <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 transition-transform group-hover:scale-150" />
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
                    onClick={() => setSelectedCommittee(null)}
                    className="px-8 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm tracking-wide hover:bg-sky-600 transition-colors shadow-lg"
                  >
                    Close Roster
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Emergency Code Teams */}
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="glass px-8 py-3 rounded-full bg-rose-50 text-rose-600 w-full max-w-md shadow-sm border border-rose-100 relative z-20 flex items-center justify-center gap-3 mb-8">
            <h4 className="font-bold text-sm tracking-widest uppercase">Emergency Codes</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {codeCommittees.map((code, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 + (idx * 0.1) }}
                 className={`glass-neon p-6 rounded-[2rem] border-t-8 shadow-sm flex flex-col transition-all hover:shadow-2xl hover:-translate-y-1`}
                 style={{ borderTopColor: code.border }}
               >
                 <div className="flex items-start gap-4 mb-4">
                   <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${code.color} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <code.icon size={24} />
                   </div>
                   <div>
                     <h4 className="font-black text-xl text-slate-800 leading-none mb-1">{code.name}</h4>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{code.desc}</p>
                   </div>
                 </div>
                 
                 <div className={`p-4 rounded-2xl ${code.bg} border border-slate-100 flex-grow`}>
                   <ul className="space-y-3">
                     {code.roles.map((role, rIdx) => (
                       <li key={rIdx} className={`text-[11px] font-bold flex items-start gap-2 ${code.text}`}>
                         <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 bg-gradient-to-br ${code.color}`} />
                         {role}
                       </li>
                     ))}
                   </ul>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
