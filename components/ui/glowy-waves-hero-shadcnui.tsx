"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import {
  CALENDLY_URL,
  trustBarItems,
} from "@/components/constants/site-content";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, staggerChildren: 0.13 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function GlowyWavesHero() {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden"
      role="region"
      aria-label="Velaeva hero section"
    >
      {/* ── Full-bleed video background ── */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
      >
        <source src="/media/hero-mountain.mp4" type="video/mp4" />
      </video>

      {/* ── Veil — barely-there, lets the mountain breathe ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 55%, rgba(10,18,32,0.22) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-6 pb-0 pt-28 md:px-8 md:pt-36">
        <motion.div
          variants={containerVariants}
          initial={false}
          animate="visible"
          className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-14"
        >
          {/* Left — headline + CTA */}
          <div>
            <motion.div
              variants={itemVariants}
              className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/64"
            >
              Done-for-you AI concierge · live in 5 days
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 max-w-4xl font-heading text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-white drop-shadow-sm md:text-7xl lg:text-[5.7rem]"
            >
              Stop handling customers.
              <br />
              Let AI do it with taste.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-lg leading-8 text-white/80 md:text-xl"
            >
              Every enquiry that lands after hours — the one your team won&apos;t
              see until tomorrow — gets a clear, calm, on-brand reply right now.
              No scripts. No bots. A concierge that actually sounds like you.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" className="px-7">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                  Book a Free 20-Minute Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 px-7 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                <a href="#demo">See It In Action</a>
              </Button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm leading-7 text-white/48"
            >
              Free call. We&apos;ll tell you honestly if it&apos;s the right fit before anything starts.
            </motion.p>
          </div>

          {/* Right — glass chat card */}
          <motion.div variants={itemVariants} className="relative lg:justify-self-end">
            <div
              className="relative max-w-[34rem] rounded-[1.5rem] p-6 md:p-8"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.38) 100%)",
                border: "1px solid rgba(255,255,255,0.55)",
                boxShadow:
                  "0 16px 48px rgba(10,18,32,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
                backdropFilter: "blur(24px) saturate(1.1)",
                WebkitBackdropFilter: "blur(24px) saturate(1.1)",
              }}
            >
              <div className="flex items-center justify-between font-mono text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/60">
                <span>Incoming — after hours</span>
                <span>11:18 PM</span>
              </div>

              <h2 className="mt-6 max-w-md font-heading text-2xl font-semibold leading-[1.1] tracking-[-0.04em] text-foreground">
                While you slept, the lead was qualified,
                the question was answered, the slot was held.
              </h2>

              <div className="mt-6 space-y-4">
                <div className="max-w-[82%] rounded-[1.2rem] bg-[#ebf1fa]/80 px-5 py-4 text-sm leading-7 text-foreground/78 backdrop-blur-sm">
                  Do you still have the blue SUV? Can I book a test drive for tomorrow afternoon?
                </div>
                <div className="ml-auto max-w-[88%] rounded-[1.2rem] bg-secondary px-5 py-4 text-sm leading-7 text-secondary-foreground">
                  Yes — it&apos;s available. I&apos;ve held a slot for tomorrow at 3 PM and sent you a confirmation. The team will have your full context ready when they&apos;re in.
                </div>
              </div>

              <div className="mt-6 grid gap-5 border-t border-[#123b6b]/10 pt-6 sm:grid-cols-2">
                <div>
                  <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                    What it knows
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/64">
                    Your inventory, tone, policies, pricing, and every edge case your team handles daily.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                    What you get
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/64">
                    A warm lead in the morning instead of a cold one. Every time. Without lifting a finger.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Trust bar — frosted strip at the bottom of the hero ── */}
        <motion.div
          variants={itemVariants}
          initial={false}
          animate="visible"
          className="mt-12 md:mt-14"
        >
          <div
            className="grid gap-6 rounded-2xl px-7 py-7 md:grid-cols-3"
            style={{
              background: "rgba(255,255,255,0.28)",
              border: "1px solid rgba(255,255,255,0.40)",
              backdropFilter: "blur(20px) saturate(1.08)",
              WebkitBackdropFilter: "blur(20px) saturate(1.08)",
            }}
          >
            {trustBarItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-white/80 shadow-[0_0_0_6px_rgba(255,255,255,0.16)]" />
                <div>
                  <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/60">
                    {item.label}
                  </div>
                  <div className="mt-2 font-heading text-3xl font-semibold tracking-[-0.05em] text-white">
                    {item.value}
                  </div>
                  <p className="mt-2 max-w-xs text-sm leading-7 text-white/64">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom padding so trust bar clears the fold */}
        <div className="h-14 md:h-20" />
      </div>
    </section>
  );
}
