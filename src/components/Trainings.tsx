"use client";

import { useRef, useEffect } from "react";

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

function ScrollableCarousel({ items, label }: { items: MediaItem[]; label: string }) {
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

  const allItems = [...items, ...items];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5 px-4 md:px-10">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
          <h3 className="text-xl md:text-2xl font-bold text-slate-700 tracking-tight">{label}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy("left")}
            className="w-9 h-9 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-700 flex items-center justify-center font-bold text-lg transition-all hover:scale-110"
          >&#8249;</button>
          <button
            onClick={() => scrollBy("right")}
            className="w-9 h-9 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-700 flex items-center justify-center font-bold text-lg transition-all hover:scale-110"
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
          {allItems.map((m, i) => (
            <div
              key={i}
              className="shrink-0 w-[260px] md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 group"
            >
              <img
                src={encodeURI(m.src)}
                alt={label}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-[10px] text-slate-400 font-semibold mt-1 tracking-wider">
        ← drag or use arrows to scroll →
      </p>
    </div>
  );
}

/* helpers */
function imagesToMedia(arr: string[]): MediaItem[] {
  return arr.map((s) => ({ type: "image", src: s }));
}
function videosToMedia(arr: string[]): MediaItem[] {
  return arr.map((s) => ({ type: "image", src: s }));
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
    <section id="trainings" className="relative w-full py-20 bg-slate-50 overflow-hidden">
      <div className="text-center mb-14 px-6">
        <p className="text-[11px] font-black tracking-[0.25em] text-sky-500 uppercase mb-3">
          Capacity Building
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-3">
          Training &amp; Preparedness
        </h2>
        <div className="h-[3px] w-16 bg-sky-400 rounded-full mx-auto mb-4" />
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
          Continuous learning, emergency mock drills, and vaccination drives
          that keep our team prepared and our community protected.
        </p>
      </div>

      <div className="flex flex-col gap-14 max-w-[100vw]">
        <ScrollableCarousel items={mixMedia(generalImages, generalVideos)} label="General Training Sessions" />
        <ScrollableCarousel items={videosToMedia(cprVideos)} label="CPR Mockdrills" />
        <ScrollableCarousel items={imagesToMedia(vaccinationImages)} label="Vaccination Drives" />
        <ScrollableCarousel items={videosToMedia(sharedVideos)} label="Training Videos Shared" />
      </div>
    </section>
  );
}
