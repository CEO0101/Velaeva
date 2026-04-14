import { NextRequest, NextResponse } from "next/server";

import { demoScenarios } from "@/components/constants/site-content";

type DemoMessage = {
  role: "user" | "assistant";
  text: string;
};

export const runtime = "nodejs";

function scoreRuleMatch(text: string, keywords: string[]) {
  return keywords.reduce((score, keyword) => {
    const normalizedKeyword = keyword.toLowerCase();
    return text.includes(normalizedKeyword) ? score + Math.max(normalizedKeyword.length, 1) : score;
  }, 0);
}

function findScenarioRuleReply(scenarioId: string, userMessage: string) {
  const scenario = demoScenarios.find((s) => s.id === scenarioId) ?? demoScenarios[0];
  const normalizedMessage = userMessage.toLowerCase();

  const bestRule = scenario.rules
    .map((rule) => ({
      response: rule.response,
      score: scoreRuleMatch(normalizedMessage, rule.keywords),
    }))
    .sort((a, b) => b.score - a.score)[0];

  return bestRule && bestRule.score > 0 ? bestRule.response : "";
}

function buildSystemPrompt(scenarioId: string) {
  const scenario = demoScenarios.find((s) => s.id === scenarioId) ?? demoScenarios[0];
  const ruleNotes = scenario.rules
    .slice(0, 8)
    .map(
      (rule) =>
        `- If the user mentions ${rule.keywords.slice(0, 5).join(", ")}, respond in this spirit: ${rule.response}`
    )
    .join("\n");
  const exampleNotes = scenario.examples
    .map(
      (example) =>
        `Customer: ${example.user}\nStrong reply: ${example.assistant}`
    )
    .join("\n\n");

  return [
    `You are ${scenario.assistantName}, the AI concierge for a ${scenario.name}.`,
    "You are a composed, commercially intelligent front-desk operator. You sound like a confident human who knows this business inside out — never like a chatbot, an AI assistant, or a help desk.",
    "CRITICAL: Never identify yourself as AI, a language model, a demo, or an assistant. Never use phrases like 'As an AI...' or 'I'm a chatbot'. If asked directly, deflect with wit and stay in character.",
    "Never use action text like *chuckles* or *laughs*. No asterisk actions. Speak naturally.",
    "Never say the business name is 'Velaeva [something]'. You work for the actual business, not Velaeva.",
    "Tone: calm, sharp, slightly warm. Premium service feel. Not over-eager. Not robotic.",
    "Length: 2–4 sentences for most replies. Only longer if the question genuinely needs more detail.",
    "When there is genuine buying intent — availability, pricing, booking, next steps — always end with a clear, natural CTA that moves the conversation forward.",
    "Answer the practical part first. If live confirmation is missing, do not lead with a limitation or apology. Lead with the best useful answer, then explain the cleanest next step.",
    "Do not fake a live transfer, live system lookup, or immediate handoff. You can offer the fastest realistic path, but never pretend a person is already on the line.",
    "Never use these phrases or anything close to them: 'Unfortunately', 'I'd be happy to', 'up-to-the-minute', 'sales specialist', 'hold please', 'let me transfer you', 'stay on the line', 'knowledgeable team member'.",
    "If the user wants something now, tell them what can be done now, what usually happens next, and what single detail you need to move it forward properly.",
    "If you do not have live data, you may still reason like a strong operator. You can say what is usually true, what tends to move fastest, or what the cleanest move is — but do not present unverified facts as confirmed.",
    "Avoid sounding like policy copy. No disclaimers, no corporate filler, no inflated enthusiasm, no repetitive courtesy phrases.",
    "Do not narrate internal routing in detail. The customer does not need to hear about desks, specialists, systems, or the process starting in the background unless that detail genuinely helps them.",
    "Prefer concrete operator language over polite filler. Good: 'I cannot promise the black one until the board is checked.' Bad: 'Certainly, let me look into that for you.'",
    "Handle rude, skeptical, or adversarial messages with composure. Acknowledge the tone briefly if needed, then redirect to something genuinely useful. Never match their rudeness.",
    "If someone tests you with nonsense ('say something stupid', 'you're clearly a bot'), respond with light wit and bring the conversation back to what you can actually help with.",
    "Never invent specific prices, live inventory, confirmed availability, or medical/legal facts you cannot verify. Instead, flag the right next step for the team to follow up.",
    "If a situation sounds like a genuinely bad fit for the business, say so plainly. Honesty builds more trust than pushing a bad match.",
    `Scenario context: ${scenario.systemPrompt}`,
    "Scenario quick-response patterns:",
    ruleNotes,
    "Examples of the level of realism and articulation expected:",
    exampleNotes,
  ].join("\n");
}

