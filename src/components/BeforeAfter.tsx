"use client";

import { useRef, useEffect } from "react";

/* ─── DATA ─── */

const beforeImages1 = [
  "/photos/before/IMG_5071.JPG",
  "/photos/before/IMG_5106.JPG",
  "/photos/before/IMG_5111.JPG",
  "/photos/before/IMG_5220.JPG",
  "/photos/before/IMG_5221.JPG",
  "/photos/before/IMG_5232.JPG",
  "/photos/before/IMG_5233.JPG",
  "/photos/before/IMG_5250.JPG",
  "/photos/before/IMG_5251.JPG",
  "/photos/before/PHOTO-2026-04-19-11-37-04.jpg",
  "/photos/before/PHOTO-2026-04-19-11-43-58.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-04.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-06.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-08.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-09.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-11.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-13.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-14.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-16.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-18.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-20.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-21.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-23.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-25.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-27.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-29.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-31.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-33.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-34.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-36.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-37.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-38.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-40.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-42.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-43.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-45.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-47.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-49.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-51.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-52.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-53.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-58.jpg",
  "/photos/before/PHOTO-2026-04-19-11-44-59.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-01.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-02.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-04.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-05.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-06.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-08.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-13.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-14.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-16.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-17.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-19.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-21.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-23.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-26.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-27.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-29.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-31.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-33.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-34.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-36.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-38.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-39.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-41.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-43.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-44.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-46.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-48.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-49.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-51.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-53.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-54.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-56.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-58.jpg",
  "/photos/before/PHOTO-2026-04-19-11-45-59.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-01.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-03.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-04.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-06.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-08.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-09.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-11.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-12.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-14.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-16.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-17.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-19.jpg"
];

const beforeImages2 = [
  "/photos/before/PHOTO-2026-04-19-11-46-20.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-22.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-24.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-31.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-32.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-34.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-35.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-41.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-47.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-50.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-52.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-54.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-55.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-56.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-58.jpg",
  "/photos/before/PHOTO-2026-04-19-11-46-59.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-05.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-07.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-08.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-10.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-12.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-13.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-15.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-17.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-18.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-20.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-21.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-26.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-29 2.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-29.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-31.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-33.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-34.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-35.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-44.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-48.jpg",
  "/photos/before/PHOTO-2026-04-19-11-47-49.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-19.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-20.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-22.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-24.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-26.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-33.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-34.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-35.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-37.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-39.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-40.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-41.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-42.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-43.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-45.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-46.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-47.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-48.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-50.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-52.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-54.jpg",
  "/photos/before/PHOTO-2026-04-19-11-48-56.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-01.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-03.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-05.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-06.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-08.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-10.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-11.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-12.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-13.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-15.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-16.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-18 2.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-18.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-19.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-21.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-22.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-23.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-24.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-25.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-26.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-28.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-30.jpg",
  "/photos/before/PHOTO-2026-04-19-11-49-31.jpg",
  "/photos/before/PHOTO-2026-04-19-11-52-01.jpg",
  "/photos/before/PHOTO-2026-04-19-11-52-03.jpg",
  "/photos/before/PHOTO-2026-04-19-11-59-50.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-36.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-39.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-41.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-42.jpg"
];

const beforeImages3 = [
  "/photos/before/PHOTO-2026-04-19-12-05-46.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-47 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-47.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-48.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-49.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-51 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-51.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-53.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-57 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-05-57.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-01.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-05 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-05.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-06.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-07.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-08.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-09.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-10.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-11.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-12.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-13.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-14.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-15.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-16.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-17 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-17.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-18.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-19.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-20.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-21.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-22 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-06-22.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-23.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-25.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-26.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-35.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-36.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-37.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-39.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-40.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-41.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-46.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-47.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-48.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-49.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-50 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-50.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-51.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-52.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-53.jpg",
  "/photos/before/PHOTO-2026-04-19-12-07-54.jpg",
  "/photos/before/PHOTO-2026-04-19-12-08-54.jpg",
  "/photos/before/PHOTO-2026-04-19-12-08-55.jpg",
  "/photos/before/PHOTO-2026-04-19-12-08-56.jpg",
  "/photos/before/PHOTO-2026-04-19-12-08-57.jpg",
  "/photos/before/PHOTO-2026-04-19-12-08-58.jpg",
  "/photos/before/PHOTO-2026-04-19-12-08-59.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-00.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-03.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-04.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-06.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-07.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-08.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-09.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-10.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-11.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-12.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-13.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-14.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-15.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-16.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-17.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-18.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-19.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-20.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-21.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-22.jpg",
  "/photos/before/PHOTO-2026-04-19-12-09-23.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-34.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-35 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-35.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-45.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-46 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-46.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-47.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-57.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-58 2.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-58.jpg",
  "/photos/before/PHOTO-2026-04-19-12-10-59.jpg"
];

