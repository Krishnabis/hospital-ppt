"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, LineChart, Line,
} from "recharts";
import { useState } from "react";

/* ─── REAL DATA ─── */
const safetyData = [
  { month: "Jan'26", NSI: 0,     MedError: 0,  CAUTI: 0, SSI: 0, VIP: 2,  VAP: 0 },
  { month: "Feb'26", NSI: 0,     MedError: 0,  CAUTI: 1, SSI: 0, VIP: 3,  VAP: 0 },
  { month: "Mar'26", NSI: 0.006, MedError: 0,  CAUTI: 0, SSI: 4, VIP: 2,  VAP: 1 },
  { month: "Apr'26", NSI: 0,     MedError: 0,  CAUTI: 0, SSI: 0, VIP: 3,  VAP: 0 },
];

/* ─── CHART CONFIG ─── */
const chartConfigs = [
  { key: "NSI",      label: "NSI Rate",         color: "#f43f5e", type: "line" },
  { key: "MedError", label: "Medication Error", color: "#10b981", type: "bar"  },
  { key: "CAUTI",    label: "CAUTI (%)",        color: "#8b5cf6", type: "bar"  },
  { key: "SSI",      label: "SSI (%)",          color: "#ef4444", type: "line" },
  { key: "VIP",      label: "VIP Patients",     color: "#0ea5e9", type: "bar"  },
  { key: "VAP",      label: "VAP (%)",          color: "#f59e0b", type: "bar"  },
];

export default function QualityIndicators() {
  const [mounted, setMounted] = useState(false);

  return (
    <section id="indicators" className="relative w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setMounted(true)}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-2">
            Quality Indicators
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto mb-3" />
          <p className="text-slate-500 text-sm">Jan'26 – Apr'26 · Specialized KPI Monitoring</p>
        </motion.div>

        {mounted && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chartConfigs.map((cfg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-slate-800">{cfg.label}</h3>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cfg.color }} />
                </div>
                
                <div className="w-full h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    {cfg.type === "line" ? (
                      <LineChart data={safetyData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                        <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
                        <Line type="monotone" dataKey={cfg.key} stroke={cfg.color} strokeWidth={3} dot={{ r: 4, fill: cfg.color }} activeDot={{ r: 6 }} />
                      </LineChart>
                    ) : (
                      <BarChart data={safetyData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                        <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
                        <Bar dataKey={cfg.key} fill={cfg.color} radius={[6, 6, 0, 0]} maxBarSize={20} />
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Raw Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
        >
          <div className="bg-slate-800 px-6 py-3 flex items-center gap-3">
            <h3 className="text-white font-black text-sm tracking-widest uppercase">Monthly KPI Summary</h3>
            <span className="text-slate-400 text-xs">Jan–Apr 2026</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  {["Month", "NSI Rate", "Med Error", "CAUTI (%)", "SSI (%)", "VIP", "VAP (%)"].map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left text-[10px] font-black text-slate-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { m: "Jan'26", nsi: "0",     med: "0", cauti: "0%", ssi: "0%", vip: "2",  vap: "0%" },
                  { m: "Feb'26", nsi: "0",     med: "0", cauti: "1%", ssi: "0%", vip: "3", vap: "0%" },
                  { m: "Mar'26", nsi: "0.006", med: "0", cauti: "0%", ssi: "4%", vip: "2",  vap: "1%" },
                  { m: "Apr'26", nsi: "0",     med: "0", cauti: "0%", ssi: "0%", vip: "3",  vap: "0%" },
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-slate-100 bg-white hover:bg-slate-50 transition-colors`}>
                    <td className="px-4 py-3 font-black text-slate-700 text-xs">{row.m}</td>
                    <td className="px-4 py-3 font-semibold text-xs text-slate-600">{row.nsi}</td>
                    <td className="px-4 py-3 font-semibold text-xs text-emerald-600">{row.med}</td>
                    <td className="px-4 py-3 font-semibold text-xs text-purple-600">{row.cauti}</td>
                    <td className={`px-4 py-3 font-semibold text-xs ${row.ssi === "4%" ? "text-red-600 font-black" : "text-slate-600"}`}>{row.ssi}</td>
                    <td className={`px-4 py-3 font-semibold text-xs text-slate-600`}>{row.vip}</td>
                    <td className="px-4 py-3 font-semibold text-xs text-slate-600">{row.vap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
