"use client";

import { motion } from "framer-motion";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const popularPalettes = [
  { name: "Neon Nights", colors: ["#8b5cf6", "#ec4899", "#22d3ee", "#f59e0b", "#10b981"] },
  { name: "Ocean Breeze", colors: ["#0ea5e9", "#0284c7", "#0369a1", "#7dd3fc", "#e0f2fe"] },
  { name: "Sunset Glow", colors: ["#f97316", "#ef4444", "#f59e0b", "#fde047", "#7c2d12"] },
  { name: "Forest Mist", colors: ["#166534", "#15803d", "#22c55e", "#86efac", "#dcfce7"] },
  { name: "Berry Smoothie", colors: ["#be185d", "#db2777", "#f472b6", "#fbcfe8", "#831843"] },
  { name: "Midnight", colors: ["#1e1b4b", "#312e81", "#4338ca", "#6366f1", "#a5b4fc"] },
];

export function PopularPalettes() {
  const { copied, copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = async (palette: string[]) => {
    const text = palette.join(", ");
    const success = await copy(text);
    if (success) {
      setToastMessage("Palette copied to clipboard!");
      setToastVisible(true);
    }
  };

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
            Trending <span className="gradient-text">Palettes</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Explore palettes loved by the community. Click any to copy.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularPalettes.map((palette, idx) => (
            <motion.div
              key={palette.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group cursor-pointer rounded-2xl glass overflow-hidden transition-all duration-300 hover:scale-[1.02] glass-hover"
              onClick={() => handleCopy(palette.colors)}
            >
              <div className="flex h-32">
                {palette.colors.map((color) => (
                  <div
                    key={color}
                    className="flex-1 transition-all duration-300 group-hover:flex-[1.2]"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{palette.name}</h3>
                  <p className="text-xs text-muted font-mono mt-1">
                    {palette.colors.join(" ")}
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-muted group-hover:text-foreground transition-colors">
                  <Copy className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </section>
  );
}
