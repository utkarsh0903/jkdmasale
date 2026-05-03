import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

/**
 * Notes Page - Development guide and architecture
 * This page displays the project structure and development guidelines
 */

export default function Notes() {
  const sections = [
    {
      title: "Project Architecture",
      content: "Component-based React application with Tailwind CSS styling and Framer Motion animations. All components are reusable and follow DRY principles."
    },
    {
      title: "Component Structure",
      content: "Components are organized into common (Button, Card, Header, Footer), sections (Hero, Features, ProductGrid), and pages. Each component is independent and reusable."
    },
    {
      title: "Styling System",
      content: "Using Tailwind CSS with custom color palette. Primary: Gold (#B8860B), Secondary: Brown (#8B4513), Accent: Bright Gold (#D4AF37). All animations smooth (300-600ms)."
    },
    {
      title: "State Management",
      content: "Currently using React hooks (useState, useEffect). For future scaling, consider Redux or Context API for complex state management."
    },
    {
      title: "Future Roadmap",
      content: "Phase 2: Backend integration (Node.js/Express), User auth, Orders, Payments. Phase 3: Mobile app, Chat, Loyalty program, Analytics."
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold text-dark mb-4">Development Notes</h1>
            <p className="text-xl text-gray-600">
              Your guide to understanding and extending the JK D Masale platform
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-light p-6 rounded-xl border-l-4 border-primary"
              >
                <h2 className="text-2xl font-bold text-primary mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Key Files */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Important Files</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-accent mb-2">Configuration</h3>
                <ul className="space-y-1 text-sm">
                  <li>• tailwind.config.js - Theme & colors</li>
                  <li>• postcss.config.js - CSS processing</li>
                  <li>• src/index.css - Global styles</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2">Core Files</h3>
                <ul className="space-y-1 text-sm">
                  <li>• src/App.jsx - Main component</li>
                  <li>• src/constants/products.js - Product data</li>
                  <li>• NOTES.md - Full documentation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Development Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 bg-light p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-dark mb-4">Development Tips</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Always check if a component exists before creating a new one</li>
              <li>✅ Use Tailwind utilities - avoid inline styles</li>
              <li>✅ Keep animations smooth and purposeful</li>
              <li>✅ Test responsiveness on mobile, tablet, and desktop</li>
              <li>✅ Document component props with JSDoc comments</li>
              <li>✅ Use constants instead of hardcoding values</li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold text-dark mb-6">
              Ready to build something amazing?
            </h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg">
                View Full Documentation
              </Button>
              <Button variant="outline" size="lg">
                Back to Products
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
