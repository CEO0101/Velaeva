import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { BrandLockup } from "@/components/site/brand-lockup";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/components/constants/site-content";
import { getAllArticles, getArticleBySlug } from "../articles-data";
import { articleContent } from "../articles-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} — Velaeva`,
    description: article.metaDescription,
    keywords: article.keywords,
    authors: [{ name: article.author, url: "https://velaeva.com" }],
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://velaeva.com/blog/${article.slug}`,
      siteName: "Velaeva",
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const content = articleContent[slug];
  if (!content) notFound();

  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const nextArticle = allArticles[currentIndex + 1] ?? null;
  const prevArticle = allArticles[currentIndex - 1] ?? null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
      url: "https://velaeva.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Velaeva",
      url: "https://velaeva.com",
    },
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? article.publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://velaeva.com/blog/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
  };

  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 pb-28 pt-36 md:px-8 md:pt-44">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52 transition-colors hover:text-[#355884]"
        >
          <ArrowLeft className="h-3 w-3" />
          All articles
        </Link>

        {/* Article header */}
        <div className="mt-10 border-b border-[#123b6b]/10 pb-10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#355884]/48">
              {article.category}
            </span>
            <span className="h-px w-4 bg-[#355884]/20" />
            <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#355884]/48">
              {article.readingTime} min read
            </span>
            <span className="h-px w-4 bg-[#355884]/20" />
            <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#355884]/48">
              {new Date(article.publishedDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-foreground md:text-5xl lg:text-[3.4rem]">
            {article.title}
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123b6b]/10 bg-[#edf2fa] font-heading text-sm font-semibold text-primary">
              {article.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                {article.author}
              </div>
              <div className="text-xs text-foreground/52">{article.authorRole}</div>
            </div>
          </div>
        </div>

        {/* Article body */}
        <article className="prose-velaeva mt-12">{content}</article>

        {/* Author bio */}
        <div className="glass-surface mt-14 rounded-[1.5rem] px-7 py-7 md:px-8">
          <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#355884]/48">
            About the author
          </div>
          <div className="mt-4 text-base font-semibold text-foreground">
            {article.author}
          </div>
          <p className="mt-3 text-sm leading-7 text-foreground/64">
            Zach spent years inside Oracle consulting on database operations and
            architecture, before moving into client acquisition work with
            professional services firms in Manhattan. He then consulted across
            branding and operations for small and mid-size businesses in Europe.
            The pattern was consistent: strong businesses losing warm demand
            because the right reply came too late. Velaeva is the system he kept
            wishing existed.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-72"
          >
            Book a free call with Zach
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-[1.5rem] bg-[#f2ebe0] px-8 py-10 md:px-10">
          <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
            Ready to close the gap
          </div>
          <h2 className="mt-4 font-heading text-2xl font-semibold leading-[1.1] tracking-[-0.04em] text-foreground md:text-3xl">
            Find out what your business is losing after hours — in one free
            20-minute call.
          </h2>
          <div className="mt-7">
            <Button asChild size="lg" className="px-7">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book Your Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm leading-7 text-foreground/52">
            No commitment. No pitch. Just the numbers for your business.
          </p>
        </div>

        {/* Prev / Next */}
        {(prevArticle ?? nextArticle) && (
          <div className="mt-14 grid gap-4 border-t border-[#123b6b]/10 pt-10 sm:grid-cols-2">
            {prevArticle ? (
              <Link
                href={`/blog/${prevArticle.slug}`}
                className="group rounded-[1.25rem] border border-[#123b6b]/8 px-6 py-5 transition-colors hover:border-[#123b6b]/18 hover:bg-[#f8f3eb]"
              >
                <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/48">
                  ← Previous
                </div>
                <div className="mt-3 text-sm font-semibold leading-6 text-foreground">
                  {prevArticle.title}
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle && (
              <Link
                href={`/blog/${nextArticle.slug}`}
                className="group rounded-[1.25rem] border border-[#123b6b]/8 px-6 py-5 text-right transition-colors hover:border-[#123b6b]/18 hover:bg-[#f8f3eb]"
              >
                <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/48">
                  Next →
                </div>
                <div className="mt-3 text-sm font-semibold leading-6 text-foreground">
                  {nextArticle.title}
                </div>
              </Link>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-[#123b6b]/10 bg-[#f2ebe0] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-8">
          <Link href="/">
            <BrandLockup textClassName="tracking-[0.2em]" />
          </Link>
          <div className="flex items-center gap-6 text-sm text-foreground/54">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground">
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
