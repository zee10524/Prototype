import { Eyebrow, GoldRule, delay } from "./_shared";

const branches = [
  { t: "Finance & Admin", items: ["Accounting", "Financial Management", "Administrative Support"] },
  { t: "Procurement & Supply", items: ["Supplier Management", "Product Procurement", "Logistics"] },
  { t: "Technical Department", items: ["Project Manager", "Lighting Tech. Support", "Site Coordination"] },
  { t: "Sales & Development", items: ["Sales Manager", "Sales Engineers", "Client Relationships"] },
];

export function OrgSlide() {
  return (
    <div className="w-full h-full relative bg-white text-[#0D0D0D] px-32 py-32">
      <div className="reveal" style={delay(1.4)}>
        <Eyebrow>Organization Chart</Eyebrow>
        <h2 className="mt-6 text-5xl font-extralight tracking-[-0.02em]">
          A structure built for <em className="not-italic gold-shimmer">precision.</em>
        </h2>
      </div>

      <div className="mt-24 flex flex-col items-center">
        {/* GM node */}
        <div className="reveal" style={delay(2.0)}>
          <div className="text-center">
            <div className="inline-block px-12 py-6 border border-[#D4AF37] bg-white">
              <div className="text-xs tracking-[0.4em] uppercase text-[#D4AF37]">Leadership</div>
              <div className="text-2xl font-light mt-2">General Manager</div>
            </div>
          </div>
        </div>

        {/* connector */}
        <div className="w-px h-16 bg-[#D4AF37]/40 reveal" style={delay(2.2)} />

        {/* Horizontal rail */}
        <div className="relative w-full">
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-[#D4AF37]/30 reveal" style={delay(2.3)} />

          <div className="grid grid-cols-4 gap-6 pt-16">
            {branches.map((b, i) => (
              <div key={b.t} className="relative reveal" style={delay(2.5 + i * 0.15)}>
                <div className="absolute -top-16 left-1/2 w-px h-16 bg-[#D4AF37]/30" />
                <div className="border-t border-[#D4AF37] pt-6">
                  <div className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-medium">0{i + 1}</div>
                  <div className="mt-3 text-xl font-medium tracking-tight">{b.t}</div>
                  <GoldRule width={32} className="mt-4" />
                  <ul className="mt-6 space-y-3">
                    {b.items.map((it) => (
                      <li key={it} className="text-base font-light text-[#3a3a3a] flex items-start gap-3">
                        <span className="text-[#D4AF37] mt-2 w-2 h-px bg-[#D4AF37]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-32 right-32 flex justify-between text-xs tracking-[0.4em] uppercase text-[#8a8a8a]">
        <span>Modular Lighting LLC</span>
        <span>05 / 20</span>
      </div>
    </div>
  );
}
