import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes features like user authentication, product management, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/praveen5470/Ecommerce-Website',
    live: 'https://praveen5470.github.io/Ecommerce-Website/',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'Admin dashboard for product management'
    ]
  },
  {
    title: 'AutoCare – Mechanic Shop Management Website',
    description: 'AutoCare is a full-stack web app for mechanic shops, enabling customers to book appointments and manage records seamlessly. Shop owners get a user-friendly dashboard to track appointments and customer interactions.',
    image: 'https://media.istockphoto.com/id/1175888628/photo/woman-repairing-a-car-in-auto-repair-shop.jpg?s=612x612&w=is&k=20&c=bSpILDSy8D1MynkTnYWrjn5Gc-O8gTCLBIhb-3gk83Q=',
    tech: ['React','TypeScript' , 'Tailwand CSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/praveen5470/AutoCare',
    live: 'https://praveen5470.github.io/AutoCare/',
    features: [
      'Intuitive UI for customers and shop owners to navigate easily',
      'Users can book vehicle services with available slots',
      'Shop owners can add, update, or remove services dynamically',
      '(Future Scope) – Plan to integrate online payment for seamless transactions',
      'Fast load times using Vite and efficient API calls'
    ]
  },
  {
    title: 'Netflix - Clone ',
    description: 'Built with React, Firebase, and TMDb API, this project features user authentication, dynamic movie displays, and a personalized "Saved Shows" list, delivering a seamless streaming experience with a sleek, responsive UI.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'TMDB API', 'React Router'],
    github: 'https://github.com/praveen5470/Netflix-React',
    live: 'https://praveen5470.github.io/Netflix-React/',
    features: [
      'Secure sign-up and login using Firebase Authentication.',
      'Fetches real-time movie data from TMDb API for trending, popular, and top-rated categories.',
      'Users can save their favorite shows and movies using Firebase Firestore',
      'Implemented React Router for seamless page transitions and browsing',
      'Fetching and displaying movie details dynamically with error handling.'
    ]
  },
  {
    title: 'Real-time Chat Application',
    description: 'A modern chat application that enables real-time communication between users. Built with React and Socket.io for real-time functionality.',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1',
    tech: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    features: [
      'Real-time messaging with Socket.io',
      'User presence indicators',
      'Message history and search',
      'File sharing capabilities',
      'Responsive design for mobile devices'
    ]
  },
  {
    title: 'Realtime Weather Website',
    description: 'A Weather App that fetches real-time data from OpenWeatherMap, allowing for effortless weather checks anytime, anywhere.',
    image: 'https://t4.ftcdn.net/jpg/04/58/53/69/360_F_458536967_Zd72cRsHPlQKTvZbbw8wlncqqIaeFdO7.jpg',
    tech: ['React', 'Vite', 'OpenWeatherMap API', 'Tailwand CSS'],
    github: 'https://github.com/praveen5470/Weather-App',
    live: 'https://praveen5470.github.io/Weather-App/',
    features: [
      'Leveraged React & Vite for a fast and optimized web application, ensuring a smooth, responsive user experience',
      'Integrated the OpenWeatherMap API for accurate, real-time weather updates',
      'Implemented Responsive Design to guarantee seamless functionality across both mobile and desktop platforms'
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                <div className="relative group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-lg transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                </div>
              </div>
              <div className={index % 2 === 0 ? '' : 'md:order-1'}>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Code size={20} className="text-purple-600 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
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