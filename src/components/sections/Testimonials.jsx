import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../constants/products';
import Card from '../common/Card';

/**
 * Testimonials Section - Customer reviews and feedback
 */

export default function Testimonials() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Thousands of happy customers trust us for their spice needs
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
              <Card>
                {/* Star Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < testimonial.rating
                          ? 'fill-accent text-accent'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-dark">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
