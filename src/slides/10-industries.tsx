import { Eyebrow, GoldRule, delay } from "./_shared";
import resid from "@/assets/app-residential.jpg";
import retail from "@/assets/app-retail.jpg";
import comm from "@/assets/proj-swiss-hotel.jpg";
import hosp from "@/assets/proj-spa.jpg";

const items = [
  { src: resid, t: "Residential", d: "Villas, apartments, walk-in closets, bathrooms — refined ambient design." },
  { src: retail, t: "Retail", d: "Boutiques and showrooms, where light shapes desire and merchandise." },
  { src: comm, t: "Commercial", d: "Hotels, offices and corporate environments at architectural scale." },
  { src: hosp, t: "Hospitality & Wellness", d: "Spas, salons and lounges — luminance choreographed for calm." },
];

export function IndustriesSlide() {
  return (
    <div className="w-full h-full relative bg-white text-[#0D0D0D] px-32 py-24">
      <div className="reveal" style={delay(1.4)}>
        <Eyebrow>Industry Applications</Eyebrow>
        <h2 className="mt-6 text-5xl font-extralight tracking-[-0.02em] max-w-[1300px]">
          Versatile by discipline — <em className="not-italic gold-shimmer">precise by application.</em>
        </h2>
        <GoldRule width={64} className="mt-8" />
      </div>

      <div className="mt-16 grid grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={it.t} className="reveal flex flex-col" style={delay(2.0 + i * 0.18)}>
            <div className="relative aspect-[3/4] overflow-hidden reveal-wipe" style={delay(2.1 + i * 0.18)}>
              <img src={it.src} alt={it.t} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="mt-6 flex items-baseline justify-between">
              <div className="text-xs tracking-[0.4em] text-[#D4AF37]">0{i + 1}</div>
              <div className="text-xs tracking-[0.4em] uppercase text-[#8a8a8a]">Discipline</div>
            </div>
            <h3 className="mt-4 text-3xl font-light tracking-tight">{it.t}</h3>
            <p className="mt-3 text-base font-light text-[#4a4a4a] leading-[1.65]">{it.d}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-32 right-32 flex justify-between text-xs tracking-[0.4em] uppercase text-[#8a8a8a]">
        <span>Modular Lighting LLC</span>
        <span>10 / 20</span>
      </div>
    </div>
  );
}
