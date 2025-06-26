import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[50vh] px-6 py-16 bg-slate-900 text-slate-100 flex items-center justify-center"
    >
      <div className="max-w-xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-4"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-400 mb-6"
        >
          Have an idea, a project, or want to collaborate? Reach out via
          WhatsApp or any of my socials below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center gap-6 text-2xl text-sky-400"
        >
          <a
            href="https://wa.me/2349135487943?text=Hi%20Mide,---!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mide2671@gmail.com"
            className="hover:text-rose-400 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
