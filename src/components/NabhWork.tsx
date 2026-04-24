"use client";

import { useRef, useEffect } from "react";

/* ──────────────── DATA ──────────────── */

const nabhWorkImages = [
  "/photos/quality/PHOTO-2026-04-24-08-00-02.jpg",
  "/photos/quality/PHOTO-2026-04-24-08-00-02 2.jpg",
  "/photos/quality/PHOTO-2026-04-24-08-00-02 3.jpg",
  "/photos/quality/PHOTO-2026-04-24-08-00-02 4.jpg",
  "/photos/quality/PHOTO-2026-04-24-08-00-04.jpg",
  "/photos/quality/PHOTO-2026-04-24-08-00-04 2.jpg",
  "/photos/quality/PHOTO-2026-04-24-08-00-04 3.jpg",
];

/* ──────────────── CAROUSEL ──────────────── */

function ScrollableCarousel({ images, label }: { images: string[]; label: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);
  const rafId = useRef<number>(0);

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const speed = 0.5; // px per frame
    const step = () => {
      if (!isDragging.current && !isHovered.current && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafId.current = requestAnimationFrame(step);
    };
    rafId.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };
  const onMouseLeave = () => {
    isDragging.current = false;
    isHovered.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseEnterScroll = () => { isHovered.current = true; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const scrollBy = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -600 : 600, behavior: "smooth" });
  };

  const allItems = [...images, ...images];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5 px-4 md:px-10">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          <h3 className="text-xl md:text-2xl font-bold text-slate-700 tracking-tight">{label}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy("left")}
            className="w-9 h-9 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-lg transition-all hover:scale-110"
          >&#8249;</button>
          <button
            onClick={() => scrollBy("right")}
            className="w-9 h-9 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-lg transition-all hover:scale-110"
          >&#8250;</button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 select-none scrollbar-hide"
          style={{ cursor: "grab", scrollbarWidth: "none" }}
          onMouseEnter={onMouseEnterScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {allItems.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-[280px] md:w-[360px] aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 group"
            >
              <img
                src={encodeURI(src)}
                alt={label}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────── SECTION ──────────────── */

export default function NabhWork() {
  return (
    <section id="nabhwork" className="relative w-full py-20 bg-slate-50 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-14 px-6">
        <p className="text-[11px] font-black tracking-[0.25em] text-emerald-500 uppercase mb-3">
          Compliance
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-3">
          NABH Work
        </h2>
        <div className="h-[3px] w-16 bg-emerald-400 rounded-full mx-auto mb-4" />
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
          Documentation, quality check, and infrastructure upgrades as per NABH standards.
        </p>
      </div>

      <div className="max-w-[100vw]">
        <ScrollableCarousel images={nabhWorkImages} label="NABH Implementation Photos" />
      </div>
    </section>
  );
}
