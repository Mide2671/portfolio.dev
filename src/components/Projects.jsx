import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Event Management Website",
    description:
      "A multi-page responsive site for an event planner with booking features.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "#",
    code: "#",
  },
  {
    id: 2,
    title: "Model & Content Creator Portfolio",
    description:
      "A single-page portfolio for a creative artist to showcase her brand.",
    tech: ["React", "Tailwind", "Vite"],
    live: "#",
    code: "#",
  },
  {
    id: 3,
    title: "Cliton Logistics Website",
    description:
      "A professional website for selling asphalt and road construction materials.",
    tech: ["React", "Tailwind", "Node.js"],
    live: "#",
    code: "#",
  },
  {
    id: 4,
    title: "Clothing Brand Website",
    description:
      "Modern online storefront for a unisex fashion brand with clean design.",
    tech: ["React", "Tailwind", "React Router"],
    live: "#",
    code: "#",
  },
  {
    id: 5,
    title: "Web3 Fund Me DApp",
    description:
      "A decentralized funding app using Solidity and MetaMask for send/withdraw.",
    tech: ["Solidity", "React", "Ether.js", "MetaMask"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-slate-900 text-slate-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-10"
        >
          My Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700"
            >
              <h3 className="text-xl font-bold text-sky-300 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-sky-400 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-sky-900 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-1 text-sky-400 hover:underline"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-1 text-sky-400 hover:underline"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
