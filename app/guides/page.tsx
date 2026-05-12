import { ArrowLeft, Wand2, Palette, BookOpen, HelpCircle, Layers, Contrast, Pipette } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Tool Guides — ColorCraft",
  description: "Step-by-step guides for using ColorCraft's color tools effectively.",
};

const guides = [
  {
    slug: "palette-generator",
    title: "How to Use the Palette Generator",
    icon: Palette,
    steps: [
      "Click the 'Generate' button to create a random 5-color palette.",
      "Lock any colors you love by clicking the lock icon. Locked colors stay fixed while new ones generate around them.",
      "Click any color swatch to copy its HEX code to your clipboard.",
      "Switch between HEX, RGB, and HSL formats using the format selector.",
      "Export the full palette as CSS variables with one click.",
      "Save palettes to your local collection for quick access later.",
    ],
    tips: [
      "Use the spacebar to quickly generate new palettes without reaching for the mouse.",
      "Lock 2-3 anchor colors and let the generator fill in the rest for harmonious results.",
      "Copy the CSS export directly into your project's :root variables.",
    ],
  },
  {
    slug: "contrast-checker",
    title: "How to Use the Contrast Checker",
    icon: Contrast,
    steps: [
      "Enter your text color and background color using the color pickers or hex inputs.",
      "The tool instantly calculates the contrast ratio and shows your WCAG compliance level.",
      "AA means readable for most users. AAA means readable for everyone, including low-vision users.",
      "If your combination fails, use the 'Auto Fix' button to darken or lighten the text until it passes.",
      "Test both normal text and large text thresholds — they have different ratio requirements.",
    ],
    tips: [
      "Always check contrast in the lightest area of a gradient background.",
      "Do not trust your eyes alone — perception changes based on surrounding colors.",
      "Aim for AAA on body text. AA is acceptable for decorative elements.",
    ],
  },
  {
    slug: "gradient-generator",
    title: "How to Use the Gradient Generator",
    icon: Layers,
    steps: [
      "Choose two colors using the color pickers or enter hex values directly.",
      "Adjust the angle slider to control the direction of the gradient.",
      "Select from preset combinations for quick inspiration.",
      "Preview the gradient in real time at full width.",
      "Copy the CSS output or export as a Tailwind class.",
    ],
    tips: [
      "Subtle gradients (colors close on the spectrum) work better than dramatic ones for backgrounds.",
      "135 degrees is my go-to angle for hero sections — it feels natural.",
      "Always test gradients behind actual text to make sure contrast holds up.",
    ],
  },
  {
    slug: "color-blindness-simulator",
    title: "How to Use the Color Blindness Simulator",
    icon: HelpCircle,
    steps: [
      "Enter or pick a color you want to test.",
      "Toggle between Protanopia (red-blind), Deuteranopia (green-blind), and Tritanopia (blue-blind) modes.",
      "Compare the original color with each simulation side by side.",
      "If important information disappears in any mode, add icons, labels, or patterns to supplement color.",
    ],
    tips: [
      "Red-green combinations are the most common problem — always test them first.",
      "Do not rely on color alone for error states. Add an icon or text label.",
      "Test your full palette, not just individual colors.",
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" />
              Home
            </Link>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            Tool <span className="gradient-text">Guides</span>
          </h1>
          <p className="text-muted max-w-xl">
            Step-by-step walkthroughs to help you get the most out of every ColorCraft tool.
          </p>
        </div>

        <div className="space-y-10">
          {guides.map((guide) => (
            <div key={guide.slug} id={guide.slug} className="rounded-2xl glass p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                  <guide.icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{guide.title}</h2>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">Steps</h3>
                <ol className="space-y-3">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-muted leading-relaxed">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-xs font-medium text-violet-300">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">Pro Tips</h3>
                <ul className="space-y-2">
                  {guide.tips.map((tip, i) => (
                    <li key={i} className="flex gap-3 text-muted leading-relaxed text-sm">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5">
                <Link
                  href={`/${guide.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                >
                  <Wand2 className="h-4 w-4" />
                  Open the Tool
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
