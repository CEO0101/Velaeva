"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import { BrandLockup } from "@/components/site/brand-lockup";
import { CALENDLY_URL, navigationLinks } from "@/components/constants/site-content";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [isRaised, setIsRaised] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsRaised(value > 24);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          className="relative mt-4 overflow-hidden rounded-[1.45rem] border px-4 py-3 md:px-5"
          animate={{
            borderColor: isRaised
              ? "rgba(19,38,61,0.14)"
              : "rgba(19,38,61,0.08)",
            backgroundColor: isRaised
              ? "rgba(248,243,235,0.72)"
              : "rgba(248,243,235,0.88)",
            boxShadow: isRaised
              ? "0 18px 52px rgba(19,38,61,0.12)"
              : "0 14px 36px rgba(19,38,61,0.08)",
          }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          style={{
            backdropFilter: isRaised
              ? "blur(24px) saturate(1.22)"
              : "blur(18px) saturate(1.08)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.16)_100%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/70" />

          <div className="relative flex items-center justify-between gap-4">
            <a
              href="/"
              className="min-w-0"
              aria-label="Velaeva.com home"
            >
              <BrandLockup textClassName="text-[0.92rem] tracking-[0.2em]" />
            </a>

            <nav className="hidden items-center gap-7 text-sm text-foreground/64 lg:flex">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <a href="/#demo">Try the Demo</a>
              </Button>
              <Button asChild className="px-4 text-xs sm:px-5 sm:text-sm">
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                  Book a Call
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mt-3 flex gap-5 overflow-x-auto border-t border-[#123b6b]/8 pt-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#355884]/56 lg:hidden">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="whitespace-nowrap">
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
