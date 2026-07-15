/**
 * Evidence Cartography content layer.
 * Every public claim maps to the approved Phase 5 research or a verified project artifact.
 */

export const assets = {
  logo: "/dcaadatalake/dcaadatalake-assets/peregrine-logo.png",
  hero: "/dcaadatalake/dcaadatalake-assets/dcaa-hero.webp",
  pdsa: "/dcaadatalake/dcaadatalake-assets/peregrine-pdsa-method.webp",
} as const;

export const peregrineIntroduction = {
  eyebrow: "About Peregrine",
  title: "A federal data and AI partner built for mission value",
  body: "Organized as a unique data and technology innovation hub and social enterprise, Peregrine combines federal data policy, enterprise architecture, engineering, human-centered analytics, responsible AI, and a history of stellar delivery to help DCAA create greater mission value from agency-owned information while preserving traceability, human judgment, and disciplined execution.",
  details: ["Data and technology innovation hub", "SBA 8(a) prime", "Financial-regulatory mission fluency", "Strategy-through-production delivery", "Senior, multidisciplinary leadership"],
} as const;

export const navigation = [
  { id: "top", label: "Overview", phase: "foundation" },
  { id: "alignment", label: "Alignment", phase: "foundation" },
  { id: "intelligence", label: "Intelligence", phase: "intelligence" },
  { id: "capabilities", label: "Capabilities", phase: "intelligence" },
  { id: "innovation", label: "Innovation", phase: "delivery" },
  { id: "sec", label: "Past Performance", phase: "delivery" },
  { id: "team", label: "Team", phase: "delivery" },
  { id: "next-step", label: "Next Step", phase: "delivery" },
] as const;

export const heroPastPerformance = [
  "All-Exceptional CPARS on current SEC prime call orders",
  "Azure at PCAOB and DDOT",
  "Financial-regulatory depth",
  "SBA 8(a) prime and GSA MAS contract holder",
] as const;

export const evidenceContexts = {
  hero: [
    "Three completed SEC CPARS evaluations rate every displayed category Exceptional across Data Science and Use, Data Visualization, and Data Governance.",
    "PCAOB and DDOT show Peregrine carrying enterprise-data strategy, governance, pipelines, and mission products into Azure production.",
    "SEC and PCAOB provide financial-regulatory experience, while NYDFS adds policy and governance work supporting supervisory decisions.",
    "Peregrine is an SBA 8(a) prime and holds GSA Multiple Award Schedule contract 47QTCA23D0028 under SIN 54151S, Information Technology Professional Services. Federal procurement approaches remain subject to the Contracting Officer's independent research, planning, eligibility confirmation, and approvals.",
  ],
  matrix: "Relevant past performance is drawn from SEC prime delivery, PCAOB enterprise data services, DDOT transformation, FDA secure cloud work, and NYDFS regulatory governance. Each example is mapped to the requested DCAA outcome it most directly supports.",
  foundation: "SEC CAT, PCAOB, DDOT, and FDA demonstrate experience with source integration, historical preservation, data quality, metadata, lineage, security, and governed analytical delivery.",
  products: "The intended-product context connects Peregrine experience to the DCAA outcome. Predictive language preserves baseline comparison, holdout validation, explainability, uncertainty, monitoring, and human review.",
  capabilities: "Each capability and assessment follows the approved nine-capability model. The experience preserves SEC prime and subcontract distinctions, current-versus-proposed status, and team attribution.",
  sec: "The supplied SEC CPARS records support the displayed workstream categories and Exceptional ratings.",
  pcaob: "Approved context from the Phase 5 research, PCAOB technical proposal, and enterprise data services statement of work. Public copy distinguishes documented strategy, leadership support, and implementation status.",
  ddot: "Verified through the two supplied DDOT past-performance questionnaires and the approved Phase 5 research. Shared mission outcomes retain team attribution.",
  cloud: "Cloud placement follows the approved evidence map: Azure at PCAOB and DDOT, AWS at SEC and FDA, and Google Cloud for private-sector and internal product work. All methods flow into DCAA-approved technologies and controls.",
  team: "Representative profiles use the approved team synthesis and verified education. The profiles demonstrate solutioning caliber and do not lock the named people into final delivery positions.",
} as const;

export type ArtifactCategory = "evaluation" | "case" | "delivery" | "governance" | "testimony" | "acquisition";

export const artifactCategories: Array<{ id: ArtifactCategory; label: string }> = [
  { id: "evaluation", label: "Evaluations" },
  { id: "case", label: "Client engagements" },
  { id: "delivery", label: "Delivery artifacts" },
  { id: "governance", label: "Governance and security" },
  { id: "testimony", label: "Leadership testimony" },
  { id: "acquisition", label: "Procurement qualifications" },
];

