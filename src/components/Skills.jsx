import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "🔹", value: 99, color: "from-orange-500 to-orange-600" },
  { name: "CSS3", icon: "🔹", value: 99, color: "from-blue-500 to-blue-600" },
  { name: "Bootstrap", icon: "🔹", value: 100, color: "from-purple-500 to-purple-600" },
  { name: "Tailwind CSS", icon: "🔹", value: 100, color: "from-cyan-400 to-cyan-500" },
  { name: "JavaScript", icon: "🔹", value: 99, color: "from-yellow-400 to-yellow-500" },
  { name: "React.js + Redux", icon: "🔹", value: 98, color: "from-blue-400 to-blue-500" },
  { name: "Git/GitHub", icon: "🔹", value: 85, color: "from-gray-600 to-gray-700" },
];

const profSkills = [
  { name: "Creativity", icon: "💡", value: 90 },
  { name: "Problem Solving", icon: "🧩", value: 90 },
  { name: "Communication", icon: "🗣️", value: 90 },
  { name: "Teamwork", icon: "👥", value: 97 },
];

const SkillBar = ({ name, value, delay = 0, color, icon }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-6 group"
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <span className="mr-2 text-lg">{icon}</span>
        <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
          {name}
        </span>
      </div>
      <span className="text-xs font-semibold px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
        {value}%
      </span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${color} shadow-inner`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1, delay: delay + 0.2, type: "spring" }}
        viewport={{ once: true, margin: "-100px" }}
      />
    </div>
  </motion.div>
);

const CircularSkill = ({ name, value, delay = 0, icon }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center group"
      whileHover={{ y: -5 }}
    >
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="6"
            fill="transparent"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke="url(#grad1)"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay: delay + 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl mb-1">{icon}</span>
          <span className="text-xs font-bold text-purple-600">{value}%</span>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="skills"
      className="w-full py-24 bg-gradient-to-b from-purple-50 to-white"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
          >
            My <span className="text-purple-600">Skillset</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-1.5 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full w-20"
          />
        </div>

        {/* Skills Container */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-purple-100"
          whileHover={{ y: -5 }}
        >
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12">
            {/* Technical Skills */}
            <div>
              <motion.div
                variants={itemVariants}
                className="flex items-center mb-8"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-600">💻</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Technical Expertise</h3>
              </motion.div>
              
              {skills.map((skill, i) => (
                <SkillBar
                  key={i}
                  name={skill.name}
                  value={skill.value}
                  color={skill.color}
                  icon={skill.icon}
                  delay={i * 0.1}
                />
              ))}
            </div>

            {/* Professional Skills */}
            <div>
              <motion.div
                variants={itemVariants}
                className="flex items-center mb-8"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-600">🌟</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Professional Skills</h3>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-8">
                {profSkills.map((skill, i) => (
                  <CircularSkill
                    key={i}
                    name={skill.name}
                    value={skill.value}
                    icon={skill.icon}
                    delay={i * 0.1 + 0.2}
                  />
                ))}
              </div>
              
              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="mt-10 p-4 bg-purple-50 rounded-lg border border-purple-200"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm text-gray-700 text-center">
                  "Combining technical precision with creative problem-solving to deliver exceptional results."
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}