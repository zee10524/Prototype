import logo from "@/assets/logo-official.png";
import { Eyebrow, GoldRule, StaggerText, delay } from "./_shared";

export function CoverSlide() {
  return (
    <div className="w-full h-full relative bg-[#0D0D0D] overflow-hidden">
      {/* faint radial luminance */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(212,175,55,0.10), transparent 60%)" }}
      />

      {/* Top eyebrow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 reveal" style={delay(1.6)}>
        <Eyebrow>2026 · Kingdom of Saudi Arabia · GCC</Eyebrow>
      </div>

      {/* Logo emerging from darkness */}
      <div className="absolute top-56 left-1/2 -translate-x-1/2 reveal-image" style={delay(0.2)}>
        <img src={logo} alt="Modular Lighting" className="h-32 w-auto" style={{ filter: "drop-shadow(0 0 50px rgba(212,175,55,0.4))" }} />
      </div>

      {/* Title illuminated after tube light */}
      <div className="absolute left-0 right-0 top-[640px] text-center">
        <h1 className="text-5xl font-extralight tracking-[-0.02em] text-white leading-[0.95]">
          <StaggerText text="Company Profile" base={1.8} step={0.04} />
        </h1>
        <div className="mt-8 reveal" style={delay(2.6)}>
          <Eyebrow>Architectural Lighting Solutions · KSA &amp; GCC</Eyebrow>
        </div>
        <div className="mt-8 flex justify-center reveal" style={delay(2.8)}>
          <GoldRule width={120} />
        </div>
      </div>

      {/* Bottom mark */}
      <div className="absolute bottom-16 left-0 right-0 text-center text-xs tracking-[0.5em] uppercase text-white/40 reveal" style={delay(3.0)}>
        Architectural Lighting · Made for Vision
      </div>
    </div>
  );
}
