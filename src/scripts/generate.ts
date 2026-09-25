import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { cvData } from "../data/cv";
import { renderAtsTemplate } from "../templates/ats-template";

const outputDirectory = path.join(process.cwd(), "output");
const outputPath = path.join(outputDirectory, "CV_Yerko_Barrera_ATS.html");
const stylesPath = path.join(process.cwd(), "src", "styles", "ats.css");

async function generate(): Promise<void> {
  const styles = await readFile(stylesPath, "utf8");
  const html = renderAtsTemplate(cvData, styles);

  await mkdir(outputDirectory, { recursive: true });
  await writeFile(outputPath, html, "utf8");

  console.log(`CV ATS generado en ${outputPath}`);
}

generate().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
