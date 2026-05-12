"use client";

import { motion } from "framer-motion";
import { Palette, Layers, Contrast, Download, Wand2, Shield } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Smart Palette Generator",
    description: "Generate harmonious 5-color palettes with one click. Lock colors you love and shuffle the rest.",
    color: "from-violet-500/20 to-fuchsia-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Layers,
    title: "Gradient Builder",
    description: "Create linear and radial gradients with live preview. Copy CSS instantly or save for later.",
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Contrast,
    title: "Contrast Checker",
    description: "Verify WCAG AA and AAA compliance in real-time. Ensure your text is readable for everyone.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Wand2,
    title: "One-Click Export",
    description: "Copy hex codes, RGB values, or full CSS with a single click. Built for fast workflows.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Download,
    title: "Save & Organize",
    description: "Bookmark your favorite palettes and gradients locally. Your collection, always available.",
    color: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All data stays in your browser. No accounts, no tracking, no cloud dependencies.",
    color: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-400",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Features() {
  return (
    <section className="px-6 py-24" id="features">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to{" "}
            <span className="gradient-text">work with color</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            A complete toolkit designed for speed, accuracy, and creative freedom.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative rounded-2xl glass p-6 transition-all duration-300 glass-hover glow-purple"
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}
              >
                <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
