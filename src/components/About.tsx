import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import Resume from '../Assets/Praveen_Kukudala_Resume_Full_Stack_developer.pdf'

export default function About() {
  return (
    <section id="about" className="py-20 flex justify-center bg-purple-50">
      <div className="container max-w-2xl px-8 flex justify-end">
        <div className="max-w-5xl mx-auto flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
                alt="Profile"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-xl grid justify-items-center">
              <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
              <p className="text-gray-600 mb-4 w-full text-justify">
                👋 Hey there! I’m Praveen Kukudala, a passionate Graduate Student at The University of Memphis, currently pursuing my Master’s in Data Science. I specialize in building impactful web applications and systems, with expertise in React, Node.js, MongoDB, Python, and RESTful APIs.
              </p>
              <p className='text-gray-600 mb-4 text-justify'>💻 My journey in tech started with a curiosity for how technology powers the world around us. From my time at Cognizant as a Programming Analyst, I’ve honed my skills in both frontend and backend development. I’ve worked on diverse projects, including e-commerce platforms and enterprise solutions, where I contributed to building seamless, user-friendly applications and optimized backend architectures for performance and scalability.</p>
              <p className='text-gray-600 mb-4 text-justify'>🚀 With a strong drive to create meaningful, real-world solutions, my goal is to continue blending creativity with technology. Whether it’s improving user experiences or developing scalable systems, I strive to deliver results that make a difference.</p>
              <div className="flex gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={Resume}
                  target="_blank"
                  className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition-colors"
                >
                  <Download size={20} />
                  Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
