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
        "Gestión de casos legales y expedientes médicos de punta a punta. Arquitectura desacoplada, alta concurrencia y sincronización en tiempo real.",
      longDescription:
        "Liderazgo técnico en el diseño e implementación de una plataforma integral que conecta firmas legales en EE. UU. con proveedores médicos, procesando miles de expedientes con sincronización reactiva y estrictas políticas de control de acceso.",
      keyMetric: "+15k expedientes · -70% latencia",
      metrics: [
        { label: "Expedientes activos", value: "+15,000" },
        { label: "Reducción latencia queries", value: "-70%" },
        { label: "Disponibilidad del sistema", value: "99.9%" },
      ],
      caseStudy: {
        challenge:
          "Silos de información entre firmas legales y clínicas asociadas generaban cuellos de botella manuales de hasta 48 horas en la actualización de estados de casos e historiales médicos.",
        decisions:
          "Diseñé una arquitectura orientada a servicios desacoplados en TypeScript y Node.js, optimicé esquemas relacionales en PostgreSQL con índices parciales y establecí auditoría de eventos inmutable con Docker.",
        results:
          "Reducción del 70% en tiempos de consulta compleja, eliminación de inconsistencias de datos concurrentes y sincronización bidireccional en menos de 500 ms.",
      },
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
        "Plataforma operativa y de talento para agencias. Centralización de métricas de rendimiento, asignación inteligente de carga y dashboards en tiempo real.",
      longDescription:
        "Desarrollo frontend y backend de una plataforma unificada para agencias de marketing en EE. UU., consolidando seguimiento de entregables, métricas operativas y balanceo automatizado de capacidad de equipo.",
      keyMetric: "8h/sem ahorradas por líder",
      metrics: [
        { label: "Ahorro coordinación semanal", value: "8+ horas" },
        { label: "Trazabilidad de tareas", value: "100%" },
        { label: "Actualización métricas", value: "En tiempo real" },
      ],
      caseStudy: {
        challenge:
          "Equipos creativos y de operaciones distribuidos en múltiples zonas horarias dependían de hojas de cálculo dispersas, provocando sobrecarga de trabajo y falta de visibilidad para los líderes de cuenta.",
        decisions:
          "Construí una SPA modular con React y TypeScript, implementando componentes reutilizables sin bloatware, estado predecible y sincronización en segundo plano con APIs REST seguras.",
        results:
          "Ahorro de más de 8 horas semanales por líder de equipo en consolidación de reportes y eliminación del 90% de fricciones en traspasos de proyectos.",
      },
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
        "Orquestación continua de prospectos y eventos omnicanal entre Google Cloud, n8n y mensajería con tolerancia a fallos.",
      longDescription:
        "Diseño de arquitectura de integración continua y pipelines de datos conectando Google Cloud Platform con flujos orquestados en n8n, webhooks seguros y mensajería omnicanal para eliminar intervención manual.",
      keyMetric: "12k+ eventos/mes · 0% data loss",
      metrics: [
        { label: "Eventos procesados / mes", value: "+12,000" },
        { label: "Tiempo de respuesta end-to-end", value: "< 3 seg" },
        { label: "Tasa de entrega con reintentos", value: "99.98%" },
      ],
      caseStudy: {
        challenge:
          "Pérdida de prospectos de alto valor por caídas intermitentes de APIs de terceros (CRMs y plataformas de mensajería) y retrasos de hasta 24 horas en la calificación manual.",
        decisions:
          "Implementé colas de reintentos exponenciales con Dead-Letter Queues (DLQ) en GCP y orquestadores n8n dedicados con validación estricta de payloads y alertas webhook automáticas ante fallas.",
        results:
          "Procesamiento mensual de más de 12.000 eventos con cero pérdida de prospectos, respuesta automatizada en menos de 3 segundos y ahorro de 15+ horas semanales de trabajo repetitivo.",
      },
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
        "Modelos de lenguaje y visión desplegados en hardware propio. Extracción estructurada y análisis de documentos sensibles sin fuga a proveedores externos.",
      longDescription:
        "Despliegue local y orquestación de LLMs y VLMs (MiniCPM-V y Ollama) en contenedores aislados para extracción estructurada de datos en documentos médicos y legales, garantizando estricta soberanía de datos y costo cero en tokens.",
      keyMetric: "$0 tokens de API · 100% on-premise",
      metrics: [
        { label: "Gasto en tokens externos", value: "$0 USD" },
        { label: "Soberanía y aislamiento de datos", value: "100% Local" },
        { label: "Tiempo de inferencia promedio", value: "< 1.4s" },
      ],
      caseStudy: {
        challenge:
          "Necesidad de analizar documentos visuales complejos (informes escaneados, tablas y formularios) con requisitos regulatorios que prohibían enviar información sensible a APIs de IA de terceros.",
        decisions:
          "Desplegué un pipeline contenerizado con Docker utilizando MiniCPM-V y Ollama con aceleración local, esquemas de salida JSON forzados mediante gramáticas y políticas de aislamiento de red (air-gap lógico).",
        results:
          "Procesamiento autónomo continuo sin cuotas ni límites de rate-limit externo, $0 costos recurrentes por tokens y cumplimiento estricto de confidencialidad de datos corporativos.",
      },
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
      title: "Tech Lead & Consultor de Software Freelance",
      subtitle:
        "2019 – presente · Diseño y despliegue de arquitecturas web, IA local y pipelines de automatización para firmas legales y empresas en EE. UU.",
    },
    {
      title: "C# Fundamentals — Microsoft y freeCodeCamp",
      subtitle:
        "Enero 2024 · Certificación en fundamentos de desarrollo, POO y buenas prácticas en C# / .NET.",
    },
    {
      title: "Tecnología en Desarrollo Informático — ECCI",
      subtitle:
        "Bogotá, CO · Formación en ingeniería de software, arquitectura de sistemas y gestión de bases de datos.",
    },
    {
      title: "Technical Systems Specialist — Viva IPS",
      subtitle:
        "2021 – 2023 · Soporte técnico nivel 2, monitoreo de infraestructura crítica y administración de redes y servidores.",
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
