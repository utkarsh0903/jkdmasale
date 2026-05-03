import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * WhatsAppButton Component - Floating button for quick WhatsApp contact
 */

export default function WhatsAppButton() {
  const whatsappNumber = "919811330920";
  const whatsappMessage = encodeURIComponent("Hi JKD Masale, I have a query about your products.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </motion.a>
  );
}
