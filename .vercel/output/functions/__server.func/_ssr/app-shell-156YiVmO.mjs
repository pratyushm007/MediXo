import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CW7QI888.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as Moon, G as GitCompareArrows, J as FileStack, L as LayoutDashboard, M as Lock, T as Plug, _ as Settings, b as ScrollText, ct as ChartColumn, f as Sun, ft as Bell, g as ShieldCheck, i as Users, j as LogOut, k as Menu, n as X, o as Upload, ot as ChevronDown, r as Workflow, ut as Bot, y as Search } from "../_libs/lucide-react.mjs";
import { n as BrandMark, t as BrandLockup } from "./brand-BrKauLKM.mjs";
import { _ as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-156YiVmO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		group: "Workspace",
		items: [
			{
				to: "/dashboard",
				label: "Dashboard",
				Icon: LayoutDashboard
			},
			{
				to: "/documents",
				label: "Documents",
				Icon: FileStack
			},
			{
				to: "/upload",
				label: "Upload",
				Icon: Upload
			}
		]
	},
	{
		group: "Intelligence",
		items: [
			{
				to: "/search",
				label: "AI Search",
				Icon: Search,
				badge: "NEW"
			},
			{
				to: "/assistant",
				label: "AI Assistant",
				Icon: Bot
			},
			{
				to: "/compare",
				label: "Cross-Doc Analysis",
				Icon: GitCompareArrows
			},
			{
				to: "/analytics",
				label: "Analytics",
				Icon: ChartColumn
			}
		]
	},
	{
		group: "Governance",
		items: [
			{
				to: "/users",
				label: "Users",
				Icon: Users
			},
			{
				to: "/rbac",
				label: "RBAC",
				Icon: ShieldCheck
			},
			{
				to: "/audit",
				label: "Audit Logs",
				Icon: ScrollText
			},
			{
				to: "/security",
				label: "Security Center",
				Icon: Lock
			}
		]
	},
	{
		group: "Platform",
		items: [
			{
				to: "/workflows",
				label: "Workflows",
				Icon: Workflow
			},
			{
				to: "/integrations",
				label: "Integrations",
				Icon: Plug
			},
			{
				to: "/settings",
				label: "Settings",
				Icon: Settings
			}
		]
	}
];
function useTheme() {
	const toggle = () => {
		if (typeof document === "undefined") return;
		document.documentElement.classList.toggle("dark");
	};
	return { toggle };
}
function AppShell({ children, title, subtitle, actions }) {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (r) => r.location.pathname });
	const { toggle } = useTheme();
	const navigate = useNavigate();
	const handleSignOut = async () => {
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-sidebar text-sidebar-foreground lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-16 items-center border-b border-sidebar-border px-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 overflow-y-auto px-3 py-4",
						children: NAV.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
								children: g.group
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-0.5",
								children: g.items.map((i) => {
									const active = pathname.startsWith(i.to);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: i.to,
										className: `group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${active ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.Icon, { className: "h-4 w-4 shrink-0" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 truncate",
												children: i.label
											}),
											i.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-auto rounded-md bg-brand-gradient px-1.5 py-0.5 text-[9px] font-bold text-white",
												children: i.badge
											})
										]
									}) }, i.to);
								})
							})]
						}, g.group))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-sidebar-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-lg bg-sidebar-accent p-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white",
									children: "AR"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-xs font-semibold",
										children: "Dr. Anika Rao"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-[10px] text-muted-foreground",
										children: "Admin · Healthcare"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleSignOut,
									className: "rounded-md p-1.5 text-muted-foreground hover:bg-background hover:text-foreground",
									title: "Sign out",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
								})
							]
						})
					})
				]
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-foreground/40 backdrop-blur-sm",
					onClick: () => setMobileOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "absolute inset-y-0 left-0 flex w-72 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-16 items-center justify-between border-b border-sidebar-border px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileOpen(false),
							className: "rounded-md p-2 hover:bg-sidebar-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 overflow-y-auto px-3 py-4",
						children: NAV.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
								children: g.group
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-0.5",
								children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: i.to,
									onClick: () => setMobileOpen(false),
									className: `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${pathname.startsWith(i.to) ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.Icon, { className: "h-4 w-4" }),
										" ",
										i.label
									]
								}) }, i.to))
							})]
						}, g.group))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-64",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMobileOpen(true),
								className: "rounded-md p-2 hover:bg-muted lg:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { size: 28 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden flex-1 md:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative max-w-xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											placeholder: "Search documents, people, queries…",
											className: "h-9 w-full rounded-lg border border-input bg-card pl-9 pr-20 text-sm outline-none transition-colors focus:border-ring focus:shadow-glow"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
											className: "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground",
											children: "⌘K"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ml-auto flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: toggle,
										className: "rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground",
										title: "Toggle theme",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "hidden h-4 w-4 dark:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4 dark:hidden" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "relative rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-2" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden items-center gap-2 rounded-md border border-border bg-card px-2 py-1 text-xs md:flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-6 w-6 place-items-center rounded-full bg-brand-gradient text-[10px] font-bold text-white",
												children: "AR"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: "Anika"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 text-muted-foreground" })
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-border bg-card/30 px-4 py-5 md:px-8 md:py-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
									children: title
								}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-2xl text-sm text-muted-foreground",
									children: subtitle
								})]
							}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: actions
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "px-4 py-6 md:px-8 md:py-8",
						children
					})
				]
			})
		]
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-xl border border-border bg-card text-card-foreground transition-shadow duration-300 ${className}`,
		children
	});
}
function StatCard({ label, value, hint, Icon, tone = "brand" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "card-glow animate-rise relative overflow-hidden p-5 shadow-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-gradient opacity-10 blur-2xl animate-float-slow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 font-display text-3xl font-bold tracking-tight animate-count",
						children: value
					}),
					hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs text-success",
						children: hint
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid h-10 w-10 place-items-center rounded-lg ${{
					brand: "bg-brand-gradient",
					success: "bg-success",
					warning: "bg-warning",
					info: "bg-info",
					teal: "bg-teal",
					gold: "bg-gold",
					magenta: "bg-magenta"
				}[tone]} text-white ring-4 ${{
					brand: "ring-brand/20",
					success: "ring-success/20",
					warning: "ring-warning/20",
					info: "ring-info/20",
					teal: "ring-teal/20",
					gold: "ring-gold/20",
					magenta: "ring-magenta/20"
				}[tone]} transition-transform duration-300 hover:scale-110 hover:rotate-6`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			})]
		})]
	});
}
function Btn({ children, variant = "primary", className = "", ...p }) {
	const v = {
		primary: "bg-brand-gradient-animated text-white shadow-glow hover:shadow-glow-magenta hover:scale-[1.02] active:scale-[0.98]",
		secondary: "bg-card text-foreground border border-border hover:bg-muted hover:border-brand/40",
		ghost: "text-foreground hover:bg-muted",
		outline: "border border-border bg-transparent hover:bg-muted hover:border-brand/40"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		...p,
		className: `inline-flex h-9 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-all duration-200 ${v[variant]} ${className}`,
		children
	});
}
function Pill({ tone = "muted", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${{
			muted: "bg-muted text-muted-foreground",
			success: "bg-success/15 text-success",
			warning: "bg-warning/20 text-warning-foreground",
			info: "bg-info/15 text-info",
			danger: "bg-destructive/15 text-destructive",
			brand: "bg-accent text-accent-foreground"
		}[tone]}`,
		children
	});
}
//#endregion
export { StatCard as a, Pill as i, Btn as n, Card as r, AppShell as t };
