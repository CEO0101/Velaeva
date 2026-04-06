import Script from "next/script";
import type { CSSProperties } from "react";

import {
  siAnthropic,
  siBetterstack,
  siCalendly,
  siChatbot,
  siClickhouse,
  siCloudflareworkers,
  siDocker,
  siFastapi,
  siGithubactions,
  siGooglegemini,
  siGooglecalendar,
  siGrafana,
  siIntercom,
  siKubernetes,
  siLangchain,
  siMilvus,
  siMongodb,
  siN8n,
  siOpenrouter,
  siOpentelemetry,
  siPostgresql,
  siPosthog,
  siPrisma,
  siRabbitmq,
  siRedis,
  siRender,
  siResend,
  siSentry,
  siStripe,
  siSupabase,
  siTemporal,
  siUpstash,
  siVercel,
  siWhatsapp,
} from "simple-icons";

import { operatingLayers } from "@/components/constants/site-content";
import { SectionHeading } from "@/components/site/section-heading";

type IconData = {
  path: string;
  hex: string;
};

type OrbitTool = {
  name: string;
  icon: IconData;
  ring: 1 | 2 | 3 | 4;
  angle: number;
};

const orbitRadii = {
  1: 24,
  2: 31.5,
  3: 39,
  4: 45.5,
} as const;

const orbitTools: OrbitTool[] = [
  { name: "Anthropic", icon: siAnthropic, ring: 1, angle: -90 },
  { name: "ChatGPT", icon: siChatbot, ring: 1, angle: 0 },
  { name: "Gemini", icon: siGooglegemini, ring: 1, angle: 90 },
  { name: "OpenRouter", icon: siOpenrouter, ring: 1, angle: 180 },
  { name: "Supabase", icon: siSupabase, ring: 2, angle: -120 },
  { name: "PostgreSQL", icon: siPostgresql, ring: 2, angle: -60 },
  { name: "Redis", icon: siRedis, ring: 2, angle: 0 },
  { name: "Prisma", icon: siPrisma, ring: 2, angle: 60 },
  { name: "LangChain", icon: siLangchain, ring: 2, angle: 120 },
  { name: "n8n", icon: siN8n, ring: 2, angle: 180 },
  { name: "FastAPI", icon: siFastapi, ring: 3, angle: -135 },
  { name: "RabbitMQ", icon: siRabbitmq, ring: 3, angle: -90 },
  { name: "Docker", icon: siDocker, ring: 3, angle: -45 },
  { name: "Vercel", icon: siVercel, ring: 3, angle: 0 },
  { name: "Render", icon: siRender, ring: 3, angle: 45 },
  { name: "GitHub Actions", icon: siGithubactions, ring: 3, angle: 90 },
  { name: "Sentry", icon: siSentry, ring: 3, angle: 135 },
  { name: "Resend", icon: siResend, ring: 3, angle: 180 },
  { name: "WhatsApp", icon: siWhatsapp, ring: 4, angle: -157.5 },
  { name: "Grafana", icon: siGrafana, ring: 4, angle: -135 },
  { name: "Intercom", icon: siIntercom, ring: 4, angle: -112.5 },
  { name: "Stripe", icon: siStripe, ring: 4, angle: -90 },
  { name: "Calendly", icon: siCalendly, ring: 4, angle: -67.5 },
  { name: "Google Calendar", icon: siGooglecalendar, ring: 4, angle: -45 },
  { name: "Better Stack", icon: siBetterstack, ring: 4, angle: -22.5 },
  { name: "Cloudflare Workers", icon: siCloudflareworkers, ring: 4, angle: 0 },
  { name: "Upstash", icon: siUpstash, ring: 4, angle: 22.5 },
  { name: "MongoDB", icon: siMongodb, ring: 4, angle: 45 },
  { name: "Milvus", icon: siMilvus, ring: 4, angle: 67.5 },
  { name: "ClickHouse", icon: siClickhouse, ring: 4, angle: 90 },
  { name: "Temporal", icon: siTemporal, ring: 4, angle: 112.5 },
  { name: "OpenTelemetry", icon: siOpentelemetry, ring: 4, angle: 135 },
  { name: "PostHog", icon: siPosthog, ring: 4, angle: 157.5 },
  { name: "Kubernetes", icon: siKubernetes, ring: 4, angle: 180 },
] as const;

function orbitPosition(tool: OrbitTool) {
  const radians = (tool.angle * Math.PI) / 180;
  const radius = orbitRadii[tool.ring];

  return {
    left: `${50 + Math.cos(radians) * radius}%`,
    top: `${50 + Math.sin(radians) * radius}%`,
  };
}

