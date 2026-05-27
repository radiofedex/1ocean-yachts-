import type { Destination } from '@/types';

export const destinations: Destination[] = [
  {
    id: 'america',
    name: 'The Americas',
    region: 'america',
    description:
      'From the turquoise shallows of the Bahamas to the vibrant energy of Miami, charter the most spectacular cruising grounds in the western hemisphere.',
    image: '/assets/destinations/america.jpg',
    href: '/charter/america',
    destinations: [
      'Miami & South Florida',
      'The Bahamas',
      'Florida Keys',
      'US Virgin Islands',
      'BVI',
      'Caribbean Islands',
    ],
  },
  {
    id: 'europe',
    name: 'Mediterranean',
    region: 'europe',
    description:
      'Explore the legendary waters of the Mediterranean — from the wild beauty of Sardinia and Corsica to the glamour of the French Riviera and the Balearic Islands.',
    image: '/assets/destinations/europe.jpg',
    href: '/charter/europe',
    destinations: [
      'Costa Smeralda, Sardinia',
      'Balearic Islands',
      'Elba',
      'Corsica',
      'French Riviera',
      'Tuscany Archipelago',
      'Other Mediterranean',
    ],
  },
];

export const americaDestinations = [
  'Miami',
  'Bahamas',
  'Florida Keys',
  'Caribbean',
  'US Virgin Islands',
  'BVI',
  'Other',
];

export const europeDestinations = [
  'Costa Smeralda',
  'Sardinia',
  'Balearic Islands',
  'Elba',
  'Corsica',
  'French Riviera',
  'Tuscany Archipelago',
  'Other Mediterranean',
];