export const pastPerformanceArtifacts: Array<{
  id: string;
  index: string;
  title: string;
  source: string;
  summary: string;
  href: string;
  categories: ArtifactCategory[];
}> = [
  { id: "sec-cpars", index: "A01", title: "Three SEC prime CPARS records", source: "Formal performance evaluation", summary: "Data Science and Use, Data Visualization, and Data Governance call orders, with every displayed evaluated category rated Exceptional.", href: "#sec-evaluations", categories: ["evaluation", "delivery"] },
  { id: "sec-cat", index: "A02", title: "SEC CAT delivery record", source: "Prime past performance", summary: "Complex regulated-data pipelines, analytical products, governance, visualization, and sustained mission delivery.", href: "#sec", categories: ["case", "delivery", "governance"] },
  { id: "pcaob-azure", index: "A03", title: "PCAOB Azure enterprise data services", source: "Strategy-through-production engagement", summary: "Enterprise-data strategy, architecture, governance, leadership support, managed service, and implementation evidence.", href: "#pcaob", categories: ["case", "delivery", "governance"] },
  { id: "ddot-azure", index: "A04", title: "DDOT Azure transformation", source: "Mission transformation engagement", summary: "Azure warehouses, pipelines, data policy, catalog, analytical products, applications, adoption, and operational support.", href: "#ddot", categories: ["case", "delivery", "governance"] },
  { id: "fda-secure-ai", index: "A05", title: "FDA secure AI and cloud delivery", source: "Documented subcontract engagement", summary: "Secure AWS, Zero Trust, FDA data-security protocols, AI and ML engineering, reporting, and production support.", href: "#fda-fidle", categories: ["case", "delivery", "governance"] },
  { id: "nydfs-governance", index: "A06", title: "NYDFS policy and governance work", source: "Supporting regulatory experience", summary: "Digital-asset policy framework and data-governance implementation supporting financial-regulatory mission fluency.", href: "#nydfs", categories: ["case", "governance"] },
  { id: "sec-testimony", index: "A07", title: "SEC delivery and innovation observations", source: "Customer leadership quotations", summary: "Approved statements from the SEC Assessing Official and Contracting Officer and the SEC Chief Data Officer.", href: "#sec-testimony", categories: ["testimony", "delivery"] },
  { id: "ddot-testimony", index: "A08", title: "DDOT transformation observations", source: "Customer leadership quotations", summary: "Approved statements from DDOT technology leaders on collaboration, implementation, modernization, and data culture.", href: "#ddot-testimony", categories: ["testimony", "delivery"] },
  { id: "fda-testimony", index: "A09", title: "FDA teaming-partner observation", source: "Teaming-partner quotation", summary: "Approved statement on secure data science and engineering, AWS, usability, Zero Trust, and FDA security protocols.", href: "#fda-testimony", categories: ["testimony", "governance"] },
  { id: "federal-acquisition", index: "A10", title: "Federal procurement qualifications", source: "Registrations and qualifications", summary: "SBA 8(a) prime; active SAM.gov registration; GSA MAS 47QTCA23D0028 under SIN 54151S; CMMC Status: Final Level 2 (C3PAO); social enterprise organized as a State of Maryland Benefit Corporation.", href: "#next-step", categories: ["acquisition"] },
];

export const matrixRows = [
  {
    outcome: "One trusted view of audit performance across historical and current systems",
    response: "Integrates complex source data, reconciles identity and lineage, and creates durable analytical models and governed data products.",
    pastPerformance: "SEC CAT pipelines and derived datasets; PCAOB Azure enterprise-data roadmap and implementation; DDOT Azure warehouses and pipelines.",
    href: "#foundation",
  },
  {
    outcome: "Complete, unique, analysis-ready records",
    response: "Builds quality rules, canonical keys, deduplication, reconciliation, metadata, and source-to-output traceability.",
    pastPerformance: "SEC CAT transformation, hashing, quality, and metadata; PCAOB critical-data management; DDOT Data Policy and Digital Asset Catalog.",
    href: "#foundation",
  },
  {
    outcome: "Clear visibility into cycle time, findings, sustained costs, and performance trends",
    response: "Designs mission-focused metrics, semantic layers, dashboards, and self-service analytical experiences.",
    pastPerformance: "SEC DCStats, TeamStats, CAT analytical products, and market statistics; DDOT mission dashboards and geospatial analytics.",
    href: "#intelligence",
  },
  {
    outcome: "Defensible assignment budget-hour ranges",
    response: "Develops feature pipelines, predictive models, holdout validation, baseline comparison, explainability, monitoring, and decision support.",
    pastPerformance: "SEC market analytics and AI; FDA AI and ML and data engineering; DDOT optimization and predictive analytics.",
    href: "#intelligence",
  },
  {
    outcome: "Comparable contractor-cost intelligence",
    response: "Standardizes varied submissions into common financial and operational concepts, preserves provenance, and enables comparison.",
    pastPerformance: "SEC financial-regulatory data; PCAOB enterprise-data strategy; NYDFS digital-asset policy framework and data-governance implementation.",
    href: "#intelligence",
  },
  {
    outcome: "Fast, intuitive access for auditors, planners, analysts, and leaders",
    response: "Combines self-service business intelligence, applications, visual analytics, plain-language patterns, and human-centered design.",
    pastPerformance: "SEC visualization prime work, DCStats, and TeamStats; DDOT P-DSA and mission applications; FDA enterprise reporting.",
    href: "#capabilities",
  },
  {
    outcome: "Secure, governed delivery in DCAA's lakehouse",
    response: "Works within approved platforms and controls using access, encryption, logging, metadata, lineage, testing, and optimization.",
    pastPerformance: "Azure at PCAOB and DDOT; AWS at SEC and FDA; SEC Zero Trust, role-based access control, and attribute-based access control; FDA security delivery.",
    href: "#foundation",
  },
  {
    outcome: "Disciplined delivery across multiple technical workstreams",
    response: "Uses accountable prime leadership, roadmaps, Agile increments, risk management, quality gates, and transparent communication.",
    pastPerformance: "Three SEC prime call orders rated Exceptional in every category; PCAOB strategy to implementation; DDOT transformation delivery.",
    href: "#sec",
  },
  {
    outcome: "Sustainable capability after deployment",
    response: "Produces source artifacts, documentation, standard operating procedures, training, transfer, and adoption support as part of delivery.",
    pastPerformance: "SEC data-use and training; PCAOB managed-service model; DDOT governance institutionalization; FDA production support.",
    href: "#team",
  },
] as const;

