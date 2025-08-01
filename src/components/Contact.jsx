import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiMapPin, FiPhone, FiMail, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const containerRef = useRef();
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_oxb3yaf",
        "template_gxbl5op",
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "etFC8F_Dplpk67trz",
        }
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsLoading(false));
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 bg-gradient-to-br from-white via-purple-50 to-purple-100 overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl"
          initial={{ x: -100, y: -100 }}
          animate={isInView ? { x: 0, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 opacity-10 rounded-full blur-3xl"
          initial={{ x: 100, y: 100 }}
          animate={isInView ? { x: 0, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with staggered animation */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.span
            className="inline-block text-sm font-semibold text-purple-600 mb-3 tracking-widest uppercase"
            variants={itemVariants}
            custom={0}
          >
            Get In Touch
          </motion.span>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5"
            variants={itemVariants}
            custom={1}
          >
            Let's <span className="text-purple-600">Connect</span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"
            variants={{
              hidden: { scaleX: 0, originX: 0 },
              visible: { 
                scaleX: 1,
                transition: { delay: 0.6, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }
            }}
          />
          
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto mt-8"
            variants={itemVariants}
            custom={2}
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact information card */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-6">
              {[
                { icon: <FiMapPin />, title: "Location", content: "Lahore, Pakistan" },
                { icon: <FiMail />, title: "Email", content: "sa7434542@gmail.com", link: "mailto:sa7434542@gmail.com" },
                { icon: <FiPhone />, title: "Phone", content: "+92 3203036988", link: "tel:+92307434542" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  custom={0.3 + index * 0.1}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-5 h-5 text-purple-600">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-700 hover:text-purple-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map with fade-in animation */}
            <motion.div
              className="mt-10 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <iframe
                title="Lahore Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore!5e0!3m2!1sen!2s!4v1753862233619!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Contact form card */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ delay: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Send Me a Message
            </motion.h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", name: "name", type: "text", label: "Your Name", placeholder: "Sadiq Hussain", value: formData.name },
                { id: "email", name: "email", type: "email", label: "Email Address", placeholder: "sa7434542@gmail.com", value: formData.email },
                { id: "message", name: "message", type: "textarea", label: "Your Message", placeholder: "How can I help you?", value: formData.message }
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  custom={0.4 + index * 0.1}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      rows="5"
                      placeholder={field.placeholder}
                      required
                      value={field.value}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={field.value}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  )}
                </motion.div>
              ))}

              <motion.div
                className="pt-2"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
                custom={0.7}
              >
                <button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-all ${
                    isLoading || isSubmitted
                      ? "bg-purple-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FiCheckCircle className="mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>
            </form>

            {/* Success message animation */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center"
                >
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Your message has been sent successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;