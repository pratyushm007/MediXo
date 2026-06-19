import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell, Card, StatCard, Btn, Pill } from "@/components/app-shell";
import { FileStack, CheckCircle2, Users, Search, ShieldCheck, HardDrive, ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { uploadTrend, searchTrend, deptActivity, aiUsage, activities } from "@/lib/mock-data";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend,
} from "recharts";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard · Medixo KnowledgeHub" }] }),
  component: Dashboard,
});

const CHART_COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];

function Dashboard() {
  return (
    <AppShell
      title="Enterprise command center"
      subtitle="Live operational view across documents, search, AI, and governance."
      actions={
        <>
          <Btn variant="secondary">Export</Btn>
          <Link to="/upload"><Btn><Plus className="h-4 w-4" /> Upload</Btn></Link>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        <StatCard label="Total Documents" value="248,392" hint="+1,204 this week" Icon={FileStack} tone="brand" />
        <StatCard label="Processed" value="241,118" hint="97.1% success" Icon={CheckCircle2} tone="success" />
        <StatCard label="Active Users" value="1,284" hint="+82 vs last month" Icon={Users} tone="teal" />
        <StatCard label="Searches Today" value="6,418" hint="+12% DoD" Icon={Search} tone="magenta" />
        <StatCard label="Compliance Score" value="94 / 100" hint="HIPAA · SOC 2" Icon={ShieldCheck} tone="gold" />
        <StatCard label="Storage Used" value="4.2 TB" hint="of 10 TB" Icon={HardDrive} tone="warning" />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <Card className="p-5 xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-semibold">Upload & processing trend</h3>
              <p className="text-xs text-muted-foreground">Documents ingested and processed over the last 14 days.</p>
            </div>
            <Pill tone="success">+18.4%</Pill>
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={uploadTrend}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-3)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="var(--chart-3)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="uploads" stroke="var(--chart-1)" fill="url(#g1)" strokeWidth={2} />
                <Area type="monotone" dataKey="processed" stroke="var(--chart-3)" fill="url(#g2)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-semibold">AI assistant usage</h3>
              <p className="text-xs text-muted-foreground">Breakdown of intelligence calls.</p>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={aiUsage} dataKey="value" innerRadius={55} outerRadius={90} paddingAngle={3}>
                  {aiUsage.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <Card className="p-5 xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-base font-semibold">Search analytics — last 12 months</h3>
            <Pill tone="info">AI search adoption ↑</Pill>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={searchTrend}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }} />
                <Bar dataKey="searches" fill="var(--chart-1)" radius={[6,6,0,0]} />
                <Bar dataKey="ai" fill="var(--chart-3)" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-display text-base font-semibold">Department activity</h3>
          <p className="text-xs text-muted-foreground">Docs & queries this week.</p>
          <div className="mt-4 space-y-3">
            {deptActivity.map((d) => (
              <div key={d.dept}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium">{d.dept}</span>
                  <span className="text-muted-foreground">{d.docs} docs · {d.searches} searches</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-brand-gradient" style={{ width: `${Math.min(100, d.searches / 9)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-4 overflow-hidden">
        <div className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h3 className="font-display text-base font-semibold">Recent activity</h3>
            <p className="text-xs text-muted-foreground">Cross-module operational stream</p>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline">View all <ArrowUpRight className="h-3.5 w-3.5" /></a>
        </div>
        <div className="divide-y divide-border">
          {activities.map((a, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-3 text-sm hover:bg-muted/40">
              <div className="min-w-0">
                <span className="font-medium">{a.user}</span>{" "}
                <span className="text-muted-foreground">{a.action}</span>{" "}
                <span className="font-medium">{a.target}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Pill tone="brand">{a.module}</Pill>
                <span className="hidden sm:inline">{a.time}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
