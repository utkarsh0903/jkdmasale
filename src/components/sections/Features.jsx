import { motion } from 'framer-motion';
import { Leaf, Star, Truck, IndianRupee } from 'lucide-react';
import { FEATURES } from '../../constants/products';
import Card from '../common/Card';

/**
 * Features Section - Showcase why customers choose us
 */

export default function Features() {
  const iconMap = {
    Leaf,
    Star,
    Truck,
    IndianRupee
  };

  return (
    <section id="features" className="py-24 bg-[#F9F1E7]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">The JKD Promise</h2>
          <p className="section-subtitle">
            What makes our homemade spices truly special
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white p-8 rounded-3xl text-center h-full flex flex-col items-center border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 bg-[#F9F1E7] rounded-xl mb-6 border border-amber-100"
                  >
                    <IconComponent size={24} className="text-[#E1AD01]" />
                  </motion.div>
                  <h3 className="text-lg font-black text-[#2D1B14] mb-3 uppercase tracking-tighter">
                    {feature.title}
                  </h3>
                  <p className="text-[#65350F]/70 text-xs leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
