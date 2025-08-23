import React, { useEffect, useRef } from "react";

const ContactWaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let t = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = 120;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    const draw = () => {
      if (!ctx) return;
      t += 0.02;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const w = width / DPR;
      const h = height / DPR;
      const colors = ["#241a38", "#5e4491", "#A476FF"];
      colors.forEach((color, i) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.25 + i * 0.15;
        ctx.lineWidth = 2 + i * 0.5;
        const k = 0.004 + i * 0.0015;
        ctx.moveTo(0, h / 2);
        for (let x = 0; x <= w; x += 6) {
          const y = h / 2 + Math.sin(x * k + t * (1.2 + i * 0.3)) * (10 + i * 8);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      raf = requestAnimationFrame(draw);
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="w-full mb-4">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ContactWaves;


