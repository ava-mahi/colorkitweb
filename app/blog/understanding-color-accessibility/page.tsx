import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Color Accessibility Is Not Optional — ColorCraft Blog",
  description:
    "Why contrast matters, how to check it, and what I learned from failing an accessibility audit.",
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
            May 5, 2026
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock className="h-3 w-3" />
            8 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Color Accessibility Is Not Optional — Here Is How to Get It Right
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            Last year I had a client whose website failed an accessibility audit because the
            button text was too light against its background. I had looked at that button a
            hundred times and thought it looked fine. But "looks fine to me" is not the standard
            that matters. That single failed audit taught me more about contrast than any tutorial
            ever could.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Why Contrast Ratios Exist
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            The Web Content Accessibility Guidelines (WCAG) define specific contrast ratios to
            ensure text is readable for people with visual impairments. It is not just about
            blindness — low contrast affects anyone with aging eyes, screen glare, or even a cheap
            monitor with bad calibration.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            A 4.5:1 ratio is the minimum for normal text (WCAG AA). For large text, 3:1 is
            acceptable. If you want to hit the gold standard of AAA, you need 7:1 for normal text.
            These numbers sound abstract until you realize that many popular color combinations —
            light gray on white, yellow on white, red on black — fail even the basic thresholds.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            The Gray Trap
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Here is a mistake I made repeatedly: I would pick a modern-looking light gray for body
            text because it felt softer and more elegant than pure black. What I did not realize
            was that the gray I chose (#999999) against a white background gives a ratio of just
            2.8:1 — failing WCAG AA for normal text.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The fix was simple: I pushed the gray darker to #595959, which hits 7:1 and passes
            AAA. The design still looked clean, but now it was actually readable for everyone. A
            tool like ColorCraft's contrast checker makes this kind of mistake impossible to miss
            in real time.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Do Not Trust Your Eyes Alone
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Human perception of contrast is weird. A thin font will look less readable than a
            bold font at the exact same color values. Colors that seem to pop on a large desktop
            monitor can disappear on a phone screen in sunlight. Your brain also auto-corrects
            colors based on surrounding context, which means you literally cannot trust what you
            see.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            This is why I never ship a color combination without running it through a contrast
            checker. The math does not lie. If the ratio is below 4.5:1, it needs to change, no
            matter how good it looks to me personally.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Practical Tips I Use on Every Project
          </h2>
          <ul className="space-y-3 text-muted leading-relaxed mb-6">
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Always check contrast at multiple sizes — your heading might pass while your body
                text fails.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Do not rely on color alone to convey meaning. Add icons or labels for error states,
                success states, and links.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Test your palette with a color blindness simulator. Red-green combinations that
                look obvious to you might be invisible to someone with deuteranopia.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                When in doubt, err on the side of darker text on light backgrounds. It is almost
                always safer.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
