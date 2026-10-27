# Daniel Palma — Tech Lead & Portfolio

> Portafolio personal y profesional de **Daniel Palma** — Tech Lead y consultor especializado en arquitectura de sistemas, IA local aplicada (Ollama, MiniCPM-V) y automatización de procesos (GCP, n8n) para clientes en EE. UU. y Latinoamérica.

🌐 **Sitio Web Oficial:** [https://dannypalma.com](https://dannypalma.com)  
🔗 **GitHub Pages:** [https://danny-palma.github.io/](https://danny-palma.github.io/)

---

## 🛠️ Tecnologías y Stack

- **Frontend:** React 18, TypeScript, Vite
- **Estilos y Diseño:** Tailwind CSS, Tokens CSS nativos (paleta bosque, crema y cobre), Google Fonts (*Bricolage Grotesque*, *JetBrains Mono*, *Caveat*)
- **Animaciones:** Animaciones y transiciones CSS nativas de alto rendimiento (sin dependencias pesadas de runtime)
- **Servicios:** `@emailjs/browser` (contacto directo funcional), `react-ga4` (analítica web)
- **Despliegue:** `gh-pages` con soporte para dominio personalizado (`dannypalma.com`)

---

## 📂 Estructura del Proyecto

El código está estructurado bajo una arquitectura de componentes modulares, desacoplados y reutilizables:

```text
src/
├── components/          # Componentes reutilizables por dominio
│   ├── common/          # Chip, SectionHeader, etc.
│   ├── navigation/      # RailNav flotante con scroll-spy, SkipLink
│   ├── hero/            # HeroCard, HeroBento, TerminalCard, LocationCard, StackCard, PipelineCard
│   ├── projects/        # ProjectsSection, ProjectCard, ProjectModal interactivo
│   ├── services/        # ServicesSection, ServiceCard, ConvictionsCard
│   ├── stack/           # StackSection, StackCard
│   ├── trajectory/      # TrajectorySection con línea de tiempo
│   └── contact/         # ContactSection (CTA cobre), ContactModal con EmailJS
├── data/
│   └── portfolio.ts     # Fuente de verdad centralizada con toda la información y textos
├── services/
│   └── emailService.ts  # Integración y envío de correos vía EmailJS
├── types/
│   └── portfolio.ts     # Tipado estricto con interfaces de TypeScript
├── App.tsx              # Componente raíz ensamblador
├── main.tsx             # Punto de entrada de React
└── index.css            # Tokens de diseño, estilos base y animaciones CSS
```

---

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- Node.js `18.x` o superior
- npm `9.x` o superior

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/danny-palma/danny-palma.github.io.git
   cd danny-palma.github.io
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador.

4. **Ejecutar el linter de código:**
   ```bash
   npm run lint
   ```

5. **Construir para producción:**
   ```bash
   npm run build
   ```

6. **Desplegar a GitHub Pages:**
   ```bash
   npm run deploy
   ```

---

## 👤 Autor

**Daniel Palma**
- **Web:** [https://dannypalma.com](https://dannypalma.com)
- **GitHub:** [@danny-palma](https://github.com/danny-palma)
- **LinkedIn:** [daniel-palma-dev](https://www.linkedin.com/in/daniel-palma-dev/)
- **Email:** [dannypalmadev@gmail.com](mailto:dannypalmadev@gmail.com)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [MIT.md](MIT.md) para más detalles.
