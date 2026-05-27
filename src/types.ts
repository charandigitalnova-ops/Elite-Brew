export interface ItemOption {
  name: string;
  choices: string[];
  priceAdjustments?: Record<string, number>;
}

export interface MenuItem {
  id: string;
  name: string;
  category: "coffee" | "tea" | "pastries" | "brunch";
  price: number;
  description: string;
  imageUrl: string;
  tags?: string[];
  customizable?: boolean;
  options?: ItemOption[];
}

export interface CartItem {
  cartId: string; // Unique ID for Cartesian product of item + custom choices
  item: MenuItem;
  quantity: number;
  selectedOptions: Record<string, string>;
  customInstructions?: string;
  unitPrice: number;
  totalPrice: number;
}

export interface StorySection {
  title: string;
  subtitle?: string;
  text: string;
  imageUrl?: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  address: string;
  hours: string[];
  phone: string;
  coordinates: string;
  mapUrl: string;
}

export interface FlavorQuizState {
  mood: string;
  energy: "low" | "medium" | "high";
  profile: "aromatic-delicate" | "rich-bold" | "comforting-sweet" | "fresh-crisp";
  notes: string[];
}
