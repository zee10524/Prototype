import { Eyebrow, GoldRule, delay } from "./_shared";

export function MissionVisionSlide() {
  return (
    <div className="w-full h-full relative bg-[#0D0D0D] text-white flex flex-col">
      <div className="pt-40 px-32 reveal" style={delay(1.4)}>
        <Eyebrow>Purpose</Eyebrow>
        <h2 className="mt-6 text-5xl font-extralight tracking-[-0.02em]">
          What guides every fixture we deliver.
        </h2>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-px bg-white/8 mt-24 mx-32">
        {/* Mission */}
        <div className="bg-[#0D0D0D] p-16 relative reveal" style={delay(2.0)}>
          <div className="text-[#D4AF37] text-6xl font-extralight tracking-tight">M.</div>
          <div className="mt-2 text-xs tracking-[0.5em] uppercase text-[#D4AF37]">Mission</div>
          <GoldRule width={48} className="mt-8" />
          <p className="mt-10 text-2xl font-light leading-[1.45] text-white/85">
            To deliver high-quality lighting and project support with the highest standards of reliability,
            efficiency and client care — building long-term partnerships through value-driven solutions.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-[#0D0D0D] p-16 relative reveal" style={delay(2.3)}>
          <div className="text-[#D4AF37] text-6xl font-extralight tracking-tight">V.</div>
          <div className="mt-2 text-xs tracking-[0.5em] uppercase text-[#D4AF37]">Vision</div>
          <GoldRule width={48} className="mt-8" />
          <p className="mt-10 text-2xl font-light leading-[1.45] text-white/85">
            To be recognized as the UAE's most trusted lighting partner — delivering innovative, efficient,
            high-performance systems that support modern architecture and sustainable development.
          </p>
        </div>
      </div>

      <div className="px-32 pb-12 mt-10 flex justify-between text-xs tracking-[0.4em] uppercase text-white/40">
        <span>Modular Lighting LLC</span>
        <span>04 / 20</span>
      </div>
    </div>
  );
}