export const mentalMap = [
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
    href: "#foundation",
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
    href: "#intelligence",
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
    href: "#sec",
  },
] as const;

export const lidoQuotation = {
  text: "Peregrine has consistently demonstrated outstanding performance. Their ability to adapt and respond to changing business requirements while delivering high-quality results on complex projects that ranged from strategy to architecture to analytics distinguishes them as a small business in a highly competitive field.",
  speaker: "Lido Ramadan",
  role: "Chief Operating Officer, Oceaneast",
} as const;

export const pdsaMethod = {
  eyebrow: "Peregrine problem-solving method",
  title: "Design + Systems + Agile",
  body: "Peregrine's P-DSA approach combines design thinking, a systems approach, and Agile methods into one problem-solving framework. Design identifies users, problems, and value. Systems evaluates the complete ecosystem and viable options. Agile delivers working increments with continuous feedback and acceptance.",
  stages: [
    { id: "01", title: "Design", body: "Identify users, define the problem, structure value, and explore viable options." },
    { id: "02", title: "Systems", body: "Evaluate the complete ecosystem, experiment, measure, learn, and select the solution path." },
    { id: "03", title: "Agile", body: "Build, review, and release working increments through client-compatible delivery cycles." },
  ],
} as const;

export const officialLinks = [
  { label: "DCAA agency mission", href: "https://www.dcaa.mil/" },
  { label: "DCAA Strategic Plan 2026–2030", href: "https://www.dcaa.mil/LinkClick.aspx?fileticket=6FCylWg8-6c%3D&tabid=5867&portalid=88" },
  { label: "DCAA 2026 agency overview", href: "https://www.dcaa.mil/Portals/88/2026%20one%20pager%20about%20DCAA%200312.pdf" },
  { label: "DCAA hub transition", href: "https://www.dcaa.mil/Agency-News/Article-View/Article/4464731/dcaa-announces-hub-locations/" },
] as const;

export const foundationLayers = [
  {
    id: "sources",
    number: "01",
    title: "Source context",
    summary: "Connect historical, current, contractor-cost, and future sources while preserving authority, provenance, and business meaning.",
    detail: "Profile each source, define controlled mappings, retain history, route exceptions, and reconcile entities before data becomes analytical evidence.",
    pastPerformance: "SEC CAT source transformation; PCAOB enterprise ingestion; DDOT multi-source warehouses and pipelines.",
  },
  {
    id: "history",
    number: "02",
    title: "Trusted core",
    summary: "Preserve change through Data Vault 2.0 patterns and publish complete, unique, defensible data.",
    detail: "Use canonical keys, hubs, links, satellites, quality rules, metadata, lineage, deduplication, reconciliation, and auditable change controls.",
    pastPerformance: "SEC hashing and derived datasets; PCAOB master and critical data; DDOT Data Policy and Digital Asset Catalog.",
  },
  {
    id: "models",
    number: "03",
    title: "Analytical serving",
    summary: "Create Gold Tier dimensional and semantic models aligned to mission questions and reusable measures.",
    detail: "Define metrics before visualization, connect each output to source evidence, and optimize performance and cost for approved roles and interfaces.",
    pastPerformance: "SEC DCStats, TeamStats, and market statistics; PCAOB self-service roadmap; DDOT mission dashboards.",
  },
  {
    id: "controls",
    number: "04",
    title: "Controlled delivery",
    summary: "Operate inside DCAA-approved identity, network, repository, security, logging, testing, and release controls.",
    detail: "Apply least privilege, encryption, audit logging, automated tests, observability, performance controls, release evidence, documentation, and transfer acceptance.",
    pastPerformance: "SEC regulatory compliance; PCAOB access management; FDA security and Zero Trust; DDOT production institutionalization.",
  },
] as const;

export const products = [
  {
    id: "history",
    number: "01",
    title: "Trusted performance history",
    decision: "Where is audit performance improving, slowing, or changing across time, organizations, assignments, and relevant dimensions?",
    foundation: "Reconciled historical and current records, durable identity, preserved provenance, and governed semantic measures.",
    method: "Time-series and cohort analysis, trends, variance, segmentation, drill paths, and transparent calculations.",
    experience: "Role-relevant dashboards, queryable models, quality status, business definitions, and traceable source evidence.",
    acceptance: "Reconciliation, metric validation, source-to-output traceability, usability testing, and repeatable analytical results.",
    pastPerformance: "SEC CAT analytics, DCStats, TeamStats, and market statistics; DDOT analytical products; PCAOB self-service roadmap.",
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
    pastPerformance: "SEC analytics and AI; FDA AI and ML and data engineering; DDOT optimization; PCAOB predictive-risk roadmap.",
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
    pastPerformance: "SEC financial-regulatory data; PCAOB enterprise strategy; NYDFS digital-asset policy and governance; financial-risk expertise.",
  },
] as const;

