"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Forma cut our design-to-prod cycle by 60%. The token system alone is worth ten times what we pay.",
    name: "Mia Johansson",
    role: "Head of Design · Linear",
    initials: "MJ",
    color: "#7c5cfc",
  },
  {
    quote: "Every component is a delight to use. The accessibility defaults mean we stopped arguing about it in PRs.",
    name: "Carlos Mena",
    role: "Staff Engineer · Vercel",
    initials: "CM",
    color: "#c8ff00",
  },
  {
    quote: "We migrated four brands onto one Forma instance. I thought it'd take a quarter. It took two weeks.",
    name: "Priya Nair",
    role: "Design Systems Lead · Stripe",
    initials: "PN",
    color: "#ff6b35",
  },
  {
    quote: "The motion system is genuinely the best I've seen. Every animation just... makes sense.",
    name: "Tobias Müller",
    role: "Product Designer · Notion",
    initials: "TM",
    color: "#7c5cfc",
  },
  {
    quote: "Figma sync works so well I almost cried. No more copy-paste of token values between repos.",
    name: "Sarah Kim",
    role: "Frontend Lead · Loom",
    initials: "SK",
    color: "#c8ff00",
  },
  {
    quote: "Forma is what design systems should have been from the start. Everything else feels like a workaround.",
    name: "Alex Park",
    role: "CTO · Replit",
    initials: "AP",
    color: "#ff6b35",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const col1 = TESTIMONIALS.slice(0, 2);
  const col2 = TESTIMONIALS.slice(2, 4);
  const col3 = TESTIMONIALS.slice(4, 6);

  return (
    <section ref={ref} className="py-32 px-6 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--text-tertiary)] block mb-4" style={{ fontFamily: "var(--font-mono)" }}>Loved by teams</span>
        <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Don&apos;t take
          <br />
          <span className="text-[var(--text-secondary)]">our word.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {[col1, col2, col3].map((col, ci) => (
          <div key={ci} className="flex flex-col gap-4">
            {col.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: ci * 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-all"
                style={{ background: "var(--bg-2)" }}
              >
                <p className="text-[15px] text-[var(--text-primary)] leading-relaxed mb-6 font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{ background: `${t.color}20`, color: t.color, fontFamily: "var(--font-display)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium">{t.name}</div>
                    <div className="text-[11px] text-[var(--text-tertiary)]" style={{ fontFamily: "var(--font-mono)" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
