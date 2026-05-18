import { Eyebrow, GoldRule, delay } from "./_shared";

const strengths = [
  { n: "01", t: "Over 50 Years of Know-how", d: "Durable products, attention to detail, and a relentless focus on design." },
  { n: "02", t: "Global Industrial Platform", d: "An industrial and logistics network engineered for excellence in service." },
  { n: "03", t: "Innovation & Precision",     d: "Continuous technological research with measurable engineering precision." },
  { n: "04", t: "Tailor-Made Service",        d: "Dedicated solutions for every customer, every site, every brief." },
  { n: "05", t: "Worldwide Certification",    d: "Compliance with CE, RoHS, UKCA, CCC, KC, CB and global market standards." },
];

export function StrengthsSlide() {
  return (
    <div className="w-full h-full relative bg-[#0D0D0D] text-white px-32 py-32">
      <div className="reveal" style={delay(1.4)}>
        <Eyebrow>Our Strengths</Eyebrow>
        <h2 className="mt-6 text-5xl font-extralight tracking-[-0.02em] max-w-[1400px]">
          A professional partner, <em className="not-italic gold-shimmer">five reasons over.</em>
        </h2>
      </div>

      <div className="mt-24 grid grid-cols-5 gap-8">
        {strengths.map((s, i) => (
          <div key={s.n} className="reveal flex flex-col" style={delay(2.0 + i * 0.18)}>
            <div className="text-7xl font-extralight tracking-tight text-[#D4AF37]/90 leading-none">{s.n}</div>
            <GoldRule width={40} className="mt-8" />
            <div className="mt-8 text-2xl font-light tracking-tight leading-snug">{s.t}</div>
            <div className="mt-6 text-base font-light text-white/60 leading-[1.65]">{s.d}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-32 right-32 flex justify-between text-xs tracking-[0.4em] uppercase text-white/40">
        <span>Modular Lighting LLC</span>
        <span>09 / 20</span>
      </div>
    </div>
  );
}
