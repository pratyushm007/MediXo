import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { at as CircleCheck, d as Tags, mt as ArrowRight, o as Upload, r as Workflow, rt as Database, w as Plus, x as ScanText, y as Search } from "../_libs/lucide-react.mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workflows-DKIqJ4wx.js
var import_jsx_runtime = require_jsx_runtime();
var NODES = [
	{
		t: "Upload",
		d: "From SharePoint, S3, ERP",
		Icon: Upload
	},
	{
		t: "OCR",
		d: "Layout-aware extraction",
		Icon: ScanText
	},
	{
		t: "Classify",
		d: "Department + type",
		Icon: Tags
	},
	{
		t: "Extract Metadata",
		d: "NER + relations",
		Icon: Database
	},
	{
		t: "Validate",
		d: "Schema + business rules",
		Icon: CircleCheck
	},
	{
		t: "Store",
		d: "Vector + relational",
		Icon: Database
	},
	{
		t: "Index",
		d: "Semantic + keyword",
		Icon: Search
	}
];
function WorkflowsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Workflow Automation",
		subtitle: "Compose, monitor, and audit pipelines that orchestrate your knowledge.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New workflow"] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 xl:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Pipeline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: "Healthcare Document Intake v3"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: "success",
							children: "Active"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7",
						children: NODES.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-4 shadow-elevated",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.Icon, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
										children: ["Step ", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-sm font-semibold",
										children: n.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-muted-foreground",
										children: n.d
									})
								]
							}), i < NODES.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 items-center justify-center bg-gradient-to-r from-brand to-brand-3 xl:flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-brand-3" })
							})]
						}, n.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-3",
						children: [
							["Last run", "2m ago"],
							["Avg duration", "18.4s / doc"],
							["Success rate", "99.2%"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-muted/30 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-lg font-semibold",
								children: v
							})]
						}, k))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold",
						children: "Node palette"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Drag onto the canvas to compose."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-2",
						children: [
							Upload,
							ScanText,
							Tags,
							Database,
							CircleCheck,
							Search,
							Workflow
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex items-center gap-2 rounded-lg border border-border bg-card p-2.5 text-xs hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-7 w-7 place-items-center rounded-md bg-accent text-accent-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: [
									"Upload",
									"OCR",
									"Classify",
									"Store",
									"Validate",
									"Index",
									"Custom"
								][i]
							})]
						}, i))
					})
				]
			})]
		})
	});
}
//#endregion
export { WorkflowsPage as component };
