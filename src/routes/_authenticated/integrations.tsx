import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { integrations } from "@/lib/mock-data";
import { Plug, CheckCircle2, Plus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/integrations")({
  head: () => ({ meta: [{ title: "Integrations · Medixo KnowledgeHub" }] }),
  component: IntegrationsPage,
});

function IntegrationsPage() {
  return (
    <AppShell
      title="Integrations"
      subtitle="Connect your enterprise systems to bring all knowledge into one governed workspace."
      actions={<Btn><Plus className="h-4 w-4" /> Add connector</Btn>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {integrations.map((i) => (
          <Card key={i.name} className="group flex flex-col p-5 transition-all hover:shadow-elevated">
            <div className="flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground"><Plug className="h-5 w-5" /></div>
              {i.status === "connected" ? <Pill tone="success"><CheckCircle2 className="mr-1 h-3 w-3" /> Connected</Pill> : <Pill>Available</Pill>}
            </div>
            <h3 className="mt-4 font-display text-base font-semibold">{i.name}</h3>
            <p className="mt-1 flex-1 text-xs text-muted-foreground">{i.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{i.category}</span>
              <Btn variant={i.status === "connected" ? "secondary" : "primary"}>{i.status === "connected" ? "Manage" : "Connect"}</Btn>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
