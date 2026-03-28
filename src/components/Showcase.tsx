"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function CodeBlock() {
  const lines = [
    { indent: 0, content: <><span style={{ color: "var(--accent-3)" }}>import</span> <span style={{ color: "var(--text-primary)" }}>&#123; tokens &#125;</span> <span style={{ color: "var(--accent-3)" }}>from</span> <span style={{ color: "var(--accent)" }}>&apos;@forma/core&apos;</span></> },
    { indent: 0, content: "" },
    { indent: 0, content: <><span style={{ color: "var(--accent-2)" }}>const</span> <span style={{ color: "var(--accent)" }}>theme</span> = tokens.create(&#123;</> },
    { indent: 1, content: <><span style={{ color: "var(--text-secondary)" }}>brand</span>: <span style={{ color: "var(--accent)" }}>&apos;#c8ff00&apos;</span>,</> },
    { indent: 1, content: <><span style={{ color: "var(--text-secondary)" }}>radius</span>: <span style={{ color: "var(--accent-2)" }}>12</span>,</> },
    { indent: 1, content: <><span style={{ color: "var(--text-secondary)" }}>motion</span>: <span style={{ color: "var(--accent)" }}>&apos;spring&apos;</span>,</> },
    { indent: 0, content: "&#125;)" },
    { indent: 0, content: "" },
    { indent: 0, content: <><span style={{ color: "var(--text-tertiary)" }}>// Ship with confidence</span></> },
  ];

  return (
    <div
      className="rounded-xl p-5 h-full font-mono text-[13px] leading-7 overflow-hidden"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <div className="flex gap-1.5 mb-4">
        {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
      </div>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
          className="flex"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="text-[var(--text-tertiary)] w-6 shrink-0 text-right mr-4 select-none">{i + 1}</span>
          <span style={{ paddingLeft: `${(line.indent) * 16}px` }}>{line.content}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ColorPalette() {
  const colors = [
    { name: "Acid", value: "#c8ff00" },
    { name: "Ember", value: "#ff6b35" },
    { name: "Iris", value: "#7c5cfc" },
    { name: "Void", value: "#080808" },
    { name: "Fog", value: "#f0ede8" },
  ];

  return (
    <div className="h-full flex flex-col gap-3">
      <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--text-tertiary)]" style={{ fontFamily: "var(--font-mono)" }}>Color tokens</span>
      {colors.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 group"
        >
          <div
            className="w-10 h-10 rounded-xl shrink-0 group-hover:scale-110 transition-transform"
            style={{ background: c.value }}
          />
          <div>
            <div className="text-sm font-medium">{c.name}</div>
            <div className="text-[11px] text-[var(--text-tertiary)]" style={{ fontFamily: "var(--font-mono)" }}>{c.value}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SpacingScale() {
  const steps = [2, 4, 8, 12, 16, 24, 32, 48];
  return (
    <div className="h-full flex flex-col gap-3">
      <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--text-tertiary)]" style={{ fontFamily: "var(--font-mono)" }}>Spacing scale</span>
      <div className="flex-1 flex flex-col justify-center gap-2">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 origin-left"
          >
            <div className="w-8 text-[10px] text-[var(--text-tertiary)]" style={{ fontFamily: "var(--font-mono)" }}>{s}px</div>
            <div
              className="h-2 rounded-full"
              style={{
                width: `${s * 2}px`,
                background: `linear-gradient(90deg, var(--accent), var(--accent-3))`,
                opacity: 0.6 + i * 0.05,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MotionDemo() {
  return (
    <div className="h-full flex flex-col gap-4">
      <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--text-tertiary)]" style={{ fontFamily: "var(--font-mono)" }}>Motion presets</span>
      <div className="flex-1 flex flex-col gap-3">
        {[
          { label: "Spring", ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
          { label: "Snappy", ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] },
          { label: "Smooth", ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
        ].map(({ label, ease }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-14 text-[11px] text-[var(--text-tertiary)] shrink-0" style={{ fontFamily: "var(--font-mono)" }}>{label}</div>
            <div className="flex-1 h-px bg-[var(--border)] relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-[var(--accent)] origin-left"
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, repeatDelay: 1, ease }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Showcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const cells = [
    { className: "md:col-span-2 min-h-[300px]", component: <CodeBlock /> },
    { className: "min-h-[300px]", component: <ColorPalette /> },
    { className: "min-h-[200px]", component: <SpacingScale /> },
    { className: "min-h-[200px]", component: <MotionDemo /> },
  ];

  return (
    <section ref={ref} className="py-32 px-6 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--text-tertiary)] block mb-4" style={{ fontFamily: "var(--font-mono)" }}>System Preview</span>
        <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Under the <span className="text-[var(--text-secondary)]">hood.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {cells.map(({ className, component }, i) => (
          <motion.div
            key={i}
            style={{ y: i % 2 === 0 ? y1 : y2, background: "var(bg-2)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`${className} p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors `}
          >
            {component}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
