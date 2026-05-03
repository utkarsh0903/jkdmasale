import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../constants/products';
import Card from '../common/Card';

/**
 * Testimonials Section - Customer reviews and feedback
 */

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Happy Families</h2>
          <p className="section-subtitle">
            Stories of taste and tradition from our home to yours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-[#FFFDF5] p-8 rounded-3xl border border-amber-50 shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4 text-[#E1AD01]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      className={i < testimonial.rating ? "" : "text-gray-200"}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#65350F]/80 mb-6 italic font-medium leading-relaxed text-base">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="font-black text-[#2D1B14] text-sm uppercase tracking-tighter">{testimonial.name}</p>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Verified User</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
