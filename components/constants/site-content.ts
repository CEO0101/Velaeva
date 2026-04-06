export const CALENDLY_URL = "https://calendly.com/peace-me-practice/discover-call-33-minutes";

export const navigationLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Demo", href: "#demo" },
  { label: "Difference", href: "#comparison" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Founder", href: "#founder" },
] as const;

export const broaderCoverageNote =
  "Velaeva is built first for high-intent service businesses, but the same operating model also adapts well to tourism, boutique retail, specialist supply, real estate, and other sectors where timing and follow-up matter.";

export const foundingSignals = [
  {
    label: "Rollout path",
    title: "Discovery, calibration, launch, then close-in tuning.",
    description:
      "The first week is mapped before anything goes live, so the rollout feels deliberate instead of improvised. Discovery, source material, tone, channels, escalation, then launch.",
  },
  {
    label: "Visible oversight",
    title: "Every conversation stays inspectable, editable, and easy to pause.",
    description:
      "You can review full threads, see what triggered handoffs, and stop the concierge instantly if something feels off. Nothing runs as a black box.",
  },
  {
    label: "Fit-first build",
    title: "If the workflow is wrong for your business, that gets said before the build.",
    description:
      "Some teams need process cleanup before AI. Some industries need tighter escalation rules. We would rather surface that early than sell a messy rollout.",
  },
] as const;

export const trustBarItems = [
  {
    value: "5-7 days",
    label: "Go-live",
    description: "Most deployments move from first call to live assistant inside a working week.",
  },
  {
    value: "Full thread view",
    label: "Oversight",
    description: "Every conversation, handoff, and correction stays visible to your team.",
  },
  {
    value: "Owner-light",
    label: "Workload",
    description: "We run the tuning, routing, and upkeep so the owner does not inherit another dashboard.",
  },
] as const;

export const integrationExplanations = [
  {
    name: "WhatsApp",
    description:
      "Handles inbound messaging and follow-up on the channel many buyers already prefer.",
  },
  {
    name: "HubSpot",
    description:
      "Logs contacts, thread history, and handoff context so the sales team starts informed.",
  },
  {
    name: "Calendly",
    description:
      "Turns a qualified conversation into a booked slot without forcing another back-and-forth.",
  },
  {
    name: "Google Calendar",
    description:
      "Checks live availability so the assistant can guide toward realistic next steps.",
  },
  {
    name: "Gmail",
    description:
      "Keeps email enquiries and follow-up replies inside the same operational flow.",
  },
  {
    name: "Stripe",
    description:
      "Supports deposits, payment links, and paid next steps when the workflow calls for them.",
  },
  {
    name: "Intercom",
    description:
      "Lets web chat stay consistent with the same tone, memory, and handoff logic.",
  },
] as const;

export const operatingLayers = [
  {
    label: "Reasoning",
    title: "Anthropic, OpenAI, and Gemini routing",
    description:
      "Different message types route to the right model layer so replies stay sharp, natural, and context-aware instead of generic.",
  },
  {
    label: "Memory",
    title: "Supabase + Postgres context",
    description:
      "Policies, FAQs, lead history, and business nuance stay attached to every answer instead of living in scattered docs.",
  },
  {
    label: "Action",
    title: "n8n orchestration + delivery",
    description:
      "Booking, CRM handoff, voice, WhatsApp, email, and follow-up keep moving without piling work back onto the team.",
  },
] as const;

export const proofMoments = [
  {
    label: "Dealership groups",
    title: "After-hours inventory questions stop dying in silence.",
    description:
      "Shoppers get a useful next step on stock, trade-ins, and test drives before the desk is back online.",
  },
  {
    label: "Med spas",
    title: "Consultation leads still get handled when the clinic is closed.",
    description:
      "Treatment questions and booking intent get captured cleanly instead of sitting in a cold inbox until morning.",
  },
  {
    label: "Agencies and studios",
    title: "The front desk stops becoming the emergency answer for everything.",
    description:
      "Viewings, class questions, intro offers, and follow-up requests keep moving without dragging the team back into admin mode.",
  },
] as const;

