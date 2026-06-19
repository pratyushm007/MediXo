import { i as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { O as MessageSquare, a as User, h as Sparkles, q as FileText, ut as Bot, v as Send, w as Plus } from "../_libs/lucide-react.mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assistant-CuPY_t6w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEED = [{
	role: "user",
	content: "What changed between SOP v3 and v4 for adverse event reporting?"
}, {
	role: "ai",
	content: "Key changes from v3 → v4: (1) Reporting window tightened from 15 to 7 days for serious AEs; (2) Mandatory CIOMS form attachment; (3) New section on real-time signal detection using internal pharmacovigilance dashboards; (4) Updated escalation matrix referencing the new Safety Review Board.",
	sources: [
		{
			name: "Pharmacovigilance SOP v3",
			page: 9
		},
		{
			name: "Pharmacovigilance SOP v4",
			page: 11
		},
		{
			name: "Safety Review Board Charter",
			page: 2
		}
	]
}];
var PROMPTS = [
	"Summarize the latest board pack",
	"Which vendor contracts expire in Q1?",
	"List HIPAA audit findings rated High",
	"Compare invoices > $50k across vendors"
];
function AssistantPage() {
	const [msgs, setMsgs] = (0, import_react.useState)(SEED);
	const [text, setText] = (0, import_react.useState)("");
	const [thinking, setThinking] = (0, import_react.useState)(false);
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [msgs, thinking]);
	const send = (q) => {
		const content = (q ?? text).trim();
		if (!content) return;
		setMsgs((m) => [...m, {
			role: "user",
			content
		}]);
		setText("");
		setThinking(true);
		setTimeout(() => {
			setMsgs((m) => [...m, {
				role: "ai",
				content: "Based on the knowledge base, here is what I found — grounded in the cited sources. Let me know if you'd like me to dig deeper into any specific section.",
				sources: [{
					name: "Q3 Board Pack",
					page: 4
				}, {
					name: "Operations Memo",
					page: 12
				}]
			}]);
			setThinking(false);
		}, 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Enterprise AI Assistant",
		subtitle: "Conversational, source-linked answers grounded in your knowledge base.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-[calc(100vh-13rem)] grid-cols-1 gap-4 lg:grid-cols-[260px_1fr_280px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:flex lg:flex-col",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-1 flex-col p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								className: "w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New conversation"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
								children: "Recent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 flex-1 space-y-1 overflow-y-auto",
								children: [
									"SOP v3 → v4 changes",
									"Q3 board metrics",
									"Vendor renewal pipeline",
									"HIPAA audit findings",
									"Investor memo draft"
								].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: `flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-xs ${i === 0 ? "bg-muted" : "hover:bg-muted/60"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: t
									})]
								}) }, t))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex min-h-0 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: "Medixo Assistant"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-muted-foreground",
									children: "Grounded · Source-cited · Audit-logged"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: "success",
								children: "Online"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 space-y-5 overflow-y-auto p-5",
							children: [
								msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `grid h-8 w-8 shrink-0 place-items-center rounded-lg ${m.role === "ai" ? "bg-brand-gradient text-white" : "bg-accent text-accent-foreground"}`,
										children: m.role === "ai" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `max-w-[78%] space-y-2 ${m.role === "user" ? "items-end" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-brand-gradient text-white" : "bg-muted text-foreground"}`,
											children: m.content
										}), m.sources && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1.5",
											children: m.sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 text-[10px] text-muted-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3 w-3" }),
													" ",
													s.name,
													" · p.",
													s.page
												]
											}, s.name))
										})]
									})]
								}, i)),
								thinking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-gradient text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-muted px-4 py-2.5 text-sm text-muted-foreground",
										children: ["Thinking", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block w-6 animate-pulse",
											children: "..."
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 flex flex-wrap gap-1.5",
								children: PROMPTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => send(p),
									className: "rounded-full border border-border bg-card px-2.5 py-1 text-[11px] text-muted-foreground hover:bg-muted hover:text-foreground",
									children: p
								}, p))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									send();
								},
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: text,
									onChange: (e) => setText(e.target.value),
									placeholder: "Ask the assistant — it will cite sources from your knowledge base",
									className: "h-12 w-full rounded-xl border border-input bg-card pl-4 pr-14 text-sm outline-none focus:border-ring focus:shadow-glow"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg bg-brand-gradient text-white shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:flex lg:flex-col",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-1 flex-col p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Citations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex-1 space-y-2 overflow-y-auto",
							children: [
								{
									n: "Pharmacovigilance SOP v3",
									p: 9,
									dept: "Healthcare"
								},
								{
									n: "Pharmacovigilance SOP v4",
									p: 11,
									dept: "Healthcare"
								},
								{
									n: "Safety Review Board Charter",
									p: 2,
									dept: "Governance"
								},
								{
									n: "Q3 Board Pack",
									p: 4,
									dept: "Executive"
								},
								{
									n: "Operations Memo",
									p: 12,
									dept: "Operations"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-lg border border-border bg-card p-3 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate font-medium",
										children: s.n
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-[11px] text-muted-foreground",
									children: [
										s.dept,
										" · p.",
										s.p
									]
								})]
							}, s.n))
						})]
					})
				})
			]
		})
	});
}
//#endregion
export { AssistantPage as component };
