export const metadata = {
  title: "Privacy Policy — ColorCraft",
  description: "ColorCraft privacy policy — we do not collect personal data and all processing happens in your browser.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Privacy <span className="gradient-text">Policy</span></h1>
        <div className="prose prose-invert max-w-none space-y-4 text-muted leading-relaxed">
          <p>At ColorCraft, your privacy is our priority. This policy explains what data we collect (spoiler: almost none) and how we handle it.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">No Personal Data Collection</h2>
          <p>We do not collect, store, or transmit any personally identifiable information. You do not need to create an account to use any of our tools. Every color conversion, palette generation, and gradient creation happens entirely within your web browser.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Local Storage Only</h2>
          <p>If you choose to save palettes or gradients, they are stored locally in your browser using localStorage. This data never leaves your device. Clearing your browser data will remove your saved items.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Cookies and Analytics</h2>
          <p>We do not use tracking cookies or third-party analytics services that monitor your behavior across the web. We may use Google AdSense to display ads, which operates under its own privacy policy.</p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Changes to This Policy</h2>
          <p>We may update this policy from time to time. Any changes will be posted on this page with an updated date.</p>
          <p className="text-sm text-muted mt-6">Last updated: May 2026</p>
        </div>
      </div>
    </div>
  );
}
