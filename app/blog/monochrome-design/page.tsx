import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { AuthorBio } from "@/components/AuthorBio";

export const metadata = {
  title: "How I Create Monochrome Designs That Don't Look Boring — ColorCraft Blog",
  description:
    "The techniques I use to make single-color designs feel rich, layered, and intentional instead of flat and lifeless.",
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
          <span className="rounded-lg bg-stone-500/10 px-2.5 py-1 text-xs font-medium text-stone-300">
            Monochrome
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
          How I Create Monochrome Designs That Don't Look Boring
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 font-bold text-sm">M</div>
          <div>
            <p className="text-sm font-medium text-foreground">Maya</p>
            <p className="text-xs text-muted">Founder of ColorCraft</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&q=80"
          alt="Abstract monochrome texture"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
        />

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            A client once handed me the most terrifying brief of my career: "We want the entire website in one color. Just different shades of blue. Nothing else." I immediately imagined a flat, depressing corporate site that looked like a word document with a blue theme. I was wrong. The final design was one of the most visually interesting projects I have ever shipped. That experience taught me that monochrome is not a limitation. It is a discipline that forces you to master the things that actually make design interesting.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Texture Replaces Color
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            When you remove color variation from your toolkit, you suddenly notice how flat your surfaces are. A card on a card on a card all in blue looks like a stack of identical squares. The fix is introducing texture and materiality. Subtle noise overlays, grain patterns, or even just very faint gradients within the same hue create visual interest that color would normally provide.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            On that blue project, I added a barely visible noise texture to the background. At 3% opacity, it was almost imperceptible, but it prevented the solid blue from feeling like a painted wall. The cards got a 1px border with a slightly lighter blue and a hairline shadow that only showed on hover. These micro-details added up to a design that felt tactile and crafted.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Typography Becomes the Star
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Without color to create hierarchy, your typography has to do all the heavy lifting. I am talking about font weight, size, tracking, and line height working together to create a visual rhythm. A monochrome design with lazy typography looks amateur instantly. The same design with intentional typography looks editorial and premium.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            For the blue website, I used four distinct weights of the same typeface: light for large display headings, regular for body text, medium for subheadings, and bold for calls to action. The size contrast was dramatic. The main heading was 64px, the body was 16px, and nothing in between competed. This extreme scale created hierarchy without needing any other color.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Spacing Is Your Secret Color
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            In a colorful design, you can get away with tight spacing because color helps separate elements. In a monochrome design, cramped spacing is fatal. Every element needs room to breathe. I doubled the padding on that blue project compared to my usual defaults. Cards got more internal padding. Sections got more vertical space. The gap between related elements and unrelated elements became clearly distinct.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Think of white space — or in this case, blue space — as a color itself. It is the negative space that gives positive elements their meaning. A button with 24px of padding on all sides feels more important than a button with 12px. Not because it is bigger, but because it owns more territory.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            One Accent Is Cheating (And That Is Okay)
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I am going to be honest. I do not do truly monochrome designs. I do almost-monochrome with one tiny accent. On the blue project, the accent was white. Not another color, just pure white for primary buttons and active states. Against the deep blue palette, white functioned as a spotlight. It gave users a clear path through the interface without breaking the monochrome feeling.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            You can also use a neutral like warm gray or cream as your "accent" against a cool monochrome base. The key is that the accent feels like a neutral, not a competing color. If your base is warm, use a cool neutral. If your base is cool, use a warm neutral. The temperature difference creates enough contrast to be useful without feeling like you abandoned the monochrome concept.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            To build your monochrome scale, start with a single hue and generate a full range of tints and shades. Our <Link href="/tint-and-tone-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">tint & tone generator</Link> is perfect for this. Enter your base color, select whether you want lighter tints or darker shades, and get a full stepped scale that maintains the same hue family.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            The Monochrome Mindset Shift
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            The real benefit of monochrome design is not aesthetic. It is strategic. When you strip away color, you are forced to solve problems with structure, typography, and space. Those skills transfer directly back to colorful designs. I now start many projects in monochrome intentionally, even if the final design will use multiple colors. If the layout works in one color, it will sing in many. If it only works with color, the underlying structure is probably weak. Try it on your next project. Pick one color, generate a scale with our <Link href="/color-shades-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">shades generator</Link>, and see how far you can push it before you feel the need to add a second hue. You might surprise yourself.
          </p>
        </div>
        <AuthorBio />
      </div>
    </article>
  );
}
