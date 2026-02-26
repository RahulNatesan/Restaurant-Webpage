import { MenuItem, ServiceItem, BlogPost } from '../types';

export const menuItems: MenuItem[] = [
  // Starters / Appetizers
  {
    id: 's1',
    name: 'Kunafa Prawn',
    description: 'Signature fried Kunafa-wrapped jumbo prawns served in a shot glass',
    price: 675,
    category: 'Starters',
    isVeg: false,
    isSignature: true
  },
  {
    id: 's2',
    name: 'Galouti Kabab',
    description: 'Melt-in-mouth minced meat kababs with aromatic spices',
    price: 500,
    category: 'Starters',
    isVeg: false
  },
  {
    id: 's3',
    name: 'Mutton Seekh Kabab',
    description: 'Succulent minced mutton skewers with traditional spices',
    price: 500,
    category: 'Starters',
    isVeg: false
  },
  {
    id: 's4',
    name: 'Hari Mirch Chicken Tikka',
    description: 'Tender chicken tikka with green chili marinade',
    price: 450,
    category: 'Starters',
    isVeg: false,
    isSignature: true
  },
  {
    id: 's5',
    name: 'Mutton Barra Kabab',
    description: 'Tender mutton ribs marinated in robust spices',
    price: 625,
    category: 'Starters',
    isVeg: false
  },
  
  // Fusion Pizzas
  {
    id: 'p1',
    name: 'Chicken Tikka Pizza',
    description: 'Modern Indian fusion - tender chicken tikka on Italian base',
    price: 1000,
    category: 'Pizzas',
    isVeg: false,
    isSignature: true
  },
  {
    id: 'p2',
    name: 'Daal Makhani Pizza',
    description: 'Unique fusion of creamy daal makhani on wood-fired pizza',
    price: 775,
    category: 'Pizzas',
    isVeg: true
  },
  {
    id: 'p3',
    name: 'Murgh Saagwala Pizza',
    description: 'Chicken in spinach gravy meets Italian pizza perfection',
    price: 875,
    category: 'Pizzas',
    isVeg: false
  },
  {
    id: 'p4',
    name: 'Pizza Makhani',
    description: 'Rich makhani sauce with cheese on crispy pizza base',
    price: 875,
    category: 'Pizzas',
    isVeg: false
  },

  // Mains
  {
    id: 'm1',
    name: 'Nalli Biryani',
    description: 'Fragrant biryani with tender mutton shanks and aromatic spices',
    price: 625,
    category: 'Mains',
    isVeg: false,
    isSignature: true
  },

  // Desserts
  {
    id: 'de1',
    name: 'Triple Chocolate Cheesecake',
    description: 'Decadent three-layer chocolate cheesecake',
    price: 350,
    category: 'Desserts',
    isVeg: true,
    isSignature: true
  },
  {
    id: 'de2',
    name: 'Assorted Cheesecakes',
    description: 'Selection of our finest handcrafted cheesecakes',
    price: 350,
    category: 'Desserts',
    isVeg: true
  },

  // Beverages
  {
    id: 'b1',
    name: 'Café Latte',
    description: 'Smooth espresso with steamed milk',
    price: 175,
    category: 'Beverages',
    isVeg: true
  }
];

export const services: ServiceItem[] = [
  {
    id: 's1',
    title: 'Valet Parking',
    description: 'Convenient valet parking service for all our guests.',
    icon: 'Car'
  },
  {
    id: 's2',
    title: 'Takeaway & Delivery',
    description: 'No-contact delivery and kerbside pickup available.',
    icon: 'Bike'
  },
  {
    id: 's3',
    title: 'WiFi & Kid-Friendly',
    description: 'Free WiFi and welcoming atmosphere for families.',
    icon: 'Wifi'
  },
  {
    id: 's4',
    title: 'Multiple Payment Options',
    description: 'NFC, Cards, SwiggyPay, and EazyDiner accepted.',
    icon: 'CreditCard'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog1',
    title: 'The Story Behind Our Signature Kunafa Prawn',
    date: 'February 12, 2026',
    image: '/images/blog1.jpg'
  },
  {
    id: 'blog2',
    title: 'Fusion Done Right: Indian Meets Italian',
    date: 'February 05, 2026',
    image: '/images/blog2.jpg'
  },
  {
    id: 'blog3',
    title: "HUNDREDS BISTRO's Journey from Vellore to Chennai",
    date: 'January 28, 2026',
    image: '/images/blog3.jpg'
  }
];
