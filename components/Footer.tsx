"use client";

import Link from "next/link";
import { Palette, Layers, Contrast, BookOpen, Globe, MessageCircle } from "lucide-react";

const toolLinks = [
  { href: "/palette-generator", label: "Palette Generator", icon: Palette },
  { href: "/gradient-generator", label: "Gradient Generator", icon: Layers },
  { href: "/contrast-checker", label: "Contrast Checker", icon: Contrast },
];

const moreLinks = [
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
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
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted hover:text-foreground hover:border-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted hover:text-foreground hover:border-white/20 transition-colors"
                aria-label="Twitter"
              >
                <MessageCircle className="h-4 w-4" />
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