export const deploymentHighlights = [
  {
    label: "Past 6 months",
    title: "8 small businesses live on the same framework",
    meta: "Tourism, jewelry, boutique retail, real estate, and boutique law",
    summary:
      "The mix is varied, but the pattern is consistent: enquiries arrive after hours, the owner or front desk cannot stay glued to them, and a clean first reply matters more than another piece of software.",
    outcome:
      "The gain was straightforward: cleaner first response, warmer follow-up, and less manual catch-up the next morning.",
  },
  {
    label: "Representative rollout",
    title: "Tourism operator with multilingual guest intake",
    meta: "Anonymous by request",
    summary:
      "Availability questions, booking steps, pickup timing, and guest follow-up now move through one trained system across WhatsApp, web, and email instead of waiting for the morning team.",
    outcome:
      "The gain was not louder automation. It was calmer operations: guests got an answer now, staff inherited context later.",
  },
  {
    label: "Adjacent deployments",
    title: "Real estate intake and boutique legal screening",
    meta: "Private deployment",
    summary:
      "Viewing requests, consultation screening, document questions, and next-step capture were wired into the same operating model without asking the team to learn another platform.",
    outcome:
      "The common result was fewer warm enquiries sitting untouched just because the team was busy or off the clock.",
  },
] as const;

export const roiOutcomes = [
  {
    value: "24/7",
    label: "Coverage across evenings, weekends, and the gaps a small team cannot fill",
  },
  {
    value: "1 setup",
    label: "One install instead of a recurring internal build project",
  },
  {
    value: "0 new tools",
    label: "The team stays in familiar channels instead of learning another interface",
  },
  {
    value: "Tuned monthly",
    label: "Review, correction, and tuning stay active after launch",
  },
] as const;

export const comparisonRows = [
  {
    label: "Ownership",
    typical: "You buy the tool, learn the dashboard, and keep it from drifting.",
    northstar:
      "We install it, train it, tune it, and keep the whole thing moving for you.",
  },
  {
    label: "Training",
    typical: "Usually generic FAQ logic with generic answers.",
    northstar:
      "Shaped around your offers, objections, policies, tone, and actual lead flow.",
  },
  {
    label: "Optimization",
    typical: "If it gets stale, the problem lands back on your team.",
    northstar:
      "Ongoing optimization is included, so the assistant keeps getting sharper over time.",
  },
  {
    label: "Brand feel",
    typical: "Often sounds automated within the first three messages.",
    northstar:
      "Feels like a composed front-desk operator who already knows how your business talks.",
  },
] as const;

export const contrastRows = [
  {
    label: "First reply",
    typical: "Answers like a support widget. Asks the customer to rephrase, click a menu, or call back during business hours.",
    northstar:
      "Replies like someone who already knows the business — and moves the conversation toward a useful next step, not a dead end.",
  },
  {
    label: "Brand tone",
    typical: "Sounds automated by message two. Kills trust at exactly the moment the buyer's intent is highest.",
    northstar:
      "Trained on how this specific business talks, not a generic template. The brand still feels intact three messages in.",
  },
  {
    label: "Hard questions",
    typical: "Loops, guesses, or gives a vague non-answer that makes the customer feel like they're talking to a wall.",
    northstar:
      "Handles nuance when it can. When it cannot, it says so and hands off with the full context already attached — not a blank thread.",
  },
  {
    label: "Owner workload",
    typical: "Becomes the thing you have to babysit, apologise for, and eventually turn off after a bad review.",
    northstar:
      "Maintained, tuned, and supervised after launch. The owner never opens a dashboard. It either works or we fix it.",
  },
] as const;

export const founderStory = {
  name: "Zach Vivek",
  role: "Founder, Velaeva",
  label: "Oracle database ops · Manhattan consulting · European brand work",
  quote:
    "Every business I worked with had the same underlying problem. Strong operation during hours. Nothing after. The AI existed to solve it — but everything built to solve it sounded like a machine, soulless at exactly the moment a buyer needed to feel handled. That was the design problem worth solving.",
  body:
    "Zach spent years inside Oracle consulting on database operations and architecture, before moving into client acquisition work with professional services firms in Manhattan. He then consulted across branding and operations for small and mid-size businesses in Europe. The pattern across all of it was consistent: strong businesses losing warm demand not because of bad service, but because the right reply came too late, from a tool that felt cold. Velaeva is the system he kept wishing existed — built on real ops depth, real data architecture, and the kind of front-desk feel that actually converts.",
  image: "/media/founder-portrait.jpg",
  proofNote:
    "References for qualified buyers are shared privately where client agreements allow.",
} as const;

