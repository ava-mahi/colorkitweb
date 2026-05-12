"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { hexToRgb } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

function generateTailwindScale(hex: string): string[] {
  const rgb = hexToRgb(hex);
  if (!rgb) return [];
  const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return scales.map((step, i) => {
    const factor = 1 - (i / (scales.length - 1)) * 0.85;
    return `rgb(${Math.round(rgb.r * factor + (255 - 255 * factor) * (i < 5 ? 1 : 0))}, ${Math.round(rgb.g * factor + (255 - 255 * factor) * (i < 5 ? 1 : 0))}, ${Math.round(rgb.b * factor + (255 - 255 * factor) * (i < 5 ? 1 : 0))})`;
  });
}

export default function TailwindCssColorGeneratorPage() {
  const [color, setColor] = useState("#8b5cf6");
  const [name, setName] = useState("violet");
  const scale = generateTailwindScale(color);
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("Copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Tailwind CSS Color <span className="gradient-text">Generator</span></h1>
          <p className="mt-3 text-muted">Build a full Tailwind-compatible color scale from a single hex.</p>
        </motion.div>

        <div className="rounded-2xl glass p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-12 w-12 rounded-lg border-0 cursor-pointer" />
          <input value={color.toUpperCase()} onChange={(e) => setColor(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-mono text-foreground outline-none" />
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-40 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none" placeholder="Color name..." />
        </div>

        <div className="grid gap-3">
          {scale.map((c, i) => {
            const step = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950][i];
            return (
              <button key={step} onClick={() => handleCopy(c)} className="flex items-center gap-4 rounded-xl px-5 py-3 text-left transition-transform hover:scale-[1.01]" style={{ backgroundColor: c }}>
                <span className="text-sm font-mono font-semibold w-16" style={{ color: i > 5 ? "#fff" : "#000" }}>{name}-{step}</span>
                <span className="text-sm font-mono" style={{ color: i > 5 ? "#fff" : "#000" }}>{c}</span>
              </button>
            );
          })}
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
