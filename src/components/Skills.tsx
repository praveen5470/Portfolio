import React from 'react';
import { motion } from 'framer-motion';
import { FaJava,FaExchangeAlt} from "react-icons/fa";
import { SiReact, SiTypescript, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiJavascript, SiNodedotjs, SiExpress, SiPython, SiDjango, SiFastapi, SiMongodb, SiPostgresql, SiRedis, SiMysql, SiFirebase, SiGit, SiLinux, SiWebpack, SiVite, SiBootstrap, SiRedux, SiMui, SiJsonwebtokens, SiMongoose, SiPostman,SiAwslambda, SiSocketdotio } from "react-icons/si";
import { Layout, Server, Database, Code } from "lucide-react";
// import { Code, Database, Layout, Server, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: "React", icon: <SiReact color="#61DAFB" size={30} /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={30} /> },
      { name: "Next.js", icon: <SiNextdotjs color="#000000" size={30} /> },
      { name: "Vue.js", icon: <SiVuedotjs color="#42B883" size={30} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" size={30} /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={30} /> },
      { name: "BootStrap", icon: <SiBootstrap color="#3B71CA" size={30} /> },
      { name: "Redux", icon: <SiRedux color="#764abc" size={30} /> },
      { name: "Material UI", icon: <SiMui color="#3d5afe" size={30} /> }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs color="#339933" size={30} /> },
      { name: "Express", icon: <SiExpress color="#000000" size={30} /> },
      { name: "Python", icon: <SiPython color="#3776AB" size={30} /> },
      { name: "Django", icon: <SiDjango color="#092E20" size={30} /> },
      { name: "FastAPI", icon: <SiFastapi color="#009688" size={30} /> },
      { name: "JWT", icon: <SiJsonwebtokens color="#E10098" size={30} /> },
      { name: "Rest API", icon: <FaExchangeAlt color="#E10098" size={30} /> },
      { name: "Socket.io", icon: <SiSocketdotio color="#E10098" size={30} /> },
      { name: "Java", icon: <FaJava /> }
    ]
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" size={30} /> }, 
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={30} /> },
      { name: "Redis", icon: <SiRedis color="#D82C20" size={30} /> }, 
      { name: "MySQL", icon: <SiMysql color="#00758F" size={30} /> }, 
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={30} /> }, 
      { name: "Mongoose", icon: <SiMongoose color="#3ECF8E" size={30} /> }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Code,
    skills: [
      { name: "Git", icon: <SiGit color="#F05032" size={30} /> },
      { name: "Postman API", icon: <SiPostman color="#2496ED" size={30} /> },
      { name: "AWS", icon: <SiAwslambda color="#FF9900" size={30} /> },
      { name: "Linux", icon: <SiLinux color="#FCC624" size={30} /> },
      { name: "Webpack", icon: <SiWebpack color="#8DD6F9" size={30} /> },
      { name: "Vite", icon: <SiVite color="#646CFF" size={30} /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <category.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer group"
                  >
                    <span className="text-3xl transform group-hover:rotate-12 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-purple-600 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}