const afterImages = [
  "/photos/after/IMG_5145.JPG", "/photos/after/IMG_5179.JPG",
  "/photos/after/IMG_5147.JPG", "/photos/after/IMG_5230.JPG",
  "/photos/after/IMG_5181.JPG", "/photos/after/IMG_5142.JPG",
  "/photos/after/IMG_5234.JPG", "/photos/after/IMG_5180.JPG",
  "/photos/after/IMG_5141.JPG", "/photos/after/IMG_5222.JPG",
  "/photos/after/IMG_5140.JPG", "/photos/after/IMG_5252.JPG",
  "/photos/after/IMG_5135.JPG", "/photos/after/IMG_4983.JPG",
  "/photos/after/IMG_5257.JPG", "/photos/after/IMG_5256.JPG",
  "/photos/after/IMG_5108.JPG", "/photos/after/IMG_5134.JPG",
  "/photos/after/IMG_5136.JPG", "/photos/after/IMG_5254.JPG",
  "/photos/after/IMG_5112.JPG", "/photos/after/IMG_5259.JPG",
  "/photos/after/IMG_4972.JPG", "/photos/after/IMG_5113.JPG",
  "/photos/after/IMG_5065.JPG", "/photos/after/IMG_5064.JPG",
  "/photos/after/IMG_5063.JPG", "/photos/after/IMG_5260.JPG",
  "/photos/after/IMG_5176.JPG", "/photos/after/IMG_5175.JPG",
];

const afterGifs = [
  "/photos/after/74f30ef8-0669-4bba-9e3d-2549f7806a0f.gif",
  "/photos/after/72432ecc-dcab-4c13-a600-9b4bdea42bce.gif",
];

/* ─── SCROLLABLE CAROUSEL ─── */

interface CarouselProps {
  images: string[];
  label: string;
  colorScheme: "orange" | "emerald";
  gifs?: string[];
}

function ScrollableCarousel({ images, label, colorScheme, gifs = [] }: CarouselProps) {
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
    const speed = 0.6; // px per frame
    const step = () => {
      if (!isDragging.current && !isHovered.current && el) {
        el.scrollLeft += speed;
        // Seamless loop: when we reach halfway, jump back to start
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

  const isOrange = colorScheme === "orange";
  const bg       = isOrange ? "bg-orange-50/40 border-orange-100"  : "bg-emerald-50/40 border-emerald-100";
  const accent   = isOrange ? "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]" : "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]";
  const title    = isOrange ? "text-orange-900" : "text-emerald-900";
  const fadeFrom = isOrange ? "from-orange-50/80" : "from-emerald-50/80";
  const btnBg    = isOrange ? "bg-orange-100 hover:bg-orange-200 text-orange-700" : "bg-emerald-100 hover:bg-emerald-200 text-emerald-700";
  const imgBorder= isOrange ? "border-orange-100" : "border-emerald-100";

  const allItems: { type: "image"; src: string }[] = [];
  if (gifs.length > 0) {
    let gi = 0;
    images.forEach((img, idx) => {
      allItems.push({ type: "image", src: img });
      if ((idx + 1) % 5 === 0 && gi < gifs.length) {
        allItems.push({ type: "image", src: gifs[gi++] });
      }
    });
  } else {
    images.forEach(img => allItems.push({ type: "image", src: img }));
  }

  return (
    <div className={`w-full p-6 md:p-8 rounded-[2rem] border ${bg} shadow-sm`}>
      <div className="flex items-center justify-between mb-5 px-2 md:px-4">
        <div className="flex items-center gap-3">
          <span className={`w-1.5 h-7 rounded-full ${accent}`} />
          <h3 className={`text-xl md:text-2xl font-bold ${title} tracking-tight`}>{label}</h3>

        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy("left")}
            className={`w-9 h-9 rounded-full ${btnBg} flex items-center justify-center font-bold text-lg transition-all hover:scale-110`}
            aria-label="scroll left"
          >&#8249;</button>
          <button
            onClick={() => scrollBy("right")}
            className={`w-9 h-9 rounded-full ${btnBg} flex items-center justify-center font-bold text-lg transition-all hover:scale-110`}
            aria-label="scroll right"
          >&#8250;</button>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden">
        <div className={`absolute left-0 inset-y-0 w-12 bg-gradient-to-r ${fadeFrom} to-transparent z-10 pointer-events-none`} />
        <div className={`absolute right-0 inset-y-0 w-12 bg-gradient-to-l ${fadeFrom} to-transparent z-10 pointer-events-none`} />
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2 select-none"
          style={{ cursor: "grab", scrollbarWidth: "thin" }}
          onMouseEnter={onMouseEnterScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {/* Duplicate items for seamless infinite loop */}
          {[...allItems, ...allItems].map((item, i) => (
            <div
              key={i}
              className={`shrink-0 w-[260px] md:w-[320px] aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm border ${imgBorder} group`}
            >
              <img
                src={encodeURI(item.src)}
                alt={label}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-[10px] text-slate-400 font-semibold mt-3 tracking-wider">
        ← drag or use arrows to scroll →
      </p>
    </div>
  );
}

/* ─── SECTION ─── */

export default function BeforeAfter() {
  return (
    <section id="beforeafter" className="relative w-full py-20 bg-white overflow-hidden">
      <div className="text-center mb-14 px-6">
        <p className="text-[11px] font-black tracking-[0.25em] text-emerald-500 uppercase mb-3">
          Infrastructure
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-3">
          Transformation Journey
        </h2>
        <div className="h-[3px] w-16 bg-emerald-400 rounded-full mx-auto mb-4" />
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
          Witness our infrastructural growth — bridging legacy structures and world-class care.
        </p>
      </div>

      <div className="flex flex-col gap-10 max-w-[100vw] px-4 md:px-8">
        <ScrollableCarousel images={beforeImages1} label="Before — Part 1" colorScheme="orange" />
        <ScrollableCarousel images={beforeImages2} label="Before — Part 2" colorScheme="orange" />
        <ScrollableCarousel images={beforeImages3} label="Before — Part 3" colorScheme="orange" />
        <ScrollableCarousel images={afterImages}   label="After"           colorScheme="emerald" gifs={afterGifs} />
      </div>
    </section>
  );
}
