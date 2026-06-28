import SambharImg from '../assets/Sambhar.jpeg';
import ChaatImg from '../assets/Chaat.jpeg';
import PavBhajiImg from '../assets/Pav Bhaji.jpeg';
import PeriPeriImg from '../assets/Peri Peri.jpeg';
import ChanaImg from '../assets/Chana.jpeg';
import MagicMasalaImg from '../assets/Magie Masala.jpeg';
import GaramMasalaImg from '../assets/Garam Masala.jpg';
import KadaiPaneerImg from '../assets/Kadai Paneer.jpg';
import BlackPepperImg from '../assets/Black Pepper.jpg';
import RedChilliImg from '../assets/Red Chilli.jpg';
import MeenuBhatiaImg from '../assets/Meenu Bhatia.png';
import BeenaAroraImg from '../assets/Beena Arora.png';
import PriyaSharmaImg from '../assets/Priya Sharma.png';
import ShahbazFarahImg from '../assets/Shahbaz Farah.jpg';

export const PRODUCTS = [
  {
    id: 1,
    name: "Chana Masala",
    price: [
      { size: "50g", value: 80 },
      { size: "100g", value: 150 }
    ],
    image: ChanaImg,
    category: "spices",
    rating: 4.9,
    reviews: 167,
    description: "Rich and robust Chana Masala for that perfect Amritsari flavor. Made with roasted spices for a deep, earthy taste.",
    benefits: ["Roasted Spices", "Rich Aroma", "Authentic Flavor"]
  },
  {
    id: 2,
    name: "Magic Masala",
    price: [
      { size: "50g", value: 80 },
      { size: "100g", value: 150 }
    ],
    image: MagicMasalaImg,
    category: "spices",
    rating: 5.0,
    reviews: 312,
    description: "Our signature Magic mix. A secret blend of spices that makes any vegetable, noodle, or dish taste extraordinary.",
    benefits: ["All-purpose", "Kid's Favorite", "Pure Magic"]
  },
  {
    id: 3,
    name: "Peri Peri Masala",
    price: [
      { size: "50g", value: 80 },
      { size: "100g", value: 150 }
    ],
    image: PeriPeriImg,
    category: "spices",
    rating: 4.8,
    reviews: 145,
    description: "Spicy, tangy, and absolutely addictive. Our Peri Peri Masala is perfect for fries, popcorn, and grilled snacks.",
    benefits: ["Fiery Taste", "Global Flavor", "No MSG"]
  },
  {
    id: 4,
    name: "Sambar Masala",
    price: [
      { size: "50g", value: 80 },
      { size: "100g", value: 150 }
    ],
    image: SambharImg,
    category: "spices",
    rating: 5.0,
    reviews: 245,
    description: "Authentic homemade Sambar Masala. Hand-ground spices to bring the true South Indian aroma to your kitchen.",
    benefits: ["Hand-ground", "No preservatives", "Traditional recipe"]
  },
  {
    id: 5,
    name: "Chaat Masala",
    price: [
      { size: "50g", value: 70 },
      { size: "100g", value: 130 }
    ],
    image: ChaatImg,
    category: "spices",
    rating: 4.9,
    reviews: 218,
    description: "Zesty and tangy homemade Chaat Masala. Perfect for fruits, salads, and snacks to give them that extra chatpata kick.",
    benefits: ["Tangy & Fresh", "Homemade quality", "Perfect for snacks"]
  },
  {
    id: 6,
    name: "Garam Masala",
    price: [
      { size: "50g", value: 90 },
      { size: "100g", value: 180 }
    ],
    image: GaramMasalaImg,
    category: "spices",
    rating: 4.9,
    reviews: 198,
    description: "Warm, aromatic, and deeply flavorful. Our Garam Masala is the soul of Indian cooking — blended fresh to elevate every dish.",
    benefits: ["Fresh Blend", "Rich Aroma", "Authentic Recipe"]
  },
  {
    id: 7,
    name: "Pav Bhaji Masala",
    price: [
      { size: "50g", value: 80 },
      { size: "100g", value: 150 }
    ],
    image: PavBhajiImg,
    category: "spices",
    rating: 4.9,
    reviews: 186,
    description: "Bring the Mumbai street flavor home with our authentic Pav Bhaji Masala. Rich in aroma and perfectly balanced spices.",
    benefits: ["Mumbai Authentic", "Hand-ground", "No artificial colors"]
  },
  {
    id: 8,
    name: "Kadai Paneer Masala",
    price: [
      { size: "50g", value: 80 },
      { size: "100g", value: 150 }
    ],
    image: KadaiPaneerImg,
    category: "spices",
    rating: 4.8,
    reviews: 134,
    description: "Perfectly spiced blend for restaurant-style Kadai Paneer at home. Bold, smoky, and irresistibly fragrant.",
    benefits: ["Restaurant Style", "Bold Flavor", "No Additives"]
  },
  {
    id: 9,
    name: "Black Pepper",
    price: [
      { size: "50g", value: 70 },
      { size: "100g", value: 130 }
    ],
    image: BlackPepperImg,
    category: "spices",
    rating: 4.9,
    reviews: 112,
    description: "Freshly ground pure Black Pepper. Sharp, pungent, and packed with natural antioxidants to season any dish perfectly.",
    benefits: ["Pure & Natural", "Freshly Ground", "No Fillers"]
  },
  {
    id: 10,
    name: "Red Chili Powder",
    price: [
      { size: "250g", value: 180 }
    ],
    image: RedChilliImg,
    category: "spices",
    rating: 5.0,
    reviews: 278,
    description: "Vibrant, fiery, and deeply colored Red Chili Powder. Made from select dried red chilies for bold heat and rich color.",
    benefits: ["Bold Heat", "Rich Color", "100% Pure"]
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
    title: "Best Value",
    description: "Premium quality at the most honest prices. Directly from our home to yours.",
    icon: "IndianRupee"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Meenu Bhatia",
    text: "Homemade masalas have always been my preference, and JKD Masala truly brings that authentic experience to life. The rich aroma and perfectly balanced spices remind me of 'Maa ke haath ka masala' — pure, comforting, and full of flavour. Thank you, JKD Masala, for bringing such authentic taste to every meal. Wishing you continued success, growth, and many more achievements ahead!",
    rating: 5,
    image: MeenuBhatiaImg
  },
  {
    id: 2,
    name: "Rita Aggarwal",
    text: "Supper se bhi uper!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=RitaAggarwal&backgroundColor=ffdfbf"
  },
  {
    id: 3,
    name: "Beena Arora",
    text: "Congratulations Didi on your new venture 'JKD Masala' 🌸 Wishing you lots of success, happiness, and growth in this new beginning. Your masala is really very tasty and full of amazing flavor 😊✨ May your hard work and dedication make JKD Masala a trusted and loved brand everywhere. Best wishes always!",
    rating: 5,
    image: BeenaAroraImg
  },
  {
    id: 4,
    name: "Priya Sharma",
    text: "This masala tastes so fresh, and the balance is amazing — nothing overpowers anything else. It gives the dish such an authentic, comforting taste. It truly tastes like a family recipe made with patience. Thank you 😊",
    rating: 5,
    image: PriyaSharmaImg
  },
  {
    id: 5,
    name: "Shahbaz Farah",
    text: "Absolutely loved the range of मसाले! The Magic Masala has a perfect balance of spice and flavor, making every snack super tasty. The Chaat Masala gives an authentic tangy punch, while the Sambhar Masala brings rich South Indian aroma and taste. Chana Masala is full of bold flavors and makes restaurant-style chole at home. Pav Bhaji Masala is incredibly buttery and flavorful, and the Peri Peri Masala adds the perfect spicy twist to fries, pasta, and sandwiches. Fresh aroma, great quality, and amazing taste in every pack. Highly recommended for every kitchen!",
    rating: 5,
    image: ShahbazFarahImg
  }
];
