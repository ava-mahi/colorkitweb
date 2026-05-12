"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { hexToHsl, hslToHex, getTextColor } from "@/utils/colors";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Toast } from "@/components/Toast";

export default function ColorWheelPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState("#8b5cf6");
  const [dragging, setDragging] = useState(false);
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const r = Math.min(cx, cy) - 10;
    for (let angle = 0; angle < 360; angle++) {
      const rad = (angle * Math.PI) / 180;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, rad, rad + (Math.PI / 180) + 0.01);
      ctx.closePath();
      ctx.fillStyle = `hsl(${angle}, 100%, 50%)`;
      ctx.fill();
    }
  };

  useEffect(() => { drawWheel(); }, []);

  const pickColor = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - canvas.width / 2;
    const y = e.clientY - rect.top - canvas.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    const hue = Math.round((angle + 360) % 360);
    const hsl = hexToHsl(color);
    setColor(hslToHex(hue, hsl?.s ?? 70, hsl?.l ?? 50));
  };

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) { setToastMessage("Copied!"); setToastVisible(true); }
  };

  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Color <span className="gradient-text">Wheel</span></h1>
          <p className="mt-3 text-muted">Click anywhere on the wheel to pick a hue.</p>
        </motion.div>

        <div className="rounded-2xl glass p-6 flex flex-col items-center gap-6">
          <canvas ref={canvasRef} width={320} height={320} className="rounded-full cursor-crosshair" onMouseDown={(e) => { setDragging(true); pickColor(e); }} onMouseMove={(e) => { if (dragging) pickColor(e); }} onMouseUp={() => setDragging(false)} onMouseLeave={() => setDragging(false)} />
          <button onClick={() => handleCopy(color.toUpperCase())} className="w-full rounded-xl border border-white/10 p-5 text-center transition-transform hover:scale-[1.01]" style={{ backgroundColor: color }}>
            <p className="text-lg font-bold font-mono" style={{ color: getTextColor(color) }}>{color.toUpperCase()}</p>
          </button>
        </div>
      </div>
      <Toast message={toastMessage} visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
