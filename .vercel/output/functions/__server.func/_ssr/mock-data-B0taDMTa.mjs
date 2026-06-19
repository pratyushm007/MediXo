//#region node_modules/.nitro/vite/services/ssr/assets/mock-data-B0taDMTa.js
var depts = [
	"Healthcare",
	"Legal",
	"Finance",
	"HR",
	"Operations",
	"Compliance",
	"Research",
	"Executive"
];
var cats = [
	"Policy",
	"Contract",
	"Invoice",
	"Report",
	"SOP",
	"Patient Record",
	"Clinical Trial",
	"Audit"
];
var mockDocs = [
	"Cardiology Patient Intake Policy v3.2",
	"Master Services Agreement — Acme Health",
	"Q3 Financial Statement Consolidated",
	"Pharmacovigilance SOP 2026",
	"Insurance Claims Workflow Review",
	"HIPAA Compliance Annual Audit",
	"Clinical Trial CT-441 Phase II Results",
	"Vendor Onboarding Checklist",
	"Data Processing Addendum — Azure",
	"Board Pack — November 2026",
	"Radiology Imaging Guidelines",
	"Employee Handbook 2026",
	"Loan Origination Risk Assessment",
	"Manufacturing QA Batch Report 8821",
	"GDPR Subject Access Request Log",
	"Procurement Contract — Siemens Healthineers",
	"Telemedicine Privacy Policy",
	"ICU Staffing Plan Q4",
	"ERP Integration Architecture",
	"Annual Investor Update Memo"
].map((n, i) => ({
	id: `doc_${1e3 + i}`,
	name: n,
	type: [
		"PDF",
		"DOCX",
		"XLSX",
		"PPT",
		"IMG"
	][i % 5],
	department: depts[i % depts.length],
	category: cats[i % cats.length],
	status: [
		"processed",
		"processed",
		"processed",
		"processing",
		"pending",
		"failed"
	][i % 6],
	size: `${(.4 + i % 9 * .7).toFixed(1)} MB`,
	uploadedAt: (/* @__PURE__ */ new Date(Date.now() - i * 864e5 * 1.3)).toISOString(),
	uploadedBy: [
		"Dr. Anika Rao",
		"Marcus Chen",
		"Priya Patel",
		"Sofia Alvarez",
		"James O'Connor"
	][i % 5],
	pages: 4 + i * 7 % 220,
	confidence: .78 + i * 13 % 22 / 100
}));
var uploadTrend = Array.from({ length: 14 }, (_, i) => ({
	day: `D${i + 1}`,
	uploads: 40 + Math.round(Math.sin(i / 1.7) * 20 + i * 4),
	processed: 36 + Math.round(Math.cos(i / 2) * 18 + i * 3.6)
}));
var searchTrend = Array.from({ length: 12 }, (_, i) => ({
	month: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	][i],
	searches: 1200 + i * 180 + i % 3 * 90,
	ai: 800 + i * 220
}));
var deptActivity = depts.slice(0, 6).map((d, i) => ({
	dept: d,
	docs: 120 + i * 73 % 380,
	searches: 200 + i * 113 % 700
}));
var aiUsage = [
	{
		name: "AI Search",
		value: 42
	},
	{
		name: "Assistant",
		value: 28
	},
	{
		name: "Summarization",
		value: 16
	},
	{
		name: "Comparison",
		value: 9
	},
	{
		name: "Extraction",
		value: 5
	}
];
var activities = [
	{
		user: "Dr. Anika Rao",
		action: "uploaded",
		target: "Cardiology Intake Policy v3.2",
		time: "2m ago",
		module: "Documents"
	},
	{
		user: "Priya Patel",
		action: "searched",
		target: "vendor contracts expiring 2026",
		time: "8m ago",
		module: "AI Search"
	},
	{
		user: "Sofia Alvarez",
		action: "edited metadata on",
		target: "HIPAA Audit 2026",
		time: "21m ago",
		module: "Governance"
	},
	{
		user: "Marcus Chen",
		action: "ran assistant on",
		target: "Q3 Financial Statement",
		time: "44m ago",
		module: "Assistant"
	},
	{
		user: "System",
		action: "completed OCR on",
		target: "Batch Report 8821",
		time: "1h ago",
		module: "Workflow"
	},
	{
		user: "James O'Connor",
		action: "granted role to",
		target: "compliance@medixo",
		time: "2h ago",
		module: "RBAC"
	}
];
var recentSearches = [
	"Summarize all SOPs related to pharmacovigilance",
	"Contracts expiring in the next 90 days",
	"Compare Q2 vs Q3 board pack key metrics",
	"List all HIPAA findings rated High",
	"Patients with abnormal LVEF in 2026"
];
var savedQueries = [
	"Vendor renewals — Operations",
	"Clinical trials with adverse events",
	"ESG disclosures by region"
];
var users = [
	{
		name: "Dr. Anika Rao",
		email: "anika@medixo.io",
		role: "Admin",
		dept: "Healthcare",
		status: "Active"
	},
	{
		name: "Marcus Chen",
		email: "marcus@medixo.io",
		role: "Executive",
		dept: "Finance",
		status: "Active"
	},
	{
		name: "Priya Patel",
		email: "priya@medixo.io",
		role: "Analyst",
		dept: "Compliance",
		status: "Active"
	},
	{
		name: "Sofia Alvarez",
		email: "sofia@medixo.io",
		role: "Editor",
		dept: "Legal",
		status: "Invited"
	},
	{
		name: "James O'Connor",
		email: "james@medixo.io",
		role: "Viewer",
		dept: "Operations",
		status: "Suspended"
	},
	{
		name: "Lin Wei",
		email: "lin@medixo.io",
		role: "Admin",
		dept: "Research",
		status: "Active"
	}
];
var roles = [
	{
		role: "HR",
		scope: ["Employee Records", "Onboarding Docs"],
		users: 12
	},
	{
		role: "Finance",
		scope: [
			"Invoices",
			"Financial Reports",
			"Audit Trails"
		],
		users: 18
	},
	{
		role: "Legal",
		scope: ["Contracts", "Compliance Documents"],
		users: 9
	},
	{
		role: "Executive",
		scope: [
			"Analytics",
			"Dashboards",
			"All Read"
		],
		users: 6
	},
	{
		role: "Clinical",
		scope: ["Patient Records", "Trial Data"],
		users: 41
	}
];
var auditLogs = Array.from({ length: 24 }, (_, i) => ({
	id: `evt_${5e3 + i}`,
	user: [
		"anika@medixo.io",
		"marcus@medixo.io",
		"priya@medixo.io",
		"sofia@medixo.io"
	][i % 4],
	action: [
		"DOC_UPLOAD",
		"DOC_DELETE",
		"RBAC_CHANGE",
		"SEARCH_AI",
		"LOGIN",
		"EXPORT",
		"METADATA_EDIT"
	][i % 7],
	module: [
		"Documents",
		"Documents",
		"RBAC",
		"AI Search",
		"Auth",
		"Analytics",
		"Documents"
	][i % 7],
	time: (/* @__PURE__ */ new Date(Date.now() - i * 18e5)).toISOString(),
	ip: `10.${i * 7 % 255}.${i * 13 % 255}.${i * 31 % 255}`
}));
var integrations = [
	{
		name: "SharePoint",
		desc: "Sync document libraries",
		status: "connected",
		category: "Storage"
	},
	{
		name: "OneDrive",
		desc: "Personal & team drives",
		status: "connected",
		category: "Storage"
	},
	{
		name: "Google Drive",
		desc: "Workspace integration",
		status: "available",
		category: "Storage"
	},
	{
		name: "AWS S3",
		desc: "Object storage buckets",
		status: "connected",
		category: "Cloud"
	},
	{
		name: "Azure Blob Storage",
		desc: "Enterprise blob storage",
		status: "available",
		category: "Cloud"
	},
	{
		name: "Salesforce",
		desc: "CRM attachments & files",
		status: "available",
		category: "Business"
	},
	{
		name: "SAP",
		desc: "ERP document flows",
		status: "available",
		category: "Business"
	},
	{
		name: "ERP Connect",
		desc: "Generic ERP adapter",
		status: "available",
		category: "Business"
	}
];
var industries = [
	{
		name: "Healthcare",
		desc: "Patient records, clinical trials, regulatory filings, HIPAA workflows.",
		icon: "Stethoscope"
	},
	{
		name: "Banking",
		desc: "Loan files, KYC docs, risk assessments, AML compliance.",
		icon: "Landmark"
	},
	{
		name: "Insurance",
		desc: "Claims, policies, underwriting evidence, fraud review.",
		icon: "ShieldCheck"
	},
	{
		name: "Legal",
		desc: "Contracts, discovery, matter files, clause comparison.",
		icon: "Scale"
	},
	{
		name: "Manufacturing",
		desc: "QA batch records, SOPs, supplier contracts, audits.",
		icon: "Factory"
	},
	{
		name: "Government",
		desc: "Public records, FOIA workflows, secure classifications.",
		icon: "Building2"
	}
];
var features = [
	{
		title: "AI Semantic Search",
		desc: "Ask in natural language across millions of enterprise documents with grounded citations.",
		icon: "Sparkles"
	},
	{
		title: "Intelligent OCR",
		desc: "Layout-aware extraction across PDFs, scans, forms, and handwritten notes.",
		icon: "ScanText"
	},
	{
		title: "Data Orchestration",
		desc: "Pipeline ingestion from SharePoint, S3, ERP, and on-prem systems with lineage.",
		icon: "Workflow"
	},
	{
		title: "Executive Analytics",
		desc: "Productivity, compliance, and cost savings dashboards out of the box.",
		icon: "BarChart3"
	},
	{
		title: "RBAC & Governance",
		desc: "Department-aware roles, audit trails, encryption at rest and in transit.",
		icon: "ShieldCheck"
	},
	{
		title: "Enterprise Assistant",
		desc: "Source-linked answers with follow-up reasoning across your knowledge base.",
		icon: "Bot"
	}
];
//#endregion
export { features as a, mockDocs as c, savedQueries as d, searchTrend as f, deptActivity as i, recentSearches as l, users as m, aiUsage as n, industries as o, uploadTrend as p, auditLogs as r, integrations as s, activities as t, roles as u };
