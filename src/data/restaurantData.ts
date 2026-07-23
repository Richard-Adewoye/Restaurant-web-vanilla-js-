import { MenuItem, StoryPillar, WineItem, DiningSpace, Testimonial, EventPackage } from '../types';

// Using our generated images + high quality Unsplash culinary photography
export const HERO_IMAGE = '/src/assets/images/restaurant_hero_1784843606146.jpg';
export const SIGNATURE_DISH_IMAGE = '/src/assets/images/signature_dish_1784843616935.jpg';

export const RESTAURANT_INFO = {
  name: "L'ARTISAN",
  tagline: 'Artisanal Hearth & Modern Gastronomy',
  address: '427 West Broadway, SoHo, New York, NY 10012',
  phone: '+1 (212) 890-3400',
  email: 'concierge@lartisanbistro.com',
  hours: {
    dinner: 'Tues – Sun: 5:00 PM – 11:30 PM',
    lunch: 'Fri – Sun: 11:30 AM – 3:00 PM',
    closed: 'Mondays',
  },
  michelinRating: 'Michelin Selected 2025 • Two Star Honor',
  chef: {
    name: 'Chef Henri Laurent',
    title: 'Executive Chef & Culinary Director',
    quote: 'Cooking on open fire requires reverence. We listen to the oak embers, source ingredients at their morning peak, and present dishes that celebrate nature without artifice.',
    bio: 'Classically trained at L’Arpège in Paris, Henri spent 15 years perfecting woodfire cooking in the Basque Country before founding L\'Artisan.',
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
  }
};

export const STORY_PILLARS: StoryPillar[] = [
  {
    id: 'pillar-1',
    title: 'Oakwood Woodfire Hearth',
    subtitle: 'Elemental Heat',
    description: 'Our custom 12-foot brick hearth burns aged white oak and cherry wood, searing wild fish and heritage cuts at 800°F to unlock subtle caramel notes and delicate smokiness.',
    iconName: 'Flame',
    highlightStat: '800°F',
    statLabel: 'Hearth Temperature',
  },
  {
    id: 'pillar-2',
    title: 'Zero-Km Farm Partnerships',
    subtitle: 'Seasonal Purity',
    description: 'We harvest daily from our bio-dynamic estate in Hudson Valley. Rare heirloom vegetables, edible micro-botanicals, and unpasteurized farmhouse cheeses arrive within hours of picking.',
    iconName: 'Sprout',
    highlightStat: '100%',
    statLabel: 'Organic Sourcing',
  },
  {
    id: 'pillar-3',
    title: 'The Vintage Wine Vault',
    subtitle: 'Art of Pairing',
    description: 'Curated by Master Sommelier Clara Vance, our cellar houses 480 organic & biodynamic vintages, alongside limited allocations from Burgundy and Sonoma slopes.',
    iconName: 'Wine',
    highlightStat: '480+',
    statLabel: 'Selected Labels',
  },
];

