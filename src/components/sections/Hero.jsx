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
      className="min-h-screen bg-[#FFFDF5] flex items-center justify-center px-6 pt-24 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#E1AD01] opacity-5 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#65350F] opacity-5 blur-[120px] rounded-full" />
      
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto text-[#2D1B14]"
      >
        <motion.div
          variants={slideUpVariants}
          className="inline-block px-4 py-1.5 bg-[#E1AD01]/10 rounded-full mb-6 border border-[#E1AD01]/20"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E1AD01]">
            100% Homemade & Pure
          </span>
        </motion.div>

        <motion.h1
          variants={slideUpVariants}
          className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] uppercase tracking-tighter"
        >
          Taste the <br />
          <span className="text-[#E1AD01]">Tradition</span>
        </motion.h1>

        <motion.p
          variants={slideUpVariants}
          className="text-lg md:text-xl mb-12 text-[#65350F]/80 font-medium max-w-xl mx-auto leading-relaxed"
        >
          Handcrafted spices that bring the soul of Indian kitchens to your table. No chemicals, just pure flavor.
        </motion.p>

        <motion.div
          variants={slideUpVariants}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <a
            href="https://wa.me/919811330920"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              className="text-sm w-full md:w-48 shadow-xl"
            >
              Shop Spices
            </Button>
          </a>
          <a href="#features" className="w-full md:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="text-sm w-full md:w-48 shadow-xl"
            >
              Why Choose Us
            </Button>
          </a>
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
