"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Set initial width
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const resizeObserver = new ResizeObserver(entries => {
        setContainerWidth(entries[0].contentRect.width);
      });
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const x = useMotionValue(0);
  
  // Set default thumb position to 50% once width is calculated
  useEffect(() => {
    if (containerWidth > 0) {
      x.set(containerWidth / 2);
    }
  }, [containerWidth, x]);

  // Transform width of the 'after' image based on slider position
  const clipWidth = useTransform(x, (val) => `${val}px`);

  return (
    <section id="beforeafter" className="relative min-h-screen w-full flex items-center justify-center py-24 bg-slate-100 overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Transformation Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-sky-500 rounded-full mx-auto" />
          <p className="mt-6 text-slate-600 max-w-2xl text-lg">
            Witness our infrastructural growth and facility modernization bridging the gap between legacy structures and world-class future care.
          </p>
        </motion.div>

        {/* Drag Slider Container */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] bg-slate-300 select-none cursor-ew-resize"
        >
          {/* Before Image (Bottom Layer) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop&grayscale=true" 
              alt="Before" 
              className="w-full h-full object-cover grayscale opacity-80"
              draggable="false"
            />
            <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white font-bold tracking-wider text-sm">
              BEFORE
            </div>
          </div>

          {/* After Image (Top Layer clipped) */}
          <motion.div 
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: clipWidth }}
          >
            <div className="relative h-full" style={{ width: containerWidth }}>
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop" 
                alt="After" 
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-sky-500/80 backdrop-blur-md rounded-full text-white font-bold tracking-wider text-sm shadow-lg">
                CURRENT
              </div>
            </div>
          </motion.div>

          {/* Draggable Slider Thumb */}
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-grab active:cursor-grabbing hover:bg-sky-400 transition-colors z-20 flex items-center justify-center -ml-[2px]"
            style={{ x }}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0}
            dragMomentum={false}
          >
            <div className="w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-slate-100 flex items-center justify-center text-slate-600 hover:text-sky-500 transition-colors transform hover:scale-110 active:scale-95">
              <MoveHorizontal size={24} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
