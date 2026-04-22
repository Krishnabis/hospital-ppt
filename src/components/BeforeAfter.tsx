"use client";

import { motion } from "framer-motion";

const beforeImages = [
  "/photos/before/IMG_5232.JPG", "/photos/before/IMG_5233.JPG", "/photos/before/IMG_5220.JPG",
  "/photos/before/IMG_5221.JPG", "/photos/before/IMG_5251.JPG", "/photos/before/IMG_5250.JPG",
  "/photos/before/IMG_5106.JPG", "/photos/before/IMG_5111.JPG", "/photos/before/IMG_5071.JPG"
];

const afterMedia = [
  { type: "image", src: "/photos/after/IMG_5145.JPG" },
  { type: "image", src: "/photos/after/IMG_5179.JPG" },
  { type: "video", src: "/photos/after/VIDEO-2026-04-21-19-00-56.MP4" },
  { type: "image", src: "/photos/after/IMG_5147.JPG" },
  { type: "video", src: "/photos/after/74f30ef8-0669-4bba-9e3d-2549f7806a0f.MP4" },
  { type: "image", src: "/photos/after/IMG_5230.JPG" },
  { type: "image", src: "/photos/after/IMG_5181.JPG" },
  { type: "image", src: "/photos/after/IMG_5142.JPG" },
  { type: "image", src: "/photos/after/IMG_5234.JPG" },
  { type: "image", src: "/photos/after/IMG_5180.JPG" },
  { type: "image", src: "/photos/after/IMG_5141.JPG" },
  { type: "image", src: "/photos/after/IMG_5222.JPG" },
  { type: "image", src: "/photos/after/IMG_5140.JPG" },
  { type: "image", src: "/photos/after/IMG_5252.JPG" },
  { type: "image", src: "/photos/after/IMG_5135.JPG" },
  { type: "image", src: "/photos/after/IMG_4983.JPG" },
  { type: "image", src: "/photos/after/IMG_5257.JPG" },
  { type: "image", src: "/photos/after/IMG_5256.JPG" },
  { type: "image", src: "/photos/after/IMG_5108.JPG" },
  { type: "image", src: "/photos/after/IMG_5134.JPG" },
  { type: "image", src: "/photos/after/IMG_5136.JPG" },
  { type: "image", src: "/photos/after/IMG_5254.JPG" },
  { type: "image", src: "/photos/after/IMG_5112.JPG" },
  { type: "video", src: "/photos/after/VIDEO-2026-04-21-17-12-34.MP4" },
  { type: "image", src: "/photos/after/IMG_5259.JPG" },
  { type: "image", src: "/photos/after/IMG_4972.JPG" },
  { type: "image", src: "/photos/after/IMG_5113.JPG" },
  { type: "image", src: "/photos/after/IMG_5065.JPG" },
  { type: "image", src: "/photos/after/IMG_5064.JPG" },
  { type: "video", src: "/photos/after/72432ecc-dcab-4c13-a600-9b4bdea42bce.MP4" },
  { type: "image", src: "/photos/after/IMG_5063.JPG" },
  { type: "image", src: "/photos/after/IMG_5260.JPG" },
  { type: "image", src: "/photos/after/IMG_5176.JPG" },
  { type: "image", src: "/photos/after/IMG_5175.JPG" }
];

const MediaCarousel = ({ items }: { items: { type: string, src: string }[] }) => {
  return (
    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory custom-scrollbar w-full px-6 md:px-12">
      {items.map((item, idx) => (
        <div key={idx} className="shrink-0 snap-center relative w-[280px] md:w-[350px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 bg-slate-100 group">
          {item.type === "image" ? (
            <img src={item.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={`Media ${idx}`} loading="lazy" />
          ) : (
            <video src={item.src} className="w-full h-full object-cover" muted loop playsInline controls preload="metadata" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default function BeforeAfter() {
  return (
    <section id="beforeafter" className="relative min-h-screen w-full py-24 bg-white overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-[100px] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="container mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4 uppercase">
            Transformation Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-sky-500 rounded-full mx-auto shadow-[0_0_15px_rgba(52,211,153,0.5)] mb-6" />
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Witness our infrastructural growth bridging the gap between legacy structures and world-class future care.
          </p>
        </motion.div>

        <div className="w-full flex flex-col gap-16 max-w-[100vw]">
          
          <div className="w-full">
            <h3 className="text-2xl font-black text-slate-800 mb-6 px-6 md:px-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-slate-400 rounded-full" />
              Before (Legacy Infrastructure)
            </h3>
            <MediaCarousel items={beforeImages.map(src => ({ type: "image", src }))} />
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-black text-slate-800 mb-6 px-6 md:px-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-sky-500 rounded-full" />
              After (Modernized Facilities)
            </h3>
            <MediaCarousel items={afterMedia} />
          </div>

        </div>

      </div>
    </section>
  );
}
