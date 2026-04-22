"use client";

import { motion } from "framer-motion";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area, CartesianGrid, LineChart, Line } from "recharts";
import { useState } from "react";

const occupancyData = [
  { month: "Jan", Beds: 85, ICU: 92 },
  { month: "Feb", Beds: 88, ICU: 95 },
  { month: "Mar", Beds: 82, ICU: 89 },
  { month: "Apr", Beds: 90, ICU: 98 },
  { month: "May", Beds: 87, ICU: 94 },
  { month: "Jun", Beds: 89, ICU: 96 },
];

const errorRateData = [
  { month: "Jan", "Med Error (%)": 0.4, "NSI Rate (%)": 0.2 },
  { month: "Feb", "Med Error (%)": 0.35, "NSI Rate (%)": 0.18 },
  { month: "Mar", "Med Error (%)": 0.25, "NSI Rate (%)": 0.15 },
  { month: "Apr", "Med Error (%)": 0.2, "NSI Rate (%)": 0.1 },
  { month: "May", "Med Error (%)": 0.15, "NSI Rate (%)": 0.08 },
  { month: "Jun", "Med Error (%)": 0.1, "NSI Rate (%)": 0.05 },
];

const infectionData = [
  { month: "Jan", CAUTI: 1.2, SSI: 1.5 },
  { month: "Feb", CAUTI: 1.0, SSI: 1.3 },
  { month: "Mar", CAUTI: 0.8, SSI: 1.0 },
  { month: "Apr", CAUTI: 0.5, SSI: 0.8 },
  { month: "May", CAUTI: 0.3, SSI: 0.6 },
  { month: "Jun", CAUTI: 0.2, SSI: 0.4 },
];

export default function QualityIndicators() {
  const [mounted, setMounted] = useState(false);

  return (
    <section id="indicators" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           onViewportEnter={() => setMounted(true)}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Quality Indicators
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-slate-500">Continuous monitoring of key safety metrics driving excellence.</p>
        </motion.div>

        {mounted && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
            
            {/* Occupancy Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass p-8 rounded-[2rem] shadow-sm border border-slate-100 bg-white"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">Occupancy Rates (%)</h3>
              <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={occupancyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                    <Bar dataKey="Beds" fill="url(#colorBeds)" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    <Bar dataKey="ICU" fill="url(#colorICU)" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    <defs>
                      <linearGradient id="colorBeds" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                      </linearGradient>
                      <linearGradient id="colorICU" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Error Rates */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass p-8 rounded-[2rem] shadow-sm border border-slate-100 bg-white"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">Medication Error & NSI Rate Decline</h3>
              <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={errorRateData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                    <Line type="monotone" dataKey="Med Error (%)" stroke="#f43f5e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="NSI Rate (%)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Infection Data - spanning full width */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="glass p-8 rounded-[2rem] shadow-sm border border-slate-100 bg-white lg:col-span-2"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">Infection Control (CAUTI & SSI / 1000 days)</h3>
              <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={infectionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCAUTI" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSSI" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8' }} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="CAUTI" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCAUTI)" />
                    <Area type="monotone" dataKey="SSI" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSSI)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}
