import { motion } from "framer-motion";

export default function OpenSource() {
  return (
    <section id="opensource" className="py-16 px-4 ">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Open Source Contributions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Frontend-Mini-Challanges
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Software Developer (March 2024)
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Added Memory Game</li>
            <li>
              Migrated existing animations to <strong>Framer Motion</strong>.
            </li>
            <li>
              Toggle <strong>Dark/Light theme</strong>.
            </li>
            <li>
              Link:
              <a
                href="https://sadanandpai.github.io/frontend-mini-challenges//"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {" "}
                Frontend Mini Challanges
              </a>
              ,
              <a
                href="https://github.com/sadanandpai/frontend-mini-challenges/issues?q=is%3Apr%20author%3A%40me"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {" "}
                PR{`'`}s merged
              </a>
              .
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
