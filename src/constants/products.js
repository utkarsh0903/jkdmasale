import SambharImg from '../assets/Sambhar.jpeg';
import ChaatImg from '../assets/Chaat.jpeg';
import PavBhajiImg from '../assets/Pav Bhaji.jpeg';
import PeriPeriImg from '../assets/Peri Peri.jpeg';
import ChanaImg from '../assets/Chana.jpeg';
import MagieImg from '../assets/Magie Masala.jpeg';

export const PRODUCTS = [
  {
    id: 1,
    name: "Sambhar Masala",
    price: [
      { size: "50g", value: 50 },
      { size: "100g", value: 100 }
    ],
    image: SambharImg,
    category: "spices",
    rating: 5.0,
    reviews: 245,
    description: "Authentic homemade Sambhar Masala. Hand-ground spices to bring the true South Indian aroma to your kitchen.",
    benefits: ["Hand-ground", "No preservatives", "Traditional recipe"]
  },
  {
    id: 2,
    name: "Chaat Masala",
    price: [
      { size: "50g", value: 50 },
      { size: "100g", value: 100 }
    ],
    image: ChaatImg,
    category: "spices",
    rating: 4.9,
    reviews: 218,
    description: "Zesty and tangy homemade Chaat Masala. Perfect for fruits, salads, and snacks to give them that extra chatpata kick.",
    benefits: ["Tangy & Fresh", "Homemade quality", "Perfect for snacks"]
  },
  {
    id: 3,
    name: "Pav Bhaji Masala",
    price: [
      { size: "50g", value: 50 },
      { size: "100g", value: 100 }
    ],
    image: PavBhajiImg,
    category: "spices",
    rating: 4.9,
    reviews: 186,
    description: "Bring the Mumbai street flavor home with our authentic Pav Bhaji Masala. Rich in aroma and perfectly balanced spices.",
    benefits: ["Mumbai Authentic", "Hand-ground", "No artificial colors"]
  },
  {
    id: 4,
    name: "Peri Peri Masala",
    price: [
      { size: "50g", value: 50 },
      { size: "100g", value: 100 }
    ],
    image: PeriPeriImg,
    category: "spices",
    rating: 4.8,
    reviews: 145,
    description: "Spicy, tangy, and absolutely addictive. Our Peri Peri Masala is perfect for fries, popcorn, and grilled snacks.",
    benefits: ["Fiery Taste", "Global Flavor", "No MSG"]
  },
  {
    id: 5,
    name: "Chana Masala",
    price: [
      { size: "50g", value: 50 },
      { size: "100g", value: 100 }
    ],
    image: ChanaImg,
    category: "spices",
    rating: 4.9,
    reviews: 167,
    description: "Rich and robust Chana Masala for that perfect Amritsari flavor. Made with roasted spices for a deep, earthy taste.",
    benefits: ["Roasted Spices", "Rich Aroma", "Authentic Flavor"]
  },
  {
    id: 6,
    name: "Magie Masala",
    price: [
      { size: "50g", value: 50 },
      { size: "100g", value: 100 }
    ],
    image: MagieImg,
    category: "spices",
    rating: 5.0,
    reviews: 312,
    description: "Our signature 'Magic' mix. A secret blend of spices that makes any vegetable, noodle, or dish taste extraordinary.",
    benefits: ["All-purpose", "Kid's Favorite", "Pure Magic"]
  }
];

export const FEATURES = [
  {
    id: 1,
    title: "100% Pure",
    description: "No additives or preservatives. Authentic homemade spices made with love.",
    icon: "Leaf"
  },
  {
    id: 2,
    title: "Handcrafted",
    description: "Small batches, hand-ground to preserve natural oils and intense aroma.",
    icon: "Star"
  },
  {
    id: 3,
    title: "Fast Delivery",
    description: "Quick shipping across India. Free delivery on orders above ₹1000.",
    icon: "Truck"
  },
  {
    id: 4,
    title: "Best Value",
    description: "Premium quality at the most honest prices. Directly from our home to yours.",
    icon: "IndianRupee"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sunita Sharma",
    text: "The Sambhar Masala is just like what my grandmother used to make. The aroma fills the entire house!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    text: "I've tried many brands, but JKD's Chaat Masala is on another level. Authentic and perfectly balanced.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Priya Verma",
    text: "Pure magic in a bottle! The Magie Masala makes even the simplest vegetables taste gourmet.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];
