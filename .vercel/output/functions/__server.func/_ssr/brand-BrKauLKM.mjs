import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { rt as Database } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-BrKauLKM.js
var import_jsx_runtime = require_jsx_runtime();
function BrandMark({ size = 32 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative grid place-items-center rounded-xl bg-brand-gradient text-white shadow-glow",
		style: {
			width: size,
			height: size
		},
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
			className: "h-1/2 w-1/2",
			strokeWidth: 2.2
		})
	});
}
function BrandLockup({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { size: 32 }), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-[15px] font-bold tracking-tight",
				children: "Medixo KnowledgeHub"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
				children: "Enterprise · AI · Governance"
			})]
		})]
	});
}
//#endregion
export { BrandMark as n, BrandLockup as t };
