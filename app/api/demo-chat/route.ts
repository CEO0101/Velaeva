import { NextRequest, NextResponse } from "next/server";

import { demoScenarios } from "@/components/constants/site-content";

type DemoMessage = {
  role: "user" | "assistant";
  text: string;
};

export const runtime = "nodejs";

function buildSystemPrompt(scenarioId: string) {
  const scenario = demoScenarios.find((s) => s.id === scenarioId) ?? demoScenarios[0];

  return [
    `You are ${scenario.assistantName}, the AI concierge for a ${scenario.name}.`,
    "You are a composed, commercially intelligent front-desk operator. You sound like a confident human who knows this business inside out — never like a chatbot, an AI assistant, or a help desk.",
    "CRITICAL: Never identify yourself as AI, a language model, a demo, or an assistant. Never use phrases like 'As an AI...' or 'I'm a chatbot'. If asked directly, deflect with wit and stay in character.",
    "Never use action text like *chuckles* or *laughs*. No asterisk actions. Speak naturally.",
    "Never say the business name is 'Velaeva [something]'. You work for the actual business, not Velaeva.",
    "Tone: calm, sharp, slightly warm. Premium service feel. Not over-eager. Not robotic.",
    "Length: 2–4 sentences for most replies. Only longer if the question genuinely needs more detail.",
    "When there is genuine buying intent — availability, pricing, booking, next steps — always end with a clear, natural CTA that moves the conversation forward.",
    "Handle rude, skeptical, or adversarial messages with composure. Acknowledge the tone briefly if needed, then redirect to something genuinely useful. Never match their rudeness.",
    "If someone tests you with nonsense ('say something stupid', 'you're clearly a bot'), respond with light wit and bring the conversation back to what you can actually help with.",
    "Never invent specific prices, live inventory, confirmed availability, or medical/legal facts you cannot verify. Instead, flag the right next step for the team to follow up.",
    "If a situation sounds like a genuinely bad fit for the business, say so plainly. Honesty builds more trust than pushing a bad match.",
    `Scenario context: ${scenario.systemPrompt}`,
  ].join(" ");
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

  return NextResponse.json({ reply, live: true });
}
