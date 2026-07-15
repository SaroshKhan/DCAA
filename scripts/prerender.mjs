import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = resolve(import.meta.dirname, "..");
const htmlPath = resolve(projectRoot, "dist/public/index.html");
const serverEntry = resolve(projectRoot, "dist/ssr/entry-server.js");

let template = await readFile(htmlPath, "utf8");
const { render } = await import(pathToFileURL(serverEntry).href);
const markup = render();
const stylesheetMatch = template.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/);
if (stylesheetMatch) {
  const stylesheetHref = stylesheetMatch[1].replace(/^\//, "");
  const stylesheetRelative = stylesheetHref.replace(/^dcaadatalake\//, "");
  const stylesheetPath = resolve(projectRoot, "dist/public", stylesheetRelative);
  const stylesheet = await readFile(stylesheetPath, "utf8");
  template = template.replace(stylesheetMatch[0], `<style>${stylesheet}</style>`);
}
const output = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

await writeFile(htmlPath, output, "utf8");