export type Capability = {
  id: string;
  number: string;
  title: string;
  group: "Deliver" | "Decide" | "Assure";
  outcome: string;
  methods: string;
  pastPerformance: string;
  assessment: "Exceeds" | "Substantially exceeds";
  statement: string;
  optional?: string;
};

export const capabilities: Capability[] = [
  { id: "leadership", number: "01", title: "Mission-Aligned Product and Program Leadership", group: "Deliver", outcome: "Keep all three products connected to mission decisions, acceptance evidence, predictable increments, and Contracting Officer visibility.", methods: "Discovery, stakeholder mapping, product vision, prioritization, roadmaps, backlogs, Agile planning, risks, dependencies, demonstrations, decision logs, and outcome measures.", pastPerformance: "All-Exceptional SEC prime performance; PCAOB strategy-to-implementation; DDOT transformation and Agile delivery.", assessment: "Substantially exceeds", statement: "Turn DCAA's highest-value audit questions into governed products with visible progress and measurable acceptance." },
  { id: "lakehouse", number: "02", title: "Secure Azure Databricks Lakehouse and Pipeline Engineering", group: "Deliver", outcome: "Move historical, current, contractor-cost, and future sources through a secure, scalable, observable architecture optimized for reliability, performance, and cost.", methods: "Architecture, governed zones, source profiling, schema mapping, ETL and ELT, incremental loading, orchestration, observability, tuning, automation, and documentation.", pastPerformance: "PCAOB managed Azure implementation; DDOT Azure warehouses and pipelines; SEC CAT regulatory data; FDA FiDLE engineering in AWS.", assessment: "Substantially exceeds", statement: "Build DCAA's lakehouse as a secure enterprise decision platform with observable, reusable production pipelines." },
  { id: "quality", number: "03", title: "Data Modeling, Standardization, Quality, and Traceability", group: "Deliver", outcome: "Create complete, unique, reconciled, standardized, queryable, and defensible data across history and contractor-cost submissions.", methods: "Data Vault, dimensional models, canonical schemas, semantics, taxonomies, master data, profiling, matching, deduplication, validation, exceptions, lineage, and regression tests.", pastPerformance: "SEC CAT transformation, hashing, quality, metadata, and governance; PCAOB master and critical data; DDOT policy and catalog; financial-reporting semantic expertise.", assessment: "Substantially exceeds", statement: "Preserve history, standardize meaning, and make every result traceable to trusted source data." },
  { id: "history-intelligence", number: "04", title: "Historical Audit Performance Intelligence", group: "Decide", outcome: "Explore year-over-year performance across historical and current eras by organization, assignment, time, and relevant dimensions.", methods: "Metric design, time-series and cohort analysis, trends, variance, segmentation, analytical views, dashboards, and drill paths.", pastPerformance: "SEC CAT analytics, market statistics, DCStats, and TeamStats; DDOT safety, mobility, and geospatial analytics; PCAOB self-service roadmap.", assessment: "Substantially exceeds", statement: "See the complete audit-performance story, from enterprise trends to assignment-level evidence." },
  { id: "predictive", number: "05", title: "Predictive Assignment Planning and Model Assurance", group: "Decide", outcome: "Provide defensible budget-hour ranges with measurable baseline improvement, visible uncertainty, transparent features, reproducible validation, and human review.", methods: "Feature engineering, baseline design, holdout testing, cross-validation, error comparison, interval estimation, explainability, registry, monitoring, and interface integration.", pastPerformance: "SEC analytics and AI; FDA AI and ML; DDOT optimization and prediction; PCAOB predictive-risk roadmap.", assessment: "Substantially exceeds", statement: "Predict assignment effort with measurable accuracy, visible uncertainty, and transparent model assurance." },
  { id: "cost-intelligence", number: "06", title: "Contractor-Cost Intelligence and Comparative Analytics", group: "Decide", outcome: "Make contractor cost data queryable and comparable while retaining provenance and reviewable transformation logic.", methods: "Schema profiling, canonical cost taxonomy, mappings, normalization, provenance, exceptions, conformed dimensions, comparative measures, trends, and review workflows.", pastPerformance: "SEC financial-regulatory data; PCAOB enterprise strategy and governance; NYDFS digital-asset policy framework development and implementation; financial-risk and semantic expertise.", assessment: "Substantially exceeds", statement: "Convert varied cost schedules into comparable intelligence while preserving financial meaning and source provenance." },
  { id: "adoption", number: "07", title: "Self-Service Analytics, Interfaces, and Human-Centered Adoption", group: "Assure", outcome: "Enable independent, accessible, role-relevant use of dashboards, interfaces, and governed models.", methods: "User research, information architecture, dashboards, applications, semantic metrics, accessibility, responsive design, usability testing, training, and adoption measures.", pastPerformance: "All-Exceptional SEC visualization work; DDOT P-DSA and human-centered products; FDA reporting; PCAOB self-service roadmap.", assessment: "Substantially exceeds", statement: "Make every decision experience intuitive, role-relevant, accessible, and traceable." },
  { id: "governance", number: "08", title: "Data Governance, Security, and Auditability", group: "Assure", outcome: "Make ownership, meaning, approved use, access, quality, and change history explicit across the lifecycle.", methods: "Governance, stewardship, glossary, catalog, critical data, policy, data-use assessment, lineage, role-based and attribute-based access, least privilege, encryption, logging, Zero Trust, privacy, and control evidence.", pastPerformance: "SEC governance and security; PCAOB governance and access management; DDOT governance institutionalization; FDA security and Zero Trust.", assessment: "Substantially exceeds", statement: "Make governance, security, and auditability operational across the full data-product lifecycle." },
  { id: "production", number: "09", title: "Production Assurance, DevSecOps, and Knowledge Transfer", group: "Assure", outcome: "Release predictably, preserve quality and security records, and transfer source artifacts, standard operating procedures, training, runbooks, and operating knowledge.", methods: "Version control, continuous integration and delivery, infrastructure and configuration as code, automated data and model tests, security scans, release gates, observability, optimization, rollback, documentation-as-work, training, transition, and transfer acceptance.", pastPerformance: "All-Exceptional SEC prime performance; SEC production engineering; FDA secure cloud; PCAOB managed service; DDOT production and institutionalization.", optional: "At-cost Ceebit evaluation within DCAA-approved technologies and human approval gates.", assessment: "Substantially exceeds", statement: "Move every change through visible quality, security, performance, documentation, and ownership gates, with optional federal SDLC automation available." },
];

