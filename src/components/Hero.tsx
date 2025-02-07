import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Star } from 'lucide-react';
import ProfileIMG from '../Assets/IMG_5549 3.jpg'



const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      rotate: [-2, 2, -2]
    }}
    transition={{ 
      duration: 5,
      repeat: Infinity,
      delay 
    }}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white">
      {/* Animated background elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{ 
            y: [null, Math.random() * -500],
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          <Star className="text-purple-200" size={Math.random() * 10 + 5} />
        </motion.div>
      ))}
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="flex items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <motion.img
            src={ProfileIMG} // Replace with your actual image path
            alt="Praveen Kukudala"
            className="w-48 h-50 md:w-64 md:h-68 rounded-full object-cover border-4 border-purple-500 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Hero Text */}
          <div className="text-center md:text-left">
            <FloatingElement delay={0.2}>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
              >
                Hi, I'm Praveen Kukudala
                <span className="relative inline-block">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-0 left-0 h-1 bg-purple-500"
                  />
                </span>
              </motion.h1>
            </FloatingElement>

            <FloatingElement delay={0.4}>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                A passionate developer crafting beautiful and functional web experiences
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-block ml-2"
                >
                  <Sparkles className="text-yellow-400" size={20} />
                </motion.span>
              </motion.p>
            </FloatingElement>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
              <a 
                href="#projects"
                className="relative inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full hover:text-purple-700 transition-colors"
              >
                View My Work
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown size={20} />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
