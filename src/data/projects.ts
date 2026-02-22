export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Aetherial UI',
    category: 'Design System',
    description: 'A minimalist design system focused on light and shadow, built for high-end creative tools.',
    imageUrl: 'https://picsum.photos/seed/aether/1200/800',
    link: '#',
    year: '2024'
  },
  {
    id: '2',
    title: 'Chronos Dashboard',
    category: 'Web App',
    description: 'Real-time analytics platform for high-frequency trading with sub-millisecond latency visualization.',
    imageUrl: 'https://picsum.photos/seed/chronos/1200/800',
    link: '#',
    year: '2023'
  },
  {
    id: '3',
    title: 'Lumina Studio',
    category: 'E-commerce',
    description: 'A bespoke shopping experience for architectural lighting fixtures and custom installations.',
    imageUrl: 'https://picsum.photos/seed/lumina/1200/800',
    link: '#',
    year: '2024'
  },
  {
    id: '4',
    title: 'Nomad Journal',
    category: 'Mobile App',
    description: 'An offline-first travel journal that uses AI to organize photos and memories based on location.',
    imageUrl: 'https://picsum.photos/seed/nomad/1200/800',
    link: '#',
    year: '2023'
  },
  {
    id: '5',
    title: 'Vertex Engine',
    category: 'Open Source',
    description: 'A high-performance 3D rendering engine built with WebGPU for the next generation of web games.',
    imageUrl: 'https://picsum.photos/seed/vertex/1200/800',
    link: '#',
    year: '2024'
  },
  {
    id: '6',
    title: 'Oasis Wellness',
    category: 'Brand Identity',
    description: 'Complete visual identity and digital presence for a luxury wellness retreat in the Swiss Alps.',
    imageUrl: 'https://picsum.photos/seed/oasis/1200/800',
    link: '#',
    year: '2022'
  }
];
