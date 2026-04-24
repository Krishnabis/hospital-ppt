"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ThankYou() {
  return (
    <section id="thanks" className="relative min-h-screen w-full flex items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] border border-white/10 group"
        >
          {/* Background Image */}
          <img 
            src="/dhari.jpeg" 
            alt="Dhari Devi" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" 
          />
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />
          
          {/* Content Over the Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
            >
               <Heart className="text-rose-500 fill-rose-500 animate-bounce" size={48} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none drop-shadow-2xl"
            >
              Thank <span className="text-sky-400">You</span>
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "12rem" }}
              transition={{ delay: 1, duration: 1 }}
              className="h-1.5 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)] mt-8" 
            />
          </div>
        </motion.div>

        {/* Closing Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 text-slate-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm"
        >
          Dedicated to Excellence in Healthcare
        </motion.p>

      </div>
    </section>
  );
}
