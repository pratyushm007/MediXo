import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CW7QI888.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as Mail, M as Lock, N as LoaderCircle, Q as EyeOff, Z as Eye, h as Sparkles, mt as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as BrandLockup } from "./brand-BrKauLKM.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Djo4Hz5x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		redirect_uri: opts?.redirect_uri,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
function AuthPage() {
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [show, setShow] = (0, import_react.useState)(false);
	const [remember, setRemember] = (0, import_react.useState)(true);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			if (mode === "signin") {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
			} else {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: { emailRedirectTo: `${window.location.origin}/dashboard` }
				});
				if (error) throw error;
			}
			navigate({ to: "/dashboard" });
		} catch (e) {
			setError(e.message ?? "Authentication failed");
		} finally {
			setLoading(false);
		}
	};
	const google = async () => {
		setLoading(true);
		setError(null);
		const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/dashboard" });
		if (r.error) {
			setError(r.error.message);
			setLoading(false);
			return;
		}
		if (r.redirected) return;
		navigate({ to: "/dashboard" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-screen lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col bg-background p-6 md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl font-bold tracking-tight",
							children: mode === "signin" ? "Welcome back" : "Create your workspace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: mode === "signin" ? "Sign in to your Medixo KnowledgeHub workspace." : "Start a 14-day enterprise trial. No credit card required."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: google,
							disabled: loading,
							className: "mt-7 inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleIcon, {}), " Continue with Google"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-5 flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
								" or with email ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium",
										children: "Work email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "email",
											autoComplete: "email",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											placeholder: "you@company.com",
											className: "h-11 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm outline-none focus:border-ring focus:shadow-glow"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mt-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: show ? "text" : "password",
												autoComplete: mode === "signin" ? "current-password" : "new-password",
												value: password,
												onChange: (e) => setPassword(e.target.value),
												placeholder: "••••••••",
												className: "h-11 w-full rounded-lg border border-input bg-card pl-9 pr-10 text-sm outline-none focus:border-ring focus:shadow-glow"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setShow((s) => !s),
												className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground hover:bg-muted",
												children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
											})
										]
									})]
								}),
								mode === "signin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: remember,
											onChange: (e) => setRemember(e.target.checked),
											className: "h-4 w-4 rounded border-input accent-[var(--brand)]"
										}), "Remember me"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "font-medium text-brand hover:underline",
										children: "Forgot password?"
									})]
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive",
									children: error
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading,
									className: "inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-gradient text-sm font-semibold text-white shadow-glow disabled:opacity-60",
									children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										mode === "signin" ? "Sign in" : "Create workspace",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									] })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-center text-xs text-muted-foreground",
							children: [
								mode === "signin" ? "New to Medixo?" : "Already have an account?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
									className: "font-semibold text-brand hover:underline",
									children: mode === "signin" ? "Create an account" : "Sign in"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "SSO · MFA · HIPAA · SOC 2"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-[11px] text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Medixo HealthAI Systems Pvt Ltd"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative hidden overflow-hidden bg-sidebar text-sidebar-foreground lg:flex lg:flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-1 flex-col justify-between p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex w-fit items-center gap-2 rounded-full border border-sidebar-border bg-sidebar-accent px-3 py-1 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-brand" }), " Enterprise AI · Built for regulated industries"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-md font-display text-4xl font-bold leading-tight",
							children: "\"Medixo replaced 6 different document tools and gave us instant audit-grade answers.\""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white",
								children: "SA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold",
								children: "Sofia Alvarez"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "VP Compliance · Tier-1 Insurer"
							})] })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-3 text-center text-xs",
							children: [
								["10M+", "Docs"],
								["99.99%", "Uptime"],
								["SOC 2", "Type II"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-sidebar-border bg-sidebar-accent/60 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg font-bold text-brand-gradient",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: v
								})]
							}, v))
						})
					]
				})
			]
		})]
	});
}
function GoogleIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "h-4 w-4",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#EA4335",
			d: "M12 10.2v3.96h5.52c-.24 1.44-1.68 4.2-5.52 4.2-3.32 0-6.04-2.76-6.04-6.16S8.68 6.04 12 6.04c1.88 0 3.16.8 3.88 1.48l2.64-2.52C16.92 3.4 14.68 2.4 12 2.4 6.72 2.4 2.4 6.72 2.4 12s4.32 9.6 9.6 9.6c5.52 0 9.2-3.88 9.2-9.36 0-.64-.08-1.12-.16-1.6L12 10.2z"
		})
	});
}
//#endregion
export { AuthPage as component };
