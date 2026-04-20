import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLockup } from "@/components/site/brand-lockup";
import { CALENDLY_URL } from "@/components/constants/site-content";

export const metadata: Metadata = {
  title: "You're Booked — Velaeva",
  description: "Your strategy call with Zach is confirmed.",
  alternates: {
    canonical: "/booked",
  },
  robots: { index: false, follow: false },
};

const steps = [
  {
    time: "First 5 minutes",
    heading: "Zach maps your current enquiry flow.",
    body: "Where leads come in. Where they go quiet. Most operators haven't had this laid out in front of them before. It is uncomfortable and useful in equal measure.",
  },
  {
    time: "Next 10 minutes",
    heading: "You will see a number.",
    body: "What the gap is actually costing — not a rough estimate, a figure specific to your volume, your average deal, your drop-off point. Take it with you regardless of what you decide.",
  },
  {
    time: "Final 5 minutes",
    heading: "Zach tells you whether it's a fit.",
    body: "If Velaeva is the right move, he explains exactly what a rollout looks like. If it is not, he says so and tells you what is. The call has a point either way. There is no pitch at the end.",
  },
];

export default function BookedPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div
            className="relative mt-4 overflow-hidden rounded-[1.45rem] border border-[#13263d]/10 px-4 py-3 md:px-5"
            style={{
              backgroundColor: "rgba(248,243,235,0.88)",
              backdropFilter: "blur(18px) saturate(1.08)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.16)_100%)]" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/70" />
            <div className="relative flex items-center justify-between">
              <Link href="/" aria-label="Velaeva home">
                <BrandLockup textClassName="text-[0.92rem] tracking-[0.2em]" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 pb-28 pt-40 md:px-8 md:pt-48">

        {/* Confirmation mark */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#123b6b]/12 bg-[#edf2fa]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 11.5L9 15.5L17 7" stroke="#13263D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Hero */}
        <h1 className="mt-7 font-heading text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-foreground md:text-5xl">
          You're in.
        </h1>
        <p className="mt-5 text-lg leading-8 text-foreground/64">
          Zach takes every first call himself. You will leave with more clarity on your business than you have had in a long time — whether it is the right fit or not. Expect a straight conversation across operations, gaps, and where AI actually moves the needle for you.
        </p>

        {/* Divider */}
        <div className="mt-12 border-t border-[#123b6b]/8" />

        {/* What to expect */}
        <div className="mt-12">
          <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#355884]/52">
            What happens on the call
          </div>

          <div className="mt-8 space-y-0 divide-y divide-[#123b6b]/8">
            {steps.map((step, i) => (
              <div key={i} className="grid gap-3 py-8 md:grid-cols-[0.72fr_1fr] md:gap-10">
                <div>
                  <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/44">
                    {step.time}
                  </div>
                  <div className="mt-3 font-heading text-lg font-semibold leading-[1.2] tracking-[-0.03em] text-foreground">
                    {step.heading}
                  </div>
                </div>
                <p className="text-sm leading-7 text-foreground/62 md:pt-7">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-2 border-t border-[#123b6b]/8" />

        {/* Share nudge */}
        <div className="glass-surface mt-10 rounded-[1.5rem] px-7 py-8 md:px-8">
          <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#355884]/48">
            One thing before the call
          </div>
          <p className="mt-4 text-base leading-8 text-foreground/72">
            If someone came to mind while you were reading this — a business owner you know who's losing leads after hours — forward them this page. Not to sell them anything. Just because the problem is costing them money every night and they probably have no idea.
          </p>
          <a
            href={`mailto:?subject=Worth%2020%20minutes%20of%20your%20time&body=I%20just%20booked%20a%20call%20with%20these%20guys%20and%20thought%20of%20you%20immediately.%20https%3A%2F%2Fwww.velaeva.com`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-72"
          >
            Forward to someone
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Reassurance */}
        <p className="mt-8 text-center text-sm leading-7 text-foreground/40">
          Check your email for the calendar invite. If anything changes, you can reschedule directly from the confirmation email.
        </p>

      </main>

      <footer className="border-t border-[#123b6b]/10 bg-[#f2ebe0] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-8">
          <BrandLockup textClassName="tracking-[0.2em]" />
          <div className="flex items-center gap-6 text-sm text-foreground/54">
            <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
            <Link href="/blog" className="transition-colors hover:text-foreground">Blog</Link>
            <a href="mailto:hello@velaeva.com" className="transition-colors hover:text-foreground">hello@velaeva.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
