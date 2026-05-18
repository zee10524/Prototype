import { useEffect, useRef, type ReactNode } from "react";

/** Scales a 1920x1080 frame to any viewport. */
export function SlideStage({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const apply = () => {
      const sx = el.clientWidth / 1920;
      const sy = el.clientHeight / 1080;
      el.style.setProperty("--slide-scale", String(Math.min(sx, sy)));
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={stageRef} className="slide-stage">
      <div className="slide-frame">{children}</div>
    </div>
  );
}
