import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you are using Next.js

const projects = [
  {
    title: "PistonParts",
    description:
      "An e-commerce store where you will get every single automobile spare parts like wires and all in one place.",
    liveLink: "https://piston-parts-ecommerce.vercel.app/",
    githubLink: "https://github.com/Dev-AkshatGupta/Piston-Parts-Ecommerce",
    image: "/pistonParts.webp",
  },
  {
    title: "PistonHead",
    description:
      "Its an video-library app just like youtube. it contains features like create playlist of videos, like or dislike videos, share video, add to watchlater ,play history and much more.",
    liveLink: "https://piston-head.vercel.app/",
    githubLink: "https://github.com/Dev-AkshatGupta/piston-head",
    image: "/pistonHead.webp",
  },
  {
    title: "PistonAdda",
    description:
      "A social media app that helps in connecting people, Sharing thoughts inspired by Twitter.",
    liveLink: "https://piston-adda.vercel.app/",
    githubLink: "https://github.com/Dev-AkshatGupta/piston-adda",
    image: "/pistonAdda.webp",
  },
  {
    title: "Prabhand",
    description:
      "A hackathon project developed by me and other two devs in 24 hrs for managing electric charging stations and cng stations since they have multiple cars at same time.",
    liveLink: "https://prabhandh.vercel.app/",
    githubLink: "https://github.com/Dev-AkshatGupta/prabhandh",
    image: "/prabhandh.webp",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center space-y-4"
            >
              <div className="w-full flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4"
                  width={500}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4 mb-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
