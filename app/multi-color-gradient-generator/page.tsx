"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Plus, Trash2 } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function MultiColorGradientGeneratorPage() {
  const [colors, setColors] = useState<string[]>(["#8b5cf6", "#6366f1", "#22d3ee", "#34d399"]);
  const [angle, setAngle] = useState(135);
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const css = `background: linear-gradient(${angle}deg, ${colors.join(", ")});`;

  const updateColor = (i: number, v: string) => setColors((prev) => prev.map((c, idx) => idx === i ? v : c));
  const addColor = () => { if (colors.length < 8) setColors((prev) => [...prev, "#ffffff"]); };
  const removeColor = (i: number) => { if (colors.length > 2) setColors((prev) => prev.filter((_, idx) => idx !== i)); };

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("CSS copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Multi-Color Gradient <span className="gradient-text">Generator</span></h1>
          <p className="mt-3 text-muted">Build gradients with 2 to 8 colors.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl mb-8">
          <div className="h-48 sm:h-64 w-full transition-all duration-500" style={{ background: `linear-gradient(${angle}deg, ${colors.join(", ")})` }} />
        </motion.div>

        <div className="rounded-2xl glass p-6 mb-6">
          <label className="text-sm text-muted mb-2 block">Angle: {angle}°</label>
          <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(+e.target.value)} className="w-full accent-violet-500" />
        </div>

        <div className="grid gap-3 mb-6">
          {colors.map((c, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl glass p-3">
              <input type="color" value={c} onChange={(e) => updateColor(i, e.target.value)} className="h-10 w-10 rounded-lg border-0 cursor-pointer" />
              <input value={c.toUpperCase()} onChange={(e) => updateColor(i, e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-mono text-foreground outline-none" />
              {colors.length > 2 && (
                <button onClick={() => removeColor(i)} className="flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:text-rose-400 hover:bg-rose-500/10 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
          {colors.length < 8 && (
            <button onClick={addColor} className="flex h-12 w-full items-center justify-center rounded-xl border border-dashed border-white/20 text-muted hover:text-foreground hover:border-white/40 transition-colors">
              <Plus className="h-5 w-5 mr-2" />
              Add Color
            </button>
          )}
        </div>

        <div className="rounded-2xl glass p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted">CSS Output</span>
            <button onClick={() => handleCopy(css)} className="inline-flex items-center gap-1 rounded-lg bg-violet-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-violet-600">
              <Copy className="h-3 w-3" />
              Copy
            </button>
          </div>
          <pre className="rounded-xl bg-black/30 p-4 text-xs font-mono text-muted overflow-x-auto">{css}</pre>
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
