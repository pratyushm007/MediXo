import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as ShieldCheck, n as X, st as Check, w as Plus } from "../_libs/lucide-react.mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
import { u as roles } from "./mock-data-B0taDMTa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rbac-C7gpOsM5.js
var import_jsx_runtime = require_jsx_runtime();
var PERMS = [
	"View",
	"Edit",
	"Delete",
	"Share",
	"Export",
	"Admin"
];
var MATRIX = {
	HR: [
		true,
		true,
		false,
		true,
		true,
		false
	],
	Finance: [
		true,
		true,
		true,
		true,
		true,
		false
	],
	Legal: [
		true,
		true,
		false,
		true,
		true,
		false
	],
	Executive: [
		true,
		false,
		false,
		true,
		true,
		true
	],
	Clinical: [
		true,
		true,
		false,
		false,
		false,
		false
	]
};
function RbacPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Role-Based Access Control",
		subtitle: "Department-aware roles with fine-grained permissions.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New role"] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-base font-semibold",
						children: r.role
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [r.users, " users"]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-1.5",
					children: r.scope.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
						tone: "brand",
						children: s
					}, s))
				})]
			}, r.role))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "mt-4 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border bg-muted/30 text-[10px] uppercase tracking-widest text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-5 py-3 text-left",
						children: "Role"
					}), PERMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-3 text-center",
						children: p
					}, p))]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: Object.entries(MATRIX).map(([role, perms]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-b-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-5 py-3 font-medium",
						children: role
					}), perms.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-3 py-3 text-center",
						children: v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-grid h-6 w-6 place-items-center rounded-md bg-success/15 text-success",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-grid h-6 w-6 place-items-center rounded-md bg-muted text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
						})
					}, i))]
				}, role)) })]
			})
		})]
	});
}
//#endregion
export { RbacPage as component };
