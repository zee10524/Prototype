import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Y-position of the tube light in px within the 1080 frame. Default: 60 */
  tubeY?: number;
  /** Background tone for the slide */
  tone?: "light" | "dark" | "image";
  /** Unique key — change it to re-trigger the ignition. */
  ignitionKey: string | number;
}

/**
 * Wraps slide content with the cinematic tube-light ignition transition.
 * Includes: dark fade-in, tube light power-on, warm ambient glow wash.
 */
export function TubeLightReveal({ children, tubeY = 60, tone = "light", ignitionKey }: Props) {
  const bg =
    tone === "dark"
      ? "bg-[#0D0D0D] text-white"
      : tone === "image"
      ? "bg-black text-white"
      : "bg-white text-[#0D0D0D]";

  return (
    <div key={ignitionKey} className={`slide-content ${bg} page-dark-in overflow-hidden`}>
      {/* Pre-ignition dark veil for light themes */}
      {tone === "light" && (
        <div
          className="absolute inset-0 bg-black pointer-events-none z-40"
          style={{ animation: "pageDarkIn 0.5s ease-out reverse forwards" }}
        />
      )}
      {/* The tube light fixture */}
      <div className="tube-light flicker" style={{ top: tubeY }} />
      {/* Ambient warm glow wash */}
      <div className="glow-wash" />
      {/* Content */}
      <div className="absolute inset-0 z-10">{children}</div>
    </div>
  );
}
