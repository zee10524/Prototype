import { Eyebrow, GoldRule, delay } from "./_shared";
import { Compass, Lightbulb, HardHat } from "lucide-react";

const services = [
  {
    icon: Compass,
    n: "01",
    t: "Lighting Design Support",
    d: "Concept-to-installation guidance with architects and consultants to shape architectural light from the earliest sketch.",
  },
  {
    icon: Lightbulb,
    n: "02",
    t: "LED Lighting Solutions",
    d: "Advanced LED systems for indoor and outdoor environments — engineered for efficiency, longevity and color fidelity.",
  },
  {
    icon: HardHat,
    n: "03",
    t: "Project Support",
    d: "End-to-end procurement, technical coordination and site delivery for architectural and commercial fixtures.",
  },
];

export function ServicesSlide() {
  return (
    <div className="w-full h-full relative bg-white text-[#0D0D0D] px-32 py-32">
      <div className="reveal" style={delay(1.4)}>
        <Eyebrow>Our Services</Eyebrow>
        <h2 className="mt-6 text-5xl font-extralight tracking-[-0.02em] max-w-[1200px]">
          Three disciplines, <em className="not-italic gold-shimmer">one continuous practice.</em>
        </h2>
      </div>

      <div className="mt-28 grid grid-cols-3 gap-px bg-[#e8e8e8]">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.t} className="bg-white p-14 reveal" style={delay(2.0 + i * 0.2)}>
              <div className="flex items-baseline justify-between">
                <div className="w-14 h-14 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Icon size={22} strokeWidth={1.4} />
                </div>
                <div className="text-xs tracking-[0.4em] text-[#D4AF37]">{s.n}</div>
              </div>
              <h3 className="mt-10 text-3xl font-light tracking-tight leading-tight">{s.t}</h3>
              <GoldRule width={40} className="mt-8" />
              <p className="mt-8 text-lg font-light leading-[1.65] text-[#4a4a4a]">{s.d}</p>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-12 left-32 right-32 flex justify-between text-xs tracking-[0.4em] uppercase text-[#8a8a8a]">
        <span>Modular Lighting LLC</span>
        <span>06 / 20</span>
      </div>
    </div>
  );
}
