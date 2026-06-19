import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { K as Funnel, tt as Download, y as Search } from "../_libs/lucide-react.mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
import { r as auditLogs } from "./mock-data-B0taDMTa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-CWx_GF-P.js
var import_jsx_runtime = require_jsx_runtime();
function AuditPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Audit Logs",
		subtitle: "Immutable, queryable record of every action across the platform.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
			variant: "secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" }), " Filters"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export"] })] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					placeholder: "Search events, users, IP…",
					className: "h-10 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm outline-none focus:border-ring"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr] gap-4 border-b border-border bg-muted/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "User" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Action" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Module" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Time" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IP Address" })
				]
			}), auditLogs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-1.5 border-b border-border px-5 py-3 text-sm last:border-b-0 hover:bg-muted/30 md:grid-cols-[1.2fr_1fr_0.8fr_1fr_1fr] md:items-center md:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: l.user
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
						tone: l.action.includes("DELETE") ? "danger" : l.action.includes("LOGIN") ? "info" : "brand",
						children: l.action
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: l.module
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: new Date(l.time).toLocaleString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs",
						children: l.ip
					})
				]
			}, l.id))]
		})]
	});
}
//#endregion
export { AuditPage as component };
