"use client";

import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";

const codes = [
  {
    sn: 1, code: "BLUE", bg: "bg-blue-500", text: "text-blue-700",
    rowBg: "bg-blue-50", badge: "bg-blue-100 text-blue-800 border-blue-300",
    incident: "Any Type of Medical Emergency / Cardiac Arrest",
    contacts: [
      { label: "PRO OFFICE", number: "01346-257799" },
      { label: "PRO OFFICE", number: "01346-244702" },
      { label: "EMERGENCY NO.", number: "707" },
      { label: "SECURITY SUPERVISOR", number: "767" },
      { label: "COMPLAINT CELL", number: "888" },
    ],
  },
  {
    sn: 2, code: "RED", bg: "bg-red-500", text: "text-red-700",
    rowBg: "bg-red-50", badge: "bg-red-100 text-red-800 border-red-300",
    incident: "Fire",
    contacts: [
      { label: "PRO OFFICE", number: "01346-257799" },
      { label: "PRO OFFICE", number: "01346-244702" },
      { label: "SECURITY SUPERVISOR", number: "767" },
      { label: "ELECTRICIAN HEAD", number: "9411129911" },
      { label: "COMPLAINT CELL", number: "888" },
    ],
  },
  {
    sn: 3, code: "VIOLET", bg: "bg-violet-500", text: "text-violet-700",
    rowBg: "bg-violet-50", badge: "bg-violet-100 text-violet-800 border-violet-300",
    incident: "Violent Patient / Attendant or Visitor",
    contacts: [
      { label: "PRO OFFICE", number: "01346-257799" },
      { label: "PRO OFFICE", number: "01346-244702" },
      { label: "MS OFFICE", number: "788 / 706" },
      { label: "SECURITY SUPERVISOR", number: "767" },
      { label: "COMPLAINT CELL", number: "888" },
    ],
  },
  {
    sn: 4, code: "PINK", bg: "bg-pink-400", text: "text-pink-700",
    rowBg: "bg-pink-50", badge: "bg-pink-100 text-pink-800 border-pink-300",
    incident: "Child Abduction / Baby Missing",
    contacts: [
      { label: "PRO OFFICE", number: "01346-257799" },
      { label: "PRO OFFICE", number: "01346-244702" },
      { label: "PEDIA", number: "717" },
      { label: "ANS", number: "727" },
      { label: "SECURITY SUPERVISOR", number: "767" },
      { label: "COMPLAINT CELL", number: "888" },
    ],
  },
  {
    sn: 5, code: "BLACK", bg: "bg-slate-800", text: "text-slate-800",
    rowBg: "bg-slate-50", badge: "bg-slate-200 text-slate-800 border-slate-400",
    incident: "Bomb Threat",
    contacts: [
      { label: "PRO OFFICE", number: "01346-257799" },
      { label: "PRO OFFICE", number: "01346-244702" },
      { label: "SECURITY SUPERVISOR", number: "767" },
      { label: "COMPLAINT CELL", number: "888" },
    ],
  },
  {
    sn: 6, code: "YELLOW", bg: "bg-yellow-400", text: "text-yellow-700",
    rowBg: "bg-yellow-50", badge: "bg-yellow-100 text-yellow-800 border-yellow-400",
    incident: "Internal and External Disaster",
    contacts: [
      { label: "PRO OFFICE", number: "01346-257799" },
      { label: "PRO OFFICE", number: "01346-244702" },
      { label: "ANS", number: "727" },
      { label: "EMR", number: "707" },
      { label: "SECURITY SUPERVISOR", number: "767" },
      { label: "COMPLAINT CELL", number: "888" },
    ],
  },
  {
    sn: 7, code: "ORANGE", bg: "bg-orange-400", text: "text-orange-700",
    rowBg: "bg-orange-50", badge: "bg-orange-100 text-orange-800 border-orange-300",
    incident: "Spill Management",
    contacts: [
      { label: "HOUSE KEEPING", number: "9760331431" },
      { label: "EMR", number: "707" },
      { label: "ICN", number: "9897383016" },
    ],
  },
];


