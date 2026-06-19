import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { auditLogs } from "@/lib/mock-data";
import { Search, Filter, Download } from "lucide-react";

export const Route = createFileRoute("/_authenticated/audit")({
  head: () => ({ meta: [{ title: "Audit Logs · Medixo" }] }),
  component: AuditPage,
});

function AuditPage() {
  return (
    <AppShell
      title="Audit Logs"
      subtitle="Immutable, queryable record of every action across the platform."
      actions={<><Btn variant="secondary"><Filter className="h-4 w-4" /> Filters</Btn><Btn><Download className="h-4 w-4" /> Export</Btn></>}
    >
      <Card className="p-3">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input placeholder="Search events, users, IP…" className="h-10 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm outline-none focus:border-ring" />
        </div>
      </Card>
      <Card className="mt-4 overflow-hidden">
        <div className="hidden grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr] gap-4 border-b border-border bg-muted/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:grid">
          <span>User</span><span>Action</span><span>Module</span><span>Time</span><span>IP Address</span>
        </div>
        {auditLogs.map((l) => (
          <div key={l.id} className="grid grid-cols-1 gap-1.5 border-b border-border px-5 py-3 text-sm last:border-b-0 hover:bg-muted/30 md:grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr] md:items-center md:gap-4">
            <div className="font-medium">{l.user}</div>
            <div><Pill tone={l.action.includes("DELETE") ? "danger" : l.action.includes("LOGIN") ? "info" : "brand"}>{l.action}</Pill></div>
            <div className="text-xs text-muted-foreground">{l.module}</div>
            <div className="text-xs text-muted-foreground">{new Date(l.time).toLocaleString()}</div>
            <div className="font-mono text-xs">{l.ip}</div>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