export const ceebitSteps = [
  { number: "01", title: "DCAA selects a bounded workflow", body: "DCAA defines the internal data-product use case, approved inputs, environment, approval points, and measurable outputs." },
  { number: "02", title: "Approved systems coordinate work", body: "The orchestration layer can structure requirements, refine code, prepare tests, trigger security checks, update documentation, and coordinate release preparation." },
  { number: "03", title: "People authorize every consequential step", body: "Named reviewers approve requirements, architecture, code, tests, security findings, release artifacts, and production action." },
  { number: "04", title: "DCAA measures and decides", body: "DCAA reviews cycle time, manual touch time, test completeness, defects, security findings, documentation, traceability, rework, and reviewer satisfaction." },
  { number: "05", title: "DCAA retains the complete record", body: "DCAA retains code, artifacts, repository history, documentation, configuration knowledge, and continuation authority." },
] as const;

export const secWorkstreams = [
  {
    id: "science",
    order: "50310225F0001",
    awardHref: "https://orangeslices.ai/peregrine-wins-again-beats-out-3-to-win-sec-data-science-engineering-use-and-training-services-task/",
    title: "Data Science and Use",
    summary: "Regulatory data engineering, CAT transformation, market statistics, crypto analytics, AI research, product ownership, strategy, training, and sustained production delivery.",
    categories: ["Quality", "Schedule", "Cost Control", "Management", "Small Business", "Regulatory Compliance", "Delivery"],
    pastPerformance: "CAT captures trillions of equity and options order lifecycle records at petabyte-to-exabyte scale. Peregrine designs, develops, implements, operates, and improves secure ETL and derived-data pipelines for the SEC's largest, most complex, mission-critical dataset.",
    value: "Peregrine converted previously intractable raw CAT data into lifecycle-, account-, and aggregate-level analytical products; improved hashing, search, linkage, and query performance; and supported analytics that contributed to detection of a $47 million front-running scheme. The OCDO, OIT, and Peregrine team's CAT work led to the SEC Chair's Analytical Innovations Award.",
  },
  {
    id: "visualization",
    order: "50310224F0171",
    awardHref: "https://orangeslices.ai/peregrine-awarded-8m-sec-data-visualization-task-on-data-services-bpa/",
    title: "Data Visualization",
    summary: "DCStats modernization, TeamStats launch, public and internal visualizations, AI-driven visualization research, platform reliability, accessibility, and product delivery.",
    categories: ["Quality", "Schedule", "Cost Control", "Management", "Regulatory Compliance", "Delivery"],
    pastPerformance: "Peregrine modernized the DCStats technical stack, brought TeamStats online, delivered mission dashboards and public visualizations, and managed a blended prime team through disciplined Agile delivery.",
    value: "SEC users received more reliable, accessible, and maintainable analytical products for internal decisions and public regulatory information, supported by platform modernization, accessibility, and sustained product operations.",
  },
  {
    id: "governance",
    order: "50310224F0174",
    awardHref: "https://orangeslices.ai/peregrine-beats-out-3-to-win-sec-data-governance-and-management-services-support/",
    title: "Data Governance",
    summary: "Enterprise policy, data governance and compliance processes, metadata, dataset-risk methods, data-use assessments, legal analysis, and program management.",
    categories: ["Quality", "Schedule", "Cost Control", "Management", "Regulatory Compliance"],
    pastPerformance: "Peregrine supported Paperwork Reduction Act work, enterprise data policies, governance processes, metadata management, dataset-risk methods, and ongoing assessments of data usage.",
    value: "The work strengthened enterprise policy, review, metadata, risk, and compliance practices so SEC data could be governed, understood, and used through repeatable institutional processes.",
  },
] as const;

