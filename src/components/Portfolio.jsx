import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import dashboard from '../assets/dashboard.png'
import Akoyaimg from '../assets/Akoya Lundary.png'
import personalportfolio from '../assets/portfolio.png'
import chatbot from '../assets/chatbot.png'
import weatherapp from '../assets/weatherapp.png'
import alkhaldi from "../assets/Al Khaldi.png"
import zoo from "../assets/zoo.png"
import quran from "../assets/quran.png"
import school from "../assets/school.png"
const projects = [
  {
    title: "Akoya Laundry Website",
    description: "Responsive shopping interface with cart, product filters, and modern UI built using React & Tailwind CSS.",
    image: Akoyaimg,
    link: "https://akoya-lundary.vercel.app/",
    github: "https://github.com/Student-In-IUB",
    tags: ["React", "Tailwind CSS", "Context API"]
  },
  {
    title: "Personal Portfolio",
    description: "Animated and interactive personal portfolio built with React, Tailwind CSS, Framer Motion, and GSAP.",
    image: personalportfolio,
    link: "http://portfolio-website-517h.vercel.app",
    github: "https://github.com/Student-In-IUB",
    tags: ["React", "Framer Motion", "GSAP"]
  },
  {
    title: "Dashboard",
    description: "Modern admin dashboard with charts, tables, and dark mode support using React & Chart.js.",
    image: dashboard,
    link: "https://intern-first.vercel.app/dashboard",
    github: "https://github.com/Student-In-IUB",
    tags: ["React", "Chart.js", "Dark Mode"]
  },
{
    title: "Weather App",
    description: "A responsive weather application that fetches real-time weather data, shows temperature, humidity, and forecast using a clean UI.",
    image:weatherapp ,
    link: "https://weather-app-five-lyart-59.vercel.app/",
    github: "https://github.com/Student-In-IUB",
    tags: ["HTML5", "Tailwind CSS", "React", "API"]
  },
  {
    title: "Al Khaldi",
    description: "Discover the story behind AL KHALDI Law Firm, our distinguished founder's journey, and our unwavering commitment to excellence in legal services across Qatar and beyond.",
    image:alkhaldi,
    link: "https://lawyer-pi-three.vercel.app/",
    github: "https://github.com/Student-In-IUB",
    tags: ["React", "API Integration", "UI/UX"]
  },
  {
    title: "Chatbot",
    description: "AI-powered chatbot with live data integration, responsive design, and interactive chat UI.",
    image: chatbot,
    link: "https://chat-bot-orcin-ten.vercel.app/",
    github: "https://github.com/Student-In-IUB",
    tags: ["React", "APIs", "Chat UI"]
  },
  {
    title: "City Zoo",
    description: "Zoofari Park at CityZoo offers a place for visitors of all ages to connect with nature and wildlife. ",
    image:zoo,
    link: "https://zoo-drab.vercel.app/",
    github: "https://github.com/Student-In-IUB",
    tags: ["React", "APIs", "Chat UI"]
  },
  {
    title: "Online Quran Acadmy",
    description: "At Quran Learn Academy, we strive to enlighten Muslims with the teachings of the Holy Quran, guiding lives according to the principles of Islam. ",
    image:quran,
    link: "https://online-quran-rho.vercel.app/",
    github: "https://github.com/Student-In-IUB",
    tags: ["React", "APIs", "Chat UI"]
  },
  {
    title: "Online Quran Acadmy",
    description: "At Quran Learn Academy, we strive to enlighten Muslims with the teachings of the Holy Quran, guiding lives according to the principles of Islam. ",
    image:school,
    link: "https://school-management-system-lime-six.vercel.app/",
    github: "https://github.com/Student-In-IUB",
    tags: ["React", "APIs", "Chat UI"]
  },
];


const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden min-h-screen py-24 px-6 bg-gradient-to-br from-white via-purple-50 to-purple-100"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-sm font-semibold text-purple-600 mb-3 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My Work
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Featured <span className="text-purple-600">Projects</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            A curated collection of my best work showcasing innovative solutions and clean implementations.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Image container */}
              <div className="relative overflow-hidden h-60">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 bg-purple-600/90 text-white rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            View More Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;