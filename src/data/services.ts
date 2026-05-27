import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'yacht-sales',
    title: 'Yacht Sales',
    description:
      'Tailored access to the world\'s most desirable yachts. Our expert brokers provide discreet, personalized guidance through every stage of acquisition — from initial search to closing.',
    icon: 'anchor',
    href: '/yachts-for-sale',
  },
  {
    id: 'yacht-charter',
    title: 'Yacht Charter',
    description:
      'Curated America and Mediterranean charter experiences crafted to your vision. From the Caribbean to the Costa Smeralda, we arrange extraordinary voyages aboard exceptional vessels.',
    icon: 'compass',
    href: '/yachts-for-charter',
  },
  {
    id: 'yacht-management',
    title: 'Yacht Management',
    description:
      'Comprehensive management solutions for yacht owners worldwide. We handle operations, maintenance, crew management, and compliance so you can focus on enjoying your investment.',
    icon: 'settings',
    href: '/yacht-management',
  },
  {
    id: 'crew-placement',
    title: 'Crew Placement',
    description:
      'Connecting elite vessels with certified, experienced maritime professionals. From captains and engineers to stewardesses and deckhands — we match the right talent to your crew.',
    icon: 'users',
    href: '/crew-placement',
  },
  {
    id: 'new-construction',
    title: 'New Construction Advisory',
    description:
      'Expert guidance from concept to delivery. We work alongside shipyards, naval architects, and interior designers to realize your vision for a bespoke new-build yacht.',
    icon: 'blueprint',
    href: '/contact',
  },
  {
    id: 'exclusive-brands',
    title: 'Exclusive Brands',
    description:
      'Official representatives of Palmer Johnson Yachts and G-Tender — two legendary names in luxury yachting. Access these exclusive marques through our dedicated brand advisory.',
    icon: 'star',
    href: '/exclusive-brands',
  },
];
