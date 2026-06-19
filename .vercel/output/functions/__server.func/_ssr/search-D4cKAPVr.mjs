import { i as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { $ as ExternalLink, H as History, dt as Bookmark, h as Sparkles, m as Star, q as FileText, y as Search } from "../_libs/lucide-react.mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
import { c as mockDocs, d as savedQueries, l as recentSearches } from "./mock-data-B0taDMTa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-D4cKAPVr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EXAMPLES = [
	"Summarize all policy documents related to pharmacovigilance",
	"Show all contracts expiring this year",
	"Compare SOP versions for adverse event reporting",
	"List HIPAA findings rated High in 2026"
];
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const results = mockDocs.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "AI Search",
		subtitle: "Ask anything across your enterprise knowledge base. Grounded answers with citations.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[260px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-3.5 w-3.5" }), " Recent"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: recentSearches.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setQ(s);
								setSubmitted(s);
							},
							className: "block w-full truncate rounded-md px-2 py-1.5 text-left text-xs hover:bg-muted",
							children: s
						}) }, s))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5" }), " Saved"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: savedQueries.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setQ(s);
								setSubmitted(s);
							},
							className: "block w-full truncate rounded-md px-2 py-1.5 text-left text-xs hover:bg-muted",
							children: s
						}) }, s))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSubmitted(q);
						},
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								autoFocus: true,
								placeholder: "Ask the knowledge base anything…",
								className: "h-14 w-full rounded-xl border border-input bg-card pl-12 pr-32 text-base font-medium outline-none focus:border-ring focus:shadow-glow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "absolute right-2 top-1/2 inline-flex h-10 -translate-y-1/2 items-center gap-1.5 rounded-lg bg-brand-gradient px-4 text-sm font-semibold text-white shadow-glow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), " Ask AI"]
							})
						]
					}), !submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Try"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: EXAMPLES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setQ(e);
								setSubmitted(e);
							},
							className: "rounded-full border border-border bg-card px-3 py-1.5 text-xs hover:bg-muted",
							children: e
						}, e))
					})] })]
				}), submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "mt-4 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border bg-gradient-to-br from-accent/40 to-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-semibold text-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), " AI Answer"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confidence" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
											tone: "success",
											children: "92%"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm leading-relaxed",
									children: [
										"Across ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [results.length, " relevant documents"] }),
										", Medixo identified consistent revisions strengthening adverse-event reporting timelines from 30 → 15 → 7 days. The latest ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Pharmacovigilance SOP 2026" }),
										" aligns with EMA/FDA guidance and incorporates real-time signal detection. Two contracts reference older timelines and should be reviewed."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2 text-[11px]",
									children: [
										"Pharmacovigilance SOP 2026 · p.12",
										"AE Reporting v3 · p.4",
										"CT-441 Phase II · p.31"
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md border border-border bg-card px-2 py-1 text-muted-foreground",
										children: s
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
										variant: "secondary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4" }), " Save"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
										variant: "ghost",
										children: "Refine query"
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Related documents"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-3 md:grid-cols-2",
						children: results.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-semibold",
												children: d.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1 text-xs text-muted-foreground",
												children: [
													d.department,
													" · ",
													d.pages,
													" pages · matched 3 passages"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
													tone: "success",
													children: [Math.round(d.confidence * 100), "% match"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: d.category })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
									})
								]
							})
						}, d.id))
					})
				] })]
			})]
		})
	});
}
//#endregion
export { SearchPage as component };
