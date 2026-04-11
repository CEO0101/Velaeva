import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLockup } from "@/components/site/brand-lockup";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/components/constants/site-content";
import { getAllArticles } from "./articles-data";

export const metadata: Metadata = {
  title: "Velaeva Blog — AI Concierge Insights for Service Businesses",
  description:
    "Practical insight on after-hours lead capture, AI concierge systems, and the operational gaps costing service businesses revenue every night.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Velaeva Blog — AI Concierge Insights for Service Businesses",
    description:
      "Practical insight on after-hours lead capture, AI concierge systems, and the operational gaps costing service businesses revenue every night.",
    url: "https://velaeva.com/blog",
    siteName: "Velaeva",
    type: "website",
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Velaeva Blog",
    description:
      "Practical insight on after-hours lead capture, AI concierge systems, and the operational gaps costing service businesses revenue every night.",
    url: "https://www.velaeva.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Velaeva",
      url: "https://www.velaeva.com",
    },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `https://www.velaeva.com/blog/${article.slug}`,
      datePublished: article.publishedDate,
      author: {
        "@type": "Person",
        name: article.author,
      },
    })),
  };

  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 pb-28 pt-36 md:px-8 md:pt-44">
        {/* Header */}
        <div className="border-b border-[#123b6b]/10 pb-14">
          <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#355884]/56">
            Velaeva · Insights
          </div>
          <h1 className="mt-6 max-w-3xl font-heading text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-foreground md:text-6xl lg:text-7xl">
            The operational gaps nobody's
            <br className="hidden md:block" /> calculating.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-foreground/68">
            Written by Zach Vivek from real deployments, real conversations, and
            the revenue problems most business owners don't know they have.
          </p>
        </div>

        {/* Articles */}
        <div className="mt-0 divide-y divide-[#123b6b]/8">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="grid gap-6 py-12 lg:grid-cols-[0.08fr_1fr_0.36fr] lg:gap-14 lg:items-start"
            >
              <div className="hidden font-heading text-3xl font-semibold tracking-[-0.06em] text-[#355884]/18 lg:block">
                0{index + 1}
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#355884]/48">
                    {article.category}
                  </span>
                  <span className="h-px w-4 bg-[#355884]/20" />
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#355884]/48">
                    {article.readingTime} min read
                  </span>
                </div>

                <Link href={`/blog/${article.slug}`}>
                  <h2 className="mt-4 font-heading text-2xl font-semibold leading-[1.1] tracking-[-0.04em] text-foreground transition-colors hover:text-primary md:text-3xl">
                    {article.title}
                  </h2>
                </Link>

                <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/62">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-72"
                >
                  Read article
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="hidden border-l border-[#123b6b]/8 pl-10 lg:block">
                <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/48">
                  Author
                </div>
                <div className="mt-3 text-sm font-semibold text-foreground">
                  {article.author}
                </div>
                <div className="mt-1 text-xs text-foreground/52">
                  {article.authorRole}
                </div>
                <div className="mt-5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/48">
                  Published
                </div>
                <div className="mt-3 text-sm text-foreground/64">
                  {new Date(article.publishedDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-surface mt-14 rounded-[1.5rem] px-8 py-10 md:px-10">
          <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
            Ready to close the gap
          </div>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground md:text-4xl">
            Twenty minutes. We'll show you exactly what your operation is losing
            after hours.
          </h2>
          <div className="mt-8">
            <Button asChild size="lg" className="px-7">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm leading-7 text-foreground/52">
            Most operators who take this call leave wishing they had done it three months earlier. Twenty minutes.
          </p>
        </div>
      </main>

      <footer className="border-t border-[#123b6b]/10 bg-[#f2ebe0] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-8">
          <BrandLockup textClassName="tracking-[0.2em]" />
          <div className="flex items-center gap-6 text-sm text-foreground/54">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <a
              href="mailto:hello@velaeva.com"
              className="transition-colors hover:text-foreground"
            >
              hello@velaeva.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
