import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "How I Build Brand Color Palettes From Scratch — ColorCraft Blog",
  description:
    "A repeatable process for creating cohesive, memorable brand color systems that work across every touchpoint.",
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
            Branding
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Calendar className="h-3 w-3" />
            April 20, 2026
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock className="h-3 w-3" />
            7 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          How I Build Brand Color Palettes From Scratch
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            When I started freelancing, I would throw colors together and hope for the best. If
            the client did not like the first option, I would swap a few hex codes and present
            it again. It was inefficient, and more importantly, the results were inconsistent. Now
            I follow a repeatable process that gives every brand a cohesive, memorable look.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Step 1: Define the Brand Personality in Words
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Before I touch a color picker, I ask the client (or myself) to describe the brand in
            three adjectives. Bold, playful, and trustworthy. Minimal, premium, and calm.
            Energetic, youthful, and innovative. These words become my compass.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            A "playful" brand might lean toward warmer, saturated tones. A "premium" brand probably
            wants deep, restrained colors with high contrast. This sounds abstract, but it
            prevents the random-color-generator approach and gives every decision a rationale.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Step 2: Find the Core Color Through Moodboards
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I collect 20–30 images that feel right for the brand — not necessarily competitor
            websites, but photography, product shots, nature scenes, architecture. Then I look for
            the color that shows up most consistently across those images. That becomes my
            starting point.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            This method works because it grounds the palette in something real rather than
            theory. If the moodboard is full of forest scenes and leather textures, a bright
            cyan is probably not the right core color, no matter how trendy it is right now.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Step 3: Build the System, Not Just the Palette
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            A brand palette is not just five colors. It is a system. I always build out:
          </p>
          <ul className="space-y-3 text-muted leading-relaxed mb-4">
            <li className="flex gap-3">
              <span className="text-amber-400 mt-1">•</span>
              <span>
                Primary color — the signature hue that identifies the brand
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 mt-1">•</span>
              <span>
                Secondary color — complements the primary without competing
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 mt-1">•</span>
              <span>
                Neutral scale — five to six grays for text, borders, backgrounds
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 mt-1">•</span>
              <span>
                Semantic colors — red for errors, green for success, amber for warnings
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 mt-1">•</span>
              <span>
                Accent color — for CTAs and highlights, used sparingly
              </span>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Step 4: Stress-Test in Every Context
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            The final step that most people skip: test the palette in real applications before
            finalizing it. Does the primary color work as a button background? Does the text
            color stay readable when overlaid on the primary color? How does the whole system
            look on a dark mode interface?
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I build a quick prototype page with all the common components — buttons, cards,
            forms, alerts — and apply the palette. Problems show up immediately. A color that
            looked beautiful in a swatch might be too aggressive at full width, or too weak for
            small icon usage.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            This process takes longer than slapping five colors together, but the result is a
            palette that scales with the brand and works everywhere it needs to appear. That is
            the difference between a pretty color set and a professional brand system.
          </p>
        </div>
      </div>
    </article>
  );
}
