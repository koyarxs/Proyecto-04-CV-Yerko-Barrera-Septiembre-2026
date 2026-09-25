export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  specialization: string;
  professionalFocus: string;
  location: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  program?: string;
  period?: string;
  status: string;
}

export interface Project {
  name: string;
  status: "MVP v1.0.0 — Finalizado / MVP estable" | "EN DESARROLLO";
  version?: string;
  type?: string;
  headline: string;
  description: string;
  technologies?: string[];
  methodology?: string[];
  highlights?: string[];
  repository?: string;
  website?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  type: "Curso";
  provider?: string;
}

export interface CVData {
  personal: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: SkillCategory[];
  certifications: Certification[];
}

export const cvData: CVData = {
  personal: {
    fullName: "Yerko Andrés Barrera Pantoja",
    professionalTitle: "Ingeniero en Computación e Informática",
    specialization: "Mención Desarrollo de Software",
    professionalFocus: "Desarrollador Full Stack",
    location: "Viña del Mar, Chile",
    email: "yerkoandresbarrerapantoja@gmail.com",
    phone: "+56 9 8210 0670",
    linkedin:
      "https://www.linkedin.com/in/yerko-andr%C3%A9s-barrera-pantoja-a82821123/",
    github: "https://github.com/koyarxs",
  },

  summary:
    "Ingeniero en Computación e Informática y Licenciado en Ingeniería, recientemente titulado de la Universidad Andrés Bello, con más de 4 años de experiencia profesional en el área de TI y actualmente enfocado en Desarrollo de Software Full Stack. Cuento con experiencia en soporte tecnológico, administración de sistemas, resolución de incidencias y continuidad operativa, conocimientos que complemento con el desarrollo de soluciones de software modernas, integrando frontend, backend, bases de datos, pruebas, seguridad y prácticas DevOps.",

  experience: [
    {
      company: "Grupo Belator",
      position: "Técnico Soporte TI",
      location: "Viña del Mar, Chile",
      period: "Julio 2025 – Mayo 2026",
      responsibilities: [
        "Brindar soporte técnico presencial y remoto para incidencias de hardware, software y redes.",
        "Registrar, documentar y dar seguimiento a requerimientos técnicos.",
        "Mantener inventario de equipos y licencias.",
        "Participar en proyectos tecnológicos con apoyo en Microsoft Office, Outlook y continuidad operacional.",
      ],
    },
    {
      company: "Reimpact",
      position: "Ingeniero de Desarrollo Software (Freelance)",
      location: "Providencia, Chile / Remoto",
      period: "Septiembre 2025 – Noviembre 2025",
      responsibilities: [
        "Desarrollar y mantener software a medida con PHP, Laravel, JavaScript, HTML5 y CSS3.",
        "Trabajar con MySQL en administración y optimización de bases de datos.",
        "Utilizar Git y GitHub para control de versiones y trazabilidad del desarrollo.",
        "Apoyar el desarrollo con Laravel Nova dentro del flujo técnico del proyecto.",
      ],
    },
    {
      company: "TIC Services SPA / Hospital Gustavo Fricke",
      position: "Soporte Técnico TIC",
      location: "Viña del Mar, Chile",
      period: "Diciembre 2022 – Febrero 2025",
      responsibilities: [
        "Ejecutar soporte N1 y N2 en hardware, software y sistemas operativos Windows, macOS y Linux.",
        "Atender incidencias asociadas a ERP, HIS, Outlook, impresoras y telefonía Cisco.",
        "Monitorear servicios críticos y apoyar la continuidad operacional.",
        "Realizar soporte remoto y presencial en redes IPv4, direcciones IP, subredes y máscaras de red.",
      ],
    },
    {
      company:
        "Comercializadora y Servicios Nutech SPA / Universidad Andrés Bello",
      position: "Técnico en Soporte TI",
      location: "Viña del Mar, Chile",
      period: "Agosto 2021 – Diciembre 2022",
      responsibilities: [
        "Brindar soporte Windows, macOS y Linux en ambientes académicos y administrativos.",
        "Apoyar el uso de carpetas compartidas, Blackboard y Canvas.",
        "Asistir y capacitar a docentes en plataformas y recursos tecnológicos.",
        "Mantener impresoras, proyectores EPSON y equipamiento audiovisual.",
      ],
    },
    {
      company: "Ilustre Municipalidad de Valparaíso",
      position: "Práctica Técnico Programador Computacional",
      location: "Valparaíso, Chile",
      period: "Febrero 2020 – Marzo 2020",
      responsibilities: [
        "Práctica profesional correspondiente a la formación de Técnico Programador Computacional.",
      ],
    },
  ],

  education: [
    {
      degree: "Ingeniería en Computación e Informática",
      institution: "Universidad Andrés Bello",
      program: "Mención Desarrollo de Software",
      period: "Marzo 2024 – Septiembre 2026",
      status: "Titulado",
    },
    {
      degree: "Técnico Programador Computacional",
      institution: "Instituto Profesional AIEP",
      period: "Mayo 2020",
      status: "Titulado",
    },
  ],

  projects: [
    {
      name: "FraudShield",
      status: "MVP v1.0.0 — Finalizado / MVP estable",
      version: "MVP v1.0.0",
      type: "Proyecto final de tesis — Ingeniería en Computación e Informática",
      headline: "Sistema Full Stack de clasificación de riesgo transaccional",
      description:
        "Sistema Full Stack para clasificación de riesgo en transacciones digitales basado en reglas predefinidas.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "JWT",
        "Git",
        "GitHub",
        "Jest",
        "Pruebas unitarias",
        "Pruebas E2E",
      ],
      methodology: [
        "Scrum",
        "Backlog",
        "Sprints",
        "Git",
        "GitHub",
        "Pull Requests",
        "Code Review",
        "QA",
      ],
      highlights: [
        "Procesamiento por lotes con carga y validación de archivos CSV.",
        "Motor de reglas R1-R5 con score de riesgo y clasificación BAJO / MEDIO / ALTO.",
        "Dashboard, métricas, historial, trazabilidad, auditoría, reportes y exportación de resultados.",
        "Autenticación JWT, gestión de usuarios y perfiles, rutas protegidas, autorización y validación de entradas.",
        "Aplicación de Scrum, QA, pruebas unitarias/E2E, validación de endpoints, lint y build.",
      ],
      repository: "https://github.com/koyarxs/Project-02-Fraudshield-2026",
    },
    {
      name: "Pawly",
      status: "EN DESARROLLO",
      headline:
        "Plataforma Full Stack para la gestión integral del bienestar de mascotas",
      description:
        "Proyecto Full Stack en desarrollo gestionado mediante Scrum y Jira, utilizando un flujo profesional de Git/GitHub con trazabilidad del trabajo.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ],
      methodology: [
        "Scrum",
        "Jira",
        "Backlog",
        "Historias de usuario",
        "Story Points",
        "Sprints",
        "Issues",
        "Ramas feature/SCRUM-XX",
        "Commits",
        "Pull Requests",
        "Code Review",
        "QA",
      ],
      highlights: [
        "Stack inicial definido para evolución Full Stack sin afirmar funcionalidades completas no verificadas.",
        "Gestión de historias, Sprints y trazabilidad mediante Jira.",
        "Flujo Git/GitHub basado en Issues, branches, commits, Pull Requests y revisión de código.",
        "Proyecto orientado progresivamente a arquitectura, calidad, seguridad, DevOps y trazabilidad.",
      ],
      repository: "https://github.com/koyarxs/Project-03-Pawly",
    },
    {
      name: "FlyMaster",
      status: "EN DESARROLLO",
      headline: "Sitio web frontend para servicios con drones",
      description:
        "Proyecto web frontend para FlyMaster, orientado a la presentación de servicios con drones, portafolio visual, cursos, galería, contacto y flujo visual de carrito.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "React Router DOM",
        "Framer Motion",
        "React Icons",
        "ESLint",
      ],
      highlights: [
        "Desarrollo de landing corporativa y secciones informativas para servicios con drones.",
        "Implementación de portafolio visual, galería, cursos, contacto, FAQ, CTA y términos.",
        "Construcción de flujo visual de carrito y componentes reutilizables de interfaz.",
        "Integración de assets multimedia, navegación y animaciones frontend.",
      ],
      website: "https://flymaster.cl",
    },
  ],

  skills: [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Vite",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "NestJS",
        "Express",
        "APIs REST",
        "JWT",
        "PHP",
        "Laravel",
      ],
    },
    {
      category: "Bases de datos",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Prisma ORM",
        "SQL",
        "pgAdmin",
        "MySQL Workbench",
      ],
    },
    {
      category: "DevOps y herramientas",
      skills: [
        "Docker",
        "Docker Compose",
        "CI/CD",
        "Git",
        "GitHub",
        "Linux",
        "Visual Studio Code",
        "Postman",
        "Jira",
      ],
    },
    {
      category: "Pruebas y calidad",
      skills: [
        "Jest",
        "Pruebas unitarias",
        "Pruebas E2E",
        "ESLint",
        "Code Review",
        "QA",
      ],
    },
    {
      category: "Metodologías y prácticas",
      skills: [
        "Scrum",
        "Backlog",
        "Historias de usuario",
        "Sprints",
        "Story Points",
        "Git branching",
        "Pull Requests",
        "Code Review",
        "QA",
        "Clean Code",
        "SOLID",
        "Patrones de diseño",
        "Arquitectura de software",
      ],
    },
    {
      category: "Seguridad",
      skills: [
        "OWASP Top 10",
        "Seguridad de aplicaciones web",
        "JWT",
        "Autenticación",
        "Autorización",
        "Validación de entradas",
      ],
    },
  ],

  certifications: [
    { name: "React: De cero a experto", type: "Curso" },
    { name: "TypeScript Guía Completa", type: "Curso" },
    { name: "PostgreSQL y pgAdmin", type: "Curso" },
    { name: "SQL Creación de Bases de Datos", type: "Curso" },
    { name: "Git + GitHub", type: "Curso" },
    { name: "Seguridad Informática Desde cero", type: "Curso" },
    { name: "FrontEnd Web Developer", type: "Curso" },
  ],
};