export function ConciergeEngineSection() {
  return (
    <section
      id="system"
      className="scroll-mt-36 overflow-hidden border-y border-[#123b6b]/10 bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-[84rem] px-6 md:px-8">
        <SectionHeading
          eyebrow="Connected, Not Cobbled Together"
          title="One calm operator out front. A serious stack underneath."
          description="The customer sees a clean answer. Underneath, models, memory, orchestration, CRM routing, voice, booking, delivery, and monitoring are all doing their job."
          align="center"
          className="max-w-4xl"
        />

        <div className="mt-12 md:mt-14">
          <div className="relative mx-auto aspect-square w-full max-w-[42rem] overflow-visible sm:max-w-[48rem] md:max-w-[54rem] lg:max-w-[60rem]">
            <div className="absolute left-1/2 top-1/2 aspect-square h-full w-full -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-[7%] h-14 w-[38%] -translate-x-1/2 rounded-full bg-[#dbe8fb]/45 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(202,219,248,0.44),rgba(202,219,248,0))] blur-3xl" />

              {[50, 66, 82, 96].map((size, index) => (
                <div
                  key={size}
                  className="orbit-ring absolute left-1/2 top-1/2 rounded-full border border-[#123b6b]/6"
                  style={
                    {
                      height: `${size}%`,
                      width: `${size}%`,
                      "--orbit-duration": `${11 + index * 1.8}s`,
                    } as CSSProperties
                  }
                />
              ))}

              {orbitTools.map((tool, index) => {
                const position = orbitPosition(tool);
                const dimension =
                  tool.ring === 1
                    ? "clamp(2rem,5.2vw,3rem)"
                    : tool.ring === 2
                      ? "clamp(1.85rem,4.7vw,2.65rem)"
                      : tool.ring === 3
                        ? "clamp(1.65rem,4vw,2.35rem)"
                        : "clamp(1.45rem,3.45vw,2rem)";
                const radius =
                  tool.ring === 1
                    ? "clamp(0.82rem,1.9vw,1rem)"
                    : tool.ring === 2
                      ? "clamp(0.74rem,1.7vw,0.9rem)"
                      : tool.ring === 3
                        ? "clamp(0.68rem,1.55vw,0.82rem)"
                        : "clamp(0.62rem,1.35vw,0.74rem)";
                const glyphSize =
                  tool.ring >= 3
                    ? "clamp(0.7rem,1.5vw,1rem)"
                    : "clamp(0.82rem,1.8vw,1.15rem)";

                return (
                  <div
                    key={tool.name}
                    className="absolute z-20"
                    style={position}
                  >
                    <div
                      className="paper-panel gpu-layer orbit-float relative flex -translate-x-1/2 -translate-y-1/2 items-center justify-center shadow-[0_8px_24px_rgba(19,38,61,0.06)]"
                      style={{
                        animationDuration: `${5.6 + index * 0.14}s`,
                        animationDelay: `${index * 0.22}s`,
                        width: dimension,
                        height: dimension,
                        borderRadius: radius,
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="shrink-0"
                        style={{ color: `#${tool.icon.hex}` }}
                        width={glyphSize}
                        height={glyphSize}
                      >
                        <path fill="currentColor" d={tool.icon.path} />
                      </svg>
                      <span className="sr-only">{tool.name}</span>
                    </div>
                  </div>
                );
              })}

              <div className="absolute left-1/2 top-1/2 z-10 w-[26%] min-w-[6.6rem] max-w-[9rem] -translate-x-1/2 -translate-y-1/2 sm:w-[23%] sm:max-w-[10.6rem] md:w-[20%] md:max-w-none">
                <div className="glass-surface gpu-layer rounded-[1.25rem] p-2 md:p-2.5">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[1rem] border border-white/70 bg-[#010307]">
                    <video
                      data-system-video=""
                      className="gpu-layer aspect-[9/16] w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster="/media/northstar-ai-concierge-poster.png"
                      disablePictureInPicture
                      disableRemotePlayback
                    >
                      <source
                        src="/media/northstar-ai-concierge-ios.m4v"
                        type="video/x-m4v"
                      />
                      <source
                        src="/media/northstar-ai-concierge-web.mp4"
                        type="video/mp4"
                      />
                      <source src="/media/northstar-ai-concierge.mp4" type="video/mp4" />
                    </video>
                    <button
                      type="button"
                      data-system-audio=""
                      className="absolute bottom-2 right-2 rounded-full border border-white/18 bg-black/24 px-2 py-1 font-mono text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-white/78 backdrop-blur-md transition-colors hover:bg-black/34 hover:text-white"
                    >
                      Unmute
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[#123b6b]/10 pt-8 md:mt-14 md:grid-cols-3">
          {operatingLayers.map((item) => (
            <div key={item.label} className="space-y-3">
              <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                {item.label}
              </div>
              <div className="font-heading text-2xl font-semibold tracking-[-0.03em] text-foreground">
                {item.title}
              </div>
              <p className="max-w-md text-sm leading-7 text-foreground/62">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Script id="northstar-system-video" strategy="afterInteractive">{`
        (() => {
          const section = document.getElementById("system");
          const video = section?.querySelector("[data-system-video]");
          const button = section?.querySelector("[data-system-audio]");
          if (!video || !button) return;

          const updateAudioLabel = () => {
            button.textContent = video.muted ? "Unmute" : "Mute";
          };

          const attemptPlay = () => {
            video.playsInline = true;
            const promise = video.play();
            if (promise && typeof promise.catch === "function") {
              promise.catch(() => undefined);
            }
          };

          const setAudio = (muted) => {
            video.muted = muted;
            video.defaultMuted = muted;
            video.volume = muted ? 0 : 0.35;
            updateAudioLabel();
            attemptPlay();
          };

          setAudio(true);
          attemptPlay();
          video.addEventListener("canplay", attemptPlay);
          video.addEventListener("loadeddata", attemptPlay);
          button.addEventListener("click", () => {
            setAudio(!video.muted);
          });

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) attemptPlay();
            });
          }, { threshold: 0.2 });

          observer.observe(video);
          document.addEventListener("visibilitychange", attemptPlay);
        })();
      `}</Script>
    </section>
  );
}
