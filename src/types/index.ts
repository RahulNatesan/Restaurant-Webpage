export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Pizzas' | 'Mains' | 'Desserts' | 'Beverages';
  image?: string;
  isVeg: boolean;
  isSignature?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // We'll map this to Lucide icons
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
}

export interface ReservationFormData {
  guests: number;
  date: string;
  time: string;
}
