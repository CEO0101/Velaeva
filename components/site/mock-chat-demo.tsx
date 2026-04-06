import { ArrowUpRight, SendHorizonal } from "lucide-react";
import Script from "next/script";

import { CALENDLY_URL, demoScenarios } from "@/components/constants/site-content";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

function escapeForScript(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function MockChatDemo() {
  const initialScenario = demoScenarios[0];
  const initialMessages: Message[] = [
    {
      id: 1,
      role: "assistant",
      text: initialScenario.intro,
    },
  ];
  const scenariosJson = escapeForScript(demoScenarios);

  const inlineScript = `
    (() => {
      const root = document.getElementById("northstar-demo-root");
      if (!root || root.dataset.bound === "true") return;
      root.dataset.bound = "true";

      const scenarios = Array.isArray(window.__NORTHSTAR_DEMO__) ? window.__NORTHSTAR_DEMO__ : [];
      if (!Array.isArray(scenarios) || !scenarios.length) return;

      const state = {
        activeScenarioId: scenarios[0].id,
        messages: [{ id: 1, role: "assistant", text: scenarios[0].intro }],
        isTyping: false,
        isLiveMode: true,
        nextMessageId: 2,
      };

      const scenarioList = root.querySelector("[data-demo-scenarios]");
      const assistantName = root.querySelector("[data-demo-assistant]");
      const modeLabel = root.querySelector("[data-demo-mode]");
      const messagesNode = root.querySelector("[data-demo-messages]");
      const input = root.querySelector("[data-demo-input]");
      const promptsNode = root.querySelector("[data-demo-prompts]");
      const hardWrap = root.querySelector("[data-demo-hard-wrap]");
      const hardButton = root.querySelector("[data-demo-hard]");
      const form = root.querySelector("[data-demo-form]");
      const ctaNode = root.querySelector("[data-demo-cta]");

      if (!scenarioList || !assistantName || !modeLabel || !messagesNode || !input || !promptsNode || !hardWrap || !hardButton || !form || !ctaNode) {
        return;
      }

      const bubbleClass = {
        assistant: "self-start bg-[#e8f0fb] text-foreground/82",
        user: "self-end bg-secondary text-secondary-foreground",
      };

      const escapeHtml = (value) =>
        String(value)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");

      const getScenario = (scenarioId) =>
        scenarios.find((scenario) => scenario.id === scenarioId) || scenarios[0];

      const buildReply = (inputText, scenarioId) => {
        const scenario = getScenario(scenarioId);
        const normalized = inputText.toLowerCase();
        const matchedRule = scenario.rules.find((rule) =>
          rule.keywords.some((keyword) => normalized.includes(keyword))
        );

        return matchedRule ? matchedRule.response : scenario.fallback;
      };

      const renderScenarioButtons = () => {
        scenarioList.querySelectorAll("[data-scenario-id]").forEach((button) => {
          const active = button.dataset.scenarioId === state.activeScenarioId;
          button.setAttribute("data-active", active ? "true" : "false");
          const arrow = button.querySelector("[data-scenario-arrow]");
          if (arrow) {
            arrow.className = active
              ? "mt-1 h-4 w-4 text-primary transition-transform"
              : "mt-1 h-4 w-4 text-current/50 transition-transform";
          }
        });
      };

      const renderHeader = () => {
        const scenario = getScenario(state.activeScenarioId);
        assistantName.textContent = scenario.assistantName;
        modeLabel.textContent = state.isLiveMode ? "Live reasoning" : "Fallback mode";
        input.placeholder = "Ask " + scenario.assistantName + " a question...";
      };

      const renderMessages = () => {
        const scenario = getScenario(state.activeScenarioId);
        messagesNode.innerHTML = state.messages
          .map((message) => \`
            <div class="max-w-[85%] rounded-[1.1rem] px-5 py-4 text-sm leading-7 \${bubbleClass[message.role]}">
              \${escapeHtml(message.text)}
            </div>
          \`)
          .join("");

        if (state.isTyping) {
          messagesNode.insertAdjacentHTML(
            "beforeend",
            '<div class="inline-flex w-fit items-center gap-1 rounded-full bg-[#e8f0fb] px-3 py-2"><span class="typing-dot"></span><span class="typing-dot [animation-delay:120ms]"></span><span class="typing-dot [animation-delay:240ms]"></span></div>'
          );
        }

        messagesNode.scrollTop = messagesNode.scrollHeight;
        renderHeader();
        renderPrompts(scenario);
        const hasUserMessage = state.messages.some((message) => message.role === "user");
        ctaNode.classList.toggle("hidden", !hasUserMessage);
      };

      const renderPrompts = (scenario) => {
        promptsNode.innerHTML = scenario.quickPrompts
          .slice(0, 3)
          .map(
            (prompt) =>
              '<button type="button" class="demo-prompt-button" data-prompt="' +
              escapeHtml(prompt) +
              '">' +
              escapeHtml(prompt) +
              "</button>"
          )
          .join("");

        if (scenario.quickPrompts[3]) {
          hardWrap.classList.remove("hidden");
          hardButton.setAttribute("data-prompt", scenario.quickPrompts[3]);
          hardButton.textContent = scenario.quickPrompts[3];
        } else {
          hardWrap.classList.add("hidden");
          hardButton.removeAttribute("data-prompt");
          hardButton.textContent = "";
        }
      };

      const resetConversation = (scenarioId) => {
        const scenario = getScenario(scenarioId);
        state.activeScenarioId = scenario.id;
        state.messages = [{ id: 1, role: "assistant", text: scenario.intro }];
        state.isTyping = false;
        state.isLiveMode = true;
        state.nextMessageId = 2;
        input.value = "";
        renderScenarioButtons();
        renderMessages();
      };

      const sendMessage = async (rawValue) => {
        const trimmed = String(rawValue || "").trim();
        if (!trimmed || state.isTyping) return;

        const scenario = getScenario(state.activeScenarioId);
        state.messages = [
          ...state.messages,
          { id: state.nextMessageId++, role: "user", text: trimmed },
        ];
        state.isTyping = true;
        input.value = "";
        renderMessages();

        try {
          const response = await fetch("/api/demo-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              scenarioId: scenario.id,
              messages: state.messages.map(({ role, text }) => ({ role, text })),
            }),
          });

          if (!response.ok) throw new Error("Live chat unavailable");
          const data = await response.json();
          if (!data || !data.reply) throw new Error("Missing live reply");

          state.isLiveMode = Boolean(data.live);
          state.messages = [
            ...state.messages,
            { id: state.nextMessageId++, role: "assistant", text: data.reply },
          ];
        } catch (error) {
          state.isLiveMode = false;
          state.messages = [
            ...state.messages,
            {
              id: state.nextMessageId++,
              role: "assistant",
              text: buildReply(trimmed, scenario.id),
            },
          ];
        } finally {
          state.isTyping = false;
          renderMessages();
        }
      };

      scenarioList.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("[data-scenario-id]");
        if (!button) return;
        event.preventDefault();
        resetConversation(button.dataset.scenarioId || scenarios[0].id);
      });

      root.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const prompt = target.closest("[data-prompt]");
        if (!prompt) return;
        event.preventDefault();
        sendMessage(prompt.getAttribute("data-prompt") || "");
      });

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        sendMessage(input.value);
      });

      renderScenarioButtons();
      renderMessages();
    })();
  `;

  return (
    <section
      id="demo"
      className="scroll-mt-28 border-y border-[#123b6b]/10 bg-background py-20 md:py-28"
    >
      <div
        id="northstar-demo-root"
        className="mx-auto grid max-w-7xl gap-14 px-6 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
      >
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Interactive Demo"
            title="Ask the concierge something real."
            description="Ask a normal question, a skeptical one, or something oddly specific. The point is judgment, not canned FAQ filler."
          />

          <div data-demo-scenarios className="border-t border-[#123b6b]/10 pt-4">
            {demoScenarios.map((scenario, index) => {
              const active = index === 0;

              return (
                <button
                  key={scenario.id}
                  type="button"
                  data-scenario-id={scenario.id}
                  data-active={active ? "true" : "false"}
                  className="demo-scenario-button flex w-full items-start justify-between gap-6 border-b border-[#123b6b]/10 py-4 text-left transition-colors hover:text-foreground"
                >
                  <div>
                    <div className="text-base font-semibold">{scenario.name}</div>
                    <p className="demo-scenario-copy mt-1 max-w-sm text-sm leading-7">
                      {scenario.tagline}
                    </p>
                  </div>
                  <ArrowUpRight
                    data-scenario-arrow=""
                    className={
                      active
                        ? "mt-1 h-4 w-4 text-primary transition-transform"
                        : "mt-1 h-4 w-4 text-current/50 transition-transform"
                    }
                  />
                </button>
              );
            })}
          </div>

          <div className="border-t border-[#123b6b]/10 pt-6 text-sm leading-7 text-foreground/62">
            Built first for high-ticket service businesses. Still useful beyond
            them when the lead flow is consultative, time-sensitive, or easy to
            lose after hours.
          </div>
        </div>

        <div className="glass-surface border border-[#123b6b]/10 bg-[#fbfcfe]/88">
          <div className="overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#123b6b]/10 px-6 py-5">
              <div>
                <div data-demo-assistant="" className="font-semibold text-foreground">
                  {initialScenario.assistantName}
                </div>
                <div className="mt-1 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/46">
                  Tuned to your business
                </div>
              </div>
              <div
                data-demo-mode=""
                className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#355884]/46"
              >
                Live reasoning
              </div>
            </div>

            <div className="grid gap-8 p-6 lg:grid-cols-[1fr_15rem]">
              <div className="space-y-5">
                <div
                  data-demo-messages=""
                  className="flex min-h-[380px] flex-col gap-3 md:min-h-[430px]"
                  aria-live="polite"
                >
                  {initialMessages.map((message) => (
                    <div
                      key={message.id}
                      className="max-w-[85%] self-start rounded-[1.1rem] bg-[#e8f0fb] px-5 py-4 text-sm leading-7 text-foreground/82"
                    >
                      {message.text}
                    </div>
                  ))}
                </div>

                <form
                  data-demo-form=""
                  className="flex flex-col gap-3 border-t border-[#123b6b]/10 pt-5 sm:flex-row"
                >
                  <input
                    data-demo-input=""
                    defaultValue=""
                    placeholder={`Ask ${initialScenario.assistantName} a question...`}
                    className="h-12 flex-1 rounded-xl border border-[#123b6b]/12 bg-white px-4 text-sm text-foreground outline-none placeholder:text-foreground/34 focus:border-primary/40"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 px-6 sm:w-auto"
                    data-demo-send=""
                  >
                    Send
                    <SendHorizonal className="h-4 w-4" />
                  </Button>
                </form>

                <div
                  data-demo-cta=""
                  className="hidden rounded-[1.15rem] border border-[#123b6b]/10 bg-white/76 px-5 py-4"
                >
                  <div className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/46">
                    Next step
                  </div>
                  <div className="mt-2 text-sm leading-7 text-foreground/66">
                    Want this tuned to your business instead of a demo sandbox?
                    We can map the workflow in twenty minutes.
                  </div>
                  <div className="mt-4">
                    <Button asChild size="sm" className="px-4">
                      <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                        Book a Free 20-Minute Call
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#123b6b]/10 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#355884]/48">
                  Suggested prompts
                </div>
                <div data-demo-prompts="" className="mt-4 grid gap-2.5">
                  {initialScenario.quickPrompts.slice(0, 3).map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      data-prompt={prompt}
                      className="demo-prompt-button"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <div data-demo-hard-wrap="" className="mt-5 border-t border-[#123b6b]/10 pt-4">
                  <div className="mb-2.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#355884]/44">
                    How Velaeva handles the hard ones
                  </div>
                  <button
                    data-demo-hard=""
                    data-prompt={initialScenario.quickPrompts[3]}
                    type="button"
                    className="demo-prompt-button text-foreground/62"
                  >
                    {initialScenario.quickPrompts[3]}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Script id="northstar-demo-init" strategy="afterInteractive">
        {`window.__NORTHSTAR_DEMO__ = ${scenariosJson}; ${inlineScript}`}
      </Script>
    </section>
  );
}
