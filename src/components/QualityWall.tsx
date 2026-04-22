"use client";

/* ──────────────── DATA ──────────────── */

const qualityWallImages = [
  "/photos/quality wall/IMG_5187.JPG",
  "/photos/quality wall/IMG_5186.JPG",
  "/photos/quality wall/IMG_5184.JPG",
  "/photos/quality wall/IMG_5185.JPG",
  "/photos/quality wall/IMG_5182.JPG",
  "/photos/quality wall/IMG_5169.JPG",
  "/photos/quality wall/IMG_5183.JPG",
];

/* ──────────────── SECTION ──────────────── */

export default function QualityWall() {
  const dup = [...qualityWallImages, ...qualityWallImages];

  return (
    <section id="qualitywall" className="relative w-full py-20 bg-slate-50 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-14 px-6">
        <p className="text-[11px] font-black tracking-[0.25em] text-amber-500 uppercase mb-3">
          Excellence
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-3">
          Quality Wall
        </h2>
        <div className="h-[3px] w-16 bg-amber-400 rounded-full mx-auto mb-4" />
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
          A testament to our commitment to continuous improvement and excellence in healthcare.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative max-w-[100vw]">
        <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee">
          {dup.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-[280px] md:w-[360px] aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-slate-100 group"
            >
              <img
                src={encodeURI(src)}
                alt="Quality Wall"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
