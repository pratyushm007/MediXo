import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, Card, Btn } from "@/components/app-shell";

export const Route = createFileRoute("/_authenticated/settings")({
  head: () => ({ meta: [{ title: "Settings · Medixo KnowledgeHub" }] }),
  component: SettingsPage,
});

const TABS = ["General","Security","Notifications","Integrations","Storage","AI Settings"] as const;

function SettingsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("General");
  return (
    <AppShell title="Workspace Settings" subtitle="Configure how your enterprise workspace behaves.">
      <Card className="overflow-hidden">
        <div className="flex flex-wrap gap-1 border-b border-border bg-muted/30 p-1.5">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} className={`rounded-md px-3 py-1.5 text-xs font-medium ${tab===t?"bg-background text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"}`}>{t}</button>
          ))}
        </div>
        <div className="p-6">
          {tab === "General" && (
            <Section title="Workspace identity" desc="How your workspace appears across the platform.">
              <Row label="Workspace name"><input className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm" defaultValue="Medixo HealthAI" /></Row>
              <Row label="Primary contact"><input className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm" defaultValue="admin@medixo.io" /></Row>
              <Row label="Default language"><select className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm"><option>English (US)</option><option>English (UK)</option><option>Deutsch</option></select></Row>
            </Section>
          )}
          {tab === "Security" && (
            <Section title="Security & compliance" desc="Enforce MFA, SSO, and password policies.">
              <Toggle label="Enforce MFA for all users" defaultChecked /><Toggle label="Require SSO for /admin routes" defaultChecked /><Toggle label="Auto-rotate API tokens (90 days)" /><Toggle label="Block password reuse" defaultChecked />
            </Section>
          )}
          {tab === "Notifications" && (
            <Section title="Notification preferences" desc="Choose what you receive and where.">
              <Toggle label="Email: weekly compliance digest" defaultChecked /><Toggle label="Email: security alerts" defaultChecked /><Toggle label="In-app: workflow failures" defaultChecked /><Toggle label="Slack: high-severity events" />
            </Section>
          )}
          {tab === "Integrations" && <Section title="Integrations" desc="Manage connected systems."><p className="text-sm text-muted-foreground">Go to the Integrations page for connector management.</p></Section>}
          {tab === "Storage" && (
            <Section title="Storage" desc="Total: 10 TB · Used: 4.2 TB">
              <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-brand-gradient" style={{ width: "42%" }} /></div>
              <div className="mt-2 text-xs text-muted-foreground">Tier: Enterprise · Region: US-East / EU-West</div>
            </Section>
          )}
          {tab === "AI Settings" && (
            <Section title="AI behavior" desc="Tune retrieval, models, and grounding.">
              <Row label="Primary model"><select className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm"><option>Gemini 2.5 Pro (Default)</option><option>GPT-5.4</option><option>Claude Sonnet 4.5</option></select></Row>
              <Row label="Retrieval depth"><input type="range" min={1} max={20} defaultValue={8} className="w-full accent-[var(--brand)]" /></Row>
              <Toggle label="Require citations on every answer" defaultChecked />
              <Toggle label="Block answers below 60% confidence" />
            </Section>
          )}
          <div className="mt-6 flex justify-end gap-2"><Btn variant="ghost">Reset</Btn><Btn>Save changes</Btn></div>
        </div>
      </Card>
    </AppShell>
  );
}

function Section({ title, desc, children }: any) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-5 space-y-3">{children}</div>
    </div>
  );
}
function Row({ label, children }: any) {
  return (
    <label className="grid items-center gap-2 sm:grid-cols-[200px_1fr] sm:gap-4">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>{children}
    </label>
  );
}
function Toggle({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  const [on, setOn] = useState(!!defaultChecked);
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
      <span className="text-sm">{label}</span>
      <button onClick={() => setOn(o => !o)} className={`relative h-6 w-11 rounded-full transition-colors ${on?"bg-brand-gradient":"bg-muted"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on?"left-5":"left-0.5"}`} />
      </button>
    </div>
  );
}
