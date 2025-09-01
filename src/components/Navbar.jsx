import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { IoMdDownload } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../assets/navimahe.png";

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

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
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
        if (
          window.scrollY >= sectionTop - 300 &&
          window.scrollY < sectionTop + sectionHeight - 300
        ) {
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
    <header
      data-aos="fade-down"
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-[#F0F6FF] shadow-lg backdrop-blur-md"
          : "bg-gradient-to-r from-[#F0F6FF] to-[#F0F6FF]"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="cursor-pointer" data-aos="zoom-in">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <img
                src={Image}
                alt="Logo"
                className="max-h-12 w-auto object-contain sm:max-h-14 md:max-h-16 "
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  data-aos="fade-down"
                  data-aos-delay={index * 100}
                >
                  <Link
                    activeClass="text-purple-700 before:scale-x-100 after:scale-x-100"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={handleSetActive}
                    className={`relative px-3 py-2 font-medium transition-all duration-300 text-gray-700 hover:text-purple-600
                      before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-full before:h-[2px] 
                      before:bg-gradient-to-r before:from-purple-500 before:to-blue-400 before:scale-x-0 
                      before:origin-left before:transition-transform before:duration-300
                      
                      after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[2px] 
                      after:bg-gradient-to-r after:from-purple-500 after:to-blue-400 after:scale-x-0 
                      after:origin-right after:transition-transform after:duration-300
                      
                      hover:before:scale-x-100 hover:after:scale-x-100 cursor-pointer ${
                        activeSection === item.to
                          ? "text-purple-700 font-semibold before:scale-x-100 after:scale-x-100"
                          : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-6" data-aos="zoom-in" data-aos-delay="500">
              <a
                href="/Sadiq-Resume.pdf"
                download="Sadiq-Hussain-Resume.pdf"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-xl font-medium 
                hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <IoMdDownload size={18} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X size={24} className="text-current" />
            ) : (
              <Menu size={24} className="text-current" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="md:hidden bg-white/95 shadow-2xl backdrop-blur-lg rounded-b-2xl"
          data-aos="fade-down"
        >
          <div className="px-4 pt-3 pb-6 space-y-3">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
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
                        ? "bg-purple-50 text-purple-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/Sadiq-Resume.pdf"
              download="Sadiq-Hussain-Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 
              rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg mt-3"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