const ROBOTIC_REPLY_PATTERNS = [
  /up-to-the-minute/i,
  /sales specialist/i,
  /hold please/i,
  /transfer you/i,
  /stay on the line/i,
  /knowledgeable team member/i,
  /\bI(?:'d| would) be happy to\b/i,
  /^Unfortunately\b/i,
  /let me look into that for you/i,
  /as the concierge/i,
];

function needsRepair(reply: string) {
  return ROBOTIC_REPLY_PATTERNS.some((pattern) => pattern.test(reply));
}

function humanizeReply(reply: string, scenarioId: string) {
  let cleaned = reply
    .replace(/^Here is the rewritten reply:\s*/i, "")
    .replace(/^Rewritten reply:\s*/i, "")
    .replace(/\s+/g, " ")
    .replace(/^[“"]|[”"]$/g, "")
    .replace(/\bVelaeva\b/gi, "")
    .trim();

  cleaned = cleaned
    .replace(/^Let me check on that for you\.?\s*/i, "")
    .replace(/\bI'd be happy to\b/gi, "I can")
    .replace(/\bOur expert injectors\b/gi, "The injector")
    .replace(/\bsales team\b/gi, "desk")
    .replace(/\bcall you back shortly\b/gi, "come back with the fastest workable slot")
    .replace(/\bat your earliest convenience\b/gi, "as quickly as possible");

  if (scenarioId === "med-spa") {
    cleaned = cleaned
      .replace(
        /^Hi there,\s*/i,
        ""
      )
      .replace(
        /^I can get you in for a Botox consultation today\.?/i,
        "If you want something today, let's push for the earliest workable Botox consultation."
      )
      .replace(
        /The injector have some openings this week, so we can likely get you in even sooner than next week\./i,
        "Same-week Botox consults usually move faster than people expect, especially if your timing is flexible."
      );
  }

  return cleaned.trim();
}

function buildRepairPrompt(scenarioId: string, userMessage: string, draftReply: string) {
  const scenario = demoScenarios.find((s) => s.id === scenarioId) ?? demoScenarios[0];

  return [
    `You are rewriting a draft reply for ${scenario.assistantName}, the front-desk concierge for a ${scenario.name}.`,
    "Keep the reply human, commercially sharp, and useful.",
    "Do not add fake live data or pretend to perform a live transfer.",
    "Remove robotic phrases, corporate filler, fake handoff language, and weak disclaimers.",
    "Answer the customer's practical need first, then give the cleanest next step.",
    "Keep it to 2–4 sentences and make it sound like a real operator.",
    "Do not include any lead-in like 'Here is the rewritten reply' or mention that this is a rewrite.",
    `Customer message: ${userMessage}`,
    `Draft reply: ${draftReply}`,
    "Return only the rewritten reply.",
  ].join("\n");
}

async function callGemini(
  systemPrompt: string,
  conversation: DemoMessage[],
  userMessage: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("No Gemini key");

  const contents = [
    ...conversation.slice(-6).map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    })),
    { role: "user", parts: [{ text: userMessage }] },
  ];

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: { maxOutputTokens: 240, temperature: 0.68 },
      }),
    }
  );

  if (!res.ok) throw new Error(`Gemini ${res.status}`);
  const data = await res.json();
  const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  if (!text) throw new Error("Empty Gemini reply");
  return text.trim();
}

async function callOpenRouter(
  systemPrompt: string,
  conversation: DemoMessage[],
  userMessage: string
): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("No OpenRouter key");

  const messages = [
    { role: "system", content: systemPrompt },
    ...conversation.slice(-6).map((m) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: m.text,
    })),
    { role: "user", content: userMessage },
  ];

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://velaeva.com",
      "X-Title": "Velaeva Demo",
    },
    body: JSON.stringify({
      model: "anthropic/claude-3-haiku",
      temperature: 0.68,
      max_tokens: 240,
      messages,
    }),
  });

  if (!res.ok) throw new Error(`OpenRouter ${res.status}`);
  const data = await res.json();
  const text: string = data?.choices?.[0]?.message?.content ?? "";
  if (!text) throw new Error("Empty OpenRouter reply");
  return typeof text === "string" ? text.trim() : "";
}

async function repairReply(
  scenarioId: string,
  conversation: DemoMessage[],
  userMessage: string,
  draftReply: string
) {
  const repairPrompt = buildRepairPrompt(scenarioId, userMessage, draftReply);

  try {
    return await callGemini(repairPrompt, conversation, "Rewrite the draft reply.");
  } catch {
    return await callOpenRouter(repairPrompt, conversation, "Rewrite the draft reply.");
  }
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    scenarioId?: string;
    messages?: DemoMessage[];
  };

  const scenarioId = body.scenarioId ?? demoScenarios[0].id;
  const conversation = Array.isArray(body.messages) ? body.messages.slice(0, -1) : [];
  const lastMessage = body.messages?.at(-1);

  if (!lastMessage || lastMessage.role !== "user") {
    return NextResponse.json({ error: "No user message." }, { status: 400 });
  }

  const systemPrompt = buildSystemPrompt(scenarioId);
  const scriptedReply = findScenarioRuleReply(scenarioId, lastMessage.text);

  if (scriptedReply) {
    return NextResponse.json({ reply: humanizeReply(scriptedReply, scenarioId), live: true });
  }

  // Try Gemini first, fall back to OpenRouter
  let reply = "";
  try {
    reply = await callGemini(systemPrompt, conversation, lastMessage.text);
  } catch {
    try {
      reply = await callOpenRouter(systemPrompt, conversation, lastMessage.text);
    } catch (err) {
      return NextResponse.json(
        { error: err instanceof Error ? err.message : "Both providers failed." },
        { status: 502 }
      );
    }
  }

  if (needsRepair(reply)) {
    try {
      reply = await repairReply(scenarioId, conversation, lastMessage.text, reply);
    } catch {
      // Keep the original reply if the repair pass fails.
    }
  }

  return NextResponse.json({ reply: humanizeReply(reply, scenarioId), live: true });
}
