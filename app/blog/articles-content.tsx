import type { ReactNode } from "react";

function P({ children }: { children: ReactNode }) {
  return <p className="mt-7 text-base leading-9 text-foreground/72 md:text-[1.05rem]">{children}</p>;
}
function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-14 font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground md:text-3xl">{children}</h2>;
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-10 font-heading text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">{children}</h3>;
}
function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="my-10 rounded-[1.25rem] border border-[#123b6b]/10 bg-[#edf2fa]/60 px-7 py-6">
      <p className="text-base leading-8 font-semibold text-[#1f3e66]">{children}</p>
    </div>
  );
}
function HR() {
  return <hr className="my-12 border-[#123b6b]/10" />;
}

export const articleContent: Record<string, ReactNode> = {
  "the-11pm-problem": (
    <div>
      <P>I want to tell you about a Tuesday night that changed how I think about revenue.</P>
      <P>I was sitting with the owner of a boutique tourism company in Lisbon — smart operator, loyal clients, genuinely excellent product. We were going through his enquiry data together. Not projections. Actual enquiries, with timestamps.</P>
      <P>What we found made me feel physically sick.</P>
      <P>Between 9 PM and 7 AM — those ten quiet hours when everyone's off the clock — his business had received 34% of its weekly inbound leads. Families planning holidays. Couples asking about availability. Groups wanting custom itineraries. Real money, real intent, real humans sitting on their phones while their kids were asleep.</P>
      <P>Of those leads? Eleven got a reply within 24 hours. The rest got a form acknowledgement that said "we'll be in touch."</P>
      <Callout>You know what a form acknowledgement tells a buyer who's emotionally ready to spend money right now? It tells them to go check the next tab.</Callout>

      <H2>The Window Is Shorter Than You Think</H2>
      <P>Here's what nobody in the "AI tools for business" space ever says honestly: the problem isn't that you don't reply. The problem is that the window to reply closes before you even know the lead exists.</P>
      <P>Studies across service businesses consistently show the same shape. Response within 5 minutes: high conversion. Response within an hour: conversion drops sharply. Response next morning: you're fighting for attention against everything else that happened in that person's life overnight.</P>
      <P>A buyer who messages you at 11 PM asking about your premium package isn't expecting a human response at 11 PM. But they are expecting — unconsciously, emotionally — to feel like the business noticed them. A status indicator. A holding message with actual information. Something that says we received this, we take it seriously, here's what happens next.</P>
      <P>What most businesses send instead is silence. Or worse, an autoresponder that sounds like a parking ticket.</P>

      <H2>What I Kept Seeing Across Every Business I Worked With</H2>
      <P>Before Velaeva, I spent years inside enterprise operations at Oracle, then consulting on client acquisition for professional services firms in Manhattan, then working with small and mid-size businesses across Europe. Very different contexts. Completely different products.</P>
      <P>Same problem, every time.</P>
      <P>Strong operations during business hours. Silence after. And owners who had no idea how much that silence was costing them — because the lost leads don't show up in your CRM. They just don't show up at all.</P>
      <P>The tourism operator in Lisbon wasn't failing. His service was excellent. His retention was strong. But he was losing somewhere between 20 and 30 percent of his potential revenue to a timing problem he didn't even know he had. Every single night. For years.</P>
      <P>When I showed him the data, he sat very still for a moment. Then he said something I've heard versions of from almost every business owner I've worked with since:</P>
      <Callout>"I thought we were doing well."</Callout>

      <H2>The Tool Response vs. The Human Response</H2>
      <P>Every SaaS company will tell you their chatbot solves this. And technically, they're not lying. A chatbot replies. It's online at 11 PM. It sends something.</P>
      <P>But there's a difference between a reply and a response.</P>
      <P>A reply is automated text that acknowledges a message exists. A response is a continuation of a conversation. It reads what was asked. It reflects the actual context. It moves something forward.</P>
      <P>When a buyer asks "do you have availability the last week of August, ideally with airport pickup included?" — a bot that replies "Thanks for your message! Our team will get back to you within 24 hours" has technically replied. But it has also communicated something the owner never intended: we're not really set up to handle this right now.</P>
      <P>That's not a technological failure. That's a calibration failure. The difference between what I build at Velaeva and what most tools offer is the difference between deploying something and deploying something that actually knows your business.</P>

      <H2>The Number That Changed How I Talk About This</H2>
      <P>After six months of live deployments across eight businesses, the number that keeps coming up isn't response rate. It's not open rate or conversion rate.</P>
      <P>It's the proportion of revenue that was already sitting in the after-hours window — unattended — before we installed anything.</P>
      <Callout>On average, across the businesses I've worked with: 31% of high-intent enquiries arrive outside staffed hours.</Callout>
      <P>Not low-intent. Not casual browsing. High-intent — the messages with specific questions, specific dates, specific product asks. The messages that, when a human replies promptly and well, convert.</P>
      <P>If you're running a business where a missed enquiry costs you £500, £1,000, or more in potential revenue — do the maths on 31% of your weekly leads, times 52 weeks. Then decide whether the problem is worth solving.</P>

      <H2>What Actually Changes When You Fix It</H2>
      <P>The tourism operator didn't just recover lost leads. Something subtler happened: his mornings changed.</P>
      <P>His team used to start each day by triaging the overnight inbox. Figuring out which leads were still warm, which were cold, which needed a chaser. It was 45 minutes of reactive catch-up before any real work happened.</P>
      <P>Now they start the day with a brief. Every overnight conversation already handled, qualified, and summarised. The leads that need human attention flagged clearly, with the context already attached. The bookings that closed overnight confirmed.</P>
      <P>The first month of that, one of his team members said to him: "I didn't realise how much of our energy was just catching up."</P>
      <P>That's what fixing the 11 PM problem actually looks like. Not just more revenue — a calmer business. A team that's working forward instead of working backward every single morning.</P>

      <HR />
      <H2>This Isn't About AI. It's About What You're Leaving on the Table.</H2>
      <P>I want to be clear about something: Velaeva is not an AI pitch. I'm not here to tell you that large language models will transform your business.</P>
      <P>I'm here to tell you that you have a specific operational gap — a window of hours, every night, where your business is silent and your buyers are not — and that gap has a calculable cost. I've seen it across enough businesses now to know it's not a theory. It's a pattern.</P>
      <P>The technology to close that gap exists. The question is whether it's built to actually know your business — or just built to technically reply.</P>
      <P>If you want to understand what that gap costs you specifically — not in the abstract, but in your actual numbers — that's what the first conversation is for.</P>
    </div>
  ),

  "true-cost-missed-enquiry": (
    <div>
      <P>Not approximately. Not roughly. Not "somewhere around."</P>
      <P>None of them had actually calculated it.</P>
      <P>These were not careless operators. These were experienced business owners with solid margins, good teams, real track records. A real estate agent with sixteen years in the market. A med spa owner who'd built a loyal clientele from scratch. A fitness studio director who ran three locations. People who watched their numbers closely.</P>
      <P>But when I asked "how much does a single missed lead cost your business?" — the room got very quiet.</P>
      <P>Because the honest answer is: most businesses don't track the leads they never converted. They track the leads they closed. The lost ones just disappear. No entry in the CRM, no follow-up task, no record. A human being with money and intent found you, reached out, and never heard back in time. And you never knew.</P>

      <H2>The Maths Most Businesses Don't Do</H2>
      <P>Let me walk through it plainly.</P>
      <P>Take a business with a £3,000 average transaction value. Service business, high-intent buyers, modest volume — say 60 serious enquiries a month. This isn't a large operation. It's a real business that a real person built.</P>
      <P>Now ask: what percentage of those enquiries get a response within 5 minutes outside business hours?</P>
      <P>If the answer is zero — if the after-hours response is a contact form or silence — research across service industries consistently puts conversion for those delayed replies at a fraction of what prompt responses achieve. Let's be conservative and say you're converting 15% instead of 40% because of timing alone.</P>
      <P>That's 15 sales instead of 24 per month.</P>
      <Callout>At £3,000 per transaction: £27,000 per month in closed revenue versus £72,000 possible. £45,000 a month sitting in a timing problem. Not a quality problem. Not a pricing problem. A timing problem.</Callout>
      <P>I've run this calculation with enough businesses now to know: the number almost always shocks the owner. Because they never thought to run it. The missed leads were invisible. The lost revenue was invisible. Everything felt fine because the closed deals felt fine.</P>

      <H2>Why This Is Harder to See Than It Should Be</H2>
      <P>There's a reason this is so easy to miss. It's the same reason businesses don't notice slow leaks until the basement is flooded.</P>
      <P>The leads that don't convert don't tell you they didn't convert. They just stop. Someone sent a message. You didn't reply in time. They booked elsewhere, forgot, moved on. And in your system, nothing happened. No failed sale. No lost deal marker. Just an enquiry that never went anywhere and eventually aged out of your inbox.</P>
      <P>Your CRM shows you the funnel. It does not show you the shadow funnel — the parallel universe where the same leads, handled faster, converted at twice the rate.</P>
      <P>I've had business owners tell me "we have strong conversion rates" — and then we looked at the data together and found that their conversion rate only counted leads that had received a response. The ones that slipped overnight weren't counted at all. When we included them, the real conversion rate was less than half what the owner believed.</P>

      <H2>What a Single Enquiry Is Actually Worth</H2>
      <P>Every enquiry that reaches you is not just a potential transaction. It's a potential client lifetime. In service businesses, repeat business, referrals, and word-of-mouth are frequently worth three to five times the initial transaction — sometimes more.</P>
      <P>The family who found you for a holiday package and had a great experience will come back. They'll send their friends. They'll mention you at dinner. One good first experience, handled well at the moment of highest intent, turns into three or four transactions over two years.</P>
      <Callout>For most service businesses, a single missed high-intent lead isn't a £3,000 problem. It's a £12,000 to £20,000 problem, compounded over time.</Callout>

      <H2>The False Economy of "We'll Handle It In the Morning"</H2>
      <P>I've heard this from almost every business I've worked with before we got started. "We check messages first thing. We're pretty responsive."</P>
      <P>And they mean it. They genuinely believe their response time is acceptable.</P>
      <P>But "first thing in the morning" for a UK business means 9 AM at the earliest. If the enquiry came in at 10 PM, that's eleven hours of silence. For a buyer who was comparing options at 10 PM and fell asleep before your reply arrived — you're now competing with the reply they got first.</P>
      <P>You're not just late. You're the second response they see when they wake up. And second is a very different position to be in.</P>

      <H2>What I'd Tell Every Business Owner Reading This</H2>
      <P>Run the maths. Right now, with your own numbers.</P>
      <P>Take your average transaction value. Take your monthly enquiry volume. Estimate — honestly — what percentage arrive outside staffed hours. Then estimate your conversion rate on those, knowing they waited 8 to 12 hours for a reply.</P>
      <P>Compare it to what that conversion rate would be at 5-minute response time.</P>
      <P>The difference is your timing gap cost. It's real, it's specific to your business, and it's been running quietly in the background every night for years.</P>
      <P>The good news is that it's entirely fixable — without hiring anyone, without learning new software, without changing anything about how your team works.</P>
      <P>That's exactly what I built Velaeva to do. And it takes five days to go from that number on a spreadsheet to a live concierge that closes that gap for good.</P>
    </div>
  ),

  "why-ai-chatbots-fail": (
    <div>
      <P>Three years ago, a car dealership owner I was advising installed a chatbot. He was proud of it. It was well-reviewed, cost a reasonable monthly fee, and his web developer told him it would capture more leads.</P>
      <P>Six weeks later, he pulled it.</P>
      <P>Not because it didn't work technically. It worked fine. It replied. It was online. It did the thing chatbots do.</P>
      <P>He pulled it because a customer had come in for a test drive and opened the conversation by saying: "I asked your chatbot whether the car came in blue and it told me it didn't know and to call during business hours. I nearly didn't come."</P>
      <Callout>Nearly didn't come. A hot buyer, referral from a trusted friend, £38,000 transaction. Nearly lost because the chatbot's answer to a specific product question was to redirect to a phone call that nobody was available to take.</Callout>

      <H2>The Difference Between a Chatbot and a Concierge</H2>
      <P>A chatbot is a router. It takes an input, matches it to a pattern, and returns a pre-built response. It's essentially a very fast FAQ with a conversational wrapper.</P>
      <P>When the input matches the pattern: great. When it doesn't — which is constantly, because customers are human and don't ask questions in predictable patterns — the chatbot defaults. It gives a non-answer. It asks the person to rephrase. It says "I'm not sure about that." It tells them to call during business hours.</P>
      <P>Every one of those default responses carries a message the business never intended to send: we're not really equipped to handle this right now.</P>
      <P>A concierge is different in a foundational way. It doesn't match patterns. It understands context. It holds a conversation the way a knowledgeable, calm front-desk operator holds a conversation — reading what's actually being asked, drawing on what it knows about the business, moving things forward instead of redirecting.</P>

      <H2>What "Trained on Your Business" Actually Means</H2>
      <P>This phrase gets used a lot in AI marketing. Almost every chatbot vendor will tell you their tool can be trained on your business. What they mean, usually, is that you can upload an FAQ document and their tool will search it.</P>
      <P>That's not training. That's retrieval.</P>
      <P>When I say Velaeva is trained on a business, I mean something specific: the concierge knows the actual inventory, pricing tiers, seasonal offers, and availability windows. It knows the objections that come up most often for this business specifically, and how the owner would want them handled. It knows the brand tone — not just "professional" or "friendly" but the actual way this business communicates.</P>
      <P>It knows the edge cases. The awkward questions. The situations where a human needs to step in — and exactly what information to capture and pass on when that happens.</P>

      <H2>The Moment That Always Reveals the Difference</H2>
      <P>There's a test I run with every business owner who's skeptical about whether this matters.</P>
      <P>I show them two responses to the same message — something real, a question a buyer actually sent at 10:47 PM on a Thursday.</P>
      <H3>Response A (standard chatbot):</H3>
      <P>"Thank you for reaching out! For personalised medical advice, please contact us during business hours or book a consultation. Our team looks forward to hearing from you!"</P>
      <H3>Response B (Velaeva concierge):</H3>
      <P>"Bruising varies quite a bit depending on where we're treating and how your skin responds — for lips and fine lines around the eyes, mild bruising for 2–4 days is common, though plenty of clients have none at all. We always recommend leaving a week before any big event. The best way to get a sense of what to expect for you specifically is a quick consultation — would you like me to flag your details for the team to reach out tomorrow morning?"</P>
      <Callout>The business owners I show this to never need more convincing.</Callout>

      <H2>The Calibration Problem Nobody Talks About</H2>
      <P>Here's what happens when you deploy a standard chatbot without the right calibration work:</P>
      <P>Month one: it handles the easy questions. Basic FAQs. Booking links. Hours of operation. Fine.</P>
      <P>Month two: the edge cases start showing up. The buyer who wants to know if you can accommodate a very specific requirement. The customer with a concern about a previous bad experience. The enquiry that's half sales question and half complaint.</P>
      <P>The chatbot hits its limits. It gives generic answers. It redirects. It frustrates.</P>
      <P>By month three, the business owner is either turning it off or ignoring the conversations it's supposed to be handling — because they've learned that the quality is inconsistent and they can't trust it.</P>
      <P>This is not a failure of AI. It's a failure of calibration. The tool was deployed without doing the actual work of mapping how the business communicates, what it needs to know, and how it should handle every category of input it will receive.</P>

      <H2>What Good Looks Like</H2>
      <P>The gold standard for an after-hours AI concierge is this: a buyer sends a message at 11 PM, receives a response that makes them feel genuinely handled, and either wakes up the next morning ready to move forward — or, in many cases, has already moved forward because the concierge completed the next step for them.</P>
      <P>For the dealership owner from the start of this piece — after Velaeva went live — a buyer messaged at 11:42 PM asking specifically about a blue SUV with third-row seating available for test drive that weekend.</P>
      <P>The concierge checked live inventory, confirmed availability, asked for a preferred time window, collected contact details, and sent a calendar confirmation. The buyer woke up with a booked test drive. The sales team woke up with a warm lead and full context.</P>
      <Callout>No call during business hours required. No form. No friction. That's what fixing the calibration problem actually looks like.</Callout>
    </div>
  ),

  "ai-vs-hiring-the-math": (
    <div>
      <P>The question I get asked most often — after someone understands what Velaeva actually does — is some version of this:</P>
      <P>"Couldn't I just hire someone part-time to handle the after-hours messages?"</P>
      <P>It's a fair question. I want to answer it honestly, because the answer is more nuanced than most AI vendors will admit. There are situations where hiring is genuinely the right call. And there are situations where it's a significant misallocation of cost and complexity.</P>
      <P>Here's how to tell the difference.</P>

      <H2>What Hiring Actually Costs</H2>
      <P>Let's start with the real number, because most business owners undercount it.</P>
      <P>A part-time after-hours customer service person — covering evenings and weekends, handling inbound enquiries across WhatsApp, email, and web chat — will cost you, in the UK, somewhere between £12 and £18 per hour in salary or freelance rates. For coverage from 6 PM to midnight, seven days a week, that's approximately 42 hours of coverage per week.</P>
      <P>At £15/hour, that's £630 per week. £2,730 per month. £32,760 per year.</P>
      <P>Before you add employer NI contributions, pension contributions, recruitment costs, training time, sick cover, and the management overhead of someone who needs onboarding, feedback, and supervision.</P>
      <Callout>The real cost of a part-time after-hours hire, fully loaded, is closer to £38,000 to £42,000 per year. For a business doing £500,000 in revenue, that's 7–8% of turnover on a single hire.</Callout>
      <P>And here's the thing that nobody says out loud: a hire is also a dependency. They get sick. They have bad days. They leave. Every time they leave, you start over — recruitment, training, the drift in tone and quality that happens during the gap.</P>

      <H2>What an AI Concierge Actually Costs</H2>
      <P>Velaeva's setup is a one-time investment of £1,200 to £2,800 depending on channel complexity, integrations, and how much calibration work the build requires. Then £149 per month — covering tuning, monitoring, routing updates, and keeping the system commercially sharp.</P>
      <P>Annual cost: approximately £1,800 to £4,600 in year one, then £1,788 per year from year two.</P>
      <P>No sick days. No bad days. No turnover. No retraining after a tone drift. No management overhead. And availability that a human hire fundamentally cannot match: every night, every weekend, every public holiday, responding with the same quality at 3 AM on Boxing Day as at 8 PM on a Tuesday.</P>
      <Callout>The cost comparison is not close.</Callout>

      <H2>Where Hiring Still Wins</H2>
      <P>I want to be honest here, because I think intellectual honesty is part of what makes a business partner worth trusting.</P>
      <P>Hire if your after-hours volume is very low. If you receive three or four genuine enquiries outside hours per week, the ROI on an AI concierge — while still present — takes longer to materialise.</P>
      <P>Hire if your product requires deep human judgment on every first contact. Some businesses — specialist medical, high-stakes legal, complex financial — need a human to make calls on every interaction from the start.</P>
      <P>Hire if you want someone in the room. An AI concierge handles digital channels. If your business needs physical presence — someone at the front desk, someone answering a physical phone line — that's a different problem.</P>
      <P>Outside those situations? The maths almost always points to the concierge.</P>

      <H2>The Quality Comparison</H2>
      <P>Cost aside, the question that matters more for most business owners is quality. Not price per hour. Quality of the actual customer experience.</P>
      <P>A well-calibrated AI concierge maintains consistent quality at 3 AM on a Wednesday the same as 6 PM on a Thursday. It doesn't get tired. It doesn't have days where it's slightly off. It doesn't say something slightly off-brand when it's distracted.</P>
      <P>A human being — particularly a part-time hire covering hours nobody particularly wants to work — does all of those things. Not because they're bad at their job. Because they're human.</P>
      <P>The businesses I work with have often tried the part-time hire route before they found Velaeva. The consistent pattern: quality was good when the hire was engaged, inconsistent when they weren't. And the owner ended up spending as much energy managing the person as they would have spent just handling the messages themselves.</P>

      <H2>The Hybrid Reality</H2>
      <P>The most sophisticated businesses I work with don't think of this as AI versus humans. They think of it as AI handling the volume that doesn't require human judgment — and humans focusing their energy on the interactions that do.</P>
      <P>The Velaeva concierge handles overnight enquiries, qualification, booking steps, standard questions, and follow-up sequences. When something genuinely needs a human — a complaint, an unusual situation, a high-value client who needs a personal touch — the concierge flags it, captures the full context, and hands off to the right person with everything they need already in front of them.</P>
      <Callout>The team's morning isn't an inbox triage session. It's a brief. Here's what happened overnight. Here's what needs your attention. Here's what's already resolved.</Callout>

      <H2>What I'd Ask Yourself Before Deciding</H2>
      <P>If you're genuinely weighing hiring versus an AI concierge, answer these honestly:</P>
      <P>How many high-intent enquiries arrive outside your staffed hours per week? What's your average transaction value, and how many of those enquiries convert? What would those conversion numbers look like with a 5-minute response time instead of an 8-hour wait? What does that gap cost you per month, in actual revenue?</P>
      <P>Then compare that number to £149/month.</P>
      <P>If the maths doesn't immediately make the decision for you, the call is worth having.</P>
    </div>
  ),

  "what-trained-on-your-business-means": (
    <div>
      <P>Every AI tool in the customer service space will tell you they can be trained on your business.</P>
      <P>It's become such a standard marketing phrase that it has almost lost meaning. Upload your FAQ. Connect your website. Done — the AI "knows" your business.</P>
      <P>I want to explain what that actually delivers, and contrast it with what I mean when I use the same phrase. Because the gap between the two is the gap between a tool that technically functions and a system that genuinely represents your business in a customer conversation.</P>

      <H2>What Most Tools Mean When They Say It</H2>
      <P>The majority of AI customer service tools use a process called retrieval-augmented generation, which means the AI searches your uploaded documents for relevant content when a question arrives, then constructs a response using that content as reference material.</P>
      <P>It's fast. It's scalable. And it works reasonably well for a specific category of questions: the ones your documents actually cover, phrased in ways that are reasonably close to how a buyer would phrase them.</P>
      <P>Where it breaks down — and it breaks down constantly — is everywhere else.</P>
      <Callout>A buyer who asks "is your Botox any different from what I had last year at another clinic?" is not phrasing a question that your FAQ covers. They're expressing a concern. A retrieval system finds the nearest FAQ match and returns it. The buyer gets an answer that feels irrelevant. They feel unheard. They disengage.</Callout>

      <H2>The Problem With Training as a Metaphor</H2>
      <P>When AI vendors say their tool is "trained on your business," they usually mean their model has seen your data. But training in the AI sense happens once, at the model level, during the development of the underlying system. What you're doing when you upload your FAQ is not training — it's configuration.</P>
      <P>The distinction matters because it shapes expectations.</P>
      <P>A truly trained system understands context, holds prior conversation history, adapts its responses based on who it's talking to and what's already been said, and handles novel situations using genuine understanding of what the business is and how it operates.</P>
      <P>A configured system searches documents and generates text. It's faster to set up. It's cheaper. It's also significantly less capable in the situations that actually matter.</P>

      <H2>What Real Calibration Looks Like</H2>
      <P>When I build a Velaeva concierge for a new client, the process looks like this:</P>
      <P>Week one is almost entirely listening. I go through every channel the business uses. Every message type. Every common objection. Every awkward question that the team dreads. I read actual conversations — not sanitised examples but the messy, real, imperfect threads where a human had to navigate a difficult situation on the fly.</P>
      <P>I talk to the owner about how they want to be perceived. Not "professional" or "friendly" — those words mean nothing. Specific things. Is directness good or does it feel brusque for your clientele? How do you handle a buyer who pushes back on price? What would you never want said to a client under any circumstances?</P>
      <P>Then I build the training around the gaps. Not around what the business does well. Around what's hard. Because the hard situations are where a generic tool fails and where a well-calibrated concierge earns its keep.</P>

      <H2>The Edge Case Is Where Reputation Is Made or Lost</H2>
      <P>Here's the thing about edge cases in customer conversations: they're not actually that rare. They feel rare because good businesses handle them well and they don't become events. But they arrive constantly.</P>
      <P>The buyer who's comparing you to a competitor and wants to know why they should choose you. The client who had a subpar experience last visit and is giving you one more chance. The enquiry that's actually two enquiries layered together — a practical question with an emotional undertone.</P>
      <P>How your business handles these moments is how your reputation is actually built.</P>
      <P>A retrieval system defaults to its nearest document match. A genuinely calibrated concierge handles these the way a senior, trusted team member would — drawing on everything it knows about the business, the situation, and what the right outcome looks like.</P>

      <H2>How to Tell the Difference Before You Buy</H2>
      <P>Give the tool a real edge case — a question that doesn't appear in your FAQ, phrased the way a real customer would phrase it. Not "what are your opening hours?" but "I saw a review online that said your service was slow — has that changed?"</P>
      <P>Watch what happens. A retrieval system will either miss entirely or return something adjacent and generic. A calibrated system will handle it — acknowledging the concern, offering a substantive response, moving the conversation forward the way a good team member would.</P>
      <Callout>That test tells you everything about what you're actually buying.</Callout>

      <H2>What It Feels Like When It's Right</H2>
      <P>The best feedback I've received from a client wasn't about conversion rates or response times, though both improved significantly.</P>
      <P>It was from the owner of a boutique real estate agency who said, three weeks after the concierge went live: "I had a client call me and say the person who replied to her after-hours message was really lovely. She asked if she was new."</P>
      <P>She wasn't new. She wasn't a person.</P>
      <P>But the client couldn't tell. Not because the concierge was trying to deceive anyone — it introduces itself clearly. The reason the client responded that way is that the concierge knew the business well enough to sound like it belonged there. Like it cared. Like it was actually trying to help.</P>
      <P>That's what training on a business is supposed to produce.</P>
    </div>
  ),
};
