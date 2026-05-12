export const metadata = {
  title: "Contact Us — ColorCraft",
  description: "Get in touch with the ColorCraft team for feedback, feature requests, or partnership inquiries.",
};

export default function ContactUsPage() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-center">Contact <span className="gradient-text">Us</span></h1>
        <p className="text-muted text-center mb-2">Have a suggestion, bug report, or just want to say hello? Fill out the form below.</p>
        <p className="text-center text-sm text-muted mb-8">
          Or email us directly at{" "}
          <a href="mailto:just4working478@gmail.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
            just4working478@gmail.com
          </a>
        </p>
        <div className="rounded-2xl glass p-8 space-y-5">
          <div>
            <label className="text-sm text-muted mb-2 block">Name</label>
            <input type="text" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-violet-500/50" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm text-muted mb-2 block">Email</label>
            <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-violet-500/50" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm text-muted mb-2 block">Message</label>
            <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-violet-500/50" placeholder="How can we help?" />
          </div>
          <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
