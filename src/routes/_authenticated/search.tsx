import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { Search, Sparkles, FileText, ExternalLink, Bookmark, History, Star, Send } from "lucide-react";
import { recentSearches, savedQueries, mockDocs } from "@/lib/mock-data";

export const Route = createFileRoute("/_authenticated/search")({
  head: () => ({ meta: [{ title: "AI Search · Medixo KnowledgeHub" }] }),
  component: SearchPage,
});

const EXAMPLES = [
  "Summarize all policy documents related to pharmacovigilance",
  "Show all contracts expiring this year",
  "Compare SOP versions for adverse event reporting",
  "List HIPAA findings rated High in 2026",
];

function SearchPage() {
  const [q, setQ] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const results = mockDocs.slice(0, 4);

  return (
    <AppShell title="AI Search" subtitle="Ask anything across your enterprise knowledge base. Grounded answers with citations.">
      <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"><History className="h-3.5 w-3.5" /> Recent</div>
            <ul className="mt-3 space-y-1">
              {recentSearches.map((s) => (
                <li key={s}><button onClick={() => { setQ(s); setSubmitted(s); }} className="block w-full truncate rounded-md px-2 py-1.5 text-left text-xs hover:bg-muted">{s}</button></li>
              ))}
            </ul>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"><Star className="h-3.5 w-3.5" /> Saved</div>
            <ul className="mt-3 space-y-1">
              {savedQueries.map((s) => (
                <li key={s}><button onClick={() => { setQ(s); setSubmitted(s); }} className="block w-full truncate rounded-md px-2 py-1.5 text-left text-xs hover:bg-muted">{s}</button></li>
              ))}
            </ul>
          </Card>
        </aside>

        {/* Main */}
        <div className="min-w-0">
          <Card className="p-5">
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(q); }} className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand" />
              <input
                value={q} onChange={(e) => setQ(e.target.value)} autoFocus
                placeholder="Ask the knowledge base anything…"
                className="h-14 w-full rounded-xl border border-input bg-card pl-12 pr-32 text-base font-medium outline-none focus:border-ring focus:shadow-glow"
              />
              <button type="submit" className="absolute right-2 top-1/2 inline-flex h-10 -translate-y-1/2 items-center gap-1.5 rounded-lg bg-brand-gradient px-4 text-sm font-semibold text-white shadow-glow">
                <Sparkles className="h-4 w-4" /> Ask AI
              </button>
            </form>

            {!submitted && (
              <>
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Try</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {EXAMPLES.map((e) => (
                    <button key={e} onClick={() => { setQ(e); setSubmitted(e); }} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs hover:bg-muted">{e}</button>
                  ))}
                </div>
              </>
            )}
          </Card>

          {submitted && (
            <>
              <Card className="mt-4 overflow-hidden">
                <div className="border-b border-border bg-gradient-to-br from-accent/40 to-card p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand"><Sparkles className="h-4 w-4" /> AI Answer</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground"><span>Confidence</span><Pill tone="success">92%</Pill></div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    Across <b>{results.length} relevant documents</b>, Medixo identified consistent revisions strengthening adverse-event reporting timelines from 30 → 15 → 7 days. The latest <b>Pharmacovigilance SOP 2026</b> aligns with EMA/FDA guidance and incorporates real-time signal detection. Two contracts reference older timelines and should be reviewed.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    {["Pharmacovigilance SOP 2026 · p.12", "AE Reporting v3 · p.4", "CT-441 Phase II · p.31"].map(s => (
                      <span key={s} className="rounded-md border border-border bg-card px-2 py-1 text-muted-foreground">{s}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Btn variant="secondary"><Bookmark className="h-4 w-4" /> Save</Btn>
                    <Btn variant="ghost">Refine query</Btn>
                  </div>
                </div>
              </Card>

              <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">Related documents</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {results.map((d) => (
                  <Card key={d.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground"><FileText className="h-4 w-4" /></div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold">{d.name}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{d.department} · {d.pages} pages · matched 3 passages</div>
                        <div className="mt-2 flex items-center gap-2">
                          <Pill tone="success">{Math.round(d.confidence * 100)}% match</Pill>
                          <Pill>{d.category}</Pill>
                        </div>
                      </div>
                      <button className="rounded-md p-1.5 text-muted-foreground hover:bg-muted"><ExternalLink className="h-4 w-4" /></button>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </AppShell>
  );
}
