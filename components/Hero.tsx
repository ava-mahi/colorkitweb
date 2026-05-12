"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Palette, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-20 -right-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            Free premium color tools for designers
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Craft beautiful{" "}
          <span className="gradient-text">color palettes</span> and{" "}
          <span className="gradient-text">gradients</span> in seconds
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted"
        >
          Generate harmonious color schemes, build stunning gradients, and ensure your designs meet accessibility standards — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/palette-generator"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-violet-500/30 hover:scale-[1.02]"
          >
            <Palette className="h-4 w-4" />
            Generate Palette
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/gradient-generator"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-[1.02]"
          >
            <Zap className="h-4 w-4 text-cyan-400" />
            Try Gradient Tool
          </Link>
        </motion.div>

        {/* Mini palette preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-16 max-w-xl"
        >
          <div className="flex h-24 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            {["#8b5cf6", "#6366f1", "#22d3ee", "#34d399", "#fbbf24"].map(
              (color, i) => (
                <motion.div
                  key={i}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                />
              )
            )}
          </div>
          <div className="mt-3 flex justify-center gap-4 text-xs text-muted font-mono">
            {["#8B5CF6", "#6366F1", "#22D3EE", "#34D399", "#FBBF24"].map(
              (hex) => (
                <span key={hex}>{hex}</span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
