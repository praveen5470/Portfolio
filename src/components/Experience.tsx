import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'The University Of Memphis',
    position: 'Yugo Community Ambassador',
    period: 'June 2024 - December 2024',
    description: 'Led development of multiple web applications using React and TypeScript. Mentored junior developers and implemented best practices.'
  },
  {
    company: 'The University Of Memphis',
    position: 'Web Developer',
    period: 'January 2024 - August 2024',
    description: 'Led development of multiple web applications using React and TypeScript. Mentored junior developers and implemented best practices.'
  },
  {
    company: 'Cognizant Tech Solutions',
    position: 'Programming Analyst',
    period: 'November 2021 - December 2022',
    description: 'Led development of multiple web applications using React and TypeScript. Mentored junior developers and implemented best practices.'
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Briefcase className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-purple-600">{exp.company}</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}