import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    image: '/path-to-your-certificate-1.jpg',
    title: 'Google Analytics Individual Qualification',
    organization: 'Google',
    date: 'January 2025',
    credential: '128994588',
    link: 'https://example.com'
  },
  {
    title: 'Skyscanner - Front-End Software Engineering Job Simulation',
    organization: 'Forage',
    date: 'September 2024',
    credential:'5dHQK5JMXNaWa8MQX',
    link: 'https://example.com'
  },
  {
    title: 'Frontend Developer (React) Certificate',
    organization: 'HackerRank',
    date: 'November 2024',
    credential: 'GCP-PD-2023',
    link: 'https://example.com'
  },
  {
    title: 'Software Engineer Certificate',
    organization: 'HackerRank',
    date: 'November 2024',
    credential: 'GCP-PD-2023',
    link: 'https://example.com'
  }
  
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>
        <div className="max-w-auto mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg shrink-0">
                  <Award className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-purple-600 mb-1">{cert.organization}</p>
                  <p className="text-gray-500 text-sm mb-2">Issued {cert.date}</p>
                  <p className="text-gray-500 text-sm mb-4">Credential ID: {cert.credential}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Verify Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}