import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "How to Choose Colors Like a Pro — ColorCraft Blog",
  description:
    "Practical lessons on picking colors that actually work, learned from years of trial and error.",
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
            May 10, 2026
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock className="h-3 w-3" />
            6 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          How to Choose Colors Like a Pro (Without a Design Degree)
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            I still remember the first website I designed. I opened the color picker, dragged the
            cursor to a bright red that looked exciting, paired it with a neon green because why not,
            and called it a day. My client politely asked if we could "make it look less like a
            circus." That was my introduction to the fact that color is harder than it looks.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Start with One Color You Actually Love
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            The biggest mistake I see beginners make is trying to pick five colors at once. They
            open a <Link href="/palette-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">palette generator</Link>, get five random hex codes, and try to force them to work
            together. It rarely ends well.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            A better approach: find one color that genuinely feels right for what you are building.
            It might come from a photo, a brand you admire, or just an instinct. Once you have that
            anchor color, everything else becomes much easier. You can build a monochromatic palette
            with our <Link href="/tint-and-tone-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">tint & tone generator</Link>, or find its complementary opposite with the <Link href="/complementary-color-finder" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">complementary color finder</Link>.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            The 60-30-10 Rule Actually Works
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I learned this from a senior designer at my second job, and it changed everything. The
            idea is simple: use your dominant color for 60% of the space (usually backgrounds and
            large surfaces), a secondary color for 30% (buttons, cards, highlights), and an accent
            color for 10% (calls to action, small details).
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Before I knew this rule, my designs looked scattered because every color was competing
            for attention. Once I started distributing colors intentionally, the whole composition
            felt calmer and more professional.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Gray Is Your Secret Weapon
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I used to think gray was boring. Then I realized that most of the best-looking
            interfaces I admired were 70% some shade of gray or off-white, with just a splash of
            actual color. Gray lets your accent colors breathe. It creates hierarchy without
            shouting.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            If your design feels too loud or chaotic, try replacing one or two of your colors with
            a subtle gray. I have seen palettes that looked amateur suddenly look premium with this
            one adjustment.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Test Your Colors in Context
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            A color that looks beautiful in isolation can fall apart when you put it next to other
            elements. I have a simple rule now: I never commit to a palette until I see it in a
            real layout with actual text, buttons, and images.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            This is exactly why I built the preview features in ColorCraft. Seeing your colors in
            context — with real typography and spacing — reveals problems you would never spot in a
            color picker alone.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Steal Like a Designer
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Here is a trick nobody told me early on: find a website or app whose colors you love,
            use a browser extension to grab the hex codes, and study what makes the palette work.
            Are they using warm or cool tones? How many colors are actually in play? What is the
            ratio between neutral and saturated colors?
          </p>
          <p className="text-muted leading-relaxed mb-6">
            I am not saying copy someone else exactly. But reverse-engineering palettes you admire
            is one of the fastest ways to develop your own eye. After doing this for a few dozen
            sites, you start recognizing patterns and can create original palettes with confidence.
          </p>
        </div>
      </div>
    </article>
  );
}
