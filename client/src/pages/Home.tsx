/**
 * Evidence Cartography page composition.
 * The asymmetric evidence spine connects every DCAA outcome to method, past performance, and people.
 */
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Cloud,
  Database,
  ExternalLink,
  FileCheck2,
  Filter,
  Fingerprint,
  Info,
  Layers3,
  Menu,
  Network,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  artifactCategories,
  assets,
  type ArtifactCategory,
  azureCases,
  capabilities,
  ceebitSteps,
  cloudPaths,
  dcaaProfile,
  evidenceContexts,
  foundationLayers,
  heroPastPerformance,
  inadevTeam,
  lidoQuotation,
  matrixRows,
  mentalMap,
  navigation,
  officialLinks,
  pdsaMethod,
  peregrineIntroduction,
  products,
  pastPerformanceArtifacts,
  quotations,
  secWorkstreams,
  supportingPortfolio,
  team,
} from "@/data/siteContent";

const phaseLabels = {
  foundation: "Use the Data",
  intelligence: "Extract Intelligence",
  delivery: "Enable Delivery",
} as const;

type Phase = keyof typeof phaseLabels;

function moveTo(id: string) {
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

function SectionHeader({ index, eyebrow, title, intro, dark = false }: { index: string; eyebrow: string; title: string; intro: string; dark?: boolean }) {
  return (
    <header className={`section-header ${dark ? "section-header-dark" : ""}`}>
      <div className="section-index" aria-hidden="true">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-intro">{intro}</p>
      </div>
    </header>
  );
}

function ContextTooltip({ label, context, dark = false }: { label: string; context: string; dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  return (
    <span className={`context-tooltip ${dark ? "context-tooltip-dark" : ""}`} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="context-trigger"
        aria-label={`More verified context for ${label}`}
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}
      >
        <Info aria-hidden="true" />
      </button>
      <span id={tooltipId} role="tooltip" className={`context-panel ${open ? "open" : ""}`}>
        <strong>{label}</strong>
        <span>{context}</span>
      </span>
    </span>
  );
}

function EvidenceQuote({ text, speaker, role, context, dark = false }: { text: string; speaker: string; role: string; context?: string; dark?: boolean }) {
  return (
    <figure className={`evidence-quote ${dark ? "evidence-quote-dark" : ""}`}>
      <Quote aria-hidden="true" />
      <blockquote>“{text}”</blockquote>
      <figcaption><div><strong>{speaker}</strong><span>{role}</span></div>{context && <ContextTooltip label={`${speaker} quotation context`} context={context} dark={dark} />}</figcaption>
    </figure>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [activeMap, setActiveMap] = useState<string>("foundation");
  const [activeLayer, setActiveLayer] = useState<string>(foundationLayers[0].id);
  const [activeProduct, setActiveProduct] = useState<string>(products[0].id);
  const [activeCapability, setActiveCapability] = useState<string>(capabilities[0].id);
  const [activeSec, setActiveSec] = useState<string>(secWorkstreams[0].id);
  const [activePerson, setActivePerson] = useState<string>(team[0].name);
  const [artifactFilters, setArtifactFilters] = useState<ArtifactCategory[]>([]);
  const [announcement, setAnnouncement] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const activePhase = useMemo<Phase>(() => {
    const item = navigation.find((entry) => entry.id === activeSection);
    return (item?.phase ?? "foundation") as Phase;
  }, [activeSection]);

  const selectedLayer = foundationLayers.find((layer) => layer.id === activeLayer) ?? foundationLayers[0];
  const selectedProduct = products.find((product) => product.id === activeProduct) ?? products[0];
  const selectedCapability = capabilities.find((capability) => capability.id === activeCapability) ?? capabilities[0];
  const selectedSec = secWorkstreams.find((workstream) => workstream.id === activeSec) ?? secWorkstreams[0];
  const selectedPerson = team.find((person) => person.name === activePerson) ?? team[0];
  const selectedMap = mentalMap.find((item) => item.id === activeMap) ?? mentalMap[0];
  const filteredArtifacts = useMemo(
    () => artifactFilters.length === 0
      ? pastPerformanceArtifacts
      : pastPerformanceArtifacts.filter((artifact) => artifactFilters.every((category) => artifact.categories.includes(category))),
    [artifactFilters],
  );

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((item): item is HTMLElement => Boolean(item));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -66% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
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

  const navigate = (id: string) => {
    setMenuOpen(false);
    moveTo(id);
  };

  const selectState = (message: string, setter: (value: string) => void, value: string) => {
    setter(value);
    setAnnouncement(message);
  };

  const resetArtifactFilters = () => {
    setArtifactFilters([]);
    setAnnouncement(`${pastPerformanceArtifacts.length} past-performance records shown.`);
  };

  const toggleArtifactFilter = (category: ArtifactCategory) => {
    const next = artifactFilters.includes(category)
      ? artifactFilters.filter((item) => item !== category)
      : [...artifactFilters, category];
    const nextCount = next.length === 0
      ? pastPerformanceArtifacts.length
      : pastPerformanceArtifacts.filter((artifact) => next.every((item) => artifact.categories.includes(item))).length;
    setArtifactFilters(next);
    setAnnouncement(`${nextCount} past-performance record${nextCount === 1 ? "" : "s"} match the selected categories.`);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <p className="sr-only" aria-live="polite">{announcement}</p>

      <header className="site-header">
        <div className="utility-bar">
          <div className="page-frame utility-inner">
            <span>Peregrine for DCAA</span>
            <span>Enterprise audit intelligence</span>
          </div>
        </div>
        <div className="page-frame header-inner">
          <a className="brand" href="#top" aria-label="Peregrine for DCAA home" onClick={(event) => { event.preventDefault(); navigate("top"); }}>
            <img src={assets.logo} alt="Peregrine Advisors" />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? "active" : ""} aria-current={activeSection === item.id ? "location" : undefined} onClick={(event) => { event.preventDefault(); navigate(item.id); }}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-action" href="mailto:operations@peregrineadvisors.com?subject=DCAA%20interested%20in%20Peregrine%20Advisors">
            Discuss the opportunity <ArrowRight aria-hidden="true" />
          </a>
          <button ref={menuButtonRef} type="button" className="menu-trigger" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu-backdrop">
            <div ref={menuRef} id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site navigation">
              <div className="mobile-menu-head">
                <img src={assets.logo} alt="Peregrine Advisors" />
                <button type="button" aria-label="Close navigation" onClick={() => { setMenuOpen(false); menuButtonRef.current?.focus(); }}><X aria-hidden="true" /></button>
              </div>
              <nav aria-label="Mobile navigation">
                {navigation.map((item, index) => (
                  <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? "location" : undefined} onClick={(event) => { event.preventDefault(); navigate(item.id); }}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{item.label}<ArrowRight aria-hidden="true" />
                  </a>
                ))}
              </nav>
              <p>Use the data <span aria-hidden="true">→</span> Extract the intelligence <span aria-hidden="true">→</span> Enable delivery</p>
            </div>
          </div>
        )}
      </header>

      <aside className="phase-rail" aria-label="Current narrative phase">
        {(Object.keys(phaseLabels) as Phase[]).map((phase, index) => (
          <a key={phase} href={phase === "foundation" ? "#foundation" : phase === "intelligence" ? "#intelligence" : "#sec"} className={activePhase === phase ? "active" : ""} aria-current={activePhase === phase ? "step" : undefined} onClick={(event) => { event.preventDefault(); navigate(phase === "foundation" ? "foundation" : phase === "intelligence" ? "intelligence" : "sec"); }}>
            <span>{String(index + 1).padStart(2, "0")}</span>{phaseLabels[phase]}
          </a>
        ))}
      </aside>

      <main id="main-content">
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true"><img src={assets.hero} alt="" /></div>
          <div className="hero-grid" aria-hidden="true" />
          <div className="page-frame hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">Driving mission value for DCAA</p>
              <h1 id="hero-title">Enterprise audit intelligence for trusted history, predictive planning, and comparable contractor-cost insight.</h1>
              <p className="hero-lead">Peregrine brings financial-regulatory mission fluency, all-Exceptional SEC prime performance on AI and data contracts, and Azure strategy-through-production delivery at PCAOB and DDOT to DCAA's Azure Databricks lakehouse.</p>
              <div className="hero-actions">
                <button type="button" className="primary-action" onClick={() => navigate("alignment")}>Explore DCAA alignment <ArrowDown aria-hidden="true" /></button>
                <button type="button" className="secondary-action" onClick={() => navigate("sec")}>Our past performance <ArrowRight aria-hidden="true" /></button>
              </div>
            </div>
            <div className="hero-decision-field" aria-label="Three connected DCAA intended products">
              <p className="field-label">One enterprise data source: DCAA lakehouse</p>
              {products.map((product, index) => (
                <button key={product.id} type="button" className={activeProduct === product.id ? "active" : ""} aria-pressed={activeProduct === product.id} aria-controls="hero-product-context" onClick={() => selectState(`${product.title} selected`, setActiveProduct, product.id)}>
                  <span>{String(index + 1).padStart(2, "0")}</span><strong>{product.title}</strong>
                </button>
              ))}
              <div id="hero-product-context" className="hero-product-context" aria-live="polite">
                <span>DCAA intended product</span>
                <p>{selectedProduct.decision}</p>
                <strong>{selectedProduct.experience}</strong>
                <a href="#intelligence" onClick={(event) => { event.preventDefault(); navigate("intelligence"); }}>Review this DCAA intended product <ArrowRight aria-hidden="true" /></a>
              </div>
              <div className="field-spine" aria-hidden="true" />
            </div>
          </div>
          <div className="performance-strip">
            <div className="page-frame performance-strip-inner">
              {heroPastPerformance.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><ContextTooltip label={item} context={evidenceContexts.hero[index]} dark /></div>)}
            </div>
          </div>
        </section>

        <section className="peregrine-introduction" aria-labelledby="peregrine-intro-title">
          <div className="page-frame peregrine-introduction-layout">
            <div><p className="eyebrow">{peregrineIntroduction.eyebrow}</p><h2 id="peregrine-intro-title">{peregrineIntroduction.title}</h2></div>
            <div><p>{peregrineIntroduction.body}</p><ul>{peregrineIntroduction.details.map((detail) => <li key={detail}><Check aria-hidden="true" />{detail}</li>)}</ul></div>
          </div>
        </section>

        <section id="alignment" className="section alignment-section" aria-labelledby="alignment-title">
          <div className="page-frame">
            <SectionHeader index="01" eyebrow="Immediate acquisition relevance" title="Mission-driven DCAA intended outcomes, Peregrine capabilities, and past performance" intro="The matrix below provides a complete view of Peregrine's intended delivery, our approach to the solution, and relevant experience." />
            <div className="matrix-desktop">
              <table>
                <caption className="sr-only">DCAA intended outcomes mapped to Peregrine capabilities and relevant past performance</caption>
                <thead><tr><th scope="col">DCAA intended outcome</th><th scope="col">Peregrine capability and approach</th><th scope="col">Relevant past performance</th></tr></thead>
                <tbody>{matrixRows.map((row, index) => (
                  <tr key={row.outcome}>
                    <td><span>{String(index + 1).padStart(2, "0")}</span><strong>{row.outcome}</strong></td>
                    <td>{row.response}</td>
                    <td><div className="performance-with-context"><p>{row.pastPerformance}</p><ContextTooltip label={`${row.outcome} past performance`} context={evidenceContexts.matrix} /></div><a href={row.href}>View past performance <ArrowRight aria-hidden="true" /></a></td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <div className="matrix-mobile" aria-label="DCAA alignment matrix">
              {matrixRows.map((row, index) => (
                <article key={row.outcome}>
                  <span className="matrix-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <div><p>DCAA intended outcome</p><h3>{row.outcome}</h3></div>
                  <div><p>Peregrine capability and approach</p><span>{row.response}</span></div>
                  <div><p>Relevant past performance <ContextTooltip label={`${row.outcome} past performance`} context={evidenceContexts.matrix} /></p><span>{row.pastPerformance}</span></div>
                  <a href={row.href}>View past performance <ArrowRight aria-hidden="true" /></a>
                </article>
              ))}
            </div>
            <section className="pdsa-method" aria-labelledby="pdsa-title">
              <div className="pdsa-copy">
                <p className="eyebrow">{pdsaMethod.eyebrow}</p>
                <h3 id="pdsa-title">{pdsaMethod.title}</h3>
                <p>{pdsaMethod.body}</p>
                <div className="pdsa-stages">{pdsaMethod.stages.map((stage) => <div key={stage.id}><span>{stage.id}</span><strong>{stage.title}</strong><p>{stage.body}</p></div>)}</div>
              </div>
              <figure><img src={assets.pdsa} alt="Peregrine Design, Systems, and Agile method moving from problem identification through experimentation to iterative implementation" /><figcaption>{pdsaMethod.source}</figcaption></figure>
            </section>
            <section className="artifact-browser" aria-labelledby="artifact-browser-title">
              <div className="artifact-browser-heading">
                <div><span><Filter aria-hidden="true" /> Past performance filter</span><h3 id="artifact-browser-title">Explore mission-driven work at clients with needs similar to DCAA</h3></div>
                <p>Use the categories below to review relevant client engagements, delivery records, evaluations, governance work, leadership observations, and acquisition qualifications. Select more than one category to narrow the results.</p>
              </div>
              <div className="artifact-filter-toolbar" role="group" aria-label="Filter past performance by category">
                <button type="button" aria-pressed={artifactFilters.length === 0} className={artifactFilters.length === 0 ? "active" : ""} onClick={resetArtifactFilters}>
                  <span>All past performance</span><strong>{pastPerformanceArtifacts.length}</strong>
                </button>
                {artifactCategories.map((category) => {
                  const count = pastPerformanceArtifacts.filter((artifact) => artifact.categories.includes(category.id)).length;
                  const selected = artifactFilters.includes(category.id);
                  return <button key={category.id} type="button" aria-pressed={selected} className={selected ? "active" : ""} onClick={() => toggleArtifactFilter(category.id)}><span>{category.label}</span><strong>{count}</strong></button>;
                })}
              </div>
              <div className="artifact-result-status" aria-live="polite">
                <span>{String(filteredArtifacts.length).padStart(2, "0")}</span>
                <p>{artifactFilters.length === 0 ? "Past-performance records in the complete index" : `Past-performance records matching ${artifactFilters.length} selected categor${artifactFilters.length === 1 ? "y" : "ies"}`}</p>
                {artifactFilters.length > 0 && <button type="button" onClick={resetArtifactFilters}>Reset filters</button>}
              </div>
              {filteredArtifacts.length > 0 ? (
                <div className="artifact-grid">
                  {filteredArtifacts.map((artifact) => (
                    <article key={artifact.id} className="artifact-folio">
                      <header><span>{artifact.index}</span><p>{artifact.source}</p></header>
                      <h4>{artifact.title}</h4>
                      <p>{artifact.summary}</p>
                      <div>{artifact.categories.map((category) => <span key={category}>{artifactCategories.find((item) => item.id === category)?.label}</span>)}</div>
                      <a href={artifact.href} onClick={(event) => { event.preventDefault(); navigate(artifact.href.slice(1)); setAnnouncement(`${artifact.title} past performance opened.`); }}>Go to past performance <ArrowRight aria-hidden="true" /></a>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="artifact-empty" role="status"><Filter aria-hidden="true" /><h4>No past-performance record matches every selected category</h4><p>Remove one category or reset the complete index.</p><button type="button" onClick={resetArtifactFilters}>Show all past performance</button></div>
              )}
            </section>
          </div>
        </section>

        <section id="mental-map" className="section mental-map-section" aria-labelledby="mental-map-title">
          <div className="page-frame">
            <SectionHeader index="02" eyebrow="DCAA background and approach" title="Use the data. Extract the intelligence. Enable delivery." intro="Three connected actions organize DCAA's data, analytical, and delivery requirements." />
            <div className="mental-map-layout">
              <div className="mental-map-controls" role="group" aria-label="Three-part mental map">
                {mentalMap.map((item) => (
                  <button key={item.id} type="button" className={activeMap === item.id ? "active" : ""} aria-pressed={activeMap === item.id} onClick={() => selectState(`${item.title} selected`, setActiveMap, item.id)}>
                    <span>{item.number}</span><small>{item.label}</small><strong>{item.title}</strong><p>{item.body}</p><p className="mental-map-detail">{item.detail}</p>
                  </button>
                ))}
              </div>
              <aside className="alignment-rail" aria-live="polite">
                <p className="eyebrow">Connection to DCAA requirements</p>
                <div className="alignment-statement"><Target aria-hidden="true" /><div><span>{selectedMap.label}</span><strong>{selectedMap.title}</strong></div></div>
                <dl className="alignment-analysis">
                  <div><dt>DCAA data lakehouse requirements focus</dt><dd>{selectedMap.requirementsFocus}</dd></div>
                  <div><dt>Requested mission outcome</dt><dd>{selectedMap.request}</dd></div>
                  <div><dt>Why it matters</dt><dd>{selectedMap.value}</dd></div>
                </dl>
                <div className="official-links">
                  {officialLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ExternalLink aria-hidden="true" /></a>)}
                </div>
                <p className="hub-context">DCAA's transition to 23 hub locations increases the value of consistent enterprise data, reusable analytical services, and role-relevant access across distributed operations.</p>
              </aside>
            </div>
            <div className="mental-map-quote"><EvidenceQuote {...lidoQuotation} /></div>
          </div>
        </section>

        <section id="foundation" className="section foundation-section" aria-labelledby="foundation-title">
          <div className="page-frame">
            <SectionHeader index="03" eyebrow="Use the data" title="Build a foundation that preserves history, meaning, and evidence." intro="Peregrine connects source context, historical structures, governed semantic layers, machine-readable metadata, lineage, analytical models, and operating controls into an AI-ready Azure Databricks decision platform." dark />
            <div className="foundation-explorer">
              <div className="foundation-layers" role="group" aria-label="Trusted foundation layers">
                {foundationLayers.map((layer) => (
                  <button key={layer.id} type="button" className={activeLayer === layer.id ? "active" : ""} aria-pressed={activeLayer === layer.id} onClick={() => selectState(`${layer.title} selected`, setActiveLayer, layer.id)}>
                    <span>{layer.number}</span><strong>{layer.title}</strong><small>{layer.summary}</small>
                  </button>
                ))}
              </div>
              <article className="foundation-detail" aria-live="polite">
                <div className="detail-marker"><Database aria-hidden="true" /><span>{selectedLayer.number}</span></div>
                <p className="eyebrow">Selected layer</p>
                <h3>{selectedLayer.title}</h3>
                <p>{selectedLayer.detail}</p>
                <div><span>Relevant past performance <ContextTooltip label={`${selectedLayer.title} past performance`} context={evidenceContexts.foundation} /></span><strong>{selectedLayer.pastPerformance}</strong></div>
              </article>
            </div>
            <div className="foundation-principles">
              <div><Fingerprint aria-hidden="true" /><strong>Preserve provenance</strong><span>Connect every result to source evidence and transformation history.</span></div>
              <div><ShieldCheck aria-hidden="true" /><strong>Apply approved controls</strong><span>Work inside DCAA-approved identity, network, repository, security, and release boundaries.</span></div>
              <div><Layers3 aria-hidden="true" /><strong>Design for AI readiness and reuse</strong><span>Build governed semantic layers, machine-readable metadata, retrieval-ready knowledge assets, reusable data products, and documented operating knowledge.</span></div>
            </div>
          </div>
        </section>

        <section id="intelligence" className="section intelligence-section" aria-labelledby="intelligence-title">
          <div className="page-frame">
            <SectionHeader index="04" eyebrow="Extract the intelligence" title="Trusted performance history, predictive assignment planning, and comparable contractor-cost intelligence make the lakehouse operational." intro="Each DCAA intended product begins with the decision the agency needs to make, then connects the data foundation, analytical method, user experience, acceptance criteria, and relevant Peregrine past performance." />
            <div className="product-selector" role="group" aria-label="Decision-intelligence products">
              {products.map((product) => (
                <button key={product.id} type="button" className={activeProduct === product.id ? "active" : ""} aria-pressed={activeProduct === product.id} onClick={() => selectState(`${product.title} selected`, setActiveProduct, product.id)}>
                  <span>{product.number}</span><strong>{product.title}</strong><small>{product.decision}</small>
                </button>
              ))}
            </div>
            <article className="product-detail" aria-live="polite">
              <div className="product-detail-lead"><span>{selectedProduct.number}</span><div><p className="eyebrow">DCAA intended product</p><h3>{selectedProduct.title}</h3><p>{selectedProduct.decision}</p></div></div>
              <div className="product-journey">
                <div><span>Data foundation</span><p>{selectedProduct.foundation}</p></div>
                <div><span>Analytical method</span><p>{selectedProduct.method}</p></div>
                <div><span>User experience</span><p>{selectedProduct.experience}</p></div>
                <div><span>Acceptance evidence</span><p>{selectedProduct.acceptance}</p></div>
              </div>
              <footer><FileCheck2 aria-hidden="true" /><span>Relevant Peregrine past performance</span><strong>{selectedProduct.pastPerformance}</strong></footer>
            </article>
          </div>
        </section>

        <section id="capabilities" className="section capabilities-section" aria-labelledby="capabilities-title">
          <div className="page-frame">
            <SectionHeader index="05" eyebrow="Our capabilities" title="Our capabilities cover the full enterprise data-product lifecycle." intro="Nine capabilities span leadership, platform engineering, trusted data, decision products, user adoption, controls, production assurance, and sustainment. Each capability is assessed as Substantially exceeds." />
            <div className="capability-layout">
              <div className="capability-map" role="group" aria-label="Nine-capability explorer">
                {(["Deliver", "Decide", "Assure"] as const).map((group) => (
                  <div className="capability-group" key={group}>
                    <p>{group}</p>
                    {capabilities.filter((capability) => capability.group === group).map((capability) => (
                      <button key={capability.id} type="button" className={activeCapability === capability.id ? "active" : ""} aria-pressed={activeCapability === capability.id} onClick={() => selectState(`${capability.title} selected`, setActiveCapability, capability.id)}>
                        <span>{capability.number}</span><strong>{capability.title}</strong><small>{capability.assessment}</small>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
              <article className="capability-detail" aria-live="polite">
                <div className="capability-detail-head"><span>{selectedCapability.number}</span><div><p className="eyebrow">{selectedCapability.group}</p><h3>{selectedCapability.title}</h3></div><strong className="assessment">{selectedCapability.assessment}</strong></div>
                <p className="capability-statement">{selectedCapability.statement}</p>
                <dl>
                  <div><dt>DCAA outcome</dt><dd>{selectedCapability.outcome}</dd></div>
                  <div><dt>Peregrine methods</dt><dd>{selectedCapability.methods}</dd></div>
                  <div><dt>Relevant past performance</dt><dd>{selectedCapability.pastPerformance}</dd></div>
                  {selectedCapability.optional && <div className="optional-detail"><dt>Optional innovation</dt><dd>{selectedCapability.optional} <a href="#innovation">View the governed path <ArrowRight aria-hidden="true" /></a></dd></div>}
                </dl>
              </article>
            </div>
            <div className="capability-mobile-list">
              {capabilities.map((capability) => (
                <details key={capability.id}>
                  <summary><span>{capability.number}</span><div><strong>{capability.title}</strong><small>{capability.assessment}</small></div><ChevronDown aria-hidden="true" /></summary>
                  <div><p>{capability.statement}</p><dl><div><dt>DCAA outcome</dt><dd>{capability.outcome}</dd></div><div><dt>Peregrine methods</dt><dd>{capability.methods}</dd></div><div><dt>Relevant past performance</dt><dd>{capability.pastPerformance}</dd></div></dl></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="innovation" className="section innovation-section" aria-labelledby="innovation-title">
          <div className="page-frame">
            <div className="optional-label"><Sparkles aria-hidden="true" /> Optional integrated innovation path</div>
            <SectionHeader index="06" eyebrow="DCAA-governed evaluation" title="Optional federal SDLC automation within DCAA's approved ecosystem." intro="Through its partnership with Inadev, Peregrine can make Ceebit available through an at-cost evaluation focused on a DCAA-selected internal product-development workflow." dark />
            <div className="innovation-intro">
              <p>Ceebit is an agentic-AI orchestration tool that coordinates work across approved requirements, code, testing, documentation, security, pipeline, quality, and release systems. It operates through technologies and workflows DCAA authorizes.</p>
              <p>DCAA defines the use case, environment, controls, human review gates, measures, and continuation decision. The same delivery pattern can use Ceebit, another approved orchestration tool, or a Peregrine-built capability.</p>
            </div>
            <ol className="ceebit-flow">
              {ceebitSteps.map((step, index) => <li key={step.number}><span>{step.number}</span><div><strong>{step.title}</strong><p>{step.body}</p></div>{index < ceebitSteps.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}
            </ol>
            <aside className="innovation-feature" aria-label="Verified Inadev federal operating experience">
              <div><span>USCIS FINCH Analytics</span><p>Inadev leads the five-year FINCH Analytics program supporting fraud identification through data science, analytics, Agile delivery, DevSecOps, and human-centered design.</p></div>
              <div><span>IRS mission solutions</span><p>Inadev supports the IRS Return Preparer Strategy and an augmented-reality mobile tax-compliance solution. These federal programs demonstrate operating depth and remain distinct from Ceebit product performance.</p></div>
            </aside>
            <div className="ceebit-quote"><EvidenceQuote {...quotations.ceebit} dark /></div>
            <div className="innovation-controls">
              <div><span>Governance</span><p>Least privilege, approved model and tool use, controlled data movement, activity logging, artifact review, and alignment with software and AI governance.</p></div>
              <div><span>Human oversight</span><p>Named reviewers approve requirements, architecture, code, tests, security findings, release artifacts, and production action.</p></div>
              <div><span>DCAA ownership</span><p>DCAA retains code, artifacts, repository history, documentation, configuration knowledge, continuation authority, and technology-selection authority.</p></div>
              <div><span>Federal past performance</span><p>Peregrine and Inadev collaborate on SEC FarPoint. Inadev brings additional USCIS FINCH and IRS operating experience that remains distinct from Ceebit product performance.</p></div>
            </div>
          </div>
        </section>

        <section id="sec" className="section sec-section" aria-labelledby="sec-title">
          <div className="sec-art" aria-hidden="true"><i /><i /><i /><span /><span /><span /></div>
          <div className="page-frame">
            <SectionHeader index="07" eyebrow="Past performance: creating client value through delivery" title="Exceptional value across every evaluated category on three SEC prime call orders." intro="Peregrine serves as prime across connected data science and use, data visualization, and data governance workstreams, translating complex financial-regulatory data into sustained mission capability." dark />
            <div id="sec-evaluations" className="sec-summary">
              <div><strong>ALL</strong><span>Exceptional CPARS across current SEC prime call orders</span></div><div><strong>3</strong><span>Current SEC prime call orders evaluated</span></div><div><strong>2018</strong><span>SEC delivery continuity progressing to accountable prime leadership</span></div>
            </div>
            <div className="sec-workstream-layout">
              <div className="sec-tabs" role="group" aria-label="SEC prime workstreams">
                {secWorkstreams.map((workstream) => (
                  <button key={workstream.id} type="button" className={activeSec === workstream.id ? "active" : ""} aria-pressed={activeSec === workstream.id} onClick={() => selectState(`${workstream.title} selected`, setActiveSec, workstream.id)}>
                    <span>{workstream.order}</span><strong>{workstream.title}</strong><small>Exceptional in every evaluated category</small>
                  </button>
                ))}
              </div>
              <article className="sec-detail" aria-live="polite">
                <p className="eyebrow">SEC prime call order</p><h3>{selectedSec.title}</h3><a className="sec-award-link" href={selectedSec.awardHref} target="_blank" rel="noreferrer">Federal award {selectedSec.order}<ExternalLink aria-hidden="true" /></a><p>{selectedSec.summary}</p>
                <div className="rating-grid">{selectedSec.categories.map((category) => <div key={category}><Check aria-hidden="true" /><span>{category}</span><strong>Exceptional</strong></div>)}</div>
                <div className="sec-performance"><span>Relevant past performance</span><p>{selectedSec.pastPerformance}</p></div>
                <div className="sec-client-value"><span>Value created for the client</span><p>{selectedSec.value}</p></div>
              </article>
            </div>
            <div id="sec-testimony" className="sec-quotes">
              <EvidenceQuote {...quotations.secDelivery} context={undefined} dark />
              <EvidenceQuote {...quotations.secInnovation} context={undefined} dark />
            </div>
            <p className="prime-note">Peregrine leads a prime team that includes Accenture Federal Services. AWS is also a member of Peregrine's team.</p>
          </div>
        </section>

        <section id="azure-experience" className="section azure-section" aria-labelledby="azure-title">
          <div className="page-frame">
            <SectionHeader index="08" eyebrow="Our Azure experience" title="A common strategic approach created production value for PCAOB and DDOT." intro="PCAOB demonstrates financial-regulatory enterprise-data strategy carried into managed Azure implementation. DDOT demonstrates Azure engineering, mission products, governance, and adoption in an operational setting." />
            <div className="azure-visual" role="img" aria-label="PCAOB financial-regulatory strategy and DDOT mission products connected by a shared Azure delivery spine">
              <div className="azure-field azure-field-left"><span>Financial regulation</span><strong>PCAOB</strong><small>Strategy · Governance · Managed service</small><i /><i /><i /></div>
              <div className="azure-spine"><Network aria-hidden="true" /><span>Azure delivery spine</span></div>
              <div className="azure-field azure-field-right"><span>Mission operations</span><strong>DDOT</strong><small>Data products · Governance · Adoption</small><i /><i /><i /></div>
            </div>
            <div className="azure-cases">
              {azureCases.map((caseStudy) => (
                <article key={caseStudy.id} id={caseStudy.id}>
                  <p className="eyebrow">{caseStudy.eyebrow}</p><h3><span>{caseStudy.client}</span>{caseStudy.title}</h3><p>{caseStudy.summary}</p>
                  <div className="case-performance-label">Value created for the client</div>
                  <ul>{caseStudy.pastPerformance.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                  <div><span>DCAA relevance</span><p>{caseStudy.relevance}</p></div>
                  {caseStudy.id === "pcaob" && <div className="case-quotes"><EvidenceQuote {...quotations.pcaobStrategy} /><EvidenceQuote {...quotations.pcaobDelivery} /></div>}
                  {caseStudy.id === "ddot" && <div id="ddot-testimony" className="case-quotes"><EvidenceQuote {...quotations.ddotCulture} context={undefined} /><EvidenceQuote {...quotations.ddotModernization} context={undefined} /></div>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section portfolio-section" aria-labelledby="portfolio-title">
          <div className="page-frame">
            <SectionHeader index="09" eyebrow="Deep cloud expertise" title="Secure delivery discipline transfers across missions and clouds." intro="Azure provides direct platform experience. AWS demonstrates regulated federal scale and secure AI. Google Cloud demonstrates portability and product-development breadth. Every path flows into DCAA's approved ecosystem." dark />
            <div className="cloud-layout">
              <div className="cloud-visual" role="img" aria-label="Azure, AWS, and Google Cloud experience converging into DCAA's approved Azure Databricks ecosystem">
                <div className="cloud-stream cloud-stream-azure"><span>01</span><strong>Azure</strong><small>PCAOB · DDOT</small></div>
                <div className="cloud-stream cloud-stream-aws"><span>02</span><strong>AWS</strong><small>SEC · FDA</small></div>
                <div className="cloud-stream cloud-stream-google"><span>03</span><strong>Google Cloud</strong><small>Portable product engineering</small></div>
                <div className="cloud-convergence" aria-hidden="true"><i /><i /><i /></div>
                <div className="cloud-destination"><Network aria-hidden="true" /><strong>DCAA</strong><small>Approved Azure Databricks ecosystem</small></div>
              </div>
              <div className="cloud-paths">
                {cloudPaths.map((path, index) => <article key={path.cloud}><span>{String(index + 1).padStart(2, "0")}</span><Cloud aria-hidden="true" /><div><h3>{path.cloud}</h3><strong>{path.evidence}</strong><p>{path.value}</p></div></article>)}
                <article className="dcaa-destination"><span>04</span><Network aria-hidden="true" /><div><h3>DCAA-approved ecosystem</h3><strong>Azure Databricks and approved agency controls</strong><p>Architecture and delivery grounded in DCAA's environment, security posture, operating model, and ownership requirements.</p></div></article>
              </div>
            </div>
            <div className="supporting-portfolio">
              {supportingPortfolio.map((item) => <article key={item.client} id={item.client === "FDA FiDLE" ? "fda-fidle" : item.client === "NYDFS" ? "nydfs" : undefined}><span>{item.cloud}</span><h3>{item.client}</h3><p>{item.body}</p></article>)}
            </div>
            <div id="fda-testimony" className="portfolio-quote"><EvidenceQuote {...quotations.fda} context={undefined} dark /></div>
          </div>
        </section>

        <section id="team" className="section team-section" aria-labelledby="team-title">
          <div className="page-frame">
            <SectionHeader index="10" eyebrow="Representative solutioning team" title="Senior depth across mission, platform, DevSecOps, analytics, and governance." intro="The representative team brings executive leadership, enterprise architecture, technical quality, responsible AI, implementation, and data-policy depth aligned to DCAA's priorities." />
            <div className="team-constellation">
              <div className="team-controls" role="group" aria-label="Representative Peregrine solutioning team">
                {team.map((person) => (
                  <button key={person.name} type="button" className={activePerson === person.name ? "active" : ""} aria-pressed={activePerson === person.name} onClick={() => selectState(`${person.name} selected`, setActivePerson, person.name)}>
                    <span>{person.number}</span><div><strong>{person.name}</strong><small>{person.role}</small></div><ArrowRight aria-hidden="true" />
                  </button>
                ))}
              </div>
              <article className="person-detail" aria-live="polite">
                <div className="person-detail-head"><div className="person-monogram" aria-hidden="true">{selectedPerson.initials}</div><div><p className="eyebrow">{selectedPerson.role}</p><h3>{selectedPerson.name}</h3><span>{selectedPerson.companyTitle}</span></div></div><p className="person-profile">{selectedPerson.profile}</p>
                <blockquote className="person-focus"><span>DCAA focus</span><p>{selectedPerson.focus}</p></blockquote>
                <dl><div><dt>Solution contribution</dt><dd>{selectedPerson.contribution}</dd></div><div><dt>Capability coverage</dt><dd>{selectedPerson.coverage}</dd></div><div><dt>Relevant background</dt><dd>{selectedPerson.pastPerformance}</dd></div><div className="education-box"><dt>Education</dt><dd>{selectedPerson.education}</dd></div></dl>
              </article>
            </div>
            <div className="optional-team">
              <div><p className="eyebrow">Senior team members from Inadev</p><h3>Specialized federal engineering and innovation depth</h3><p>Inadev adds focused federal engineering, cloud-native delivery, and AI-enabled product depth to the integrated team.</p></div>
              <div className="inadev-list">{inadevTeam.map((person) => <article key={person.name}><Users aria-hidden="true" /><div><strong>{person.name}</strong><span>{person.role}</span><p>{person.value}</p></div></article>)}</div>
              <a href="#innovation">Review the optional innovation path <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="next-step" className="section next-step-section" aria-labelledby="next-step-title">
          <div className="page-frame next-step-layout">
            <div>
              <p className="eyebrow">Next steps</p>
              <h2 id="next-step-title">Bring enterprise audit intelligence into focus.</h2>
              <p>Peregrine combines relevant financial-regulatory and Azure experience with federal and DoW procurement readiness: SBA 8(a), active SAM.gov registration, CAGE 8DZL0, UEI MJGLSKTGZS68, and GSA Multiple Award Schedule contract 47QTCA23D0028 under SIN 54151S, Information Technology Professional Services.</p>
              <a className="primary-action" href="mailto:operations@peregrineadvisors.com?subject=DCAA%20interested%20in%20Peregrine%20Advisors">Email Peregrine about DCAA <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <aside>
              <div className="cta-flight-mark" aria-hidden="true"><i /><i /><i /></div>
              <span>Procurement readiness <ContextTooltip label="CMMC documentation" context="Supporting documentation for CMMC Status: Final Level 2 (C3PAO) is available upon request." /></span>
              <ul><li><Check aria-hidden="true" />SBA 8(a) prime</li><li><Check aria-hidden="true" />Active SAM.gov registration, CAGE 8DZL0, UEI MJGLSKTGZS68</li><li><Check aria-hidden="true" />GSA MAS 47QTCA23D0028, SIN 54151S</li><li><Check aria-hidden="true" />CMMC Status: Final Level 2 (C3PAO)</li><li><Check aria-hidden="true" />Social enterprise organized as a State of Maryland Benefit Corporation</li><li><Check aria-hidden="true" />All-Exceptional CPARS on current prime contracts</li><li><Check aria-hidden="true" />Sustained record of excellent federal data and technology delivery</li><li><Check aria-hidden="true" />Direct Azure and financial-regulatory experience</li></ul>
            </aside>
          </div>
        </section>

        <section id="understanding" className="section understanding-section" aria-labelledby="understanding-title">
          <div className="page-frame">
            <SectionHeader index="Appendix" eyebrow="Our understanding of DCAA" title="An audit agency operating at enterprise scale while transforming through data and technology." intro={dcaaProfile.mission} />
            <div className="agency-scale" aria-label="DCAA operating scale">{dcaaProfile.scale.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></article>)}</div>
            <section className="agency-priorities" aria-labelledby="agency-priorities-title">
              <div><p className="eyebrow">Strategic direction</p><h3 id="agency-priorities-title">Three priorities frame DCAA's transformation</h3></div>
              <div className="agency-priority-map">{dcaaProfile.priorities.map((priority) => <article key={priority.number}><span>{priority.number}</span><h4>{priority.title}</h4><p>{priority.body}</p></article>)}</div>
            </section>
            <div className="agency-profile-grid">
              <section aria-labelledby="agency-organization-title"><p className="eyebrow">Operating model</p><h3 id="agency-organization-title">A distributed enterprise with mission directorates and hub-based delivery</h3><ul>{dcaaProfile.organization.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></section>
              <section aria-labelledby="agency-context-title"><p className="eyebrow">Operating context</p><h3 id="agency-context-title">Scale, timing, and professional judgment shape the technology requirement</h3><ul>{dcaaProfile.operatingContext.map((item) => <li key={item}><ArrowRight aria-hidden="true" />{item}</li>)}</ul></section>
            </div>
            <section className="agency-technology" aria-labelledby="agency-technology-title">
              <div className="agency-technology-intro"><p className="eyebrow">Data and technology emphasis</p><h3 id="agency-technology-title">The opportunity is an enterprise operating capability</h3><p>Modernization connects governed data, analytical products, controlled AI, modern architecture, cybersecurity, and workforce enablement into a consistent agency capability.</p></div>
              <div className="agency-technology-map">{dcaaProfile.technology.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><Network aria-hidden="true" /><h4>{item.title}</h4><p>{item.body}</p></article>)}</div>
            </section>
            <div className="agency-sources"><span>Official DCAA sources</span>{dcaaProfile.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label}<ExternalLink aria-hidden="true" /></a>)}</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-frame footer-inner footer-leave-behind">
          <img src={assets.logo} alt="Peregrine Advisors" />
          <figure><Quote aria-hidden="true" /><blockquote>“{quotations.secRecommendation.text}”</blockquote><figcaption><strong>{quotations.secRecommendation.speaker}</strong><span>{quotations.secRecommendation.role}</span></figcaption></figure>
        </div>
        <div className="page-frame footer-legal"><span>Prepared for procurement and mission leadership for DCAA</span><span>Prepared exclusively for DCAA procurement and mission evaluation. Please do not distribute outside authorized DCAA procurement, legal, technical, and mission personnel without Peregrine's written consent. Content remains subject to independent procurement review and required approvals.</span></div>
      </footer>
    </div>
  );
}
