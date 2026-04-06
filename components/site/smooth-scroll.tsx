"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const headerOffset = 104;
    const lenis = new Lenis({
      duration: 1.08,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    const resolveTargetTop = (hash: string) => {
      if (!hash || hash === "#") return null;

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return null;

      return Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - headerOffset
      );
    };

    const scrollToHash = (hash: string, immediate = false) => {
      const top = resolveTargetTop(hash);
      if (top === null) return;

      if (immediate) {
        window.scrollTo({ top, left: 0, behavior: "auto" });
        lenis.scrollTo(top, { immediate: true, force: true });
        return;
      }

      lenis.scrollTo(top, { force: true });
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute("href");

      if (!link || !hash || hash === "#") {
        return;
      }

      if (resolveTargetTop(hash) === null) {
        return;
      }

      event.preventDefault();
      scrollToHash(hash);
    };

    frame = window.requestAnimationFrame(raf);
    document.addEventListener("click", handleAnchorClick);
    window.setTimeout(() => {
      if (!window.location.hash) return;

      const initialHash = window.location.hash;
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`
      );
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      scrollToHash(initialHash, true);
    }, 140);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
