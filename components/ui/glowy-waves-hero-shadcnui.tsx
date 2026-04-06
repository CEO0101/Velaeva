"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

import {
  CALENDLY_URL,
  trustBarItems,
} from "@/components/constants/site-content";
import { Button } from "@/components/ui/button";

type Point = {
  x: number;
  y: number;
};

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

const heroSignals = [
  "Car dealerships",
  "Med spas",
  "Real estate agencies",
  "Boutique fitness studios",
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function GlowyWavesHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationId = 0;
    let time = 0;

    const computeThemeColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);

      const resolveColor = (variables: string[], alpha = 1) => {
        const tempEl = document.createElement("div");
        tempEl.style.position = "absolute";
        tempEl.style.visibility = "hidden";
        tempEl.style.width = "1px";
        tempEl.style.height = "1px";
        document.body.appendChild(tempEl);

        let color = `rgba(255, 255, 255, ${alpha})`;

        for (const variable of variables) {
          const value = rootStyles.getPropertyValue(variable).trim();
          if (value) {
            tempEl.style.backgroundColor = `var(${variable})`;
            const computedColor = getComputedStyle(tempEl).backgroundColor;

            if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
              if (alpha < 1) {
                const rgbMatch = computedColor.match(
                  /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/
                );
                if (rgbMatch) {
                  color = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
                } else {
                  color = computedColor;
                }
              } else {
                color = computedColor;
              }
              break;
            }
          }
        }

        document.body.removeChild(tempEl);
        return color;
      };

      return {
        wavePalette: [
          {
            offset: 0,
            amplitude: 38,
            frequency: 0.0028,
            color: resolveColor(["--primary"], 0.36),
            opacity: 0.22,
          },
          {
            offset: Math.PI / 2,
            amplitude: 55,
            frequency: 0.0022,
            color: resolveColor(["--secondary"], 0.22),
            opacity: 0.17,
          },
          {
            offset: Math.PI,
            amplitude: 30,
            frequency: 0.0033,
            color: resolveColor(["--accent"], 0.42),
            opacity: 0.14,
          },
        ] satisfies WaveConfig[],
      };
    };

    let themeColors = computeThemeColors();

    const observer = new MutationObserver(() => {
      themeColors = computeThemeColors();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mouseInfluence = prefersReducedMotion ? 6 : 28;
    const influenceRadius = prefersReducedMotion ? 180 : 340;
    const smoothing = prefersReducedMotion ? 0.04 : 0.075;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, 980);
    };

    const recenterMouse = () => {
      const centerPoint = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = centerPoint;
      targetMouseRef.current = centerPoint;
    };

    const handleResize = () => {
      resizeCanvas();
      recenterMouse();
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseLeave = () => {
      recenterMouse();
    };

    resizeCanvas();
    recenterMouse();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();

      for (let x = 0; x <= canvas.width; x += 5) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect =
          influence *
          mouseInfluence *
          Math.sin(time * 0.001 + x * 0.01 + wave.offset);

        const y =
          canvas.height * 0.54 +
          Math.sin(x * wave.frequency + time * 0.0016 + wave.offset) *
            wave.amplitude +
          Math.sin(x * wave.frequency * 0.45 + time * 0.0021) *
            (wave.amplitude * 0.38) +
          mouseEffect;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineWidth = 1.35;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 12;
      ctx.shadowColor = wave.color;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      time += 1;

      mouseRef.current.x +=
        (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y +=
        (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      themeColors.wavePalette.forEach(drawWave);

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden bg-background"
      role="region"
      aria-label="Velaeva hero section"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8f3eb_0%,#f4efe6_52%,#eef3fb_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_top,rgba(198,216,245,0.34),rgba(198,216,245,0))]" />
      <div className="pointer-events-none absolute left-[6%] top-[14%] h-44 w-44 rounded-full bg-[#e9eff8] blur-[92px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[9%] h-56 w-56 rounded-full bg-[#d8e5f8]/52 blur-[112px]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-28 md:px-8 md:pb-24 md:pt-36">
        <motion.div
          variants={containerVariants}
          initial={false}
          animate="visible"
          className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-14"
        >
          <div>
            <motion.div
              variants={itemVariants}
              className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#355884]/58"
            >
              Hands-off AI concierge for high-ticket businesses
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 max-w-4xl font-heading text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-foreground md:text-7xl lg:text-[5.7rem]"
            >
              Stop handling customers.
              <br />
              Let AI do it with taste.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-2xl text-lg leading-8 text-foreground/78 md:text-xl"
            >
              Late-night leads, repetitive questions, and weekend follow-up
              stop rolling back to the owner. Velaeva keeps the first reply
              clear, composed, and moving while the team is off the clock.
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
              <Button asChild size="lg" variant="outline" className="px-7">
                <a href="#demo">See It In Action</a>
              </Button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm leading-7 text-foreground/58"
            >
              No commitment. We&apos;ll tell you honestly if it&apos;s a fit.
            </motion.p>

            <motion.ul
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/62"
            >
              {heroSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {signal}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div variants={itemVariants} className="relative lg:justify-self-end">
            <div className="glass-surface relative max-w-[34rem] rounded-[1.5rem] p-6 md:p-8">
              <div className="flex items-center justify-between font-mono text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/48">
                <span>Live lead capture</span>
                <span>11:18 PM</span>
              </div>

              <h2 className="mt-6 max-w-md font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-foreground">
                The buyer gets a clear answer now.
                <br />
                Your team gets the context in the morning.
              </h2>

              <div className="mt-8 space-y-4">
                <div className="max-w-[82%] rounded-[1.2rem] bg-[#ebf1fa] px-5 py-4 text-sm leading-7 text-foreground/78">
                  Do you still have the blue SUV in stock, and can I book a test
                  drive for tomorrow afternoon?
                </div>
                <div className="ml-auto max-w-[88%] rounded-[1.2rem] bg-secondary px-5 py-4 text-sm leading-7 text-secondary-foreground">
                  Yes, the blue model is available. I can prepare a test-drive
                  request for tomorrow afternoon and collect the best contact
                  number so the team confirms it first thing.
                </div>
              </div>

              <div className="mt-8 grid gap-5 border-t border-[#123b6b]/10 pt-6 sm:grid-cols-2">
                <div>
                  <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/48">
                    Trained on
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/64">
                    Inventory, policies, offers, schedules, objections, and the
                    tone your business should use.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/48">
                    Outcome
                  </div>
                  <p className="mt-3 text-sm leading-7 text-foreground/64">
                    Leads stay warm, repetitive questions drop off, and the
                    owner is no longer the emergency support plan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial={false}
          animate="visible"
          className="mt-12 grid gap-6 border-y border-[#123b6b]/10 py-7 md:mt-14 md:grid-cols-3"
        >
          {trustBarItems.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="mt-3 h-2.5 w-2.5 rounded-full bg-primary/80 shadow-[0_0_0_6px_rgba(43,92,163,0.08)]" />
              <div>
                <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/48">
                  {item.label}
                </div>
                <div className="mt-2 font-heading text-3xl font-semibold tracking-[-0.05em] text-foreground">
                  {item.value}
                </div>
                <p className="mt-2 max-w-xs text-sm leading-7 text-foreground/58">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
