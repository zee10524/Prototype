import { Eyebrow, GoldRule, delay } from "./_shared";

export function VisionSlide() {
  const words = ["Use", "the", "light", "to", "enhance", "the", "personal", "experience", "of", "the", "world."];
  return (
    <div className="w-full h-full relative bg-[#0D0D0D] flex flex-col items-center justify-center px-40">
      <div className="reveal" style={delay(1.4)}>
        <Eyebrow>Our Vision</Eyebrow>
      </div>

      <blockquote className="mt-16 text-center text-6xl font-extralight tracking-[-0.01em] leading-[1.15] text-white max-w-[1500px]">
        {words.map((w, i) => (
          <span key={i} className="reveal-letter inline-block mr-4" style={delay(1.7 + i * 0.12)}>
            {w === "light" ? <em className="not-italic gold-shimmer font-light">{w}</em> : w}
          </span>
        ))}
      </blockquote>

      <div className="mt-20 reveal" style={delay(4.0)}>
        <GoldRule width={80} />
      </div>
      <div className="mt-6 text-xs tracking-[0.4em] uppercase text-white/40 reveal" style={delay(4.2)}>
        — Modular Lighting Manifesto
      </div>
    </div>
  );
}
