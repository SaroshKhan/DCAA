import { chromium } from "playwright";
import { writeFile } from "node:fs/promises";

const baseUrl = process.env.QA_URL ?? "http://127.0.0.1:3000";
const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440];
const requiredSections = [
  "top",
  "alignment",
  "mental-map",
  "foundation",
  "intelligence",
  "capabilities",
  "innovation",
  "sec",
  "azure-experience",
  "portfolio",
  "team",
  "next-step",
  "understanding",
];

const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const results = [];

for (const width of widths) {
  const context = await browser.newContext({
    viewport: { width, height: width < 700 ? 844 : 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto(baseUrl, { waitUntil: "networkidle" });

  const layout = await page.evaluate((sections) => {
    const bodyFont = Number.parseFloat(getComputedStyle(document.body).fontSize);
    const images = Array.from(document.images).map((image) => ({
      src: image.currentSrc || image.src,
      complete: image.complete,
      naturalWidth: image.naturalWidth,
    }));
    const externalLinks = Array.from(document.querySelectorAll('a[target="_blank"]')).map((link) => ({
      label: link.textContent?.trim() ?? "",
      rel: link.getAttribute("rel") ?? "",
    }));
    const visibleTargets = Array.from(document.querySelectorAll("a[href], button"))
      .filter((element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return { label: element.textContent?.trim().slice(0, 80) ?? "", width: rect.width, height: rect.height };
      });
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyFont,
      h1Count: document.querySelectorAll("h1").length,
      sectionPresence: sections.map((id) => ({ id, present: Boolean(document.getElementById(id)) })),
      images,
      externalLinks,
      visibleTargets,
    };
  }, requiredSections);

  const isMobile = width < 900;
  const matrixState = await page.evaluate(() => ({
    desktop: getComputedStyle(document.querySelector(".matrix-desktop")).display,
    mobile: getComputedStyle(document.querySelector(".matrix-mobile")).display,
  }));

  const interactionChecks = [];
  const contactHrefs = await page.locator('a[href^="mailto:"]').evaluateAll((links) => links.map((link) => link.getAttribute("href") || ""));
  interactionChecks.push({ name: "opportunity actions open operations email with approved subject", passed: contactHrefs.length >= 2 && contactHrefs.every((href) => href === "mailto:operations@peregrineadvisors.com?subject=DCAA%20interested%20in%20Peregrine%20Advisors") });
  const heroProductButtons = page.locator(".hero-decision-field > button");
  const initialHeroContext = await page.locator("#hero-product-context").innerText();
  await heroProductButtons.nth(1).click();
  const updatedHeroContext = await page.locator("#hero-product-context").innerText();
  interactionChecks.push({ name: "hero decision control reveals explanatory context", passed: initialHeroContext !== updatedHeroContext && (await heroProductButtons.nth(1).getAttribute("aria-pressed")) === "true" });
  interactionChecks.push({ name: "alignment matrix is simplified", passed: (await page.locator("#alignment .matrix-desktop tbody .context-trigger, #alignment .matrix-desktop tbody a, #alignment .matrix-mobile .context-trigger, #alignment .matrix-mobile a").count()) === 0 });
  interactionChecks.push({ name: "past performance is a static ten-record list", passed: (await page.locator(".artifact-folio").count()) === 10 && (await page.locator(".artifact-filter-toolbar, .artifact-result-status, .artifact-empty, .artifact-folio > a, .artifact-folio header > span").count()) === 0 });
  interactionChecks.push({ name: "GSA acquisition qualification is present", passed: (await page.locator("body").innerText()).includes("47QTCA23D0028") && (await page.locator("body").innerText()).includes("54151S") });
  interactionChecks.push({ name: "final management-review language applied", passed: await page.evaluate(() => {
    const text = document.body.innerText;
    const lower = text.toLowerCase();
    const prohibitedTerm = new RegExp(`(^|\\W)${"pro" + "of"}(\\W|$)`, "i");
    const controlledRequirementsTerm = new RegExp(`(^|\\W)${"PW" + "S"}(\\W|$)`);
    return !prohibitedTerm.test(text) && !controlledRequirementsTerm.test(text) && lower.includes("driving mission value for dcaa") && lower.includes("unique data and technology innovation hub") && text.includes("Mission-driven DCAA intended outcomes, Peregrine capabilities, and past performance") && lower.includes("dcaa background and approach") && text.includes("Use the data. Extract the intelligence. Enable delivery.") && text.includes("Design for AI readiness and reuse");
  }) });
  interactionChecks.push({ name: "all nine capability assessments substantially exceed", passed: await page.locator(".capability-group button small").evaluateAll((items) => items.length === 9 && items.every((item) => item.textContent?.trim() === "Substantially exceeds")) });
  interactionChecks.push({ name: "approved PCAOB quotations and attributions are present", passed: await page.evaluate(() => document.body.innerText.includes("Peregrine brings a unique implementation-oriented perspective on strategy development") && document.body.innerText.includes("Pooja Sangwan") && document.body.innerText.includes("Chief of Staff, Office of Technology, PCAOB") && document.body.innerText.includes("Peregrine has been refreshing. A delivery-first consulting firm") && document.body.innerText.includes("Ahmed Aboulnaga")) });
  interactionChecks.push({ name: "procurement registrations and Benefit Corporation language are present", passed: await page.evaluate(() => document.body.innerText.includes("SAM.gov") && document.body.innerText.includes("CAGE 8DZL0") && document.body.innerText.includes("UEI MJGLSKTGZS68") && document.body.innerText.includes("State of Maryland Benefit Corporation")) });
  interactionChecks.push({ name: "approved CMMC status and State of Maryland Benefit Corporation treatment are present", passed: await page.evaluate(() => document.body.innerText.includes("CMMC Status: Final Level 2 (C3PAO)") && document.body.innerText.includes("Social enterprise organized as a State of Maryland Benefit Corporation")) });
  const certificationTooltip = page.locator("#next-step .context-trigger");
  await certificationTooltip.click();
  interactionChecks.push({ name: "certification documentation tooltip opens", passed: (await certificationTooltip.getAttribute("aria-expanded")) === "true" && (await page.locator("#next-step .context-panel.open").innerText()).includes("available upon request") });
  await page.keyboard.press("Escape");
  interactionChecks.push({ name: "certification documentation tooltip closes with Escape", passed: (await certificationTooltip.getAttribute("aria-expanded")) === "false" });
  interactionChecks.push({ name: "internal context tooltips removed from client-value sections", passed: (await page.locator("#sec .sec-performance .context-trigger, #azure-experience .azure-cases .context-trigger, #portfolio #fda-testimony .context-trigger, #team .person-detail .context-trigger").count()) === 0 });
  interactionChecks.push({ name: "three SEC federal award links are present", passed: await page.locator(".sec-tabs button").evaluateAll((buttons) => buttons.length === 3 && buttons.every((button) => /5031022[45]F0(001|171|174)/.test(button.textContent || ""))) && (await page.locator(".sec-award-link").getAttribute("href"))?.startsWith("https://orangeslices.ai/") === true });
  interactionChecks.push({ name: "footer leave-behind replaces repeated navigation", passed: (await page.locator("footer nav").count()) === 0 && (await page.locator(".footer-leave-behind blockquote").innerText()).includes("Peregrine has been top-notch in providing high-quality resources") });
  let teamProfilesComplete = (await page.locator(".team-controls button").count()) === 6;
  for (let index = 0; index < 6 && teamProfilesComplete; index += 1) {
    await page.locator(".team-controls button").nth(index).click();
    teamProfilesComplete = (await page.locator(".education-box dd").innerText()).trim().length > 10 && (await page.locator(".person-quote p").innerText()).trim().length > 40 && (await page.locator(".person-quote > span").innerText()).toLowerCase().startsWith("quotation from ");
  }
  interactionChecks.push({ name: "all six Peregrine profiles include education and attributed quotations", passed: teamProfilesComplete && (await page.locator(".team-controls button").first().click().then(async () => (await page.locator(".person-monogram").innerText()) === "SK")) });
  interactionChecks.push({ name: "education treatment matches other team information", passed: await page.locator(".person-detail dl").evaluate((list) => { const blocks = Array.from(list.children); if (blocks.length < 4) return false; const first = getComputedStyle(blocks[0]); const education = getComputedStyle(blocks[3]); return first.borderTopColor === education.borderTopColor && first.backgroundColor === education.backgroundColor; }) });
  interactionChecks.push({ name: "Peregrine introduction is present", passed: await page.evaluate(() => document.body.innerText.includes("A federal data and AI partner built for mission value") && document.body.innerText.includes("Senior, multidisciplinary leadership")) });
  interactionChecks.push({ name: "P-DSA method uses the cleaned source graphic", passed: (await page.locator(".pdsa-method figcaption").count()) === 0 && await page.locator(".pdsa-method img").evaluate((image) => image.complete && image.naturalWidth > 0 && image.currentSrc.includes("peregrine-pdsa-method")) });
  interactionChecks.push({ name: "Lido quotation is positioned under the three approach cards", passed: (await page.locator(".mental-map-main > .mental-map-quote").count()) === 1 });
  interactionChecks.push({ name: "Lido and Mitchell quotations are present", passed: await page.evaluate(() => document.body.innerText.includes("Peregrine has consistently demonstrated outstanding performance") && document.body.innerText.includes("Lido Ramadan") && document.body.innerText.includes("great testament to the Inadev team’s hard work helping IRS") && document.body.innerText.includes("Mitchell D. Winans")) });
  interactionChecks.push({ name: "SEC growth narrative is present", passed: await page.evaluate(() => document.body.innerText.includes("SEC growth and prime performance") && document.body.innerText.includes("footprint across five divisions and offices") && document.body.innerText.includes("all-Exceptional CPARS")) });
  const azureBox = await page.locator(".azure-visual").boundingBox();
  interactionChecks.push({ name: "Azure delivery spine uses the compact aspect ratio", passed: Boolean(azureBox && azureBox.width / azureBox.height > (isMobile ? 1.2 : 3.5)) });
  interactionChecks.push({ name: "alternate Austin footer quotation is present", passed: await page.evaluate(() => document.body.innerText.includes("Peregrine has been top-notch in providing high-quality resources") && document.body.innerText.includes("fully recommend them to others")) });
  interactionChecks.push({ name: "DCAA appendix profile is complete", passed: await page.evaluate(() => document.body.innerText.toLowerCase().includes("our understanding of dcaa") && document.body.innerText.includes("$788.4B") && document.body.innerText.includes("$5.3B") && document.body.innerText.includes("$7.5:1") && document.body.innerText.includes("~9,000") && document.body.innerText.includes("~10,000") && document.body.innerText.includes("$633.0M") && document.querySelectorAll("#understanding .agency-technology-map article").length === 4 && document.querySelectorAll("#understanding .agency-sources a").length === 3) });
  if (isMobile) {
    await page.locator(".menu-trigger").click();
    interactionChecks.push({ name: "mobile menu opens", passed: await page.locator("#mobile-menu").isVisible() });
    interactionChecks.push({ name: "mobile menu locks body scroll", passed: await page.evaluate(() => document.body.style.overflow === "hidden") });
    await page.keyboard.press("Escape");
    interactionChecks.push({ name: "Escape closes mobile menu", passed: !(await page.locator("#mobile-menu").isVisible().catch(() => false)) });
    const firstCapability = page.locator(".capability-mobile-list details").first();
    await firstCapability.locator("summary").click();
    interactionChecks.push({ name: "mobile capability disclosure opens", passed: await firstCapability.evaluate((element) => element.hasAttribute("open")) });
    const mobileTooltip = page.locator(".context-trigger").first();
    await mobileTooltip.click();
    interactionChecks.push({ name: "touch tooltip opens", passed: (await mobileTooltip.getAttribute("aria-expanded")) === "true" && await page.locator(".context-panel.open").first().isVisible() });
    await page.keyboard.press("Escape");
    interactionChecks.push({ name: "Escape closes touch tooltip", passed: (await mobileTooltip.getAttribute("aria-expanded")) === "false" });
  } else {
    const interactions = [
      ["product selector", ".product-selector button", 1],
      ["foundation selector", ".foundation-layers button", 1],
      ["capability selector", ".capability-group button", 4],
      ["SEC workstream selector", ".sec-tabs button", 1],
      ["team selector", ".team-controls button", 4],
    ];
    for (const [name, selector, index] of interactions) {
      const target = page.locator(selector).nth(Number(index));
      await target.click();
      interactionChecks.push({ name, passed: (await target.getAttribute("aria-pressed")) === "true" });
    }
    const desktopTooltip = page.locator(".context-trigger").first();
    await desktopTooltip.hover();
    interactionChecks.push({ name: "hover tooltip opens", passed: (await desktopTooltip.getAttribute("aria-expanded")) === "true" && await page.locator(".context-panel.open").first().isVisible() });
    await desktopTooltip.focus();
    interactionChecks.push({ name: "focus tooltip remains open", passed: (await desktopTooltip.getAttribute("aria-expanded")) === "true" });
    await page.keyboard.press("Escape");
    interactionChecks.push({ name: "Escape closes focused tooltip", passed: (await desktopTooltip.getAttribute("aria-expanded")) === "false" });
  }

  const mobileTargetViolations = isMobile
    ? layout.visibleTargets.filter((target) => target.width < 44 || target.height < 44)
    : [];
  const failures = [
    ...(layout.scrollWidth > layout.clientWidth ? [`horizontal overflow: ${layout.scrollWidth}px > ${layout.clientWidth}px`] : []),
    ...(layout.bodyFont < 16 ? [`body font below 16px: ${layout.bodyFont}px`] : []),
    ...(layout.h1Count !== 1 ? [`expected one h1, found ${layout.h1Count}`] : []),
    ...layout.sectionPresence.filter((item) => !item.present).map((item) => `missing section #${item.id}`),
    ...layout.images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => `broken image ${image.src}`),
    ...layout.externalLinks.filter((link) => !link.rel.includes("noreferrer")).map((link) => `unsafe external link ${link.label}`),
    ...(isMobile && matrixState.desktop !== "none" ? ["desktop matrix visible on mobile"] : []),
    ...(isMobile && matrixState.mobile === "none" ? ["mobile matrix hidden on mobile"] : []),
    ...(!isMobile && matrixState.desktop === "none" ? ["desktop matrix hidden on desktop"] : []),
    ...(!isMobile && matrixState.mobile !== "none" ? ["mobile matrix visible on desktop"] : []),
    ...interactionChecks.filter((check) => !check.passed).map((check) => `interaction failed: ${check.name}`),
    ...mobileTargetViolations.map((target) => `small touch target ${target.label}: ${target.width.toFixed(1)}x${target.height.toFixed(1)}`),
    ...consoleErrors.map((error) => `console error: ${error}`),
    ...pageErrors.map((error) => `page error: ${error}`),
  ];

  results.push({ width, passed: failures.length === 0, failures, interactionChecks });
  await context.close();
}

await browser.close();

const summary = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  passed: results.every((result) => result.passed),
  results,
};

await writeFile(new URL("../qa-results.json", import.meta.url), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (!summary.passed) process.exitCode = 1;