export const FEATURED_MENU_ITEMS: MenuItem[] = [
  {
    id: 'dish-1',
    name: 'Hearth-Seared A5 Wagyu',
    subtitle: 'Miyazaki Beef • Truffle Reduction',
    category: 'grill',
    price: 98,
    description: 'Prime Miyazaki A5 strip loin lightly smoked over cherrywood, served with black winter truffle velvet mash, roasted maitake mushrooms, and bone marrow jus.',
    tags: ['Chef Signature', 'Gluten-Free'],
    image: SIGNATURE_DISH_IMAGE,
    pairingRecommendation: '2018 Domaine Duroché Gevrey-Chambertin',
    calories: 680,
    isChefPick: true,
    dietaryFlags: {
      glutenFree: true,
    },
    flavorNotes: ['Umami', 'Black Truffle', 'Oak Smoke', 'Rich Velvet'],
    preparationTime: '20 mins',
  },
  {
    id: 'dish-2',
    name: 'Wild Bluefin Tuna Crudo',
    subtitle: 'Yuzu Kosho • Shiso • Crispy Lotus',
    category: 'starters',
    price: 34,
    description: 'Sustainably caught bluefin toro sliced thin, finished with house-aged yuzu ponzu, finger lime pearls, toasted sesame oil, and shiso microgreens.',
    tags: ['Raw Bar', 'Fresh Catch'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    pairingRecommendation: '2021 Domaine Sigalas Assyrtiko, Santorini',
    calories: 290,
    isChefPick: false,
    dietaryFlags: {
      glutenFree: true,
      dairyFree: true,
    },
    flavorNotes: ['Citrus Zest', 'Oceanic Freshness', 'Umami Crisp'],
    preparationTime: '12 mins',
  },
  {
    id: 'dish-3',
    name: 'Artisanal Morel Truffle Agnolotti',
    subtitle: 'Hand-Rolled Pasta • Aged Parmigiano',
    category: 'mains',
    price: 46,
    description: 'Piedmontese pasta parcels filled with braised wild morels, goat milk ricotta, and brown butter emulsion, showered with shaved black Périgord truffle.',
    tags: ['House Pasta', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281288?auto=format&fit=crop&w=800&q=80',
    pairingRecommendation: '2019 Vietti Barolo Castiglione',
    calories: 520,
    isChefPick: true,
    dietaryFlags: {
      vegetarian: true,
    },
    flavorNotes: ['Earthy Morel', 'Brown Butter', 'Aged Cheese'],
    preparationTime: '18 mins',
  },
  {
    id: 'dish-4',
    name: 'Wood-Roasted Icelandic Halibut',
    subtitle: 'Saffron Emulsion • Sea Beans • Fennel',
    category: 'mains',
    price: 52,
    description: 'Wild-caught line-caught halibut wrapped in fig leaves, hearth-roasted and rested on a velvety saffron bouillabaisse broth with braised fennel bulbs.',
    tags: ['Seafood Special', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    pairingRecommendation: '2020 Meursault Clos du Cromin',
    calories: 440,
    isChefPick: false,
    dietaryFlags: {
      glutenFree: true,
      dairyFree: true,
    },
    flavorNotes: ['Warm Saffron', 'Silky Halibut', 'Anise Fennel'],
    preparationTime: '22 mins',
  },
  {
    id: 'dish-5',
    name: 'Flame-Kissed Octopus Tentacle',
    subtitle: 'Smoked Paprika • Romesco • Fingerling',
    category: 'starters',
    price: 32,
    description: 'Galician octopus slow-poached in aromatics then charred over oak embers, paired with roasted red pepper romesco and crispy crushed fingerling potatoes.',
    tags: ['Spanish Oak Wood'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    pairingRecommendation: '2022 Albariño de Fefiñanes, Rías Baixas',
    calories: 380,
    isChefPick: false,
    dietaryFlags: {
      glutenFree: true,
      dairyFree: true,
    },
    flavorNotes: ['Smoky Char', 'Nutty Romesco', 'Tender Texture'],
    preparationTime: '15 mins',
  },
  {
    id: 'dish-6',
    name: 'Valrhona Dark Chocolate Hearth Tart',
    subtitle: 'Smoked Sea Salt • Bourbon Vanilla Gelato',
    category: 'desserts',
    price: 22,
    description: '70% Guanaja dark chocolate ganache in a cocoa nib crust, baked to order in woodfire oven residual heat, crowned with smoked Maldon salt crystals.',
    tags: ['Pastry Special', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    pairingRecommendation: 'Rare Taylor Fladgate 20 Year Tawny Port',
    calories: 480,
    isChefPick: true,
    dietaryFlags: {
      vegetarian: true,
    },
    flavorNotes: ['Rich Cocoa', 'Bittersweet', 'Salted Caramel Note'],
    preparationTime: '14 mins',
  },
];

export const WINE_SELECTIONS: WineItem[] = [
  {
    id: 'wine-1',
    name: 'Domaine Duroché Gevrey-Chambertin',
    producer: 'Domaine Duroché',
    vintage: '2018',
    region: 'Burgundy',
    country: 'France',
    category: 'red',
    priceGlass: 38,
    priceBottle: 195,
    description: 'Refined Pinot Noir with vibrant wild raspberry notes, forest floor aromatics, and silken, structured tannins.',
    tastingNotes: ['Wild Raspberry', 'Cedarwood', 'Black Cherry', 'Truffle Earth'],
    bodyWeight: 'Medium',
    sommelierRating: '96 Points • Wine Spectator',
    pairingDish: 'Hearth-Seared A5 Wagyu',
    isRareAllocation: true,
  },
  {
    id: 'wine-2',
    name: 'Meursault Clos du Cromin',
    producer: 'Domaine Genot-Boulanger',
    vintage: '2020',
    region: 'Côte de Beaune, Burgundy',
    country: 'France',
    category: 'white',
    priceGlass: 34,
    priceBottle: 170,
    description: 'Classic limestone Chardonnay with hazelnut butter complexity, flinty minerality, and electric acidity.',
    tastingNotes: ['Toasted Hazelnut', 'White Peach', 'Crushed Chalk', 'Meyer Lemon'],
    bodyWeight: 'Medium',
    sommelierRating: '95 Points • Decanter',
    pairingDish: 'Wood-Roasted Icelandic Halibut',
    isRareAllocation: false,
  },
  {
    id: 'wine-3',
    name: 'Dom Pérignon Vintage Brut',
    producer: 'Moët & Chandon',
    vintage: '2013',
    region: 'Épernay, Champagne',
    country: 'France',
    category: 'champagne',
    priceGlass: 65,
    priceBottle: 340,
    description: 'Luminous effervescence with brioche, candied citrus, and a persistent, smoky mineral finish.',
    tastingNotes: ['Toasted Brioche', 'Grapefruit Zest', 'Smoked Salt', 'Frangipane'],
    bodyWeight: 'Crisp & Effervescent',
    sommelierRating: '98 Points • James Suckling',
    pairingDish: 'Wild Bluefin Tuna Crudo',
    isRareAllocation: true,
  },
  {
    id: 'wine-4',
    name: 'Vietti Barolo Castiglione',
    producer: 'Vietti',
    vintage: '2019',
    region: 'Piedmont',
    country: 'Italy',
    category: 'red',
    priceGlass: 32,
    priceBottle: 155,
    description: 'Expressive Nebbiolo packed with dried rose petals, leather, ripe plum, and vibrant savory spice.',
    tastingNotes: ['Dried Rose Petal', 'Dark Plum', 'Sweet Tobacco', 'Anise'],
    bodyWeight: 'Full-Bodied',
    sommelierRating: '95 Points • Vinous',
    pairingDish: 'Artisanal Morel Truffle Agnolotti',
    isRareAllocation: false,
  },
  {
    id: 'wine-5',
    name: 'Château Margaux Premier Grand Cru Classé',
    producer: 'Château Margaux',
    vintage: '2010',
    region: 'Margaux, Bordeaux',
    country: 'France',
    category: 'reserve',
    priceBottle: 1250,
    description: 'A monument of finesse and power. Blackcurrant, graphite, violet, and effortless length stored in our temperature-controlled vault.',
    tastingNotes: ['Crushed Violet', 'Blackcurrant', 'Graphite', 'Dark Cocoa'],
    bodyWeight: 'Full-Bodied',
    sommelierRating: '100 Points • Robert Parker',
    pairingDish: 'Cellar Vault Tasting Menu',
    isRareAllocation: true,
  },
  {
    id: 'wine-6',
    name: 'Domaine Sigalas Assyrtiko',
    producer: 'Sigalas',
    vintage: '2021',
    region: 'Santorini',
    country: 'Greece',
    category: 'white',
    priceGlass: 22,
    priceBottle: 95,
    description: 'Volcanic island white showcasing crisp salinity, preserved lemon, and vibrant sea-spray tension.',
    tastingNotes: ['Volcanic Mineral', 'Preserved Lemon', 'Sea Salt', 'Green Apple'],
    bodyWeight: 'Light',
    sommelierRating: '93 Points • Wine Enthusiast',
    pairingDish: 'Flame-Kissed Octopus Tentacle',
    isRareAllocation: false,
  }
];

export const DINING_SPACES: DiningSpace[] = [
  {
    id: 'space-1',
    name: 'The Hearth Main Dining Room',
    subtitle: 'Dramatic Open Flame & SoHo Brickwork',
    capacity: 'Up to 75 Guests',
    description: 'Centered around our 12-foot custom brick fireplace with exposed historic SoHo timber beams, plush leather banquettes, and dim amber ambient illumination.',
    ambianceKeywords: ['Intimate Gold', 'Open Fireplace', 'Exposed Brick', 'Sophisticated'],
    image: HERO_IMAGE,
    features: ['Direct hearth view', 'Acoustically softened', 'Bespoke walnut tables', 'Sommelier cart service'],
    acousticLevel: 'Conversational & Energetic'
  },
  {
    id: 'space-2',
    name: "The Chef's Counter",
    subtitle: 'Front-Row Culinary Artistry',
    capacity: '12 Guests Only',
    description: 'A dark honed granite counter directly surrounding Chef Henri’s brigade. Witness live woodfire sear, precise plating, and interactive tasting explanations.',
    ambianceKeywords: ['Immersive', 'Front-Row', 'Culinary Theatre', 'Interactive'],
    image: SIGNATURE_DISH_IMAGE,
    features: ['Direct interaction with Chef', 'Exclusive 8-course tasting', 'Dedicated sommelier', 'Custom menu card'],
    acousticLevel: 'Focused & Vibrant'
  },
  {
    id: 'space-3',
    name: 'The SoHo Garden Terrace',
    subtitle: 'Enclosed Botanical Conservatory',
    capacity: 'Up to 35 Guests',
    description: 'A glass-roofed heated sanctuary adorned with climbing jasmine, olive trees, and hanging hand-blown glass lanterns.',
    ambianceKeywords: ['Airy Serenity', 'Botanical', 'Romantic', 'All-Season'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    features: ['Climate-controlled glass roof', 'Private bar station', 'Lush botanical foliage', 'Acoustic background jazz'],
    acousticLevel: 'Tranquil & Refined'
  },
  {
    id: 'space-4',
    name: 'The Private Tasting Vault',
    subtitle: 'Subterranean Vintage Wine Cellar',
    capacity: '8 to 16 Guests',
    description: 'Encased by 19th-century wine racks holding 480+ vintage bottles. Features a single slab black walnut table and dedicated personal sommelier.',
    ambianceKeywords: ['Ultra-Exclusive', 'Subterranean Vault', 'Vintage Oak', 'Candlelit'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    features: ['Temperature-controlled cellar', 'Private entrance', 'Bespoke glassware', 'Private sound control'],
    acousticLevel: 'Ultra-Private & Quiet'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Michelin Guide Inspector',
    title: 'Inspector Critique 2025',
    publication: 'Michelin Guide New York',
    quote: "L'Artisan elevates woodfire cooking to pure fine art. The A5 Wagyu smoked over cherrywood demonstrates masterstroke temperature control, while the sommelier pairings are immaculate.",
    rating: 5,
    year: '2025',
    badge: 'Michelin Selection',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    author: 'Pete Wells',
    title: 'Senior Restaurant Critic',
    publication: 'The New York Times',
    quote: "The hearth agnolotti filled with wild Hudson Valley morels is nothing short of transcendent. SoHo has found its definitive hearth sanctuary.",
    rating: 5,
    year: '2024',
    badge: 'Critic Choice',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    author: 'Evelyn & Julian Vance',
    title: 'Anniversary Dinner Guests',
    publication: 'Verified OpenTable Honor',
    quote: "We reserved the Private Tasting Vault for our 20th anniversary. The sommelier guided us through rare Burgundy allocations that perfectly matched Chef Henri's 7-course tasting.",
    rating: 5,
    year: '2025',
    badge: 'Guest Honor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'pkg-1',
    name: 'The SoHo Soirée',
    subtitle: 'Cocktails, Raw Bar & Hearth Canapés',
    guestCapacity: '20 to 60 Guests',
    priceStartingPerGuest: 185,
    description: 'Perfect for milestone birthdays, corporate receptions, and private celebrations requiring seamless movement and exquisite small bites.',
    includes: [
      '3-Hour Premium Open Bar with Sommelier Selected Wines',
      'Passing Raw Bar Seafood (Bluefin Crudo, Oysters, Lobster Medallions)',
      'Hearth-Seared Wagyu Sliders & Truffle Agnolotti Spoons',
      'Dedicated Event Concierge & Service Staff'
    ],
    sampleMenuCourses: [
      { courseName: 'Reception', description: 'Champagne Toast & Chef Canapés' },
      { courseName: 'Raw Bar', description: 'Bluefin Tuna Crudo & Hudson Valley Oysters' },
      { courseName: 'Hearth Bites', description: 'A5 Wagyu Skewers & Morel Truffle Crisp' }
    ],
    recommendedSpace: 'SoHo Garden Terrace or Main Dining Room'
  },
  {
    id: 'pkg-2',
    name: 'The Chef’s Grand Tasting Banquet',
    subtitle: 'Seated 6-Course Gastronomic Journey',
    guestCapacity: '10 to 45 Guests',
    priceStartingPerGuest: 295,
    description: 'Our flagship multi-course seated dining experience with full sommelier reserve pairings for each course.',
    includes: [
      '6-Course Bespoke Seasonal Menu by Chef Henri Laurent',
      'Grand Sommelier Wine Pairing for Every Course',
      'Custom Monogrammed Leather Menu Keep-sakes',
      'Exclusive Pre-Dinner Kitchen Hearth Tour'
    ],
    sampleMenuCourses: [
      { courseName: 'Course I', description: 'Wild Bluefin Tuna Crudo with Finger Lime' },
      { courseName: 'Course II', description: 'Artisanal Morel Truffle Agnolotti' },
      { courseName: 'Course III', description: 'Wood-Roasted Icelandic Halibut' },
      { courseName: 'Course IV', description: 'Hearth-Seared Miyazaki A5 Wagyu' },
      { courseName: 'Course V', description: 'Farmhouse Cheese Selection' },
      { courseName: 'Course VI', description: 'Valrhona Dark Chocolate Hearth Tart' }
    ],
    recommendedSpace: 'Private Tasting Vault or Main Dining Room'
  },
  {
    id: 'pkg-3',
    name: 'Full Restaurant Exclusive Buyout',
    subtitle: 'Complete Private Sanctuary',
    guestCapacity: 'Up to 120 Guests',
    priceStartingPerGuest: 420,
    description: 'Unprecedented exclusive access to all dining spaces, full staff, bespoke decor integration, and custom menu curations.',
    includes: [
      'Exclusive access to Main Dining Room, Garden Terrace & Cellar Vault',
      'Customized 7-Course Dining & Cocktail Program',
      'Private Acoustic Live Jazz Trio or DJ Setup',
      'Valet Parking & Dedicated Door Concierge'
    ],
    sampleMenuCourses: [
      { courseName: 'Welcome', description: 'Champagne & Caviar Reception in Terrace' },
      { courseName: 'Dinner', description: '7-Course Custom Michelin Tasting in Main Room' },
      { courseName: 'After-Party', description: 'Digestifs & Cigar Lounge in Cellar Vault' }
    ],
    recommendedSpace: 'Entire L\'Artisan Residence'
  }
];

