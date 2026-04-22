"use client";

/* ──────────────── DATA ──────────────── */

const beforeImages = [
  "/photos/before/IMG_5232.JPG", "/photos/before/IMG_5233.JPG",
  "/photos/before/IMG_5220.JPG", "/photos/before/IMG_5221.JPG",
  "/photos/before/IMG_5251.JPG", "/photos/before/IMG_5250.JPG",
  "/photos/before/IMG_5106.JPG", "/photos/before/IMG_5111.JPG",
  "/photos/before/IMG_5071.JPG",
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

const afterVideos = [
  "/photos/after/74f30ef8-0669-4bba-9e3d-2549f7806a0f.gif",
  "/photos/after/72432ecc-dcab-4c13-a600-9b4bdea42bce.gif",
];

/* ──────────────── CAROUSEL ──────────────── */

type MediaItem = { type: "image" | "video"; src: string };

function ImageCarousel({ images, label }: { images: string[]; label: string }) {
  const dup = [...images, ...images];
  const duration = `${dup.length * 4}s`;
  return (
    <div className="w-full p-6 md:p-8 rounded-[2rem] border bg-orange-50/40 border-orange-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5 px-2 md:px-4">
        <span className="w-1.5 h-7 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
        <h3 className="text-xl md:text-2xl font-bold text-orange-900 tracking-tight">{label}</h3>
      </div>
      <div className="overflow-hidden relative rounded-2xl">
        <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-orange-50/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-orange-50/40 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee" style={{ animationDuration: duration }}>
          {dup.map((src, i) => (
            <div key={i} className="shrink-0 w-[260px] md:w-[320px] aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm border border-orange-100 group">
              <img src={encodeURI(src)} alt={label} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MixedCarousel({ images, videos, label }: { images: string[]; videos: string[]; label: string }) {
  const items: MediaItem[] = [];
  let ii = 0, vi = 0;
  while (ii < images.length || vi < videos.length) {
    for (let k = 0; k < 5 && ii < images.length; k++) items.push({ type: "image", src: images[ii++] });
    if (vi < videos.length) items.push({ type: "image", src: videos[vi++] });
  }
  const dup = [...items, ...items];
  const duration = `${dup.length * 4}s`;

  return (
    <div className="w-full p-6 md:p-8 rounded-[2rem] border bg-emerald-50/40 border-emerald-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5 px-2 md:px-4">
        <span className="w-1.5 h-7 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
        <h3 className="text-xl md:text-2xl font-bold text-emerald-900 tracking-tight">{label}</h3>
      </div>
      <div className="overflow-hidden relative rounded-2xl">
        <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-emerald-50/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-emerald-50/40 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee" style={{ animationDuration: duration }}>
          {dup.map((m, i) => (
            <div key={i} className="shrink-0 w-[260px] md:w-[320px] aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm border border-emerald-100 group">
              {m.type === "image" ? (
                <img src={encodeURI(m.src)} alt={label} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              ) : (
                <video src={encodeURI(m.src)} className="w-full h-full object-cover" muted loop playsInline controls preload="none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────── SECTION ──────────────── */

export default function BeforeAfter() {
  return (
    <section id="beforeafter" className="relative w-full py-20 bg-white overflow-hidden">
      {/* Section Header */}
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

      {/* Carousel Stack */}
      <div className="flex flex-col gap-12 max-w-[100vw] px-4 md:px-8">
        <ImageCarousel images={beforeImages} label="Before" />
        <MixedCarousel images={afterImages} videos={afterVideos} label="After" />
      </div>
    </section>
  );
}
