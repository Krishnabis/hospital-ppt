"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const photos = [
  "1551076805-e16760c06477", "1576091160550-2173ff3e1ed0", "1584515933618-2e0fce5e82ad", "1516549655169-df83a0774514", "1559839734-2b71ea197ec2",
  "1581594693702-fbdc51b2763b", "1538108149393-cebb47ac0001", "1579684385127-1ef15d508118", "1551076805-e16760c06477", "1584515933618-2e0fce5e82ad",
  "1576091160550-2173ff3e1ed0", "1516549655169-df83a0774514", "1579684385127-1ef15d508118", "1538108149393-cebb47ac0001", "1559839734-2b71ea197ec2"
].map(id => `https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop`);

export default function Trainings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Tsunami Parallax speeds
  const yFastUp = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const ySlowDown = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const yMedUp = useTransform(scrollYProgress, [0, 1], [100, -400]);
  const yFastDown = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  // Split photos into 4 columns
  const col1 = photos.slice(0, 4);
  const col2 = photos.slice(4, 8);
  const col3 = photos.slice(8, 12);
  const col4 = photos.slice(11, 15);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 border-y-8 border-sky-500/20">
      
      {/* Overlay to fade top and bottom edges smoothly */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-slate-900 via-transparent to-slate-900 opacity-60" />

      {/* Floating Center Badge */}
      <motion.div 
        className="absolute z-30 pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [200, -200]) }}
      >
        <div className="glass-neon p-12 rounded-[3rem] text-center bg-slate-900/40 backdrop-blur-3xl border-sky-400/50 shadow-[0_0_50px_rgba(56,189,248,0.2)]">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-4 tracking-tighter drop-shadow-lg">
            Continuous <br /> Learning
          </h2>
          <p className="text-sky-400 font-bold tracking-[0.3em] uppercase text-sm drop-shadow-md">
            World Class Training Environment
          </p>
        </div>
      </motion.div>

      {/* Columns wrapper */}
      <div className="absolute inset-0 z-10 w-full max-w-[1400px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-40">
        
        <motion.div style={{ y: yFastUp }} className="flex flex-col gap-4 md:gap-8 pt-40">
          {col1.map((src, i) => (
            <div key={i} className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img src={src} className="object-cover w-full h-full" alt="Training" loading="lazy" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: ySlowDown }} className="flex flex-col gap-4 md:gap-8 pt-10">
          {col2.map((src, i) => (
            <div key={i} className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img src={src} className="object-cover w-full h-full" alt="Training" loading="lazy" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: yMedUp }} className="hidden md:flex flex-col gap-8 pt-80">
          {col3.map((src, i) => (
            <div key={i} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src={src} className="object-cover w-full h-full" alt="Training" loading="lazy" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ y: yFastDown }} className="hidden md:flex flex-col gap-8 pt-20">
          {col4.map((src, i) => (
            <div key={i} className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <img src={src} className="object-cover w-full h-full" alt="Training" loading="lazy" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
