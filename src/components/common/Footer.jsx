import { motion } from 'framer-motion';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

/**
 * Footer Component - Website footer with links and info
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    'Policy': [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Shipping Policy', href: '#' },
      { label: 'Return Policy', href: '#' }
    ]
  };

  const socials = [
    { icon: FaFacebook, url: 'https://www.instagram.com/jkdmasale?utm_source=qr&igsh=cW1mZXQxOXJ2emtv', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/jkdmasale?utm_source=qr&igsh=cW1mZXQxOXJ2emtv', label: 'Instagram' },
    { icon: FaTwitter, url: 'https://www.instagram.com/jkdmasale?utm_source=qr&igsh=cW1mZXQxOXJ2emtv', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#2D1B14] text-white pt-24 pb-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/src/assets/Logo.jpeg" 
                alt="Logo" 
                className="h-10 w-auto rounded-lg brightness-110"
              />
              <span className="font-black text-xl tracking-tighter uppercase">JK D Masale</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Preserving the heritage of authentic homemade spices. 100% natural, 100% pure, 100% love.
            </p>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h4 className="font-bold mb-4 text-accent">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h4 className="font-bold mb-4 text-accent">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@jkdmasale.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="https://wa.me/919811330920" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +91 9811330920 (WhatsApp)
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>123 Spice Lane, Delhi, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center flex-col md:flex-row gap-4">
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#D4AF37' }}
                  className="text-gray-400 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} JK D Masale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
