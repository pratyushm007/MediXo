import { i as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Presentation, E as Pencil, I as LayoutGrid, K as Funnel, P as List, V as Image, Y as FileSpreadsheet, Z as Eye, et as Ellipsis, q as FileText, tt as Download, u as Trash2, w as Plus, y as Search } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
import { c as mockDocs } from "./mock-data-B0taDMTa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents-4OdtjGa1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TYPE_ICON = {
	PDF: FileText,
	DOCX: FileText,
	XLSX: FileSpreadsheet,
	PPT: Presentation,
	IMG: Image
};
function statusPill(s) {
	return s === "processed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
		tone: "success",
		children: "Processed"
	}) : s === "processing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
		tone: "info",
		children: "Processing"
	}) : s === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
		tone: "warning",
		children: "Pending"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
		tone: "danger",
		children: "Failed"
	});
}
function DocumentsPage() {
	const [view, setView] = (0, import_react.useState)("grid");
	const [q, setQ] = (0, import_react.useState)("");
	const [dept, setDept] = (0, import_react.useState)("All");
	const [status, setStatus] = (0, import_react.useState)("All");
	const [page, setPage] = (0, import_react.useState)(1);
	const pageSize = 9;
	const depts = (0, import_react.useMemo)(() => ["All", ...Array.from(new Set(mockDocs.map((d) => d.department)))], []);
	const statuses = [
		"All",
		"processed",
		"processing",
		"pending",
		"failed"
	];
	const filtered = mockDocs.filter((d) => (dept === "All" || d.department === dept) && (status === "All" || d.status === status) && (q === "" || d.name.toLowerCase().includes(q.toLowerCase())));
	const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const view_items = filtered.slice((page - 1) * pageSize, page * pageSize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Document Library",
		subtitle: `${filtered.length.toLocaleString()} documents · Cross-departmental view`,
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
			variant: "secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" }), " Advanced"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/upload",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Upload"] })
		})] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => {
									setQ(e.target.value);
									setPage(1);
								},
								placeholder: "Search by name, tag, owner…",
								className: "h-10 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm outline-none focus:border-ring"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: dept,
							onChange: (v) => {
								setDept(v);
								setPage(1);
							},
							options: depts
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: status,
							onChange: (v) => {
								setStatus(v);
								setPage(1);
							},
							options: statuses
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex overflow-hidden rounded-lg border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setView("grid"),
								className: `grid h-10 w-10 place-items-center ${view === "grid" ? "bg-muted text-foreground" : "text-muted-foreground"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setView("list"),
								className: `grid h-10 w-10 place-items-center border-l border-border ${view === "list" ? "bg-muted text-foreground" : "text-muted-foreground"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" })
							})]
						})
					]
				})
			}),
			view === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: view_items.map((d) => {
					const Icon = TYPE_ICON[d.type];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "group p-5 transition-all hover:shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
											children: [
												d.type,
												" · ",
												d.size
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 line-clamp-2 text-sm font-semibold",
											children: d.name
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rounded-md p-1.5 text-muted-foreground opacity-0 transition group-hover:opacity-100 hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap items-center gap-2 text-[11px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
										tone: "brand",
										children: d.department
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: d.category }),
									statusPill(d.status)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["By ", d.uploadedBy] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(d.uploadedAt).toLocaleDateString() })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-1.5 border-t border-border pt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " View"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), " Edit"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 text-xs hover:bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "inline-flex items-center justify-center rounded-md p-1.5 text-destructive hover:bg-destructive/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
									})
								]
							})
						]
					}, d.id);
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-4 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[1.5fr_1fr_1fr_1fr_auto] items-center gap-4 border-b border-border bg-muted/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Name" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Department" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Uploaded" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					]
				}), view_items.map((d) => {
					const Icon = TYPE_ICON[d.type];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[1.5fr_1fr_1fr_1fr_auto] items-center gap-4 border-b border-border px-5 py-3 text-sm last:border-b-0 hover:bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate font-medium",
										children: d.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											d.type,
											" · ",
											d.size
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: "brand",
								children: d.department
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: statusPill(d.status) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: new Date(d.uploadedAt).toLocaleDateString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
							})
						]
					}, d.id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Page ",
					page,
					" of ",
					pages
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: page <= 1,
						onClick: () => setPage((p) => p - 1),
						className: "rounded-md border border-border px-3 py-1.5 disabled:opacity-40 hover:bg-muted",
						children: "Prev"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: page >= pages,
						onClick: () => setPage((p) => p + 1),
						className: "rounded-md border border-border px-3 py-1.5 disabled:opacity-40 hover:bg-muted",
						children: "Next"
					})]
				})]
			})
		]
	});
}
function Select({ value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "h-10 rounded-lg border border-input bg-card px-3 text-sm outline-none focus:border-ring",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: o,
			children: o[0].toUpperCase() + o.slice(1)
		}, o))
	});
}
//#endregion
export { DocumentsPage as component };
