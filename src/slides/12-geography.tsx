import { Eyebrow, GoldRule, delay } from "./_shared";

const cities = [
  { name: "Dubai", country: "UAE", x: 52, y: 56, primary: true },
  { name: "Abu Dhabi", country: "UAE", x: 46, y: 62 },
  { name: "Sharjah", country: "UAE", x: 53, y: 53 },
  { name: "Jeddah", country: "KSA", x: 30, y: 70, primary: true },
  { name: "Riyadh", country: "KSA", x: 36, y: 62 },
];

export function GeographySlide() {
  return (
    <div className="w-full h-full relative bg-[#0D0D0D] text-white px-32 py-28 overflow-hidden">
      <div className="reveal" style={delay(1.4)}>
        <Eyebrow>Geographic Presence</Eyebrow>
        <h2 className="mt-6 text-5xl font-extralight tracking-[-0.02em] max-w-[1200px]">
          Headquartered in the UAE — <em className="not-italic gold-shimmer">illuminating the region.</em>
        </h2>
        <GoldRule width={64} className="mt-8" />
      </div>

      <div className="mt-16 grid grid-cols-[1.4fr_1fr] gap-20 items-start">
        {/* Abstract regional "map" plot */}
        <div className="relative aspect-[16/10] w-full border border-white/8 reveal-image" style={delay(1.8)}>
          {/* faint grid */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
          </svg>

          {/* coastline suggestion */}
          <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <path
              d="M 18,72 Q 25,60 32,62 T 42,58 Q 48,54 54,55 T 64,50 Q 72,46 76,42"
              fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="0.25"
              className="reveal" style={delay(2.2)}
            />
          </svg>

          {/* City pins */}
          {cities.map((c, i) => (
            <div
              key={c.name}
              className="absolute reveal"
              style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)", ...delay(2.4 + i * 0.18) }}
            >
              <div className={`relative ${c.primary ? "" : "opacity-80"}`}>
                <div
                  className="w-3 h-3 rounded-full bg-[#D4AF37]"
                  style={{
                    boxShadow: c.primary
                      ? "0 0 12px 3px rgba(212,175,55,0.7), 0 0 40px 10px rgba(212,175,55,0.3)"
                      : "0 0 8px 2px rgba(212,175,55,0.5)",
                  }}
                />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap">
                  <div className="text-base font-light tracking-tight">{c.name}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">{c.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="space-y-12">
          <div className="reveal" style={delay(2.2)}>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D4AF37]">Headquarters</div>
            <div className="mt-3 text-4xl font-light tracking-tight">Dubai, United Arab Emirates</div>
          </div>
          <div className="reveal" style={delay(2.4)}>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D4AF37]">Active Markets</div>
            <div className="mt-3 text-4xl font-light tracking-tight">UAE · Kingdom of Saudi Arabia</div>
            <div className="mt-2 text-sm text-white/50 font-light">Project deliveries across Dubai, Abu Dhabi, Sharjah, Jeddah and Riyadh.</div>
          </div>
          <div className="grid grid-cols-3 gap-6 reveal" style={delay(2.6)}>
            {[
              { k: "5+", v: "Cities" },
              { k: "2", v: "Countries" },
              { k: "10+", v: "Brand Partners" },
            ].map((s) => (
              <div key={s.k} className="border-t border-[#D4AF37]/40 pt-5">
                <div className="text-5xl font-extralight tracking-tight">{s.k}</div>
                <div className="mt-2 text-xs tracking-[0.3em] uppercase text-white/50">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-32 right-32 flex justify-between text-xs tracking-[0.4em] uppercase text-white/40">
        <span>Modular Lighting LLC</span>
        <span>19 / 20</span>
      </div>
    </div>
  );
}
