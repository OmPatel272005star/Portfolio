import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiCplusplus, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiGit, SiPostman } from 'react-icons/si';
import { FaJava, FaDatabase, FaBrain } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: FaJava, color: '#f89820' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' }
      ]
    },
    {
      title: 'Tools & DB',
      skills: [
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Git', icon: SiGit, color: '#F05032' }
      ]
    },
    {
      title: 'Concepts',
      skills: [
        { name: 'DSA', icon: FaBrain, color: '#A78BFA' },
        { name: 'DBMS', icon: FaDatabase, color: '#60A5FA' },
        { name: 'OOPS', icon: FaBrain, color: '#F472B6' },
        { name: 'OS', icon: FaBrain, color: '#34D399' }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold text-center mb-16"
      >
        Skills
      </motion.h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-300"
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(24, 24, 27, 0.9)"
            }}
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-400 group-hover:text-blue-300 transition-colors">
              {category.title}
            </h3>
            <div className="space-y-6">
              {category.skills.map((skill, j) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 + j * 0.05 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer group/skill"
                    whileHover={{ x: 8 }}
                  >
                    <div 
                      className="p-2 rounded-lg transition-all duration-300 group-hover/skill:scale-110"
                      style={{ 
                        backgroundColor: `${skill.color}20`,
                        border: `2px solid ${skill.color}40`
                      }}
                    >
                      <Icon size={28} style={{ color: skill.color }} />
                    </div>
                    <span className="text-base font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;