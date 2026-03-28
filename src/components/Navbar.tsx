"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [0, 12]);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ backdropFilter: scrolled ? `blur(${blur.get()}px)` : "none" }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled ? "bg-[rgba(8,8,8,0.7)] border-b border-[var(--border)]" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-6 h-6 bg-[var(--accent)] rounded-sm rotate-12 group-hover:rotate-0 transition-transform duration-300" />
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Forma
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Work", "System", "Pricing", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hidden md:block"
          >
            Sign in
          </a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[var(--accent)] text-black text-[13px] font-semibold px-4 py-2 rounded-full tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get started
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
