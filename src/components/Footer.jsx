import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      platform: 'instagram',
      url: 'https://www.instagram.com/sadiqaliashiq?igsh=enlweDd6a2p2eWl6',
      icon: FaInstagram
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/sadiq-hussain-9a85a2334/',
      icon: FaLinkedin
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/sadiqaliashiq',
      icon: FaTwitter
    },
    {
      platform: 'github',
      url: 'https://github.com/sadiqhussain',
      icon: FaGithub
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer  style ={{ background: "linear-gradient(135deg, #ffffff 0%, #f3e8ff 25%, #e9d5ff 50%, #f3e8ff 75%, #ffffff 100%)"}} className=" text-gray-700 border-t border-purple-200 px-6 md:px-16 pt-20 pb-12 font-[Inter,sans-serif]">
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-200"
        initial="hidden"
        whileInView="visible"
        variants={footerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* About */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold text-purple-700 mb-6 flex items-center">
            <span className="w-8 h-1 bg-purple-500 mr-3"></span>
            About Me
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 mb-4">
            Passionate frontend developer specializing in React, Tailwind CSS, and modern web animations. 
            I create responsive, accessible, and visually stunning digital experiences.
          </p>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
              React
            </span>
            <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
              Tailwind
            </span>
            <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
              Framer Motion
            </span>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold text-purple-700 mb-6 flex items-center">
            <span className="w-8 h-1 bg-purple-500 mr-3"></span>
            Quick Links
          </h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300 group"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold text-purple-700 mb-6 flex items-center">
            <span className="w-8 h-1 bg-purple-500 mr-3"></span>
            Services
          </h3>
          <ul className="space-y-3">
            {[
              'Responsive Web Design',
              'React Development',
              'UI/UX Implementation',
              'Performance Optimization',
              'Interactive Animations'
            ].map((service) => (
              <motion.li 
                key={service}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300 group"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold text-purple-700 mb-6 flex items-center">
            <span className="w-8 h-1 bg-purple-500 mr-3"></span>
            Contact
          </h3>
          <ul className="space-y-4">
            <motion.li 
              className="flex items-start"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="text-purple-500 text-lg mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-600">Lahore, Pakistan</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhoneAlt className="text-purple-500 text-lg mt-1 mr-3 flex-shrink-0" />
              <a
                href="tel:+923203036988"
                className="text-gray-600 hover:text-purple-600 hover:underline transition-colors"
              >
                +92 320 3036988
              </a>
            </motion.li>
            <motion.li 
              className="flex items-start"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="text-purple-500 text-lg mt-1 mr-3 flex-shrink-0" />
              <a
                href="mailto:sa4734542@gmail.com"
                className="text-gray-600 hover:text-purple-600 hover:underline transition-colors"
              >
                sa4734542@gmail.com
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Social + Copyright */}
      <motion.div 
        className="max-w-7xl mx-auto pt-12 flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map(({ platform, url, icon: Icon }) => (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow me on ${platform}`}
              className="group relative"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-purple-700 group-hover:text-white transition-colors duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
                <Icon className="relative z-10 text-xl" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} <span className="text-purple-700 font-semibold">Sadiq Hussain</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;