export const quotations = {
  pcaobStrategy: {
    text: "Peregrine brings a unique implementation-oriented perspective on strategy development that has proven to be very valuable for PCAOB. Peregrine was able to discern the optimal strategic path for the Board during a time of much change. We have been very happy with the engagement and are very excited to have Peregrine implement the AI and Data Strategy for the Board.",
    speaker: "Pooja Sangwan",
    role: "Chief of Staff, Office of Technology, PCAOB",
  },
  pcaobDelivery: {
    text: "Peregrine has been refreshing. A delivery-first consulting firm that works with us to drive our mission, Peregrine is staffed by some of the best professionals I have worked with who are deeply committed to making a difference.",
    speaker: "Ahmed Aboulnaga",
    role: "Director of Data, PCAOB",
  },
  secDelivery: {
    text: "Peregrine has been outstanding on this engagement, providing high-quality resources and services in a timely fashion, going above and beyond to execute a program comprising multiple complex, multifaceted and challenging projects.",
    speaker: "Julia Gallmon",
    role: "SEC Assessing Official and Contracting Officer",
    context: "Verified in the approved Phase 5 quotation set and SEC CAT past-experience evidence. It appears with the SEC prime-delivery argument.",
  },
  secInnovation: {
    text: "Peregrine was instrumental in supporting the CAT work that led to the Chair's Analytical Innovations Award. The OCDO / OIT / Peregrine team did stellar work and should be proud.",
    speaker: "Austin Gerig, PhD",
    role: "SEC Chief Data Officer",
    context: "Verified in the approved Phase 5 quotation set and SEC CAT past-experience evidence. The quotation retains the documented OCDO, OIT, and Peregrine team attribution.",
  },
  secRecommendation: {
    text: "Peregrine has been top-notch in providing high-quality resources in a timely fashion, executing on complex and difficult projects, being flexible when required, and going over and above to ensure the mission of my office and the SEC is not compromised. I am extremely happy with their support and fully recommend them to others.",
    speaker: "Austin Gerig",
    role: "SEC Office of the Chief Data Officer",
  },
  ceebit: {
    text: "[Ceebit] is a great testament to the Inadev team’s hard work helping IRS develop a prototype app that can potentially improve the taxpayer experience…",
    speaker: "Mitchell D. Winans",
    role: "Senior Advisor, Enterprise Digitalization Office (at the time of the project)",
  },
  ddotCulture: {
    text: "The results are clear: better solutions, increased collaboration, faster implementation, and a cultural shift towards embracing data as a strategic asset.",
    speaker: "Dr. Khaled Falah",
    role: "Chief Information Officer, DDOT",
    context: "Approved for DDOT human-centered transformation experience. The quotation supports collaboration, implementation, and data-culture outcomes.",
  },
  ddotModernization: {
    text: "Peregrine has provided DDOT with outstanding levels of support... assisting with gap identification, business process redesign, and integral work to the mission of OCIO in modernizing both our systems and our processes.",
    speaker: "Charnita Allen",
    role: "Acting Chief Information Officer, DDOT",
    context: "Verified through the supplied DDOT past-performance evidence and approved quotation set. The ellipsis is retained from the approved public wording.",
  },
  fda: {
    text: "Peregrine's data science and engineering capabilities are excellent. They know how to balance security with usability while optimally leveraging AWS [cloud], Zero Trust, and FDA-related data security protocols.",
    speaker: "Karthik Murugesan",
    role: "Chief Executive Officer, ARC (Prime for FDA)",
    context: "Approved for FDA secure AI and cloud experience. FDA FiDLE remains described as documented subcontract delivery, and the quotation preserves teaming-partner attribution.",
  },
} as const;

export const dcaaProfile = {
  mission: "DCAA provides independent audit and financial expertise to ensure accountability, transparency, and trust in defense contracting. The agency supports DoW and other federal customers by examining contractor costs, advising procurement teams, and strengthening confidence that public funds are used effectively.",
  scale: [
    { value: "$788.4B", label: "Contract costs examined in FY2025" },
    { value: "$5.3B", label: "Audit services savings in FY2025" },
    { value: "$7.5:1", label: "Return for every dollar invested" },
    { value: "~9,000", label: "Contractors within agency oversight" },
    { value: "~10,000", label: "Products issued each year" },
    { value: "$633.0M", label: "FY2026 budget request" },
  ],
  priorities: [
    { number: "01", title: "Optimize value and customer service", body: "Improve the timeliness, relevance, and mission value of audit and financial advisory services for strategic partners." },
    { number: "02", title: "Cultivate a premier and multi-talented workforce", body: "Equip a distributed workforce with modern skills, consistent methods, and technology that strengthens professional judgment." },
    { number: "03", title: "Capitalize on technological innovation", body: "Modernize data, analytics, systems, and operating practices to increase insight, consistency, and enterprise performance." },
  ],
  organization: [
    "Headquarters, Inspector General, Operations, and Equal Employment Opportunity functions",
    "Land, Sea, Air, and Centralized Audit Function directorates",
    "Transition toward 23 hub locations while maintaining presence at key contractor sites",
    "Support for DoW buying commands and other federal customers across the contract lifecycle",
  ],
  technology: [
    { title: "Enterprise data foundation", body: "Expand the lake and lakehouse, improve enterprise access, and standardize reusable data products across distributed operations." },
    { title: "Analytics and controlled AI", body: "Use data-driven insights, AI and LLM-enabled targeted reviews, and GenAI guardrails while preserving audit independence and human judgment." },
    { title: "Modern architecture and tools", body: "Streamline tools and processes, modernize IT architecture, and strengthen integration, cybersecurity, governance, and operational resilience." },
    { title: "Workforce enablement", body: "Give auditors and leaders role-relevant access, transparent measures, training, and analytical services that are usable across hubs and contractor locations." },
  ],
  operatingContext: [
    "Audit workload follows DoW procurement funding with a time lag created by contract execution and closeout.",
    "DCAA targets completion of incurred-cost audits within 12 months of an adequate submission.",
    "The hub model increases the importance of consistent enterprise data, shared analytical services, and role-relevant access.",
    "Technology must augment professional judgment, preserve traceability, and operate within agency governance and security controls.",
  ],
  sources: [
    { label: "DCAA Strategic Plan 2026–2030", href: "https://www.dcaa.mil/LinkClick.aspx?fileticket=6FCylWg8-6c%3D&tabid=5867&portalid=88" },
    { label: "DCAA 2026 agency overview", href: "https://www.dcaa.mil/Portals/88/2026%20one%20pager%20about%20DCAA%200312.pdf" },
    { label: "DCAA hub transition", href: "https://www.dcaa.mil/Agency-News/Article-View/Article/4464731/dcaa-announces-hub-locations/" },
  ],
} as const;

