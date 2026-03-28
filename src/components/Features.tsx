"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  {
    number: "01",
    title: "Token Architecture",
    desc: "Semantic, multi-tier design tokens that cascade from global primitives to component-specific values. Built for theming, dark mode, and brand customization at scale.",
    tags: ["Color", "Typography", "Spacing", "Motion"],
    accent: "var(--accent)",
  },
  {
    number: "02",
    title: "Component Genome",
    desc: "Every component ships with full accessibility, keyboard navigation, ARIA semantics, and screen reader support baked in — not bolted on.",
    tags: ["WCAG 2.1", "ARIA", "Keyboard", "RTL"],
    accent: "var(--accent-2)",
  },
  {
    number: "03",
    title: "Motion Language",
    desc: "A coherent animation system with spring physics, easing curves, and choreographed transitions that make your interfaces feel alive and intentional.",
    tags: ["Springs", "Easings", "Choreography", "Reduced Motion"],
    accent: "var(--accent-3)",
  },
  {
    number: "04",
    title: "Figma ↔ Code",
    desc: "Bidirectional sync keeps design and code in lockstep. Change a token in Figma, see it propagate to your repository in seconds via our GitHub integration.",
    tags: ["Figma", "GitHub", "CI", "Webhooks"],
    accent: "var(--accent)",
  },
];

function FeatureCard({ feature, i }: { feature: typeof FEATURES[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--border-hover)] transition-all duration-500 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 50%, ${feature.accent}08, transparent 70%)` }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-[11px] tracking-[0.25em] text-[var(--text-tertiary)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {feature.number}
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: `${feature.accent}15`, border: `1px solid ${feature.accent}30` }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: feature.accent }} />
          </div>
        </div>

        <h3
          className="text-2xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {feature.title}
        </h3>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-[15px]">
          {feature.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {feature.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-md tracking-wide"
              style={{
                background: "var(--surface-2)",
                color: "var(--text-tertiary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 max-w-[1400px] mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <span
          className="text-[11px] tracking-[0.3em] uppercase text-[var(--text-tertiary)] block mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Core Capabilities
        </span>
        <h2
          className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight max-w-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Every layer,
          <br />
          <span className="text-[var(--text-secondary)]">perfected.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.number} feature={f} i={i} />
        ))}
      </div>
    </section>
  );
}
