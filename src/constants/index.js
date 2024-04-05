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

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
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

const technologies = [
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

const experiences = [
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

const projects = [
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
