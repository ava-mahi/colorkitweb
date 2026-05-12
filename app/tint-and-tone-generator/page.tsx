"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { generateTints, generateTones, getTextColor } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function TintAndToneGeneratorPage() {
  const [color, setColor] = useState("#8b5cf6");
  const [count, setCount] = useState(10);
  const [mode, setMode] = useState<"tints" | "tones">("tints");
  const colors = mode === "tints" ? generateTints(color, count) : generateTones(color, count);
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Tint & Tone <span className="gradient-text">Generator</span></h1>
          <p className="mt-3 text-muted">Create lighter tints or muted tones from any color.</p>
        </motion.div>

        <div className="rounded-2xl glass p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-12 w-12 rounded-lg border-0 cursor-pointer" />
          <input value={color.toUpperCase()} onChange={(e) => setColor(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-mono text-foreground outline-none" />
          <div className="flex gap-2">
            {(["tints", "tones"] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)} className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${mode === m ? "bg-violet-500 text-white" : "bg-white/5 text-muted hover:bg-white/10"}`}>{m}</button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-muted">Count:</label>
            <input type="range" min="3" max="20" value={count} onChange={(e) => setCount(+e.target.value)} className="accent-violet-500" />
            <span className="text-sm font-mono w-6">{count}</span>
          </div>
        </div>

        <div className="space-y-2">
          {colors.map((c, i) => (
            <button key={i} onClick={() => handleCopy(c.toUpperCase())} className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-transform hover:scale-[1.01]" style={{ backgroundColor: c }}>
              <span className="text-xs font-mono font-semibold" style={{ color: getTextColor(c) }}>{c.toUpperCase()}</span>
              <span className="ml-auto text-xs opacity-70" style={{ color: getTextColor(c) }}>{mode === "tints" ? "Tint" : "Tone"} {i + 1}</span>
            </button>
          ))}
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
