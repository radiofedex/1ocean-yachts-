export interface YachtSpecifications {
  beam?: string;
  draft?: string;
  cabins?: number;
  guests?: number;
  crew?: number;
  engines?: string;
  speed?: {
    max: string;
    cruise: string;
  };
  fuel?: string;
  range?: string;
  builder?: string;
  naval_architect?: string;
  refit?: number;
}

export interface Yacht {
  id: string;
  name: string;
  length: string;
  type: 'Motor Yacht' | 'Sailing Yacht' | 'Superyacht' | 'Catamaran' | 'Gulet';
  year: number;
  price: string | null;
  status: 'sale' | 'charter' | 'both';
  location: string;
  images: string[];
  description: string;
  specifications: YachtSpecifications;
  charterRate?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Destination {
  id: string;
  name: string;
  region: 'america' | 'europe';
  description: string;
  image: string;
  href: string;
  destinations: string[];
}

export interface Event {
  id: string;
  name: string;
  date: string;
  endDate?: string;
  location: string;
  description: string;
  image: string;
  href: string;
  category: 'boat-show' | 'yacht-festival' | 'race' | 'other';
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
  tagline: string;
  founded?: number;
  specialty?: string;
}

export type ModalType = 'buy' | 'sell' | 'charter' | null;
export type Language = 'en' | 'es' | 'it' | 'fr';
export type CharterRegion = 'america' | 'europe' | null;

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
  modal?: ModalType;
}

export interface FormOption {
  value: string;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'radio' | 'date';
  required?: boolean;
  placeholder?: string;
  options?: FormOption[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}
