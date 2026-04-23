"use client";

import { motion } from "framer-motion";
import { Phone, AlertTriangle, ShieldAlert, Baby, Flame, Zap, Biohazard, Siren } from "lucide-react";

const contacts = [
  { sn: 1,  label: "EMERGENCY NO.",              number: "799",          highlight: true },
  { sn: 2,  label: "PRO OFFICE",                 number: "01346-257799", highlight: false },
  { sn: 3,  label: "PRO OFFICE",                 number: "01346-244702", highlight: false },
  { sn: 4,  label: "Mr. Achlesh Parashar (ANS)", number: "9758254569",   highlight: false },
  { sn: 5,  label: "Mr. Jai Hind (ANS)",         number: "9720438496",   highlight: false },
  { sn: 6,  label: "Mr. Bijendra (ANS)",         number: "9870877504",   highlight: false },
  { sn: 7,  label: "Mr. Pramod Panwar",          number: "—",            highlight: false },
];

const incidentTypes = [
  { icon: Zap,        label: "Medical Emergency / Cardiac Arrest" },
  { icon: Flame,      label: "Fire" },
  { icon: ShieldAlert, label: "Violent Patient" },
  { icon: Baby,       label: "Child Abduction / Baby Missing" },
  { icon: AlertTriangle, label: "Bomb Threat" },
  { icon: Siren,      label: "Internal & External Disaster" },
  { icon: Biohazard,  label: "Spill Management" },
];

export default function EmergencyContacts() {
  return (
    <section
      id="emergency"
      className="relative w-full flex items-center justify-center py-20 overflow-hidden bg-slate-50"
    >
      {/* Subtle red glow accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl flex flex-col items-center">

        {/* TEMPORARY BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 px-5 py-1.5 rounded-full border border-amber-500/60 bg-amber-100 text-amber-700 text-xs font-black tracking-[0.2em] uppercase"
        >
          ⚠ Temporary Display
        </motion.div>

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
        </motion.div>

        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full rounded-2xl border-2 border-red-300 bg-red-50 px-6 py-5 mb-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertTriangle className="text-red-400" size={20} />
            <p className="text-red-700 font-black text-sm tracking-wider uppercase">
              In Case of Any Incident
            </p>
            <AlertTriangle className="text-red-400" size={20} />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {incidentTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-red-200 text-red-700 text-[11px] font-bold shadow-sm"
                >
                  <Icon size={11} />
                  {item.label}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full rounded-3xl overflow-hidden border border-red-200 shadow-xl bg-white"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-red-600 px-6 py-3">
            <div className="col-span-1 text-white font-black text-xs tracking-widest uppercase">S.N.</div>
            <div className="col-span-7 text-white font-black text-xs tracking-widest uppercase">Name / Designation</div>
            <div className="col-span-4 text-white font-black text-xs tracking-widest uppercase flex items-center gap-1.5">
              <Phone size={12} /> Contact Number
            </div>
          </div>

          {/* Rows */}
          {contacts.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className={`grid grid-cols-12 px-6 py-4 border-t border-red-100 items-center transition-colors hover:bg-red-50 ${
                c.highlight
                  ? "bg-red-50"
                  : "bg-white"
              }`}
            >
              <div className="col-span-1">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                  c.highlight ? "bg-red-500 text-white" : "bg-slate-700 text-slate-300"
                }`}>
                  {c.sn}
                </span>
              </div>
              <div className="col-span-7">
                <span className={`font-bold text-sm ${c.highlight ? "text-red-700" : "text-slate-700"}`}>
                  {c.label}
                </span>
              </div>
              <div className="col-span-4">
                <a
                  href={`tel:${c.number.replace(/[^0-9]/g, "")}`}
                  className={`font-black text-base flex items-center gap-2 group ${
                    c.highlight ? "text-red-600" : "text-emerald-600"
                  }`}
                >
                  <Phone size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  {c.number}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-slate-400 text-xs text-center font-semibold"
        >
          Report any incident immediately to the nearest emergency contact listed above.
        </motion.p>

      </div>
    </section>
  );
}
