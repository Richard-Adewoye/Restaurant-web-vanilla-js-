export type MenuCategory = 'all' | 'starters' | 'mains' | 'grill' | 'desserts';
export type ActivePageView = 'home' | 'wine-cellar-page' | 'private-events-page';

export interface MenuItem {
  id: string;
  name: string;
  subtitle?: string;
  category: 'starters' | 'mains' | 'grill' | 'desserts';
  price: number;
  description: string;
  tags: string[];
  image: string;
  pairingRecommendation?: string;
  calories?: number;
  isChefPick?: boolean;
  dietaryFlags?: {
    vegetarian?: boolean;
    vegan?: boolean;
    glutenFree?: boolean;
    dairyFree?: boolean;
  };
  flavorNotes?: string[];
  preparationTime?: string;
}

export interface ReservationData {
  guestName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  diningArea: 'Main Dining Room' | "Chef's Counter" | 'Garden Terrace' | 'Private Tasting Vault';
  specialOccasion?: string;
  dietaryNotes?: string;
}

export interface StoryPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlightStat: string;
  statLabel: string;
}

export interface WineItem {
  id: string;
  name: string;
  producer: string;
  vintage: string;
  region: string;
  country: string;
  category: 'red' | 'white' | 'champagne' | 'reserve';
  priceGlass?: number;
  priceBottle: number;
  description: string;
  tastingNotes: string[];
  bodyWeight: 'Light' | 'Medium' | 'Full-Bodied' | 'Crisp & Effervescent';
  sommelierRating: string;
  pairingDish: string;
  isRareAllocation?: boolean;
}

export interface DiningSpace {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  description: string;
  ambianceKeywords: string[];
  image: string;
  features: string[];
  acousticLevel: string;
}

export interface Testimonial {
  id: string;
  author: string;
  title: string;
  publication: string;
  quote: string;
  rating: number;
  year: string;
  badge?: string;
  avatar?: string;
}

export interface EventPackage {
  id: string;
  name: string;
  subtitle: string;
  guestCapacity: string;
  priceStartingPerGuest: number;
  description: string;
  includes: string[];
  sampleMenuCourses: {
    courseName: string;
    description: string;
  }[];
  recommendedSpace: string;
}

