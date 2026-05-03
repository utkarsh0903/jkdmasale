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
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We pride ourselves on quality, authenticity, and customer satisfaction
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
                <Card className="text-center h-full flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-4 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4"
                  >
                    <IconComponent size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
