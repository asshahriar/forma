"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    desc: "For solo designers and indie devs.",
    features: ["Core component library", "5 design tokens", "Community support", "Public projects only"],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    desc: "For product teams who ship.",
    features: ["Everything in Starter", "Unlimited tokens", "Figma sync", "Private projects", "Priority support", "CI/CD integration"],
    cta: "Start trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large orgs with custom needs.",
    features: ["Everything in Team", "SSO / SAML", "SLA guarantee", "Dedicated CSM", "Custom contracts", "On-prem option"],
    cta: "Contact us",
    highlight: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 px-6 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20"
      >
        <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--text-tertiary)] block mb-4" style={{ fontFamily: "var(--font-mono)" }}>Pricing</span>
        <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Simple, <span className="text-[var(--text-secondary)]">honest.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-2xl p-8 flex flex-col ${
              plan.highlight
                ? "bg-[var(--accent)] text-black"
                : "bg-[var(--bg-2)] border border-[var(--border)]"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-[var(--accent)] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-mono)" }}>
                Most popular
              </div>
            )}

            <div className="mb-8">
              <div className={`text-[11px] tracking-[0.25em] uppercase mb-4 ${plan.highlight ? "text-black/50" : "text-[var(--text-tertiary)]"}`} style={{ fontFamily: "var(--font-mono)" }}>
                {plan.name}
              </div>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{plan.price}</span>
                {plan.period && <span className={`text-lg mb-1 ${plan.highlight ? "text-black/50" : "text-[var(--text-secondary)]"}`}>{plan.period}</span>}
              </div>
              <p className={`text-sm ${plan.highlight ? "text-black/60" : "text-[var(--text-secondary)]"}`}>{plan.desc}</p>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className={`flex items-center gap-2.5 text-[14px] ${plan.highlight ? "text-black/80" : "text-[var(--text-secondary)]"}`}>
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px] ${plan.highlight ? "bg-black/10" : "bg-[var(--surface-2)]"}`}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-center py-3.5 rounded-full font-bold text-[14px] tracking-wide transition-colors ${
                plan.highlight
                  ? "bg-black text-[var(--accent)]"
                  : "bg-[var(--surface-2)] text-[var(--text-primary)] hover:bg-[var(--surface)]"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {plan.cta}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
