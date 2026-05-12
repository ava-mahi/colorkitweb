"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function GlassmorphismColorGeneratorPage() {
  const [bgColor, setBgColor] = useState("#0a0a0f");
  const [cardColor, setCardColor] = useState("#8b5cf6");
  const [opacity, setOpacity] = useState(15);
  const [blur, setBlur] = useState(12);
  const [border, setBorder] = useState(20);
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const css = `background: rgba(${parseInt(cardColor.slice(1, 3), 16)}, ${parseInt(cardColor.slice(3, 5), 16)}, ${parseInt(cardColor.slice(5, 7), 16)}, ${opacity / 100});
backdrop-filter: blur(${blur}px);
-webkit-backdrop-filter: blur(${blur}px);
border: 1px solid rgba(255, 255, 255, ${border / 100});
border-radius: 16px;`;

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("CSS copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Glassmorphism <span className="gradient-text">Generator</span></h1>
          <p className="mt-3 text-muted">Create beautiful glass-like UI effects with custom CSS.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl glass p-5">
              <label className="text-sm text-muted mb-2 block">Background Color</label>
              <div className="flex items-center gap-3">
                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="h-10 w-10 rounded-lg border-0 cursor-pointer" />
                <input value={bgColor.toUpperCase()} onChange={(e) => setBgColor(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-mono text-foreground outline-none" />
              </div>
            </div>
            <div className="rounded-2xl glass p-5">
              <label className="text-sm text-muted mb-2 block">Card Tint</label>
              <div className="flex items-center gap-3">
                <input type="color" value={cardColor} onChange={(e) => setCardColor(e.target.value)} className="h-10 w-10 rounded-lg border-0 cursor-pointer" />
                <input value={cardColor.toUpperCase()} onChange={(e) => setCardColor(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-mono text-foreground outline-none" />
              </div>
            </div>
            <div className="rounded-2xl glass p-5 space-y-4">
              <div>
                <label className="text-sm text-muted mb-1 block">Opacity: {opacity}%</label>
                <input type="range" min="0" max="50" value={opacity} onChange={(e) => setOpacity(+e.target.value)} className="w-full accent-violet-500" />
              </div>
              <div>
                <label className="text-sm text-muted mb-1 block">Blur: {blur}px</label>
                <input type="range" min="0" max="40" value={blur} onChange={(e) => setBlur(+e.target.value)} className="w-full accent-violet-500" />
              </div>
              <div>
                <label className="text-sm text-muted mb-1 block">Border brightness: {border}%</label>
                <input type="range" min="0" max="50" value={border} onChange={(e) => setBorder(+e.target.value)} className="w-full accent-violet-500" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl p-10 flex items-center justify-center" style={{ backgroundColor: bgColor, minHeight: 280 }}>
              <div className="p-8 text-center" style={{ background: `rgba(${parseInt(cardColor.slice(1, 3), 16)}, ${parseInt(cardColor.slice(3, 5), 16)}, ${parseInt(cardColor.slice(5, 7), 16)}, ${opacity / 100})`, backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)`, border: `1px solid rgba(255,255,255,${border / 100})`, borderRadius: 16 }}>
                <p className="text-lg font-semibold text-white">Glass Card</p>
                <p className="text-sm text-white/70 mt-1">Preview your effect</p>
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
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
