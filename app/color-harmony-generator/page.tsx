"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getAnalogousColors, getTriadicColors, getSplitComplementaryColors, getTetradicColors, getTextColor } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

type HarmonyType = "analogous" | "triadic" | "split" | "tetradic";

const harmonyLabels: Record<HarmonyType, string> = {
  analogous: "Analogous",
  triadic: "Triadic",
  split: "Split Complementary",
  tetradic: "Tetradic (Rectangle)",
};

export default function ColorHarmonyGeneratorPage() {
  const [color, setColor] = useState("#8b5cf6");
  const [type, setType] = useState<HarmonyType>("analogous");
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const palettes: Record<HarmonyType, () => string[]> = {
    analogous: () => getAnalogousColors(color),
    triadic: () => getTriadicColors(color),
    split: () => getSplitComplementaryColors(color),
    tetradic: () => getTetradicColors(color),
  };

  const colors = palettes[type]();

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("Copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Color Harmony <span className="gradient-text">Generator</span></h1>
          <p className="mt-3 text-muted">Build palettes based on classic color theory relationships.</p>
        </motion.div>

        <div className="rounded-2xl glass p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-12 w-12 rounded-lg border-0 cursor-pointer" />
          <input value={color.toUpperCase()} onChange={(e) => setColor(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-mono text-foreground outline-none" />
          <div className="flex gap-2 flex-wrap">
            {(Object.keys(harmonyLabels) as HarmonyType[]).map((t) => (
              <button key={t} onClick={() => setType(t)} className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${type === t ? "bg-violet-500 text-white" : "bg-white/5 text-muted hover:bg-white/10"}`}>{harmonyLabels[t]}</button>
            ))}
          </div>
        </div>

        <div className="flex h-48 rounded-2xl border border-white/10 overflow-hidden shadow-xl">
          {colors.map((c, i) => (
            <button key={i} onClick={() => handleCopy(c.toUpperCase())} className="group relative flex-1 flex items-end justify-center pb-4 transition-all duration-300 hover:flex-[1.3]" style={{ backgroundColor: c }}>
              <span className="text-xs font-mono font-semibold opacity-0 transition-opacity group-hover:opacity-100" style={{ color: getTextColor(c) }}>{c.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
