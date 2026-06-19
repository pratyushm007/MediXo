import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, Card, Btn, Pill } from "@/components/app-shell";
import { UploadCloud, FileText, X, Check, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/upload")({
  head: () => ({ meta: [{ title: "Upload · Medixo KnowledgeHub" }] }),
  component: UploadPage,
});

interface Picked { name: string; size: number; type: string }

const STEPS = ["Select files", "Add metadata", "Review", "Upload"] as const;

function UploadPage() {
  const [step, setStep] = useState(0);
  const [files, setFiles] = useState<Picked[]>([]);
  const [meta, setMeta] = useState({ department: "Healthcare", category: "Policy", tags: "" });
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const list = Array.from(e.dataTransfer.files).map(f => ({ name: f.name, size: f.size, type: f.type || "application/octet-stream" }));
    setFiles((s) => [...s, ...list]);
  };
  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const list = Array.from(e.target.files).map(f => ({ name: f.name, size: f.size, type: f.type || "application/octet-stream" }));
    setFiles((s) => [...s, ...list]);
  };
  const startUpload = () => {
    setStep(3); setProgress(0); setDone(false);
    const iv = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(iv); setDone(true); return 100; }
        return Math.min(100, p + Math.random() * 14);
      });
    }, 220);
  };

  return (
    <AppShell title="Upload documents" subtitle="Multi-step ingestion with metadata, OCR, and validation.">
      {/* Stepper */}
      <Card className="p-5">
        <ol className="flex flex-wrap gap-3">
          {STEPS.map((s, i) => (
            <li key={s} className="flex min-w-0 flex-1 items-center gap-3">
              <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold ${i<=step ? "bg-brand-gradient text-white shadow-glow" : "bg-muted text-muted-foreground"}`}>
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <div className="min-w-0">
                <div className={`text-[10px] font-semibold uppercase tracking-widest ${i<=step?"text-brand":"text-muted-foreground"}`}>Step {i+1}</div>
                <div className="truncate text-sm font-semibold">{s}</div>
              </div>
              {i < STEPS.length - 1 && <div className="ml-1 hidden h-px flex-1 bg-border sm:block" />}
            </li>
          ))}
        </ol>
      </Card>

      <div className="mt-4">
        {step === 0 && (
          <Card className="p-6">
            <label
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              className="block cursor-pointer rounded-2xl border-2 border-dashed border-border p-12 text-center transition-colors hover:bg-muted/40"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow"><UploadCloud className="h-7 w-7" /></div>
              <div className="mt-4 font-display text-lg font-semibold">Drop files or click to browse</div>
              <div className="mt-1 text-xs text-muted-foreground">PDF, DOCX, XLSX, PPT, PNG, JPG · up to 250MB per file</div>
              <input type="file" multiple className="hidden" onChange={onPick} />
            </label>

            {files.length > 0 && (
              <div className="mt-5 space-y-2">
                {files.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5">
                    <div className="grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground"><FileText className="h-4 w-4" /></div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">{f.name}</div>
                      <div className="text-xs text-muted-foreground">{(f.size/1024/1024).toFixed(2)} MB · {f.type}</div>
                    </div>
                    <button onClick={() => setFiles(files.filter((_, j) => j !== i))} className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-destructive"><X className="h-4 w-4" /></button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <Btn disabled={files.length===0} onClick={() => setStep(1)}>Next <ArrowRight className="h-4 w-4" /></Btn>
            </div>
          </Card>
        )}

        {step === 1 && (
          <Card className="p-6">
            <h3 className="font-display text-lg font-semibold">Metadata assignment</h3>
            <p className="mt-1 text-sm text-muted-foreground">These values will be applied to all {files.length} files and refined automatically during processing.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Field label="Department">
                <select value={meta.department} onChange={(e) => setMeta({ ...meta, department: e.target.value })} className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm">
                  {["Healthcare","Legal","Finance","HR","Operations","Compliance","Research","Executive"].map(o => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Category">
                <select value={meta.category} onChange={(e) => setMeta({ ...meta, category: e.target.value })} className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm">
                  {["Policy","Contract","Invoice","Report","SOP","Patient Record","Clinical Trial","Audit"].map(o => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Tags (comma separated)" className="md:col-span-2">
                <input value={meta.tags} onChange={(e) => setMeta({ ...meta, tags: e.target.value })} placeholder="hipaa, cardiology, 2026" className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm" />
              </Field>
            </div>
            <div className="mt-6 flex justify-between">
              <Btn variant="ghost" onClick={() => setStep(0)}><ArrowLeft className="h-4 w-4" /> Back</Btn>
              <Btn onClick={() => setStep(2)}>Review <ArrowRight className="h-4 w-4" /></Btn>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="p-6">
            <h3 className="font-display text-lg font-semibold">Review and confirm</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Files</div>
                <div className="mt-2 text-2xl font-bold">{files.length}</div>
                <div className="mt-1 text-xs text-muted-foreground">{(files.reduce((s,f) => s+f.size, 0)/1024/1024).toFixed(2)} MB total</div>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Routing</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Pill tone="brand">{meta.department}</Pill><Pill>{meta.category}</Pill>
                  {meta.tags.split(",").map(t => t.trim()).filter(Boolean).map(t => <Pill key={t} tone="info">{t}</Pill>)}
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-border p-4 text-sm">
              <div className="font-medium">Pipeline preview</div>
              <ol className="mt-2 grid gap-2 text-xs text-muted-foreground sm:grid-cols-3 md:grid-cols-6">
                {["Upload","OCR","Classify","Extract","Validate","Index"].map((s, i) => (
                  <li key={s} className="rounded-md border border-border bg-card px-2.5 py-2 text-center">{i+1}. {s}</li>
                ))}
              </ol>
            </div>
            <div className="mt-6 flex justify-between">
              <Btn variant="ghost" onClick={() => setStep(1)}><ArrowLeft className="h-4 w-4" /> Back</Btn>
              <Btn onClick={startUpload}>Start upload <ArrowRight className="h-4 w-4" /></Btn>
            </div>
          </Card>
        )}

        {step === 3 && (
          <Card className="p-6">
            <h3 className="font-display text-lg font-semibold">{done ? "Upload complete" : "Uploading & processing"}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{done ? "All documents have been ingested and queued for processing." : "Files are being uploaded and routed through the AI pipeline."}</p>
            <div className="mt-5">
              <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-brand-gradient transition-all" style={{ width: `${progress}%` }} /></div>
              <div className="mt-2 flex items-center justify-between text-xs"><span>{Math.round(progress)}%</span><span className="text-muted-foreground">{files.length} files</span></div>
            </div>
            <div className="mt-4 space-y-2">
              {files.map((f, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="flex-1 truncate">{f.name}</span>
                  {done ? <Check className="h-4 w-4 text-success" /> : <Loader2 className="h-4 w-4 animate-spin text-brand" />}
                </div>
              ))}
            </div>
            {done && (
              <div className="mt-6 flex justify-end gap-2">
                <Btn variant="secondary" onClick={() => { setFiles([]); setStep(0); setDone(false); }}>Upload more</Btn>
                <Btn onClick={() => navigate({ to: "/documents" })}>Go to library <ArrowRight className="h-4 w-4" /></Btn>
              </div>
            )}
          </Card>
        )}
      </div>
    </AppShell>
  );
}

function Field({ label, children, className = "" }: { label: string; children: any; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
