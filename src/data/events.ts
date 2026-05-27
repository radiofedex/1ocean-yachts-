import type { Event } from '@/types';

export const events: Event[] = [
  {
    id: 'cannes-2025',
    name: 'Cannes Yachting Festival',
    date: '2025-09-09',
    endDate: '2025-09-14',
    location: 'Cannes, France',
    description:
      'The world\'s premier in-water boat show returns to the Vieux-Port of Cannes. Join 1 Ocean Yachts at this iconic event where we will be presenting an exclusive selection of new-builds and brokerage yachts to our most valued clients.',
    image: '/assets/events/cannes-2025.jpg',
    href: '/events',
    category: 'yacht-festival',
  },
  {
    id: 'monaco-2025',
    name: 'Monaco Yacht Show',
    date: '2025-09-24',
    endDate: '2025-09-27',
    location: 'Port Hercule, Monaco',
    description:
      'The most prestigious superyacht event in the world. The Monaco Yacht Show showcases the global yachting industry\'s finest new builds and one-off custom yachts. 1 Ocean Yachts will be in attendance with exclusive client access.',
    image: '/assets/events/monaco-2025.jpg',
    href: '/events',
    category: 'yacht-festival',
  },
  {
    id: 'flibs-2025',
    name: 'Fort Lauderdale International Boat Show',
    date: '2025-10-29',
    endDate: '2025-11-02',
    location: 'Fort Lauderdale, Florida',
    description:
      'The largest in-water boat show in the world and a cornerstone event for the Americas yachting market. FLIBS represents a critical touchpoint for buyers and sellers in our home market of South Florida.',
    image: '/assets/events/flibs-2025.jpg',
    href: '/events',
    category: 'boat-show',
  },
];

export const formatEventDate = (dateStr: string, endDateStr?: string): string => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  if (endDateStr) {
    const endDate = new Date(endDateStr);
    const startDay = date.getDate();
    const endDay = endDate.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${month} ${startDay}–${endDay}, ${year}`;
  }

  return date.toLocaleDateString('en-US', options);
};