export const azureCases = [
  {
    id: "pcaob",
    eyebrow: "Financial regulation",
    client: "PCAOB",
    title: "Enterprise data strategy carried into managed Azure implementation",
    summary: "Peregrine developed the Enterprise Data Strategy across governance, access management, enterprise ETL, the enterprise data hub, master and critical data, analytics, GenAI, and implementation priorities. With documented leadership support, Peregrine is leading implementation of Enterprise Data as a Managed Service in Azure.",
    pastPerformance: ["Governance, decision rights, stewardship, access, and critical-data management", "Enterprise data hub and ingestion-factory capabilities", "Self-service analytics and reusable analytical services", "Predictive-risk models and AI-enabled workflows", "Managed operating practices and knowledge transfer"],
    relevance: "Direct financial-regulatory mission context, Azure implementation, enterprise-data strategy, governance, ingestion, self-service analysis, predictive analytics, AI, and strategy-to-production continuity.",
  },
  {
    id: "ddot",
    eyebrow: "Mission operations",
    client: "DDOT",
    title: "Azure data products and governance applied to safety, mobility, and resident outcomes",
    summary: "Peregrine helped DDOT modernize in Azure and embed data and AI into mission services through enterprise data warehouses and pipelines, governance, mobility and geospatial analytics, human-centered products, and sustained adoption.",
    pastPerformance: ["Azure warehouses, pipelines, and TOPS 2.0 modernization", "DDOT's first Data Governance Council and implemented Data Policy", "Digital Asset Catalog architecture", "Vision Zero, geospatial, and dockless-mobility analytics", "Parking-space optimization for residents", "Human-centered design, Agile delivery, and data-culture change"],
    relevance: "Azure engineering, multiple-source integration, mission analytics, optimization, dashboards, human-centered products, governance, adoption, and sustained transformation.",
  },
] as const;

export const supportingPortfolio = [
  { client: "SEC growth and prime performance", cloud: "AWS", body: "Peregrine began at the SEC as a subcontractor and grew into an award-winning, high-performing AI and data prime with all-Exceptional CPARS and a footprint across five divisions and offices. The firm is known for innovative, disruptive, and breakthrough programs that it envisioned and pursued for the agency, creating substantial mission value." },
  { client: "FDA FiDLE", cloud: "AWS", body: "Documented subcontract delivery across AI and ML, data engineering, cloud architecture, data security, Zero Trust, enterprise reporting, and production support." },
  { client: "NYDFS", cloud: "Financial regulation", body: "Peregrine developed and implemented a digital-asset policy framework and strengthened data governance supporting supervisory decisions." },
  { client: "Private-sector and internal products", cloud: "Google Cloud", body: "Economic consulting and internal product development demonstrate portable data science, product engineering, and method independence." },
] as const;

export const cloudPaths = [
  { cloud: "Azure", evidence: "PCAOB and DDOT", value: "Direct enterprise-data, analytical-product, governance, and implementation experience." },
  { cloud: "AWS", evidence: "SEC and FDA", value: "High-volume regulatory data, secure AI, pipeline engineering, analytical services, and production operations." },
  { cloud: "Google Cloud", evidence: "Private-sector and internal products", value: "Portable product engineering, data science, modern development, and method independence." },
] as const;

