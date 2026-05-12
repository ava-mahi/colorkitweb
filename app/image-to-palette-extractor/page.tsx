"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, ImageIcon } from "lucide-react";
import { extractDominantColors, getTextColor } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function ImageToPaletteExtractorPage() {
  const [colors, setColors] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = 300;
      canvas.height = 300;
      ctx.drawImage(img, 0, 0, 300, 300);
      const data = ctx.getImageData(0, 0, 300, 300).data;
      const palette = extractDominantColors(data, 5);
      setColors(palette);
    };
    img.src = url;
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  };

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("Copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Image to Palette <span className="gradient-text">Extractor</span></h1>
          <p className="mt-3 text-muted">Upload an image and extract its dominant colors.</p>
        </motion.div>

        <label onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className="flex flex-col items-center justify-center rounded-2xl glass border-2 border-dashed border-white/10 p-12 cursor-pointer transition-colors hover:border-white/20">
          <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
          <ImageIcon className="h-10 w-10 text-muted mb-3" />
          <p className="text-sm text-muted">Drop an image here or click to upload</p>
        </label>

        <canvas ref={canvasRef} className="hidden" />

        {colors.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
            <div className="flex h-32 rounded-2xl border border-white/10 overflow-hidden">
              {colors.map((c, i) => (
                <button key={i} onClick={() => handleCopy(c.toUpperCase())} className="group relative flex-1 flex items-end justify-center pb-3 transition-all hover:flex-[1.3]" style={{ backgroundColor: c }}>
                  <span className="text-xs font-mono font-semibold opacity-0 transition-opacity group-hover:opacity-100" style={{ color: getTextColor(c) }}>{c.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
