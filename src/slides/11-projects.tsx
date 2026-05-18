import { Eyebrow, GoldRule, delay } from "./_shared";

import swiss from "@/assets/proj-swiss-hotel.jpg";
import facade from "@/assets/proj-facade.jpg";
import p2p from "@/assets/proj-p2p.jpg";
import p2p2 from "@/assets/proj-p2p-2.jpg";
import ama from "@/assets/proj-ama.jpg";
import ama2 from "@/assets/proj-ama-2.jpg";
import f7 from "@/assets/proj-f7.jpg";
import f72 from "@/assets/proj-f7-2.jpg";
import watch from "@/assets/proj-watch.jpg";
import watch2 from "@/assets/proj-watch-2.jpg";
import spa from "@/assets/proj-spa.jpg";
import spa2 from "@/assets/proj-spa-2.jpg";
import showroom from "@/assets/proj-showroom.jpg";

/* ============ Intro ============ */
export function ProjectsIntroSlide() {
  return (
    <div className="w-full h-full relative bg-[#0D0D0D] text-white flex items-center justify-center px-32">
      <div className="text-center">
        <div className="reveal" style={delay(1.4)}>
          <Eyebrow>Featured Projects</Eyebrow>
        </div>
        <h2 className="mt-10 text-8xl font-extralight tracking-[-0.03em] leading-[0.95] reveal" style={delay(1.7)}>
          Portfolio
        </h2>
        <h3 className="mt-2 text-8xl font-extralight tracking-[-0.03em] leading-[0.95]">
          <em className="not-italic gold-shimmer">2024 · 2026</em>
        </h3>
        <div className="mt-14 flex justify-center reveal" style={delay(2.4)}>
          <GoldRule width={120} />
        </div>
        <p className="mt-12 text-xl font-light text-white/60 max-w-[800px] mx-auto reveal" style={delay(2.6)}>
          A selection of architectural lighting installations across the United Arab Emirates and Kingdom of Saudi Arabia —
          each a study in light, material and intent.
        </p>
      </div>

      <div className="absolute bottom-12 left-32 right-32 flex justify-between text-xs tracking-[0.4em] uppercase text-white/40">
        <span>Modular Lighting LLC</span>
        <span>11 / 20</span>
      </div>
    </div>
  );
}

/* ============ Case study layout ============ */
function CaseStudy({
  hero,
  title,
  location,
  bua,
  type,
  gallery,
  slideNo,
}: {
  hero: string;
  title: string;
  location: string;
  bua: string;
  type: string;
  gallery?: string[];
  slideNo: string;
}) {
  return (
    <div className="w-full h-full relative bg-black text-white overflow-hidden">
      {/* Hero illuminated first */}
      <div className="absolute inset-0 reveal-image" style={delay(1.4)}>
        <img src={hero} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-20">
        <div className="reveal" style={delay(2.0)}>
          <Eyebrow>Case Study</Eyebrow>
        </div>
        <h1 className="mt-6 text-7xl font-extralight tracking-[-0.02em] leading-[0.95] max-w-[1100px] reveal" style={delay(2.2)}>
          {title}
        </h1>
        <GoldRule width={80} className="mt-10 reveal" style={delay(2.4)} />

        <div className="mt-12 grid grid-cols-3 gap-12 max-w-[900px] reveal" style={delay(2.6)}>
          {[
            { k: "Location", v: location },
            { k: "Built-Up Area", v: bua },
            { k: "Type", v: type },
          ].map((m) => (
            <div key={m.k}>
              <div className="text-xs tracking-[0.4em] uppercase text-[#D4AF37]">{m.k}</div>
              <div className="mt-3 text-2xl font-light tracking-tight">{m.v}</div>
            </div>
          ))}
        </div>

        {/* Gallery thumbs */}
        {gallery && gallery.length > 0 && (
          <div className="mt-12 flex gap-4">
            {gallery.map((g, i) => (
              <div key={i} className="w-44 h-28 overflow-hidden reveal-wipe" style={delay(2.9 + i * 0.15)}>
                <img src={g} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute top-10 right-20 text-xs tracking-[0.4em] uppercase text-white/50 reveal" style={delay(2.0)}>
        Project · {slideNo}
      </div>
      <div className="absolute bottom-10 right-20 text-xs tracking-[0.4em] uppercase text-white/40">
        {slideNo} / 20
      </div>
    </div>
  );
}

export const SwissHotelSlide   = () => <CaseStudy hero={swiss}   title="Swiss Hotel Jeddah"        location="Jeddah, KSA"  bua="263 sqm" type="Commercial · Hospitality" gallery={[facade]} slideNo="12" />;
export const P2PSlide          = () => <CaseStudy hero={p2p}     title="P2P Motors Showroom"      location="Dubai, UAE"   bua="200 sqm" type="Commercial · Automotive"  gallery={[p2p2]}   slideNo="13" />;
export const AmaSalonSlide     = () => <CaseStudy hero={ama}     title="AMA Salon"                 location="Dubai, UAE"   bua="200 sqm" type="Commercial · Wellness"    gallery={[ama2]}   slideNo="14" />;
export const F7Slide           = () => <CaseStudy hero={f7}      title="F7 Showroom"               location="Dubai, UAE"   bua="200 sqm" type="Commercial · Automotive"  gallery={[f72]}    slideNo="15" />;
export const WatchMarketSlide  = () => <CaseStudy hero={watch}   title="Watch Market"              location="Dubai, UAE"   bua="300 sqm" type="Commercial · Luxury Retail" gallery={[watch2]} slideNo="16" />;
export const SerenitySpaSlide  = () => <CaseStudy hero={spa}     title="Serenity Secret Spa"       location="Dubai, UAE"   bua="263 sqm" type="Commercial · Wellness"    gallery={[spa2]}   slideNo="17" />;
export const ShowroomSlide     = () => <CaseStudy hero={showroom} title="Modular Lighting Showroom" location="Dubai, UAE"   bua="200 sqm" type="Commercial · Brand Space"                       slideNo="18" />;
