import type { CSSProperties } from "react";

/** Small helper to set --delay via inline style cleanly. */
export const delay = (s: number): CSSProperties => ({ "--delay": `${s}s` } as CSSProperties);

/** Render each character of `text` with staggered reveal. */
export function StaggerText({ text, base = 0.6, step = 0.03, className = "" }: { text: string; base?: number; step?: number; className?: string }) {
  return (
    <span className={className}>
      {Array.from(text).map((ch, i) => (
        <span key={i} className="reveal-letter" style={delay(base + i * step)}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/** Thin gold rule */
export function GoldRule({ width = 80, className = "", style }: { width?: number; className?: string; style?: CSSProperties }) {
  return <div className={`gold-rule ${className}`} style={{ width, ...style }} />;
}

/** Tiny uppercase eyebrow label */
export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-xs tracking-[0.5em] uppercase text-[#D4AF37] font-medium ${className}`}>
      {children}
    </div>
  );
}

/** Page chrome footer (slide number + brand) */
export function SlideFooter({ index, total, color = "rgba(0,0,0,0.4)" }: { index: number; total: number; color?: string }) {
  return (
    <div className="absolute bottom-12 left-20 right-20 flex items-end justify-between text-xs tracking-[0.4em] uppercase" style={{ color }}>
      <span>Modular Lighting LLC</span>
      <span className="tabular-nums">{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
    </div>
  );
}
