import interior from "@/assets/interior-living.jpg";
import { Eyebrow, GoldRule, delay } from "./_shared";

const products = [
  "Architectural Lighting",
  "Decorative Lighting",
  "Recessed Lighting",
  "Outdoor & Landscape",
  "Commercial Lighting",
  "Track Lighting Systems",
  "Recessed Fixtures",
  "Linear LED Systems",
];

export function ProductsSlide() {
  return (
    <div className="w-full h-full relative bg-[#0D0D0D] text-white flex">
      <div className="w-[40%] h-full p-24 flex flex-col justify-center relative z-10">
        <div className="reveal" style={delay(1.4)}>
          <Eyebrow>Product Categories</Eyebrow>
        </div>
        <h2 className="mt-8 text-5xl font-extralight tracking-[-0.02em] leading-[1.05] reveal" style={delay(1.7)}>
          A curated catalogue across <em className="not-italic gold-shimmer">eight disciplines.</em>
        </h2>
        <GoldRule width={48} className="mt-10 reveal" style={delay(1.9)} />
        <p className="mt-10 text-lg font-light leading-[1.7] text-white/70 reveal" style={delay(2.1)}>
          Each fixture selected and delivered to the specific requirements of the project — from
          residential refinement to commercial-scale precision.
        </p>
      </div>

      <div className="w-[60%] h-full relative">
        <div className="absolute inset-0 reveal-image" style={delay(1.6)}>
          <img src={interior} alt="Architectural lighting interior" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0D0D0D]/40 to-[#0D0D0D]" />
        </div>

        <div className="relative z-10 h-full flex items-center px-20">
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 w-full">
            {products.map((p, i) => (
              <div key={p} className="reveal flex items-baseline gap-6 border-b border-white/10 pb-5" style={delay(2.0 + i * 0.08)}>
                <div className="text-xs tracking-[0.3em] text-[#D4AF37] tabular-nums">0{i + 1}</div>
                <div className="text-2xl font-light tracking-tight">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-24 right-24 flex justify-between text-xs tracking-[0.4em] uppercase text-white/40 z-20">
        <span>Modular Lighting LLC</span>
        <span>07 / 20</span>
      </div>
    </div>
  );
}
