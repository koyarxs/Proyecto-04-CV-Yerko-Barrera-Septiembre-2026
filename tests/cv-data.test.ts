import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { cvData } from "../src/data/cv";
import {
  getAtsSectionTitles,
  renderAtsTemplate,
} from "../src/templates/ats-template";

describe("cvData", () => {
  it("contiene los campos principales requeridos", () => {
    assert.equal(cvData.personal.fullName, "Yerko Andrés Barrera Pantoja");
    assert.equal(
      cvData.personal.professionalTitle,
      "Ingeniero en Computación e Informática",
    );
    assert.equal(cvData.personal.specialization, "Mención Desarrollo de Software");
    assert.equal(cvData.personal.professionalFocus, "Desarrollador Full Stack");
    assert.equal(cvData.personal.phone, "+56 9 8210 0670");
    assert.equal(
      cvData.personal.email,
      "yerkoandresbarrerapantoja@gmail.com",
    );
    assert.equal(
      cvData.personal.linkedin,
      "https://www.linkedin.com/in/yerko-andr%C3%A9s-barrera-pantoja-a82821123/",
    );
    assert.equal(cvData.personal.github, "https://github.com/koyarxs");
    assert.ok(cvData.summary.length > 0);
    assert.ok(cvData.experience.length > 0);
    assert.ok(cvData.education.length > 0);
    assert.ok(cvData.projects.length > 0);
    assert.ok(cvData.skills.length > 0);
  });

  it("no contiene campos obligatorios vacíos", () => {
    assertNoEmptyValue("personal.fullName", cvData.personal.fullName);
    assertNoEmptyValue(
      "personal.professionalTitle",
      cvData.personal.professionalTitle,
    );
    assertNoEmptyValue(
      "personal.specialization",
      cvData.personal.specialization,
    );
    assertNoEmptyValue("personal.location", cvData.personal.location);
    assertNoEmptyValue("summary", cvData.summary);

    cvData.experience.forEach((experience, index) => {
      assertNoEmptyValue(`experience.${index}.company`, experience.company);
      assertNoEmptyValue(`experience.${index}.position`, experience.position);
      assertNoEmptyValue(`experience.${index}.location`, experience.location);
      assertNoEmptyValue(`experience.${index}.period`, experience.period);
      assert.ok(experience.responsibilities.length > 0);
    });

    cvData.education.forEach((education, index) => {
      assertNoEmptyValue(`education.${index}.degree`, education.degree);
      assertNoEmptyValue(`education.${index}.institution`, education.institution);
      assertNoEmptyValue(`education.${index}.status`, education.status);
    });

    assert.ok(
      cvData.education.every((education) => education.status === "Titulado"),
    );

    cvData.skills.forEach((skillGroup, index) => {
      assertNoEmptyValue(`skills.${index}.category`, skillGroup.category);
      assert.ok(skillGroup.skills.length > 0);
    });

    cvData.projects.forEach((project, index) => {
      assertNoEmptyValue(`projects.${index}.name`, project.name);
      assertNoEmptyValue(`projects.${index}.status`, project.status);
      assertNoEmptyValue(`projects.${index}.headline`, project.headline);
      assertNoEmptyValue(`projects.${index}.description`, project.description);
    });
  });

  it("contiene proyectos destacados con estados y repositorios verificables", () => {
    const fraudShield = findProject("FraudShield");
    const pawly = findProject("Pawly");
    const flyMaster = findProject("FlyMaster");

    assert.equal(fraudShield.status, "MVP v1.0.0 — Finalizado / MVP estable");
    assert.equal(
      fraudShield.type,
      "Proyecto final de tesis — Ingeniería en Computación e Informática",
    );
    assert.equal(
      fraudShield.repository,
      "https://github.com/koyarxs/Project-02-Fraudshield-2026",
    );
    assert.match(fraudShield.description, /clasificación de riesgo/i);
    assert.doesNotMatch(fraudShield.description, /detecta fraude/i);
    assert.ok(
      fraudShield.highlights?.some((highlight) =>
        highlight.includes("BAJO / MEDIO / ALTO"),
      ),
    );
    assert.ok(fraudShield.methodology?.includes("Scrum"));
    assert.ok(fraudShield.methodology?.includes("QA"));

    assert.equal(pawly.status, "EN DESARROLLO");
    assert.equal(pawly.repository, "https://github.com/koyarxs/Project-03-Pawly");
    assert.match(pawly.description, /Scrum y Jira/i);
    assert.ok(pawly.methodology?.includes("Scrum"));
    assert.ok(pawly.methodology?.includes("Jira"));
    assert.ok(pawly.methodology?.includes("Commits"));
    assert.ok(pawly.methodology?.includes("Pull Requests"));
    assert.ok(pawly.methodology?.includes("Code Review"));
    assert.ok(pawly.methodology?.includes("QA"));

    assert.equal(flyMaster.status, "EN DESARROLLO");
    assert.match(flyMaster.description, /servicios con drones/i);
    assert.ok(flyMaster.technologies?.includes("React"));
    assert.ok(flyMaster.technologies?.includes("TypeScript"));
    assert.ok(flyMaster.technologies?.includes("Vite"));
    assert.ok(flyMaster.technologies?.includes("Tailwind CSS"));
    assert.ok(flyMaster.technologies?.includes("React Router DOM"));
    assert.ok(flyMaster.technologies?.includes("Framer Motion"));
    assert.ok(flyMaster.technologies?.includes("React Icons"));
    assert.equal(flyMaster.website, "https://flymaster.cl");
  });

  it("contiene cursos relevantes para el perfil Full Stack", () => {
    const courseNames = cvData.certifications.map((course) => course.name);

    assert.ok(courseNames.includes("React: De cero a experto"));
    assert.ok(courseNames.includes("TypeScript Guía Completa"));
    assert.ok(courseNames.includes("PostgreSQL y pgAdmin"));
    assert.ok(courseNames.includes("SQL Creación de Bases de Datos"));
    assert.ok(courseNames.includes("Git + GitHub"));
    assert.ok(courseNames.includes("Seguridad Informática Desde cero"));
    assert.ok(courseNames.includes("FrontEnd Web Developer"));
  });
});

