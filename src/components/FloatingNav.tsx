"use client";

import { motion } from "framer-motion";
import { 
  Home, Info, Stethoscope, Network, ShieldCheck, 
  FileCheck, Users, GraduationCap, Map, Image as ImageIcon, 
  HeartHandshake, Rocket, LineChart, Megaphone, Award, Siren, UsersRound, FileText, ClipboardList, Heart
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const navItems = [
  { id: "hero",        name: "Welcome",           icon: Home },
  { id: "overview",   name: "Overview",           icon: Info },
  { id: "scope",      name: "Scope of Services",  icon: Stethoscope },
  { id: "org",        name: "Org Structure",       icon: Network },

  { id: "compliances",name: "Compliances",         icon: FileCheck },
  { id: "hr",         name: "HR Management",       icon: Users },
  { id: "grievance",  name: "Grievance Handling",  icon: Megaphone },
  { id: "trainings",  name: "Trainings",           icon: GraduationCap },
  { id: "beforeafter",name: "Before & After",      icon: ImageIcon },
  { id: "qualitywall",name: "Quality Wall",        icon: Award },
  { id: "map",        name: "Floor Map",           icon: Map },
  { id: "committees", name: "Committees",          icon: UsersRound },
  { id: "patient",    name: "Patient Rights",      icon: HeartHandshake },
  { id: "pathways",   name: "Clinical Pathways",   icon: ClipboardList },
  { id: "indicators", name: "Quality Indicators",  icon: LineChart },
  { id: "sop",        name: "SOP Index",          icon: FileText },
  { id: "future",     name: "Future Plans",        icon: Rocket },
  { id: "thanks",     name: "Thank You",           icon: Heart },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [tooltip, setTooltip] = useState<{ name: string; y: number } | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter = (name: string, e: React.MouseEvent<HTMLDivElement>) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ name, y: rect.top + rect.height / 2 });
  };

  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => setTooltip(null), 80);
  };

  return (
    <>
      {/* Tooltip — positioned at exact icon Y, to the left of nav */}
      {tooltip && (
        <div
          className="fixed z-[200] pointer-events-none"
          style={{ top: tooltip.y, right: 56, transform: "translateY(-50%)" }}
        >
          <div className="bg-slate-800 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap relative">
            {tooltip.name}
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-[5px] border-transparent border-l-slate-800" />
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-4 md:bottom-auto md:top-1/2 left-1/2 md:left-auto md:right-4 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-50 flex flex-row md:flex-col gap-1 glass-neon p-1.5 md:p-2 rounded-full w-[92vw] md:w-auto overflow-x-auto md:overflow-visible"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <div
              key={item.id}
              className="relative flex items-center justify-center"
              onMouseEnter={(e) => handleMouseEnter(item.name, e)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Mobile tooltip — above icon */}
              <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-semibold py-1 px-2 rounded-md shadow-lg whitespace-nowrap pointer-events-none transition-opacity duration-150 md:hidden ${tooltip?.name === item.name ? "opacity-100" : "opacity-0"}`}>
                {item.name}
              </div>

              <button
                onClick={() => scrollTo(item.id)}
                title={item.name}
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
    </>
  );
}
