import hero from "@/assets/hero-interior.jpg";
import { Eyebrow, GoldRule, delay } from "./_shared";

export function AboutSlide() {
  return (
    <div className="w-full h-full relative bg-white text-[#0D0D0D] flex">
      {/* Left image — masked wipe reveal */}
      <div className="w-[55%] h-full relative reveal-wipe" style={delay(1.4)}>
        <img src={hero} alt="Modern interior with architectural lighting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
      </div>

      {/* Right text */}
      <div className="w-[45%] h-full flex flex-col justify-center px-24">
        <div className="reveal" style={delay(1.8)}>
          <Eyebrow>About Us</Eyebrow>
        </div>
        <h2 className="mt-8 text-5xl font-extralight tracking-[-0.02em] leading-[1.05] reveal" style={delay(2.0)}>
          Lighting as<br /><em className="not-italic gold-shimmer">architectural intent.</em>
        </h2>
        <div className="mt-10 reveal" style={delay(2.2)}>
          <GoldRule width={64} />
        </div>
        <p className="mt-8 text-base leading-[1.75] text-[#3a3a3a] font-light max-w-[480px] reveal" style={delay(2.4)}>
          Modular Lighting is a provider of architectural and commercial lighting systems
          serving the Kingdom of Saudi Arabia and the wider GCC — unifying advanced LED
          engineering, energy efficiency, and refined design.
        </p>
        <p className="mt-5 text-base leading-[1.75] text-[#3a3a3a] font-light max-w-[480px] reveal" style={delay(2.6)}>
          We partner with architects, consultants, developers and contractors across KSA
          to deliver luminaires that elevate landmark hospitality, retail, residential
          and commercial environments.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-8 reveal" style={delay(2.9)}>
          {[
            { k: "KSA · GCC", v: "Active Markets" },
            { k: "LED", v: "Advanced Tech" },
            { k: "A→Z", v: "Project Support" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-xl font-light tracking-tight">{s.k}</div>
              <div className="mt-1 text-xs tracking-[0.3em] uppercase text-[#8a8a8a]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 right-20 text-xs tracking-[0.4em] uppercase text-[#8a8a8a] reveal" style={delay(3.1)}>
        03 / 20
      </div>
    </div>
  );
}