export const howItWorksSteps = [
  {
    step: "01",
    label: "Discovery call",
    title: "We map the operation before touching anything.",
    description:
      "Where leads come in. Where they stall. How follow-up currently works. We are looking for the specific gaps — not a general AI pitch.",
  },
  {
    step: "02",
    label: "Data audit",
    title: "We work with what you already have.",
    description:
      "Pricing sheets, booking systems, policy docs, FAQ patterns, CRM history. The AI is trained on your actual business — not a generic template we retrofit.",
  },
  {
    step: "03",
    label: "Platform selection",
    title: "We go where your customers already are.",
    description:
      "WhatsApp, Telegram, SMS, email, web chat — whichever channel your buyers are already using. No new apps for them to download or learn.",
  },
  {
    step: "04",
    label: "Training and connection",
    title: "The AI is shaped around your tone, offers, and edge cases.",
    description:
      "Objection handling, negotiation ranges, brand voice, escalation logic. Your data stays in your account. We connect to run the system — we never extract or store it on our side.",
  },
  {
    step: "05",
    label: "Analytics layer",
    title: "Performance is tracked from day one.",
    description:
      "Conversion rates, fallback triggers, common patterns, response quality. We see what is working, what to tune, and we act on it — without the owner touching anything.",
  },
  {
    step: "06",
    label: "Live and self-improving",
    title: "It gets sharper the longer it runs.",
    description:
      "The AI refines on real conversations. APIs connected for live data — pricing, inventory, routing, availability. Precise answers at the lowest possible cost per query. Your data stays yours.",
  },
] as const;

export const caseStudy = {
  client: "Tourism operator rollout",
  industry: "Tourism enquiries · bookings · multilingual guest follow-up",
  context:
    "Across the last 6 months, Velaeva has gone live with 8 small businesses spanning tourism, jewelry, boutique retail, real estate, and boutique law. This tourism rollout is the clearest operational example of how the framework behaves in practice.",
  challenge:
    "Guest questions about availability, package differences, pickup timing, and payment terms kept landing after hours. By morning, the warmest enquiries either needed to be re-qualified from scratch or were already gone.",
  solution:
    "We connected booking steps, package logic, timing rules, multilingual replies, and human escalation into one operating flow across WhatsApp, web, and email. The assistant learned the business's tone, rules, and edge cases, while every conversation stayed visible to the team.",
  fieldNote:
    "What changed was not just speed. The first reply already felt usable: clear, on-brand, and pointed toward the next step instead of creating another loose end.",
  results: [
    { value: "8", label: "Small businesses launched on the same framework over the last 6 months" },
    { value: "99.9%", label: "Observed uptime across live deployments with no owner babysitting required" },
    { value: "4", label: "Languages handled across guest-facing and service workflows" },
    { value: "24/7", label: "Coverage across evenings, weekends, and the hours small teams cannot staff" },
  ],
} as const;

export const industries = [
  {
    name: "Car Dealerships",
    pain: "Inventory, finance, and test-drive questions keep coming long after the showroom closes.",
    outcome:
      "Early deployments typically book more weekend and after-hours test-drive intent without adding weekend staff.",
    edgeCase:
      "Handles awkward financing questions, negative-equity trade-ins, and buyers who want a straight answer before wasting another showroom visit.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    chatPreview: [
      { role: "user", text: "Do you have any 7-seaters under $45k?" },
      { role: "ai", text: "Yes — a few options in stock. Are you flexible on fuel type, or do you need something specific?" },
      { role: "user", text: "Petrol's fine. I need it within 3 weeks." },
      { role: "ai", text: "Got it. I'll flag that with the team and have them pull what fits. What's the best number to reach you on?" },
    ],
  },
  {
    name: "Med Spas & Aesthetic Clinics",
    pain: "Consultation leads ask pricing, downtime, and treatment questions when your team is off.",
    outcome:
      "Clients have reported more consult intent staying warm overnight instead of cooling in a form inbox.",
    edgeCase:
      "Handles anxious questions, previous bad reactions, and treatment-fit concerns without sounding clinical, evasive, or reckless.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    chatPreview: [
      { role: "user", text: "How long does Botox last and does it hurt?" },
      { role: "ai", text: "Most clients see results for 3–4 months. It's a quick injection — most describe it as a small pinch. Would you like to book a consultation?" },
      { role: "user", text: "Yes, ideally this week if possible." },
      { role: "ai", text: "I'll flag that for the team now. What's a good time and the best number to confirm the slot?" },
    ],
  },
  {
    name: "Real Estate Agencies",
    pain: "Listing questions and viewing requests land at all hours, usually when agents are already moving.",
    outcome:
      "Agents step into warmer conversations because viewings, timing, and buyer intent have already been qualified.",
    edgeCase:
      "Handles outbid fatigue, 'offers over' skepticism, and area-fit questions without pretending every lead should book a viewing.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    chatPreview: [
      { role: "user", text: "Is 42 Elmwood Road still available?" },
      { role: "ai", text: "Let me check on that. Are you looking to book a viewing or confirming before your agent follows up?" },
      { role: "user", text: "Book a viewing — we're quite keen." },
      { role: "ai", text: "Great, I'll pass that along now. The agent will confirm timing within a couple of hours. What's your preferred day?" },
    ],
  },
  {
    name: "Boutique Fitness Studios",
    pain: "Intro-offer questions, schedules, and membership follow-up can eat the front desk alive.",
    outcome:
      "Studios typically see fewer intro enquiries drift after office hours and fewer repetitive front-desk interruptions.",
    edgeCase:
      "Handles injury history, membership freezes, and nervous-first-class questions with the kind of calm a human coach would use.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    chatPreview: [
      { role: "user", text: "Do you have any early morning classes before 7am?" },
      { role: "ai", text: "Yes — we run 6am sessions Mon–Fri. Looking to try one or explore membership options?" },
      { role: "user", text: "Both — I'm new and not sure where to start." },
      { role: "ai", text: "Perfect. I'll set you up with our intro offer and match you with the right class. What's the best way to reach you?" },
    ],
  },
] as const;

