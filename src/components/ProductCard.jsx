import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from './common/Button';

/**
 * ProductCard Component - Display individual product
 * Props:
 *   - product: object with id, name, price, image, rating, reviews
 */

export default function ProductCard({ product }) {
  const whatsappNumber = "919876543210"; // Updated to include country code
  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in buying ${product.name}. Please provide more details.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-accent text-dark px-3 py-1 rounded-full text-sm font-bold">
          ₹{product.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-dark mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'fill-accent text-accent'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Order on WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button
            variant="primary"
            size="md"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] border-none"
          >
            <FaWhatsapp size={18} />
            Order on WhatsApp
          </Button>
        </a>
      </div>
    </motion.div>
  );
}
