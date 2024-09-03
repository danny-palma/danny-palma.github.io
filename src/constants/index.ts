import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  cs,
  coverhunt,
  localendpoint,
  booksearch,
  menherachan,
} from '../assets';

export type INavLink = {
  id: string;
  title: string;
};

export type IService = {
  title: string;
  icon: string; // Ajusta el tipo si 'ux', 'frontend', 'backend', y 'prototyping' no son de tipo 'string'.
};

export type ITechnology = {
  name: string;
  icon: string; // Ajusta el tipo si 'html', 'css', 'javascript', etc., no son de tipo 'string'.
};

export type IExperience = {
  title: string;
  company_name: string;
  icon: string; // Ajusta el tipo si 'coverhunt' no es de tipo 'string'.
  iconBg: string;
  date: string;
};

export type ITag = {
  name: string;
  color: string;
};

export type IProject = {
  id: string;
  name: string;
  description: string;
  tags: ITag[];
  image: string; // Ajusta el tipo si 'booksearch', 'localendpoint', 'menherachan' no son de tipo 'string'.
  repo: string;
  demo: string;
};

export const navLinks: INavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services:IService[] = [
  {
    title: 'Backend Developer',
    icon: ux,
  },
  {
    title: 'SOLID principles.',
    icon: frontend,
  },
  {
    title: 'Relational Databases',
    icon: backend,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies: ITechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'C#',
    icon: cs,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: IExperience[] = [
  {
    title: 'Freelancer Web Developer',
    company_name: 'Freelance',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2019 - Present',
  },
  {
    title: 'Technical Systems Specialist',
    company_name: 'Viva IPS',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Present',
  },
  {
    title: 'C# Fundamentals with Microsoft and Free Code Camp Course',
    company_name: 'Microsoft and Free Code camp',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2024',
  },
  {
    title: 'Professional Git and GitHub course',
    company_name: 'Platzi',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2022',
  },
];

const projects: IProject[] = [
  {
    id: 'project-1',
    name: 'Book Search',
    description: 'An API to search books on database in mongoDB',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
    ],
    image: booksearch,
    repo: 'https://github.com/danny-palma/Pruebas-de-software',
    demo: 'https://pruebas-de-software.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Local Endpoint manager',
    description:
      'Project for the mass administration of computers on a local network natively in Windows with .NET Framework 4.7.6.',
    tags: [
      {
        name: 'C#',
        color: 'blue-text-gradient',
      },
    ],
    image: localendpoint,
    repo: 'https://github.com/danny-palma/LocalEndpointManager',
    demo: 'https://github.com/danny-palma/LocalEndpointManager',
  },
  {
    id: 'project-3',
    name: 'Bot Menhera Chan',
    description: 'Personal project which consists of a bot made for Discord with its own dashboard.',
    tags: [
      {
        name: 'Typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: menherachan,
    repo: 'https://github.com/danny-palma/bot-menhera-chan',
    demo: 'https://github.com/danny-palma/bot-menhera-chan',
  }
];

export { services, technologies, experiences, projects };
