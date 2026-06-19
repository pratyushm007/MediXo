import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { GitCompareArrows, ArrowLeftRight, AlertTriangle, CheckCircle2, FileText, Plus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/compare")({
  head: () => ({ meta: [{ title: "Cross-Document Analysis · Medixo" }] }),
  component: ComparePage,
});

const DIFFS = [
  { type: "added", text: "Real-time signal detection via internal PV dashboard." },
  { type: "removed", text: "Quarterly retrospective signal review." },
  { type: "changed", text: "Reporting window 15 days → 7 days for serious AEs." },
  { type: "changed", text: "Safety Review Board now meets weekly (was monthly)." },
];

function ComparePage() {
  return (
    <AppShell
      title="Cross-Document Analysis"
      subtitle="Diff, similarity, and missing-information detection across document versions."
      actions={<Btn><Plus className="h-4 w-4" /> New comparison</Btn>}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5"><div className="flex items-center gap-3"><FileText className="h-5 w-5 text-brand" /><div><div className="text-[10px] uppercase tracking-widest text-muted-foreground">Document A</div><div className="font-semibold">Pharmacovigilance SOP v3</div><div className="text-xs text-muted-foreground">2024 · 42 pages</div></div></div></Card>
        <Card className="p-5 ring-1 ring-brand/30"><div className="grid place-items-center"><div className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-white shadow-glow"><ArrowLeftRight className="h-5 w-5" /></div><div className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand">Comparing</div></div></Card>
        <Card className="p-5"><div className="flex items-center gap-3"><FileText className="h-5 w-5 text-brand-3" /><div><div className="text-[10px] uppercase tracking-widest text-muted-foreground">Document B</div><div className="font-semibold">Pharmacovigilance SOP v4</div><div className="text-xs text-muted-foreground">2026 · 51 pages</div></div></div></Card>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {[
          { k: "84%", v: "Similarity", tone: "success" as const },
          { k: "37", v: "Differences detected", tone: "warning" as const },
          { k: "6", v: "Missing sections in A", tone: "danger" as const },
        ].map(s => (
          <Card key={s.v} className="p-5"><div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div><div className="mt-2 font-display text-3xl font-bold">{s.k}</div><Pill tone={s.tone}>vs prior version</Pill></Card>
        ))}
      </div>

      <Card className="mt-4 p-5">
        <h3 className="font-display text-base font-semibold">Differences</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {DIFFS.map((d, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
              {d.type === "added" && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />}
              {d.type === "removed" && <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />}
              {d.type === "changed" && <GitCompareArrows className="mt-0.5 h-4 w-4 shrink-0 text-info" />}
              <div className="flex-1"><div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{d.type}</div><div>{d.text}</div></div>
            </li>
          ))}
        </ul>
      </Card>
    </AppShell>
  );
}
