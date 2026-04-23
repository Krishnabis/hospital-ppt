"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ──────────────── DATA ──────────────── */

const generalImages = [
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
  "/photos/training/Image/IMG_5217.JPG",
];

const generalVideos = [
  "/photos/training/video/VIDEO-2026-04-21-19-00-30.gif",
  "/photos/training/video/VIDEO-2026-04-21-19-00-31.gif",
  "/photos/training/video/VIDEO-2026-04-21-19-00-31 2.gif",
  "/photos/training/video/VIDEO-2026-04-21-19-00-32 2.gif",
  "/photos/training/video/VIDEO-2026-04-21-19-00-33 2.gif",
  "/photos/training/video/VIDEO-2026-04-21-19-00-47.gif",
  "/photos/training/video/VIDEO-2026-04-21-19-00-49.gif",
  "/photos/training/video/VIDEO-2026-04-21-19-00-50.gif",
  "/photos/training/video/VIDEO-2026-04-21-19-00-51.gif",
  "/photos/training/video/VIDEO-2026-04-21-19-01-07.gif",
];

const cprVideos = [
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-01.gif",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-02.gif",
  "/photos/training/video/CPR/VIDEO-2026-04-21-18-59-25.gif",
  "/photos/training/video/CPR/VIDEO-2026-04-21-18-59-26.gif",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-02 3.gif",
  "/photos/training/video/CPR/VIDEO-2026-04-21-19-01-00 2.gif",
  "/photos/training/video/CPR/VIDEO-2026-04-21-18-59-26 2.gif",
  "/photos/training/video/CPR/VIDEO-2026-04-21-18-59-25 2.gif",
];

const vaccinationImages = [
  "/photos/vaccination/IMG_5150.JPG", "/photos/vaccination/IMG_5151.JPG",
  "/photos/vaccination/IMG_5152.JPG", "/photos/vaccination/IMG_5153.JPG",
  "/photos/vaccination/IMG_5154.JPG", "/photos/vaccination/IMG_5155.JPG",
  "/photos/vaccination/IMG_5156.JPG", "/photos/vaccination/IMG_5157.JPG",
  "/photos/vaccination/IMG_5159.JPG",
];

const sharedVideos = [
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-43.gif",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-27 2.gif",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-36.gif",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-35.gif",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-43 2.gif",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-27.gif",
  "/photos/training/video/personal video trainings/VIDEO-2026-04-21-19-00-50 2.gif",
];

/* ──────────────── CAROUSEL ──────────────── */

type MediaItem = { type: "image" | "video"; src: string };

function SlidingCarousel({ items, label }: { items: MediaItem[]; label: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const rafId = useRef<number>(0);

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const speed = 0.6; // px per frame - consistent with BeforeAfter
    const step = () => {
      if (!isDragging.current && !isHovered.current && el) {
        el.scrollLeft += speed;
        // Seamless loop
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafId.current = requestAnimationFrame(step);
    };
    rafId.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Double items for seamless loop
  const loopItems = [...items, ...items];

  return (
    <div className="w-full relative group/carousel">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4 md:px-10">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.4)]" />
          <h3 className="text-xl font-bold text-slate-800 tracking-tight">{label}</h3>
        </div>
        
        {/* Controls */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              canScrollLeft ? "bg-white shadow-md text-sky-500 hover:scale-110" : "bg-slate-100 text-slate-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              canScrollRight ? "bg-white shadow-md text-sky-500 hover:scale-110" : "bg-slate-100 text-slate-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Track */}
      <div className="relative">
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          onMouseEnter={() => { isHovered.current = true; }}
          onMouseLeave={() => { isHovered.current = false; }}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-10 pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {loopItems.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % items.length) * 0.05 }}
              className="shrink-0 w-[280px] md:w-[380px] aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100/50 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {m.type === "image" ? (
                <img
                  src={encodeURI(m.src)}
                  alt={label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <video
                  src={encodeURI(m.src)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              )}

              {/* Tag */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-black text-white uppercase tracking-widest shadow-sm">
                  {m.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* helpers */
function imagesToMedia(arr: string[]): MediaItem[] {
  return arr.map((s) => ({ type: "image", src: s }));
}
function videosToMedia(arr: string[]): MediaItem[] {
  return arr.map((s) => ({ type: "video", src: s }));
}
function mixMedia(images: string[], videos: string[]): MediaItem[] {
  const imgs = imagesToMedia(images);
  const vids = videosToMedia(videos);
  const out: MediaItem[] = [];
  let ii = 0, vi = 0;
  while (ii < imgs.length || vi < vids.length) {
    for (let k = 0; k < 3 && ii < imgs.length; k++) out.push(imgs[ii++]);
    if (vi < vids.length) out.push(vids[vi++]);
  }
  return out;
}

/* ──────────────── SECTION ──────────────── */

export default function Trainings() {
  return (
    <section
      id="trainings"
      className="relative w-full py-24 bg-white overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-[100px] opacity-50 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-50 -ml-48 -mb-48" />

      {/* Section Header */}
      <div className="text-center mb-20 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-black tracking-[0.3em] text-sky-500 uppercase mb-4 shadow-sm inline-block px-4 py-1.5 rounded-full bg-sky-50">
            Capacity Building
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-6">
            Training &amp; Preparedness
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto mb-8 shadow-lg" />
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
            Continuous learning, emergency mock drills, and vaccination drives
            that keep our team prepared and our community protected.
          </p>
        </motion.div>
      </div>

      {/* Carousel Stack */}
      <div className="flex flex-col gap-20 max-w-[100vw] relative z-10">
        <SlidingCarousel items={mixMedia(generalImages, generalVideos)} label="General Training Sessions" />
        <SlidingCarousel items={videosToMedia(cprVideos)} label="CPR Mockdrills" />
        <SlidingCarousel items={imagesToMedia(vaccinationImages)} label="Vaccination Drives" />
        <SlidingCarousel items={videosToMedia(sharedVideos)} label="Training Videos Shared" />
      </div>
    </section>
  );
}
