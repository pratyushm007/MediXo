import { i as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CR7KuQDv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	"General",
	"Security",
	"Notifications",
	"Integrations",
	"Storage",
	"AI Settings"
];
function SettingsPage() {
	const [tab, setTab] = (0, import_react.useState)("General");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Workspace Settings",
		subtitle: "Configure how your enterprise workspace behaves.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1 border-b border-border bg-muted/30 p-1.5",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `rounded-md px-3 py-1.5 text-xs font-medium ${tab === t ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
					children: t
				}, t))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					tab === "General" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Workspace identity",
						desc: "How your workspace appears across the platform.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Workspace name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "h-10 w-full rounded-lg border border-input bg-card px-3 text-sm",
									defaultValue: "Medixo HealthAI"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Primary contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "h-10 w-full rounded-lg border border-input bg-card px-3 text-sm",
									defaultValue: "admin@medixo.io"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Default language",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "h-10 w-full rounded-lg border border-input bg-card px-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "English (US)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "English (UK)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Deutsch" })
									]
								})
							})
						]
					}),
					tab === "Security" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Security & compliance",
						desc: "Enforce MFA, SSO, and password policies.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Enforce MFA for all users",
								defaultChecked: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Require SSO for /admin routes",
								defaultChecked: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, { label: "Auto-rotate API tokens (90 days)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Block password reuse",
								defaultChecked: true
							})
						]
					}),
					tab === "Notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Notification preferences",
						desc: "Choose what you receive and where.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Email: weekly compliance digest",
								defaultChecked: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Email: security alerts",
								defaultChecked: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "In-app: workflow failures",
								defaultChecked: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, { label: "Slack: high-severity events" })
						]
					}),
					tab === "Integrations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Integrations",
						desc: "Manage connected systems.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Go to the Integrations page for connector management."
						})
					}),
					tab === "Storage" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Storage",
						desc: "Total: 10 TB · Used: 4.2 TB",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-brand-gradient",
								style: { width: "42%" }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs text-muted-foreground",
							children: "Tier: Enterprise · Region: US-East / EU-West"
						})]
					}),
					tab === "AI Settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "AI behavior",
						desc: "Tune retrieval, models, and grounding.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Primary model",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "h-10 w-full rounded-lg border border-input bg-card px-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Gemini 2.5 Pro (Default)" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "GPT-5.4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Claude Sonnet 4.5" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Retrieval depth",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 1,
									max: 20,
									defaultValue: 8,
									className: "w-full accent-[var(--brand)]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Require citations on every answer",
								defaultChecked: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, { label: "Block answers below 60% confidence" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							variant: "ghost",
							children: "Reset"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, { children: "Save changes" })]
					})
				]
			})]
		})
	});
}
function Section({ title, desc, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-lg font-semibold",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: desc
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 space-y-3",
			children
		})
	] });
}
function Row({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid items-center gap-2 sm:grid-cols-[200px_1fr] sm:gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold text-muted-foreground",
			children: label
		}), children]
	});
}
function Toggle({ label, defaultChecked }) {
	const [on, setOn] = (0, import_react.useState)(!!defaultChecked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setOn((o) => !o),
			className: `relative h-6 w-11 rounded-full transition-colors ${on ? "bg-brand-gradient" : "bg-muted"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-5" : "left-0.5"}` })
		})]
	});
}
//#endregion
export { SettingsPage as component };
