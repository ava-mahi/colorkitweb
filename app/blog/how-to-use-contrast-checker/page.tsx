import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { AuthorBio } from "@/components/AuthorBio";

export const metadata = {
  title: "How to Use a Contrast Checker (Step by Step) — ColorCraft Blog",
  description:
    "A practical walkthrough for checking color contrast ratios correctly, with real examples and common mistakes to avoid.",
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
          <span className="rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
            Accessibility
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Calendar className="h-3 w-3" />
            May 12, 2026
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock className="h-3 w-3" />
            7 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          How to Use a Contrast Checker (Step by Step)
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 font-bold text-sm">M</div>
          <div>
            <p className="text-sm font-medium text-foreground">Maya</p>
            <p className="text-xs text-muted">Founder of ColorCraft</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80"
          alt="Dark screen with code"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
        />

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            I once launched a client project where every design decision looked perfect on my calibrated monitor. Then the client opened it on a budget laptop in a sunny room and could not read half the text. The contrast ratios were technically passable on my screen but failed in real-world conditions. That project taught me that contrast checking is not optional — and doing it right requires more than just plugging two hex codes into a calculator.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Step 1: Identify What You Are Checking
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Not all text is equal in the eyes of accessibility standards. Normal text — anything below 18px or 14px bold — needs a 4.5:1 contrast ratio to pass WCAG AA. Large text — 18px and above, or 14px bold and above — only needs 3:1. If you are aiming for WCAG AAA, those numbers jump to 7:1 and 4.5:1 respectively.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Before you start checking, know which category your text falls into. A heading at 24px has different requirements than body copy at 16px. I have seen designers fixate on perfecting body text contrast while ignoring that their small caption text at 12px is completely illegible.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Step 2: Test the Real Combination, Not the Swatch
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            A common mistake is checking a color against white in isolation, then placing that color on a gradient or image background in the final design. The swatch might pass, but the actual implementation fails because the background behind the text is not a flat color.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Always test the exact combination that will appear in the final design. If your text sits on a gradient, test it at the lightest point of that gradient. If it sits on an image, test it at the busiest part of the image. When in doubt, add a semi-transparent dark overlay behind the text and test against that overlay color instead of the image itself.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Step 3: Use the Right Tool Correctly
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Open our <Link href="/contrast-checker" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">contrast checker</Link> and enter your foreground and background colors. The tool will calculate the ratio instantly and tell you whether it passes AA, passes AAA, or fails.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            If your combination fails, you have two options. You can darken the text, lighten the background, or do both. I usually start by adjusting the text color because background changes can cascade through the entire design system.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The tool also shows you a preview of how the combination looks, which is helpful because math and perception do not always align. A combination that mathematically passes might still feel too light for comfortable reading. Trust the preview as much as the number.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Step 4: Check Every State
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Static text is only half the battle. Buttons have hover states, focus states, and disabled states. Links have visited and active states. Form fields have placeholder text, error text, and success text. Each of these states needs its own contrast check.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I keep a checklist for every project: default state, hover state, focus state, disabled state, error state, and placeholder state. If any of those combinations fail, the design is not ready for production. This sounds tedious, but it takes less than five minutes once you are in the habit.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Step 5: Test with Real Users or Simulators
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Passing a contrast checker is necessary but not sufficient. Some people see colors differently. Someone with deuteranopia might struggle with a red-on-gray combination that passes every mathematical test. Someone with cataracts might need higher contrast than the standard requires.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            After I run my combinations through the contrast checker, I put them through our <Link href="/color-blindness-simulator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">color blindness simulator</Link>. It shows me how the design looks for people with protanopia, deuteranopia, and tritanopia. If important information becomes invisible in any of those modes, I know I need to add icons, labels, or patterns to supplement the color coding.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Common Mistakes to Avoid
          </h2>
          <ul className="space-y-3 text-muted leading-relaxed mb-6">
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Do not rely on thin fonts. A 2px font weight at the same color value will always feel less readable than a 700 weight. Check contrast at your actual font weight.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Do not forget about placeholder text. Light gray placeholders are the most common contrast failure I see in forms.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Do not test at 100% zoom on a 27-inch monitor. Shrink your browser to 320px wide and test again. Small screens amplify contrast problems.
              </span>
            </li>
          </ul>

          <p className="text-muted leading-relaxed mb-6">
            Contrast checking is not a one-time task. It is a habit. Build it into your workflow and your designs will be better for everyone who sees them.
          </p>
        </div>
        <AuthorBio />
      </div>
    </article>
  );
}
