"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Menu,
  X,
  Layers,
  Contrast,
  BookOpen,
  Sparkles,
  ChevronDown,
  Wand2,
  Eye,
  Paintbrush,
  Pipette,
  Blend,
  Image as ImageIcon,
  Grid3X3,
  Gauge,
} from "lucide-react";

const mainLinks = [
  { href: "/", label: "Home", icon: Sparkles },
  { href: "/blog", label: "Blog", icon: BookOpen },
];

const toolSections = [
  {
    title: "Generators",
    tools: [
      { href: "/palette-generator", label: "Palette Generator", icon: Palette },
      { href: "/gradient-generator", label: "Gradient Generator", icon: Layers },
      { href: "/random-color-palette", label: "Random Palette", icon: Wand2 },
      { href: "/pastel-color-generator", label: "Pastel Generator", icon: Paintbrush },
      { href: "/neon-color-generator", label: "Neon Generator", icon: Sparkles },
      { href: "/color-shades-generator", label: "Shades Generator", icon: Grid3X3 },
      { href: "/tint-and-tone-generator", label: "Tint & Tone", icon: Grid3X3 },
      { href: "/multi-color-gradient-generator", label: "Multi Gradient", icon: Layers },
      { href: "/color-gradient-animator", label: "Animated Gradient", icon: Sparkles },
      { href: "/tailwind-css-color-generator", label: "Tailwind Colors", icon: Gauge },
    ],
  },
  {
    title: "Converters & Pickers",
    tools: [
      { href: "/color-picker", label: "Color Picker", icon: Pipette },
      { href: "/color-code-converter", label: "Code Converter", icon: Blend },
      { href: "/color-name-finder", label: "Name Finder", icon: Eye },
      { href: "/image-to-palette-extractor", label: "Image Extractor", icon: ImageIcon },
    ],
  },
  {
    title: "Harmony & Checkers",
    tools: [
      { href: "/contrast-checker", label: "Contrast Checker", icon: Contrast },
      { href: "/complementary-color-finder", label: "Complementary", icon: Palette },
      { href: "/color-harmony-generator", label: "Harmony Generator", icon: Wand2 },
      { href: "/color-wheel", label: "Color Wheel", icon: Palette },
      { href: "/color-mixer", label: "Color Mixer", icon: Blend },
      { href: "/color-blindness-simulator", label: "Blindness Sim", icon: Eye },
    ],
  },
  {
    title: "CSS Tools",
    tools: [
      { href: "/glassmorphism-color-generator", label: "Glassmorphism", icon: Layers },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
            <Palette className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight gradient-text">
            ColorCraft
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <Wand2 className="h-4 w-4" />
              Tools
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {toolsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-[560px] rounded-2xl border border-white/10 bg-[#0e0e14] p-5 shadow-2xl"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {toolSections.map((section) => (
                      <div key={section.title}>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">{section.title}</p>
                        <div className="space-y-0.5">
                          {section.tools.map((tool) => (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              onClick={() => setToolsOpen(false)}
                              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                            >
                              <tool.icon className="h-3.5 w-3.5" />
                              {tool.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          className="md:hidden rounded-lg p-2 text-muted hover:bg-white/5 hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <div className="flex flex-col gap-1 px-6 py-4 max-h-[70vh] overflow-y-auto">
              {mainLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground">
                  <link.icon className="h-4 w-4" /> {link.label}
                </Link>
              ))}
              {toolSections.map((section) => (
                <div key={section.title} className="mt-2">
                  <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">{section.title}</p>
                  {section.tools.map((tool) => (
                    <Link key={tool.href} href={tool.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground">
                      <tool.icon className="h-4 w-4" /> {tool.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
