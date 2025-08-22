import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { IoMdDownload } from "react-icons/io";
import Image from '../assets/navimahe.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 300 && window.scrollY < sectionTop + sectionHeight - 300) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
    setIsOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        mass: 0.5
      }}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled ? "bg-[#EBF3FE] shadow-md backdrop-blur-sm" : "bg-[#EBF3FE]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              to="home" 
              spy={true}
              smooth={true}
              duration={500}
              className="text-purple-700 font-extrabold text-2xl hover:text-purple-800 transition-colors cursor-pointer"
              aria-label="Home"
            >
              <motion.span
                whileHover={{ 
                  // rotate: [0, -5, 5, -3, 3, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <img src={Image} className="h-19 w-25" alt="" />
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-1"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <ul className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 500 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    activeClass="text-purple-700 before:scale-x-100"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={handleSetActive}
                    className={`relative px-3 py-2 font-medium transition-colors text-gray-700 hover:text-purple-600
                      before:content-[''] before:absolute before:-bottom-1 before:left-3 before:right-3 before:h-[2px] 
                      before:bg-purple-600 before:scale-x-0 before:origin-center before:transition-transform before:duration-300
                      hover:before:scale-x-100 cursor-pointer ${
                        activeSection === item.to ? "text-purple-700 before:scale-x-100" : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="ml-6"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 500 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="/Sadiq-Resume.pdf"
                download="Sadiq-Hussain-Resume.pdf"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-2.5 rounded-lg font-medium 
                hover:from-purple-700 hover:to-purple-800 transition-all flex items-center gap-2 shadow-lg"
                whileHover={{ 
                  y: -2,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { 
                      repeat: Infinity, 
                      duration: 1.8,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <IoMdDownload />
                </motion.span>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Mobile Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            whileHover={{ 
              scale: 1.1,
              rotate: isOpen ? 0 : 5
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-current" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-current" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden bg-white shadow-xl"
          >
            <motion.div 
              className="px-4 pt-2 pb-6 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.15 }
              }}
              exit={{ opacity: 0 }}
            >
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: { 
                        delay: 0.05 * index,
                        type: "spring",
                        stiffness: 150
                      }
                    }}
                    exit={{ x: -30, opacity: 0 }}
                  >
                    <Link
                      activeClass="bg-purple-50 text-purple-700"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onSetActive={handleSetActive}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                        activeSection === item.to
                          ? "bg-purple-50 text-purple-700"
                          : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="/Sadiq-Resume.pdf"
                download="Sadiq-Hussain-Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-3 
                rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg mt-2"
                whileHover={{ 
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3 }
                }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;