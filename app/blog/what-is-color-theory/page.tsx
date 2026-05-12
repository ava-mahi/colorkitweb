import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { AuthorBio } from "@/components/AuthorBio";

export const metadata = {
  title: "What Is Color Theory and Why Designers Need It — ColorCraft Blog",
  description:
    "A practical breakdown of color theory for working designers. No academic jargon, just concepts that improve your work immediately.",
};

export default function BlogPost() {
  return (
    <article className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-lg bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-300">
            Fundamentals
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Calendar className="h-3 w-3" />
            May 12, 2026
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock className="h-3 w-3" />
            8 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          What Is Color Theory and Why Designers Need It
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 font-bold text-sm">M</div>
          <div>
            <p className="text-sm font-medium text-foreground">Maya</p>
            <p className="text-xs text-muted">Founder of ColorCraft</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80"
          alt="Color swatches and paint"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
        />

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            I used to think color theory was something you learned in art school and immediately forgot. Then I took on a project where the client wanted "something warm but not too warm, modern but not cold." I spent two weeks cycling through random hex codes before I realized I was missing a framework. That frustration led me to actually study color theory, and it completely changed how I design.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            The Color Wheel Is Your Map
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            At its core, the color wheel is a circle that organizes colors by their relationship to each other. Red, yellow, and blue are the primary colors. Mix two primaries and you get the secondary colors: orange, green, and purple. Mix a primary with a secondary and you get tertiary colors like yellow-green or blue-violet.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            This sounds basic, but the real power comes from understanding the relationships. Colors opposite each other on the wheel are complementary. Colors next to each other are analogous. These relationships determine whether two colors will clash or harmonize before you ever put them on a screen.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I use our <Link href="/color-wheel" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">interactive color wheel</Link> whenever I need to visualize these relationships quickly. It saves me from guessing whether a teal and orange combination will work or look like a movie poster parody.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Hue, Saturation, and Lightness
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Every color can be described by three values. Hue is the pure color itself — red, blue, green. Saturation is how intense or muted that color is. A fully saturated red is loud and vivid. A desaturated red becomes dusty rose. Lightness is exactly what it sounds like: how close to white or black the color is.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Understanding these three properties is what separates amateur palettes from professional ones. Beginners tend to pick fully saturated colors for everything because they look exciting on a color picker. Professionals know that lowering saturation and adjusting lightness is what creates sophistication and hierarchy.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            A practical example: if your brand color is a bright blue (#0066ff), your supporting colors should probably be lighter tints of that blue for backgrounds and darker shades for hover states. The hue stays the same. Only saturation and lightness change. This creates unity without monotony.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Warm vs Cool Colors
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Warm colors — reds, oranges, yellows — advance toward the viewer. They feel energetic, urgent, and emotional. Cool colors — blues, greens, purples — recede. They feel calm, professional, and distant.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            This is not just psychological fluff. It directly affects usability. A warm CTA button on a cool background naturally draws the eye because the warm color advances. A cool CTA on a warm background tends to get ignored. I learned this the hard way when I made a green "Sign Up" button on a yellow background and watched click-through rates plummet.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Color Harmony in Practice
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Harmony is just a fancy word for "colors that look good together." There are proven formulas that produce harmonious results almost every time. Complementary harmony uses colors opposite the wheel. Analogous harmony uses colors next to each other. Triadic harmony uses three colors evenly spaced around the wheel.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I do not memorize these formulas. I use them as starting points and then tweak based on the project. A complementary pair might need one color desaturated to avoid overwhelming the viewer. An analogous trio might need one color dropped entirely and replaced with a neutral gray for balance.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Our <Link href="/color-harmony-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">color harmony generator</Link> builds these relationships automatically. You pick one color, choose a harmony type, and get a full palette that follows the rules. It is the fastest way to go from "I have no idea" to "this actually looks professional."
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Why Theory Matters More Than Trends
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Trends come and go. The terracotta wave of 2024 gave way to the hyper-minimal black-and-white wave of 2025. But color theory does not change. The relationships on the wheel stay the same. The way warm and cool colors interact stays the same. A designer who understands the fundamentals can adapt to any trend without losing their sense of taste.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            If you only take one thing from this article, make it this: color theory is not about rules. It is about a shared visual language that humans have responded to for centuries. Learn the language, and you can speak to your audience in a way that feels effortless.
          </p>
        </div>
        <AuthorBio />
      </div>
    </article>
  );
}
