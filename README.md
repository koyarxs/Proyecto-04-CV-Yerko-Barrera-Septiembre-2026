# Generador de CV ATS - Yerko Barrera

Proyecto TypeScript para mantener la información profesional de Yerko Barrera en una fuente maestra versionable y generar un CV técnico profesional optimizado para sistemas ATS, lectura humana y exportación posterior a PDF.

## Objetivo

El repositorio permite editar los datos del CV maestro en `src/data/cv.ts` y generar automáticamente un archivo HTML listo para revisar, imprimir o exportar a PDF desde el navegador. El diseño prioriza texto seleccionable, lectura lineal, encabezados convencionales, enlaces reales, proyectos con evidencia y una estructura semántica compatible con ATS.

## Arquitectura

- `src/data/cv.ts`: datos profesionales, contacto, experiencia, proyectos, stack, cursos, enlaces, estados y tipos TypeScript.
- `src/templates/ats-template.ts`: transformación de los datos a HTML.
- `src/styles/ats.css`: presentación visual sobria, técnica y optimizada para impresión.
- `src/scripts/generate.ts`: generación del archivo final en `output/`.
- `tests/`: pruebas sobre datos mínimos, proyectos, enlaces y secciones ATS del HTML.
- `output/`: artefactos generados.

## Tecnologías

- Node.js
- TypeScript 5.9
- tsx
- ESLint
- typescript-eslint
- Node Test Runner

## Instalación

```bash
npm install
```

## Ejecución

Generar el CV:

```bash
npm run generate
```

El archivo generado queda en:

```text
output/CV_Yerko_Barrera_ATS.html
```

## Validaciones

Ejecutar typecheck:

```bash
npm run typecheck
```

Ejecutar lint:

```bash
npm run lint
```

Ejecutar pruebas:

```bash
npm test
```

Ejecutar validación completa:

```bash
npm run check
```

## Enfoque ATS

El CV generado utiliza una sola columna lógica, texto real seleccionable, encabezados reconocibles, enlaces `<a href>` reales y orden de lectura natural. Evita tablas para información crítica, gráficos, barras de porcentaje, iconos como sustitutos de texto, fotografía y datos personales sensibles no proporcionados.

## Contenido profesional

El CV posiciona a Yerko como Ingeniero en Computación e Informática, mención Desarrollo de Software, con orientación Full Stack. Mantiene la experiencia real en TI y soporte N1/N2, destaca FraudShield como proyecto de título y presenta Pawly como proyecto en desarrollo con metodología Scrum/Jira y flujo profesional Git/GitHub.

## Diseño

La hoja de estilos mantiene fondo blanco, color de acento azul tecnológico, jerarquía tipográfica clara, estados de proyectos como texto real, cursos compactos y reglas `@media print` para conservar legibilidad en PDF Letter.

## Datos opcionales

El portafolio es opcional. Si no existe en `src/data/cv.ts`, el template lo omite automáticamente sin mostrar placeholders. La adaptación a RenderCV queda fuera de esta etapa y se realizará después de aprobar humanamente el CV maestro.