export const guarantee = {
  title: "30-day rollout guarantee",
  description:
    "If the concierge is not meeting the agreed response-quality, routing, and handoff benchmarks in the first 30 days, we keep revising it at no extra charge until it is.",
  points: [
    "Unlimited tuning rounds during the first 30 days",
    "Every conversation stays visible to your team down to the thread level",
    "You can pause the concierge instantly while we review any issue",
  ],
} as const;

export const retainerInclusions = [
  "Monthly conversation review and response-quality tuning",
  "Prompt, policy, offer, and routing updates",
  "Fallback and human-handoff adjustments",
  "Integration health checks and issue spotting",
  "Normal SMB message volume; unusually heavy or custom usage is scoped before launch, not sprung on you later",
] as const;

export const pricingClarifications = [
  {
    label: "What determines the setup range",
    description:
      "Concierge-only pricing moves with channel mix, number of integrations, and how much source material needs structuring. Site + concierge pricing moves with page count, migration complexity, and how much proof, video, and conversion flow needs rebuilding.",
  },
  {
    label: "What the $149/month actually covers",
    description:
      "The retainer is for tuning, supervision, routing changes, integration upkeep, and keeping the system commercially sharp after launch. It is not just hosting. It is the operating layer that stops the assistant from going stale.",
  },
] as const;

export const faqItems = [
  {
    question: "What does “tuned monthly” actually include?",
    answer:
      "A live conversation review, prompt and policy updates, routing adjustments, handoff fixes, and small offer or copy changes. The goal is to keep the concierge sharp as real conversations expose new edge cases.",
  },
  {
    question: "Is there a message or conversation volume limit?",
    answer:
      "The base retainer is built for normal SMB conversation volume. If a deployment is expected to run unusually heavy volume, extra channels, or costly custom tooling, we scope that before launch so there are no surprise bills later.",
  },
  {
    question: "Can I see the conversations the AI is having with customers?",
    answer:
      "Yes. Full thread visibility is part of the operating model. You can inspect replies, see why handoffs happened, and review exactly where something needs tightening.",
  },
  {
    question: "Can I turn it off instantly if something goes wrong?",
    answer:
      "Yes. The concierge can be paused immediately while we review the thread, fix the logic, and confirm the correction before it resumes.",
  },
  {
    question: "What CRMs and booking tools does it actually connect to?",
    answer:
      "Common setups include HubSpot, Calendly, Google Calendar, Gmail, WhatsApp, Stripe, Intercom, and webhook-friendly tools. Basic CRM and booking connections are included when they are part of the rollout. Heavier custom builds are scoped upfront.",
  },
  {
    question: "How long does setup actually take from first call to going live?",
    answer:
      "Most deployments go live in roughly 5 to 7 business days once discovery is complete and access to the required tools or data has been granted.",
  },
  {
    question: "What happens after the 30-day guarantee period?",
    answer:
      "The $149/month retainer continues the tuning, supervision, and integration upkeep. If your business changes, the concierge changes with it instead of being left to drift.",
  },
  {
    question: "Do you support languages other than English?",
    answer:
      "Yes, where the source material and review path exist. Current multilingual deployments run in four languages. Multilingual setups are scoped during onboarding so the tone and terminology stay accurate.",
  },
  {
    question: "What industries do you not serve?",
    answer:
      "We do not deploy unsupervised systems for emergency services, crisis response, or businesses that need autonomous medical, legal, or financial judgment. High-stakes edge cases need tighter human escalation than a normal sales or service concierge.",
  },
  {
    question: "Who do I contact if the AI says something wrong to a customer?",
    answer:
      "You contact us directly. We review the thread, pause the relevant flow if needed, correct the logic, and confirm the fix before putting it back into rotation.",
  },
  {
    question: "How is customer data handled?",
    answer:
      "Your source material and customer conversations stay tied to your business systems. We connect to operate and tune the workflow, but we do not treat your customer data like a separate asset we own. Usage is still subject to the underlying model providers' standard terms.",
  },
] as const;

