import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import {
  siCalendly,
  siGmail,
  siGooglecalendar,
  siHubspot,
  siIntercom,
  siStripe,
  siWhatsapp,
} from "simple-icons";

import {
  broaderCoverageNote,
  caseStudy,
  CALENDLY_URL,
  contrastRows,
  deploymentHighlights,
  faqItems,
  founderStory,
  foundingSignals,
  guarantee,
  howItWorksSteps,
  industries,
  integrationExplanations,
  pricingClarifications,
  pricingPlans,
  proofMoments,
  retainerInclusions,
  roiOutcomes,
} from "@/components/constants/site-content";
import { ConciergeEngineSection } from "@/components/site/concierge-engine-section";
import { MockChatDemo } from "@/components/site/mock-chat-demo";
import { BrandLockup } from "@/components/site/brand-lockup";
import { SectionHeading } from "@/components/site/section-heading";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { GlowyWavesHero } from "@/components/ui/glowy-waves-hero-shadcnui";

const operationalLogos = [
  { name: "WhatsApp", icon: siWhatsapp },
  { name: "HubSpot", icon: siHubspot },
  { name: "Calendly", icon: siCalendly },
  { name: "Google Calendar", icon: siGooglecalendar },
  { name: "Gmail", icon: siGmail },
  { name: "Stripe", icon: siStripe },
  { name: "Intercom", icon: siIntercom },
] as const;

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Velaeva.com",
      url: "https://velaeva.com",
      email: "hello@velaeva.com",
      description:
        "Velaeva installs done-for-you AI concierge systems for high-intent businesses that need faster replies, warmer leads, and less front-desk drag.",
      founder: {
        "@type": "Person",
        name: founderStory.name,
        jobTitle: founderStory.role,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Velaeva.com Concierge",
      serviceType: "Done-for-you AI concierge deployment",
      provider: {
        "@type": "Organization",
        name: "Velaeva.com",
      },
      areaServed: ["United States", "United Kingdom", "Europe"],
      audience: {
        "@type": "Audience",
        audienceType: "Founders and business owners",
      },
      description:
        "A hands-off AI concierge for car dealerships, med spas, real estate agencies, boutique fitness studios, and adjacent high-intent service businesses.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      {structuredData.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <SiteHeader />

      <main id="top">
        <GlowyWavesHero />

        <section
          id="trust"
          className="scroll-mt-28 border-y border-[#123b6b]/10 bg-[#f2ebe0] py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.68fr_1.32fr]">
              <SectionHeading
                eyebrow="How We Operate"
                title="Close-in rollout, clear oversight, and no black-box theater."
                description="The point is not to install another shiny AI tool. The point is to give the business a calm, capable operating layer that can actually be trusted once it goes live."
              />

              <div className="border-t border-[#123b6b]/10">
                {foundingSignals.map((signal, index) => (
                  <FadeIn key={signal.label} delay={index * 0.08} y={18}>
                    <article className="relative border-b border-[#123b6b]/10 py-7">
                      <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                        {signal.label}
                      </div>
                      <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-[2.1rem]">
                        {signal.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/64">
                        {signal.description}
                      </p>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn className="mt-14 border-t border-[#123b6b]/10 pt-6" delay={0.2}>
              <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                Connects into the tools your business already runs
              </div>
              <div className="glass-surface mt-6 flex flex-wrap gap-x-6 gap-y-3 px-5 py-4">
                {operationalLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="inline-flex items-center gap-2.5 text-sm font-semibold text-foreground/68"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      style={{ color: `#${logo.icon.hex}` }}
                    >
                      <path fill="currentColor" d={logo.icon.path} />
                    </svg>
                    <span>{logo.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-5 border-t border-[#123b6b]/10 pt-6 md:grid-cols-2 xl:grid-cols-3">
                {integrationExplanations.map((item) => (
                  <div key={item.name}>
                    <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/52">
                      {item.name}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-foreground/62">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="process" className="scroll-mt-28 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="How It Works"
              title="First call Monday. Handling real customers by Friday."
              description="No internal project on your side. No dashboard handed back to you. We handle the build, the training, the launch, and everything after."
            />

            <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-10">
              {howItWorksSteps.map((step, index) => (
                <FadeIn key={step.step} delay={index * 0.07} y={16}>
                  <article className="border-t border-[#123b6b]/10 pt-7">
                    <div className="font-heading text-4xl font-semibold tracking-[-0.06em] text-[#355884]/14">
                      {step.step}
                    </div>
                    <div className="mt-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                      {step.label}
                    </div>
                    <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-foreground/64">
                      {step.description}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-14" delay={0.32}>
              <div className="glass-surface max-w-3xl px-8 py-7">
                <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                  Your data, always
                </div>
                <p className="mt-4 text-base leading-8 text-foreground/72">
                  Every API credential and data source stays in your business
                  account. We connect to run the system. We never extract,
                  transfer, or retain your data on our side. Access can be
                  revoked at any time.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <ConciergeEngineSection />

        <section id="results" className="scroll-mt-28 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="Operating Proof"
              title="What tends to get fixed first."
              description="Usually it is not “AI” in the abstract. It is the missed after-hours demand, the repetitive front-desk drag, and the warm enquiry that cools while no one replies."
            />

            <div className="mt-14 grid gap-10 lg:grid-cols-3">
              {proofMoments.map((moment, index) => (
                <FadeIn key={moment.label} delay={index * 0.12}>
                  <article className="border-t border-[#123b6b]/10 pt-6">
                    <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                      {moment.label}
                    </div>
                    <h3 className="mt-5 max-w-sm font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground">
                      {moment.title}
                    </h3>
                    <p className="mt-5 max-w-md text-base leading-8 text-foreground/62">
                      {moment.description}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>

            <div className="relative mx-auto mt-16 max-w-[70rem] overflow-hidden rounded-[1.5rem] border border-[#123b6b]/8 shadow-[0_16px_34px_rgba(11,25,45,0.08)]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
                aria-hidden="true"
              >
                <source src="/media/hero-ocean.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(4,12,28,0.18)_0%,rgba(4,12,28,0.38)_100%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(255,255,255,0.05)]" />

              <div className="relative flex min-h-[21rem] items-end p-4 sm:min-h-[23rem] sm:p-5 lg:min-h-[24rem] lg:p-6">
                <div className="mx-auto grid w-full max-w-[58rem] gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {roiOutcomes.map((item, index) => (
                  <FadeIn key={item.label} delay={index * 0.07} y={10}>
                    <div className="h-full rounded-[1rem] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_100%)] px-4 py-4 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_20px_rgba(0,0,0,0.07)] sm:px-5 sm:py-5">
                      <div className="font-heading text-[1.7rem] font-semibold leading-[1.1] tracking-[-0.04em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.24)] sm:text-[2rem]">
                        {item.value}
                      </div>
                      <p className="mt-2.5 max-w-xs text-sm leading-7 text-white/84">
                        {item.label}
                      </p>
                    </div>
                  </FadeIn>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#123b6b]/10 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="Deployment Proof"
              title="What has already gone live over the last 6 months."
              description="Eight small businesses are already live on the framework across tourism, jewelry, boutique retail, real estate, and boutique law."
            />

            <div className="mt-14 border-y border-[#123b6b]/10">
              {deploymentHighlights.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.08} y={16}>
                  <article className="grid gap-6 border-b border-[#123b6b]/10 py-8 lg:grid-cols-[0.24fr_0.46fr_0.3fr] lg:gap-10">
                    <div>
                      <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/52">
                        {item.label}
                      </div>
                      <div className="mt-2 text-sm leading-7 text-foreground/54">
                        {item.meta}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-semibold tracking-[-0.05em] text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-foreground/66">
                        {item.summary}
                      </p>
                    </div>
                    <p className="text-sm leading-7 text-primary">{item.outcome}</p>
                  </article>
                </FadeIn>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-foreground/54">
              Where client agreements allow it, deeper operational detail is shared in fit calls.
            </p>
          </div>
        </section>

        {/* ── Case Study ── */}
        <section className="border-t border-[#123b6b]/10 bg-[#f2ebe0] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="Representative Case Study"
              title="One tourism rollout shows what steady coverage actually changed."
              description="Anonymized by request, but structurally representative: high-intent messages, mixed channels, a small team, and real after-hours demand."
            />

            <FadeIn className="mt-14" delay={0.1}>
              <div className="glass-surface overflow-hidden rounded-[1.5rem]">
                <div className="flex flex-col gap-4 border-b border-[#123b6b]/10 px-8 py-6 sm:flex-row sm:items-center sm:justify-between md:px-10">
                  <div>
                    <div className="font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground">
                      {caseStudy.client}
                    </div>
                    <div className="mt-1.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/52">
                      {caseStudy.industry}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: siWhatsapp, name: "WhatsApp" },
                      { icon: siGmail, name: "Email" },
                    ].map(({ icon, name }) => (
                      <div
                        key={name}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-background/60 shadow-sm ring-1 ring-[#123b6b]/8"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          style={{ color: `#${icon.hex}` }}
                        >
                          <path fill="currentColor" d={icon.path} />
                        </svg>
                      </div>
                    ))}
                    <span className="text-sm font-semibold text-foreground/48">
                      · 4 languages
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="grid gap-10 px-8 py-8 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-10 lg:gap-14">
                  <div className="space-y-8">
                    <div>
                      <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/52">
                        The problem
                      </div>
                      <p className="mt-4 text-base leading-8 text-foreground/72">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/52">
                        What we built
                      </div>
                      <p className="mt-4 text-base leading-8 text-foreground/72">
                        {caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/52">
                        What changed on the ground
                      </div>
                      <p className="mt-4 max-w-2xl font-heading text-2xl leading-[1.2] tracking-[-0.04em] text-foreground/86">
                        {caseStudy.fieldNote}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#123b6b]/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                    <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/52">
                      After 6 months
                    </div>
                    <div className="mt-5 divide-y divide-[#123b6b]/8">
                      {caseStudy.results.map((r) => (
                        <div key={r.label} className="py-5">
                          <div className="font-heading text-3xl font-semibold tracking-[-0.05em] text-foreground">
                            {r.value}
                          </div>
                          <p className="mt-1 text-sm leading-7 text-foreground/58">
                            {r.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <MockChatDemo />

        <section id="comparison" className="scroll-mt-28 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.66fr_1.34fr]">
              <SectionHeading
                eyebrow="Difference"
                title="Most bots make the customer work harder. Ours does the opposite."
                description="A weak bot creates hesitation. A strong one makes the business feel calm, competent, and already in control."
              />

              <div className="border-t border-[#123b6b]/10">
                <div className="grid md:grid-cols-[0.48fr_0.52fr]">
                  <div className="border-b border-[#123b6b]/10 bg-[#f5e9e7] px-6 py-5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#9a4f42] md:border-r md:border-b-0">
                    What customers already hate
                  </div>
                  <div className="bg-[#eaf1fb] px-6 py-5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]">
                    What Velaeva is designed to feel like
                  </div>
                </div>

                {contrastRows.map((row, index) => (
                  <FadeIn key={row.label} delay={index * 0.08} y={16}>
                    <div className="grid border-b border-[#123b6b]/10 md:grid-cols-[0.18fr_0.41fr_0.41fr]">
                      <div className="px-6 py-6 font-semibold text-foreground">
                        {row.label}
                      </div>
                      <div className="border-t border-[#123b6b]/8 bg-[#f9eeec] px-6 py-6 text-sm leading-7 text-[#714f49] md:border-r md:border-t-0">
                        {row.typical}
                      </div>
                      <div className="border-t border-[#123b6b]/8 bg-[#eff5fd] px-6 py-6 text-sm leading-7 text-[#1f3e66] md:border-t-0">
                        {row.northstar}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="industries"
          className="scroll-mt-28 border-y border-[#123b6b]/10 bg-[#f2ebe0] py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="Who It's For"
              title="Best where a missed reply has real revenue attached to it."
              description={broaderCoverageNote}
            />

            <div className="mt-16 border-t border-[#123b6b]/10">
              {industries.map((industry, index) => (
                <FadeIn key={industry.name} delay={index * 0.08} y={20}>
                  <article className="grid gap-8 border-b border-[#123b6b]/10 py-10 lg:grid-cols-[0.1fr_0.47fr_0.43fr] lg:items-start lg:gap-12">
                    <div className="font-heading text-3xl font-semibold tracking-[-0.05em] text-[#355884]/40 lg:pt-1">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground">
                        {industry.name}
                      </div>
                      <p className="mt-4 text-base leading-8 text-foreground/64">
                        {industry.pain}
                      </p>
                      <div className="mt-5 text-sm font-semibold leading-7 text-primary">
                        {industry.outcome}
                      </div>
                      <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/56">
                        {industry.edgeCase}
                      </p>
                    </div>
                    <div className="border-t border-[#123b6b]/10 pt-3 lg:pt-1">
                      <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/48">
                        Typical asks it handles well
                      </div>
                      <div className="mt-4 space-y-3">
                        {industry.chatPreview
                          .filter((msg) => msg.role === "user")
                          .slice(0, 2)
                          .map((msg) => (
                            <div
                              key={msg.text}
                              className="flex items-start gap-3 text-sm leading-7 text-foreground/66"
                            >
                              <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary" />
                              <span>{msg.text}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="founder" className="scroll-mt-28 bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-8 lg:grid-cols-[0.56fr_1.44fr] lg:items-center">
            <FadeIn className="mx-auto w-full max-w-[18rem]">
              <div className="glass-surface overflow-hidden rounded-2xl p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem]">
                  <Image
                    src={founderStory.image}
                    alt={founderStory.name}
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="(max-width: 1024px) 18rem, 18rem"
                  />
                </div>
              </div>
            </FadeIn>

            <div className="space-y-7">
              <SectionHeading
                eyebrow="Founder"
                title="Built from a problem that kept showing up in real operations work."
                description={founderStory.body}
              />

              <FadeIn delay={0.18} y={14}>
                <blockquote className="max-w-3xl font-heading text-3xl leading-[1.22] tracking-[-0.04em] text-foreground/88">
                  &ldquo;{founderStory.quote}&rdquo;
                </blockquote>
              </FadeIn>

              <FadeIn delay={0.24} y={12}>
                <div className="font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {founderStory.name}
                </div>
                <div className="mt-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                  {founderStory.role}
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/62">
                  {founderStory.label}
                </p>
                {founderStory.proofNote && (
                  <p className="mt-4 text-sm leading-7 text-foreground/54">
                    {founderStory.proofNote}
                  </p>
                )}
              </FadeIn>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="scroll-mt-28 border-y border-[#123b6b]/10 bg-[#f2ebe0] py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
              <SectionHeading
                eyebrow="Pricing"
                title="Cheaper than part-time front-desk drag. Better than patchwork."
                description="The setup is one-time. The retainer keeps the assistant sharp. The real comparison is not software spend. It is payroll drag, slower follow-up, and leads going cold."
              />

              <FadeIn y={24}>
                <div className="border-y border-[#123b6b]/10">
                  {pricingPlans.map((plan) => (
                    <article
                      key={plan.name}
                      className={`grid gap-8 px-0 py-9 md:grid-cols-[0.36fr_0.64fr] md:gap-10 md:py-10 ${
                        plan.highlighted ? "border-t border-[#123b6b]/10" : ""
                      }`}
                    >
                      <div>
                        <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                          {plan.audienceLabel}
                        </div>
                        <h3 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.05em] text-foreground">
                          {plan.name}
                        </h3>

                        <div className="mt-8 flex items-end gap-3">
                          <div className="font-heading text-5xl font-semibold tracking-[-0.06em] text-foreground">
                            {plan.price}
                          </div>
                          <div className="pb-1 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/46">
                            {plan.cadence}
                          </div>
                        </div>
                        <div className="mt-3 text-sm font-semibold text-foreground">
                          {plan.monthly}
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-foreground/64">
                          {plan.description}
                        </p>

                        <div className="mt-6 text-sm leading-7 text-primary">
                          {plan.investment}
                        </div>
                      </div>

                      <div className="border-t border-[#123b6b]/10 pt-1 md:border-l md:border-t-0 md:pl-10">
                        <div className="space-y-3">
                          {plan.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                              <span className="text-sm leading-7 text-foreground/72">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Button asChild size="lg" className="mt-8 px-7">
                          <a href={plan.href} target="_blank" rel="noreferrer">
                            {plan.cta}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="mt-14 grid gap-10 border-t border-[#123b6b]/10 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                  What the $149/month covers
                </div>
                <div className="mt-5 space-y-3">
                  {retainerInclusions.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm leading-7 text-foreground/68">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-6 border-t border-[#123b6b]/10 pt-8">
                  {pricingClarifications.map((item) => (
                    <div key={item.label}>
                      <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/52">
                        {item.label}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-foreground/62">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-surface rounded-[1.5rem] px-7 py-7 md:px-8 md:py-8">
                <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                  {guarantee.title}
                </div>
                <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  Clear terms. No vague “we’ll make it right.”
                </h3>
                <p className="mt-4 text-base leading-8 text-foreground/66">
                  {guarantee.description}
                </p>
                <div className="mt-6 space-y-3 border-t border-[#123b6b]/10 pt-6">
                  {guarantee.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm leading-7 text-foreground/68">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="The questions serious buyers usually ask before they book."
              description="The goal here is clarity, not cleverness. If you are evaluating a real rollout, these are the practical questions that matter."
            />

            <div className="mt-14 border-y border-[#123b6b]/10">
              {faqItems.map((item, index) => (
                <FadeIn key={item.question} delay={index * 0.04} y={12}>
                  <article className="grid gap-4 border-b border-[#123b6b]/10 py-7 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10">
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground">
                      {item.question}
                    </h3>
                    <p className="text-base leading-8 text-foreground/64">
                      {item.answer}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>

            <div className="glass-surface mt-10 rounded-[1.5rem] px-7 py-7 md:px-8">
              <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/52">
                Data + model terms
              </div>
              <p className="mt-4 max-w-4xl text-base leading-8 text-foreground/66">
                Velaeva runs on OpenAI, Anthropic, and Gemini model APIs where
                appropriate. Data stays attached to your systems, access can be
                revoked at any time, and regulated or high-risk use cases are scoped
                conservatively rather than automated blindly.
              </p>
            </div>
          </div>
        </section>

        <section id="cta" className="relative isolate overflow-hidden">
          {/* City traffic video background */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            disablePictureInPicture
            disableRemotePlayback
            aria-hidden="true"
          >
            <source src="/media/cta-city.mp4" type="video/mp4" />
          </video>
          {/* Veil — dark enough for text legibility, light enough to feel the city */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,30,0.72)_0%,rgba(6,14,30,0.62)_100%)]" />

          <FadeIn className="relative mx-auto max-w-5xl px-6 py-28 text-center md:px-8 md:py-36">
            <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/52">
              Book a call
            </div>
            <h2 className="mt-6 font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
              Stop losing leads to silence.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Twenty minutes. We map the workflow, assess the fit, and give you
              a straight read — including if it is not the right move. If it is,
              the concierge is live inside a week. No internal project. No
              dashboard to manage after.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white px-8 text-foreground hover:bg-white/90"
              >
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                  Book Your Free Strategy Call
                </a>
              </Button>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/44">
              No commitment. If it is wrong for your business, we will say so in
              the first call.
            </p>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-[#123b6b]/10 bg-[#f2ebe0] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="max-w-md">
            <BrandLockup textClassName="tracking-[0.2em]" />
            <p className="mt-4 text-sm leading-7 text-foreground/58">
              A done-for-you AI concierge for businesses that cannot afford slow
              replies, cold leads, or another tool to babysit.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-foreground/64">
            <a
              href="mailto:hello@velaeva.com"
              className="inline-flex items-center gap-3 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
              hello@velaeva.com
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 transition-colors hover:text-foreground"
            >
              <ArrowRight className="h-4 w-4 text-primary" />
              Book a Free 20-Minute Call
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-[#123b6b]/10 px-6 pt-6 text-sm text-foreground/42 md:px-8">
          &copy; 2026 Velaeva. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
