import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./Skills";
import aboutImg from "../assets/hero.webp";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 md:px-16 bg-gradient-to-br from-white to-purple-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="relative flex justify-center" data-aos="fade-right">
          <div className="relative w-full max-w-md">
            <div
              className="absolute -inset-4 bg-gradient-to-br from-purple-200 to-purple-100 rounded-2xl rotate-3 -z-10"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
            <img
              src={aboutImg}
              alt="Sadiq Hussain - Frontend Developer"
              className="rounded-2xl shadow-2xl border-4 border-white w-full h-auto object-cover"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <div
              className="absolute -bottom-6 -right-6 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="font-bold">3+ Years</span> Experience
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8" data-aos="fade-left">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              About <span className="text-purple-600">Me</span>
            </h2>
            <div
              className="w-24 h-1.5 bg-purple-400 rounded-full"
              data-aos="slide-right"
              data-aos-delay="200"
            />
          </div>

          <p
            className="text-gray-600 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Hello! I'm{" "}
            <span className="font-semibold text-purple-600">Sadiq Hussain</span>
            , a passionate frontend developer specializing in creating immersive
            digital experiences. With expertise in{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Next.js</span>, and modern
            JavaScript, I bridge the gap between design and technology.
          </p>

          <p
            className="text-gray-600 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            My approach combines{" "}
            <span className="font-semibold">technical precision</span> with{" "}
            <span className="font-semibold">aesthetic sensibility</span>,
            resulting in applications that are both powerful and delightful to
            use. I'm committed to writing clean, maintainable code and crafting
            interfaces that users love.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 pt-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="#contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-block border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
