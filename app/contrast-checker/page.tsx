"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle2, XCircle } from "lucide-react";
import { getContrastRatio, getContrastScore, getTextColor } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function ContrastCheckerPage() {
  const [fgColor, setFgColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#0a0a0f");
  const { copied, copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const ratio = useMemo(() => getContrastRatio(fgColor, bgColor), [fgColor, bgColor]);
  const score = useMemo(() => getContrastScore(ratio), [ratio]);

  const handleCopy = async (text: string, label: string) => {
    const success = await copy(text);
    if (success) {
      setToastMessage(`${label} copied!`);
      setToastVisible(true);
    }
  };

  const getScoreColor = () => {
    if (ratio >= 7) return "text-emerald-400";
    if (ratio >= 4.5) return "text-amber-400";
    if (ratio >= 3) return "text-orange-400";
    return "text-rose-400";
  };

  const getBgColor = () => {
    if (ratio >= 7) return "bg-emerald-500/10 border-emerald-500/20";
    if (ratio >= 4.5) return "bg-amber-500/10 border-amber-500/20";
    if (ratio >= 3) return "bg-orange-500/10 border-orange-500/20";
    return "bg-rose-500/10 border-rose-500/20";
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contrast <span className="gradient-text">Checker</span>
          </h1>
          <p className="mt-3 text-muted">
            Verify WCAG accessibility compliance in real-time.
          </p>
        </motion.div>

        {/* Color Pickers */}
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          <div className="rounded-2xl glass p-6">
            <label className="text-sm font-medium text-muted mb-3 block">Text Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="h-12 w-12 rounded-xl border-0 cursor-pointer"
              />
              <input
                type="text"
                value={fgColor.toUpperCase()}
                onChange={(e) => setFgColor(e.target.value)}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-mono text-foreground outline-none focus:border-violet-500/50"
              />
            </div>
          </div>
          <div className="rounded-2xl glass p-6">
            <label className="text-sm font-medium text-muted mb-3 block">Background Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-12 w-12 rounded-xl border-0 cursor-pointer"
              />
              <input
                type="text"
                value={bgColor.toUpperCase()}
                onChange={(e) => setBgColor(e.target.value)}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-mono text-foreground outline-none focus:border-violet-500/50"
              />
            </div>
          </div>
        </div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl mb-8"
        >
          <div
            className="p-10 sm:p-16 text-center transition-colors duration-300"
            style={{ backgroundColor: bgColor, color: fgColor }}
          >
            <p className="text-4xl sm:text-5xl font-bold mb-4">Heading Text</p>
            <p className="text-lg sm:text-xl mb-2">
              This is how your body text looks with the chosen colors.
            </p>
            <p className="text-sm opacity-75">
              Smaller text and secondary content appears like this.
            </p>
          </div>
        </motion.div>

        {/* Score Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`rounded-2xl border p-8 mb-8 ${getBgColor()}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-sm text-muted mb-1">Contrast Ratio</p>
              <p className={`text-4xl font-bold ${getScoreColor()}`}>
                {ratio.toFixed(2)}:1
              </p>
              <p className={`text-sm font-medium mt-1 ${getScoreColor()}`}>
                {score.level}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleCopy(`${ratio.toFixed(2)}:1`, "Ratio")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-white/10"
              >
                <Copy className="h-4 w-4" />
                Copy Ratio
              </button>
            </div>
          </div>
        </motion.div>

        {/* WCAG Results */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "AA Normal", pass: score.aa, desc: "4.5:1" },
            { label: "AA Large", pass: score.aaLarge, desc: "3:1" },
            { label: "AAA Normal", pass: score.aaa, desc: "7:1" },
            { label: "AAA Large", pass: score.aaaLarge, desc: "4.5:1" },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border p-5 ${
                item.pass
                  ? "bg-emerald-500/5 border-emerald-500/20"
                  : "bg-rose-500/5 border-rose-500/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                {item.pass ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                ) : (
                  <XCircle className="h-5 w-5 text-rose-400" />
                )}
              </div>
              <p className="text-xs text-muted">Required: {item.desc}</p>
              <p className={`text-sm font-semibold mt-1 ${item.pass ? "text-emerald-400" : "text-rose-400"}`}>
                {item.pass ? "Pass" : "Fail"}
              </p>
            </div>
          ))}
        </div>

        {/* Smart Suggestion */}
        {ratio < 4.5 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-2xl glass p-6"
          >
            <p className="text-sm font-semibold text-foreground mb-2">Suggested Fix</p>
            <p className="text-sm text-muted mb-4">
              Try adjusting your colors to meet WCAG AA standards. Here is a suggested combination:
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const lum = getTextColor(bgColor) === "#ffffff" ? "#ffffff" : "#0a0a0f";
                  setFgColor(lum);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-[1.02]"
              >
                Auto-Fix Contrast
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
