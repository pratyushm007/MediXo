import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as Pencil, et as Ellipsis, u as Trash2, w as Plus, y as Search } from "../_libs/lucide-react.mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
import { m as users } from "./mock-data-B0taDMTa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-7vjX-7hU.js
var import_jsx_runtime = require_jsx_runtime();
function UsersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "User Management",
		subtitle: "Provision, deactivate, and audit workspace members.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add user"] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					placeholder: "Search users…",
					className: "h-10 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm outline-none focus:border-ring"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden grid-cols-[1.4fr_1fr_0.8fr_1fr_0.8fr_auto] gap-4 border-b border-border bg-muted/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Name" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Role" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Department" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
				]
			}), users.map((u, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 items-center gap-2 border-b border-border px-5 py-3 last:border-b-0 md:grid-cols-[1.4fr_1fr_0.8fr_1fr_0.8fr_auto] md:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white",
							children: u.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: u.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground md:text-foreground",
						children: u.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
						tone: "brand",
						children: u.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm",
						children: u.dept
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: u.status === "Active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
						tone: "success",
						children: "Active"
					}) : u.status === "Invited" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
						tone: "info",
						children: "Invited"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
						tone: "danger",
						children: "Suspended"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md p-1.5 hover:bg-muted text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md p-1.5 hover:bg-destructive/10 text-destructive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md p-1.5 hover:bg-muted text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
							})
						]
					})
				]
			}, i))]
		})]
	});
}
//#endregion
export { UsersPage as component };
