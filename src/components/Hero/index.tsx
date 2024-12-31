"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center">
      {/* Content */}
      <div className="container relative z-10 text-center px-6 py-16 max-w-4xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-white leading-tight"
        >
          Empowering Your Growth
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          Excel effortlessly with no-code solutions, tailored to enhance your skills and achieve your goals.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdc0yu_nJD2ExKYHAR8gE5dWE2fNZRjYt5zIzIxRdGSLmAB9g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
          >
            Register Now
          </a>
          <button 
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full text-lg font-medium hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
