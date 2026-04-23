"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
  AreaChart, Area, CartesianGrid, LineChart, Line, Legend,
} from "recharts";
import { useState } from "react";

/* ─── REAL DATA ─── */

// No April — "will be calculated after month end"
const occupancyData = [
  { month: "Jan'26", Ward: 69.32, ICU: 88.24, ALOS: 4.73 },
  { month: "Feb'26", Ward: 78.90, ICU: 82.18, ALOS: 4.92 },
  { month: "Mar'26", Ward: 80.44, ICU: 82.68, ALOS: 5.98 },
];

// April IS available for these
const safetyData = [
  { month: "Jan'26", NSI: 0,     MedError: 0,  CAUTI: 0, SSI: 0, VIP: 5,  VAP: 0 },
  { month: "Feb'26", NSI: 0,     MedError: 0,  CAUTI: 1, SSI: 0, VIP: 14, VAP: 0 },
  { month: "Mar'26", NSI: 0.006, MedError: 0,  CAUTI: 0, SSI: 4, VIP: 2,  VAP: 1 },
  { month: "Apr'26", NSI: 0,     MedError: 0,  CAUTI: 0, SSI: 0, VIP: 8,  VAP: 0 },
];

/* ─── KPI SUMMARY CARDS ─── */
const kpiCards = [
  { label: "Bed Occupancy (Ward)",  value: "80.44%", sub: "Mar'26",  color: "from-sky-400 to-blue-500",    note: "↑ from 69.32% in Jan" },
  { label: "Bed Occupancy (ICU)",   value: "82.68%", sub: "Mar'26",  color: "from-indigo-400 to-violet-500", note: "↓ from 88.24% in Jan" },
  { label: "Avg. Length of Stay",   value: "5.98d",  sub: "Mar'26",  color: "from-amber-400 to-orange-500", note: "↑ from 4.73d in Jan" },
  { label: "NSI Rate",              value: "0.006",  sub: "Mar'26",  color: "from-rose-400 to-pink-500",   note: "0 in Jan & Feb" },
  { label: "Medication Error",      value: "0%",     sub: "All months", color: "from-emerald-400 to-teal-500", note: "Zero incidents" },
  { label: "CAUTI Rate",            value: "1%",     sub: "Feb'26",  color: "from-purple-400 to-fuchsia-500", note: "0% in Jan, Mar, Apr" },
  { label: "SSI Rate",              value: "4%",     sub: "Mar'26",  color: "from-red-400 to-rose-500",    note: "0% in Jan, Feb, Apr" },
  { label: "VIP (Peak)",            value: "14",     sub: "Feb'26",  color: "from-cyan-400 to-sky-500",    note: "5 Jan | 2 Mar | 8 Apr" },
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
          <p className="text-slate-500 text-sm">Jan'26 – Apr'26 · Continuous monitoring of key patient safety metrics</p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {kpiCards.map((k, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden shadow-sm border border-slate-100"
            >
              <div className={`bg-gradient-to-br ${k.color} px-4 py-3`}>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider">{k.label}</p>
                <p className="text-white font-black text-2xl leading-tight">{k.value}</p>
                <p className="text-white/70 text-[10px] font-semibold">{k.sub}</p>
              </div>
              <div className="bg-white px-4 py-2">
                <p className="text-slate-500 text-[10px] font-semibold">{k.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {mounted && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Bed Occupancy — Jan to Mar only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-base font-bold text-slate-800">Bed Occupancy Rate (%)</h3>
                <span className="text-[10px] bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">Apr — pending</span>
              </div>
              <p className="text-slate-400 text-xs mb-5">Ward vs ICU · Jan–Mar'26</p>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={occupancyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 11 }} />
                    <YAxis domain={[60, 100]} axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 11 }} unit="%" />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} formatter={(v: any) => [`${v}%`]} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <defs>
                      <linearGradient id="gWard" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#0ea5e9" />
                      </linearGradient>
                      <linearGradient id="gICU" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                    <Bar dataKey="Ward" name="BOR — Ward" fill="url(#gWard)" radius={[6, 6, 0, 0]} maxBarSize={36} />
                    <Bar dataKey="ICU"  name="BOR — ICU"  fill="url(#gICU)"  radius={[6, 6, 0, 0]} maxBarSize={36} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* ALOS — Jan to Mar only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-base font-bold text-slate-800">Average Length of Stay (Days)</h3>
                <span className="text-[10px] bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">Apr — pending</span>
              </div>
              <p className="text-slate-400 text-xs mb-5">Jan–Mar'26</p>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={occupancyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="gALOS" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 11 }} />
                    <YAxis domain={[4, 7]} axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 11 }} unit="d" />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} formatter={(v: any) => [`${v} days`]} />
                    <Area type="monotone" dataKey="ALOS" name="Avg. LOS" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#gALOS)" dot={{ r: 5, fill: "#f59e0b" }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* NSI + SSI — all 4 months */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-slate-800 mb-1">NSI Rate & SSI Rate</h3>
              <p className="text-slate-400 text-xs mb-5">Jan–Apr'26 (per month)</p>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={safetyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 11 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 11 }} />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Line type="monotone" dataKey="NSI" name="NSI Rate" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 7 }} />
                    <Line type="monotone" dataKey="SSI" name="SSI (%)" stroke="#8b5cf6" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 7 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* VIP + CAUTI + VAP — all 4 months */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-slate-800 mb-1">VIP / CAUTI / VAP</h3>
              <p className="text-slate-400 text-xs mb-5">Jan–Apr'26 (per month)</p>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={safetyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 11 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 11 }} />
                    <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <defs>
                      <linearGradient id="gVIP" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#0891b2" />
                      </linearGradient>
                    </defs>
                    <Bar dataKey="VIP"   name="VIP"       fill="url(#gVIP)"  radius={[4, 4, 0, 0]} maxBarSize={32} />
                    <Bar dataKey="CAUTI" name="CAUTI (%)" fill="#10b981"     radius={[4, 4, 0, 0]} maxBarSize={32} />
                    <Bar dataKey="VAP"   name="VAP (%)"   fill="#f59e0b"     radius={[4, 4, 0, 0]} maxBarSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

          </div>
        )}

        {/* Raw Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
        >
          <div className="bg-slate-800 px-6 py-3 flex items-center gap-3">
            <h3 className="text-white font-black text-sm tracking-widest uppercase">Monthly KPI Summary</h3>
            <span className="text-slate-400 text-xs">Jan–Apr 2026</span>
            <span className="ml-auto text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-bold">* April BOR/ALOS pending</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  {["Month", "BOR — Ward *", "BOR — ICU *", "ALOS *", "NSI Rate", "Med Error", "CAUTI (%)", "SSI (%)", "VIP", "VAP (%)"].map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left text-[10px] font-black text-slate-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { m: "Jan'26", ward: "69.32%", icu: "88.24%", alos: "4.73", nsi: "0",     med: "0", cauti: "0%", ssi: "0%", vip: "5",  vap: "0%" },
                  { m: "Feb'26", ward: "78.90%", icu: "82.18%", alos: "4.92", nsi: "0",     med: "0", cauti: "1%", ssi: "0%", vip: "14", vap: "0%" },
                  { m: "Mar'26", ward: "80.44%", icu: "82.68%", alos: "5.98", nsi: "0.006", med: "0", cauti: "0%", ssi: "4%", vip: "2",  vap: "1%" },
                  { m: "Apr'26", ward: "—",      icu: "—",      alos: "—",    nsi: "0",     med: "0", cauti: "0%", ssi: "0%", vip: "8",  vap: "0%" },
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-slate-100 ${i === 3 ? "bg-amber-50" : "bg-white hover:bg-slate-50"} transition-colors`}>
                    <td className="px-4 py-3 font-black text-slate-700 text-xs">{row.m}</td>
                    <td className={`px-4 py-3 font-semibold text-xs ${row.ward === "—" ? "text-amber-400 italic" : "text-sky-600"}`}>{row.ward}</td>
                    <td className={`px-4 py-3 font-semibold text-xs ${row.icu === "—"  ? "text-amber-400 italic" : "text-indigo-600"}`}>{row.icu}</td>
                    <td className={`px-4 py-3 font-semibold text-xs ${row.alos === "—" ? "text-amber-400 italic" : "text-amber-600"}`}>{row.alos}</td>
                    <td className="px-4 py-3 font-semibold text-xs text-slate-600">{row.nsi}</td>
                    <td className="px-4 py-3 font-semibold text-xs text-emerald-600">{row.med}</td>
                    <td className="px-4 py-3 font-semibold text-xs text-purple-600">{row.cauti}</td>
                    <td className={`px-4 py-3 font-semibold text-xs ${row.ssi === "4%" ? "text-red-600 font-black" : "text-slate-600"}`}>{row.ssi}</td>
                    <td className={`px-4 py-3 font-semibold text-xs ${row.vip === "14" ? "text-cyan-700 font-black" : "text-slate-600"}`}>{row.vip}</td>
                    <td className="px-4 py-3 font-semibold text-xs text-slate-600">{row.vap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 px-6 py-2 text-[10px] text-slate-400 font-semibold border-t border-slate-100">
            * BOR Ward, BOR ICU, ALOS for Apr'26 will be calculated after month end
          </div>
        </motion.div>

      </div>
    </section>
  );
}
