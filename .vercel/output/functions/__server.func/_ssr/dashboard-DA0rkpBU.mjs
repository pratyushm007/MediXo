import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { J as FileStack, U as HardDrive, at as CircleCheck, g as ShieldCheck, i as Users, pt as ArrowUpRight, w as Plus, y as Search } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as StatCard, i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
import { f as searchTrend, i as deptActivity, n as aiUsage, p as uploadTrend, t as activities } from "./mock-data-B0taDMTa.mjs";
import { a as YAxis, d as Pie, f as Cell, h as Legend, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DA0rkpBU.js
var import_jsx_runtime = require_jsx_runtime();
var CHART_COLORS = [
	"var(--chart-1)",
	"var(--chart-2)",
	"var(--chart-3)",
	"var(--chart-4)",
	"var(--chart-5)"
];
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Enterprise command center",
		subtitle: "Live operational view across documents, search, AI, and governance.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
			variant: "secondary",
			children: "Export"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/upload",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Upload"] })
		})] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Documents",
						value: "248,392",
						hint: "+1,204 this week",
						Icon: FileStack,
						tone: "brand"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Processed",
						value: "241,118",
						hint: "97.1% success",
						Icon: CircleCheck,
						tone: "success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active Users",
						value: "1,284",
						hint: "+82 vs last month",
						Icon: Users,
						tone: "teal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Searches Today",
						value: "6,418",
						hint: "+12% DoD",
						Icon: Search,
						tone: "magenta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Compliance Score",
						value: "94 / 100",
						hint: "HIPAA · SOC 2",
						Icon: ShieldCheck,
						tone: "gold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Storage Used",
						value: "4.2 TB",
						hint: "of 10 TB",
						Icon: HardDrive,
						tone: "warning"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 xl:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: "Upload & processing trend"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Documents ingested and processed over the last 14 days."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: "success",
							children: "+18.4%"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: uploadTrend,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "g1",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--chart-1)",
										stopOpacity: .5
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--chart-1)",
										stopOpacity: 0
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "g2",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--chart-3)",
										stopOpacity: .45
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--chart-3)",
										stopOpacity: 0
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--border)",
									strokeDasharray: "3 3",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "day",
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--card)",
									border: "1px solid var(--border)",
									borderRadius: 8
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "uploads",
									stroke: "var(--chart-1)",
									fill: "url(#g1)",
									strokeWidth: 2
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "processed",
									stroke: "var(--chart-3)",
									fill: "url(#g2)",
									strokeWidth: 2
								})
							]
						}) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: "AI assistant usage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Breakdown of intelligence calls."
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: aiUsage,
								dataKey: "value",
								innerRadius: 55,
								outerRadius: 90,
								paddingAngle: 3,
								children: aiUsage.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: CHART_COLORS[i % CHART_COLORS.length] }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "var(--card)",
								border: "1px solid var(--border)",
								borderRadius: 8
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
								iconSize: 8,
								wrapperStyle: { fontSize: 11 }
							})
						] }) })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 xl:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: "Search analytics — last 12 months"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: "info",
							children: "AI search adoption ↑"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: searchTrend,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--border)",
									strokeDasharray: "3 3",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "month",
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "var(--muted-foreground)",
									fontSize: 11
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--card)",
									border: "1px solid var(--border)",
									borderRadius: 8
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "searches",
									fill: "var(--chart-1)",
									radius: [
										6,
										6,
										0,
										0
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "ai",
									fill: "var(--chart-3)",
									radius: [
										6,
										6,
										0,
										0
									]
								})
							]
						}) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold",
							children: "Department activity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Docs & queries this week."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-3",
							children: deptActivity.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: d.dept
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										d.docs,
										" docs · ",
										d.searches,
										" searches"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-1.5 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-brand-gradient",
									style: { width: `${Math.min(100, d.searches / 9)}%` }
								})
							})] }, d.dept))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-4 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold",
						children: "Recent activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Cross-module operational stream"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border",
					children: activities.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-3 text-sm hover:bg-muted/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: a.user
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: a.action
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: a.target
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: "brand",
								children: a.module
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: a.time
							})]
						})]
					}, i))
				})]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
