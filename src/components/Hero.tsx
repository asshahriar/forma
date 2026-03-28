"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

function FloatingOrb({ x, y, size, color, delay }: { x: string; y: string; size: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay, ease: "easeOut" }}
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x, top: y,
        width: size, height: size,
        background: color,
        filter: `blur(${size * 0.6}px)`,
      }}
    />
  );
}

const WORDS = ["Systems.", "Interfaces.", "Products.", "Futures."];

function CyclingWord() {
  const [idx, setIdx] = require("react").useState(0) as [number, React.Dispatch<React.SetStateAction<number>>];
  useEffect(() => {
    const t = setInterval(() => setIdx((i: number) => (i + 1) % WORDS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden" style={{ color: "var(--accent)" }}>
      <motion.span
        key={idx}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {WORDS[idx]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotX = useSpring(useTransform(mouseY, [-300, 300], [3, -3]), { stiffness: 100, damping: 30 });
  const rotY = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), { stiffness: 100, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Orbs */}
      <FloatingOrb x="10%" y="20%" size={400} color="rgba(124,92,252,0.15)" delay={0} />
      <FloatingOrb x="70%" y="10%" size={300} color="rgba(200,255,0,0.08)" delay={0.3} />
      <FloatingOrb x="60%" y="60%" size={500} color="rgba(255,107,53,0.08)" delay={0.6} />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <motion.div style={{ y, opacity, scale, rotateX: rotX, rotateY: rotY }} className="relative z-10 text-center max-w-6xl w-full" variants={container} initial="hidden" animate="show">

        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span
            className="text-[11px] tracking-[0.25em] uppercase text-[var(--text-secondary)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Design Infrastructure — 2026
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="leading-[0.92] tracking-tight mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(52px, 10vw, 140px)",
            fontWeight: 800,
          }}
        >
          Build Beautiful
          <br />
          <CyclingWord />
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={item}
          className="max-w-xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed mb-12 font-light"
        >
          Forma gives your team the primitive design blocks, the token infrastructure, and the deployment pipeline to ship at velocity without sacrificing craft.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(200,255,0,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-[var(--accent)] text-black font-bold px-8 py-4 rounded-full text-[15px] tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start for free
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-8 py-4 rounded-full text-[15px] tracking-wide transition-colors"
          >
            View components →
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="mt-20 flex flex-wrap justify-center gap-x-16 gap-y-4"
        >
          {[["12k+", "Teams"], ["2.4M", "Components shipped"], ["99.9%", "Uptime"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{num}</div>
              <div className="text-xs text-[var(--text-tertiary)] tracking-widest uppercase mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--text-tertiary)]" style={{ fontFamily: "var(--font-mono)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[var(--text-tertiary)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
