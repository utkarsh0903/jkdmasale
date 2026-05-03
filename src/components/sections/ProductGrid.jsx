import { motion } from 'framer-motion';
import { PRODUCTS } from '../../constants/products';
import ProductCard from '../ProductCard';

/**
 * ProductGrid Section - Display featured products with filter
 */

export default function ProductGrid() {
  const filteredProducts = PRODUCTS;

  return (
    <section id="products" className="py-24 bg-white border-y border-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Handpicked, premium quality spices for your kitchen
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
