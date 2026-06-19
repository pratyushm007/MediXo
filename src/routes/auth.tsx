import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { BrandLockup } from "@/components/brand";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Sparkles, Loader2 } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign in · Medixo KnowledgeHub" }, { name: "description", content: "Access the Medixo KnowledgeHub enterprise workspace." }] }),
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: `${window.location.origin}/dashboard` },
        });
        if (error) throw error;
      }
      navigate({ to: "/dashboard" });
    } catch (e: any) {
      setError(e.message ?? "Authentication failed");
    } finally { setLoading(false); }
  };

  const google = async () => {
    setLoading(true); setError(null);
    const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/dashboard" });
    if (r.error) { setError((r.error as Error).message); setLoading(false); return; }
    if (r.redirected) return;
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Form */}
      <div className="flex flex-col bg-background p-6 md:p-10">
        <Link to="/"><BrandLockup /></Link>
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          <h1 className="font-display text-3xl font-bold tracking-tight">{mode === "signin" ? "Welcome back" : "Create your workspace"}</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">{mode === "signin" ? "Sign in to your Medixo KnowledgeHub workspace." : "Start a 14-day enterprise trial. No credit card required."}</p>

          <button onClick={google} disabled={loading} className="mt-7 inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted disabled:opacity-60">
            <GoogleIcon /> Continue with Google
          </button>

          <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> or with email <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={submit} className="space-y-3">
            <label className="block">
              <span className="text-xs font-medium">Work email</span>
              <div className="relative mt-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm outline-none focus:border-ring focus:shadow-glow" />
              </div>
            </label>
            <label className="block">
              <span className="text-xs font-medium">Password</span>
              <div className="relative mt-1">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input required type={show ? "text" : "password"} autoComplete={mode === "signin" ? "current-password" : "new-password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-lg border border-input bg-card pl-9 pr-10 text-sm outline-none focus:border-ring focus:shadow-glow" />
                <button type="button" onClick={() => setShow(s => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground hover:bg-muted">
                  {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </label>

            {mode === "signin" && (
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 rounded border-input accent-[var(--brand)]" />
                  Remember me
                </label>
                <a href="#" className="font-medium text-brand hover:underline">Forgot password?</a>
              </div>
            )}

            {error && <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">{error}</div>}

            <button type="submit" disabled={loading} className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-gradient text-sm font-semibold text-white shadow-glow disabled:opacity-60">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>{mode === "signin" ? "Sign in" : "Create workspace"} <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            {mode === "signin" ? "New to Medixo?" : "Already have an account?"}{" "}
            <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="font-semibold text-brand hover:underline">
              {mode === "signin" ? "Create an account" : "Sign in"}
            </button>
          </p>
          <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-muted-foreground">SSO · MFA · HIPAA · SOC 2</p>
        </div>
        <p className="text-center text-[11px] text-muted-foreground">© {new Date().getFullYear()} Medixo HealthAI Systems Pvt Ltd</p>
      </div>

      {/* Marketing pane */}
      <div className="relative hidden overflow-hidden bg-sidebar text-sidebar-foreground lg:flex lg:flex-col">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-glow opacity-80" />
        <div className="relative flex flex-1 flex-col justify-between p-12">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-sidebar-border bg-sidebar-accent px-3 py-1 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-brand" /> Enterprise AI · Built for regulated industries
          </div>
          <div>
            <h2 className="max-w-md font-display text-4xl font-bold leading-tight">"Medixo replaced 6 different document tools and gave us instant audit-grade answers."</h2>
            <div className="mt-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">SA</div>
              <div>
                <div className="text-sm font-semibold">Sofia Alvarez</div>
                <div className="text-xs text-muted-foreground">VP Compliance · Tier-1 Insurer</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            {[["10M+","Docs"],["99.99%","Uptime"],["SOC 2","Type II"]].map(([k,v]) => (
              <div key={v} className="rounded-xl border border-sidebar-border bg-sidebar-accent/60 p-3">
                <div className="font-display text-lg font-bold text-brand-gradient">{k}</div>
                <div className="text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path fill="#EA4335" d="M12 10.2v3.96h5.52c-.24 1.44-1.68 4.2-5.52 4.2-3.32 0-6.04-2.76-6.04-6.16S8.68 6.04 12 6.04c1.88 0 3.16.8 3.88 1.48l2.64-2.52C16.92 3.4 14.68 2.4 12 2.4 6.72 2.4 2.4 6.72 2.4 12s4.32 9.6 9.6 9.6c5.52 0 9.2-3.88 9.2-9.36 0-.64-.08-1.12-.16-1.6L12 10.2z"/>
    </svg>
  );
}
