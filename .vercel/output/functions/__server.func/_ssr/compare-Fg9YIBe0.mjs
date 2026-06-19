import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { G as GitCompareArrows, at as CircleCheck, c as TriangleAlert, gt as ArrowLeftRight, q as FileText, w as Plus } from "../_libs/lucide-react.mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-Fg9YIBe0.js
var import_jsx_runtime = require_jsx_runtime();
var DIFFS = [
	{
		type: "added",
		text: "Real-time signal detection via internal PV dashboard."
	},
	{
		type: "removed",
		text: "Quarterly retrospective signal review."
	},
	{
		type: "changed",
		text: "Reporting window 15 days → 7 days for serious AEs."
	},
	{
		type: "changed",
		text: "Safety Review Board now meets weekly (was monthly)."
	}
];
function ComparePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Cross-Document Analysis",
		subtitle: "Diff, similarity, and missing-information detection across document versions.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New comparison"] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground",
									children: "Document A"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: "Pharmacovigilance SOP v3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "2024 · 42 pages"
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "p-5 ring-1 ring-brand/30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid place-items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-white shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-xs font-semibold uppercase tracking-widest text-brand",
								children: "Comparing"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-brand-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground",
									children: "Document B"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: "Pharmacovigilance SOP v4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "2026 · 51 pages"
								})
							] })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-3",
				children: [
					{
						k: "84%",
						v: "Similarity",
						tone: "success"
					},
					{
						k: "37",
						v: "Differences detected",
						tone: "warning"
					},
					{
						k: "6",
						v: "Missing sections in A",
						tone: "danger"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: s.v
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-display text-3xl font-bold",
							children: s.k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: s.tone,
							children: "vs prior version"
						})
					]
				}, s.v))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-4 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-semibold",
					children: "Differences"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: DIFFS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 rounded-lg border border-border bg-card p-3",
						children: [
							d.type === "added" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }),
							d.type === "removed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-destructive" }),
							d.type === "changed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompareArrows, { className: "mt-0.5 h-4 w-4 shrink-0 text-info" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
									children: d.type
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: d.text })]
							})
						]
					}, i))
				})]
			})
		]
	});
}
//#endregion
export { ComparePage as component };