const keyContacts = [
  { label: "EMERGENCY NO.",              number: "799",        highlight: true },
  { label: "PRO OFFICE",                 number: "01346-257799" },
  { label: "PRO OFFICE",                 number: "01346-244702" },
  { label: "Mr. Achlesh Parashar (ANS)", number: "9758254569" },
  { label: "Mr. Jai Hind (ANS)",         number: "9720438496" },
  { label: "Mr. Bijendra (ANS)",         number: "9870877504" },
  { label: "Mr. Pramod Panwar",          number: "" },
];

export default function EmergencyContacts() {
  return (
    <section
      id="emergency"
      className="relative w-full flex items-center justify-center py-20 overflow-hidden bg-slate-50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-60" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl flex flex-col items-center">

        {/* Hospital Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-wide leading-snug">
            H.N.B. BASE HOSPITAL SRINAGAR
          </h2>
          <p className="text-red-600 font-bold text-sm mt-1 tracking-widest uppercase">
            Pauri Garhwal, Uttarakhand — 246174
          </p>
          <div className="h-1 w-32 mt-4 mx-auto rounded-full bg-gradient-to-r from-red-600 via-red-400 to-red-600" />
          <p className="mt-4 text-slate-500 font-semibold text-sm flex items-center justify-center gap-2">
            <AlertTriangle size={15} className="text-red-400" />
            Emergency Color Code — Incident Response Directory
            <AlertTriangle size={15} className="text-red-400" />
          </p>
        </motion.div>

        {/* Color Code Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white"
        >
          <div className="grid grid-cols-12 bg-slate-800 px-6 py-3">
            <div className="col-span-1 text-white font-black text-xs tracking-widest uppercase">S.N.</div>
            <div className="col-span-2 text-white font-black text-xs tracking-widest uppercase">Code</div>
            <div className="col-span-4 text-white font-black text-xs tracking-widest uppercase">Incident</div>
            <div className="col-span-5 text-white font-black text-xs tracking-widest uppercase flex items-center gap-1.5">
              <Phone size={12} /> Emergency Contact Person
            </div>
          </div>

          {codes.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className={`grid grid-cols-12 px-4 py-4 border-t border-slate-100 items-start ${c.rowBg} hover:brightness-95 transition-all`}
            >
              <div className="col-span-1 flex items-start pt-1">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${c.bg} text-white shadow-sm`}>
                  {c.sn}
                </span>
              </div>
              <div className="col-span-2 flex items-start pt-1">
                <span className={`px-3 py-1.5 rounded-full border font-black text-sm tracking-wider ${c.badge}`}>
                  {c.code}
                </span>
              </div>
              <div className="col-span-4 pr-4 pt-1">
                <span className="font-bold text-slate-800 text-sm leading-snug">{c.incident}</span>
              </div>
              <div className="col-span-5 flex flex-col gap-1.5">
                {c.contacts.map((contact, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wide w-32 shrink-0">{contact.label}</span>
                    <span className="text-slate-400 text-xs">=</span>
                    <a href={`tel:${contact.number.replace(/[^0-9]/g, "")}`} className={`font-black text-sm flex items-center gap-1 group ${c.text}`}>
                      <Phone size={11} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                      {contact.number}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Contacts below codes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full mt-8"
        >
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Phone size={13} className="text-red-400" /> Key Emergency Contacts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {keyContacts.map((c, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl border shadow-sm ${ c.highlight ? "bg-red-50 border-red-200" : "bg-white border-slate-100" }`}>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-black ${ c.highlight ? "bg-red-500 text-white" : "bg-slate-100 text-slate-500" }`}>{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wide truncate">{c.label}</p>
                  {c.number ? (
                    <a href={`tel:${c.number.replace(/[^0-9]/g, "")}`} className={`font-black text-sm flex items-center gap-1 group ${ c.highlight ? "text-red-600" : "text-emerald-600" }`}>
                      <Phone size={11} className="opacity-60 group-hover:opacity-100" />{c.number}
                    </a>
                  ) : (
                    <span className="text-slate-400 text-sm">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>



      </div>
    </section>
  );
}
