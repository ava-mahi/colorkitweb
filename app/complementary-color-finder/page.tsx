"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getComplementaryColor, getTextColor } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function ComplementaryColorFinderPage() {
  const [color, setColor] = useState("#8b5cf6");
  const complementary = getComplementaryColor(color);
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("Copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Complementary Color <span className="gradient-text">Finder</span></h1>
          <p className="mt-3 text-muted">Find the color opposite your chosen hue on the wheel.</p>
        </motion.div>

        <div className="rounded-2xl glass p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-12 w-12 rounded-lg border-0 cursor-pointer" />
          <input value={color.toUpperCase()} onChange={(e) => setColor(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-mono text-foreground outline-none" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button onClick={() => handleCopy(color.toUpperCase())} className="rounded-2xl border border-white/10 p-8 text-center transition-transform hover:scale-[1.02]" style={{ backgroundColor: color }}>
            <p className="text-xs font-mono font-semibold" style={{ color: getTextColor(color) }}>{color.toUpperCase()}</p>
            <p className="text-sm mt-2 opacity-80" style={{ color: getTextColor(color) }}>Original</p>
          </button>
          <button onClick={() => handleCopy(complementary.toUpperCase())} className="rounded-2xl border border-white/10 p-8 text-center transition-transform hover:scale-[1.02]" style={{ backgroundColor: complementary }}>
            <p className="text-xs font-mono font-semibold" style={{ color: getTextColor(complementary) }}>{complementary.toUpperCase()}</p>
            <p className="text-sm mt-2 opacity-80" style={{ color: getTextColor(complementary) }}>Complementary</p>
          </button>
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
