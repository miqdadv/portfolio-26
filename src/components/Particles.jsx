import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

/* Mouse position hook */
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = parseInt(hex, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

export const Particles = ({
  className,
  quantity = 80,
  staticity = 50,
  ease = 50,
  size = 0.6,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const ctx = useRef(null);
  const circles = useRef([]);
  const mousePos = useMousePosition();
  const mouse = useRef({ x: 0, y: 0 });
  const sizeRef = useRef({ w: 0, h: 0 });
  const dpr = window.devicePixelRatio || 1;
  const raf = useRef(null);

  const rgb = hexToRgb(color);

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");
    init();
    animate();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", init);
    };
  }, [color]);

  useEffect(() => {
    init();
  }, [refresh]);

  useEffect(() => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouse.current.x = mousePos.x - rect.left - sizeRef.current.w / 2;
    mouse.current.y = mousePos.y - rect.top - sizeRef.current.h / 2;
  }, [mousePos]);

  const init = () => {
    resize();
    circles.current = [];
    for (let i = 0; i < quantity; i++) {
      circles.current.push(createCircle());
    }
  };

  const resize = () => {
    sizeRef.current.w = containerRef.current.offsetWidth;
    sizeRef.current.h = containerRef.current.offsetHeight;
    canvasRef.current.width = sizeRef.current.w * dpr;
    canvasRef.current.height = sizeRef.current.h * dpr;
    canvasRef.current.style.width = `${sizeRef.current.w}px`;
    canvasRef.current.style.height = `${sizeRef.current.h}px`;
    ctx.current.setTransform(1, 0, 0, 1, 0, 0);
    ctx.current.scale(dpr, dpr);
  };

  const createCircle = () => ({
    x: Math.random() * sizeRef.current.w,
    y: Math.random() * sizeRef.current.h,
    tx: 0,
    ty: 0,
    size: Math.random() * 2 + size,
    alpha: 0,
    targetAlpha: Math.random() * 0.6 + 0.1,
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2,
    magnetism: Math.random() * 4 + 0.1,
  });

  const draw = () => {
    ctx.current.clearRect(0, 0, sizeRef.current.w, sizeRef.current.h);

    circles.current.forEach((c, i) => {
      c.alpha += (c.targetAlpha - c.alpha) * 0.02;
      c.x += c.dx + vx;
      c.y += c.dy + vy;
      c.tx += (mouse.current.x / (staticity / c.magnetism) - c.tx) / ease;
      c.ty += (mouse.current.y / (staticity / c.magnetism) - c.ty) / ease;

      ctx.current.beginPath();
      ctx.current.arc(c.x + c.tx, c.y + c.ty, c.size, 0, Math.PI * 2);
      ctx.current.fillStyle = `rgba(${rgb.join(",")},${c.alpha})`;
      ctx.current.fill();

      if (
        c.x < -10 ||
        c.x > sizeRef.current.w + 10 ||
        c.y < -10 ||
        c.y > sizeRef.current.h + 10
      ) {
        circles.current[i] = createCircle();
      }
    });
  };

  const animate = () => {
    draw();
    raf.current = requestAnimationFrame(animate);
  };

  return (
    <div
      ref={containerRef}
      className={twMerge("pointer-events-none absolute inset-0", className)}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};
