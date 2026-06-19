import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  LayoutDashboard, FileStack, Upload, Search, Bot, GitCompareArrows,
  BarChart3, Users, ShieldCheck, ScrollText, Lock, Workflow, Settings,
  Plug, Menu, X, Bell, Moon, Sun, LogOut, ChevronDown,
} from "lucide-react";
import { BrandLockup, BrandMark } from "./brand";
import { supabase } from "@/integrations/supabase/client";

const NAV: { group: string; items: { to: string; label: string; Icon: any; badge?: string }[] }[] = [
  {
    group: "Workspace",
    items: [
      { to: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
      { to: "/documents", label: "Documents", Icon: FileStack },
      { to: "/upload", label: "Upload", Icon: Upload },
    ],
  },
  {
    group: "Intelligence",
    items: [
      { to: "/search", label: "AI Search", Icon: Search, badge: "NEW" },
      { to: "/assistant", label: "AI Assistant", Icon: Bot },
      { to: "/compare", label: "Cross-Doc Analysis", Icon: GitCompareArrows },
      { to: "/analytics", label: "Analytics", Icon: BarChart3 },
    ],
  },
  {
    group: "Governance",
    items: [
      { to: "/users", label: "Users", Icon: Users },
      { to: "/rbac", label: "RBAC", Icon: ShieldCheck },
      { to: "/audit", label: "Audit Logs", Icon: ScrollText },
      { to: "/security", label: "Security Center", Icon: Lock },
    ],
  },
  {
    group: "Platform",
    items: [
      { to: "/workflows", label: "Workflows", Icon: Workflow },
      { to: "/integrations", label: "Integrations", Icon: Plug },
      { to: "/settings", label: "Settings", Icon: Settings },
    ],
  },
];

function useTheme() {
  const toggle = () => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark");
  };
  return { toggle };
}

export function AppShell({ children, title, subtitle, actions }: {
  children: ReactNode; title: string; subtitle?: string; actions?: ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const { toggle } = useTheme();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar — desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-sidebar text-sidebar-foreground lg:flex">
        <div className="flex h-16 items-center border-b border-sidebar-border px-5">
          <Link to="/dashboard"><BrandLockup /></Link>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {NAV.map((g) => (
            <div key={g.group} className="mb-5">
              <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{g.group}</div>
              <ul className="space-y-0.5">
                {g.items.map((i) => {
                  const active = pathname.startsWith(i.to);
                  return (
                    <li key={i.to}>
                      <Link
                        to={i.to}
                        className={`group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                          active
                            ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`}
                      >
                        <i.Icon className="h-4 w-4 shrink-0" />
                        <span className="min-w-0 truncate">{i.label}</span>
                        {i.badge && (
                          <span className="ml-auto rounded-md bg-brand-gradient px-1.5 py-0.5 text-[9px] font-bold text-white">{i.badge}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div className="border-t border-sidebar-border p-3">
          <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent p-2.5">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">AR</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-semibold">Dr. Anika Rao</div>
              <div className="truncate text-[10px] text-muted-foreground">Admin · Healthcare</div>
            </div>
            <button onClick={handleSignOut} className="rounded-md p-1.5 text-muted-foreground hover:bg-background hover:text-foreground" title="Sign out">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
            <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
              <BrandLockup />
              <button onClick={() => setMobileOpen(false)} className="rounded-md p-2 hover:bg-sidebar-accent"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {NAV.map((g) => (
                <div key={g.group} className="mb-5">
                  <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{g.group}</div>
                  <ul className="space-y-0.5">
                    {g.items.map((i) => (
                      <li key={i.to}>
                        <Link to={i.to} onClick={() => setMobileOpen(false)} className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${pathname.startsWith(i.to) ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent"}`}>
                          <i.Icon className="h-4 w-4" /> {i.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:px-6">
          <button onClick={() => setMobileOpen(true)} className="rounded-md p-2 hover:bg-muted lg:hidden"><Menu className="h-5 w-5" /></button>
          <div className="lg:hidden"><BrandMark size={28} /></div>
          <div className="hidden flex-1 md:block">
            <div className="relative max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search documents, people, queries…"
                className="h-9 w-full rounded-lg border border-input bg-card pl-9 pr-20 text-sm outline-none transition-colors focus:border-ring focus:shadow-glow"
              />
              <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">⌘K</kbd>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <button onClick={toggle} className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground" title="Toggle theme">
              <Sun className="hidden h-4 w-4 dark:block" />
              <Moon className="h-4 w-4 dark:hidden" />
            </button>
            <button className="relative rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-2" />
            </button>
            <div className="hidden items-center gap-2 rounded-md border border-border bg-card px-2 py-1 text-xs md:flex">
              <div className="grid h-6 w-6 place-items-center rounded-full bg-brand-gradient text-[10px] font-bold text-white">AR</div>
              <span className="font-medium">Anika</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>
        </header>

        <div className="border-b border-border bg-card/30 px-4 py-5 md:px-8 md:py-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0">
              <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
              {subtitle && <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>}
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        </div>

        <main className="px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-border bg-card text-card-foreground transition-shadow duration-300 ${className}`}>{children}</div>;
}

export function StatCard({ label, value, hint, Icon, tone = "brand" }: { label: string; value: string; hint?: string; Icon: any; tone?: "brand" | "success" | "warning" | "info" | "teal" | "gold" | "magenta" }) {
  const toneRing: Record<string, string> = {
    brand: "ring-brand/20", success: "ring-success/20", warning: "ring-warning/20", info: "ring-info/20",
    teal: "ring-teal/20", gold: "ring-gold/20", magenta: "ring-magenta/20",
  };
  const toneBg: Record<string, string> = {
    brand: "bg-brand-gradient", success: "bg-success", warning: "bg-warning", info: "bg-info",
    teal: "bg-teal", gold: "bg-gold", magenta: "bg-magenta",
  };
  return (
    <Card className="card-glow animate-rise relative overflow-hidden p-5 shadow-elevated">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-gradient opacity-10 blur-2xl animate-float-slow" />
      <div className="relative flex items-start justify-between">
        <div className="min-w-0">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-2 font-display text-3xl font-bold tracking-tight animate-count">{value}</div>
          {hint && <div className="mt-1 text-xs text-success">{hint}</div>}
        </div>
        <div className={`grid h-10 w-10 place-items-center rounded-lg ${toneBg[tone]} text-white ring-4 ${toneRing[tone]} transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </Card>
  );
}

export function Btn({ children, variant = "primary", className = "", ...p }: any) {
  const v: Record<string, string> = {
    primary: "bg-brand-gradient-animated text-white shadow-glow hover:shadow-glow-magenta hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-card text-foreground border border-border hover:bg-muted hover:border-brand/40",
    ghost: "text-foreground hover:bg-muted",
    outline: "border border-border bg-transparent hover:bg-muted hover:border-brand/40",
  };
  return (
    <button {...p} className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-all duration-200 ${v[variant]} ${className}`}>
      {children}
    </button>
  );
}

export function Pill({ tone = "muted", children }: { tone?: "muted" | "success" | "warning" | "info" | "danger" | "brand"; children: ReactNode }) {
  const map = {
    muted: "bg-muted text-muted-foreground",
    success: "bg-success/15 text-success",
    warning: "bg-warning/20 text-warning-foreground",
    info: "bg-info/15 text-info",
    danger: "bg-destructive/15 text-destructive",
    brand: "bg-accent text-accent-foreground",
  } as const;
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${map[tone]}`}>{children}</span>;
}
