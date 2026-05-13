"use client";

import Link from "next/link";
import { Palette, Layers, Contrast, BookOpen } from "lucide-react";

const toolLinks = [
  { href: "/palette-generator", label: "Palette Generator", icon: Palette },
  { href: "/gradient-generator", label: "Gradient Generator", icon: Layers },
  { href: "/contrast-checker", label: "Contrast Checker", icon: Contrast },
  { href: "/color-picker", label: "Color Picker", icon: Palette },
  { href: "/color-code-converter", label: "Code Converter", icon: Layers },
  { href: "/color-shades-generator", label: "Shades Generator", icon: Contrast },
  { href: "/color-mixer", label: "Color Mixer", icon: Palette },
  { href: "/glassmorphism-color-generator", label: "Glassmorphism", icon: Layers },
];

const moreLinks = [
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
                <Palette className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">ColorCraft</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Premium color tools for designers and developers. Generate palettes, gradients, and check accessibility in seconds.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Tools</h3>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">More</h3>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/maya.taher"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted hover:text-foreground hover:border-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} ColorCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
