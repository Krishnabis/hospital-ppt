"use client";

import { motion } from "framer-motion";

const qualityWallImages = [
  "/photos/quality wall/IMG_5187.JPG",
  "/photos/quality wall/IMG_5186.JPG",
  "/photos/quality wall/IMG_5184.JPG",
  "/photos/quality wall/IMG_5185.JPG",
  "/photos/quality wall/IMG_5182.JPG",
  "/photos/quality wall/IMG_5169.JPG",
  "/photos/quality wall/IMG_5183.JPG"
];

const MediaCarousel = ({ items }: { items: string[] }) => {
  return (
    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory custom-scrollbar w-full px-6 md:px-12">
      {items.map((src, idx) => (
        <div key={idx} className="shrink-0 snap-center relative w-[280px] md:w-[350px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 bg-slate-100 group">
          <img src={src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={`Quality Wall ${idx}`} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default function QualityWall() {
  return (
    <section id="qualitywall" className="relative min-h-[70vh] w-full py-24 bg-slate-900 text-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="container mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 uppercase">
            Quality Wall
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto shadow-[0_0_15px_rgba(52,211,153,0.5)] mb-6" />
          <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto">
            A testament to our commitment to continuous improvement and excellence.
          </p>
        </motion.div>

        <div className="w-full flex flex-col gap-16 max-w-[100vw]">
          <div className="w-full">
            <MediaCarousel items={qualityWallImages} />
          </div>
        </div>

      </div>
    </section>
  );
}
