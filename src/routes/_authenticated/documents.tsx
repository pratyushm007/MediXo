import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { mockDocs, type DocItem } from "@/lib/mock-data";
import { Search, Filter, LayoutGrid, List as ListIcon, FileText, FileSpreadsheet, Presentation, Image as ImageIcon, MoreHorizontal, Download, Pencil, Trash2, Eye, Plus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/documents")({
  head: () => ({ meta: [{ title: "Documents · Medixo KnowledgeHub" }] }),
  component: DocumentsPage,
});

const TYPE_ICON: Record<DocItem["type"], any> = { PDF: FileText, DOCX: FileText, XLSX: FileSpreadsheet, PPT: Presentation, IMG: ImageIcon };

function statusPill(s: DocItem["status"]) {
  return s === "processed" ? <Pill tone="success">Processed</Pill> :
    s === "processing" ? <Pill tone="info">Processing</Pill> :
    s === "pending" ? <Pill tone="warning">Pending</Pill> : <Pill tone="danger">Failed</Pill>;
}

function DocumentsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("All");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const depts = useMemo(() => ["All", ...Array.from(new Set(mockDocs.map((d) => d.department)))], []);
  const statuses = ["All", "processed", "processing", "pending", "failed"];

  const filtered = mockDocs.filter((d) =>
    (dept === "All" || d.department === dept) &&
    (status === "All" || d.status === status) &&
    (q === "" || d.name.toLowerCase().includes(q.toLowerCase()))
  );
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const view_items = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <AppShell
      title="Document Library"
      subtitle={`${filtered.length.toLocaleString()} documents · Cross-departmental view`}
      actions={
        <>
          <Btn variant="secondary"><Filter className="h-4 w-4" /> Advanced</Btn>
          <Link to="/upload"><Btn><Plus className="h-4 w-4" /> Upload</Btn></Link>
        </>
      }
    >
      <Card className="p-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }}
              placeholder="Search by name, tag, owner…"
              className="h-10 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm outline-none focus:border-ring"
            />
          </div>
          <Select value={dept} onChange={(v) => { setDept(v); setPage(1); }} options={depts} />
          <Select value={status} onChange={(v) => { setStatus(v); setPage(1); }} options={statuses} />
          <div className="inline-flex overflow-hidden rounded-lg border border-border">
            <button onClick={() => setView("grid")} className={`grid h-10 w-10 place-items-center ${view==="grid"?"bg-muted text-foreground":"text-muted-foreground"}`}><LayoutGrid className="h-4 w-4" /></button>
            <button onClick={() => setView("list")} className={`grid h-10 w-10 place-items-center border-l border-border ${view==="list"?"bg-muted text-foreground":"text-muted-foreground"}`}><ListIcon className="h-4 w-4" /></button>
          </div>
        </div>
      </Card>

      {view === "grid" ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {view_items.map((d) => {
            const Icon = TYPE_ICON[d.type];
            return (
              <Card key={d.id} className="group p-5 transition-all hover:shadow-elevated">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{d.type} · {d.size}</div>
                      <div className="mt-0.5 line-clamp-2 text-sm font-semibold">{d.name}</div>
                    </div>
                  </div>
                  <button className="rounded-md p-1.5 text-muted-foreground opacity-0 transition group-hover:opacity-100 hover:bg-muted"><MoreHorizontal className="h-4 w-4" /></button>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px]">
                  <Pill tone="brand">{d.department}</Pill>
                  <Pill>{d.category}</Pill>
                  {statusPill(d.status)}
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>By {d.uploadedBy}</span>
                  <span>{new Date(d.uploadedAt).toLocaleDateString()}</span>
                </div>
                <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3">
                  <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs hover:bg-muted"><Eye className="h-3.5 w-3.5" /> View</button>
                  <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs hover:bg-muted"><Pencil className="h-3.5 w-3.5" /> Edit</button>
                  <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs hover:bg-muted"><Download className="h-3.5 w-3.5" /></button>
                  <button className="inline-flex items-center justify-center rounded-md p-1.5 text-destructive hover:bg-destructive/10"><Trash2 className="h-3.5 w-3.5" /></button>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card className="mt-4 overflow-hidden">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_auto] items-center gap-4 border-b border-border bg-muted/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            <span>Name</span><span>Department</span><span>Status</span><span>Uploaded</span><span></span>
          </div>
          {view_items.map((d) => {
            const Icon = TYPE_ICON[d.type];
            return (
              <div key={d.id} className="grid grid-cols-[1.5fr_1fr_1fr_1fr_auto] items-center gap-4 border-b border-border px-5 py-3 text-sm last:border-b-0 hover:bg-muted/30">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"><Icon className="h-4 w-4" /></div>
                  <div className="min-w-0"><div className="truncate font-medium">{d.name}</div><div className="text-xs text-muted-foreground">{d.type} · {d.size}</div></div>
                </div>
                <Pill tone="brand">{d.department}</Pill>
                <div>{statusPill(d.status)}</div>
                <div className="text-xs text-muted-foreground">{new Date(d.uploadedAt).toLocaleDateString()}</div>
                <button className="rounded-md p-1.5 text-muted-foreground hover:bg-muted"><MoreHorizontal className="h-4 w-4" /></button>
              </div>
            );
          })}
        </Card>
      )}

      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>Page {page} of {pages}</span>
        <div className="flex gap-1.5">
          <button disabled={page<=1} onClick={() => setPage(p => p - 1)} className="rounded-md border border-border px-3 py-1.5 disabled:opacity-40 hover:bg-muted">Prev</button>
          <button disabled={page>=pages} onClick={() => setPage(p => p + 1)} className="rounded-md border border-border px-3 py-1.5 disabled:opacity-40 hover:bg-muted">Next</button>
        </div>
      </div>
    </AppShell>
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="h-10 rounded-lg border border-input bg-card px-3 text-sm outline-none focus:border-ring">
      {options.map((o) => <option key={o} value={o}>{o[0].toUpperCase()+o.slice(1)}</option>)}
    </select>
  );
}
