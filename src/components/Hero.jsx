import { motion } from "framer-motion";
import { Link } from "react-scroll";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-slate-900 text-slate-100"
    >
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-sky-400"
        >
          Hello, I'm Adebisi Muhammed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-slate-400"
        >
          A Full-Stack Developer crafting elegant, fast, and responsive web
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="/M. A. Adebisi CV^w.pdf"
            download
            className="px-6 py-2 border border-sky-400 text-sky-400 rounded-xl font-semibold hover:bg-sky-400 hover:text-slate-900 transition"
          >
            Download CV
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-60}
            className="px-6 py-2 border border-sky-400 text-sky-400 rounded-xl font-semibold hover:bg-sky-400 hover:text-slate-900 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
