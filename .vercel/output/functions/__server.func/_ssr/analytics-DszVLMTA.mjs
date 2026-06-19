import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _t as Activity, g as ShieldCheck, l as TrendingUp, nt as DollarSign } from "../_libs/lucide-react.mjs";
import { a as StatCard, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
import { f as searchTrend, i as deptActivity, n as aiUsage, p as uploadTrend } from "./mock-data-B0taDMTa.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, h as Legend, i as LineChart, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-DszVLMTA.js
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"var(--chart-1)",
	"var(--chart-2)",
	"var(--chart-3)",
	"var(--chart-4)",
	"var(--chart-5)"
];
function Analytics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Executive Analytics",
		subtitle: "Productivity, compliance, and value tracking across the workspace.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Productivity Gain",
						value: "+34%",
						hint: "vs baseline",
						Icon: TrendingUp,
						tone: "success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Cost Reduction",
						value: "$1.82M",
						hint: "annualized",
						Icon: DollarSign,
						tone: "brand"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Compliance Score",
						value: "94/100",
						hint: "HIPAA · SOC 2",
						Icon: ShieldCheck,
						tone: "info"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Avg Query Time",
						value: "1.2s",
						hint: "-71% YoY",
						Icon: Activity,
						tone: "warning"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold",
						children: "Search volume trend"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: { fontSize: 11 } }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "searches",
									stroke: "var(--chart-1)",
									strokeWidth: 2,
									dot: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "ai",
									stroke: "var(--chart-3)",
									strokeWidth: 2,
									dot: false
								})
							]
						}) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold",
						children: "Department activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: deptActivity,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--border)",
									strokeDasharray: "3 3",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "dept",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: { fontSize: 11 } }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "docs",
									fill: "var(--chart-1)",
									radius: [
										6,
										6,
										0,
										0
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "searches",
									fill: "var(--chart-2)",
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
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 xl:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold",
						children: "Upload throughput"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: uploadTrend,
							children: [
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									dataKey: "uploads",
									stroke: "var(--chart-1)",
									strokeWidth: 2,
									dot: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									dataKey: "processed",
									stroke: "var(--chart-3)",
									strokeWidth: 2,
									dot: false
								})
							]
						}) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold",
						children: "AI workload mix"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: aiUsage,
								dataKey: "value",
								innerRadius: 50,
								outerRadius: 85,
								paddingAngle: 3,
								children: aiUsage.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: COLORS[i % COLORS.length] }, i))
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
			})
		]
	});
}
//#endregion
export { Analytics as component };
