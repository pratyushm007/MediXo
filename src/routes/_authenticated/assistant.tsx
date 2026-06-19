import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { Bot, Send, Sparkles, User, FileText, Plus, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/_authenticated/assistant")({
  head: () => ({ meta: [{ title: "AI Assistant · Medixo KnowledgeHub" }] }),
  component: AssistantPage,
});

type Msg = { role: "user" | "ai"; content: string; sources?: { name: string; page: number }[] };

const SEED: Msg[] = [
  { role: "user", content: "What changed between SOP v3 and v4 for adverse event reporting?" },
  {
    role: "ai",
    content:
      "Key changes from v3 → v4: (1) Reporting window tightened from 15 to 7 days for serious AEs; (2) Mandatory CIOMS form attachment; (3) New section on real-time signal detection using internal pharmacovigilance dashboards; (4) Updated escalation matrix referencing the new Safety Review Board.",
    sources: [
      { name: "Pharmacovigilance SOP v3", page: 9 },
      { name: "Pharmacovigilance SOP v4", page: 11 },
      { name: "Safety Review Board Charter", page: 2 },
    ],
  },
];

const PROMPTS = [
  "Summarize the latest board pack",
  "Which vendor contracts expire in Q1?",
  "List HIPAA audit findings rated High",
  "Compare invoices > $50k across vendors",
];

function AssistantPage() {
  const [msgs, setMsgs] = useState<Msg[]>(SEED);
  const [text, setText] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, thinking]);

  const send = (q?: string) => {
    const content = (q ?? text).trim(); if (!content) return;
    setMsgs((m) => [...m, { role: "user", content }]); setText(""); setThinking(true);
    setTimeout(() => {
      setMsgs((m) => [...m, {
        role: "ai",
        content: "Based on the knowledge base, here is what I found — grounded in the cited sources. Let me know if you'd like me to dig deeper into any specific section.",
        sources: [{ name: "Q3 Board Pack", page: 4 }, { name: "Operations Memo", page: 12 }],
      }]);
      setThinking(false);
    }, 900);
  };

  return (
    <AppShell title="Enterprise AI Assistant" subtitle="Conversational, source-linked answers grounded in your knowledge base.">
      <div className="grid h-[calc(100vh-13rem)] grid-cols-1 gap-4 lg:grid-cols-[260px_1fr_280px]">
        {/* Conversations */}
        <aside className="hidden lg:flex lg:flex-col">
          <Card className="flex flex-1 flex-col p-3">
            <Btn className="w-full"><Plus className="h-4 w-4" /> New conversation</Btn>
            <div className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Recent</div>
            <ul className="mt-2 flex-1 space-y-1 overflow-y-auto">
              {["SOP v3 → v4 changes","Q3 board metrics","Vendor renewal pipeline","HIPAA audit findings","Investor memo draft"].map((t, i) => (
                <li key={t}>
                  <button className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-xs ${i===0?"bg-muted":"hover:bg-muted/60"}`}>
                    <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="truncate">{t}</span>
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </aside>

        {/* Chat */}
        <Card className="flex min-h-0 flex-col">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-2"><div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-white"><Bot className="h-4 w-4" /></div><div><div className="text-sm font-semibold">Medixo Assistant</div><div className="text-[11px] text-muted-foreground">Grounded · Source-cited · Audit-logged</div></div></div>
            <Pill tone="success">Online</Pill>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto p-5">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role==="user"?"flex-row-reverse":""}`}>
                <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${m.role==="ai"?"bg-brand-gradient text-white":"bg-accent text-accent-foreground"}`}>
                  {m.role === "ai" ? <Sparkles className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>
                <div className={`max-w-[78%] space-y-2 ${m.role==="user"?"items-end":""}`}>
                  <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role==="user"?"bg-brand-gradient text-white":"bg-muted text-foreground"}`}>{m.content}</div>
                  {m.sources && (
                    <div className="flex flex-wrap gap-1.5">
                      {m.sources.map((s) => (
                        <span key={s.name} className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 text-[10px] text-muted-foreground"><FileText className="h-3 w-3" /> {s.name} · p.{s.page}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-gradient text-white"><Sparkles className="h-4 w-4" /></div>
                <div className="rounded-2xl bg-muted px-4 py-2.5 text-sm text-muted-foreground">Thinking<span className="inline-block w-6 animate-pulse">...</span></div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-border p-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {PROMPTS.map((p) => (
                <button key={p} onClick={() => send(p)} className="rounded-full border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground hover:bg-muted hover:text-foreground">{p}</button>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send(); }} className="relative">
              <input
                value={text} onChange={(e) => setText(e.target.value)}
                placeholder="Ask the assistant — it will cite sources from your knowledge base"
                className="h-12 w-full rounded-xl border border-input bg-card pl-4 pr-14 text-sm outline-none focus:border-ring focus:shadow-glow"
              />
              <button type="submit" className="absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg bg-brand-gradient text-white shadow-glow"><Send className="h-4 w-4" /></button>
            </form>
          </div>
        </Card>

        {/* Citations */}
        <aside className="hidden lg:flex lg:flex-col">
          <Card className="flex flex-1 flex-col p-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Citations</div>
            <ul className="mt-3 flex-1 space-y-2 overflow-y-auto">
              {[
                { n: "Pharmacovigilance SOP v3", p: 9, dept: "Healthcare" },
                { n: "Pharmacovigilance SOP v4", p: 11, dept: "Healthcare" },
                { n: "Safety Review Board Charter", p: 2, dept: "Governance" },
                { n: "Q3 Board Pack", p: 4, dept: "Executive" },
                { n: "Operations Memo", p: 12, dept: "Operations" },
              ].map((s) => (
                <li key={s.n} className="rounded-lg border border-border bg-card p-3 text-xs">
                  <div className="flex items-center gap-2"><FileText className="h-3.5 w-3.5 text-brand" /><span className="truncate font-medium">{s.n}</span></div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{s.dept} · p.{s.p}</div>
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </div>
    </AppShell>
  );
}
