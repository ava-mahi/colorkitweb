"use client";

import { Palette, Globe, MessageCircle } from "lucide-react";

export function AuthorBio() {
  return (
    <div className="mt-12 rounded-2xl glass p-6 border border-white/10">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white font-bold text-lg">
          M
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground mb-1">Maya — Founder of ColorCraft</p>
          <p className="text-sm text-muted leading-relaxed mb-3">
            I have been designing with color for over a decade, mostly by making every mistake possible first. ColorCraft is the toolset I wish I had when I started — no fluff, just practical tools that solve real problems. I write about what I have actually learned from real projects, not what sounds good in a textbook.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://growwithmaya.info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted hover:text-foreground hover:border-white/20 transition-colors"
            >
              <Globe className="h-3 w-3" />
              Website
            </a>
            <a
              href="https://wa.me/+923178457586"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted hover:text-foreground hover:border-white/20 transition-colors"
            >
              <MessageCircle className="h-3 w-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
