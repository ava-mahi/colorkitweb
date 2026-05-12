"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, RotateCcw, Heart, Trash2, Download } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Toast } from "@/components/Toast";

interface GradientPreset {
  name: string;
  type: "linear" | "radial";
  colors: string[];
  angle: number;
}

interface SavedGradient {
  id: string;
  name: string;
  css: string;
  createdAt: number;
}

const presets: GradientPreset[] = [
  { name: "Sunset", type: "linear", colors: ["#f97316", "#ef4444", "#7c2d12"], angle: 135 },
  { name: "Ocean", type: "linear", colors: ["#0ea5e9", "#0284c7", "#1e3a5f"], angle: 180 },
  { name: "Berry", type: "linear", colors: ["#c026d3", "#db2777", "#be185d"], angle: 45 },
  { name: "Forest", type: "linear", colors: ["#166534", "#15803d", "#14532d"], angle: 120 },
  { name: "Aurora", type: "linear", colors: ["#8b5cf6", "#22d3ee", "#34d399"], angle: 90 },
  { name: "Midnight", type: "radial", colors: ["#1e1b4b", "#312e81", "#1e293b"], angle: 0 },
  { name: "Peach", type: "linear", colors: ["#fdba74", "#fca5a5", "#f87171"], angle: 45 },
  { name: "Ice", type: "linear", colors: ["#cffafe", "#67e8f9", "#0ea5e9"], angle: 135 },
];

export default function GradientGeneratorPage() {
  const [type, setType] = useState<"linear" | "radial">("linear");
  const [colors, setColors] = useState<string[]>(["#8b5cf6", "#22d3ee" ]);
  const [angle, setAngle] = useState(135);
  const { copied, copy } = useCopyToClipboard();
  const [savedGradients, setSavedGradients] = useLocalStorage<SavedGradient[]>("colorcraft-gradients", []);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [showSave, setShowSave] = useState(false);

  const buildCSS = useCallback(() => {
    if (type === "linear") {
      return `background: linear-gradient(${angle}deg, ${colors.join(", ")});`;
    }
    return `background: radial-gradient(circle, ${colors.join(", ")});`;
  }, [type, colors, angle]);

  const handleCopy = async () => {
    const success = await copy(buildCSS());
    if (success) {
      setToastMessage("CSS copied!");
      setToastVisible(true);
    }
  };

  const handleSave = () => {
    const name = saveName.trim() || `Gradient ${savedGradients.length + 1}`;
    const newGradient: SavedGradient = {
      id: Date.now().toString(),
      name,
      css: buildCSS(),
      createdAt: Date.now(),
    };
    setSavedGradients((prev) => [newGradient, ...prev]);
    setSaveName("");
    setShowSave(false);
    setToastMessage("Gradient saved!");
    setToastVisible(true);
  };

  const deleteSaved = (id: string) => {
    setSavedGradients((prev) => prev.filter((g) => g.id !== id));
  };

  const loadPreset = (preset: GradientPreset) => {
    setType(preset.type);
    setColors([...preset.colors]);
    setAngle(preset.angle);
  };

  const updateColor = (index: number, value: string) => {
    setColors((prev) => prev.map((c, i) => (i === index ? value : c)));
  };

  const addColor = () => {
    if (colors.length < 5) {
      setColors((prev) => [...prev, "#ffffff"]);
    }
  };

  const removeColor = (index: number) => {
    if (colors.length > 2) {
      setColors((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const exportCSS = () => {
    const blob = new Blob([buildCSS()], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gradient.css";
    a.click();
    URL.revokeObjectURL(url);
    setToastMessage("CSS exported!");
    setToastVisible(true);
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Gradient <span className="gradient-text">Generator</span>
          </h1>
          <p className="mt-3 text-muted">Create beautiful gradients and copy CSS instantly.</p>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
        >
          <div
            className="h-64 sm:h-80 w-full transition-all duration-500"
            style={
              type === "linear"
                ? { background: `linear-gradient(${angle}deg, ${colors.join(", ")})` }
                : { background: `radial-gradient(circle, ${colors.join(", ")})` }
            }
          />
        </motion.div>

        {/* Controls */}
        <div className="mt-8 rounded-2xl glass p-6">
          {/* Type selector */}
          <div className="flex gap-2 mb-6">
            {(["linear", "radial"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  type === t
                    ? "bg-violet-500 text-white"
                    : "bg-white/5 text-muted hover:bg-white/10 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Angle (linear only) */}
          {type === "linear" && (
            <div className="mb-6">
              <label className="text-sm font-medium text-muted mb-2 block">
                Angle: {angle}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="w-full accent-violet-500"
              />
            </div>
          )}

          {/* Colors */}
          <div className="mb-6">
            <label className="text-sm font-medium text-muted mb-3 block">Colors</label>
            <div className="flex flex-wrap gap-3">
              {colors.map((color, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => updateColor(idx, e.target.value)}
                    className="h-10 w-10 rounded-lg border-0 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={color.toUpperCase()}
                    onChange={(e) => updateColor(idx, e.target.value)}
                    className="w-24 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-mono text-foreground outline-none focus:border-violet-500/50"
                  />
                  {colors.length > 2 && (
                    <button
                      onClick={() => removeColor(idx)}
                      className="text-xs text-muted hover:text-rose-400 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              {colors.length < 5 && (
                <button
                  onClick={addColor}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-white/20 text-muted hover:text-foreground hover:border-white/40 transition-colors"
                >
                  +
                </button>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-violet-500/30 hover:scale-[1.02]"
            >
              <Copy className="h-4 w-4" />
              Copy CSS
            </button>
            <button
              onClick={() => setShowSave(!showSave)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-[1.02]"
            >
              <Heart className="h-4 w-4" />
              Save
            </button>
            <button
              onClick={exportCSS}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
            <button
              onClick={() => {
                setColors(["#8b5cf6", "#22d3ee"]);
                setAngle(135);
                setType("linear");
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-[1.02]"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>

          {/* Save input */}
          {showSave && (
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={saveName}
                onChange={(e) => setSaveName(e.target.value)}
                placeholder="Gradient name..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20"
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
              />
              <button
                onClick={handleSave}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
              >
                Save
              </button>
            </div>
          )}

          {/* CSS Output */}
          <div className="mt-6 rounded-xl bg-black/30 border border-white/5 p-4">
            <code className="text-xs font-mono text-muted break-all">{buildCSS()}</code>
          </div>
        </div>

        {/* Presets */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Presets</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {presets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => loadPreset(preset)}
                className="group rounded-2xl glass overflow-hidden text-left transition-all hover:scale-[1.02] glass-hover"
              >
                <div
                  className="h-24 w-full transition-all"
                  style={
                    preset.type === "linear"
                      ? { background: `linear-gradient(${preset.angle}deg, ${preset.colors.join(", ")})` }
                      : { background: `radial-gradient(circle, ${preset.colors.join(", ")})` }
                  }
                />
                <p className="p-3 text-sm font-semibold text-foreground">{preset.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Saved Gradients */}
        {savedGradients.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Saved Gradients</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {savedGradients.map((g) => (
                <div key={g.id} className="rounded-2xl glass p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{g.name}</p>
                    <code className="text-xs font-mono text-muted mt-1 block">{g.css}</code>
                  </div>
                  <button
                    onClick={() => deleteSaved(g.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
