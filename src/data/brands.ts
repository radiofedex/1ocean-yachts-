import type { Brand } from '@/types';

export const brands: Brand[] = [
  {
    id: 'palmer-johnson',
    name: 'Palmer Johnson',
    tagline: 'American Yachting Heritage Since 1918',
    description:
      'Founded in 1918 in Sturgeon Bay, Wisconsin, Palmer Johnson is one of the most storied names in American yacht building. Known for their groundbreaking Sport Yacht designs and custom superyacht construction, Palmer Johnson vessels represent a fusion of naval innovation and uncompromising luxury. 1 Ocean Yachts is proud to serve as an exclusive representative for this legendary marque.',
    image: '/assets/brands/palmer-johnson.jpg',
    href: '/exclusive-brands/palmer-johnson',
    founded: 1918,
    specialty: 'Sport Yachts & Custom Superyachts',
  },
  {
    id: 'g-tender',
    name: 'G-Tender',
    tagline: 'The Ultimate Superyacht Companion',
    description:
      'G-Tender represents the new standard in luxury tender design — engineered to complement the most prestigious superyachts afloat. Combining performance, aesthetics, and exceptional build quality, G-Tender crafts the perfect companion vessel for those who accept nothing but the finest in every detail of their yachting experience.',
    image: '/assets/brands/g-tender.jpg',
    href: '/exclusive-brands/g-tender',
    specialty: 'Premium Luxury Tenders',
  },
];

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find((b) => b.id === id);
};
