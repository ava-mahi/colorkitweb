import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { AuthorBio } from "@/components/AuthorBio";

export const metadata = {
  title: "Why Your Dark Mode Colors Look Terrible — ColorCraft Blog",
  description:
    "The mistakes I made switching websites to dark mode and the exact fixes that made them look premium instead of muddy.",
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
          <span className="rounded-lg bg-slate-500/10 px-2.5 py-1 text-xs font-medium text-slate-300">
            Dark Mode
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
          Why Your Dark Mode Colors Look Terrible (And How to Fix Them)
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 font-bold text-sm">M</div>
          <div>
            <p className="text-sm font-medium text-foreground">Maya</p>
            <p className="text-xs text-muted">Founder of ColorCraft</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3a58d?w=1200&q=80"
          alt="Dark futuristic screen"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
        />

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            My first dark mode attempt was a disaster. I took a perfectly fine light-colored dashboard, inverted the background to black, flipped the text to white, and called it done. The client took one look and said it looked like a power outage. The whites were blinding. The shadows disappeared. Every button looked like it was floating in a void. I had to rebuild the entire color system from scratch, and that painful process taught me that dark mode is not light mode with the lights turned off.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Pure White on Pure Black Is Eye Torture
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Here is the mistake almost everyone makes. They set the background to #000000 and the text to #FFFFFF because those are the "correct" dark mode colors. They are not. On a modern OLED screen, pure white text against pure black creates the maximum possible contrast. Your eyes physically strain to read it. It is the digital equivalent of staring into a flashlight in a dark room.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The fix is almost embarrassingly simple. Use an off-black background like #0a0a0f or #121212 instead of #000000. And use an off-white text like #e0e0e0 or #d1d1d1 instead of #FFFFFF. The contrast is still excellent, but your retinas will thank you. I learned this from a Reddit thread at 2 AM, and it immediately solved the "power outage" problem my client had complained about.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Shadows Do Not Work the Same Way
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            On light backgrounds, shadows add depth. A card with a subtle drop shadow feels elevated above the surface. On dark backgrounds, the same shadow becomes invisible. Black shadow on black background equals nothing. I spent hours trying to increase shadow opacity and blur radius before I realized I was solving the wrong problem.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The solution is to think in terms of light instead of shadow. Instead of adding a dark shadow beneath a card, add a subtle highlight on top. A 1px border with a slightly lighter shade (#1e1e2e on a #121212 background) creates the same sense of elevation that a shadow does on a light background. This inverted thinking is the single biggest mindset shift for dark mode design.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Saturated Colors Become Neon Signs
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I had a brand color — a nice, respectable blue (#3b82f6) — that looked professional on a white background. On a dark background, that same blue turned into a glowing neon tube. Every button, link, and accent element started competing for attention like Times Square billboards. The interface felt chaotic and cheap.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The rule I now follow: darken your brand colors by about 15% for dark mode. That #3b82f6 becomes #2563eb. Still recognizable as the same blue family, but it sits calmly against the dark background instead of screaming. You can test this instantly with our <Link href="/color-code-converter" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">color code converter</Link> by adjusting the lightness value in HSL mode.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Gray Scales Need More Steps
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            On a light background, you might get away with three gray values: body text, secondary text, and borders. On a dark background, you need at least five or six distinct grays. The reason is that human perception of lightness is not linear. The jump from #333333 to #444444 is much more noticeable to our eyes than the jump from #eeeeee to #dddddd.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I now build my dark mode gray scales with smaller increments at the dark end and larger increments at the light end. Something like #0a0a0f for the deepest background, #121212 for cards, #1e1e2e for borders, #4a4a5a for secondary text, and #d1d1d1 for primary text. This gives me enough granularity to create hierarchy without everything blending into one dark blob.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            You can generate a full dark-mode-ready scale with our <Link href="/tailwind-css-color-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Tailwind color generator</Link>. Start with a mid-tone gray and let it build lighter and darker variants that stay mathematically consistent.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            The One Check That Saves Everything
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Before I ship any dark mode design, I do one final check. I open the site on my phone at minimum brightness in a completely dark room. If any element hurts to look at, it fails. Pure white text always fails this test. Bright saturated colors usually fail. Subtle off-whites and muted tones pass. This single habit has prevented more dark mode disasters than any color theory book ever could.
          </p>
        </div>
        <AuthorBio />
      </div>
    </article>
  );
}
