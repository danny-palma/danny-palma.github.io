import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Daniel Palma",
    firstName: "Daniel",
    initials: "DP",
    role: "Tech Lead",
    tagline: "/ tech lead · freelance desde 2019",
    availability: "Abierto a nuevos proyectos",
    heroH1: {
      l1Prefix: "Hola, soy ",
      l1Highlight: "Daniel",
      l2: "Tech Lead",
    },
    lead: "Hago que los sistemas complejos sean fáciles de mantener, desde Bogotá y para clientes en EE. UU.",
    scriptIntro: "tres cosas que debes saber de mí",
    threePoints: [
      "Arquitectura que aguanta el crecimiento.",
      "IA que corre en tu propia infraestructura.",
      "Procesos que se hacen solos.",
    ],
    badge: {
      since: "Desde 2019",
      clientInfo: "Freelance · clientes en EE. UU.",
    },
    locationSticker: "Bogotá, CO ↗",
    locationInfo: {
      city: "Bogotá",
      coordinates: "4.71°N · 74.07°W · UTC−5",
    },
    copyrightYear: "©2026",
    footerFocus: "/ arquitectura · IA local · automatización",
    terminal: {
      user: "daniel_palma",
      catProfile: {
        rol: "tech lead · freelance",
        base: "Bogotá, CO",
        clientes: "EE. UU.",
        foco: "arquitectura · IA local · automatización",
      },
    },
    dailyStack: ["TypeScript", "React", "Node.js", "GCP", "Docker"],
    pipeline: [
      "GCP",
      "n8n",
      "Agente IA · Ollama",
      "APIs de marketing",
      "Mensajería",
    ],
  },

  navigation: [
    { id: "inicio", label: "Inicio", icon: "inicio" },
    { id: "proyectos", label: "Proyectos", icon: "proyectos" },
    { id: "servicios", label: "Qué hago", icon: "servicios" },
    { id: "stack", label: "Stack", icon: "stack" },
    { id: "trayectoria", label: "Trayectoria", icon: "trayectoria" },
    { id: "contacto", label: "Contacto", icon: "contacto" },
  ],

  projects: [
    {
      id: "excalibur-legal",
      num: "01",
      category: "Plataforma legal",
      title: "Excalibur Legal Management Platform",
      description:
        "Gestión de casos legales y médicos de punta a punta. Arquitectura basada en microservicios, desacoplamiento de flujos y sincronización en tiempo real para optimizar el rendimiento y la escalabilidad del sistema.",
      longDescription:
        "Diseño e implementación de arquitectura escalable, automatización de flujos de trabajo críticos entre firmas legales y proveedores médicos, optimización de consultas complejas y altos estándares de seguridad para datos sensibles.",
      className: "pa",
      tags: ["TypeScript", "React", "Node.js", "Docker", "PostgreSQL"],
      repoUrl: "https://github.com/danny-palma",
    },
    {
      id: "marketing-team-hub",
      num: "02",
      category: "Web app interna",
      title: "Marketing Team Hub",
      description:
        "Plataforma de equipo y RR. HH. para marketing. Centralización de métricas operativas, asignación inteligente de tareas y monitoreo del rendimiento con dashboards en tiempo real.",
      longDescription:
        "Desarrollo frontend y backend de una plataforma integral que conecta a los equipos creativos y operativos con métricas automatizadas de desempeño, gestión de turnos y feedback continuo.",
      className: "pb",
      tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      repoUrl: "https://github.com/danny-palma",
    },
    {
      id: "pipelines-gcp-n8n",
      num: "03",
      category: "Automatización",
      title: "Pipelines GCP + n8n",
      description:
        "Flujos entre APIs de marketing y mensajería. Orquestación continua de datos, ingesta de prospectos y alertas instantáneas sin intervención manual.",
      longDescription:
        "Arquitectura de integración continua conectando Google Cloud Platform con flujos automatizados en n8n, webhooks seguros y mensajería omnicanal para reducir tiempos operativos a segundos.",
      className: "pc",
      tags: ["GCP", "n8n", "Node.js", "Webhooks"],
      repoUrl: "https://github.com/danny-palma",
    },
    {
      id: "agentes-ollama-minicpm",
      num: "04",
      category: "IA local",
      title: "Agentes con Ollama y MiniCPM-V",
      description:
        "Modelos que corren en infraestructura propia y se orquestan como agentes para análisis multimodal de documentos, visión artificial y privacidad total sin costos recurrentes por tokens.",
      longDescription:
        "Despliegue local y orquestación de LLMs y VLMs para extracción estructurada de información en documentos médicos y legales complejos, garantizando soberanía de datos y cero latencia hacia terceros.",
      className: "pd",
      tags: ["Ollama", "MiniCPM-V", "Python", "Local AI", "Docker"],
      repoUrl: "https://github.com/danny-palma",
    },
  ],

  services: [
    {
      id: "liderazgo-arquitectura",
      title: "Liderazgo técnico y arquitectura",
      description:
        "Decisiones estructurales, refactorización de sistemas grandes y complejos, y buenas prácticas que el equipo pueda sostener.",
      className: "w1",
      chips: ["SOLID", "Refactorización", "Buenas prácticas"],
    },
    {
      id: "ia-aplicada",
      title: "IA aplicada",
      description:
        "Modelos locales como Ollama y MiniCPM-V, y agentes orquestados para casos de negocio reales.",
      className: "w2",
    },
    {
      id: "automatizacion-sistemas",
      title: "Automatización de sistemas",
      description:
        "Pipelines que conectan GCP, n8n, APIs de marketing y mensajería para eliminar trabajo manual.",
      className: "w3",
    },
  ],

  convictions: [
    {
      num: "01",
      title: "Estructura antes que velocidad",
      description:
        "Una buena decisión de arquitectura hoy ahorra semanas de refactor mañana.",
    },
    {
      num: "02",
      title: "IA local cuando importa",
      description:
        "Modelos propios para datos sensibles y costos predecibles, no IA por moda.",
    },
    {
      num: "03",
      title: "Automatiza lo repetitivo",
      description:
        "Si una persona lo hace tres veces, un pipeline debería hacerlo la cuarta.",
    },
  ],

  stack: [
    {
      id: "lenguajes",
      label: "lenguajes",
      chips: ["TypeScript", "JavaScript", "Java", "C#", "C++", "SQL"],
      className: "sa",
    },
    {
      id: "ia",
      label: "ia",
      heading: "IA que corre en casa",
      chips: ["Ollama", "MiniCPM-V", "Agentes"],
      className: "sb",
    },
    {
      id: "frameworks",
      label: "frameworks",
      chips: ["React", "Node.js", "ASP.NET", "Flutter"],
      className: "sc",
    },
    {
      id: "infra",
      label: "infra",
      chips: ["Docker", "GCP", "n8n"],
      className: "sd",
    },
    {
      id: "datos",
      label: "datos",
      chips: ["PostgreSQL", "MySQL", "MongoDB"],
      className: "se",
    },
  ],

  trajectory: [
    {
      title: "Desarrollador freelance y consultor",
      subtitle: "2019 – presente · Clientes en EE. UU.",
    },
    {
      title: "C# Fundamentals — Microsoft y freeCodeCamp",
      subtitle: "Enero 2024 · Certificación",
    },
    {
      title: "Tecnología en Desarrollo Informático — ECCI",
      subtitle: "Bogotá · En curso",
    },
    {
      title: "Technical Systems Specialist — Viva IPS",
      subtitle: "2021 – 2023 · Soporte técnico e infraestructura",
    },
  ],

  contact: {
    eyebrow: "Contacto",
    heading: "Cuéntame qué necesitas.",
    lead: "Arquitectura, IA aplicada o automatización: escríbeme y lo aterrizamos.",
    email: "dannypalmadev@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-palma-dev/",
    github: "https://github.com/danny-palma",
    cvUrl: "https://danny-palma.github.io/cv-danielpalma.pdf",
  },
};
