"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden"
        style={{ background: "var(--surface)" }}
      >
        {/* Orb */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(200,255,0,0.12), rgba(124,92,252,0.08), transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 py-24 px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[11px] tracking-[0.3em] uppercase text-[var(--text-tertiary)] block mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Get started today
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold leading-[0.92] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your design system,
            <br />
            <span style={{ color: "var(--accent)" }}>finally sorted.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-[var(--text-secondary)] max-w-md mx-auto mb-12 font-light"
          >
            Join 12,000+ teams shipping faster with Forma. Free to start, scales with you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.03, boxShadow: "0 0 60px rgba(200,255,0,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-[var(--accent)] text-black font-bold px-10 py-4 rounded-full text-[15px] tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Start building free
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-white px-10 py-4 rounded-full text-[15px] transition-colors"
            >
              Book a demo
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  const cols = [
    { title: "Product", links: ["Components", "Tokens", "Motion", "Figma Plugin", "Changelog"] },
    { title: "Docs", links: ["Getting started", "API reference", "Theming", "Storybook", "Migrations"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Press kit", "Contact"] },
  ];

  return (
    <footer className="border-t border-[var(--border)] py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-[var(--accent)] rounded-sm rotate-12" />
              <span className="font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "var(--font-display)" }}>Forma</span>
            </div>
            <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed max-w-[200px] font-light">
              Design infrastructure for teams who care about craft.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4" style={{ fontFamily: "var(--font-mono)" }}>{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border)]">
          <p className="text-[12px] text-[var(--text-tertiary)]" style={{ fontFamily: "var(--font-mono)" }}>
            © 2026 Forma, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Security"].map((item) => (
              <a key={item} href="#" className="text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
