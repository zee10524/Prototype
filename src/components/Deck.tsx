import { useEffect, useState, useCallback } from "react";
import { SlideStage } from "./SlideStage";
import { TubeLightReveal } from "./TubeLightReveal";
import { slides, type SlideDef } from "@/slides";
import { ChevronLeft, ChevronRight, Maximize2, Grid3x3, X } from "lucide-react";

export function Deck() {
  const [i, setI] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [showChrome, setShowChrome] = useState(true);
  const total = slides.length;

  const go = useCallback((n: number) => setI(Math.max(0, Math.min(total - 1, n))), [total]);
  const next = useCallback(() => go(i + 1), [go, i]);
  const prev = useCallback(() => go(i - 1), [go, i]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(total - 1);
      else if (e.key === "g" || e.key === "G") setShowGrid((s) => !s);
      else if (e.key === "f" || e.key === "F") document.documentElement.requestFullscreen?.();
      else if (e.key === "Escape") setShowGrid(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, total]);

  // Auto-hide chrome
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const reset = () => {
      setShowChrome(true);
      clearTimeout(t);
      t = setTimeout(() => setShowChrome(false), 2400);
    };
    reset();
    window.addEventListener("mousemove", reset);
    return () => { window.removeEventListener("mousemove", reset); clearTimeout(t); };
  }, []);

  const Slide = slides[i].component;
  const tone = slides[i].tone ?? "light";

  return (
    <div className="fixed inset-0 bg-black">
      <SlideStage>
        <TubeLightReveal ignitionKey={i} tone={tone} tubeY={slides[i].tubeY ?? 80}>
          <Slide />
        </TubeLightReveal>
      </SlideStage>

      {/* Chrome */}
      <div
        className={`fixed top-0 left-0 right-0 px-6 py-4 flex items-center justify-between z-50 transition-opacity duration-500 ${
          showChrome ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)" }}
      >
        <div className="text-white/70 text-xs tracking-[0.3em] uppercase font-medium">
          Modular Lighting · Company Profile 2026
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowGrid(true)} className="p-2 text-white/70 hover:text-[#D4AF37] transition" aria-label="Grid view">
            <Grid3x3 size={18} />
          </button>
          <button onClick={() => document.documentElement.requestFullscreen?.()} className="p-2 text-white/70 hover:text-[#D4AF37] transition" aria-label="Fullscreen">
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      <div
        className={`fixed bottom-0 left-0 right-0 px-8 py-6 flex items-center justify-between z-50 transition-opacity duration-500 ${
          showChrome ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
      >
        <button onClick={prev} disabled={i === 0} className="p-3 text-white/80 hover:text-[#D4AF37] disabled:opacity-20 transition" aria-label="Previous">
          <ChevronLeft size={22} />
        </button>
        <div className="flex items-center gap-4">
          <div className="text-white/60 text-xs tracking-[0.4em] tabular-nums">
            {String(i + 1).padStart(2, "0")} <span className="text-white/30">/</span> {String(total).padStart(2, "0")}
          </div>
          <div className="flex gap-1.5">
            {slides.map((_: SlideDef, idx: number) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-[2px] transition-all duration-300 ${
                  idx === i ? "w-8 bg-[#D4AF37]" : "w-4 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
        <button onClick={next} disabled={i === total - 1} className="p-3 text-white/80 hover:text-[#D4AF37] disabled:opacity-20 transition" aria-label="Next">
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Grid overview */}
      {showGrid && (
        <div className="fixed inset-0 bg-[#0D0D0D]/98 z-[100] overflow-auto p-12">
          <div className="flex items-center justify-between mb-8">
            <div className="text-white/80 text-sm tracking-[0.3em] uppercase">All Slides</div>
            <button onClick={() => setShowGrid(false)} className="text-white/70 hover:text-[#D4AF37]"><X /></button>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {slides.map((s: SlideDef, idx: number) => {
              const Sl = s.component;
              return (
                <button
                  key={idx}
                  onClick={() => { setI(idx); setShowGrid(false); }}
                  className={`group text-left ${idx === i ? "ring-2 ring-[#D4AF37]" : "ring-1 ring-white/10 hover:ring-white/40"} transition-all`}
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <div className="absolute inset-0" style={{ transform: "scale(0.225)", transformOrigin: "top left", width: "1920px", height: "1080px" }}>
                      <div className={s.tone === "dark" ? "bg-[#0D0D0D] text-white relative w-full h-full" : "bg-white text-[#0D0D0D] relative w-full h-full"}>
                        <Sl />
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-2 flex items-center justify-between text-xs text-white/60">
                    <span className="tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="truncate ml-2">{s.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
