"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is ColorCraft completely free to use?",
    answer:
      "Yes, every tool on ColorCraft is free to use. There are no paywalls, no signup requirements, and no usage limits. We built this because we believe great design tools should be accessible to everyone.",
  },
  {
    question: "How does the palette generator work?",
    answer:
      "Our palette generator uses color harmony theory to create balanced 5-color schemes. It considers complementary, analogous, and triadic relationships. You can lock colors you want to keep and regenerate the rest until you find the perfect combination.",
  },
  {
    question: "Are my saved palettes stored securely?",
    answer:
      "All your saved palettes and gradients are stored locally in your browser using localStorage. They never leave your device, which means complete privacy. Just note that clearing your browser data will remove your saved collections.",
  },
  {
    question: "What is WCAG contrast compliance?",
    answer:
      "WCAG stands for Web Content Accessibility Guidelines. The contrast checker verifies whether text is readable against its background. AA level means a 4.5:1 ratio for normal text, while AAA requires 7:1. Our tool checks both in real-time.",
  },
  {
    question: "Can I use these palettes commercially?",
    answer:
      "Absolutely. Every palette and gradient you generate is yours to use however you want — personal projects, client work, commercial products, or open source. No attribution required.",
  },
  {
    question: "Does ColorCraft work offline?",
    answer:
      "Once loaded, most of ColorCraft works offline in your browser. The tools themselves do not require an internet connection. However, you will need to be online to load the site initially.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24" id="faq">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to know about ColorCraft.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-2xl glass overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-muted transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-6 pb-4 text-sm text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
