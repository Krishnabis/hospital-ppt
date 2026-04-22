"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 px-6 xl:px-20 gap-8 pt-20 pb-24">
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
        <motion.div 
          className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(56,189,248,0.4)] z-20"
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Image src="/Yamnotri.jpeg" alt="Yamnotri" fill className="object-cover" />
        </motion.div>

        {/* Top Right: Gangotri */}
        <motion.div 
          className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(56,189,248,0.4)] z-20"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
        >
          <Image src="/gangotri.jpeg" alt="Gangotri" fill className="object-cover" />
        </motion.div>

        {/* Bottom Left: Kedarnath */}
        <motion.div 
          className="absolute -bottom-2 -left-2 md:-bottom-0 md:-left-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(56,189,248,0.4)] z-20"
          animate={{ y: [0, -10, 0], rotate: [0, 8, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1 }}
        >
          <Image src="/kedarnath.jpeg" alt="Kedarnath" fill className="object-cover" />
        </motion.div>

        {/* Bottom Right: Badrinath */}
        <motion.div 
          className="absolute -bottom-2 -right-2 md:-bottom-0 md:-right-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(56,189,248,0.4)] z-20"
          animate={{ y: [0, -10, 0], rotate: [0, -8, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.5 }}
        >
          <Image src="/badrinath.jpeg" alt="Badrinath" fill className="object-cover" />
        </motion.div>
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
            We warmly welcome the Principal Assessors and Co-Assessors for the onsite inspection at <strong className="text-slate-800">Hemwati Nandan Bahuguna Base Hospital, Srinagar (Pauri Garhwal)</strong>.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator overlay */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center opacity-80"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-3 drop-shadow-sm">
            Scroll to Explore
          </span>
          <div className="w-[2px] h-12 bg-sky-200/50 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute w-full h-1/2 bg-sky-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
