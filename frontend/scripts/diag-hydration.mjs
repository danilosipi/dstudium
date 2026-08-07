import http from "node:http";
import { chromium } from "playwright";

const BASE = process.env.BASE_URL || "http://127.0.0.1:3001";

function get(path) {
  return new Promise((resolve, reject) => {
    http
      .get(`${BASE}${path}`, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

async function inspectSsr() {
  const html = await get("/");
  const btn = html.match(
    /<button[^>]*aria-label="Abrir menu"[\s\S]*?<\/button>/,
  );
  const menuOpen = html.match(
    /id="([^"]+)"[^>]*hidden[\s\S]{0,120}class="[^"]*"/,
  );
  const controls = [...html.matchAll(/aria-controls="([^"]+)"/g)].map(
    (m) => m[1],
  );
  console.log("=== SSR ===");
  console.log("aria-controls:", controls);
  console.log("button snippet:\n", btn ? btn[0].slice(0, 600) : "NOT FOUND");
  console.log("menu match:", menuOpen ? menuOpen[0] : "NOT FOUND");
}

async function captureClient(urlPath, contextOptions = {}) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    ...contextOptions,
    bypassCSP: true,
  });
  const page = await context.newPage();
  const logs = [];

  page.on("console", (msg) => {
    const type = msg.type();
    if (type === "error" || type === "warning") {
      logs.push({ type, text: msg.text() });
    }
  });
  page.on("pageerror", (err) => {
    logs.push({ type: "pageerror", text: String(err.stack || err) });
  });

  await page.goto(`${BASE}${urlPath}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  const overlay = await page.evaluate(() => {
    const portal = document.querySelector("nextjs-portal");
    const text = portal?.shadowRoot?.textContent || portal?.textContent || "";
    const buttons = [...document.querySelectorAll("button")].map((b) => ({
      label: b.getAttribute("aria-label"),
      expanded: b.getAttribute("aria-expanded"),
      controls: b.getAttribute("aria-controls"),
      attrs: [...b.attributes].map((a) => `${a.name}=${a.value}`),
    }));
    const menu = document.querySelector("[aria-label='Menu']")?.closest("div");
    return {
      title: document.title,
      overlay: text.slice(0, 2000),
      buttons: buttons.filter((b) => b.label?.includes("menu")),
      menuOuter: menu
        ? {
            id: menu.id,
            hidden: menu.hidden,
            className: menu.className,
            attrs: [...menu.attributes].map((a) => `${a.name}=${a.value}`),
          }
        : null,
      bodyChildAttrs: [...document.body.querySelectorAll("*")]
        .slice(0, 30)
        .flatMap((el) =>
          [...el.attributes]
            .filter((a) => /^(data-|bis_|__)/.test(a.name))
            .map((a) => `${el.tagName}.${a.name}`),
        ),
    };
  });

  await browser.close();
  return { urlPath, logs, overlay, contextOptions };
}

async function main() {
  await inspectSsr();
  const paths = ["/", "/#inicio", "/#sobre"];
  for (const path of paths) {
    console.log("\n=== CLIENT", path, "(clean) ===");
    const r = await captureClient(path);
    console.log("title:", r.overlay.title);
    console.log(
      "logs:",
      JSON.stringify(
        r.logs.filter((l) =>
          /hydrat|Hydration|mismatch|did not match/i.test(l.text),
        ),
        null,
        2,
      ),
    );
    console.log("all error/warn count:", r.logs.length);
    console.log(
      "hydration-like logs:",
      r.logs
        .filter((l) => /hydrat|Hydration|mismatch|did not match|Warning:/i.test(l.text))
        .map((l) => l.text.slice(0, 800)),
    );
    console.log("overlay slice:", r.overlay.overlay.slice(0, 800));
    console.log("menu button:", JSON.stringify(r.overlay.buttons, null, 2));
    console.log("menu outer:", JSON.stringify(r.overlay.menuOuter, null, 2));
    console.log("extension-like attrs:", r.overlay.bodyChildAttrs);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
