export const metadata = {
  title: "Disclaimer — ColorCraft",
  description: "Legal disclaimer for ColorCraft color tools and content.",
};

export default function DisclaimerPage() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6"><span className="gradient-text">Disclaimer</span></h1>
        <div className="prose prose-invert max-w-none space-y-4 text-muted leading-relaxed">
          <p>The information and tools provided on ColorCraft are for general informational and design purposes only.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Accuracy</h2>
          <p>While we make every effort to ensure the accuracy of color conversions, contrast ratios, and palette suggestions, we cannot guarantee that every result will be perfect for your specific use case. Color perception varies across devices, screens, and lighting conditions.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Accessibility</h2>
          <p>Our contrast checker uses standard WCAG formulas and is a helpful guide, but it should not replace professional accessibility audits for compliance-critical applications. Always test with real users and official accessibility evaluation tools when required.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">External Links</h2>
          <p>ColorCraft may contain links to external websites. We are not responsible for the content, privacy practices, or availability of those sites.</p>
          <p className="text-sm text-muted mt-6">Last updated: May 2026</p>
        </div>
      </div>
    </div>
  );
}
