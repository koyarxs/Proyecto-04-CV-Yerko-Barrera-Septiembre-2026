import type {
  Certification,
  CVData,
  Education,
  Experience,
  Project,
} from "../data/cv";

const sectionTitles = {
  summary: "Perfil profesional",
  experience: "Experiencia profesional",
  education: "Formación académica",
  projects: "Proyectos destacados",
  skills: "Habilidades técnicas",
  certifications: "Cursos y formación complementaria",
} as const;

export function renderAtsTemplate(cv: CVData, styles: string): string {
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CV ATS - ${escapeHtml(cv.personal.fullName)}</title>
  <style>${styles}</style>
</head>
<body>
  <main class="page">
    <header class="header">
      <h1>${escapeHtml(cv.personal.fullName)}</h1>
      <p class="title">${escapeHtml(cv.personal.professionalTitle)}</p>
      <p class="focus">${escapeHtml(cv.personal.professionalFocus)}</p>
      <p class="contact">${renderContact(cv)}</p>
    </header>

    <section>
      <h2>${sectionTitles.summary}</h2>
      <p>${escapeHtml(cv.summary)}</p>
    </section>

    <section>
      <h2>${sectionTitles.education}</h2>
      ${cv.education.map(renderEducation).join("\n")}
    </section>

    <section>
      <h2>${sectionTitles.experience}</h2>
      ${cv.experience.map(renderExperience).join("\n")}
    </section>

    <section>
      <h2>${sectionTitles.projects}</h2>
      ${cv.projects.map(renderProject).join("\n")}
    </section>

    <section>
      <h2>${sectionTitles.skills}</h2>
      ${cv.skills
        .map(
          (group) => `<p><strong>${escapeHtml(group.category)}:</strong> ${group.skills
            .map(escapeHtml)
            .join(", ")}</p>`,
        )
        .join("\n")}
    </section>

    ${renderCertifications(cv.certifications)}
  </main>
</body>
</html>`;
}

export function getAtsSectionTitles(): string[] {
  return Object.values(sectionTitles);
}

function renderContact(cv: CVData): string {
  const items = [
    renderPlainContactItem(cv.personal.location),
    renderPlainContactItem(cv.personal.phone),
    renderLinkContactItem(cv.personal.email, `mailto:${cv.personal.email}`),
    renderSocialContactItem("LinkedIn", cv.personal.linkedin, "linkedin"),
    renderSocialContactItem("GitHub", cv.personal.github, "github"),
    renderLabeledLinkContactItem("Portafolio", cv.personal.portfolio),
  ].filter((item) => item.length > 0);

  return items.join(" | ");
}

function renderExperience(experience: Experience): string {
  return `<article class="item">
  <h3>${escapeHtml(experience.position)}</h3>
  <p class="meta">${escapeHtml(experience.company)} | ${escapeHtml(
    experience.location,
  )} | ${escapeHtml(experience.period)}</p>
  <ul>
    ${experience.responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n    ")}
  </ul>
</article>`;
}

function renderEducation(education: Education): string {
  const details = [
    education.institution,
    education.program,
    education.period,
    education.status,
  ]
    .filter(Boolean)
    .map((item) => escapeHtml(item))
    .join(" | ");

  return `<article class="item">
  <h3>${escapeHtml(education.degree)}</h3>
  <p class="meta">${details}</p>
</article>`;
}

function renderProject(project: Project): string {
  const type = project.type
    ? `<p class="project-type">${escapeHtml(project.type)}</p>`
    : "";
  const technologies = project.technologies?.length
    ? `<p class="technologies"><strong>Stack:</strong> ${project.technologies.map(escapeHtml).join(" · ")}</p>`
    : "";
  const methodology = project.methodology?.length
    ? `<p class="methodology"><strong>Metodología:</strong> ${project.methodology.map(escapeHtml).join(" · ")}</p>`
    : "";
  const highlights = project.highlights?.length
    ? `<ul>
    ${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n    ")}
  </ul>`
    : "";

  const links = renderProjectLinks(project);

  return `<article class="item">
  <div class="project-heading">
    <h3>${escapeHtml(project.name)}</h3>
    <span class="status">${escapeHtml(project.status)}</span>
  </div>
  <p class="project-headline">${escapeHtml(project.headline)}</p>
  ${type}
  <p>${escapeHtml(project.description)}</p>
  ${technologies}
  ${methodology}
  ${highlights}
  ${links}
</article>`;
}

function renderProjectLinks(project: Project): string {
  const links = [
    project.repository ? `Repositorio: ${renderAnchor(project.repository)}` : "",
    project.website ? `Sitio: ${renderAnchor(project.website)}` : "",
  ].filter((item) => item.length > 0);

  if (links.length === 0) {
    return "";
  }

  return `<p class="links">${links.join(" | ")}</p>`;
}

function renderCertifications(certifications: Certification[]): string {
  if (certifications.length === 0) {
    return "";
  }

  return `<section>
  <h2>${sectionTitles.certifications}</h2>
  <p>${certifications
    .map((certification) => `${escapeHtml(certification.name)} (${escapeHtml(certification.type)})`)
    .join(" · ")}</p>
</section>`;
}

function escapeHtml(value: string | undefined): string {
  if (!value) {
    return "";
  }

  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderPlainContactItem(value: string | undefined): string {
  return value ? escapeHtml(value) : "";
}

function renderLinkContactItem(value: string | undefined, href = value): string {
  if (!value || !href) {
    return "";
  }

  return renderAnchor(value, href);
}

function renderLabeledLinkContactItem(
  label: string,
  value: string | undefined,
): string {
  if (!value) {
    return "";
  }

  return `${escapeHtml(label)}: ${renderAnchor(value)}`;
}

function renderSocialContactItem(
  label: string,
  value: string | undefined,
  icon: "github" | "linkedin",
): string {
  if (!value) {
    return "";
  }

  return `<span class="contact-social">${renderIcon(icon)} ${escapeHtml(label)}: ${renderAnchor(value)}</span>`;
}

function renderAnchor(text: string, href = text): string {
  const isExternal = href.startsWith("http");
  const attributes = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";

  return `<a href="${escapeHtml(href)}"${attributes}>${escapeHtml(text)}</a>`;
}

function renderIcon(icon: "github" | "linkedin"): string {
  if (icon === "github") {
    return `<svg class="contact-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.02c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`;
  }

  return `<svg class="contact-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M6.94 8.98H3.75V20h3.19V8.98ZM5.35 4a1.84 1.84 0 1 0 0 3.68 1.84 1.84 0 0 0 0-3.68ZM20.25 20h-3.18v-5.36c0-1.28-.02-2.93-1.78-2.93-1.79 0-2.06 1.4-2.06 2.84V20h-3.18V8.98h3.05v1.5h.04c.42-.8 1.46-1.65 3-1.65 3.22 0 3.81 2.12 3.81 4.87V20Z"/></svg>`;
}
