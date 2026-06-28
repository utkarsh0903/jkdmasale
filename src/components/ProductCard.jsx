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
  const whatsappNumber = "919811330920"; // Updated number
  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in buying ${product.name}. Please provide more details.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-amber-50"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5 relative flex flex-col">
        {/* Fixed-height name area so long names don't shift layout */}
        <div className="min-h-[3.2rem] mb-2">
          <h3 className="text-base font-black text-[#2D1B14] group-hover:text-[#E1AD01] transition-colors uppercase tracking-tight leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Price List */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.price.map((p, i) => (
            <span key={i} className="px-3 py-1 bg-[#FFFDF5] rounded-full text-[10px] font-black text-[#E1AD01] border border-amber-100 uppercase tracking-widest">
              {p.size}: ₹{p.value}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5 text-[#E1AD01]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                className={i < Math.floor(product.rating) ? "" : "text-gray-200"}
              />
            ))}
          </div>
          <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">({product.reviews})</span>
        </div>

        <p className="text-[#5C4033] text-xs mb-6 line-clamp-2 font-light leading-relaxed italic">
          "{product.description}"
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
            size="sm"
            className="w-full flex items-center justify-center gap-2 rounded-xl"
          >
            <FaWhatsapp size={16} />
            Connect Now
          </Button>
        </a>
      </div>
    </motion.div>
  );
}
