"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { findClosestColorName, hexToRgb } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function ColorNameFinderPage() {
  const [color, setColor] = useState("#8b5cf6");
  const name = findClosestColorName(color);
  const rgb = hexToRgb(color);
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = async (text: string, label: string) => {
    const success = await copy(text);
    if (success) { setToastMessage(`${label} copied!`); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Color Name <span className="gradient-text">Finder</span></h1>
          <p className="mt-3 text-muted">Discover the closest CSS color name for any hex code.</p>
        </motion.div>

        <div className="rounded-2xl glass p-6 mb-6 flex flex-col items-center gap-4">
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-28 w-full rounded-xl border-0 cursor-pointer" />
          <input value={color.toUpperCase()} onChange={(e) => setColor(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-center text-sm font-mono text-foreground outline-none" />
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} key={name} className="rounded-2xl glass p-8 text-center">
          <p className="text-sm text-muted mb-2">Closest match</p>
          <h2 className="text-4xl font-bold gradient-text capitalize mb-4">{name}</h2>
          {rgb && (
            <div className="flex justify-center gap-4 text-xs font-mono text-muted">
              <span>RGB: {rgb.r}, {rgb.g}, {rgb.b}</span>
            </div>
          )}
          <button onClick={() => handleCopy(name, "Color name")} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]">
            <Search className="h-4 w-4" />
            Copy Name
          </button>
        </motion.div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
