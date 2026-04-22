"use client";

import { motion } from "framer-motion";
import { 
  Megaphone, User, Users, Stethoscope, UsersRound, 
  Gavel, Clock, CalendarCheck, Network, FileX, ClipboardPen 
} from "lucide-react";

export default function GrievanceRedressal() {
  const steps = [
    { 
      level: 1, 
      role: "Incharge / Immediate Supervisor", 
      action: "Report grievance to immediate supervisor", 
      timeline: "48 HOURS", 
      icon: User, 
      color: "text-sky-500", 
      bg: "bg-sky-50" 
    },
    { 
      level: 2, 
      role: "Head of Department (HOD)", 
      action: "Escalate if unresolved", 
      timeline: "48 HOURS", 
      icon: Users, 
      color: "text-indigo-500", 
      bg: "bg-indigo-50" 
    },
    { 
      level: 3, 
      role: "Medical Superintendent (MS)", 
      action: "Further escalation if unresolved", 
      timeline: "48 HOURS", 
      icon: Stethoscope, 
      color: "text-emerald-500", 
      bg: "bg-emerald-50" 
    },
    { 
      level: 4, 
      role: "Grievance Redressal Committee", 
      action: "Committee review and decision", 
      timeline: "7 WORKING DAYS", 
      icon: UsersRound, 
      color: "text-amber-500", 
      bg: "bg-amber-50" 
    },
    { 
      level: 5, 
      role: "Principal / Dean (Final Appeal)", 
      action: "Final decision - binding", 
      timeline: "FINAL", 
      icon: Gavel, 
      color: "text-rose-500", 
      bg: "bg-rose-50" 
    },
  ];

  const guidelines = [
    {
      title: "Raise grievance within 1 week",
      icon: CalendarCheck,
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      title: "Follow escalation hierarchy",
      icon: Network,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Certain issues (appraisal, promotion) not covered",
      icon: FileX,
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      title: "All grievances must be documented",
      icon: ClipboardPen,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section id="grievance" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-slate-50 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100 rounded-full blur-[100px] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-12 w-full max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4 uppercase">
            Grievance Redressal Procedure
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto shadow-[0_0_15px_rgba(56,189,248,0.5)] mb-6" />
          <p className="text-xl text-slate-600 font-medium mb-8">
            A fair, transparent and time-bound process for addressing your concerns.
          </p>
          
          <div className="inline-flex items-center gap-3 bg-teal-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-teal-500/30">
            <Megaphone size={24} />
            <span className="tracking-wide">Your Voice Matters. We are here to help.</span>
          </div>
        </motion.div>

        {/* Escalation Flow */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-8 flex flex-col relative w-full">
            {/* Connecting Line */}
            <div className="absolute left-[2.25rem] md:left-[2.75rem] top-10 bottom-10 w-1 bg-slate-200 rounded-full hidden sm:block" />

            <div className="flex flex-col gap-6 w-full">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-6 relative group w-full"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full ${step.bg} text-slate-700 flex items-center justify-center font-black text-2xl shadow-inner border-4 border-white z-10 relative group-hover:scale-110 transition-transform`}>
                    <step.icon size={32} className={step.color} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-800 text-white text-sm flex items-center justify-center border-2 border-white shadow-sm">
                      {step.level}
                    </div>
                  </div>
                  
                  <div className="glass-neon bg-white flex-1 p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-center justify-between gap-6 shadow-sm border border-slate-100 group-hover:border-sky-200 transition-colors w-full">
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">{step.role}</h4>
                      <p className="text-slate-500 font-medium">{step.action}</p>
                    </div>
                    
                    {step.level !== 5 && (
                      <div className="flex flex-col items-center justify-center min-w-[120px] py-3 px-4 bg-slate-50 rounded-xl border border-slate-100 text-center shrink-0">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Timeline</p>
                        <div className="flex items-center gap-2 text-sky-600">
                          <Clock size={20} strokeWidth={2.5} />
                          <span className="font-black text-lg">{step.timeline}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Guidelines Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 blur-2xl rounded-full" />
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-slate-700 pb-4 relative z-10">
                Important Guidelines
              </h3>
              
              <div className="flex flex-col gap-4 relative z-10">
                {guidelines.map((guide, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-xl border border-slate-600/50 hover:bg-slate-700 transition-colors">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white ${guide.color}`}>
                      <guide.icon size={24} />
                    </div>
                    <p className="font-semibold text-slate-200 text-sm leading-tight">{guide.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
