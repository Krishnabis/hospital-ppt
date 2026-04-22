"use client";

import { motion } from "framer-motion";
import { 
  Home, Info, Stethoscope, Network, ShieldCheck, 
  FileCheck, Users, GraduationCap, Map, Image as ImageIcon, 
  UsersRound, HeartHandshake, Rocket, LineChart 
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", name: "Welcome", icon: Home },
  { id: "overview", name: "Overview", icon: Info },
  { id: "scope", name: "Scope of Services", icon: Stethoscope },
  { id: "org", name: "Org Structure", icon: Network },
  { id: "quality", name: "Quality Framework", icon: ShieldCheck },
  { id: "compliances", name: "Compliances", icon: FileCheck },
  { id: "hr", name: "HR Management", icon: Users },
  { id: "trainings", name: "Trainings", icon: GraduationCap },
  { id: "map", name: "Floor Map", icon: Map },
  { id: "beforeafter", name: "Before & After", icon: ImageIcon },
  { id: "committees", name: "Committees", icon: UsersRound },
  { id: "patient", name: "Patient Rights", icon: HeartHandshake },
  { id: "future", name: "Future Plans", icon: Rocket },
  { id: "indicators", name: "Quality Indicators", icon: LineChart },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-6 lg:top-1/2 lg:-translate-y-1/2 z-[100] flex flex-row lg:flex-col gap-2 lg:gap-2.5 glass-neon p-2 lg:p-3 rounded-full max-w-[90vw] lg:max-w-none overflow-x-auto lg:overflow-visible no-scrollbar shadow-2xl border border-white/50"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <div 
            key={item.id} 
            className="relative group flex items-center justify-end"
          >
            {/* Tooltip */}
            <div className="absolute right-14 bg-slate-800 text-white text-sm font-semibold py-1.5 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              {item.name}
              <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-[6px] border-transparent border-l-slate-800" />
            </div>

            {/* Icon Button */}
            <button
              onClick={() => scrollTo(item.id)}
              className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 shadow-md outline-none ${
                isActive 
                  ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-white scale-110 shadow-[0_0_15px_rgba(56,189,248,0.5)]" 
                  : "bg-white/80 text-slate-500 hover:bg-sky-50 hover:text-sky-500 hover:scale-105"
              }`}
            >
              <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
            </button>
          </div>
        );
      })}
    </motion.div>
  );
}
