import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { AuthorBio } from "@/components/AuthorBio";

export const metadata = {
  title: "The Psychology of CTA Button Colors — ColorCraft Blog",
  description:
    "Real A/B test results and personal mistakes that reveal what actually makes people click a button.",
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
          <span className="rounded-lg bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-300">
            Psychology
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
          The Psychology of CTA Button Colors: What Actually Works
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 font-bold text-sm">M</div>
          <div>
            <p className="text-sm font-medium text-foreground">Maya</p>
            <p className="text-xs text-muted">Founder of ColorCraft</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
          alt="Dashboard with charts"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
        />

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            I ran an A/B test two years ago that completely destroyed a myth I had believed for years. A client selling online courses wanted to optimize their "Enroll Now" button. I was convinced orange was the winner — every blog post said orange CTAs convert best. We tested orange against green, blue, and even red. Orange came in dead last. The winner was a slightly desaturated blue that barely looked like a CTA color at all. That result sent me down a rabbit hole of actual conversion data, and what I found changed how I approach every button I design.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Red Does Not Always Mean Stop
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Conventional wisdom says red is for warnings and errors, so never use it for a positive CTA. But I have seen red "Buy Now" buttons outperform green ones by 21% on an e-commerce site selling urgent, time-limited deals. The context matters enormously. Red signals urgency and importance. If your offer is genuinely time-sensitive, red can be the most honest and effective color choice.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The mistake is using red for a generic "Learn More" button. That creates cognitive dissonance. The user thinks "why is this urgent?" and feels pressured rather than guided. Match the emotional intensity of the color to the emotional intensity of the action. Red for "Final Hours — 50% Off." Blue for "Read Our Guide."
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Green Is Only Safe When It Makes Sense
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Green gets called the "safe" CTA color because it means go. But I once used a bright green "Subscribe" button on a financial newsletter landing page. It performed 14% worse than the same button in navy blue. Why? Because green felt frivolous on a page about serious money decisions. The navy blue matched the trust-oriented branding and felt like a natural next step rather than a departure.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Green works brilliantly for environmental products, health services, and anything related to growth or positivity. It fails when the context demands seriousness, luxury, or technical precision. Context beats color psychology every single time.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            The Real Rule: Contrast and Isolation
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            After running tests across multiple projects, I have come to believe that the specific color of a CTA button matters far less than two other factors: contrast against the background, and isolation from other competing elements. A gray button with excellent contrast against a white background will outperform a bright orange button that sits next to three other equally bright elements.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The eye is drawn to difference, not brightness. If your entire page is blue and white, a coral CTA will dominate attention. If your page is already a rainbow of colors, adding another bright color just adds to the noise. Before picking a CTA color, audit the page for the most visually quiet area and place the button there.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            You can check if your CTA color actually stands out by testing the contrast ratio between your button and your background. Use our <Link href="/contrast-checker" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">contrast checker</Link> — not for accessibility this time, but to confirm your button does not blend into the wallpaper.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            The Hover State Nobody Tests
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I made a painfully embarrassing mistake on a client project. The default CTA button was perfect — good color, good placement, good copy. The hover state darkened the button so much that it looked disabled. Users were hovering, seeing a "grayed out" button, and assuming the action was unavailable. Click-through rate was half of what it should have been.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The fix was simple: lighten the hover state instead of darkening it. A button should always feel more alive on hover, not less. I now test hover states with actual users or at minimum record screen sessions to watch how people react. That 30 seconds of observation would have saved me weeks of confusion.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            My Current Testing Workflow
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Here is what I do now for every CTA color decision. First, I pick three colors that fit the brand and feel contextually appropriate. Second, I test each one for contrast against every background it will appear on. Third, I create mockups with real content and ask five people which button they would click. Fourth, I A/B test the top two choices for at least two weeks.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            The biggest lesson from all my testing? There are no universal "best" CTA colors. There are only colors that make sense for your specific audience, your specific product, and your specific page context. Stop reading articles that claim orange always wins. Start testing what wins for you. And when you need to generate quick color options to test, our <Link href="/complementary-color-finder" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">complementary color finder</Link> will give you contrast-rich pairs that naturally draw the eye.
          </p>
        </div>
        <AuthorBio />
      </div>
    </article>
  );
}
