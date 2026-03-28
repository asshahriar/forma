"use client";
import { motion } from "framer-motion";

const ITEMS = [
  "Design Tokens", "Component Library", "Dark Mode", "A11y First",
  "Figma Sync", "Version Control", "Multi-brand", "Atomic Design",
  "Storybook", "CI/CD", "Type Safety", "Motion System",
];

function MarqueeRow({ reverse = false, speed = 40 }: { reverse?: boolean; speed?: number }) {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="flex overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-3 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-5 py-2.5 border border-[var(--border)] rounded-full text-[13px] text-[var(--text-secondary)] tracking-wide shrink-0"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="w-1 h-1 rounded-full bg-[var(--accent)] opacity-60" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="py-20 relative overflow-hidden border-y border-[var(--border)]">
      <div
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--bg), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, var(--bg), transparent)" }}
      />
      <div className="flex flex-col gap-3">
        <MarqueeRow speed={35} />
        <MarqueeRow reverse speed={45} />
      </div>
    </section>
  );
}
