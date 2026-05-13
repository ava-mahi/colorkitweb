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
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Cookies</h2>
          <p>We are using Google AdSense to display ads, which involves the use of cookies and web beacons. Google AdSense uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to ColorCraft and other websites. These cookies enable personalized advertising and allow Google and its partners to deliver ads tailored to your interests.</p>
          <p>When you first visit ColorCraft, you will see a cookie consent banner. If you accept, we store your preference so the banner does not appear again on future visits. If you decline, non-essential advertising cookies will not be set, though some contextual ads may still be displayed.</p>
          <p>You can change or withdraw your cookie consent at any time by clearing your browser cookies for colorcraft.vercel.app. You may also opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">AboutAds.info</a>.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Third-Party Advertising (Google AdSense)</h2>
          <p>We display advertisements through Google AdSense to support the free availability of our tools. Google may use cookies and web beacons to collect information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>
          <p>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">AboutAds.info</a>.</p>
          <p>We do not share your personal information with Google or any advertising partners. Google AdSense operates independently and is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Google's Privacy Policy</a>.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Analytics</h2>
          <p>We do not use first-party analytics tools that track your behavior. If we add analytics in the future to understand which tools are most helpful, we will update this policy and provide an opt-out mechanism.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Data Security</h2>
          <p>Since we do not collect personal data on our servers, there is no centralized database to breach. All color operations happen in your browser. Any data you save (palettes, gradients) is stored in your browser's localStorage and remains under your control.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Changes to This Policy</h2>
          <p>We may update this policy from time to time. Any changes will be posted on this page with an updated date.</p>
          <p className="text-sm text-muted mt-6">Last updated: May 2026</p>
        </div>
      </div>
    </div>
  );
}
