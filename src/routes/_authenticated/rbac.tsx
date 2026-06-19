import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { roles } from "@/lib/mock-data";
import { Check, X, ShieldCheck, Plus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/rbac")({
  head: () => ({ meta: [{ title: "RBAC · Medixo KnowledgeHub" }] }),
  component: RbacPage,
});

const PERMS = ["View", "Edit", "Delete", "Share", "Export", "Admin"];
const MATRIX: Record<string, boolean[]> = {
  HR:        [true, true, false, true, true, false],
  Finance:   [true, true, true,  true, true, false],
  Legal:    [true, true, false, true, true, false],
  Executive: [true, false, false, true, true, true],
  Clinical:  [true, true, false, false, false, false],
};

function RbacPage() {
  return (
    <AppShell title="Role-Based Access Control" subtitle="Department-aware roles with fine-grained permissions." actions={<Btn><Plus className="h-4 w-4" /> New role</Btn>}>
      <div className="grid gap-4 lg:grid-cols-3">
        {roles.map((r) => (
          <Card key={r.role} className="p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-white"><ShieldCheck className="h-5 w-5" /></div>
              <div><div className="font-display text-base font-semibold">{r.role}</div><div className="text-xs text-muted-foreground">{r.users} users</div></div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {r.scope.map(s => <Pill key={s} tone="brand">{s}</Pill>)}
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-[10px] uppercase tracking-widest text-muted-foreground">
              <th className="px-5 py-3 text-left">Role</th>
              {PERMS.map(p => <th key={p} className="px-3 py-3 text-center">{p}</th>)}
            </tr>
          </thead>
          <tbody>
            {Object.entries(MATRIX).map(([role, perms]) => (
              <tr key={role} className="border-b border-border last:border-b-0">
                <td className="px-5 py-3 font-medium">{role}</td>
                {perms.map((v, i) => (
                  <td key={i} className="px-3 py-3 text-center">
                    {v ? <span className="inline-grid h-6 w-6 place-items-center rounded-md bg-success/15 text-success"><Check className="h-3.5 w-3.5" /></span> : <span className="inline-grid h-6 w-6 place-items-center rounded-md bg-muted text-muted-foreground"><X className="h-3.5 w-3.5" /></span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
