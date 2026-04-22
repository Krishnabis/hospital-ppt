"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 px-6 xl:px-20 gap-8 pt-20 pb-24">
      {/* Hospital Image Container */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] z-10 shrink-0 mt-8 md:mt-0"
      >
        <Image
          src="/hospital.png"
          alt="HNB Base Hospital"
          fill
          className="object-contain drop-shadow-2xl z-10"
          priority
        />

        {/* Floating Chardham Images */}
        {/* Top Left: Yamunotri */}
        <div
          className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(56,189,248,0.4)] z-20 animate-float"
        >
          <Image src="/Yamnotri.jpeg" alt="Yamnotri" fill className="object-cover" />
        </div>

        {/* Top Right: Gangotri */}
        <div
          className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(56,189,248,0.4)] z-20 animate-float" style={{ animationDelay: "0.5s" }}
        >
          <Image src="/gangotri.jpeg" alt="Gangotri" fill className="object-cover" />
        </div>

        {/* Bottom Left: Kedarnath */}
        <div
          className="absolute -bottom-2 -left-2 md:-bottom-0 md:-left-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(56,189,248,0.4)] z-20 animate-float" style={{ animationDelay: "1s" }}
        >
          <Image src="/kedarnath.jpeg" alt="Kedarnath" fill className="object-cover" />
        </div>

        {/* Bottom Right: Badrinath */}
        <div
          className="absolute -bottom-2 -right-2 md:-bottom-0 md:-right-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(56,189,248,0.4)] z-20 animate-float" style={{ animationDelay: "1.5s" }}
        >
          <Image src="/badrinath.jpeg" alt="Badrinath" fill className="object-cover" />
        </div>
      </motion.div>

      {/* Cinematic Text Overlay */}
      <div className="z-10 text-center md:text-left max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="glass-neon px-8 md:px-12 py-10 md:py-14 rounded-[2rem] inline-block shadow-2xl bg-white/70 backdrop-blur-3xl border border-white/50"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-6 drop-shadow-sm leading-tight"
          >
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">NABH Assessment</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            We warmly welcome the Principal Assessor and Co-Assessors for the onsite inspection at <strong className="text-slate-800">Hemwati Nandan Bahuguna Base Hospital, Srinagar (Pauri Garhwal)</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 flex justify-center md:justify-start"
          >
            <span className="inline-block bg-sky-100 border border-sky-200 text-sky-800 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-sm">
              Version 1.0 (Draft Version)
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-80 flex flex-col items-center">
        <span className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-3 drop-shadow-sm">Scroll to Explore</span>
        <div className="w-[2px] h-12 bg-sky-200/50 relative overflow-hidden">
          <div className="absolute w-full h-1/2 bg-sky-400 animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
