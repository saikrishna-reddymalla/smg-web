export type CategorySlug =
  | "textiles"
  | "clothing-footwear"
  | "perfume-cosmetics";

export type VisualVariant =
  | "heritage"
  | "textile"
  | "bridal"
  | "footwear"
  | "perfume"
  | "beauty"
  | "gallery";

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactConfig {
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  addressLines: string[];
  businessHours: string | null;
  serviceArea: string;
}

export interface StoryCard {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  href: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  pageDescription: string;
  visual: VisualVariant;
  stats: Stat[];
  introTitle: string;
  introBody: string;
  spotlightTitle: string;
  spotlightIntro: string;
  spotlights: StoryCard[];
  collectionTitle: string;
  collectionIntro: string;
  collections: StoryCard[];
  catalogTitle: string;
  catalogIntro: string;
  enquiryIntro: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategorySlug;
  segment: string;
  audience: string;
  badge: string;
  description: string;
  materials: string[];
  tags: string[];
  featured: boolean;
  visual: VisualVariant;
  alt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: CategorySlug;
  caption: string;
  alt: string;
  visual: VisualVariant;
}

export interface ImagePrompt {
  title: string;
  useCase: string;
  prompt: string;
}
