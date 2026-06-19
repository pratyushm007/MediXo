import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { T as Plug, at as CircleCheck, w as Plus } from "../_libs/lucide-react.mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
import { s as integrations } from "./mock-data-B0taDMTa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/integrations-5S_yMFL5.js
var import_jsx_runtime = require_jsx_runtime();
function IntegrationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Integrations",
		subtitle: "Connect your enterprise systems to bring all knowledge into one governed workspace.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add connector"] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",
			children: integrations.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "group flex flex-col p-5 transition-all hover:shadow-elevated",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plug, { className: "h-5 w-5" })
						}), i.status === "connected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
							tone: "success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1 h-3 w-3" }), " Connected"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "Available" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-base font-semibold",
						children: i.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 flex-1 text-xs text-muted-foreground",
						children: i.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-widest text-muted-foreground",
							children: i.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							variant: i.status === "connected" ? "secondary" : "primary",
							children: i.status === "connected" ? "Manage" : "Connect"
						})]
					})
				]
			}, i.name))
		})
	});
}
//#endregion
export { IntegrationsPage as component };
