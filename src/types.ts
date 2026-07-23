export type MenuCategory = 'all' | 'starters' | 'mains' | 'grill' | 'desserts';

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
