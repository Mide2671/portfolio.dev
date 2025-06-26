import { motion } from "framer-motion";
import { FaCode, FaServer, FaPaintBrush } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 bg-slate-900 text-slate-100 flex items-center justify-center"
    >
      <div className="max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto"
        >
          I'm a passionate full-stack developer with a strong foundation in both
          frontend and backend development. I specialize in building modern,
          responsive websites and web apps using React, Node.js, MySQL, MongoDB,
          and more. I love turning ideas into real products that solve problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-8"
        >
          <div className="flex flex-col items-center">
            <FaCode className="text-4xl text-sky-400 mb-2" />
            <h4 className="text-xl font-semibold">Frontend</h4>
            <p className="text-slate-400 text-sm">
              React, Tailwind, Vite, Framer Motion
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaServer className="text-4xl text-sky-400 mb-2" />
            <h4 className="text-xl font-semibold">Backend</h4>
            <p className="text-slate-400 text-sm">
              Node.js, Express, MySQL, MongoDB
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaPaintBrush className="text-4xl text-sky-400 mb-2" />
            <h4 className="text-xl font-semibold">Design</h4>
            <p className="text-slate-400 text-sm">Figma, UI/UX, Animations</p>
          </div>

          <div className="flex flex-col items-center">
            <FaCode className="text-4xl text-sky-400 mb-2" />
            <h4 className="text-xl font-semibold">Blockchain</h4>
            <p className="text-slate-400 text-sm">
              Solidity, MetaMask, Ethers.js
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
