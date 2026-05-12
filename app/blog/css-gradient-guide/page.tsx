import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { AuthorBio } from "@/components/AuthorBio";

export const metadata = {
  title: "CSS Gradient Guide: Linear vs Radial Explained — ColorCraft Blog",
  description:
    "A practical guide to CSS gradients. Learn when to use linear, radial, and conic gradients with real code examples.",
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
          <span className="rounded-lg bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300">
            CSS
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
          CSS Gradient Guide: Linear vs Radial Explained
        </h1>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 font-bold text-sm">M</div>
          <div>
            <p className="text-sm font-medium text-foreground">Maya</p>
            <p className="text-xs text-muted">Founder of ColorCraft</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=1200&q=80"
          alt="Sunset gradient sky"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
        />

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-6">
            Early in my career, I treated gradients as a single CSS feature. I would Google "css gradient generator," copy the output, and paste it into my stylesheet without really understanding what was happening. Then a client asked me to animate a gradient shift on hover, and I realized I did not actually know how gradients worked under the hood. I spent an entire afternoon reading the spec, and what I learned has saved me countless hours since.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Linear Gradients: The Workhorse
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            A linear gradient transitions colors along a straight line. You define a direction and a set of color stops, and the browser fills the space by blending between them. It is the most common type of gradient and the one you will use for 80% of your projects.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The syntax looks like this:
          </p>
          <pre className="rounded-xl bg-black/30 p-4 text-xs font-mono text-muted overflow-x-auto mb-4">
{`background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`}
          </pre>
          <p className="text-muted leading-relaxed mb-4">
            The angle (135deg) determines the direction. Zero degrees points upward, 90deg points right, and angles in between create diagonal transitions. You can also use keywords like "to right" or "to bottom left" if you prefer.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Color stops define where each color appears. In the example above, #667eea starts at 0% and #764ba2 ends at 100%. You can add more stops in between. I often use three or four stops for hero backgrounds to create more visual depth than a simple two-color fade.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            You can experiment with different angles and color combinations using our <Link href="/gradient-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">gradient generator</Link>. It outputs the exact CSS you need and lets you preview the result in real time.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Radial Gradients: Depth and Focus
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            A radial gradient spreads outward from a center point. Instead of a straight line, the colors blend in concentric circles. This creates a completely different visual effect — one that feels more atmospheric and three-dimensional.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The syntax is similar but with different parameters:
          </p>
          <pre className="rounded-xl bg-black/30 p-4 text-xs font-mono text-muted overflow-x-auto mb-4">
{`background: radial-gradient(circle at 30% 30%, #ff9a9e 0%, #fecfef 50%, #fff 100%);`}
          </pre>
          <p className="text-muted leading-relaxed mb-4">
            The "circle at 30% 30%" part sets the center point. You can move the focal point anywhere within the element, which is useful for creating lighting effects. I often use radial gradients for card backgrounds where I want a soft glow emanating from a corner.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The shape can be "circle" or "ellipse." Circle maintains equal proportions. Ellipse stretches to fit the container shape. For square containers, the difference is invisible. For wide rectangles, ellipse creates an oval gradient that matches the aspect ratio.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            When to Use Which
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I use linear gradients for anything that needs structure. Hero sections with a directional energy. Buttons that need a sleek sheen. Headers that transition from one brand color to another. The straight line creates movement and direction, which guides the eye.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I use radial gradients for anything that needs atmosphere. A soft glow behind a product image. A spotlight effect on a dark background. A gentle color wash that feels ambient rather than directional. Radial gradients feel less aggressive and more organic.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            A practical rule I follow: if the gradient is the background for text, linear is usually safer because the color shift is predictable. Radial gradients can create hotspots where contrast suddenly drops, making text harder to read in specific regions.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Multi-Color and Repeating Gradients
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Both linear and radial gradients support multiple color stops. The browser blends between each adjacent pair. With five or six colors, you can create complex effects that look like mesh gradients without needing images.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Repeating gradients take the concept further by tiling the gradient pattern. A repeating linear gradient can create striped backgrounds. A repeating radial gradient can create concentric rings. These are powerful but easy to overuse. I reserve them for subtle texture backgrounds, never for primary design elements.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            If you want to push multi-color gradients further, our <Link href="/multi-color-gradient-generator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">multi-color gradient generator</Link> lets you add up to eight colors with adjustable angles. It is the fastest way to find a complex gradient that actually works without trial and error in DevTools.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            Performance Considerations
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Gradients rendered by the browser are generally fast. They do not require HTTP requests like background images. They scale to any size without losing quality. And they work at any pixel density.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The one gotcha is animating gradients. Changing the background property triggers a repaint on every frame, which can cause jank on lower-end devices. If you need an animated gradient, use a pseudo-element with a large background-size and animate the background-position instead. This is much cheaper for the browser to compute.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            For truly smooth animated gradients, try our <Link href="/color-gradient-animator" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">color gradient animator</Link>. It generates the optimized CSS with background-size and keyframe animation preconfigured so you do not have to worry about the performance details.
          </p>
        </div>
        <AuthorBio />
      </div>
    </article>
  );
}
