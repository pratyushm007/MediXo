import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, StatCard, Pill } from "@/components/app-shell";
import { TrendingUp, DollarSign, ShieldCheck, Activity } from "lucide-react";
import { uploadTrend, searchTrend, deptActivity, aiUsage } from "@/lib/mock-data";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

export const Route = createFileRoute("/_authenticated/analytics")({
  head: () => ({ meta: [{ title: "Analytics · Medixo KnowledgeHub" }] }),
  component: Analytics,
});

const COLORS = ["var(--chart-1)","var(--chart-2)","var(--chart-3)","var(--chart-4)","var(--chart-5)"];

function Analytics() {
  return (
    <AppShell title="Executive Analytics" subtitle="Productivity, compliance, and value tracking across the workspace.">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Productivity Gain" value="+34%" hint="vs baseline" Icon={TrendingUp} tone="success" />
        <StatCard label="Cost Reduction" value="$1.82M" hint="annualized" Icon={DollarSign} tone="brand" />
        <StatCard label="Compliance Score" value="94/100" hint="HIPAA · SOC 2" Icon={ShieldCheck} tone="info" />
        <StatCard label="Avg Query Time" value="1.2s" hint="-71% YoY" Icon={Activity} tone="warning" />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card className="p-5">
          <h3 className="font-display text-base font-semibold">Search volume trend</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer><LineChart data={searchTrend}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="searches" stroke="var(--chart-1)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="ai" stroke="var(--chart-3)" strokeWidth={2} dot={false} />
            </LineChart></ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-5">
          <h3 className="font-display text-base font-semibold">Department activity</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer><BarChart data={deptActivity}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="dept" stroke="var(--muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="docs" fill="var(--chart-1)" radius={[6,6,0,0]} />
              <Bar dataKey="searches" fill="var(--chart-2)" radius={[6,6,0,0]} />
            </BarChart></ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <Card className="p-5 xl:col-span-2">
          <h3 className="font-display text-base font-semibold">Upload throughput</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer><LineChart data={uploadTrend}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }} />
              <Line dataKey="uploads" stroke="var(--chart-1)" strokeWidth={2} dot={false} />
              <Line dataKey="processed" stroke="var(--chart-3)" strokeWidth={2} dot={false} />
            </LineChart></ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-5">
          <h3 className="font-display text-base font-semibold">AI workload mix</h3>
          <div className="mt-4 h-64">
            <ResponsiveContainer><PieChart>
              <Pie data={aiUsage} dataKey="value" innerRadius={50} outerRadius={85} paddingAngle={3}>
                {aiUsage.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
            </PieChart></ResponsiveContainer>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