export const pricingPlans = [
  {
    name: "AI Concierge",
    audienceLabel: "Concierge only",
    price: "$1,500–$2,000",
    cadence: "one-time setup",
    monthly: "$149/month retainer",
    description:
      "We install the concierge on your current site or channel mix, train it on your business, and keep it commercially sharp after launch.",
    features: [
      "Custom discovery and training session",
      "Tone calibration to match your brand",
      "Lead routing, FAQs, objection handling, and human handoff logic",
      "Conversation review and monthly tuning",
      "Ongoing support without a dashboard handoff",
    ],
    cta: "Book a Free 20-Minute Call",
    href: CALENDLY_URL,
    highlighted: false,
    investment:
      "Usually less than one month of part-time front-desk payroll.",
  },
  {
    name: "AI Concierge + Website",
    audienceLabel: "Site + Concierge",
    price: "$2,500–$3,500",
    cadence: "one-time setup",
    monthly: "$149/month retainer",
    description:
      "We rebuild the site and the concierge layer together so the whole front door feels cleaner, sharper, and easier to trust.",
    features: [
      "Everything in AI Concierge",
      "Custom website built around trust, proof, and conversion",
      "Video, narrative, and CTA flow dialed in for your offer",
      "Calendly or lead-capture integration",
      "Migration, polish, and ongoing tuning after launch",
    ],
    cta: "Book a Free 20-Minute Call",
    href: CALENDLY_URL,
    highlighted: true,
    investment:
      "A one-time rebuild that replaces patchwork fixes and slow follow-up.",
  },
] as const;

type DemoRule = {
  keywords: string[];
  response: string;
};

export type DemoScenario = {
  id: string;
  name: string;
  tagline: string;
  assistantName: string;
  intro: string;
  systemPrompt: string;
  quickPrompts: string[];
  rules: DemoRule[];
  fallback: string;
};

