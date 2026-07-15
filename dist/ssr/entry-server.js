import { jsx, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AlertTriangle, RotateCcw, ArrowRight, X, Menu, ArrowDown, Check, ChartNoAxesCombined, Target, ExternalLink, Database, Fingerprint, ShieldCheck, Layers3, FileCheck2, ChevronDown, Sparkles, Network, Cloud, Quote, Users, ArrowUpRight, Info } from "lucide-react";
import { Component, useState, useRef, useMemo, useEffect, useId } from "react";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen p-8 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center w-full max-w-2xl p-8", children: [
        /* @__PURE__ */ jsx(
          AlertTriangle,
          {
            size: 48,
            className: "text-destructive mb-6 flex-shrink-0"
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-xl mb-4", children: "An unexpected error occurred." }),
        /* @__PURE__ */ jsx("div", { className: "p-4 w-full rounded bg-muted overflow-auto mb-6", children: /* @__PURE__ */ jsx("pre", { className: "text-sm text-muted-foreground whitespace-break-spaces", children: this.state.error?.stack }) }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.location.reload(),
            className: cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg",
              "bg-primary text-primary-foreground",
              "hover:opacity-90 cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ jsx(RotateCcw, { size: 16 }),
              "Reload Page"
            ]
          }
        )
      ] }) });
    }
    return this.props.children;
  }
}
const assets = {
  logo: "/dcaadatalake/dcaadatalake-assets/peregrine-logo.png",
  hero: "/dcaadatalake/dcaadatalake-assets/dcaa-hero.webp",
  pdsa: "/dcaadatalake/dcaadatalake-assets/peregrine-pdsa-method.webp"
};
const peregrineIntroduction = {
  eyebrow: "About Peregrine",
  title: "A federal data and AI partner built for mission value",
  body: "Organized as a unique data and technology innovation hub and social enterprise, Peregrine combines federal data policy, enterprise architecture, engineering, human-centered analytics, responsible AI, and a history of stellar delivery to help DCAA create greater mission value from agency-owned information while preserving traceability, human judgment, and disciplined execution.",
  details: ["Data and technology innovation hub", "SBA 8(a) prime", "Financial-regulatory mission fluency", "Strategy-through-production delivery", "Senior, multidisciplinary leadership"]
};
const navigation = [
  { id: "top", label: "Overview", phase: "foundation" },
  { id: "alignment", label: "Alignment", phase: "foundation" },
  { id: "intelligence", label: "Intelligence", phase: "intelligence" },
  { id: "capabilities", label: "Capabilities", phase: "intelligence" },
  { id: "innovation", label: "Innovation", phase: "delivery" },
  { id: "sec", label: "Past Performance", phase: "delivery" },
  { id: "team", label: "Team", phase: "delivery" },
  { id: "next-step", label: "Next Step", phase: "delivery" }
];
const heroPastPerformance = [
  "All-Exceptional CPARS on current SEC prime call orders",
  "Azure at PCAOB and DDOT",
  "Financial-regulatory depth",
  "SBA 8(a) prime and GSA MAS contract holder"
];
const evidenceContexts = {
  hero: [
    "Three completed SEC CPARS evaluations rate every displayed category Exceptional across Data Science and Use, Data Visualization, and Data Governance.",
    "PCAOB and DDOT show Peregrine carrying enterprise-data strategy, governance, pipelines, and mission products into Azure production.",
    "SEC and PCAOB provide financial-regulatory experience, while NYDFS adds policy and governance work supporting supervisory decisions.",
    "Peregrine is an SBA 8(a) prime and holds GSA Multiple Award Schedule contract 47QTCA23D0028 under SIN 54151S, Information Technology Professional Services. Federal procurement approaches remain subject to the Contracting Officer's independent research, planning, eligibility confirmation, and approvals."
  ],
  foundation: "SEC CAT, PCAOB, DDOT, and FDA demonstrate experience with source integration, historical preservation, data quality, metadata, lineage, security, and governed analytical delivery."
};
const artifactCategories = [
  { id: "evaluation", label: "Evaluations" },
  { id: "case", label: "Client engagements" },
  { id: "delivery", label: "Delivery artifacts" },
  { id: "governance", label: "Governance and security" },
  { id: "testimony", label: "Leadership testimony" },
  { id: "acquisition", label: "Procurement qualifications" }
];
const pastPerformanceArtifacts = [
  { id: "sec-cpars", index: "A01", title: "Three SEC prime CPARS records", source: "Formal performance evaluation", summary: "Data Science and Use, Data Visualization, and Data Governance call orders, with every displayed evaluated category rated Exceptional.", href: "#sec-evaluations", categories: ["evaluation", "delivery"] },
  { id: "sec-cat", index: "A02", title: "SEC CAT delivery record", source: "Prime past performance", summary: "Complex regulated-data pipelines, analytical products, governance, visualization, and sustained mission delivery.", href: "#sec", categories: ["case", "delivery", "governance"] },
  { id: "pcaob-azure", index: "A03", title: "PCAOB Azure enterprise data services", source: "Strategy-through-production engagement", summary: "Enterprise-data strategy, architecture, governance, leadership support, managed service, and implementation evidence.", href: "#pcaob", categories: ["case", "delivery", "governance"] },
  { id: "ddot-azure", index: "A04", title: "DDOT Azure transformation", source: "Mission transformation engagement", summary: "Azure warehouses, pipelines, data policy, catalog, analytical products, applications, adoption, and operational support.", href: "#ddot", categories: ["case", "delivery", "governance"] },
  { id: "fda-secure-ai", index: "A05", title: "FDA secure AI and cloud delivery", source: "Documented subcontract engagement", summary: "Secure AWS, Zero Trust, FDA data-security protocols, AI and ML engineering, reporting, and production support.", href: "#fda-fidle", categories: ["case", "delivery", "governance"] },
  { id: "nydfs-governance", index: "A06", title: "NYDFS policy and governance work", source: "Supporting regulatory experience", summary: "Digital-asset policy framework and data-governance implementation supporting financial-regulatory mission fluency.", href: "#nydfs", categories: ["case", "governance"] },
  { id: "sec-testimony", index: "A07", title: "SEC delivery and innovation observations", source: "Customer leadership quotations", summary: "Approved statements from the SEC Assessing Official and Contracting Officer and the SEC Chief Data Officer.", href: "#sec-testimony", categories: ["testimony", "delivery"] },
  { id: "ddot-testimony", index: "A08", title: "DDOT transformation observations", source: "Customer leadership quotations", summary: "Approved statements from DDOT technology leaders on collaboration, implementation, modernization, and data culture.", href: "#ddot-testimony", categories: ["testimony", "delivery"] },
  { id: "fda-testimony", index: "A09", title: "FDA teaming-partner observation", source: "Teaming-partner quotation", summary: "Approved statement on secure data science and engineering, AWS, usability, Zero Trust, and FDA security protocols.", href: "#fda-testimony", categories: ["testimony", "governance"] },
  { id: "federal-acquisition", index: "A10", title: "Federal procurement qualifications", source: "Registrations and qualifications", summary: "SBA 8(a) prime; active SAM.gov registration; GSA MAS 47QTCA23D0028 under SIN 54151S; CMMC Status: Final Level 2 (C3PAO); social enterprise organized as a State of Maryland Benefit Corporation.", href: "#next-step", categories: ["acquisition"] }
];
const matrixRows = [
  {
    outcome: "One trusted view of audit performance across historical and current systems",
    response: "Integrates complex source data, reconciles identity and lineage, and creates durable analytical models and governed data products.",
    pastPerformance: "SEC CAT pipelines and derived datasets; PCAOB Azure enterprise-data roadmap and implementation; DDOT Azure warehouses and pipelines.",
    href: "#foundation"
  },
  {
    outcome: "Complete, unique, analysis-ready records",
    response: "Builds quality rules, canonical keys, deduplication, reconciliation, metadata, and source-to-output traceability.",
    pastPerformance: "SEC CAT transformation, hashing, quality, and metadata; PCAOB critical-data management; DDOT Data Policy and Digital Asset Catalog.",
    href: "#foundation"
  },
  {
    outcome: "Clear visibility into cycle time, findings, sustained costs, and performance trends",
    response: "Designs mission-focused metrics, semantic layers, dashboards, and self-service analytical experiences.",
    pastPerformance: "SEC DCStats, TeamStats, CAT analytical products, and market statistics; DDOT mission dashboards and geospatial analytics.",
    href: "#intelligence"
  },
  {
    outcome: "Defensible assignment budget-hour ranges",
    response: "Develops feature pipelines, predictive models, holdout validation, baseline comparison, explainability, monitoring, and decision support.",
    pastPerformance: "SEC market analytics and AI; FDA AI and ML and data engineering; DDOT optimization and predictive analytics.",
    href: "#intelligence"
  },
  {
    outcome: "Comparable contractor-cost intelligence",
    response: "Standardizes varied submissions into common financial and operational concepts, preserves provenance, and enables comparison.",
    pastPerformance: "SEC financial-regulatory data; PCAOB enterprise-data strategy; NYDFS digital-asset policy framework and data-governance implementation.",
    href: "#intelligence"
  },
  {
    outcome: "Fast, intuitive access for auditors, planners, analysts, and leaders",
    response: "Combines self-service business intelligence, applications, visual analytics, plain-language patterns, and human-centered design.",
    pastPerformance: "SEC visualization prime work, DCStats, and TeamStats; DDOT P-DSA and mission applications; FDA enterprise reporting.",
    href: "#capabilities"
  },
  {
    outcome: "Secure, governed delivery in DCAA's lakehouse",
    response: "Works within approved platforms and controls using access, encryption, logging, metadata, lineage, testing, and optimization.",
    pastPerformance: "Azure at PCAOB and DDOT; AWS at SEC and FDA; SEC Zero Trust, role-based access control, and attribute-based access control; FDA security delivery.",
    href: "#foundation"
  },
  {
    outcome: "Disciplined delivery across multiple technical workstreams",
    response: "Uses accountable prime leadership, roadmaps, Agile increments, risk management, quality gates, and transparent communication.",
    pastPerformance: "Three SEC prime call orders rated Exceptional in every category; PCAOB strategy to implementation; DDOT transformation delivery.",
    href: "#sec"
  },
  {
    outcome: "Sustainable capability after deployment",
    response: "Produces source artifacts, documentation, standard operating procedures, training, transfer, and adoption support as part of delivery.",
    pastPerformance: "SEC data-use and training; PCAOB managed-service model; DDOT governance institutionalization; FDA production support.",
    href: "#team"
  }
];
const mentalMap = [
  {
    id: "foundation",
    number: "01",
    label: "Use the data",
    title: "Build the trusted foundation",
    body: "Create a governed, interoperable audit-data foundation that preserves history and makes enterprise information dependable across locations, systems, and audit eras.",
    detail: "Profile source authority, reconcile identity, standardize meaning, retain lineage, and publish AI-ready semantic layers so every analytical product begins with trustworthy data.",
    requirementsFocus: "Source integration, historical preservation, data quality, metadata, lineage, security, and governed lakehouse engineering.",
    request: "Connect historical and current systems, standardize records, preserve provenance, and make complete data available for approved analytical use.",
    value: "Creates dependable inputs for every dashboard, model, workload estimate, and contractor-cost comparison.",
    href: "#foundation"
  },
  {
    id: "intelligence",
    number: "02",
    label: "Extract the intelligence",
    title: "Create decision intelligence",
    body: "Turn trusted data into operational intelligence for performance history, workload planning, and comparable contractor-cost analysis.",
    detail: "Define mission measures before visualization, use transparent analytical methods, expose uncertainty and limitations, and connect every output to the decisions auditors and leaders must make.",
    requirementsFocus: "Mission metrics, dashboards, self-service analysis, predictive assignment planning, contractor-cost comparison, and model assurance.",
    request: "Convert governed data into traceable analysis that supports audit-performance review, workload planning, and comparable contractor-cost decisions.",
    value: "Connects each analytical result to transparent methods, visible uncertainty, validation evidence, and human review.",
    href: "#intelligence"
  },
  {
    id: "delivery",
    number: "03",
    label: "Enable delivery",
    title: "Deliver with confidence",
    body: "Deliver production data products through accountable prime leadership, regulatory discipline, DevSecOps, and sustained user adoption.",
    detail: "Move from accepted requirements through working increments, quality and security gates, documentation, training, transfer, and measurable operating ownership inside DCAA's approved ecosystem.",
    requirementsFocus: "Program governance, Agile increments, testing, DevSecOps, release records, training, adoption, and knowledge transfer.",
    request: "Deliver accepted production capabilities inside DCAA controls while transferring code, documentation, operating knowledge, and continuation authority.",
    value: "Moves the work from requirements through production acceptance and leaves DCAA with sustainable mission capability.",
    href: "#sec"
  }
];
const lidoQuotation = {
  text: "Peregrine has consistently demonstrated outstanding performance. Their ability to adapt and respond to changing business requirements while delivering high-quality results on complex projects that ranged from strategy to architecture to analytics distinguishes them as a small business in a highly competitive field.",
  speaker: "Lido Ramadan",
  role: "Chief Operating Officer, Oceaneast"
};
const pdsaMethod = {
  eyebrow: "Peregrine problem-solving method",
  title: "Design + Systems + Agile",
  body: "Peregrine's P-DSA approach combines design thinking, a systems approach, and Agile methods into one problem-solving framework. Design identifies users, problems, and value. Systems evaluates the complete ecosystem and viable options. Agile delivers working increments with continuous feedback and acceptance.",
  stages: [
    { id: "01", title: "Design", body: "Identify users, define the problem, structure value, and explore viable options." },
    { id: "02", title: "Systems", body: "Evaluate the complete ecosystem, experiment, measure, learn, and select the solution path." },
    { id: "03", title: "Agile", body: "Build, review, and release working increments through client-compatible delivery cycles." }
  ]
};
const officialLinks = [
  { label: "DCAA agency mission", href: "https://www.dcaa.mil/" },
  { label: "DCAA Strategic Plan 2026–2030", href: "https://www.dcaa.mil/LinkClick.aspx?fileticket=6FCylWg8-6c%3D&tabid=5867&portalid=88" },
  { label: "DCAA 2026 agency overview", href: "https://www.dcaa.mil/Portals/88/2026%20one%20pager%20about%20DCAA%200312.pdf" },
  { label: "DCAA hub transition", href: "https://www.dcaa.mil/Agency-News/Article-View/Article/4464731/dcaa-announces-hub-locations/" }
];
const foundationLayers = [
  {
    id: "sources",
    number: "01",
    title: "Source context",
    summary: "Connect historical, current, contractor-cost, and future sources while preserving authority, provenance, and business meaning.",
    detail: "Profile each source, define controlled mappings, retain history, route exceptions, and reconcile entities before data becomes analytical evidence.",
    pastPerformance: "SEC CAT source transformation; PCAOB enterprise ingestion; DDOT multi-source warehouses and pipelines."
  },
  {
    id: "history",
    number: "02",
    title: "Trusted core",
    summary: "Preserve change through Data Vault 2.0 patterns and publish complete, unique, defensible data.",
    detail: "Use canonical keys, hubs, links, satellites, quality rules, metadata, lineage, deduplication, reconciliation, and auditable change controls.",
    pastPerformance: "SEC hashing and derived datasets; PCAOB master and critical data; DDOT Data Policy and Digital Asset Catalog."
  },
  {
    id: "models",
    number: "03",
    title: "Analytical serving",
    summary: "Create Gold Tier dimensional and semantic models aligned to mission questions and reusable measures.",
    detail: "Define metrics before visualization, connect each output to source evidence, and optimize performance and cost for approved roles and interfaces.",
    pastPerformance: "SEC DCStats, TeamStats, and market statistics; PCAOB self-service roadmap; DDOT mission dashboards."
  },
  {
    id: "controls",
    number: "04",
    title: "Controlled delivery",
    summary: "Operate inside DCAA-approved identity, network, repository, security, logging, testing, and release controls.",
    detail: "Apply least privilege, encryption, audit logging, automated tests, observability, performance controls, release evidence, documentation, and transfer acceptance.",
    pastPerformance: "SEC regulatory compliance; PCAOB access management; FDA security and Zero Trust; DDOT production institutionalization."
  }
];
const products = [
  {
    id: "history",
    number: "01",
    title: "Trusted performance history",
    decision: "Where is audit performance improving, slowing, or changing across time, organizations, assignments, and relevant dimensions?",
    foundation: "Reconciled historical and current records, durable identity, preserved provenance, and governed semantic measures.",
    method: "Time-series and cohort analysis, trends, variance, segmentation, drill paths, and transparent calculations.",
    experience: "Role-relevant dashboards, queryable models, quality status, business definitions, and traceable source evidence.",
    acceptance: "Reconciliation, metric validation, source-to-output traceability, usability testing, and repeatable analytical results.",
    pastPerformance: "SEC CAT analytics, DCStats, TeamStats, and market statistics; DDOT analytical products; PCAOB self-service roadmap."
  },
  {
    id: "planning",
    number: "02",
    title: "Predictive assignment planning",
    decision: "What budget-hour range is reasonable for a planned assignment, and what evidence supports the estimate?",
    foundation: "Approved historical features, documented transformations, quality controls, and reproducible training and validation data.",
    method: "Baseline comparison, holdout validation, cross-validation, explainability, visible uncertainty, monitoring, and human review.",
    experience: "A decision interface that shows the range, key factors, confidence information, limitations, and supporting evidence.",
    acceptance: "Measurable performance, reproducibility, feature transparency, reviewable errors, monitoring thresholds, and user acceptance.",
    pastPerformance: "SEC analytics and AI; FDA AI and ML and data engineering; DDOT optimization; PCAOB predictive-risk roadmap."
  },
  {
    id: "cost",
    number: "03",
    title: "Comparable contractor-cost intelligence",
    decision: "How do cost structures, activities, and trends compare across varied contractor submissions?",
    foundation: "Profiled Schedule H data, canonical cost concepts, conformed dimensions, provenance, mappings, exceptions, and reviewable transformations.",
    method: "Normalization, semantic modeling, comparative measures, trends, exception review, and traceable cross-contractor analysis.",
    experience: "Queryable analytical models and interfaces that preserve financial meaning and expose transformation status.",
    acceptance: "Mapping review, financial-concept validation, exception resolution, provenance checks, comparison tests, and user acceptance.",
    pastPerformance: "SEC financial-regulatory data; PCAOB enterprise strategy; NYDFS digital-asset policy and governance; financial-risk expertise."
  }
];
const capabilities = [
  { id: "leadership", number: "01", title: "Mission-Aligned Product and Program Leadership", group: "Deliver", outcome: "Keep all three products connected to mission decisions, acceptance evidence, predictable increments, and Contracting Officer visibility.", methods: "Discovery, stakeholder mapping, product vision, prioritization, roadmaps, backlogs, Agile planning, risks, dependencies, demonstrations, decision logs, and outcome measures.", pastPerformance: "All-Exceptional SEC prime performance; PCAOB strategy-to-implementation; DDOT transformation and Agile delivery.", assessment: "Substantially exceeds", statement: "Turn DCAA's highest-value audit questions into governed products with visible progress and measurable acceptance." },
  { id: "lakehouse", number: "02", title: "Secure Azure Databricks Lakehouse and Pipeline Engineering", group: "Deliver", outcome: "Move historical, current, contractor-cost, and future sources through a secure, scalable, observable architecture optimized for reliability, performance, and cost.", methods: "Architecture, governed zones, source profiling, schema mapping, ETL and ELT, incremental loading, orchestration, observability, tuning, automation, and documentation.", pastPerformance: "PCAOB managed Azure implementation; DDOT Azure warehouses and pipelines; SEC CAT regulatory data; FDA FiDLE engineering in AWS.", assessment: "Substantially exceeds", statement: "Build DCAA's lakehouse as a secure enterprise decision platform with observable, reusable production pipelines." },
  { id: "quality", number: "03", title: "Data Modeling, Standardization, Quality, and Traceability", group: "Deliver", outcome: "Create complete, unique, reconciled, standardized, queryable, and defensible data across history and contractor-cost submissions.", methods: "Data Vault, dimensional models, canonical schemas, semantics, taxonomies, master data, profiling, matching, deduplication, validation, exceptions, lineage, and regression tests.", pastPerformance: "SEC CAT transformation, hashing, quality, metadata, and governance; PCAOB master and critical data; DDOT policy and catalog; financial-reporting semantic expertise.", assessment: "Substantially exceeds", statement: "Preserve history, standardize meaning, and make every result traceable to trusted source data." },
  { id: "history-intelligence", number: "04", title: "Historical Audit Performance Intelligence", group: "Decide", outcome: "Explore year-over-year performance across historical and current eras by organization, assignment, time, and relevant dimensions.", methods: "Metric design, time-series and cohort analysis, trends, variance, segmentation, analytical views, dashboards, and drill paths.", pastPerformance: "SEC CAT analytics, market statistics, DCStats, and TeamStats; DDOT safety, mobility, and geospatial analytics; PCAOB self-service roadmap.", assessment: "Substantially exceeds", statement: "See the complete audit-performance story, from enterprise trends to assignment-level evidence." },
  { id: "predictive", number: "05", title: "Predictive Assignment Planning and Model Assurance", group: "Decide", outcome: "Provide defensible budget-hour ranges with measurable baseline improvement, visible uncertainty, transparent features, reproducible validation, and human review.", methods: "Feature engineering, baseline design, holdout testing, cross-validation, error comparison, interval estimation, explainability, registry, monitoring, and interface integration.", pastPerformance: "SEC analytics and AI; FDA AI and ML; DDOT optimization and prediction; PCAOB predictive-risk roadmap.", assessment: "Substantially exceeds", statement: "Predict assignment effort with measurable accuracy, visible uncertainty, and transparent model assurance." },
  { id: "cost-intelligence", number: "06", title: "Contractor-Cost Intelligence and Comparative Analytics", group: "Decide", outcome: "Make contractor cost data queryable and comparable while retaining provenance and reviewable transformation logic.", methods: "Schema profiling, canonical cost taxonomy, mappings, normalization, provenance, exceptions, conformed dimensions, comparative measures, trends, and review workflows.", pastPerformance: "SEC financial-regulatory data; PCAOB enterprise strategy and governance; NYDFS digital-asset policy framework development and implementation; financial-risk and semantic expertise.", assessment: "Substantially exceeds", statement: "Convert varied cost schedules into comparable intelligence while preserving financial meaning and source provenance." },
  { id: "adoption", number: "07", title: "Self-Service Analytics, Interfaces, and Human-Centered Adoption", group: "Assure", outcome: "Enable independent, accessible, role-relevant use of dashboards, interfaces, and governed models.", methods: "User research, information architecture, dashboards, applications, semantic metrics, accessibility, responsive design, usability testing, training, and adoption measures.", pastPerformance: "All-Exceptional SEC visualization work; DDOT P-DSA and human-centered products; FDA reporting; PCAOB self-service roadmap.", assessment: "Substantially exceeds", statement: "Make every decision experience intuitive, role-relevant, accessible, and traceable." },
  { id: "governance", number: "08", title: "Data Governance, Security, and Auditability", group: "Assure", outcome: "Make ownership, meaning, approved use, access, quality, and change history explicit across the lifecycle.", methods: "Governance, stewardship, glossary, catalog, critical data, policy, data-use assessment, lineage, role-based and attribute-based access, least privilege, encryption, logging, Zero Trust, privacy, and control evidence.", pastPerformance: "SEC governance and security; PCAOB governance and access management; DDOT governance institutionalization; FDA security and Zero Trust.", assessment: "Substantially exceeds", statement: "Make governance, security, and auditability operational across the full data-product lifecycle." },
  { id: "production", number: "09", title: "Production Assurance, DevSecOps, and Knowledge Transfer", group: "Assure", outcome: "Release predictably, preserve quality and security records, and transfer source artifacts, standard operating procedures, training, runbooks, and operating knowledge.", methods: "Version control, continuous integration and delivery, infrastructure and configuration as code, automated data and model tests, security scans, release gates, observability, optimization, rollback, documentation-as-work, training, transition, and transfer acceptance.", pastPerformance: "All-Exceptional SEC prime performance; SEC production engineering; FDA secure cloud; PCAOB managed service; DDOT production and institutionalization.", optional: "At-cost Ceebit evaluation within DCAA-approved technologies and human approval gates.", assessment: "Substantially exceeds", statement: "Move every change through visible quality, security, performance, documentation, and ownership gates, with optional federal SDLC automation available." }
];
const ceebitSteps = [
  { number: "01", title: "DCAA selects a bounded workflow", body: "DCAA defines the internal data-product use case, approved inputs, environment, approval points, and measurable outputs." },
  { number: "02", title: "Approved systems coordinate work", body: "The orchestration layer can structure requirements, refine code, prepare tests, trigger security checks, update documentation, and coordinate release preparation." },
  { number: "03", title: "People authorize every consequential step", body: "Named reviewers approve requirements, architecture, code, tests, security findings, release artifacts, and production action." },
  { number: "04", title: "DCAA measures and decides", body: "DCAA reviews cycle time, manual touch time, test completeness, defects, security findings, documentation, traceability, rework, and reviewer satisfaction." },
  { number: "05", title: "DCAA retains the complete record", body: "DCAA retains code, artifacts, repository history, documentation, configuration knowledge, and continuation authority." }
];
const secWorkstreams = [
  {
    id: "science",
    order: "50310225F0001",
    awardHref: "https://orangeslices.ai/peregrine-wins-again-beats-out-3-to-win-sec-data-science-engineering-use-and-training-services-task/",
    title: "Data Science and Use",
    summary: "Regulatory data engineering, CAT transformation, market statistics, crypto analytics, AI research, product ownership, strategy, training, and sustained production delivery.",
    categories: ["Quality", "Schedule", "Cost Control", "Management", "Small Business", "Regulatory Compliance", "Delivery"],
    pastPerformance: "CAT captures trillions of equity and options order lifecycle records at petabyte-to-exabyte scale. Peregrine designs, develops, implements, operates, and improves secure ETL and derived-data pipelines for the SEC's largest, most complex, mission-critical dataset.",
    value: "Peregrine converted previously intractable raw CAT data into lifecycle-, account-, and aggregate-level analytical products; improved hashing, search, linkage, and query performance; and supported analytics that contributed to detection of a $47 million front-running scheme. The OCDO, OIT, and Peregrine team's CAT work led to the SEC Chair's Analytical Innovations Award."
  },
  {
    id: "visualization",
    order: "50310224F0171",
    awardHref: "https://orangeslices.ai/peregrine-awarded-8m-sec-data-visualization-task-on-data-services-bpa/",
    title: "Data Visualization",
    summary: "DCStats modernization, TeamStats launch, public and internal visualizations, AI-driven visualization research, platform reliability, accessibility, and product delivery.",
    categories: ["Quality", "Schedule", "Cost Control", "Management", "Regulatory Compliance", "Delivery"],
    pastPerformance: "Peregrine modernized the DCStats technical stack, brought TeamStats online, delivered mission dashboards and public visualizations, and managed a blended prime team through disciplined Agile delivery.",
    value: "SEC users received more reliable, accessible, and maintainable analytical products for internal decisions and public regulatory information, supported by platform modernization, accessibility, and sustained product operations."
  },
  {
    id: "governance",
    order: "50310224F0174",
    awardHref: "https://orangeslices.ai/peregrine-beats-out-3-to-win-sec-data-governance-and-management-services-support/",
    title: "Data Governance",
    summary: "Enterprise policy, data governance and compliance processes, metadata, dataset-risk methods, data-use assessments, legal analysis, and program management.",
    categories: ["Quality", "Schedule", "Cost Control", "Management", "Regulatory Compliance"],
    pastPerformance: "Peregrine supported Paperwork Reduction Act work, enterprise data policies, governance processes, metadata management, dataset-risk methods, and ongoing assessments of data usage.",
    value: "The work strengthened enterprise policy, review, metadata, risk, and compliance practices so SEC data could be governed, understood, and used through repeatable institutional processes."
  }
];
const quotations = {
  pcaobStrategy: {
    text: "Peregrine brings a unique implementation-oriented perspective on strategy development that has proven to be very valuable for PCAOB. Peregrine was able to discern the optimal strategic path for the Board during a time of much change. We have been very happy with the engagement and are very excited to have Peregrine implement the AI and Data Strategy for the Board.",
    speaker: "Pooja Sangwan",
    role: "Chief of Staff, Office of Technology, PCAOB"
  },
  pcaobDelivery: {
    text: "Peregrine has been refreshing. A delivery-first consulting firm that works with us to drive our mission, Peregrine is staffed by some of the best professionals I have worked with who are deeply committed to making a difference.",
    speaker: "Ahmed Aboulnaga",
    role: "Director of Data, PCAOB"
  },
  secDelivery: {
    text: "Peregrine has been outstanding on this engagement, providing high-quality resources and services in a timely fashion, going above and beyond to execute a program comprising multiple complex, multifaceted and challenging projects.",
    speaker: "Julia Gallmon",
    role: "SEC Assessing Official and Contracting Officer",
    context: "Verified in the approved Phase 5 quotation set and SEC CAT past-experience evidence. It appears with the SEC prime-delivery argument."
  },
  secInnovation: {
    text: "Peregrine was instrumental in supporting the CAT work that led to the Chair's Analytical Innovations Award. The OCDO / OIT / Peregrine team did stellar work and should be proud.",
    speaker: "Austin Gerig, PhD",
    role: "SEC Chief Data Officer",
    context: "Verified in the approved Phase 5 quotation set and SEC CAT past-experience evidence. The quotation retains the documented OCDO, OIT, and Peregrine team attribution."
  },
  secRecommendation: {
    text: "Peregrine has been top-notch in providing high-quality resources in a timely fashion, executing on complex and difficult projects, being flexible when required, and going over and above to ensure the mission of my office and the SEC is not compromised. I am extremely happy with their support and fully recommend them to others.",
    speaker: "Austin Gerig",
    role: "SEC Office of the Chief Data Officer"
  },
  ceebit: {
    text: "[Ceebit] is a great testament to the Inadev team’s hard work helping IRS develop a prototype app that can potentially improve the taxpayer experience…",
    speaker: "Mitchell D. Winans",
    role: "Senior Advisor, Enterprise Digitalization Office (at the time of the project)"
  },
  ddotCulture: {
    text: "The results are clear: better solutions, increased collaboration, faster implementation, and a cultural shift towards embracing data as a strategic asset.",
    speaker: "Dr. Khaled Falah",
    role: "Chief Information Officer, DDOT",
    context: "Approved for DDOT human-centered transformation experience. The quotation supports collaboration, implementation, and data-culture outcomes."
  },
  ddotModernization: {
    text: "Peregrine has provided DDOT with outstanding levels of support... assisting with gap identification, business process redesign, and integral work to the mission of OCIO in modernizing both our systems and our processes.",
    speaker: "Charnita Allen",
    role: "Acting Chief Information Officer, DDOT",
    context: "Verified through the supplied DDOT past-performance evidence and approved quotation set. The ellipsis is retained from the approved public wording."
  },
  fda: {
    text: "Peregrine's data science and engineering capabilities are excellent. They know how to balance security with usability while optimally leveraging AWS [cloud], Zero Trust, and FDA-related data security protocols.",
    speaker: "Karthik Murugesan",
    role: "Chief Executive Officer, ARC (Prime for FDA)",
    context: "Approved for FDA secure AI and cloud experience. FDA FiDLE remains described as documented subcontract delivery, and the quotation preserves teaming-partner attribution."
  }
};
const dcaaProfile = {
  mission: "DCAA provides independent audit and financial expertise to ensure accountability, transparency, and trust in defense contracting. The agency supports DoW and other federal customers by examining contractor costs, advising procurement teams, and strengthening confidence that public funds are used effectively.",
  scale: [
    { value: "$788.4B", label: "Contract costs examined in FY2025" },
    { value: "$5.3B", label: "Audit services savings in FY2025" },
    { value: "$7.5:1", label: "Return for every dollar invested" },
    { value: "~9,000", label: "Contractors within agency oversight" },
    { value: "~10,000", label: "Products issued each year" },
    { value: "$633.0M", label: "FY2026 budget request" }
  ],
  priorities: [
    { number: "01", title: "Optimize value and customer service", body: "Improve the timeliness, relevance, and mission value of audit and financial advisory services for strategic partners." },
    { number: "02", title: "Cultivate a premier and multi-talented workforce", body: "Equip a distributed workforce with modern skills, consistent methods, and technology that strengthens professional judgment." },
    { number: "03", title: "Capitalize on technological innovation", body: "Modernize data, analytics, systems, and operating practices to increase insight, consistency, and enterprise performance." }
  ],
  organization: [
    "Headquarters, Inspector General, Operations, and Equal Employment Opportunity functions",
    "Land, Sea, Air, and Centralized Audit Function directorates",
    "Transition toward 23 hub locations while maintaining presence at key contractor sites",
    "Support for DoW buying commands and other federal customers across the contract lifecycle"
  ],
  technology: [
    { title: "Enterprise data foundation", body: "Expand the lake and lakehouse, improve enterprise access, and standardize reusable data products across distributed operations." },
    { title: "Analytics and controlled AI", body: "Use data-driven insights, AI and LLM-enabled targeted reviews, and GenAI guardrails while preserving audit independence and human judgment." },
    { title: "Modern architecture and tools", body: "Streamline tools and processes, modernize IT architecture, and strengthen integration, cybersecurity, governance, and operational resilience." },
    { title: "Workforce enablement", body: "Give auditors and leaders role-relevant access, transparent measures, training, and analytical services that are usable across hubs and contractor locations." }
  ],
  operatingContext: [
    "Audit workload follows DoW procurement funding with a time lag created by contract execution and closeout.",
    "DCAA targets completion of incurred-cost audits within 12 months of an adequate submission.",
    "The hub model increases the importance of consistent enterprise data, shared analytical services, and role-relevant access.",
    "Technology must augment professional judgment, preserve traceability, and operate within agency governance and security controls."
  ],
  sources: [
    { label: "DCAA Strategic Plan 2026–2030", href: "https://www.dcaa.mil/LinkClick.aspx?fileticket=6FCylWg8-6c%3D&tabid=5867&portalid=88" },
    { label: "DCAA 2026 agency overview", href: "https://www.dcaa.mil/Portals/88/2026%20one%20pager%20about%20DCAA%200312.pdf" },
    { label: "DCAA hub transition", href: "https://www.dcaa.mil/Agency-News/Article-View/Article/4464731/dcaa-announces-hub-locations/" }
  ]
};
const azureCases = [
  {
    id: "pcaob",
    eyebrow: "Financial regulation",
    client: "PCAOB",
    title: "Enterprise data strategy carried into managed Azure implementation",
    summary: "Peregrine developed the Enterprise Data Strategy across governance, access management, enterprise ETL, the enterprise data hub, master and critical data, analytics, GenAI, and implementation priorities. With documented leadership support, Peregrine is leading implementation of Enterprise Data as a Managed Service in Azure.",
    pastPerformance: ["Governance, decision rights, stewardship, access, and critical-data management", "Enterprise data hub and ingestion-factory capabilities", "Self-service analytics and reusable analytical services", "Predictive-risk models and AI-enabled workflows", "Managed operating practices and knowledge transfer"],
    relevance: "Direct financial-regulatory mission context, Azure implementation, enterprise-data strategy, governance, ingestion, self-service analysis, predictive analytics, AI, and strategy-to-production continuity."
  },
  {
    id: "ddot",
    eyebrow: "Mission operations",
    client: "DDOT",
    title: "Azure data products and governance applied to safety, mobility, and resident outcomes",
    summary: "Peregrine helped DDOT modernize in Azure and embed data and AI into mission services through enterprise data warehouses and pipelines, governance, mobility and geospatial analytics, human-centered products, and sustained adoption.",
    pastPerformance: ["Azure warehouses, pipelines, and TOPS 2.0 modernization", "DDOT's first Data Governance Council and implemented Data Policy", "Digital Asset Catalog architecture", "Vision Zero, geospatial, and dockless-mobility analytics", "Parking-space optimization for residents", "Human-centered design, Agile delivery, and data-culture change"],
    relevance: "Azure engineering, multiple-source integration, mission analytics, optimization, dashboards, human-centered products, governance, adoption, and sustained transformation."
  }
];
const supportingPortfolio = [
  { client: "SEC growth and prime performance", cloud: "AWS", body: "Peregrine began at the SEC as a subcontractor and grew into an award-winning, high-performing AI and data prime with all-Exceptional CPARS and a footprint across five divisions and offices. The firm is known for innovative, disruptive, and breakthrough programs that it envisioned and pursued for the agency, creating substantial mission value." },
  { client: "FDA FiDLE", cloud: "AWS", body: "Documented subcontract delivery across AI and ML, data engineering, cloud architecture, data security, Zero Trust, enterprise reporting, and production support." },
  { client: "NYDFS", cloud: "Financial regulation", body: "Peregrine developed and implemented a digital-asset policy framework and strengthened data governance supporting supervisory decisions." },
  { client: "Private-sector and internal products", cloud: "Google Cloud", body: "Economic consulting and internal product development demonstrate portable data science, product engineering, and method independence." }
];
const cloudPaths = [
  { cloud: "Azure", evidence: "PCAOB and DDOT", value: "Direct enterprise-data, analytical-product, governance, and implementation experience." },
  { cloud: "AWS", evidence: "SEC and FDA", value: "High-volume regulatory data, secure AI, pipeline engineering, analytical services, and production operations." },
  { cloud: "Google Cloud", evidence: "Private-sector and internal products", value: "Portable product engineering, data science, modern development, and method independence." }
];
const team = [
  { number: "01", initials: "SK", name: "Sarosh R. Khan", companyTitle: "Founder and Chief Executive Officer", role: "Executive Sponsor", education: "M.P.A., Harvard University; B.S. in Economics, Northeastern University", profile: "Sarosh founded Peregrine and leads executive strategy, client alignment, enterprise transformation, and mission-value delivery across regulated federal, economic, and data and AI environments.", contribution: "Executive alignment, senior stakeholder engagement, institutional barrier removal, escalation, client-value assurance, and accountable prime leadership.", coverage: "Capabilities 1, 7, 8, and 9", pastPerformance: "SEC, PCAOB, DDOT, and other mission organizations.", quote: "DCAA's mission protects the integrity of federal spending and public trust. Peregrine can help create greater mission value from enterprise information while preserving audit rigor, independence, and human judgment." },
  { number: "02", initials: "RS", name: "Rajesh Sripada", companyTitle: "Enterprise Data Architect", role: "Program Manager and Enterprise Architecture Lead", education: "M.S. in Applied Information Technology, Towson University", profile: "Rajesh is an enterprise data architect with more than three decades across architecture, cloud strategy, engineering, financial and accounting data, AI-enabled analytics, and federal delivery.", contribution: "Day-to-day program integration, target architecture, transition states, technical roadmap, dependencies, schedule, risk, and stakeholder coordination.", coverage: "Capabilities 1–3 and 5–9", pastPerformance: "FDA data work, PCAOB strategy, and modern enterprise-data environments.", quote: "DCAA's evolving organizational model requires architecture that remains practical across locations, traceable across systems, and tied to mission use. The lakehouse can connect current and legacy information into one durable delivery path." },
  { number: "03", initials: "EG", name: "Erik Garbacik, PhD", companyTitle: "Principal Data Scientist", role: "Technical Quality and Acceptance Lead", education: "Ph.D. in Applied Physics, University of Twente", profile: "Erik brings advanced quantitative modeling, applied physics, data science, cloud modernization, technical review, and SEC and DDOT mission experience.", contribution: "Independent technical review, analytical integrity, quality assurance, testing, reproducibility, deficiency resolution, and architecture and model review.", coverage: "Capabilities 1, 2, 4, 5, 7, and 9", pastPerformance: "Scientific reasoning, analytical-product development, acceptance strategy, Agile delivery, and SEC experience.", quote: "DCAA's analytical conclusions must be reproducible, explainable, and supported by traceable records. Strong quality and acceptance discipline will help every capability withstand serious audit scrutiny." },
  { number: "04", initials: "SS", name: "Steve Schluchter, PhD", companyTitle: "Data Scientist", role: "Lead Data Scientist and Responsible AI Lead", education: "Ph.D. in Mathematics, The George Washington University", profile: "Steve is a mathematician and data scientist with experience in computational mathematics, graph theory, machine learning, secure data engineering, pipeline optimization, and regulated federal analytics.", contribution: "Analytical methodology, model baselines, validation, explainability, responsible AI, secure analytical workflows, and limitation reporting.", coverage: "Capabilities 2–7 and 9", pastPerformance: "Statistical modeling, feature engineering, model validation, analytical design, federal software engineering, and cloud data science.", quote: "DCAA is an ideal mission for rigorous, human-centered analytics and carefully governed AI that augments expert judgment without hiding assumptions, uncertainty, or limitations." },
  { number: "05", initials: "NK", name: "Nick Kiritz, CFA, FRM", companyTitle: "Chief Implementation Officer", role: "Strategy, Governance, and Implementation Lead", education: "MBA in Finance, University of California, Berkeley; B.A. in Economics", profile: "Nick brings approximately 30 years across financial risk, internal control, regulatory compliance, governance, implementation strategy, and executive advisory work.", contribution: "Strategy-to-implementation alignment, governance, operating model, decision rights, prioritization, benefits realization, and executive implementation discipline.", coverage: "Capabilities 1, 3, 4, 6, 8, and 9", pastPerformance: "Experience associated with SEC, OCC, Fannie Mae, McKinsey, and federal mission organizations.", quote: "DCAA's technology transformation can align investment, governance, controls, and implementation around measurable mission value while preserving durable agency ownership." },
  { number: "06", initials: "DR", name: "Dean Ritz", companyTitle: "Chief Data Policy Advisor", role: "Federal Data Policy Lead", education: "M.A. in Philosophy, University of Montana; B.A. in Liberal Arts, Hampshire College", profile: "Dean brings nearly four decades across federal data policy, semantic standards, structured reporting, knowledge engineering, machine-readable information, and enterprise technology.", contribution: "Federal policy alignment, data access and use rules, semantic interoperability, machine-readable financial information, standards, metadata policy, and governance logic.", coverage: "Capabilities 1, 3, 4, 6, 8, and 9", pastPerformance: "SEC Financial Data Transparency Act implementation, Data Foundation leadership, structured-data strategy, and machine-readable reporting.", quote: "DCAA sits at the center of federal financial accountability, where policy, standards, interoperability, and traceable information must translate into practical rules for access, use, and sharing." }
];
const inadevTeam = [
  { name: "Manish Agarwal", role: "Chief Executive Officer", value: "Corporate leadership and access to specialized federal engineering resources." },
  { name: "Paul Matteucci", role: "Federal Partner", value: "Federal modernization, financial-agency context, and stakeholder alignment." },
  { name: "Vikrant Binjrajka", role: "Founder and Chief Technology Officer", value: "Cloud-native engineering, AI-enabled delivery, and Ceebit technical direction." },
  { name: "Jitesh Sachdev", role: "Founder and President", value: "Enterprise product, engineering-delivery, and organizational scaling." }
];
const phaseLabels = {
  foundation: "Use the Data",
  intelligence: "Extract Intelligence",
  delivery: "Enable Delivery"
};
function moveTo(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
  window.setTimeout(() => {
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }, reducedMotion ? 0 : 360);
}
function SectionHeader({ index, eyebrow, title, intro, dark = false }) {
  return /* @__PURE__ */ jsxs("header", { className: `section-header ${dark ? "section-header-dark" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "section-index", "aria-hidden": "true", children: index }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { children: title }),
      /* @__PURE__ */ jsx("p", { className: "section-intro", children: intro })
    ] })
  ] });
}
function ContextTooltip({ label, context, dark = false }) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  return /* @__PURE__ */ jsxs("span", { className: `context-tooltip ${dark ? "context-tooltip-dark" : ""}`, onMouseLeave: () => setOpen(false), children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "context-trigger",
        "aria-label": `More verified context for ${label}`,
        "aria-expanded": open,
        "aria-describedby": open ? tooltipId : void 0,
        onMouseEnter: () => setOpen(true),
        onFocus: () => setOpen(true),
        onBlur: () => setOpen(false),
        onClick: () => setOpen(true),
        onKeyDown: (event) => {
          if (event.key === "Escape") setOpen(false);
        },
        children: /* @__PURE__ */ jsx(Info, { "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ jsxs("span", { id: tooltipId, role: "tooltip", className: `context-panel ${open ? "open" : ""}`, children: [
      /* @__PURE__ */ jsx("strong", { children: label }),
      /* @__PURE__ */ jsx("span", { children: context })
    ] })
  ] });
}
function EvidenceQuote({ text, speaker, role, context, dark = false }) {
  return /* @__PURE__ */ jsxs("figure", { className: `evidence-quote ${dark ? "evidence-quote-dark" : ""}`, children: [
    /* @__PURE__ */ jsx(Quote, { "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("blockquote", { children: [
      "“",
      text,
      "”"
    ] }),
    /* @__PURE__ */ jsxs("figcaption", { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: speaker }),
        /* @__PURE__ */ jsx("span", { children: role })
      ] }),
      context && /* @__PURE__ */ jsx(ContextTooltip, { label: `${speaker} quotation context`, context, dark })
    ] })
  ] });
}
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [activeMap, setActiveMap] = useState("foundation");
  const [activeLayer, setActiveLayer] = useState(foundationLayers[0].id);
  const [activeProduct, setActiveProduct] = useState(products[0].id);
  const [activeCapability, setActiveCapability] = useState(capabilities[0].id);
  const [activeSec, setActiveSec] = useState(secWorkstreams[0].id);
  const [activePerson, setActivePerson] = useState(team[0].name);
  const [announcement, setAnnouncement] = useState("");
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const activePhase = useMemo(() => {
    const item = navigation.find((entry) => entry.id === activeSection);
    return item?.phase ?? "foundation";
  }, [activeSection]);
  const selectedLayer = foundationLayers.find((layer) => layer.id === activeLayer) ?? foundationLayers[0];
  const selectedProduct = products.find((product) => product.id === activeProduct) ?? products[0];
  const selectedCapability = capabilities.find((capability) => capability.id === activeCapability) ?? capabilities[0];
  const selectedSec = secWorkstreams.find((workstream) => workstream.id === activeSec) ?? secWorkstreams[0];
  const selectedPerson = team.find((person) => person.name === activePerson) ?? team[0];
  const selectedMap = mentalMap.find((item) => item.id === activeMap) ?? mentalMap[0];
  useEffect(() => {
    const sections = navigation.map((item) => document.getElementById(item.id)).filter((item) => Boolean(item));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -66% 0px", threshold: [0, 0.2, 0.6] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = menu?.querySelectorAll("a[href], button:not([disabled])");
    focusable?.[0]?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);
  const navigate = (id) => {
    setMenuOpen(false);
    moveTo(id);
  };
  const selectState = (message, setter, value) => {
    setter(value);
    setAnnouncement(message);
  };
  return /* @__PURE__ */ jsxs("div", { className: "site-shell", children: [
    /* @__PURE__ */ jsx("a", { className: "skip-link", href: "#main-content", children: "Skip to main content" }),
    /* @__PURE__ */ jsx("p", { className: "sr-only", "aria-live": "polite", children: announcement }),
    /* @__PURE__ */ jsxs("header", { className: "site-header", children: [
      /* @__PURE__ */ jsx("div", { className: "utility-bar", children: /* @__PURE__ */ jsxs("div", { className: "page-frame utility-inner", children: [
        /* @__PURE__ */ jsx("span", { children: "Peregrine for DCAA" }),
        /* @__PURE__ */ jsx("span", { children: "Enterprise audit intelligence" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "page-frame header-inner", children: [
        /* @__PURE__ */ jsx("a", { className: "brand", href: "#top", "aria-label": "Peregrine for DCAA home", onClick: (event) => {
          event.preventDefault();
          navigate("top");
        }, children: /* @__PURE__ */ jsx("img", { src: assets.logo, alt: "Peregrine Advisors" }) }),
        /* @__PURE__ */ jsx("nav", { className: "desktop-nav", "aria-label": "Primary navigation", children: navigation.map((item) => /* @__PURE__ */ jsx("a", { href: `#${item.id}`, className: activeSection === item.id ? "active" : "", "aria-current": activeSection === item.id ? "location" : void 0, onClick: (event) => {
          event.preventDefault();
          navigate(item.id);
        }, children: item.label }, item.id)) }),
        /* @__PURE__ */ jsxs("a", { className: "header-action", href: "mailto:operations@peregrineadvisors.com?subject=DCAA%20interested%20in%20Peregrine%20Advisors", children: [
          "Discuss the opportunity ",
          /* @__PURE__ */ jsx(ArrowRight, { "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ jsx("button", { ref: menuButtonRef, type: "button", className: "menu-trigger", "aria-expanded": menuOpen, "aria-controls": "mobile-menu", "aria-label": menuOpen ? "Close navigation" : "Open navigation", onClick: () => setMenuOpen((open) => !open), children: menuOpen ? /* @__PURE__ */ jsx(X, { "aria-hidden": "true" }) : /* @__PURE__ */ jsx(Menu, { "aria-hidden": "true" }) })
      ] }),
      menuOpen && /* @__PURE__ */ jsx("div", { className: "mobile-menu-backdrop", children: /* @__PURE__ */ jsxs("div", { ref: menuRef, id: "mobile-menu", className: "mobile-menu", role: "dialog", "aria-modal": "true", "aria-label": "Site navigation", children: [
        /* @__PURE__ */ jsxs("div", { className: "mobile-menu-head", children: [
          /* @__PURE__ */ jsx("img", { src: assets.logo, alt: "Peregrine Advisors" }),
          /* @__PURE__ */ jsx("button", { type: "button", "aria-label": "Close navigation", onClick: () => {
            setMenuOpen(false);
            menuButtonRef.current?.focus();
          }, children: /* @__PURE__ */ jsx(X, { "aria-hidden": "true" }) })
        ] }),
        /* @__PURE__ */ jsx("nav", { "aria-label": "Mobile navigation", children: navigation.map((item, index) => /* @__PURE__ */ jsxs("a", { href: `#${item.id}`, "aria-current": activeSection === item.id ? "location" : void 0, onClick: (event) => {
          event.preventDefault();
          navigate(item.id);
        }, children: [
          /* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
          item.label,
          /* @__PURE__ */ jsx(ArrowRight, { "aria-hidden": "true" })
        ] }, item.id)) }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Use the data ",
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" }),
          " Extract the intelligence ",
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" }),
          " Enable delivery"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("aside", { className: "phase-rail", "aria-label": "Current narrative phase", children: Object.keys(phaseLabels).map((phase, index) => /* @__PURE__ */ jsxs("a", { href: phase === "foundation" ? "#foundation" : phase === "intelligence" ? "#intelligence" : "#sec", className: activePhase === phase ? "active" : "", "aria-current": activePhase === phase ? "step" : void 0, onClick: (event) => {
      event.preventDefault();
      navigate(phase === "foundation" ? "foundation" : phase === "intelligence" ? "intelligence" : "sec");
    }, children: [
      /* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
      phaseLabels[phase]
    ] }, phase)) }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { id: "top", className: "hero-section", "aria-labelledby": "hero-title", children: [
        /* @__PURE__ */ jsx("div", { className: "hero-image", "aria-hidden": "true", children: /* @__PURE__ */ jsx("img", { src: assets.hero, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: "hero-grid", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "page-frame hero-layout", children: [
          /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
            /* @__PURE__ */ jsx("p", { className: "hero-kicker", children: "Driving mission value for DCAA" }),
            /* @__PURE__ */ jsx("h1", { id: "hero-title", children: "Enterprise audit intelligence for trusted history, predictive planning, and comparable contractor-cost insight." }),
            /* @__PURE__ */ jsx("p", { className: "hero-lead", children: "Peregrine brings financial-regulatory mission fluency, all-Exceptional SEC prime performance on AI and data contracts, and Azure strategy-through-production delivery at PCAOB and DDOT to DCAA's Azure Databricks lakehouse." }),
            /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
              /* @__PURE__ */ jsxs("button", { type: "button", className: "primary-action", onClick: () => navigate("alignment"), children: [
                "Explore DCAA alignment ",
                /* @__PURE__ */ jsx(ArrowDown, { "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsxs("button", { type: "button", className: "secondary-action", onClick: () => navigate("sec"), children: [
                "Our past performance ",
                /* @__PURE__ */ jsx(ArrowRight, { "aria-hidden": "true" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hero-decision-field", "aria-label": "Three connected DCAA intended products", children: [
            /* @__PURE__ */ jsx("p", { className: "field-label", children: "One enterprise data source: DCAA lakehouse" }),
            products.map((product, index) => /* @__PURE__ */ jsxs("button", { type: "button", className: activeProduct === product.id ? "active" : "", "aria-pressed": activeProduct === product.id, "aria-controls": "hero-product-context", onClick: () => selectState(`${product.title} selected`, setActiveProduct, product.id), children: [
              /* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsx("strong", { children: product.title })
            ] }, product.id)),
            /* @__PURE__ */ jsxs("div", { id: "hero-product-context", className: "hero-product-context", "aria-live": "polite", children: [
              /* @__PURE__ */ jsx("span", { children: "DCAA intended product" }),
              /* @__PURE__ */ jsx("p", { children: selectedProduct.decision }),
              /* @__PURE__ */ jsx("strong", { children: selectedProduct.experience }),
              /* @__PURE__ */ jsxs("a", { href: "#intelligence", onClick: (event) => {
                event.preventDefault();
                navigate("intelligence");
              }, children: [
                "Review this DCAA intended product ",
                /* @__PURE__ */ jsx(ArrowRight, { "aria-hidden": "true" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "field-spine", "aria-hidden": "true" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "performance-strip", children: /* @__PURE__ */ jsx("div", { className: "page-frame performance-strip-inner", children: heroPastPerformance.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("strong", { children: item }),
          /* @__PURE__ */ jsx(ContextTooltip, { label: item, context: evidenceContexts.hero[index], dark: true })
        ] }, item)) }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "peregrine-introduction", "aria-labelledby": "peregrine-intro-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame peregrine-introduction-layout", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: peregrineIntroduction.eyebrow }),
          /* @__PURE__ */ jsx("h2", { id: "peregrine-intro-title", children: peregrineIntroduction.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: peregrineIntroduction.body }),
          /* @__PURE__ */ jsx("ul", { children: peregrineIntroduction.details.map((detail) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
            detail
          ] }, detail)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "alignment", className: "section alignment-section", "aria-labelledby": "alignment-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsx(SectionHeader, { index: "01", eyebrow: "Immediate acquisition relevance", title: "Mission-driven DCAA intended outcomes, Peregrine capabilities, and past performance", intro: "The matrix below provides a complete view of Peregrine's intended delivery, our approach to the solution, and relevant experience." }),
        /* @__PURE__ */ jsx("div", { className: "matrix-desktop", children: /* @__PURE__ */ jsxs("table", { children: [
          /* @__PURE__ */ jsx("caption", { className: "sr-only", children: "DCAA intended outcomes mapped to Peregrine capabilities and relevant past performance" }),
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "col", children: "DCAA intended outcome" }),
            /* @__PURE__ */ jsx("th", { scope: "col", children: "Peregrine capability and approach" }),
            /* @__PURE__ */ jsx("th", { scope: "col", children: "Relevant past performance" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: matrixRows.map((row, index) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsxs("td", { children: [
              /* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsx("strong", { children: row.outcome })
            ] }),
            /* @__PURE__ */ jsx("td", { children: row.response }),
            /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: row.pastPerformance }) })
          ] }, row.outcome)) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "matrix-mobile", "aria-label": "DCAA alignment matrix", children: matrixRows.map((row, index) => /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { className: "matrix-card-number", children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: "DCAA intended outcome" }),
            /* @__PURE__ */ jsx("h3", { children: row.outcome })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: "Peregrine capability and approach" }),
            /* @__PURE__ */ jsx("span", { children: row.response })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: "Relevant past performance" }),
            /* @__PURE__ */ jsx("span", { children: row.pastPerformance })
          ] })
        ] }, row.outcome)) }),
        /* @__PURE__ */ jsxs("section", { className: "pdsa-method", "aria-labelledby": "pdsa-title", children: [
          /* @__PURE__ */ jsxs("div", { className: "pdsa-copy", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: pdsaMethod.eyebrow }),
            /* @__PURE__ */ jsx("h3", { id: "pdsa-title", children: pdsaMethod.title }),
            /* @__PURE__ */ jsx("p", { children: pdsaMethod.body }),
            /* @__PURE__ */ jsx("div", { className: "pdsa-stages", children: pdsaMethod.stages.map((stage) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { children: stage.id }),
              /* @__PURE__ */ jsx("strong", { children: stage.title }),
              /* @__PURE__ */ jsx("p", { children: stage.body })
            ] }, stage.id)) })
          ] }),
          /* @__PURE__ */ jsx("figure", { children: /* @__PURE__ */ jsx("img", { src: assets.pdsa, alt: "Peregrine Design, Systems, and Agile method moving from problem identification through experimentation to iterative implementation" }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "artifact-browser", "aria-labelledby": "artifact-browser-title", children: [
          /* @__PURE__ */ jsx("div", { className: "artifact-browser-heading", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx(ChartNoAxesCombined, { "aria-hidden": "true" }),
              " Past performance"
            ] }),
            /* @__PURE__ */ jsx("h3", { id: "artifact-browser-title", children: "Explore mission-driven work at clients with needs similar to DCAA" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "artifact-grid", children: pastPerformanceArtifacts.map((artifact) => /* @__PURE__ */ jsxs("article", { className: "artifact-folio", children: [
            /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("p", { children: artifact.source }) }),
            /* @__PURE__ */ jsx("h4", { children: artifact.title }),
            /* @__PURE__ */ jsx("p", { children: artifact.summary }),
            /* @__PURE__ */ jsx("div", { children: artifact.categories.map((category) => /* @__PURE__ */ jsx("span", { children: artifactCategories.find((item) => item.id === category)?.label }, category)) })
          ] }, artifact.id)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "mental-map", className: "section mental-map-section", "aria-labelledby": "mental-map-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsx(SectionHeader, { index: "02", eyebrow: "DCAA background and approach", title: "Use the data. Extract the intelligence. Enable delivery.", intro: "Three connected actions organize DCAA's data, analytical, and delivery requirements." }),
        /* @__PURE__ */ jsxs("div", { className: "mental-map-layout", children: [
          /* @__PURE__ */ jsxs("div", { className: "mental-map-main", children: [
            /* @__PURE__ */ jsx("div", { className: "mental-map-controls", role: "group", "aria-label": "Three-part mental map", children: mentalMap.map((item) => /* @__PURE__ */ jsxs("button", { type: "button", className: activeMap === item.id ? "active" : "", "aria-pressed": activeMap === item.id, onClick: () => selectState(`${item.title} selected`, setActiveMap, item.id), children: [
              /* @__PURE__ */ jsx("span", { children: item.number }),
              /* @__PURE__ */ jsx("small", { children: item.label }),
              /* @__PURE__ */ jsx("strong", { children: item.title }),
              /* @__PURE__ */ jsx("p", { children: item.body }),
              /* @__PURE__ */ jsx("p", { className: "mental-map-detail", children: item.detail })
            ] }, item.id)) }),
            /* @__PURE__ */ jsx("div", { className: "mental-map-quote", children: /* @__PURE__ */ jsx(EvidenceQuote, { ...lidoQuotation }) })
          ] }),
          /* @__PURE__ */ jsxs("aside", { className: "alignment-rail", "aria-live": "polite", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Connection to DCAA requirements" }),
            /* @__PURE__ */ jsxs("div", { className: "alignment-statement", children: [
              /* @__PURE__ */ jsx(Target, { "aria-hidden": "true" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { children: selectedMap.label }),
                /* @__PURE__ */ jsx("strong", { children: selectedMap.title })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("dl", { className: "alignment-analysis", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "DCAA data lakehouse requirements focus" }),
                /* @__PURE__ */ jsx("dd", { children: selectedMap.requirementsFocus })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Requested mission outcome" }),
                /* @__PURE__ */ jsx("dd", { children: selectedMap.request })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Why it matters" }),
                /* @__PURE__ */ jsx("dd", { children: selectedMap.value })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "official-links", children: officialLinks.map((link) => /* @__PURE__ */ jsxs("a", { href: link.href, target: "_blank", rel: "noreferrer", children: [
              link.label,
              /* @__PURE__ */ jsx(ExternalLink, { "aria-hidden": "true" })
            ] }, link.href)) }),
            /* @__PURE__ */ jsx("p", { className: "hub-context", children: "DCAA's transition to 23 hub locations increases the value of consistent enterprise data, reusable analytical services, and role-relevant access across distributed operations." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "foundation", className: "section foundation-section", "aria-labelledby": "foundation-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsx(SectionHeader, { index: "03", eyebrow: "Use the data", title: "Build a foundation that preserves history, meaning, and evidence.", intro: "Peregrine connects source context, historical structures, governed semantic layers, machine-readable metadata, lineage, analytical models, and operating controls into an AI-ready Azure Databricks decision platform.", dark: true }),
        /* @__PURE__ */ jsxs("div", { className: "foundation-explorer", children: [
          /* @__PURE__ */ jsx("div", { className: "foundation-layers", role: "group", "aria-label": "Trusted foundation layers", children: foundationLayers.map((layer) => /* @__PURE__ */ jsxs("button", { type: "button", className: activeLayer === layer.id ? "active" : "", "aria-pressed": activeLayer === layer.id, onClick: () => selectState(`${layer.title} selected`, setActiveLayer, layer.id), children: [
            /* @__PURE__ */ jsx("span", { children: layer.number }),
            /* @__PURE__ */ jsx("strong", { children: layer.title }),
            /* @__PURE__ */ jsx("small", { children: layer.summary })
          ] }, layer.id)) }),
          /* @__PURE__ */ jsxs("article", { className: "foundation-detail", "aria-live": "polite", children: [
            /* @__PURE__ */ jsxs("div", { className: "detail-marker", children: [
              /* @__PURE__ */ jsx(Database, { "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("span", { children: selectedLayer.number })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Selected layer" }),
            /* @__PURE__ */ jsx("h3", { children: selectedLayer.title }),
            /* @__PURE__ */ jsx("p", { children: selectedLayer.detail }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Relevant past performance ",
                /* @__PURE__ */ jsx(ContextTooltip, { label: `${selectedLayer.title} past performance`, context: evidenceContexts.foundation })
              ] }),
              /* @__PURE__ */ jsx("strong", { children: selectedLayer.pastPerformance })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "foundation-principles", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Fingerprint, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("strong", { children: "Preserve provenance" }),
            /* @__PURE__ */ jsx("span", { children: "Connect every result to source evidence and transformation history." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(ShieldCheck, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("strong", { children: "Apply approved controls" }),
            /* @__PURE__ */ jsx("span", { children: "Work inside DCAA-approved identity, network, repository, security, and release boundaries." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Layers3, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("strong", { children: "Design for AI readiness and reuse" }),
            /* @__PURE__ */ jsx("span", { children: "Build governed semantic layers, machine-readable metadata, retrieval-ready knowledge assets, reusable data products, and documented operating knowledge." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "intelligence", className: "section intelligence-section", "aria-labelledby": "intelligence-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsx(SectionHeader, { index: "04", eyebrow: "Extract the intelligence", title: "Trusted performance history, predictive assignment planning, and comparable contractor-cost intelligence make the lakehouse operational.", intro: "Each DCAA intended product begins with the decision the agency needs to make, then connects the data foundation, analytical method, user experience, acceptance criteria, and relevant Peregrine past performance." }),
        /* @__PURE__ */ jsx("div", { className: "product-selector", role: "group", "aria-label": "Decision-intelligence products", children: products.map((product) => /* @__PURE__ */ jsxs("button", { type: "button", className: activeProduct === product.id ? "active" : "", "aria-pressed": activeProduct === product.id, onClick: () => selectState(`${product.title} selected`, setActiveProduct, product.id), children: [
          /* @__PURE__ */ jsx("span", { children: product.number }),
          /* @__PURE__ */ jsx("strong", { children: product.title }),
          /* @__PURE__ */ jsx("small", { children: product.decision })
        ] }, product.id)) }),
        /* @__PURE__ */ jsxs("article", { className: "product-detail", "aria-live": "polite", children: [
          /* @__PURE__ */ jsxs("div", { className: "product-detail-lead", children: [
            /* @__PURE__ */ jsx("span", { children: selectedProduct.number }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "DCAA intended product" }),
              /* @__PURE__ */ jsx("h3", { children: selectedProduct.title }),
              /* @__PURE__ */ jsx("p", { children: selectedProduct.decision })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "product-journey", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { children: "Data foundation" }),
              /* @__PURE__ */ jsx("p", { children: selectedProduct.foundation })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { children: "Analytical method" }),
              /* @__PURE__ */ jsx("p", { children: selectedProduct.method })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { children: "User experience" }),
              /* @__PURE__ */ jsx("p", { children: selectedProduct.experience })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { children: "Acceptance evidence" }),
              /* @__PURE__ */ jsx("p", { children: selectedProduct.acceptance })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("footer", { children: [
            /* @__PURE__ */ jsx(FileCheck2, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { children: "Relevant Peregrine past performance" }),
            /* @__PURE__ */ jsx("strong", { children: selectedProduct.pastPerformance })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "capabilities", className: "section capabilities-section", "aria-labelledby": "capabilities-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsx(SectionHeader, { index: "05", eyebrow: "Our capabilities", title: "Our capabilities cover the full enterprise data-product lifecycle.", intro: "Nine capabilities span leadership, platform engineering, trusted data, decision products, user adoption, controls, production assurance, and sustainment. Each capability is assessed as Substantially exceeds." }),
        /* @__PURE__ */ jsxs("div", { className: "capability-layout", children: [
          /* @__PURE__ */ jsx("div", { className: "capability-map", role: "group", "aria-label": "Nine-capability explorer", children: ["Deliver", "Decide", "Assure"].map((group) => /* @__PURE__ */ jsxs("div", { className: "capability-group", children: [
            /* @__PURE__ */ jsx("p", { children: group }),
            capabilities.filter((capability) => capability.group === group).map((capability) => /* @__PURE__ */ jsxs("button", { type: "button", className: activeCapability === capability.id ? "active" : "", "aria-pressed": activeCapability === capability.id, onClick: () => selectState(`${capability.title} selected`, setActiveCapability, capability.id), children: [
              /* @__PURE__ */ jsx("span", { children: capability.number }),
              /* @__PURE__ */ jsx("strong", { children: capability.title }),
              /* @__PURE__ */ jsx("small", { children: capability.assessment })
            ] }, capability.id))
          ] }, group)) }),
          /* @__PURE__ */ jsxs("article", { className: "capability-detail", "aria-live": "polite", children: [
            /* @__PURE__ */ jsxs("div", { className: "capability-detail-head", children: [
              /* @__PURE__ */ jsx("span", { children: selectedCapability.number }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "eyebrow", children: selectedCapability.group }),
                /* @__PURE__ */ jsx("h3", { children: selectedCapability.title })
              ] }),
              /* @__PURE__ */ jsx("strong", { className: "assessment", children: selectedCapability.assessment })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "capability-statement", children: selectedCapability.statement }),
            /* @__PURE__ */ jsxs("dl", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "DCAA outcome" }),
                /* @__PURE__ */ jsx("dd", { children: selectedCapability.outcome })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Peregrine methods" }),
                /* @__PURE__ */ jsx("dd", { children: selectedCapability.methods })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Relevant past performance" }),
                /* @__PURE__ */ jsx("dd", { children: selectedCapability.pastPerformance })
              ] }),
              selectedCapability.optional && /* @__PURE__ */ jsxs("div", { className: "optional-detail", children: [
                /* @__PURE__ */ jsx("dt", { children: "Optional innovation" }),
                /* @__PURE__ */ jsxs("dd", { children: [
                  selectedCapability.optional,
                  " ",
                  /* @__PURE__ */ jsxs("a", { href: "#innovation", children: [
                    "View the governed path ",
                    /* @__PURE__ */ jsx(ArrowRight, { "aria-hidden": "true" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "capability-mobile-list", children: capabilities.map((capability) => /* @__PURE__ */ jsxs("details", { children: [
          /* @__PURE__ */ jsxs("summary", { children: [
            /* @__PURE__ */ jsx("span", { children: capability.number }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: capability.title }),
              /* @__PURE__ */ jsx("small", { children: capability.assessment })
            ] }),
            /* @__PURE__ */ jsx(ChevronDown, { "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: capability.statement }),
            /* @__PURE__ */ jsxs("dl", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "DCAA outcome" }),
                /* @__PURE__ */ jsx("dd", { children: capability.outcome })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Peregrine methods" }),
                /* @__PURE__ */ jsx("dd", { children: capability.methods })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Relevant past performance" }),
                /* @__PURE__ */ jsx("dd", { children: capability.pastPerformance })
              ] })
            ] })
          ] })
        ] }, capability.id)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "innovation", className: "section innovation-section", "aria-labelledby": "innovation-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsxs("div", { className: "optional-label", children: [
          /* @__PURE__ */ jsx(Sparkles, { "aria-hidden": "true" }),
          " Optional integrated innovation path"
        ] }),
        /* @__PURE__ */ jsx(SectionHeader, { index: "06", eyebrow: "DCAA-governed evaluation", title: "Optional federal SDLC automation within DCAA's approved ecosystem.", intro: "Through its partnership with Inadev, Peregrine can make Ceebit available through an at-cost evaluation focused on a DCAA-selected internal product-development workflow.", dark: true }),
        /* @__PURE__ */ jsxs("div", { className: "innovation-intro", children: [
          /* @__PURE__ */ jsx("p", { children: "Ceebit is an agentic-AI orchestration tool that coordinates work across approved requirements, code, testing, documentation, security, pipeline, quality, and release systems. It operates through technologies and workflows DCAA authorizes." }),
          /* @__PURE__ */ jsx("p", { children: "DCAA defines the use case, environment, controls, human review gates, measures, and continuation decision. The same delivery pattern can use Ceebit, another approved orchestration tool, or a Peregrine-built capability." })
        ] }),
        /* @__PURE__ */ jsx("ol", { className: "ceebit-flow", children: ceebitSteps.map((step, index) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("span", { children: step.number }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { children: step.title }),
            /* @__PURE__ */ jsx("p", { children: step.body })
          ] }),
          index < ceebitSteps.length - 1 && /* @__PURE__ */ jsx(ArrowRight, { "aria-hidden": "true" })
        ] }, step.number)) }),
        /* @__PURE__ */ jsxs("aside", { className: "innovation-feature", "aria-label": "Verified Inadev federal operating experience", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: "USCIS FINCH Analytics" }),
            /* @__PURE__ */ jsx("p", { children: "Inadev leads the five-year FINCH Analytics program supporting fraud identification through data science, analytics, Agile delivery, DevSecOps, and human-centered design." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: "IRS mission solutions" }),
            /* @__PURE__ */ jsx("p", { children: "Inadev supports the IRS Return Preparer Strategy and an augmented-reality mobile tax-compliance solution. These federal programs demonstrate operating depth and remain distinct from Ceebit product performance." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ceebit-quote", children: /* @__PURE__ */ jsx(EvidenceQuote, { ...quotations.ceebit, dark: true }) }),
        /* @__PURE__ */ jsxs("div", { className: "innovation-controls", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: "Governance" }),
            /* @__PURE__ */ jsx("p", { children: "Least privilege, approved model and tool use, controlled data movement, activity logging, artifact review, and alignment with software and AI governance." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: "Human oversight" }),
            /* @__PURE__ */ jsx("p", { children: "Named reviewers approve requirements, architecture, code, tests, security findings, release artifacts, and production action." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: "DCAA ownership" }),
            /* @__PURE__ */ jsx("p", { children: "DCAA retains code, artifacts, repository history, documentation, configuration knowledge, continuation authority, and technology-selection authority." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: "Federal past performance" }),
            /* @__PURE__ */ jsx("p", { children: "Peregrine and Inadev collaborate on SEC FarPoint. Inadev brings additional USCIS FINCH and IRS operating experience that remains distinct from Ceebit product performance." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { id: "sec", className: "section sec-section", "aria-labelledby": "sec-title", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-art", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("span", {}),
          /* @__PURE__ */ jsx("span", {}),
          /* @__PURE__ */ jsx("span", {})
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
          /* @__PURE__ */ jsx(SectionHeader, { index: "07", eyebrow: "Past performance: creating client value through delivery", title: "Exceptional value across every evaluated category on three SEC prime call orders.", intro: "Peregrine serves as prime across connected data science and use, data visualization, and data governance workstreams, translating complex financial-regulatory data into sustained mission capability.", dark: true }),
          /* @__PURE__ */ jsxs("div", { id: "sec-evaluations", className: "sec-summary", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "ALL" }),
              /* @__PURE__ */ jsx("span", { children: "Exceptional CPARS across current SEC prime call orders" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "3" }),
              /* @__PURE__ */ jsx("span", { children: "Current SEC prime call orders evaluated" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "2018" }),
              /* @__PURE__ */ jsx("span", { children: "SEC delivery continuity progressing to accountable prime leadership" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "sec-workstream-layout", children: [
            /* @__PURE__ */ jsx("div", { className: "sec-tabs", role: "group", "aria-label": "SEC prime workstreams", children: secWorkstreams.map((workstream) => /* @__PURE__ */ jsxs("button", { type: "button", className: activeSec === workstream.id ? "active" : "", "aria-pressed": activeSec === workstream.id, onClick: () => selectState(`${workstream.title} selected`, setActiveSec, workstream.id), children: [
              /* @__PURE__ */ jsx("span", { children: workstream.order }),
              /* @__PURE__ */ jsx("strong", { children: workstream.title }),
              /* @__PURE__ */ jsx("small", { children: "Exceptional in every evaluated category" })
            ] }, workstream.id)) }),
            /* @__PURE__ */ jsxs("article", { className: "sec-detail", "aria-live": "polite", children: [
              /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "SEC prime call order" }),
              /* @__PURE__ */ jsx("h3", { children: selectedSec.title }),
              /* @__PURE__ */ jsxs("a", { className: "sec-award-link", href: selectedSec.awardHref, target: "_blank", rel: "noreferrer", children: [
                "Federal award ",
                selectedSec.order,
                /* @__PURE__ */ jsx(ExternalLink, { "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ jsx("p", { children: selectedSec.summary }),
              /* @__PURE__ */ jsx("div", { className: "rating-grid", children: selectedSec.categories.map((category) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { children: category }),
                /* @__PURE__ */ jsx("strong", { children: "Exceptional" })
              ] }, category)) }),
              /* @__PURE__ */ jsxs("div", { className: "sec-performance", children: [
                /* @__PURE__ */ jsx("span", { children: "Relevant past performance" }),
                /* @__PURE__ */ jsx("p", { children: selectedSec.pastPerformance })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sec-client-value", children: [
                /* @__PURE__ */ jsx("span", { children: "Value created for the client" }),
                /* @__PURE__ */ jsx("p", { children: selectedSec.value })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { id: "sec-testimony", className: "sec-quotes", children: [
            /* @__PURE__ */ jsx(EvidenceQuote, { ...quotations.secDelivery, context: void 0, dark: true }),
            /* @__PURE__ */ jsx(EvidenceQuote, { ...quotations.secInnovation, context: void 0, dark: true })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "prime-note", children: "Peregrine leads a prime team that includes Accenture Federal Services. AWS is also a member of Peregrine's team." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "azure-experience", className: "section azure-section", "aria-labelledby": "azure-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsx(SectionHeader, { index: "08", eyebrow: "Our Azure experience", title: "A common strategic approach created production value for PCAOB and DDOT.", intro: "PCAOB demonstrates financial-regulatory enterprise-data strategy carried into managed Azure implementation. DDOT demonstrates Azure engineering, mission products, governance, and adoption in an operational setting." }),
        /* @__PURE__ */ jsxs("div", { className: "azure-visual", role: "img", "aria-label": "PCAOB financial-regulatory strategy and DDOT mission products connected by a shared Azure delivery spine", children: [
          /* @__PURE__ */ jsxs("div", { className: "azure-field azure-field-left", children: [
            /* @__PURE__ */ jsx("span", { children: "Financial regulation" }),
            /* @__PURE__ */ jsx("strong", { children: "PCAOB" }),
            /* @__PURE__ */ jsx("small", { children: "Strategy · Governance · Managed service" }),
            /* @__PURE__ */ jsx("i", {}),
            /* @__PURE__ */ jsx("i", {}),
            /* @__PURE__ */ jsx("i", {})
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "azure-spine", children: [
            /* @__PURE__ */ jsx(Network, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { children: "Azure delivery spine" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "azure-field azure-field-right", children: [
            /* @__PURE__ */ jsx("span", { children: "Mission operations" }),
            /* @__PURE__ */ jsx("strong", { children: "DDOT" }),
            /* @__PURE__ */ jsx("small", { children: "Data products · Governance · Adoption" }),
            /* @__PURE__ */ jsx("i", {}),
            /* @__PURE__ */ jsx("i", {}),
            /* @__PURE__ */ jsx("i", {})
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "azure-cases", children: azureCases.map((caseStudy) => /* @__PURE__ */ jsxs("article", { id: caseStudy.id, children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: caseStudy.eyebrow }),
          /* @__PURE__ */ jsxs("h3", { children: [
            /* @__PURE__ */ jsx("span", { children: caseStudy.client }),
            caseStudy.title
          ] }),
          /* @__PURE__ */ jsx("p", { children: caseStudy.summary }),
          /* @__PURE__ */ jsx("div", { className: "case-performance-label", children: "Value created for the client" }),
          /* @__PURE__ */ jsx("ul", { children: caseStudy.pastPerformance.map((item) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
            item
          ] }, item)) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: "DCAA relevance" }),
            /* @__PURE__ */ jsx("p", { children: caseStudy.relevance })
          ] }),
          caseStudy.id === "pcaob" && /* @__PURE__ */ jsxs("div", { className: "case-quotes", children: [
            /* @__PURE__ */ jsx(EvidenceQuote, { ...quotations.pcaobStrategy }),
            /* @__PURE__ */ jsx(EvidenceQuote, { ...quotations.pcaobDelivery })
          ] }),
          caseStudy.id === "ddot" && /* @__PURE__ */ jsxs("div", { id: "ddot-testimony", className: "case-quotes", children: [
            /* @__PURE__ */ jsx(EvidenceQuote, { ...quotations.ddotCulture, context: void 0 }),
            /* @__PURE__ */ jsx(EvidenceQuote, { ...quotations.ddotModernization, context: void 0 })
          ] })
        ] }, caseStudy.id)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "portfolio", className: "section portfolio-section", "aria-labelledby": "portfolio-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsx(SectionHeader, { index: "09", eyebrow: "Deep cloud expertise", title: "Secure delivery discipline transfers across missions and clouds.", intro: "Azure provides direct platform experience. AWS demonstrates regulated federal scale and secure AI. Google Cloud demonstrates portability and product-development breadth. Every path flows into DCAA's approved ecosystem.", dark: true }),
        /* @__PURE__ */ jsxs("div", { className: "cloud-layout", children: [
          /* @__PURE__ */ jsxs("div", { className: "cloud-visual", role: "img", "aria-label": "Azure, AWS, and Google Cloud experience converging into DCAA's approved Azure Databricks ecosystem", children: [
            /* @__PURE__ */ jsxs("div", { className: "cloud-stream cloud-stream-azure", children: [
              /* @__PURE__ */ jsx("span", { children: "01" }),
              /* @__PURE__ */ jsx("strong", { children: "Azure" }),
              /* @__PURE__ */ jsx("small", { children: "PCAOB · DDOT" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "cloud-stream cloud-stream-aws", children: [
              /* @__PURE__ */ jsx("span", { children: "02" }),
              /* @__PURE__ */ jsx("strong", { children: "AWS" }),
              /* @__PURE__ */ jsx("small", { children: "SEC · FDA" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "cloud-stream cloud-stream-google", children: [
              /* @__PURE__ */ jsx("span", { children: "03" }),
              /* @__PURE__ */ jsx("strong", { children: "Google Cloud" }),
              /* @__PURE__ */ jsx("small", { children: "Portable product engineering" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "cloud-convergence", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {})
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "cloud-destination", children: [
              /* @__PURE__ */ jsx(Network, { "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("strong", { children: "DCAA" }),
              /* @__PURE__ */ jsx("small", { children: "Approved Azure Databricks ecosystem" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cloud-paths", children: [
            cloudPaths.map((path, index) => /* @__PURE__ */ jsxs("article", { children: [
              /* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsx(Cloud, { "aria-hidden": "true" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { children: path.cloud }),
                /* @__PURE__ */ jsx("strong", { children: path.evidence }),
                /* @__PURE__ */ jsx("p", { children: path.value })
              ] })
            ] }, path.cloud)),
            /* @__PURE__ */ jsxs("article", { className: "dcaa-destination", children: [
              /* @__PURE__ */ jsx("span", { children: "04" }),
              /* @__PURE__ */ jsx(Network, { "aria-hidden": "true" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { children: "DCAA-approved ecosystem" }),
                /* @__PURE__ */ jsx("strong", { children: "Azure Databricks and approved agency controls" }),
                /* @__PURE__ */ jsx("p", { children: "Architecture and delivery grounded in DCAA's environment, security posture, operating model, and ownership requirements." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "supporting-portfolio", children: supportingPortfolio.map((item) => /* @__PURE__ */ jsxs("article", { id: item.client === "FDA FiDLE" ? "fda-fidle" : item.client === "NYDFS" ? "nydfs" : void 0, children: [
          /* @__PURE__ */ jsx("span", { children: item.cloud }),
          /* @__PURE__ */ jsx("h3", { children: item.client }),
          /* @__PURE__ */ jsx("p", { children: item.body })
        ] }, item.client)) }),
        /* @__PURE__ */ jsx("div", { id: "fda-testimony", className: "portfolio-quote", children: /* @__PURE__ */ jsx(EvidenceQuote, { ...quotations.fda, context: void 0, dark: true }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "team", className: "section team-section", "aria-labelledby": "team-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsx(SectionHeader, { index: "10", eyebrow: "Representative solutioning team", title: "Senior depth across mission, platform, DevSecOps, analytics, and governance.", intro: "The representative team brings executive leadership, enterprise architecture, technical quality, responsible AI, implementation, and data-policy depth aligned to DCAA's priorities." }),
        /* @__PURE__ */ jsxs("div", { className: "team-constellation", children: [
          /* @__PURE__ */ jsx("div", { className: "team-controls", role: "group", "aria-label": "Representative Peregrine solutioning team", children: team.map((person) => /* @__PURE__ */ jsxs("button", { type: "button", className: activePerson === person.name ? "active" : "", "aria-pressed": activePerson === person.name, onClick: () => selectState(`${person.name} selected`, setActivePerson, person.name), children: [
            /* @__PURE__ */ jsx("span", { children: person.number }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: person.name }),
              /* @__PURE__ */ jsx("small", { children: person.role })
            ] }),
            /* @__PURE__ */ jsx(ArrowRight, { "aria-hidden": "true" })
          ] }, person.name)) }),
          /* @__PURE__ */ jsxs("article", { className: "person-detail", "aria-live": "polite", children: [
            /* @__PURE__ */ jsxs("div", { className: "person-detail-head", children: [
              /* @__PURE__ */ jsx("div", { className: "person-monogram", "aria-hidden": "true", children: selectedPerson.initials }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "eyebrow", children: selectedPerson.role }),
                /* @__PURE__ */ jsx("h3", { children: selectedPerson.name }),
                /* @__PURE__ */ jsx("span", { children: selectedPerson.companyTitle })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "person-profile", children: selectedPerson.profile }),
            /* @__PURE__ */ jsxs("blockquote", { className: "person-quote", children: [
              /* @__PURE__ */ jsx(Quote, { "aria-hidden": "true" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "Quotation from ",
                selectedPerson.name
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                "“",
                selectedPerson.quote,
                "”"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("dl", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Solution contribution" }),
                /* @__PURE__ */ jsx("dd", { children: selectedPerson.contribution })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Capability coverage" }),
                /* @__PURE__ */ jsx("dd", { children: selectedPerson.coverage })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: "Relevant background" }),
                /* @__PURE__ */ jsx("dd", { children: selectedPerson.pastPerformance })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "education-box", children: [
                /* @__PURE__ */ jsx("dt", { children: "Education" }),
                /* @__PURE__ */ jsx("dd", { children: selectedPerson.education })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "optional-team", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Senior team members from Inadev" }),
            /* @__PURE__ */ jsx("h3", { children: "Specialized federal engineering and innovation depth" }),
            /* @__PURE__ */ jsx("p", { children: "Inadev adds focused federal engineering, cloud-native delivery, and AI-enabled product depth to the integrated team." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "inadev-list", children: inadevTeam.map((person) => /* @__PURE__ */ jsxs("article", { children: [
            /* @__PURE__ */ jsx(Users, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: person.name }),
              /* @__PURE__ */ jsx("span", { children: person.role }),
              /* @__PURE__ */ jsx("p", { children: person.value })
            ] })
          ] }, person.name)) }),
          /* @__PURE__ */ jsxs("a", { href: "#innovation", children: [
            "Review the optional innovation path ",
            /* @__PURE__ */ jsx(ArrowUpRight, { "aria-hidden": "true" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "next-step", className: "section next-step-section", "aria-labelledby": "next-step-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame next-step-layout", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Next steps" }),
          /* @__PURE__ */ jsx("h2", { id: "next-step-title", children: "Bring enterprise audit intelligence into focus." }),
          /* @__PURE__ */ jsx("p", { children: "Peregrine combines relevant financial-regulatory and Azure experience with federal and DoW procurement readiness: SBA 8(a), active SAM.gov registration, CAGE 8DZL0, UEI MJGLSKTGZS68, and GSA Multiple Award Schedule contract 47QTCA23D0028 under SIN 54151S, Information Technology Professional Services." }),
          /* @__PURE__ */ jsxs("a", { className: "primary-action", href: "mailto:operations@peregrineadvisors.com?subject=DCAA%20interested%20in%20Peregrine%20Advisors", children: [
            "Email Peregrine about DCAA ",
            /* @__PURE__ */ jsx(ArrowUpRight, { "aria-hidden": "true" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("aside", { children: [
          /* @__PURE__ */ jsxs("div", { className: "cta-flight-mark", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx("i", {}),
            /* @__PURE__ */ jsx("i", {}),
            /* @__PURE__ */ jsx("i", {})
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Procurement readiness ",
            /* @__PURE__ */ jsx(ContextTooltip, { label: "CMMC documentation", context: "Supporting documentation for CMMC Status: Final Level 2 (C3PAO) is available upon request." })
          ] }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
              "SBA 8(a) prime"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
              "Active SAM.gov registration, CAGE 8DZL0, UEI MJGLSKTGZS68"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
              "GSA MAS 47QTCA23D0028, SIN 54151S"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
              "CMMC Status: Final Level 2 (C3PAO)"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
              "Social enterprise organized as a State of Maryland Benefit Corporation"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
              "All-Exceptional CPARS on current prime contracts"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
              "Sustained record of excellent federal data and technology delivery"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
              "Direct Azure and financial-regulatory experience"
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "understanding", className: "section understanding-section", "aria-labelledby": "understanding-title", children: /* @__PURE__ */ jsxs("div", { className: "page-frame", children: [
        /* @__PURE__ */ jsx(SectionHeader, { index: "Appendix", eyebrow: "Our understanding of DCAA", title: "An audit agency operating at enterprise scale while transforming through data and technology.", intro: dcaaProfile.mission }),
        /* @__PURE__ */ jsx("div", { className: "agency-scale", "aria-label": "DCAA operating scale", children: dcaaProfile.scale.map((metric) => /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("strong", { children: metric.value }),
          /* @__PURE__ */ jsx("span", { children: metric.label })
        ] }, metric.label)) }),
        /* @__PURE__ */ jsxs("section", { className: "agency-priorities", "aria-labelledby": "agency-priorities-title", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Strategic direction" }),
            /* @__PURE__ */ jsx("h3", { id: "agency-priorities-title", children: "Three priorities frame DCAA's transformation" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "agency-priority-map", children: dcaaProfile.priorities.map((priority) => /* @__PURE__ */ jsxs("article", { children: [
            /* @__PURE__ */ jsx("span", { children: priority.number }),
            /* @__PURE__ */ jsx("h4", { children: priority.title }),
            /* @__PURE__ */ jsx("p", { children: priority.body })
          ] }, priority.number)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "agency-profile-grid", children: [
          /* @__PURE__ */ jsxs("section", { "aria-labelledby": "agency-organization-title", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Operating model" }),
            /* @__PURE__ */ jsx("h3", { id: "agency-organization-title", children: "A distributed enterprise with mission directorates and hub-based delivery" }),
            /* @__PURE__ */ jsx("ul", { children: dcaaProfile.organization.map((item) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
              item
            ] }, item)) })
          ] }),
          /* @__PURE__ */ jsxs("section", { "aria-labelledby": "agency-context-title", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Operating context" }),
            /* @__PURE__ */ jsx("h3", { id: "agency-context-title", children: "Scale, timing, and professional judgment shape the technology requirement" }),
            /* @__PURE__ */ jsx("ul", { children: dcaaProfile.operatingContext.map((item) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(ArrowRight, { "aria-hidden": "true" }),
              item
            ] }, item)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "agency-technology", "aria-labelledby": "agency-technology-title", children: [
          /* @__PURE__ */ jsxs("div", { className: "agency-technology-intro", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Data and technology emphasis" }),
            /* @__PURE__ */ jsx("h3", { id: "agency-technology-title", children: "The opportunity is an enterprise operating capability" }),
            /* @__PURE__ */ jsx("p", { children: "Modernization connects governed data, analytical products, controlled AI, modern architecture, cybersecurity, and workforce enablement into a consistent agency capability." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "agency-technology-map", children: dcaaProfile.technology.map((item, index) => /* @__PURE__ */ jsxs("article", { children: [
            /* @__PURE__ */ jsx("span", { children: String(index + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsx(Network, { "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("h4", { children: item.title }),
            /* @__PURE__ */ jsx("p", { children: item.body })
          ] }, item.title)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "agency-sources", children: [
          /* @__PURE__ */ jsx("span", { children: "Official DCAA sources" }),
          dcaaProfile.sources.map((source) => /* @__PURE__ */ jsxs("a", { href: source.href, target: "_blank", rel: "noreferrer", children: [
            source.label,
            /* @__PURE__ */ jsx(ExternalLink, { "aria-hidden": "true" })
          ] }, source.href))
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
      /* @__PURE__ */ jsxs("div", { className: "page-frame footer-inner footer-leave-behind", children: [
        /* @__PURE__ */ jsx("img", { src: assets.logo, alt: "Peregrine Advisors" }),
        /* @__PURE__ */ jsxs("figure", { children: [
          /* @__PURE__ */ jsx(Quote, { "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs("blockquote", { children: [
            "“",
            quotations.secRecommendation.text,
            "”"
          ] }),
          /* @__PURE__ */ jsxs("figcaption", { children: [
            /* @__PURE__ */ jsx("strong", { children: quotations.secRecommendation.speaker }),
            /* @__PURE__ */ jsx("span", { children: quotations.secRecommendation.role })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "page-frame footer-legal", children: [
        /* @__PURE__ */ jsx("span", { children: "Prepared for procurement and mission leadership for DCAA" }),
        /* @__PURE__ */ jsx("span", { children: "Prepared exclusively for DCAA procurement and mission evaluation. Please do not distribute outside authorized DCAA procurement, legal, technical, and mission personnel without Peregrine's written consent. Content remains subject to independent procurement review and required approvals." })
      ] })
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(Home, {}) });
}
function render() {
  return renderToString(/* @__PURE__ */ jsx(App, {}));
}
export {
  render
};
