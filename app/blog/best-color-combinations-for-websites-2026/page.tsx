import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { AuthorBio } from "@/components/AuthorBio";

export const metadata = {
  title: "Best Color Combinations for Websites in 2026 — ColorCraft Blog",
  description:
    "Proven color combinations that convert, stay accessible, and look modern in 2026. Tested on real projects.",
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
          <span className="rounded-lg bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-300">
            Design Tips
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Calendar className="h-3 w-3" />
            May 12, 2026
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock className="h-3 w-3" />
            9 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Best Color Combinations for Websites in 2026
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 font-bold text-sm">M</div>
          <div>
            <p className="text-sm font-medium text-foreground">Maya</p>
            <p className="text-xs text-muted">Founder of ColorCraft</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80"
          alt="Colorful abstract gradients"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
        />

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            Three years ago I redesigned a landing page for a fitness startup. I chose neon green and electric blue because they felt energetic. The bounce rate shot up to 78%. When I switched to a deep navy with warm coral accents, conversions doubled within two weeks. That taught me that color combinations are not about what looks cool — they are about what keeps people on the page.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Navy + Coral: Trust with Energy
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            This is my most requested combination for SaaS and fintech sites. The navy signals professionalism and trust, while coral injects warmth and human energy without feeling aggressive. It works because the warm coral pops against the cool navy without clashing.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I typically use navy for headers, navigation, and primary buttons. Coral works for CTAs, highlights, and hover states. The ratio I stick to is roughly 70% navy, 25% white or light gray, and 5% coral. That small coral accent draws the eye exactly where you want it.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            If you want to experiment with this pair, start with #1a1a40 for the navy and #ff6b6b for the coral. You can adjust saturation to match your brand personality — deeper navy for premium feel, brighter coral for playful brands.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Forest Green + Cream: Organic and Calm
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I used this combination for a sustainable skincare brand last year, and it immediately changed how visitors perceived the product. The forest green (#2d6a4f) feels grounded and natural. The cream (#fffef0) softens everything and creates a spa-like atmosphere.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            This palette works especially well for wellness, organic food, eco-friendly products, and anything that wants to feel wholesome. I avoid pure white with this combo — the cream background keeps the whole design feeling cohesive rather than clinical.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            For buttons and links, I add a slightly lighter sage green (#52b788) as a secondary. It creates hierarchy without introducing a completely different color family. You can build this exact palette in seconds using our <Link href="/palette-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">palette generator</Link>.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Charcoal + Electric Purple: Bold and Modern
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            This is my go-to for tech startups, creative agencies, and personal portfolios. The charcoal (#2b2d42) background feels sophisticated and dark-mode native. The electric purple (#9d4edd) creates an instant focal point that says "we are different."
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The key to making this work is restraint. I use purple only for primary buttons, active navigation states, and one or two accent elements per page. Everything else stays in shades of charcoal and light gray. Overuse the purple and the site starts looking like a gaming peripheral brand.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Accessibility matters here. Make sure your purple passes contrast ratios against the charcoal. Our <Link href="/contrast-checker" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">contrast checker</Link> will tell you immediately if your combo is readable.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Terracotta + Sand: Warm and Approachable
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Terracotta (#e07a5f) against a sand (#f4f1de) background is one of the most underrated combinations I know. It feels handcrafted, warm, and human — like a ceramics studio or a small-batch coffee roaster. I have used it for restaurants, interior designers, and artisan brands.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The trick is finding the right terracotta shade. Too orange and it looks cheap. Too brown and it feels muddy. I usually start around #e07a5f and tweak the lightness until it feels alive on screen. The sand background should never compete — keep it subtle and let the terracotta do the talking.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Black + Mint: Minimal with Personality
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            If your brand wants to feel minimal but not boring, this is the combination. A near-black (#121212) background with a crisp mint (#80ffdb) accent creates a futuristic, editorial vibe that feels expensive. I have seen this work beautifully for fashion brands, architecture portfolios, and high-end electronics.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Typography is everything here. Use a clean geometric sans-serif in white for body text. Reserve the mint for small UI details — hover states, underlines, progress bars, and loading indicators. The restraint makes every mint element feel intentional and premium.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            If you are not sure which combination fits your project, try testing them side by side with our <Link href="/color-harmony-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">color harmony generator</Link>. It will show you how your chosen colors relate mathematically, which is often the difference between a combination that feels random and one that feels designed.
          </p>
        </div>
        <AuthorBio />
      </div>
    </article>
  );
}