export const demoScenarios: DemoScenario[] = [
  {
    id: "dealership",
    name: "Car Dealership",
    tagline: "Inventory, finance questions, and test-drive requests",
    assistantName: "Atlas",
    intro:
      "Hi, I’m Atlas — the concierge for this dealership. I can help with inventory, trade-ins, financing, test drives, and general questions. What can I help you with?",
    systemPrompt:
      "You are Atlas, a high-performing dealership concierge for Velaeva. Sound calm, commercially sharp, and human. Answer like someone who works the front desk for a premium dealership. Be helpful, witty only when it genuinely fits, and never sound like a generic AI assistant. Handle bizarre or skeptical questions with intelligence and restraint. Be honest about not having live inventory or pricing when you do not. Move toward a useful next step whenever appropriate.",
    quickPrompts: [
      "Do you still have SUVs available?",
      "Can I book a test drive for Saturday?",
      "What documents do I need for financing?",
      "I have a 2019 trade-in with $4k negative equity and was rejected for financing last year — is there any point coming in?",
    ],
    rules: [
      {
        keywords: ["suv", "suv?", "crossover", "4x4", "truck", "van", "inventory", "available", "models", "vehicles", "cars", "stock", "what do you have", "in stock"],
        response:
          "Yes, we have SUVs and crossovers in stock across several trim levels and colour options. To give you the most accurate availability, I can note your preferred budget, fuel type, and ideal handover date so the team has everything ready when they follow up. What are the key things you’re looking for?",
      },
      {
        keywords: ["test drive", "test-drive", "testdrive", "drive it", "try it", "book", "schedule", "saturday", "sunday", "tomorrow", "this week", "appointment", "visit", "come in"],
        response:
          "Absolutely — we can get that arranged. I’ll need the model you’re interested in, your preferred day and rough time, and the best number for the team to confirm. Which model are you thinking about?",
      },
      {
        keywords: ["finance", "financing", "loan", "documents", "paperwork", "credit", "monthly payment", "down payment", "deposit", "apr", "interest rate", "lease", "leasing"],
        response:
          "For financing, you’d typically need a valid ID, proof of income (recent pay stubs or bank statements), proof of address, and your insurance details. The finance manager walks you through the rest at the dealership. I can set up a finance conversation now if you’d like to get pre-qualified — what’s your approximate budget range?",
      },
      {
        keywords: ["trade", "trade-in", "trade in", "my car", "sell my", "part exchange", "exchange"],
        response:
          "We do accept trade-ins. To give you a rough estimate, the team will look at the make, model, year, mileage, and condition of your current vehicle. I can pass those details along so they have a number ready before you arrive. What are you trading in?",
      },
      {
        keywords: ["price", "cost", "how much", "pricing", "expensive", "cheap", "value", "worth", "msrp"],
        response:
          "Pricing depends on the specific model, trim, and any current promotions. I don’t have live pricing here, but I can flag your interest and have the sales team send over exact figures — usually within a few hours. Which model are you looking at?",
      },
      {
        keywords: ["hours", "open", "closing time", "when are you", "what time", "weekend"],
        response:
          "The showroom is typically open Monday to Saturday. For exact hours today, I’d recommend calling the front desk directly — I can also leave a note for the team to confirm when they follow up with you.",
      },
      {
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "howdy"],
        response:
          "Hi there! I’m Atlas, the dealership concierge. I’m here around the clock to help with inventory questions, test drives, financing, or anything else you need. What’s on your mind?",
      },
      {
        keywords: ["negative equity", "rejected", "rejection", "turned down", "denied", "bad credit", "any point", "bankruptcy", "previously refused"],
        response:
          "Yes — it's worth the conversation. Negative equity and a prior rejection don't automatically rule you out; a lot depends on what's changed since then — income, credit profile, available deposit. Our finance team regularly works with buyers in similar situations and has access to lenders that standard banks won't surface. I can flag your situation now so they're prepared before you arrive rather than starting cold at the desk. When would work for you?",
      },
    ],
    fallback:
      "I can help with inventory, trade-ins, test drives, financing basics, and general dealership questions. What would you like to know?",
  },
  {
    id: "med-spa",
    name: "Med Spa",
    tagline: "Consultation inquiries, treatment questions, and bookings",
    assistantName: "Sienna",
    intro:
      "Hi, I’m Sienna — the concierge for this clinic. I can help with treatment questions, consultation availability, pricing guidance, and next steps for booking. What brings you in today?",
    systemPrompt:
      "You are Sienna, a premium med spa concierge for Velaeva. Sound poised, warm, clinically careful, and commercially intelligent. Never overclaim medical facts. Encourage consultations where appropriate, handle anxious questions with reassurance and clarity, and keep replies human rather than robotic.",
    quickPrompts: [
      "How soon can I book a consultation?",
      "Do you offer laser and skin treatments?",
      "What should I expect after the appointment?",
      "I had a bad reaction to fillers at another clinic 18 months ago — facial swelling that lasted weeks. Would you even see me?",
    ],
    rules: [
      {
        keywords: ["consultation", "consult", "book", "booking", "availability", "appointment", "schedule", "when can i", "how soon", "next available"],
        response:
          "We typically have consultation slots within a few days, sometimes the same week depending on demand. I can capture your preferred treatment area, availability, and contact details so the coordinator schedules you right away. What treatment are you enquiring about?",
      },
      {
        keywords: ["laser", "ipl", "skin", "rejuvenation", "pigmentation", "texture", "pores", "brightening", "glow", "treatment", "services", "what do you offer", "what treatments"],
        response:
          "Yes — we offer a range of laser and skin treatments including laser resurfacing, IPL for pigmentation and redness, micro-needling, and targeted skin rejuvenation. The right treatment depends on your skin concern and goals. I can note what you’re looking to address and have a practitioner outline the best options before your consultation.",
      },
      {
        keywords: ["botox", "filler", "lip", "lips", "jawline", "cheek", "wrinkle", "anti-aging", "anti aging", "injectables", "injections"],
        response:
          "We offer a range of injectable treatments including anti-wrinkle injections and dermal fillers for lips, cheeks, and jawline contouring. Results are subtle and natural-looking when done well. I can arrange a consultation where the practitioner assesses your goals and recommends the appropriate approach.",
      },
      {
        keywords: ["after", "downtime", "recovery", "expect", "side effects", "bruising", "swelling", "redness", "healed", "how long"],
        response:
          "Downtime varies by treatment. Most laser and skin treatments involve mild redness for 24–48 hours. Injectables typically have little to no downtime, though minor bruising is possible. The practitioner will give you a full aftercare plan before and after the procedure. Is there a specific treatment you’d like to know more about?",
      },
      {
        keywords: ["price", "cost", "pricing", "how much", "expensive", "cheap", "packages", "deals", "discount"],
        response:
          "Pricing depends on the treatment type, area, and number of sessions. A consultation is the best way to get an accurate quote tailored to your goals. I can get you booked in and have the team prepare a treatment plan with pricing before the appointment.",
      },
      {
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
        response:
          "Hi! I’m Sienna, the clinic’s concierge. Whether you have treatment questions, want to know about availability, or are ready to book a consultation, I’m here to help. What can I do for you?",
      },
      {
        keywords: ["bad reaction", "reaction", "swelling", "complication", "went wrong", "bad experience", "previous clinic", "scared", "nervous", "allergic"],
        response:
          "Yes, and thank you for sharing that upfront — this is exactly what we need to know before proceeding with anything. A previous reaction doesn't disqualify you from treatment, but it does change the approach entirely. Our practitioner will review what happened, identify the likely cause, and tell you directly whether and how they'd move forward. Nothing gets booked until that conversation has happened. I can flag your history when I arrange the consultation so they come fully prepared. Shall I get that set up?",
      },
    ],
    fallback:
      "I can help with treatment questions, consultation booking, pricing guidance, and aftercare. What would you like to know?",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Viewings, listing questions, and early buyer qualification",
    assistantName: "Cove",
    intro:
      "Hi, I’m Cove — the agency concierge. I can help with listing questions, viewing availability, area guidance, and connecting you with the right agent. What are you looking for?",
    systemPrompt:
      "You are Cove, a polished real estate concierge for Velaeva. Sound like a high-end agency operator: informed, direct, calm, and never pushy. Handle skeptical property questions with good judgment. You can guide, qualify, and suggest next steps, but do not invent listing facts.",
    quickPrompts: [
      "Can I schedule a viewing this week?",
      "Is the property still available?",
      "Which area is better for families?",
      "I've been outbid on three properties this year and this one also says 'offers over' — how do I know it's worth my time?",
    ],
    rules: [
      {
        keywords: ["viewing", "view", "schedule", "appointment", "tour", "walk through", "see the property", "visit", "this week", "tomorrow", "weekend"],
        response:
          "Yes — I can arrange that. To confirm availability, I’ll need the property address or listing reference, your preferred day and time, and a contact number. The agent will confirm within a few hours. Which property are you interested in?",
      },
      {
        keywords: ["available", "still available", "on the market", "sold", "listing", "property", "is it still", "taken"],
        response:
          "I can check on that for you. If you share the address or listing number, I’ll flag it with the agent and they’ll confirm the status — usually very quickly. If it’s under offer, they can also suggest similar alternatives.",
      },
      {
        keywords: ["area", "family", "families", "school", "schools", "neighborhood", "neighbourhood", "location", "transport", "commute", "safe", "good area"],
        response:
          "That’s a great question to get right early. I can share a general overview of the area, but for specific school ratings, commute times, and safety data, the agent can pull together a neighbourhood report for you. Which area are you considering?",
      },
      {
        keywords: ["price", "how much", "cost", "budget", "afford", "mortgage", "offer", "negotiate", "asking price", "valuation"],
        response:
          "I can pass your budget range to the agent so they shortlist properties that actually fit rather than wasting your time. The agent can also advise on realistic offer levels in the current market. What’s your approximate budget?",
      },
      {
        keywords: ["rent", "rental", "tenant", "landlord", "lease", "renting"],
        response:
          "We handle both sales and rentals. For rentals, I can note your requirements — location, size, budget, and move-in date — and the lettings team will be in touch with suitable options. Are you looking to rent or buy?",
      },
      {
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
        response:
          "Hi! I’m Cove, the agency’s concierge. I’m here to help with property questions, viewing bookings, area guidance, or anything else before you speak with an agent. What can I help with?",
      },
      {
        keywords: ["outbid", "offers over", "worth my time", "competitive", "gazumped", "lost out", "missed out", "keep losing", "frustrated", "realistic", "beaten"],
        response:
          "That's a fair question and the agent should answer it honestly before you invest another weekend. Rather than just passing on a viewing request, I'll specifically flag that you want a straight read on offer competitiveness and recent comparable sales — not a viewings pitch. If the realistic offer level doesn't fit your budget, they should tell you now rather than after the disappointment. Shall I set that up with that note attached?",
      },
    ],
    fallback:
      "I can help with listing availability, viewing requests, area questions, and connecting you with the right agent. What would you like to know?",
  },
  {
    id: "boutique-fitness",
    name: "Boutique Fitness",
    tagline: "Intro offers, class schedules, and membership follow-up",
    assistantName: "Mara",
    intro:
      "Hi, I’m Mara — the studio concierge. I can help with class schedules, intro offers, membership options, and booking your first session. What brings you here today?",
    systemPrompt:
      "You are Mara, a boutique fitness concierge for Velaeva. Sound energetic but composed, not cheesy. Be encouraging, practical, and safety-aware. Handle difficult questions with empathy and confidence, and guide the person toward the right class, coach, or next step.",
    quickPrompts: [
      "Do you have an intro offer?",
      "What classes are best for beginners?",
      "Can I freeze my membership?",
      "I had a herniated disc two years ago. My physio cleared me for light activity but I'm scared of aggravating it — do you even have anything suitable?",
    ],
    rules: [
      {
        keywords: ["intro", "introduction", "offer", "trial", "first time", "new", "join", "try it", "sign up", "discount", "deal", "promo"],
        response:
          "Yes — we have an intro offer for new members that lets you try a set of classes at a reduced rate before committing to a membership. I can capture your details and have the front desk send over the exact terms and how to claim it. What’s the best way to reach you?",
      },
      {
        keywords: ["beginner", "beginners", "new to", "never done", "start", "starting", "first class", "easy", "suitable", "right for me"],
        response:
          "For beginners, we usually recommend starting with our foundational or low-impact sessions — they’re designed to build form and confidence before jumping into higher-intensity formats. I can note your fitness background and goals so the coach can suggest the best starting point for you.",
      },
      {
        keywords: ["classes", "schedule", "timetable", "when", "what time", "morning", "evening", "weekend", "class times"],
        response:
          "We run classes throughout the day, including early morning, lunchtime, and evening slots, plus weekend sessions. The full timetable changes weekly — I can flag your preferred days and times so the team sends you the updated schedule directly.",
      },
      {
        keywords: ["freeze", "pause", "hold", "cancel", "membership", "suspend", "holiday", "travelling", "pause my"],
        response:
          "Yes, you can freeze or pause your membership. The terms depend on your plan — most allow a freeze of up to 30 days per year. I can pass your request to the team and they’ll confirm the process and any notice required.",
      },
      {
        keywords: ["price", "pricing", "how much", "cost", "monthly", "membership fee", "expensive", "plans", "options"],
        response:
          "We have a few membership tiers depending on how many classes you want per week. Prices typically range from a drop-in rate to monthly unlimited passes. I can have the team send you a current pricing breakdown — it’s the clearest way to compare. What format suits you best?",
      },
      {
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
        response:
          "Hey! I’m Mara, the studio’s concierge. Whether you’re brand new or a returning member with questions, I’m here to help. What can I do for you?",
      },
      {
        keywords: ["herniated", "disc", "back injury", "back problem", "spine", "physio", "physiotherapist", "scared", "aggravate", "chronic pain", "lower back", "injury", "cleared"],
        response:
          "Yes — and I'm glad you mentioned it before just turning up to a class. We have low-impact formats designed specifically for people returning from injury or managing ongoing conditions: structured mobility sessions, low-intensity conditioning, and controlled movement work where the coach is in the room throughout. I can note your background and have one of our coaches recommend the safest starting point before you commit to anything. No guessing on your end. What's the best way to reach you?",
      },
    ],
    fallback:
      "I can help with class times, intro offers, membership options, freezes, and booking your first session. What would you like to know?",
  },
];
