import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { Upload, ScanText, Tags, Database, CheckCircle2, Search, ArrowRight, Plus, Workflow } from "lucide-react";

export const Route = createFileRoute("/_authenticated/workflows")({
  head: () => ({ meta: [{ title: "Workflows · Medixo KnowledgeHub" }] }),
  component: WorkflowsPage,
});

const NODES = [
  { t: "Upload", d: "From SharePoint, S3, ERP", Icon: Upload },
  { t: "OCR", d: "Layout-aware extraction", Icon: ScanText },
  { t: "Classify", d: "Department + type", Icon: Tags },
  { t: "Extract Metadata", d: "NER + relations", Icon: Database },
  { t: "Validate", d: "Schema + business rules", Icon: CheckCircle2 },
  { t: "Store", d: "Vector + relational", Icon: Database },
  { t: "Index", d: "Semantic + keyword", Icon: Search },
];

function WorkflowsPage() {
  return (
    <AppShell
      title="Workflow Automation"
      subtitle="Compose, monitor, and audit pipelines that orchestrate your knowledge."
      actions={<Btn><Plus className="h-4 w-4" /> New workflow</Btn>}
    >
      <div className="grid gap-4 xl:grid-cols-[1fr_320px]">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div><div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Pipeline</div><h3 className="font-display text-lg font-semibold">Healthcare Document Intake v3</h3></div>
            <Pill tone="success">Active</Pill>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {NODES.map((n, i) => (
              <div key={n.t} className="relative">
                <div className="rounded-xl border border-border bg-card p-4 shadow-elevated">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient text-white"><n.Icon className="h-4 w-4" /></div>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Step {i+1}</div>
                  <div className="font-display text-sm font-semibold">{n.t}</div>
                  <div className="text-[11px] text-muted-foreground">{n.d}</div>
                </div>
                {i < NODES.length - 1 && (
                  <div className="absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 items-center justify-center bg-gradient-to-r from-brand to-brand-3 xl:flex">
                    <ArrowRight className="h-3 w-3 text-brand-3" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[["Last run","2m ago"],["Avg duration","18.4s / doc"],["Success rate","99.2%"]].map(([k,v]) => (
              <div key={k} className="rounded-lg border border-border bg-muted/30 p-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
                <div className="mt-1 font-display text-lg font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-display text-base font-semibold">Node palette</h3>
          <p className="text-xs text-muted-foreground">Drag onto the canvas to compose.</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[Upload, ScanText, Tags, Database, CheckCircle2, Search, Workflow].map((Icon, i) => (
              <button key={i} className="flex items-center gap-2 rounded-lg border border-border bg-card p-2.5 text-xs hover:bg-muted">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-accent text-accent-foreground"><Icon className="h-4 w-4" /></div>
                <span className="truncate">{["Upload","OCR","Classify","Store","Validate","Index","Custom"][i]}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
