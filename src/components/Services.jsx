import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MonitorSmartphone, 
  Code, 
  Brush, 
  Rocket, 
  GitBranch, 
  MousePointerClick 
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Responsive Web Design",
      description: "Pixel-perfect designs that adapt seamlessly across all devices and screen sizes.",
      icon: MonitorSmartphone,
      color: "from-blue-500 to-blue-600",
      details: "I use modern CSS frameworks (Tailwind, Chakra, etc.) and responsive patterns to ensure consistent UX across mobile, tablet, and desktop."
    },
    {
      title: "Frontend Development",
      description: "High-performance React applications with clean, maintainable architecture.",
      icon: Code,
      color: "from-purple-500 to-purple-600",
      details: "Strong focus on reusable components, state management (Redux/Zustand), and performance optimizations for enterprise-ready apps."
    },
    {
      title: "UI/UX Animation",
      description: "Engaging micro-interactions and smooth transitions for delightful user experiences.",
      icon: MousePointerClick,
      color: "from-pink-500 to-pink-600",
      details: "Animations with Framer Motion & Lottie to create smooth interactions that improve usability and engagement."
    },
    {
      title: "Design to Code",
      description: "Precision conversion of Figma/XD designs to production-ready code.",
      icon: Brush,
      color: "from-orange-500 to-orange-600",
      details: "I ensure pixel-perfect implementation of Figma/XD designs into semantic, responsive, and accessible code."
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast load times through advanced optimization techniques.",
      icon: Rocket,
      color: "from-red-500 to-red-600",
      details: "Techniques include code-splitting, lazy-loading, image optimization, and Lighthouse audits for top Core Web Vitals."
    },
    {
      title: "Version Control",
      description: "Professional Git workflows for efficient team collaboration.",
      icon: GitBranch,
      color: "from-gray-600 to-gray-700",
      details: "Expert in GitFlow, PR reviews, branching strategies, and CI/CD pipelines to streamline development."
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="services" className="relative py-24 px-6 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p 
            className="text-sm font-semibold text-purple-600 mb-3 tracking-widest uppercase"
            variants={item}
          >
            My Expertise
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
            variants={item}
          >
           <span className="text-purple-600">Services</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"
            variants={item}
          />
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto mt-8"
            variants={item}
          >
            Premium solutions tailored to elevate your digital presence and user experience.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                custom={index}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-purple-50 to-purple-100 -z-10" />
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.color} text-white shadow-md`}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                {/* Learn more link */}
                <motion.button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-purple-600 font-medium text-sm"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
     <AnimatePresence>
  {selectedService && (
    <motion.div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border border-gray-100"
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedService(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon + Title */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${selectedService.color} text-white shadow-md`}
          >
            <selectedService.icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">
            {selectedService.title}
          </h3>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-6" />

        {/* Details */}
        <p className="text-gray-600 leading-relaxed">
          {selectedService.details}
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default Services;
