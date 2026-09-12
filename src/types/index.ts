export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  duration: string;
  route: string;
  minimumPax: number;
  price: number;
  packageType: string;
  inclusions: string[];
  importantNote?: string;
  marketingLine?: string;
  image: string;
}

export interface Vehicle {
  id: string;
  name: string;
  seatingCapacity: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}
