"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    slug: "how-to-choose-colors-like-a-pro",
    title: "How to Choose Colors Like a Pro (Without a Design Degree)",
    excerpt:
      "I spent three years fumbling with color pickers before I figured out the simple rules that actually matter. Here is what I wish someone had told me on day one.",
    date: "May 10, 2026",
    readTime: "6 min read",
    category: "Design Tips",
  },
  {
    slug: "understanding-color-accessibility",
    title: "Color Accessibility Is Not Optional — Here Is How to Get It Right",
    excerpt:
      "Last year I had a client whose website failed an accessibility audit because the button text was too light. That single fix taught me more about contrast than any tutorial ever could.",
    date: "May 5, 2026",
    readTime: "8 min read",
    category: "Accessibility",
  },
  {
    slug: "gradient-trends-2026",
    title: "Gradient Trends That Are Actually Worth Using in 2026",
    excerpt:
      "Every year someone declares gradients are dead. And every year, designers find new ways to make them fresh. Here are the approaches that are working right now.",
    date: "April 28, 2026",
    readTime: "5 min read",
    category: "Trends",
  },
  {
    slug: "building-brand-color-palette",
    title: "How I Build Brand Color Palettes From Scratch",
    excerpt:
      "When I started freelancing, I would throw colors together and hope for the best. Now I follow a repeatable process that gives every brand a cohesive, memorable look.",
    date: "April 20, 2026",
    readTime: "7 min read",
    category: "Branding",
  },
];

export default function BlogPage() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5 text-violet-400" />
            Design Insights
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Color <span className="gradient-text">Blog</span>
          </h1>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            Practical lessons, real mistakes, and honest advice about working with color.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl glass p-6 transition-all duration-300 glass-hover h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-lg bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-300">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-violet-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-violet-400 group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
