import { readFileSync } from "fs";

const files = {
  notFound: `${process.env.TEMP}\\dst-404.html`,
  slug: `${process.env.TEMP}\\dst-404-slug.html`,
  home: `${process.env.TEMP}\\dst-home.html`,
};

for (const [key, path] of Object.entries(files)) {
  const html = readFileSync(path, "utf8");
  const robots = html.match(/name="robots" content="([^"]+)"/);
  console.log(`== ${key} ==`);
  console.log({
    hasNotFoundHeading: html.includes("not-found-heading"),
    hasErro404: html.includes("Erro 404"),
    hasVerProjetos: html.includes("Ver projetos"),
    hasFalarCom: html.includes("Falar com a DSTUDIUM"),
    hasNoindex: html.includes("noindex"),
    hasSlaPrazo: html.includes("SLA no prazo"),
    has98Span: /98<span/.test(html),
    hasEscala: html.includes("Escala"),
    hasPilares: html.includes("Pilares"),
    hasSquadAtiva: html.includes("Squad ativa"),
    hasV24: html.includes("v2.4"),
    robots: robots?.[1] ?? null,
  });
}
