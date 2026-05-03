import { motion } from 'framer-motion';
import Button from '../common/Button';
import { staggerContainerVariants, slideUpVariants } from '../../utils/animations';

/**
 * Hero Section - Landing section with main CTA
 */

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-4 pt-20"
    >
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto text-white"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Experience the <span className="text-accent">Essence</span> of Spices
        </motion.h1>

        <motion.p
          variants={slideUpVariants}
          className="text-xl md:text-2xl mb-8 text-gray-100"
        >
          Premium quality spices, directly from farms to your kitchen. 100% natural and pure.
        </motion.p>

        <motion.div
          variants={slideUpVariants}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button
            variant="secondary"
            size="lg"
            className="text-lg"
          >
            Shop Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg bg-white text-primary border-white hover:bg-primary hover:text-white"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-12"
        >
          <div className="text-6xl">✨</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
