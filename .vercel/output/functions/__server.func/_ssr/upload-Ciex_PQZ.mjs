import { i as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as LoaderCircle, ht as ArrowLeft, it as CloudUpload, mt as ArrowRight, n as X, q as FileText, st as Check } from "../_libs/lucide-react.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Pill, n as Btn, r as Card, t as AppShell } from "./app-shell-156YiVmO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/upload-Ciex_PQZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	"Select files",
	"Add metadata",
	"Review",
	"Upload"
];
function UploadPage() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [files, setFiles] = (0, import_react.useState)([]);
	const [meta, setMeta] = (0, import_react.useState)({
		department: "Healthcare",
		category: "Policy",
		tags: ""
	});
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const onDrop = (e) => {
		e.preventDefault();
		const list = Array.from(e.dataTransfer.files).map((f) => ({
			name: f.name,
			size: f.size,
			type: f.type || "application/octet-stream"
		}));
		setFiles((s) => [...s, ...list]);
	};
	const onPick = (e) => {
		if (!e.target.files) return;
		const list = Array.from(e.target.files).map((f) => ({
			name: f.name,
			size: f.size,
			type: f.type || "application/octet-stream"
		}));
		setFiles((s) => [...s, ...list]);
	};
	const startUpload = () => {
		setStep(3);
		setProgress(0);
		setDone(false);
		const iv = setInterval(() => {
			setProgress((p) => {
				if (p >= 100) {
					clearInterval(iv);
					setDone(true);
					return 100;
				}
				return Math.min(100, p + Math.random() * 14);
			});
		}, 220);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Upload documents",
		subtitle: "Multi-step ingestion with metadata, OCR, and validation.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-wrap gap-3",
				children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex min-w-0 flex-1 items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold ${i <= step ? "bg-brand-gradient text-white shadow-glow" : "bg-muted text-muted-foreground"}`,
							children: i < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `text-[10px] font-semibold uppercase tracking-widest ${i <= step ? "text-brand" : "text-muted-foreground"}`,
								children: ["Step ", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm font-semibold",
								children: s
							})]
						}),
						i < STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ml-1 hidden h-px flex-1 bg-border sm:block" })
					]
				}, s))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [
				step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							onDrop,
							onDragOver: (e) => e.preventDefault(),
							className: "block cursor-pointer rounded-2xl border-2 border-dashed border-border p-12 text-center transition-colors hover:bg-muted/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-7 w-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 font-display text-lg font-semibold",
									children: "Drop files or click to browse"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "PDF, DOCX, XLSX, PPT, PNG, JPG · up to 250MB per file"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									multiple: true,
									className: "hidden",
									onChange: onPick
								})
							]
						}),
						files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-2",
							children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-sm font-medium",
											children: f.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground",
											children: [
												(f.size / 1024 / 1024).toFixed(2),
												" MB · ",
												f.type
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setFiles(files.filter((_, j) => j !== i)),
										className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									})
								]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								disabled: files.length === 0,
								onClick: () => setStep(1),
								children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				}),
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: "Metadata assignment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"These values will be applied to all ",
								files.length,
								" files and refined automatically during processing."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Department",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: meta.department,
										onChange: (e) => setMeta({
											...meta,
											department: e.target.value
										}),
										className: "h-10 w-full rounded-lg border border-input bg-card px-3 text-sm",
										children: [
											"Healthcare",
											"Legal",
											"Finance",
											"HR",
											"Operations",
											"Compliance",
											"Research",
											"Executive"
										].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Category",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: meta.category,
										onChange: (e) => setMeta({
											...meta,
											category: e.target.value
										}),
										className: "h-10 w-full rounded-lg border border-input bg-card px-3 text-sm",
										children: [
											"Policy",
											"Contract",
											"Invoice",
											"Report",
											"SOP",
											"Patient Record",
											"Clinical Trial",
											"Audit"
										].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Tags (comma separated)",
									className: "md:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: meta.tags,
										onChange: (e) => setMeta({
											...meta,
											tags: e.target.value
										}),
										placeholder: "hipaa, cardiology, 2026",
										className: "h-10 w-full rounded-lg border border-input bg-card px-3 text-sm"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								variant: "ghost",
								onClick: () => setStep(0),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								onClick: () => setStep(2),
								children: ["Review ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				}),
				step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: "Review and confirm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-muted/30 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
										children: "Files"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-2xl font-bold",
										children: files.length
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 text-xs text-muted-foreground",
										children: [(files.reduce((s, f) => s + f.size, 0) / 1024 / 1024).toFixed(2), " MB total"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-muted/30 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
									children: "Routing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
											tone: "brand",
											children: meta.department
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: meta.category }),
										meta.tags.split(",").map((t) => t.trim()).filter(Boolean).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
											tone: "info",
											children: t
										}, t))
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-lg border border-border p-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium",
								children: "Pipeline preview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-2 grid gap-2 text-xs text-muted-foreground sm:grid-cols-3 md:grid-cols-6",
								children: [
									"Upload",
									"OCR",
									"Classify",
									"Extract",
									"Validate",
									"Index"
								].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-md border border-border bg-card px-2.5 py-2 text-center",
									children: [
										i + 1,
										". ",
										s
									]
								}, s))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								variant: "ghost",
								onClick: () => setStep(1),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								onClick: startUpload,
								children: ["Start upload ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				}),
				step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: done ? "Upload complete" : "Uploading & processing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: done ? "All documents have been ingested and queued for processing." : "Files are being uploaded and routed through the AI pipeline."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-brand-gradient transition-all",
									style: { width: `${progress}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(progress), "%"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [files.length, " files"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-2",
							children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 truncate",
										children: f.name
									}),
									done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-brand" })
								]
							}, i))
						}),
						done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								variant: "secondary",
								onClick: () => {
									setFiles([]);
									setStep(0);
									setDone(false);
								},
								children: "Upload more"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								onClick: () => navigate({ to: "/documents" }),
								children: ["Go to library ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				})
			]
		})]
	});
}
function Field({ label, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5",
			children
		})]
	});
}
//#endregion
export { UploadPage as component };
