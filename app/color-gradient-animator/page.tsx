"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function ColorGradientAnimatorPage() {
  const [color1, setColor1] = useState("#8b5cf6");
  const [color2, setColor2] = useState("#22d3ee");
  const [duration, setDuration] = useState(3);
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const css = `.animated-gradient {
  background: linear-gradient(90deg, ${color1}, ${color2});
  background-size: 200% 200%;
  animation: gradientShift ${duration}s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`;

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("CSS copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Color Gradient <span className="gradient-text">Animator</span></h1>
          <p className="mt-3 text-muted">Generate animated shifting gradient CSS.</p>
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
          <label className="text-sm text-muted mb-2 block">Duration: {duration}s</label>
          <input type="range" min="1" max="10" value={duration} onChange={(e) => setDuration(+e.target.value)} className="w-full accent-violet-500" />
        </div>

        <div className="rounded-2xl border border-white/10 overflow-hidden mb-8" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})`, backgroundSize: "200% 200%", animation: `gradientShift ${duration}s ease infinite` }}>
          <div className="h-40 flex items-center justify-center">
            <p className="text-white font-semibold text-lg drop-shadow-lg">Animated Preview</p>
          </div>
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