export const team = [
  { number: "01", initials: "SK", name: "Sarosh R. Khan", companyTitle: "Founder and Chief Executive Officer", role: "Executive Sponsor", education: "M.P.A., Harvard University; B.S. in Economics, Northeastern University", profile: "Sarosh founded Peregrine and leads executive strategy, client alignment, enterprise transformation, and mission-value delivery across regulated federal, economic, and data and AI environments.", contribution: "Executive alignment, senior stakeholder engagement, institutional barrier removal, escalation, client-value assurance, and accountable prime leadership.", coverage: "Capabilities 1, 7, 8, and 9", pastPerformance: "SEC, PCAOB, DDOT, and other mission organizations.", quote: "DCAA's mission protects the integrity of federal spending and public trust. Peregrine can help create greater mission value from enterprise information while preserving audit rigor, independence, and human judgment." },
  { number: "02", initials: "RS", name: "Rajesh Sripada", companyTitle: "Enterprise Data Architect", role: "Program Manager and Enterprise Architecture Lead", education: "M.S. in Applied Information Technology, Towson University", profile: "Rajesh is an enterprise data architect with more than three decades across architecture, cloud strategy, engineering, financial and accounting data, AI-enabled analytics, and federal delivery.", contribution: "Day-to-day program integration, target architecture, transition states, technical roadmap, dependencies, schedule, risk, and stakeholder coordination.", coverage: "Capabilities 1–3 and 5–9", pastPerformance: "FDA data work, PCAOB strategy, and modern enterprise-data environments.", quote: "DCAA's evolving organizational model requires architecture that remains practical across locations, traceable across systems, and tied to mission use. The lakehouse can connect current and legacy information into one durable delivery path." },
  { number: "03", initials: "EG", name: "Erik Garbacik, PhD", companyTitle: "Principal Data Scientist", role: "Technical Quality and Acceptance Lead", education: "Ph.D. in Applied Physics, University of Twente", profile: "Erik brings advanced quantitative modeling, applied physics, data science, cloud modernization, technical review, and SEC and DDOT mission experience.", contribution: "Independent technical review, analytical integrity, quality assurance, testing, reproducibility, deficiency resolution, and architecture and model review.", coverage: "Capabilities 1, 2, 4, 5, 7, and 9", pastPerformance: "Scientific reasoning, analytical-product development, acceptance strategy, Agile delivery, and SEC experience.", quote: "DCAA's analytical conclusions must be reproducible, explainable, and supported by traceable records. Strong quality and acceptance discipline will help every capability withstand serious audit scrutiny." },
  { number: "04", initials: "SS", name: "Steve Schluchter, PhD", companyTitle: "Data Scientist", role: "Lead Data Scientist and Responsible AI Lead", education: "Ph.D. in Mathematics, The George Washington University", profile: "Steve is a mathematician and data scientist with experience in computational mathematics, graph theory, machine learning, secure data engineering, pipeline optimization, and regulated federal analytics.", contribution: "Analytical methodology, model baselines, validation, explainability, responsible AI, secure analytical workflows, and limitation reporting.", coverage: "Capabilities 2–7 and 9", pastPerformance: "Statistical modeling, feature engineering, model validation, analytical design, federal software engineering, and cloud data science.", quote: "DCAA is an ideal mission for rigorous, human-centered analytics and carefully governed AI that augments expert judgment without hiding assumptions, uncertainty, or limitations." },
  { number: "05", initials: "NK", name: "Nick Kiritz, CFA, FRM", companyTitle: "Chief Implementation Officer", role: "Strategy, Governance, and Implementation Lead", education: "MBA in Finance, University of California, Berkeley; B.A. in Economics", profile: "Nick brings approximately 30 years across financial risk, internal control, regulatory compliance, governance, implementation strategy, and executive advisory work.", contribution: "Strategy-to-implementation alignment, governance, operating model, decision rights, prioritization, benefits realization, and executive implementation discipline.", coverage: "Capabilities 1, 3, 4, 6, 8, and 9", pastPerformance: "Experience associated with SEC, OCC, Fannie Mae, McKinsey, and federal mission organizations.", quote: "DCAA's technology transformation can align investment, governance, controls, and implementation around measurable mission value while preserving durable agency ownership." },
  { number: "06", initials: "DR", name: "Dean Ritz", companyTitle: "Chief Data Policy Advisor", role: "Federal Data Policy Lead", education: "M.A. in Philosophy, University of Montana; B.A. in Liberal Arts, Hampshire College", profile: "Dean brings nearly four decades across federal data policy, semantic standards, structured reporting, knowledge engineering, machine-readable information, and enterprise technology.", contribution: "Federal policy alignment, data access and use rules, semantic interoperability, machine-readable financial information, standards, metadata policy, and governance logic.", coverage: "Capabilities 1, 3, 4, 6, 8, and 9", pastPerformance: "SEC Financial Data Transparency Act implementation, Data Foundation leadership, structured-data strategy, and machine-readable reporting.", quote: "DCAA sits at the center of federal financial accountability, where policy, standards, interoperability, and traceable information must translate into practical rules for access, use, and sharing." },
] as const;

export const inadevTeam = [
  { name: "Manish Agarwal", role: "Chief Executive Officer", value: "Corporate leadership and access to specialized federal engineering resources." },
  { name: "Paul Matteucci", role: "Federal Partner", value: "Federal modernization, financial-agency context, and stakeholder alignment." },
  { name: "Vikrant Binjrajka", role: "Founder and Chief Technology Officer", value: "Cloud-native engineering, AI-enabled delivery, and Ceebit technical direction." },
  { name: "Jitesh Sachdev", role: "Founder and President", value: "Enterprise product, engineering-delivery, and organizational scaling." },
] as const;
