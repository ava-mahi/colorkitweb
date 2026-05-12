"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Copy } from "lucide-react";
import { getRandomHex, getTextColor } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function RandomColorPalettePage() {
  const [colors, setColors] = useState(() => Array.from({ length: 5 }, () => getRandomHex()));
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const generate = () => setColors(Array.from({ length: 5 }, () => getRandomHex()));

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("Copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Random Color <span className="gradient-text">Palette</span></h1>
          <p className="mt-3 text-muted">Generate completely random color combinations.</p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <button onClick={generate} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-violet-500/30 hover:scale-[1.02]">
            <RefreshCw className="h-4 w-4" />
            Generate New
          </button>
        </div>

        <div className="flex h-80 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {colors.map((color, i) => (
            <motion.button key={i} onClick={() => handleCopy(color.toUpperCase())} className="group relative flex-1 flex flex-col items-center justify-end pb-6 transition-all duration-300" style={{ backgroundColor: color }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
              <span className="text-xs font-mono font-semibold opacity-0 transition-opacity group-hover:opacity-100" style={{ color: getTextColor(color) }}>{color.toUpperCase()}</span>
            </motion.button>
          ))}
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
