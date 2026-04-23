"use client";

import { motion } from "framer-motion";
import { Heart, Mail, Globe, MapPin, Phone } from "lucide-react";

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
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 shadow-2xl">
             <Heart className="text-rose-500 fill-rose-500 animate-bounce" size={48} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 uppercase">
            Thank <span className="text-blue-400">You</span>
          </h1>
          
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-8 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
          
          <p className="text-2xl md:text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Towards Excellence in Healthcare and <br />
            <span className="font-bold text-white">NABH Compliance</span>
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20"
        >
          <ContactItem icon={MapPin} label="Address" value="Pauri Garhwal, Uttarakhand" />
          <ContactItem icon={Phone} label="Contact" value="+91-1368-222213" />
          <ContactItem icon={Mail} label="Email" value="hnbbasepauri@gmail.com" />
          <ContactItem icon={Globe} label="Website" value="hnbbasehospital.com" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 text-slate-500 font-black uppercase tracking-[0.5em] text-xs"
        >
          Dedicated to Serving Humanity
        </motion.p>

      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
        <Icon size={20} />
      </div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-white font-bold text-sm">{value}</p>
    </div>
  );
}
