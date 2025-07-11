import { motion } from "framer-motion";
import { socialLinks } from "../app/constants";
import { icons, SkillIconType } from "./icons";

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Akshat Gupta
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            FrontEnd Software Engineer II
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Based in Delhi NCR, I specialize in Frontend development with
            expertise in React, Micro Frontend Architecture(MFE), and frontend
            technologies. Currently working at Synchrony Financials as Frontend
            SDE-2, focusing on building scalable financial solutions.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
            {icons.Email}
            <a
              href="mailto:youremail@example.com"
              className="text-lg text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              guptaakshat105@gmail.com
            </a>
            {icons.Phone}
            <span className="text-lg text-gray-500 dark:text-gray-300">
              +91 9079332973
            </span>
          </div>
          <div className="flex space-x-4 items-center">
            {socialLinks.map((link) => {
              const icon = icons[link.label as SkillIconType];

              return (
                <motion.a
                  key={link.label}
                  whileHover={{ scale: 1.1 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {icon}
                </motion.a>
              );
            })}
            <div className="flex space-x-4">
              <motion.a
                href="https://drive.google.com/file/d/1hZWSmm7U9ojIO_bCEWzvhHZIOvicIqyo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-100 px-4 py-2 rounded shadow hover:text-gray-700 dark:hover:text-gray-300 transition-colors outline-none focus:outline-none border-2 border-gray-900 dark:border-gray-100"
                aria-label="Download Resume"
                whileHover={{ scale: 1.05 }}
              >
                View Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
