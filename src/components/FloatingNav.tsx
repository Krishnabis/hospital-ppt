"use client";

import { motion } from "framer-motion";
import { 
  Home, Info, Stethoscope, Network, ShieldCheck, 
  FileCheck, Users, GraduationCap, Map, Image as ImageIcon, 
  UsersRound, HeartHandshake, Rocket, LineChart, Megaphone, Award
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
  { id: "grievance", name: "Grievance Handling", icon: Megaphone },
  { id: "trainings", name: "Trainings", icon: GraduationCap },
  { id: "beforeafter", name: "Before & After", icon: ImageIcon },
  { id: "qualitywall", name: "Quality Wall", icon: Award },
  { id: "map", name: "Floor Map", icon: Map },
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
      { rootMargin: "-40% 0px -40% 0px" }
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
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-4 md:bottom-auto md:top-1/2 left-1/2 md:left-auto md:right-4 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-50 flex flex-row md:flex-col gap-1 md:gap-1 glass-neon p-1.5 md:p-2 rounded-full w-[92vw] md:w-auto overflow-x-auto md:overflow-x-visible md:overflow-y-auto md:max-h-[90vh]"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <div 
            key={item.id} 
            className="relative group flex items-center justify-end"
          >
            {/* Tooltip */}
            <div className="absolute right-11 bg-slate-800 text-white text-xs font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl hidden md:block">
              {item.name}
              <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-[5px] border-transparent border-l-slate-800" />
            </div>

            {/* Icon Button */}
            <button
              onClick={() => scrollTo(item.id)}
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm outline-none ${
                isActive 
                  ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-white scale-110 shadow-[0_0_12px_rgba(56,189,248,0.5)]" 
                  : "bg-white/80 text-slate-500 hover:bg-sky-50 hover:text-sky-500 hover:scale-105"
              }`}
            >
              <item.icon size={14} strokeWidth={isActive ? 2.5 : 2} />
            </button>
          </div>
        );
      })}
    </motion.div>
  );
}
