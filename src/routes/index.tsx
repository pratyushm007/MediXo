import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, ScanText, Workflow, BarChart3, ShieldCheck, Bot,
  Stethoscope, Landmark, Scale, Factory, Building2, Database, CheckCircle2,
  Search, FileStack, Layers, Zap, Lock, Github, Twitter, Linkedin
} from "lucide-react";
import { BrandLockup, BrandMark } from "@/components/brand";
import { features, industries } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medixo KnowledgeHub — Enterprise AI Knowledge Platform" },
      { name: "description", content: "Enterprise-grade AI search, OCR, and document orchestration trusted by healthcare, banking, legal, and government leaders." },
      { property: "og:title", content: "Medixo KnowledgeHub" },
      { property: "og:description", content: "AI-powered enterprise document intelligence with governance built in." },
    ],
  }),
  component: Landing,
});

const ICONS: Record<string, any> = {
  Sparkles, ScanText, Workflow, BarChart3, ShieldCheck, Bot,
  Stethoscope, Landmark, Scale, Factory, Building2,
};

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 md:px-8">
          <Link to="/"><BrandLockup /></Link>
          <nav className="ml-10 hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Platform</a>
            <a href="#architecture" className="hover:text-foreground">Architecture</a>
            <a href="#industries" className="hover:text-foreground">Industries</a>
            <a href="#benefits" className="hover:text-foreground">Benefits</a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Link to="/auth" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline">Sign in</Link>
            <Link to="/auth" className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-brand-gradient px-4 text-sm font-semibold text-white shadow-glow hover:opacity-95">
              Request demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-fade opacity-50" />
        <div className="absolute inset-0 bg-aurora opacity-80" />
        {/* Floating orbs */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 animate-blob animate-float-slow bg-brand-gradient opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 animate-blob animate-float-slow bg-magenta opacity-25 blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 animate-blob animate-float-slow bg-teal opacity-25 blur-3xl" style={{ animationDelay: "4s" }} />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur shadow-glow">
              <Sparkles className="h-3.5 w-3.5 text-brand animate-pulse" />
              <span className="shimmer-text">Now with Gemini-grade reasoning & cross-document analysis</span>
            </div>
            <h1 className="animate-rise mt-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl" style={{ animationDelay: "0.1s" }}>
              The <span className="text-aurora">enterprise knowledge layer</span> for every regulated business
            </h1>
            <p className="animate-rise mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg" style={{ animationDelay: "0.2s" }}>
              Medixo KnowledgeHub orchestrates millions of enterprise documents into a single, governed,
              AI-native repository — with semantic search, OCR, and a grounded enterprise assistant.
            </p>
            <div className="animate-rise mt-8 flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.3s" }}>
              <Link to="/auth" className="group inline-flex h-11 items-center gap-2 rounded-xl bg-brand-gradient-animated px-6 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-magenta">
                Start free trial <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#architecture" className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card/80 px-6 text-sm font-semibold backdrop-blur transition-all hover:bg-muted hover:border-brand/40 hover:-translate-y-0.5">
                See architecture
              </a>
            </div>
            <div className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground" style={{ animationDelay: "0.4s" }}>
              <span className="flex items-center gap-1.5"><Lock className="h-3 w-3 text-teal" /> SOC 2 · HIPAA · ISO 27001</span>
              <span>·</span>
              <span>Deployed across 6 industries</span>
              <span>·</span>
              <span className="text-gold">99.99% uptime SLA</span>
            </div>
          </div>

          {/* Hero preview */}
          <div className="animate-rise relative mx-auto mt-14 max-w-5xl" style={{ animationDelay: "0.5s" }}>
            <div className="absolute -inset-1 rounded-3xl bg-brand-gradient-animated opacity-30 blur-xl" />
            <div className="relative rounded-2xl border border-border bg-card shadow-elevated beam-border">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
                <div className="ml-3 rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">app.medixo.io/search</div>
              </div>
              <div className="grid gap-0 p-0 md:grid-cols-[260px_1fr]">
                <div className="hidden border-r border-border bg-sidebar p-4 text-sidebar-foreground md:block">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Recent</div>
                  <ul className="mt-2 space-y-1 text-xs">
                    {["Vendor contracts 2026", "HIPAA findings High", "Q3 board metrics", "CT-441 results"].map(s => (
                      <li key={s} className="truncate rounded-md px-2 py-1.5 hover:bg-sidebar-accent">{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
                    <Search className="h-4 w-4 text-brand" />
                    <span className="text-sm">Summarize all SOPs related to pharmacovigilance from 2024–2026</span>
                  </div>
                  <div className="mt-4 rounded-xl border border-border bg-gradient-to-br from-accent/40 to-card p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand"><Bot className="h-4 w-4" /> Medixo Assistant</div>
                    <p className="mt-2 text-sm leading-relaxed">
                      Across <b>14 SOPs</b>, Medixo identified <b>3 policy revisions</b> in the last 18 months, with
                      consistent strengthening of adverse-event reporting timelines from 30 → 15 → 7 days.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                      {["Pharmacovigilance SOP 2026 · p.12", "AE Reporting v3 · p.4", "Clinical Trial CT-441 · p.31"].map(s => (
                        <span key={s} className="rounded-md border border-border bg-card px-2 py-1 text-muted-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
          {[
            ["10M+", "Documents indexed"],
            ["70%", "Faster retrieval"],
            ["50%", "Less admin effort"],
            ["99.99%", "Platform uptime"],
          ].map(([k, v]) => (
            <div key={v} className="bg-background p-6 text-center md:p-8">
              <div className="font-display text-3xl font-bold text-brand-gradient md:text-4xl">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Platform</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Everything an enterprise needs to operationalize its knowledge.</h2>
            <p className="mt-3 text-muted-foreground">One platform — ingestion, intelligence, governance, and analytics. Designed for IT, compliance, and the business.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = ICONS[f.icon] ?? Sparkles;
              return (
                <div key={f.title} className="card-glow group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-elevated hover:border-brand/40">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand-gradient text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Architecture</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">An orchestration backbone built for scale.</h2>
          </div>
          <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-6">
            {[
              { t: "Enterprise Systems", d: "SharePoint, ERP, EHR, CRM, S3, Azure", Icon: Database },
              { t: "Data Ingestion", d: "Connectors, watchers, secure tunnels", Icon: Layers },
              { t: "AI Processing", d: "OCR, classification, NER, embeddings", Icon: Sparkles },
              { t: "Orchestration", d: "Pipelines with lineage & retries", Icon: Workflow },
              { t: "Repository", d: "Vector + relational + object", Icon: FileStack },
              { t: "Apps", d: "Search · Analytics · Assistant", Icon: Bot },
            ].map((s, i, a) => (
              <div key={s.t} className="relative rounded-xl border border-border bg-card p-5 card-glow">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient text-white"><s.Icon className="h-4.5 w-4.5" /></div>
                <div className="mt-3 text-xs font-semibold text-muted-foreground">STAGE {i + 1}</div>
                <div className="mt-1 font-display text-base font-semibold">{s.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.d}</div>
                {i < a.length - 1 && (
                  <div className="absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-gradient-to-r from-brand to-brand-3 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Outcomes</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Measurable impact within the first quarter.</h2>
            <p className="mt-3 text-muted-foreground">Pilots typically deliver retrieval speed-ups and admin reduction in under 60 days, with full compliance posture in under 90.</p>
            <div className="mt-8 space-y-3">
              {[
                ["70% faster document retrieval", "Semantic search replaces folder hunting."],
                ["50% reduction in admin effort", "Auto-classification and metadata extraction."],
                ["Compliance readiness day one", "Built-in audit, RBAC, encryption."],
                ["Hardened security posture", "MFA, SSO, fine-grained access controls."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-radial-glow opacity-50" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { k: "70%", v: "Retrieval Faster", Icon: Zap, tone: "from-brand to-brand-2" },
                { k: "50%", v: "Less Admin", Icon: Workflow, tone: "from-brand-2 to-brand-3" },
                { k: "100%", v: "Audit Coverage", Icon: ShieldCheck, tone: "from-brand-3 to-info" },
                { k: "AES-256", v: "Encryption", Icon: Lock, tone: "from-info to-brand" },
              ].map(({ k, v, Icon, tone }) => (
                <div key={v} className="rounded-2xl border border-border bg-card p-6 shadow-elevated">
                  <div className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${tone} text-white`}><Icon className="h-5 w-5" /></div>
                  <div className="mt-4 font-display text-3xl font-bold">{k}</div>
                  <div className="text-xs text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Industries</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Trusted across regulated industries.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => {
              const Icon = ICONS[i.icon] ?? Building2;
              return (
                <div key={i.name} className="card-glow group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-elevated hover:border-brand/40">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></div>
                    <h3 className="font-display text-lg font-semibold">{i.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{i.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Bring order to your enterprise knowledge.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Spin up a secure pilot in days. Connect SharePoint, S3, and ERP — and start asking questions.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/auth" className="inline-flex h-11 items-center gap-2 rounded-xl bg-brand-gradient px-6 text-sm font-semibold text-white shadow-glow">
              Start free trial <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="mailto:sales@medixo.io" className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-semibold hover:bg-muted">Talk to sales</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
          <div>
            <BrandLockup />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Enterprise data orchestration & intelligent document management. Built by Medixo HealthAI Systems.
            </p>
          </div>
          {[
            ["Product", ["Platform", "Architecture", "Pricing", "Changelog"]],
            ["Company", ["About", "Careers", "Press", "Contact"]],
            ["Legal", ["Security", "Privacy", "Terms", "DPA"]],
          ].map(([h, items]) => (
            <div key={h as string}>
              <div className="font-display text-sm font-semibold">{h}</div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {(items as string[]).map((i) => <li key={i}><a className="hover:text-foreground" href="#">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-muted-foreground md:px-8">
            <div>© {new Date().getFullYear()} Medixo HealthAI Systems Pvt Ltd · All rights reserved.</div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
