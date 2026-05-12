"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { generateShades, getTextColor } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function ColorShadesGeneratorPage() {
  const [color, setColor] = useState("#8b5cf6");
  const [count, setCount] = useState(10);
  const shades = generateShades(color, count);
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Color Shades <span className="gradient-text">Generator</span></h1>
          <p className="mt-3 text-muted">Generate darker variations of any color.</p>
        </motion.div>

        <div className="rounded-2xl glass p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-12 w-12 rounded-lg border-0 cursor-pointer" />
          <input value={color.toUpperCase()} onChange={(e) => setColor(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-mono text-foreground outline-none" />
          <div className="flex items-center gap-2">
            <label className="text-sm text-muted">Shades:</label>
            <input type="range" min="3" max="20" value={count} onChange={(e) => setCount(+e.target.value)} className="accent-violet-500" />
            <span className="text-sm font-mono w-6">{count}</span>
          </div>
        </div>

        <div className="space-y-2">
          {shades.map((shade, i) => (
            <button key={i} onClick={() => handleCopy(shade.toUpperCase())} className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-transform hover:scale-[1.01]" style={{ backgroundColor: shade }}>
              <span className="text-xs font-mono font-semibold" style={{ color: getTextColor(shade) }}>{shade.toUpperCase()}</span>
              <span className="ml-auto text-xs opacity-70" style={{ color: getTextColor(shade) }}>Shade {i + 1}</span>
            </button>
          ))}
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
