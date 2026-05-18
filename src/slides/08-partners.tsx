import { Eyebrow, GoldRule, delay } from "./_shared";
import p1 from "@/assets/partner-1.jpg";
import p2 from "@/assets/partner-2.jpg";
import p3 from "@/assets/partner-3.jpg";
import p4 from "@/assets/partner-4.jpg";
import p5 from "@/assets/partner-5.jpg";
import p6 from "@/assets/partner-6.jpg";
import p7 from "@/assets/partner-7.jpg";
import p8 from "@/assets/partner-8.jpg";
import p9 from "@/assets/partner-9.jpg";
import p10 from "@/assets/partner-10.jpg";

const partners = [
  { src: p9, name: "Philips" },
  { src: p8, name: "Osram" },
  { src: p10, name: "Tridonic" },
  { src: p1, name: "Cree" },
  { src: p2, name: "VS Lighting" },
  { src: p7, name: "Unilux" },
  { src: p4, name: "Astra Lux" },
  { src: p3, name: "Eppo Lights" },
  { src: p6, name: "EagleRise" },
  { src: p5, name: "Rimaluz" },
];

export function PartnersSlide() {
  return (
    <div className="w-full h-full relative bg-white text-[#0D0D0D] px-32 py-28">
      <div className="reveal" style={delay(1.4)}>
        <Eyebrow>Global Partners</Eyebrow>
        <h2 className="mt-6 text-5xl font-extralight tracking-[-0.02em] max-w-[1300px]">
          Backed by the world's foremost <em className="not-italic gold-shimmer">lighting houses.</em>
        </h2>
        <GoldRule width={64} className="mt-8" />
      </div>

      <div className="mt-20 grid grid-cols-5 grid-rows-2 gap-px bg-[#e8e8e8] border border-[#e8e8e8]">
        {partners.map((p, i) => (
          <div
            key={p.name}
            className="bg-white aspect-[3/2] flex items-center justify-center p-10 reveal"
            style={delay(2.0 + i * 0.08)}
          >
            <img
              src={p.src}
              alt={p.name}
              className="max-w-full max-h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              style={{ filter: "contrast(1.05)" }}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm font-light text-[#8a8a8a] tracking-wide reveal" style={delay(3.0)}>
        Authorized distribution & technical partnerships across European, American and Asian manufacturers.
      </div>

      <div className="absolute bottom-10 left-32 right-32 flex justify-between text-xs tracking-[0.4em] uppercase text-[#8a8a8a]">
        <span>Modular Lighting LLC</span>
        <span>08 / 20</span>
      </div>
    </div>
  );
}
