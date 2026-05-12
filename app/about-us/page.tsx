export const metadata = {
  title: "About Us — ColorCraft",
  description: "Learn about ColorCraft and our mission to provide free premium color tools for designers and developers.",
};

export default function AboutUsPage() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About <span className="gradient-text">ColorCraft</span></h1>
        <div className="prose prose-invert max-w-none space-y-4 text-muted leading-relaxed">
          <p>ColorCraft started as a side project born out of frustration. Every color tool I tried was either too basic, cluttered with ads, or required a subscription to unlock essential features. I wanted something clean, fast, and genuinely useful — so I built it myself.</p>
          <p>What began as a simple palette generator quickly grew into a full toolkit. I kept adding features based on what I actually needed day-to-day as a designer: a reliable contrast checker, a gradient builder that did not crash my browser, and a way to convert between color formats without googling the formula every time.</p>
          <p>Today ColorCraft is used by thousands of designers, developers, and students around the world. Every tool is free, works offline after the first load, and respects your privacy. No accounts. No tracking. No limits.</p>
          <p>If you have feedback or ideas for new tools, I would love to hear from you.</p>
        </div>
      </div>
    </div>
  );
}
