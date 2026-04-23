"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
  AreaChart, Area, CartesianGrid, LineChart, Line,
} from "recharts";
import { useState } from "react";

/* ─── REAL DATA ─── */
const safetyData = [
  { month: "Jan'26", NSI: 0,     MedError: 0,  CAUTI: 0, SSI: 0, VIP: 2,  VAP: 0 },
  { month: "Feb'26", NSI: 0,     MedError: 0,  CAUTI: 1, SSI: 0, VIP: 3,  VAP: 0 },
  { month: "Mar'26", NSI: 0.006, MedError: 0,  CAUTI: 0, SSI: 4, VIP: 2,  VAP: 1 },
  { month: "Apr'26", NSI: 0,     MedError: 0,  CAUTI: 0, SSI: 0, VIP: 3,  VAP: 0 },
];

/* ─── KPI SUMMARY CARDS ─── */
const kpiCards = [
  { label: "NSI Rate",              value: "0.006",  sub: "Mar'26",  color: "from-rose-400 to-pink-500",   note: "Zero in Jan, Feb, Apr" },
  { label: "Medication Error",      value: "0",      sub: "All months", color: "from-emerald-400 to-teal-500", note: "100% compliance" },
  { label: "CAUTI Rate",            value: "1%",     sub: "Feb'26",  color: "from-purple-400 to-fuchsia-500", note: "0% in other months" },
  { label: "SSI Rate",              value: "4%",     sub: "Mar'26",  color: "from-red-400 to-rose-500",    note: "0% in Jan, Feb, Apr" },
  { label: "Total VIP Patients",    value: "10",     sub: "4-Month Total", color: "from-cyan-400 to-sky-500",    note: "Jan:2 | Feb:3 | Mar:2 | Apr:3" },
  { label: "VAP Rate",              value: "1%",     sub: "Mar'26",  color: "from-amber-400 to-orange-500", note: "0% in Jan, Feb, Apr" },
];

export default function QualityIndicators() {
  const [mounted, setMounted] = useState(false);

  return (
    <section id="indicators" className="relative w-full py-24 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setMounted(true)}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-2">
            Quality Indicators
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 font-medium">Monthly performance analysis of clinical safety and quality metrics</p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {kpiCards.map((k, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white group hover:-translate-y-1 transition-all"
            >
              <div className={`bg-gradient-to-br ${k.color} px-4 py-4`}>
                <p className="text-white/80 text-[10px] font-black uppercase tracking-wider mb-1">{k.label}</p>
                <p className="text-white font-black text-3xl leading-tight">{k.value}</p>
                <p className="text-white/70 text-[10px] font-bold mt-1 uppercase">{k.sub}</p>
              </div>
              <div className="bg-white px-4 py-3 border-t border-slate-50">
                <p className="text-slate-400 text-[10px] font-bold leading-snug">{k.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {mounted && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* NSI Graph */}
            <div className="glass p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 mb-4 uppercase tracking-wider">NSI Rate</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={safetyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
                    <Area type="monotone" dataKey="NSI" stroke="#f43f5e" strokeWidth={3} fill="#fff1f2" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Med Error Graph */}
            <div className="glass p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 mb-4 uppercase tracking-wider">Medication Errors</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={safetyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                    <YAxis domain={[0, 1]} axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
                    <Bar dataKey="MedError" fill="#10b981" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* SSI Graph */}
            <div className="glass p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 mb-4 uppercase tracking-wider">SSI Rate (%)</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={safetyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} unit="%" />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
                    <Line type="monotone" dataKey="SSI" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 5, fill: "#8b5cf6" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* CAUTI Graph */}
            <div className="glass p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 mb-4 uppercase tracking-wider">CAUTI (%)</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={safetyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                    <YAxis domain={[0, 5]} axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} unit="%" />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
                    <Bar dataKey="CAUTI" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* VIP Graph */}
            <div className="glass p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 mb-4 uppercase tracking-wider">Total VIP Patients</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={safetyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
                    <Bar dataKey="VIP" fill="#06b6d4" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* VAP Graph */}
            <div className="glass p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
              <h3 className="text-sm font-black text-slate-800 mb-4 uppercase tracking-wider">VAP (%)</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={safetyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} />
                    <YAxis domain={[0, 5]} axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 10 }} unit="%" />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 11 }} />
                    <Area type="monotone" dataKey="VAP" stroke="#f59e0b" strokeWidth={3} fill="#fff7ed" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        )}

        {/* Raw Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm bg-white"
        >
          <div className="bg-slate-800 px-6 py-4 flex items-center gap-3">
            <h3 className="text-white font-black text-sm tracking-widest uppercase">Monthly Data Audit</h3>
            <div className="h-4 w-px bg-slate-600 mx-2" />
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Jan – Apr 2026 Metrics</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  {["Month", "NSI Rate", "Med Error", "CAUTI (%)", "SSI (%)", "VIP Patients", "VAP (%)"].map((h, i) => (
                    <th key={i} className="px-6 py-4 text-left text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-100">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {safetyData.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-black text-slate-700 text-xs">{row.month}</td>
                    <td className="px-6 py-4 font-bold text-xs text-rose-500">{row.NSI}</td>
                    <td className="px-6 py-4 font-bold text-xs text-emerald-600">{row.MedError}</td>
                    <td className="px-6 py-4 font-bold text-xs text-indigo-600">{row.CAUTI}%</td>
                    <td className="px-6 py-4 font-bold text-xs text-violet-600">{row.SSI}%</td>
                    <td className="px-6 py-4 font-bold text-xs text-cyan-700">{row.VIP}</td>
                    <td className="px-6 py-4 font-bold text-xs text-amber-600">{row.VAP}%</td>
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
