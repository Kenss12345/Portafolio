import React, { useEffect, useRef } from "react";

const ProjectOrbits: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let t = 0;
    const dots = Array.from(el.querySelectorAll<HTMLElement>('[data-dot]'));
    const animate = () => {
      t += 0.008;
      const radiusBase = 60;
      dots.forEach((d, i) => {
        const angle = t + (i * Math.PI * 2) / dots.length;
        const r = radiusBase + (i % 3) * 14;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * (r * 0.4);
        d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        d.style.opacity = String(0.4 + 0.6 * Math.abs(Math.sin(angle)));
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="relative h-24">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          data-dot
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full"
          style={{ background: i % 2 ? "#A476FF" : "#5e4491", opacity: 0.6 }}
        />
      ))}
    </div>
  );
};

export default ProjectOrbits;


