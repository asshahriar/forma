"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  const trailX = useSpring(mouseX, { stiffness: 120, damping: 28 });
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 28 });

  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hover]")) {
        isHovering.current = true;
        dot.current?.setAttribute("data-hover", "true");
      }
    };
    const onLeave = () => {
      isHovering.current = false;
      dot.current?.removeAttribute("data-hover");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [mouseX, mouseY]);

  const dot = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Trail ring */}
      <motion.div
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed top-0 left-0 z-[99999] w-8 h-8 rounded-full border border-white/20 mix-blend-difference"
      />
      {/* Dot */}
      <motion.div
        ref={dot}
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed top-0 left-0 z-[99999] w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
      />
    </>
  );
}
