import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth * devicePixelRatio);
    let h = (canvas.height = window.innerHeight * devicePixelRatio);
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    const count = reduced ? 0 : isMobile ? 28 : 70;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      r: (Math.random() * 1.4 + 0.4) * devicePixelRatio,
    }));

    let mouseX = w / 2;
    let mouseY = h / 2;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX * devicePixelRatio;
      mouseY = e.clientY * devicePixelRatio;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
      }
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const linkDist = 140 * devicePixelRatio;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < 180 * devicePixelRatio) {
          const f = (180 * devicePixelRatio - dist) / (180 * devicePixelRatio);
          p.x += (dx / dist) * f * 0.6;
          p.y += (dy / dist) * f * 0.6;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(222, 100%, 70%, 0.55)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(222, 100%, 70%, ${0.18 * (1 - d / linkDist)})`;
            ctx.lineWidth = 0.5 * devicePixelRatio;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    if (!reduced) raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient base */}
      <div
        className="absolute inset-0 opacity-70 animate-gradient-shift"
        style={{
          background:
            "linear-gradient(120deg, hsl(240 25% 4%), hsl(230 50% 8%), hsl(260 40% 6%), hsl(240 25% 4%))",
          backgroundSize: "300% 300%",
        }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="absolute h-[600px] w-[600px] rounded-full opacity-60 transition-transform duration-300 ease-out hidden md:block"
        style={{
          background:
            "radial-gradient(circle, hsl(222 100% 62% / 0.18), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};
