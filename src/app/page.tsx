"use client";

import { motion, useScroll } from "framer-motion";
import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import ScopeOfServices from "@/components/ScopeOfServices";
import OrgStructure from "@/components/OrgStructure";
import QualityFramework from "@/components/QualityFramework";
import Compliances from "@/components/Compliances";
import HRManagement from "@/components/HRManagement";
import GrievanceRedressal from "@/components/GrievanceRedressal";
import FloorMap from "@/components/FloorMap";
import Trainings from "@/components/Trainings";
import BeforeAfter from "@/components/BeforeAfter";
import QualityWall from "@/components/QualityWall";
import Committees from "@/components/Committees";
import PatientRights from "@/components/PatientRights";
import FuturePlans from "@/components/FuturePlans";
import QualityIndicators from "@/components/QualityIndicators";
import EmergencyContacts from "@/components/EmergencyContacts";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="flex flex-col min-h-screen font-sans selection:bg-sky-200 selection:text-sky-900 w-full overflow-x-hidden relative">

      {/* Global Neon Progress Bar */}
      <div className="progress-bar-container border-t border-sky-400/20 backdrop-blur-md">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <FloatingNav />

      <div id="hero"><Hero /></div>
      <div id="overview"><Overview /></div>
      <div id="scope"><ScopeOfServices /></div>
      <div id="org"><OrgStructure /></div>
      <div id="quality"><QualityFramework /></div>
      <div id="compliances"><Compliances /></div>
      <div id="hr"><HRManagement /></div>
      <div id="grievance"><GrievanceRedressal /></div>

      <div id="trainings"><Trainings /></div>
      <div id="beforeafter"><BeforeAfter /></div>
      <div id="qualitywall"><QualityWall /></div>
      <div id="map"><FloorMap /></div>
      <div id="committees"><Committees /></div>
      <div id="emergency"><EmergencyContacts /></div>
      <div id="patient"><PatientRights /></div>
      <div id="future"><FuturePlans /></div>
      <div id="indicators"><QualityIndicators /></div>

      <footer className="w-full bg-slate-950 text-slate-400 py-12 text-center text-sm border-t border-slate-900 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent shadow-[0_0_10px_#38bdf8]" />
        <p className="tracking-widest uppercase font-bold text-slate-500 mb-2">Hospital Information System</p>
        <p>&copy; {new Date().getFullYear()} HNB Base Hospital, Pauri Garhwal. Prepared for NABH Assessment.</p>
      </footer>
    </main>
  );
}
