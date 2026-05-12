"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { mixColors, getTextColor } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function ColorMixerPage() {
  const [color1, setColor1] = useState("#8b5cf6");
  const [color2, setColor2] = useState("#22d3ee");
  const [weight, setWeight] = useState(0.5);
  const mixed = mixColors(color1, color2, weight);
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("Copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Color <span className="gradient-text">Mixer</span></h1>
          <p className="mt-3 text-muted">Blend two colors together with adjustable weight.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <div className="rounded-2xl glass p-5">
            <label className="text-sm text-muted mb-2 block">Color 1</label>
            <div className="flex items-center gap-3">
              <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="h-10 w-10 rounded-lg border-0 cursor-pointer" />
              <input value={color1.toUpperCase()} onChange={(e) => setColor1(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-mono text-foreground outline-none" />
            </div>
          </div>
          <div className="rounded-2xl glass p-5">
            <label className="text-sm text-muted mb-2 block">Color 2</label>
            <div className="flex items-center gap-3">
              <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="h-10 w-10 rounded-lg border-0 cursor-pointer" />
              <input value={color2.toUpperCase()} onChange={(e) => setColor2(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-mono text-foreground outline-none" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl glass p-6 mb-8">
          <label className="text-sm text-muted mb-2 block">Mix: {Math.round(weight * 100)}% toward Color 2</label>
          <input type="range" min="0" max="100" value={Math.round(weight * 100)} onChange={(e) => setWeight(+e.target.value / 100)} className="w-full accent-violet-500" />
          <div className="mt-4 flex justify-between text-xs text-muted">
            <span>{color1.toUpperCase()}</span>
            <span>{color2.toUpperCase()}</span>
          </div>
        </div>

        <button onClick={() => handleCopy(mixed.toUpperCase())} className="w-full rounded-2xl border border-white/10 p-10 text-center transition-transform hover:scale-[1.01]" style={{ backgroundColor: mixed }}>
          <p className="text-2xl font-bold font-mono" style={{ color: getTextColor(mixed) }}>{mixed.toUpperCase()}</p>
          <p className="text-sm mt-2 opacity-80" style={{ color: getTextColor(mixed) }}>Click to copy</p>
        </button>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
