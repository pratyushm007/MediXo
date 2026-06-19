import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { users } from "@/lib/mock-data";
import { Plus, Search, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/users")({
  head: () => ({ meta: [{ title: "User Management · Medixo" }] }),
  component: UsersPage,
});

function UsersPage() {
  return (
    <AppShell
      title="User Management"
      subtitle="Provision, deactivate, and audit workspace members."
      actions={<Btn><Plus className="h-4 w-4" /> Add user</Btn>}
    >
      <Card className="p-3">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input placeholder="Search users…" className="h-10 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm outline-none focus:border-ring" />
        </div>
      </Card>

      <Card className="mt-4 overflow-hidden">
        <div className="hidden grid-cols-[1.4fr_1fr_0.8fr_1fr_0.8fr_auto] gap-4 border-b border-border bg-muted/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:grid">
          <span>Name</span><span>Email</span><span>Role</span><span>Department</span><span>Status</span><span></span>
        </div>
        {users.map((u, i) => (
          <div key={i} className="grid grid-cols-1 items-center gap-2 border-b border-border px-5 py-3 last:border-b-0 md:grid-cols-[1.4fr_1fr_0.8fr_1fr_0.8fr_auto] md:gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">{u.name.split(" ").map(n=>n[0]).join("").slice(0,2)}</div>
              <div className="text-sm font-medium">{u.name}</div>
            </div>
            <div className="text-sm text-muted-foreground md:text-foreground">{u.email}</div>
            <Pill tone="brand">{u.role}</Pill>
            <div className="text-sm">{u.dept}</div>
            <div>{u.status === "Active" ? <Pill tone="success">Active</Pill> : u.status === "Invited" ? <Pill tone="info">Invited</Pill> : <Pill tone="danger">Suspended</Pill>}</div>
            <div className="flex items-center gap-1">
              <button className="rounded-md p-1.5 hover:bg-muted text-muted-foreground"><Pencil className="h-4 w-4" /></button>
              <button className="rounded-md p-1.5 hover:bg-destructive/10 text-destructive"><Trash2 className="h-4 w-4" /></button>
              <button className="rounded-md p-1.5 hover:bg-muted text-muted-foreground"><MoreHorizontal className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
