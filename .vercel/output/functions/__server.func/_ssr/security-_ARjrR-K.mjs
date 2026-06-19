import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as KeyRound, M as Lock, _t as Activity, c as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as StatCard, i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/security-_ARjrR-K.js
var import_jsx_runtime = require_jsx_runtime();
function SecurityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Security Center",
		subtitle: "Posture, sessions, encryption, and compliance posture in one place.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "MFA Coverage",
					value: "98%",
					hint: "2 users pending",
					Icon: KeyRound,
					tone: "success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Active Sessions",
					value: "412",
					hint: "36 admins",
					Icon: Activity,
					tone: "info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Security Alerts",
					value: "3 open",
					hint: "1 critical",
					Icon: TriangleAlert,
					tone: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Encryption",
					value: "AES-256",
					hint: "At rest & in transit",
					Icon: Lock,
					tone: "brand"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-semibold",
					children: "Compliance health"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3 text-sm",
					children: [
						[
							"HIPAA",
							98,
							"success"
						],
						[
							"SOC 2 Type II",
							95,
							"success"
						],
						[
							"ISO 27001",
							91,
							"info"
						],
						[
							"GDPR",
							88,
							"warning"
						]
					].map(([k, v, tone]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
							tone,
							children: [v, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 h-1.5 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-brand-gradient",
							style: { width: `${v}%` }
						})
					})] }, k))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-semibold",
					children: "Open security alerts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3 text-sm",
					children: [
						{
							sev: "Critical",
							t: "Unusual export pattern detected for finance@medixo.io"
						},
						{
							sev: "High",
							t: "MFA disabled for 2 service accounts"
						},
						{
							sev: "Medium",
							t: "Stale API token unused for 90 days"
						}
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-border bg-card p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: a.sev === "Critical" ? "danger" : a.sev === "High" ? "warning" : "info",
								children: a.sev
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.t })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								variant: "secondary",
								children: "Investigate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								variant: "ghost",
								children: "Dismiss"
							})]
						})]
					}, a.t))
				})]
			})]
		})]
	});
}
//#endregion
export { SecurityPage as component };
