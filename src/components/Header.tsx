import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 20px rgba(0,0,0,0.1)']
  );

  const menuItems = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  return (
    <motion.header 
      style={{ background: headerBackground, boxShadow: headerShadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center gap-3">
        {/* <div className="flex items-center gap-3">
            <motion.img 
              src="/your-image.jpg" 
              alt="Praveen Kukudala"
              className="w-10 h-10 rounded-full object-cover border-2 border-purple-500 shadow-md"
              whileHover={{ scale: 1.1 }}
            /> */}
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Praveen Kukudala
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                >
                  <span className="text-gray-600 hover:text-purple-600 transition-colors">
                    {item}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://www.github.com/praveen5470' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/praveen-kukudala-b51893187/' },
                { icon: Mail, href: 'mailto:praveenkukudala1@gmail.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            className="py-4 space-y-4"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileTap={{ scale: 0.95 }}
                className="block text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}