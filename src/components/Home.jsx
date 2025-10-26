import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import heroImg from "../assets/My-image.png";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      },
    },
  };

  // Background animation
  const backgroundVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: "100% 50%",
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <>
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden relative"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f3e8ff 25%, #e9d5ff 50%, #f3e8ff 75%, #ffffff 100%)",
          backgroundSize: "400% 400%",
        }}
      >
        {/* Animated floating circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-100 opacity-20"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          {/* Text Content */}
          <motion.div 
            className="space-y-8 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Enhanced Heading */}
           <motion.div variants={itemVariants}>
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
    Hi, I'm{" "}
    <span className="text-purple-600 relative inline-block">
      {/* Animated letters */}
      <span className="inline-block">
        {["S", "a", "d", "i", "q"].map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              delay: i * 0.1 + 0.4, // stagger after underline starts
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </span>

      {/* Underline grow animation */}
      <motion.span
        className="absolute -bottom-2 left-0 w-full h-1 bg-purple-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </span>
  </h1>
</motion.div>


            {/* Typewriter Effect */}
            <motion.div 
              className="min-h-[3rem]"
              variants={itemVariants}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700">
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Web Developer",
                      "React Specialist",
                      "UI/UX Engineer",
                      "JavaScript Expert",
                      "Pro Developer",
                      "Consultant"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 30,
                    wrapperClassName: "text-purple-600 font-semibold",
                    cursorClassName: "text-purple-600"
                  }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              I craft <span className="font-semibold text-purple-600">high-performance web applications</span> with 
              pixel-perfect UIs. Specializing in <span className="font-semibold">React</span>, 
              <span className="font-semibold"> Next.js</span>, and modern JavaScript, I transform complex 
              requirements into elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 text-center relative overflow-hidden group"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Hire Me</span>
                <motion.span 
                  className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#portfolio"
                className="inline-block border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 text-center"
                whileHover={{ 
                  y: -3,
                  backgroundColor: "rgba(233, 213, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full flex justify-center md:justify-end relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-purple-300 shadow-xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.img
                  src={heroImg}
                  alt="Sadiq - Web Developer"
                  className="w-full h-full object-fill"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.8,
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <span className="font-bold">5Year + </span> Experience
              </motion.div>
              <motion.div
                className="absolute -top-4 -left-4 bg-white text-purple-600 px-3 py-1 rounded-full shadow-md text-sm font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                Available
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;