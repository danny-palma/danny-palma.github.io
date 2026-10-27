export interface NavItem {
  id: string;
  label: string;
  icon: 'inicio' | 'proyectos' | 'servicios' | 'stack' | 'trayectoria' | 'contacto';
}

export interface ProjectItem {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  longDescription?: string;
  className: string;
  tags?: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  className: string;
  chips?: string[];
}

export interface ConvictionItem {
  num: string;
  title: string;
  description: string;
}

export interface StackCategory {
  id: string;
  label: string;
  chips: string[];
  className: string;
  heading?: string;
}

export interface TrajectoryEntry {
  title: string;
  subtitle: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    firstName: string;
    initials: string;
    role: string;
    tagline: string;
    availability: string;
    heroH1: {
      l1Prefix: string;
      l1Highlight: string;
      l2: string;
    };
    lead: string;
    scriptIntro: string;
    threePoints: string[];
    badge: {
      since: string;
      clientInfo: string;
    };
    locationSticker: string;
    locationInfo: {
      city: string;
      coordinates: string;
    };
    copyrightYear: string;
    footerFocus: string;
    terminal: {
      user: string;
      catProfile: {
        rol: string;
        base: string;
        clientes: string;
        foco: string;
      };
    };
    dailyStack: string[];
    pipeline: string[];
  };
  navigation: NavItem[];
  projects: ProjectItem[];
  services: ServiceItem[];
  convictions: ConvictionItem[];
  stack: StackCategory[];
  trajectory: TrajectoryEntry[];
  contact: {
    eyebrow: string;
    heading: string;
    lead: string;
    email: string;
    linkedin: string;
    github: string;
    cvUrl: string;
  };
}
