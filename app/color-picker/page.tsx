"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { hexToRgb, hexToHsl, hexToHsv, hexToCmyk } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function ColorPickerPage() {
  const [color, setColor] = useState("#8b5cf6");
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const rgb = hexToRgb(color);
  const hsl = hexToHsl(color);
  const hsv = hexToHsv(color);
  const cmyk = hexToCmyk(color);

  const handleCopy = async (text: string, label: string) => {
    const success = await copy(text);
    if (success) {
      setToastMessage(`${label} copied!`);
      setToastVisible(true);
    }
  };

  const format = (v: number) => v.toString().padStart(2, "0");

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Color <span className="gradient-text">Picker</span></h1>
          <p className="mt-3 text-muted">Pick a color and see every format instantly.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl glass p-6 flex flex-col items-center justify-center gap-4">
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-32 w-full rounded-xl border-0 cursor-pointer" />
            <input type="text" value={color.toUpperCase()} onChange={(e) => setColor(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-center text-sm font-mono text-foreground outline-none focus:border-violet-500/50" />
          </div>

          <div className="rounded-2xl glass p-6 space-y-4">
            {[
              { label: "HEX", value: color.toUpperCase() },
              { label: "RGB", value: rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "-" },
              { label: "HSL", value: hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : "-" },
              { label: "HSV", value: hsv ? `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)` : "-" },
              { label: "CMYK", value: cmyk ? `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)` : "-" },
            ].map((item) => (
              <button key={item.label} onClick={() => handleCopy(item.value, item.label)} className="flex w-full items-center justify-between rounded-xl border border-white/5 bg-white/3 px-4 py-3 text-sm transition-colors hover:bg-white/5">
                <span className="text-muted font-medium">{item.label}</span>
                <span className="font-mono text-foreground">{item.value}</span>
                <Copy className="h-3.5 w-3.5 text-muted" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
