"use client";

import { useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`ColorCraft Contact: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:just4working478@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

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

        {sent ? (
          <div className="rounded-2xl glass p-8 text-center space-y-4">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto" />
            <h2 className="text-xl font-bold text-foreground">Message Ready</h2>
            <p className="text-muted text-sm">
              Your default email app should have opened with your message pre-filled. If it did not open, you can email us directly at{" "}
              <a href="mailto:just4working478@gmail.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
                just4working478@gmail.com
              </a>.
            </p>
            <button
              onClick={() => { setSent(false); setName(""); setEmail(""); setMessage(""); }}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl glass p-8 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm text-muted mb-2 block">Name</label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-violet-500/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted mb-2 block">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-violet-500/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted mb-2 block">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-violet-500/50"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
