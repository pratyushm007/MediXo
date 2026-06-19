import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, StatCard, Pill, Btn } from "@/components/app-shell";
import { KeyRound, Activity, AlertTriangle, Lock } from "lucide-react";

export const Route = createFileRoute("/_authenticated/security")({
  head: () => ({ meta: [{ title: "Security Center · Medixo" }] }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <AppShell title="Security Center" subtitle="Posture, sessions, encryption, and compliance posture in one place.">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="MFA Coverage" value="98%" hint="2 users pending" Icon={KeyRound} tone="success" />
        <StatCard label="Active Sessions" value="412" hint="36 admins" Icon={Activity} tone="info" />
        <StatCard label="Security Alerts" value="3 open" hint="1 critical" Icon={AlertTriangle} tone="warning" />
        <StatCard label="Encryption" value="AES-256" hint="At rest & in transit" Icon={Lock} tone="brand" />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card className="p-5">
          <h3 className="font-display text-base font-semibold">Compliance health</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              ["HIPAA", 98, "success"],
              ["SOC 2 Type II", 95, "success"],
              ["ISO 27001", 91, "info"],
              ["GDPR", 88, "warning"],
            ].map(([k, v, tone]: any) => (
              <li key={k}>
                <div className="flex items-center justify-between"><span className="font-medium">{k}</span><Pill tone={tone}>{v}%</Pill></div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full bg-brand-gradient" style={{ width: `${v}%` }} /></div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <h3 className="font-display text-base font-semibold">Open security alerts</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { sev: "Critical", t: "Unusual export pattern detected for finance@medixo.io" },
              { sev: "High", t: "MFA disabled for 2 service accounts" },
              { sev: "Medium", t: "Stale API token unused for 90 days" },
            ].map((a) => (
              <li key={a.t} className="rounded-lg border border-border bg-card p-3">
                <div className="flex items-center gap-2"><Pill tone={a.sev==="Critical"?"danger":a.sev==="High"?"warning":"info"}>{a.sev}</Pill><span>{a.t}</span></div>
                <div className="mt-2 flex gap-2"><Btn variant="secondary">Investigate</Btn><Btn variant="ghost">Dismiss</Btn></div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
