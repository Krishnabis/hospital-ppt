"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ThankYou() {
  return (
    <section id="thanks" className="relative min-h-screen w-full flex items-center justify-center bg-slate-900 overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl mb-8 mx-auto"
            >
              <img src="/dhari.jpeg" alt="Dhari Devi" className="w-full h-full object-cover" />
            </motion.div>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 absolute -bottom-4 -right-4 shadow-2xl z-20">
               <Heart className="text-rose-500 fill-rose-500 animate-bounce" size={40} />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase mb-2">
            Thank <span className="text-blue-400">You</span>
          </h1>
          
          <div className="h-2 w-48 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] mt-6" />
        </motion.div>

      </div>
    </section>
  );
}
