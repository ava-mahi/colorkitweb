"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, ArrowRightLeft } from "lucide-react";
import { hexToRgb, rgbToHex, hexToHsl, hslToHex, hexToHsv, hsvToHex } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

type ColorFormat = "hex" | "rgb" | "hsl" | "hsv";

export default function ColorCodeConverterPage() {
  const [input, setInput] = useState("#8b5cf6");
  const [fromFormat, setFromFormat] = useState<ColorFormat>("hex");
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const parseInput = (): string | null => {
    const v = input.trim().toLowerCase();
    if (fromFormat === "hex") return v.startsWith("#") ? v : `#${v}`;
    if (fromFormat === "rgb") {
      const m = v.match(/(\d+).*(\d+).*(\d+)/);
      return m ? rgbToHex(+m[1], +m[2], +m[3]) : null;
    }
    if (fromFormat === "hsl") {
      const m = v.match(/(\d+).*(\d+).*(\d+)/);
      return m ? hslToHex(+m[1], +m[2], +m[3]) : null;
    }
    if (fromFormat === "hsv") {
      const m = v.match(/(\d+).*(\d+).*(\d+)/);
      return m ? hsvToHex(+m[1], +m[2], +m[3]) : null;
    }
    return null;
  };

  const hex = parseInput();
  const rgb = hex ? hexToRgb(hex) : null;
  const hsl = hex ? hexToHsl(hex) : null;
  const hsv = hex ? hexToHsv(hex) : null;

  const results = [
    { label: "HEX", value: hex?.toUpperCase() || "-" },
    { label: "RGB", value: rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "-" },
    { label: "HSL", value: hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : "-" },
    { label: "HSV", value: hsv ? `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)` : "-" },
  ];

  const handleCopy = async (text: string, label: string) => {
    const success = await copy(text);
    if (success) { setToastMessage(`${label} copied!`); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Color Code <span className="gradient-text">Converter</span></h1>
          <p className="mt-3 text-muted">Convert between HEX, RGB, HSL, and HSV instantly.</p>
        </motion.div>

        <div className="rounded-2xl glass p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <select value={fromFormat} onChange={(e) => setFromFormat(e.target.value as ColorFormat)} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none">
              {(["hex", "rgb", "hsl", "hsv"] as ColorFormat[]).map((f) => <option key={f} value={f}>{f.toUpperCase()}</option>)}
            </select>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Enter ${fromFormat.toUpperCase()} value...`} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-violet-500/50" />
          </div>
          {hex && <div className="h-20 w-full rounded-xl border border-white/10" style={{ backgroundColor: hex }} />}
        </div>

        <div className="grid gap-3">
          {results.map((r) => (
            <button key={r.label} onClick={() => handleCopy(r.value, r.label)} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/3 px-5 py-4 text-sm transition-colors hover:bg-white/5">
              <span className="text-muted font-medium w-16">{r.label}</span>
              <span className="font-mono text-foreground">{r.value}</span>
              <Copy className="h-4 w-4 text-muted" />
            </button>
          ))}
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
