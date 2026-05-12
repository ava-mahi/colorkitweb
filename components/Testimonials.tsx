"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "UI/UX Designer",
    content:
      "ColorCraft completely changed how I start projects. The palette generator consistently produces combinations I would have never thought of. It is now the first tab I open for every new design.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Frontend Developer",
    content:
      "The contrast checker saved me from accessibility issues more times than I can count. Having it built into the same tool as the palette generator makes my workflow incredibly fast.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Brand Strategist",
    content:
      "I have used dozens of color tools over the years. ColorCraft is the first one that feels truly premium. The gradient builder alone is worth bookmarking the site for.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by <span className="gradient-text">designers</span> everywhere
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            See what creatives are saying about ColorCraft.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative rounded-2xl glass p-6 transition-all duration-300 glass-hover"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-white/5" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">{t.content}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
