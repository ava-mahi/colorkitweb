export const metadata = {
  title: "Terms & Conditions — ColorCraft",
  description: "Terms and conditions for using ColorCraft's free color tools.",
};

export default function TermsConditionsPage() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Terms & <span className="gradient-text">Conditions</span></h1>
        <div className="prose prose-invert max-w-none space-y-4 text-muted leading-relaxed">
          <p>By using ColorCraft, you agree to these terms. If you do not agree, please do not use the website.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Use of Tools</h2>
          <p>All tools on ColorCraft are provided free of charge for personal and commercial use. You may use generated colors, palettes, gradients, and CSS code in any project without attribution.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">No Warranty</h2>
          <p>ColorCraft is provided "as is" without warranties of any kind. While we strive for accuracy in color conversions and contrast calculations, we cannot guarantee perfection in every edge case. Always verify critical accessibility compliance with official testing tools.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Limitation of Liability</h2>
          <p>ColorCraft and its creators shall not be liable for any damages arising from the use or inability to use the tools, including but not limited to design decisions, accessibility audits, or client deliverables.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Intellectual Property</h2>
          <p>The ColorCraft name, logo, and website design are our intellectual property. The output you generate using our tools (colors, CSS, palettes) belongs entirely to you.</p>
          <p className="text-sm text-muted mt-6">Last updated: May 2026</p>
        </div>
      </div>
    </div>
  );
}
