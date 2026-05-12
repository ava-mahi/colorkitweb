"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw,
  Lock,
  Unlock,
  Copy,
  Heart,
  Trash2,
  Shuffle,
  Download,
} from "lucide-react";
import { generateHarmoniousPalette, getTextColor, hexToRgb } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Toast } from "@/components/Toast";

interface SavedPalette {
  id: string;
  name: string;
  colors: string[];
  createdAt: number;
}

export default function PaletteGeneratorPage() {
  const [colors, setColors] = useState<string[]>(generateHarmoniousPalette());
  const [locked, setLocked] = useState<boolean[]>([false, false, false, false, false]);
  const [savedPalettes, setSavedPalettes] = useLocalStorage<SavedPalette[]>("colorcraft-palettes", []);
  const { copied, copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [showSave, setShowSave] = useState(false);

  const generate = useCallback(() => {
    const newPalette = generateHarmoniousPalette();
    setColors((prev) => prev.map((c, i) => (locked[i] ? c : newPalette[i])));
  }, [locked]);

  const toggleLock = (index: number) => {
    setLocked((prev) => prev.map((l, i) => (i === index ? !l : l)));
  };

  const handleCopy = async (text: string, label: string) => {
    const success = await copy(text);
    if (success) {
      setToastMessage(`${label} copied!`);
      setToastVisible(true);
    }
  };

  const handleSave = () => {
    const name = saveName.trim() || `Palette ${savedPalettes.length + 1}`;
    const newPalette: SavedPalette = {
      id: Date.now().toString(),
      name,
      colors: [...colors],
      createdAt: Date.now(),
    };
    setSavedPalettes((prev) => [newPalette, ...prev]);
    setSaveName("");
    setShowSave(false);
    setToastMessage("Palette saved!");
    setToastVisible(true);
  };

  const deleteSaved = (id: string) => {
    setSavedPalettes((prev) => prev.filter((p) => p.id !== id));
  };

  const loadPalette = (palette: SavedPalette) => {
    setColors(palette.colors);
    setLocked([false, false, false, false, false]);
  };

  const exportCSS = () => {
    const css = `:root {
${colors.map((c, i) => `  --color-${i + 1}: ${c};`).join("\n")}
}`;
    const blob = new Blob([css], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "palette.css";
    a.click();
    URL.revokeObjectURL(url);
    setToastMessage("CSS exported!");
    setToastVisible(true);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        generate();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [generate]);

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Palette <span className="gradient-text">Generator</span>
          </h1>
          <p className="mt-3 text-muted">
            Press Spacebar to generate. Click the lock to keep a color.
          </p>
        </motion.div>

        {/* Palette Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="flex h-[320px] sm:h-[400px]">
            {colors.map((color, idx) => {
              const textColor = getTextColor(color);
              const rgb = hexToRgb(color);
              return (
                <motion.div
                  key={idx}
                  className="group relative flex flex-1 flex-col items-center justify-end pb-6 transition-all duration-300"
                  style={{ backgroundColor: color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, backgroundColor: color }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      onClick={() => toggleLock(idx)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
                      style={{ color: textColor }}
                    >
                      {locked[idx] ? (
                        <Lock className="h-4 w-4" />
                      ) : (
                        <Unlock className="h-4 w-4" />
                      )}
                    </button>
                    <button
                      onClick={() => handleCopy(color, color.toUpperCase())}
                      className="rounded-lg bg-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-mono font-semibold transition-colors hover:bg-white/30"
                      style={{ color: textColor }}
                    >
                      {color.toUpperCase()}
                    </button>
                    {rgb && (
                      <span
                        className="text-xs font-mono opacity-70"
                        style={{ color: textColor }}
                      >
                        {rgb.r}, {rgb.g}, {rgb.b}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={generate}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-violet-500/30 hover:scale-[1.02]"
          >
            <RefreshCw className="h-4 w-4" />
            Generate
          </button>
          <button
            onClick={() => {
              setLocked([false, false, false, false, false]);
              generate();
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-[1.02]"
          >
            <Shuffle className="h-4 w-4" />
            Shuffle All
          </button>
          <button
            onClick={() => handleCopy(colors.join(", "), "Palette")}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-[1.02]"
          >
            <Copy className="h-4 w-4" />
            Copy All
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
            Export CSS
          </button>
        </div>

        {/* Save Input */}
        <AnimatePresence>
          {showSave && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mx-auto mt-4 flex max-w-md gap-2">
                <input
                  type="text"
                  value={saveName}
                  onChange={(e) => setSaveName(e.target.value)}
                  placeholder="Palette name..."
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Saved Palettes */}
        {savedPalettes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16"
          >
            <h2 className="text-xl font-bold mb-6">Saved Palettes</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {savedPalettes.map((palette) => (
                <div
                  key={palette.id}
                  className="group rounded-2xl glass overflow-hidden cursor-pointer transition-all hover:scale-[1.02]"
                  onClick={() => loadPalette(palette)}
                >
                  <div className="flex h-20">
                    {palette.colors.map((c) => (
                      <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{palette.name}</p>
                      <p className="text-xs text-muted font-mono mt-1">
                        {palette.colors.join(" ")}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteSaved(palette.id);
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