describe("renderAtsTemplate", () => {
  it("genera HTML con las principales secciones ATS", () => {
    const html = renderAtsTemplate(cvData, "");
    const requiredSections = getAtsSectionTitles();

    assert.match(html, /<h1>Yerko Andrés Barrera Pantoja<\/h1>/);

    for (const title of requiredSections) {
      assert.ok(html.includes(title), `No se encontró la sección ${title}`);
    }
  });

  it("no renderiza placeholders ni valores inválidos", () => {
    const html = renderAtsTemplate(cvData, "");

    assert.doesNotMatch(html, /PENDIENTE:/);
    assert.doesNotMatch(html, /undefined/);
    assert.doesNotMatch(html, /null/);
    assert.doesNotMatch(html, /\[object Object\]/);
  });

  it("mantiene headings y fechas en español", () => {
    const html = renderAtsTemplate(cvData, "");
    const forbiddenTerms = [
      "Programa Advance",
      "Summary",
      "Experience",
      "Education",
      "Projects",
      "Skills",
      "Certifications",
      "January",
      "February",
      "March",
      "April",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "months",
      "years",
    ];

    assert.ok(html.includes("Perfil profesional"));
    assert.ok(html.includes("Experiencia profesional"));
    assert.ok(html.includes("Proyectos destacados"));
    assert.ok(html.includes("Habilidades técnicas"));
    assert.ok(html.includes("Formación académica"));
    assert.ok(html.includes("Cursos y formación complementaria"));
    assert.ok(html.includes("Marzo 2024 – Septiembre 2026"));

    for (const term of forbiddenTerms) {
      assert.doesNotMatch(html, new RegExp(term));
    }
  });

  it("renderiza enlaces reales y orden ATS solicitado", () => {
    const html = renderAtsTemplate(cvData, "");
    const summaryIndex = html.indexOf("Perfil profesional");
    const experienceIndex = html.indexOf("Experiencia profesional");
    const projectsIndex = html.indexOf("Proyectos destacados");
    const skillsIndex = html.indexOf("Habilidades técnicas");
    const educationIndex = html.indexOf("Formación académica");

    assert.ok(html.includes('href="https://github.com/koyarxs"'));
    assert.ok(
      html.includes(
        'href="https://www.linkedin.com/in/yerko-andr%C3%A9s-barrera-pantoja-a82821123/"',
      ),
    );
    assert.ok(
      html.includes(
        'href="https://github.com/koyarxs/Project-02-Fraudshield-2026"',
      ),
    );
    assert.ok(
      html.includes('href="https://github.com/koyarxs/Project-03-Pawly"'),
    );
    assert.ok(html.includes('href="https://flymaster.cl"'));
    assert.ok(html.includes('href="mailto:yerkoandresbarrerapantoja@gmail.com"'));

    assert.ok(summaryIndex > -1);
    assert.ok(educationIndex > summaryIndex);
    assert.ok(experienceIndex > -1);
    assert.ok(experienceIndex > educationIndex);
    assert.ok(projectsIndex > experienceIndex);
    assert.ok(skillsIndex > projectsIndex);
  });
});

function assertNoEmptyValue(label: string, value: string): void {
  assert.notEqual(value.trim(), "", `${label} no debe estar vacío`);
}

function findProject(name: string) {
  const project = cvData.projects.find((item) => item.name === name);

  assert.ok(project, `No se encontró el proyecto ${name}`);

  return project;
}
