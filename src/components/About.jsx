import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import aboutImg from "../assets/hero.webp";

const About = () => {
  // Animation variants for consistency
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="about"
      className="min-h-screen py-20 px-6 md:px-16 bg-gradient-to-br from-white to-purple-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Enhanced Image Section */}
        <motion.div 
          className="relative flex justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="relative w-full max-w-md"
            variants={itemVariants}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-br from-purple-200 to-purple-100 rounded-2xl rotate-3 -z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              src={aboutImg}
              alt="Sadiq Hussain - Frontend Developer"
              className="rounded-2xl shadow-2xl border-4 border-white w-full h-auto object-cover"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              whileHover={{ y: -3 }}
            >
              <span className="font-bold">3+ Years</span> Experience
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              About <span className="text-purple-600">Me</span>
            </h2>
            <motion.div 
              className="w-24 h-1.5 bg-purple-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            variants={itemVariants}
          >
            Hello! I'm <span className="font-semibold text-purple-600">Sadiq Hussain</span>, a passionate frontend developer specializing in creating immersive digital experiences. With expertise in <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span>, and modern JavaScript, I bridge the gap between design and technology.
          </motion.p>

          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            variants={itemVariants}
          >
            My approach combines <span className="font-semibold">technical precision</span> with <span className="font-semibold">aesthetic sensibility</span>, resulting in applications that are both powerful and delightful to use. I'm committed to writing clean, maintainable code and crafting interfaces that users love.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href="#contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-block border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <Skills />
    </section>
  );
};

export default About;