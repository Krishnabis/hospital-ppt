"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const trainingImages = [
  "/photos/training/Image/IMG_5178.JPG", "/photos/training/Image/IMG_5227.JPG", 
  "/photos/training/Image/IMG_5231.JPG", "/photos/training/Image/IMG_5224.JPG", 
  "/photos/training/Image/IMG_5218.JPG", "/photos/training/Image/IMG_5223.JPG", 
  "/photos/training/Image/IMG_5092.JPG", "/photos/training/Image/IMG_5069.JPG", 
  "/photos/training/Image/IMG_5068.JPG", "/photos/training/Image/IMG_5066.JPG", 
  "/photos/training/Image/IMG_5070.JPG", "/photos/training/Image/IMG_5262.JPG", 
  "/photos/training/Image/IMG_5207.JPG", "/photos/training/Image/IMG_5213.JPG", 
  "/photos/training/Image/IMG_5206.JPG", "/photos/training/Image/IMG_5170.JPG", 
  "/photos/training/Image/IMG_5158.JPG", "/photos/training/Image/IMG_5210.JPG", 
  "/photos/training/Image/IMG_5205.JPG", "/photos/training/Image/IMG_5177.JPG", 
  "/photos/training/Image/IMG_5228.JPG", "/photos/training/Image/IMG_5174.JPG", 
  "/photos/training/Image/IMG_5217.JPG"
];

const cprVideos = [
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-01.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-00.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-02.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-18-59-25.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-01 2.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-01 3.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-18-59-26.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-18-59-27.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-02 3.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-02 2.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-00 2.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-00 3.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-18-59-26 2.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-18-59-25 2.MP4",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-00-59.MP4"
];

const fireVideos = [
  "/photos/training/video/fire mockdrill/VIDEO-2026-04-21-19-00-51.MP4",
  "/photos/training/video/fire mockdrill/VIDEO-2026-04-21-19-00-28 2.MP4",
  "/photos/training/video/fire mockdrill/VIDEO-2026-04-21-19-00-38.MP4"
];

const sharedVideos = [
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-43.MP4",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-27 2.MP4",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-36.MP4",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-35.MP4",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-43 2.MP4",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-27.MP4",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-50 2.MP4"
];

const MediaCarousel = ({ items, type }: { items: string[], type: "image" | "video" }) => {
  // Duplicate items for infinite scroll
  const duplicatedItems = [...items, ...items];

  return (
    <div className="flex overflow-hidden w-full px-0 relative">
      {/* Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      
      <div className="flex gap-6 animate-marquee w-max">
        {duplicatedItems.map((src, idx) => (
          <div key={idx} className="shrink-0 relative w-[280px] md:w-[350px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 bg-slate-100 group">
            {type === "image" ? (
              <img src={encodeURI(src)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={`Training ${idx}`} loading="lazy" />
            ) : (
              <video src={encodeURI(src)} className="w-full h-full object-cover" muted loop playsInline controls preload="metadata" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Trainings() {
  return (
    <section id="trainings" className="relative min-h-screen w-full py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100 rounded-full blur-[100px] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="container mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4 uppercase">
            Training & Mock Drills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto shadow-[0_0_15px_rgba(56,189,248,0.5)] mb-6" />
          <p className="text-xl text-slate-600 font-medium">
            Continuous learning and emergency preparedness
          </p>
        </motion.div>

        <div className="w-full flex flex-col gap-16 max-w-[100vw]">
          
          <div className="w-full">
            <h3 className="text-2xl font-black text-slate-800 mb-6 px-6 md:px-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-sky-500 rounded-full" />
              General Training Sessions
            </h3>
            <MediaCarousel items={trainingImages} type="image" />
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-black text-slate-800 mb-6 px-6 md:px-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-rose-500 rounded-full" />
              CPR Mockdrills
            </h3>
            <MediaCarousel items={cprVideos} type="video" />
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-black text-slate-800 mb-6 px-6 md:px-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-amber-500 rounded-full" />
              Fire Mockdrills
            </h3>
            <MediaCarousel items={fireVideos} type="video" />
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-black text-slate-800 mb-6 px-6 md:px-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-indigo-500 rounded-full" />
              Training Videos Shared
            </h3>
            <MediaCarousel items={sharedVideos} type="video" />
          </div>

        </div>
      </div>
    </section>
  );
}
