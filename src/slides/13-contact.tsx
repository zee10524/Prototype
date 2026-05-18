import logo from "@/assets/logo-official.png";
import { Eyebrow, GoldRule, delay } from "./_shared";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

export function ContactSlide() {
  return (
    <div className="w-full h-full relative bg-[#0D0D0D] text-white overflow-hidden flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.12), transparent 55%)" }}
      />

      {/* Logo with refined glow pulse */}
      <div className="relative reveal-image" style={delay(1.6)}>
        <div className="logo-pulse rounded-full p-2">
          <img src={logo} alt="Modular Lighting" className="h-24 w-auto" style={{ filter: "drop-shadow(0 0 40px rgba(212,175,55,0.55))" }} />
        </div>
      </div>

      <div className="mt-14 reveal" style={delay(2.4)}>
        <Eyebrow>Let's Build the Light Together</Eyebrow>
      </div>

      <h2 className="mt-8 text-6xl font-extralight tracking-[-0.02em] text-center reveal" style={delay(2.6)}>
        Contact
      </h2>

      <div className="mt-6 reveal" style={delay(2.8)}>
        <GoldRule width={80} />
      </div>

      <div className="mt-16 grid grid-cols-4 gap-x-16 gap-y-10 max-w-[1200px]">
        {[
          { Icon: MapPin, k: "Address",  v: "Dubai, United Arab Emirates" },
          { Icon: Phone,  k: "Phone",    v: "+971 XX XXX XXXX" },
          { Icon: Mail,   k: "Email",    v: "info@modularlighting.ae" },
          { Icon: Globe,  k: "Web",      v: "modularlighting.ae" },
        ].map(({ Icon, k, v }, i) => (
          <div key={k} className="text-center reveal" style={delay(3.0 + i * 0.12)}>
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
                <Icon size={18} strokeWidth={1.5} />
              </div>
            </div>
            <div className="mt-5 text-xs tracking-[0.4em] uppercase text-[#D4AF37]">{k}</div>
            <div className="mt-3 text-lg font-light text-white/85">{v}</div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-xs tracking-[0.5em] uppercase text-white/30 reveal" style={delay(3.6)}>
        Thank You
      </div>

      <div className="absolute bottom-12 left-32 right-32 flex justify-between text-xs tracking-[0.4em] uppercase text-white/40">
        <span>Modular Lighting LLC · Company Profile 2026</span>
        <span>20 / 20</span>
      </div>
    </div>
  );
}
