import { readFileSync, writeFileSync } from "node:fs";
const path = new URL("../dist/index.html", import.meta.url);
const html = readFileSync(path, "utf8");
const minified = html.replace(/<!--[\s\S]*?-->/g, "").replace(/>\s+</g, "><").trim();
writeFileSync(path, minified);
