import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CW7QI888.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { A as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DXXscQDl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BVQq-c8h.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Medixo KnowledgeHub — Enterprise AI Knowledge Platform" },
			{
				name: "description",
				content: "AI-powered enterprise document orchestration, semantic search, and governance for regulated industries."
			},
			{
				property: "og:title",
				content: "Medixo KnowledgeHub"
			},
			{
				property: "og:description",
				content: "Enterprise data orchestration, intelligent document management, and grounded AI for the modern enterprise."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$16 = () => import("./auth-Djo4Hz5x.mjs");
var Route$16 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign in · Medixo KnowledgeHub" }, {
		name: "description",
		content: "Access the Medixo KnowledgeHub enterprise workspace."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./route-Di7iQBCH.mjs");
var Route$15 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./routes-D9Tsf4fS.mjs");
var Route$14 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Medixo KnowledgeHub — Enterprise AI Knowledge Platform" },
		{
			name: "description",
			content: "Enterprise-grade AI search, OCR, and document orchestration trusted by healthcare, banking, legal, and government leaders."
		},
		{
			property: "og:title",
			content: "Medixo KnowledgeHub"
		},
		{
			property: "og:description",
			content: "AI-powered enterprise document intelligence with governance built in."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./workflows-DKIqJ4wx.mjs");
var Route$13 = createFileRoute("/_authenticated/workflows")({
	head: () => ({ meta: [{ title: "Workflows · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./users-7vjX-7hU.mjs");
var Route$12 = createFileRoute("/_authenticated/users")({
	head: () => ({ meta: [{ title: "User Management · Medixo" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./upload-Ciex_PQZ.mjs");
var Route$11 = createFileRoute("/_authenticated/upload")({
	head: () => ({ meta: [{ title: "Upload · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./settings-CR7KuQDv.mjs");
var Route$10 = createFileRoute("/_authenticated/settings")({
	head: () => ({ meta: [{ title: "Settings · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./security-_ARjrR-K.mjs");
var Route$9 = createFileRoute("/_authenticated/security")({
	head: () => ({ meta: [{ title: "Security Center · Medixo" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./search-D4cKAPVr.mjs");
var Route$8 = createFileRoute("/_authenticated/search")({
	head: () => ({ meta: [{ title: "AI Search · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./rbac-C7gpOsM5.mjs");
var Route$7 = createFileRoute("/_authenticated/rbac")({
	head: () => ({ meta: [{ title: "RBAC · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./integrations-5S_yMFL5.mjs");
var Route$6 = createFileRoute("/_authenticated/integrations")({
	head: () => ({ meta: [{ title: "Integrations · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./documents-4OdtjGa1.mjs");
var Route$5 = createFileRoute("/_authenticated/documents")({
	head: () => ({ meta: [{ title: "Documents · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./dashboard-DA0rkpBU.mjs");
var Route$4 = createFileRoute("/_authenticated/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./compare-Fg9YIBe0.mjs");
var Route$3 = createFileRoute("/_authenticated/compare")({
	head: () => ({ meta: [{ title: "Cross-Document Analysis · Medixo" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./audit-CWx_GF-P.mjs");
var Route$2 = createFileRoute("/_authenticated/audit")({
	head: () => ({ meta: [{ title: "Audit Logs · Medixo" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./assistant-CuPY_t6w.mjs");
var Route$1 = createFileRoute("/_authenticated/assistant")({
	head: () => ({ meta: [{ title: "AI Assistant · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./analytics-DszVLMTA.mjs");
var Route = createFileRoute("/_authenticated/analytics")({
	head: () => ({ meta: [{ title: "Analytics · Medixo KnowledgeHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var AuthRoute = Route$16.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$17
});
var AuthenticatedRouteRoute = Route$15.update({
	id: "/_authenticated",
	getParentRoute: () => Route$17
});
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var AuthenticatedWorkflowsRoute = Route$13.update({
	id: "/workflows",
	path: "/workflows",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedUsersRoute = Route$12.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedUploadRoute = Route$11.update({
	id: "/upload",
	path: "/upload",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedSettingsRoute = Route$10.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedSecurityRoute = Route$9.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedSearchRoute = Route$8.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRbacRoute = Route$7.update({
	id: "/rbac",
	path: "/rbac",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedIntegrationsRoute = Route$6.update({
	id: "/integrations",
	path: "/integrations",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDocumentsRoute = Route$5.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardRoute = Route$4.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedCompareRoute = Route$3.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAuditRoute = Route$2.update({
	id: "/audit",
	path: "/audit",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAssistantRoute = Route$1.update({
	id: "/assistant",
	path: "/assistant",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedAnalyticsRoute: Route.update({
		id: "/analytics",
		path: "/analytics",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedAssistantRoute,
	AuthenticatedAuditRoute,
	AuthenticatedCompareRoute,
	AuthenticatedDashboardRoute,
	AuthenticatedDocumentsRoute,
	AuthenticatedIntegrationsRoute,
	AuthenticatedRbacRoute,
	AuthenticatedSearchRoute,
	AuthenticatedSecurityRoute,
	AuthenticatedSettingsRoute,
	AuthenticatedUploadRoute,
	AuthenticatedUsersRoute,
	AuthenticatedWorkflowsRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
