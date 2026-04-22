"use client";

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

function Carousel({ items, label }: { items: MediaItem[]; label: string }) {
  const dup = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="w-full">
      {/* Sub-heading */}
      <div className="flex items-center gap-3 mb-5 px-4 md:px-10">
        <span className="w-1.5 h-7 rounded-full bg-sky-400" />
        <h3 className="text-lg md:text-xl font-bold text-slate-700 tracking-tight">{label}</h3>
      </div>

      {/* Track */}
      <div className="overflow-hidden relative">
        {/* Fades */}
        <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee">
          {dup.map((m, i) => (
            <div
              key={i}
              className="shrink-0 w-[260px] md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-slate-100 group"
            >
              {m.type === "image" ? (
                <img
                  src={encodeURI(m.src)}
                  alt={label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              ) : (
                <video
                  src={encodeURI(m.src)}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  controls
                  preload="none"
                />
              )}
            </div>
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
  return arr.map((s) => ({ type: "image", src: s }));
}
function mixMedia(images: string[], videos: string[]): MediaItem[] {
  const imgs = imagesToMedia(images);
  const vids = videosToMedia(videos);
  // interleave: 3 images then 1 video, repeat
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
      className="relative w-full py-20 bg-slate-50 overflow-hidden"
    >
      {/* Section Header */}
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

      {/* Carousel Stack */}
      <div className="flex flex-col gap-12 max-w-[100vw]">
        <Carousel items={mixMedia(generalImages, generalVideos)} label="General Training Sessions" />
        <Carousel items={videosToMedia(cprVideos)} label="CPR Mockdrills" />
        <Carousel items={imagesToMedia(vaccinationImages)} label="Vaccination Drives" />
        <Carousel items={videosToMedia(sharedVideos)} label="Training Videos Shared" />
      </div>
    </section>
  );
}
